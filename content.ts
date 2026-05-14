import type { PlasmoCSConfig } from "plasmo";
import { sendToBackground } from "@plasmohq/messaging";

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true,
  run_at: "document_end",
};

try {
  let hasForwarded = false;

  const forwardImageToViewer = () => {
    if (hasForwarded) {
      return;
    }

    const img = document.body?.querySelector("img");
    const src = img?.currentSrc || img?.getAttribute("src");
    if (!src) {
      return;
    }

    hasForwarded = true;
    sendToBackground({
      name: "openImageInNewTab" as never,
      body: {
        src,
      },
    });
  };

  const isNewImageTabChromium = () => {
    if (!document.body) {
      return false;
    }

    const images = document.body.querySelectorAll("img");
    if (images.length !== 1) {
      return false;
    }

    // Chromium image documents usually contain only the image node and no app UI.
    const hasSingleElementChild = document.body.children.length === 1;
    const bodyHasNoText = (document.body.textContent || "").trim().length === 0;

    return hasSingleElementChild && bodyHasNoText;
  };

  const isNewImageTabFirefox = () => {
    // TODO: Implement this for Firefox
    return false;

    // // is body only has one child and it is image
    // const hasSingleImageChild =
    //   document.body.children.length === 1 &&
    //   document.body.children[0]?.tagName === "IMG";
    // // is image has shrinkToFit class
    // const hasShrinkToFitClass =
    //   document.body.children[0]?.classList.contains("shrinkToFit");
    // // head has "resource://content-accessible/ImageDocument.css" stylesheet
    // const hasImageDocumentStylesheet = Array.from(document.styleSheets).some(
    //   (styleSheet) =>
    //     styleSheet.href?.includes(
    //       "resource://content-accessible/ImageDocument.css"
    //     )
    // );

    // return (
    //   hasSingleImageChild && hasShrinkToFitClass && hasImageDocumentStylesheet
    // );
  };

  const tryInterceptImageTab = () => {
    if (isNewImageTabChromium() || isNewImageTabFirefox()) {
      forwardImageToViewer();
    }
  };

  // Try immediately when script runs.
  tryInterceptImageTab();

  // Image documents can finalize structure slightly after document_end.
  const observer = new MutationObserver(() => {
    tryInterceptImageTab();
    if (hasForwarded) {
      observer.disconnect();
    }
  });

  if (document.documentElement) {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  window.addEventListener(
    "load",
    () => {
      tryInterceptImageTab();
      if (hasForwarded) {
        observer.disconnect();
      }
    },
    { once: true }
  );
} catch (error) {
  console.error("An error occurred:", error);
}
