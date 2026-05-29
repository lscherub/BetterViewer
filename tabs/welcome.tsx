import BetterViewerLogo from "~components/BetterViewerLogo";
import "./welcome.css";

const SAMPLE_IMAGE_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4MCIgaGVpZ2h0PSI5NjAiIHZpZXdCb3g9IjAgMCAxMjgwIDk2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTI4MCIgaGVpZ2h0PSI5NjAiIGZpbGw9IiMwODExMUYiLz48Y2lyY2xlIGN4PSI0MjAiIGN5PSIzNjAiIHI9IjE5MCIgZmlsbD0iIzU0QTZCMiIvPjxjaXJjbGUgY3g9Ijc5MCIgY3k9IjUxMCIgcj0iMjMwIiBmaWxsPSIjNjNBRjdGIiBmaWxsLW9wYWNpdHk9IjAuODUiLz48cGF0aCBkPSJNMCA3MjBMMjEwIDU2MEw0MDAgNzAwTDY0MCA0NjBMMTAyMCA4MDBMMTI4MCA2MzBWOTYwSDBWNzIwWiIgZmlsbD0iI0VFRjRGRiIgZmlsbC1vcGFjaXR5PSIwLjkiLz48dGV4dCB4PSI2NDAiIHk9IjE1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI0VFRjRGRiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjY0IiBmb250LXdlaWdodD0iNzAwIj5PcGVuSW1hZ2UgVmlld2VyPC90ZXh0Pjwvc3ZnPg==";

const openViewerDemo = () => {
  const viewerUrl = `${chrome.runtime.getURL(
    "tabs/ImageViewer.html"
  )}?url=${encodeURIComponent(SAMPLE_IMAGE_URL)}`;
  chrome.tabs.create({ url: viewerUrl });
};

const closeWelcomePage = () => {
  window.close();
};

function WelcomePage() {
  return (
    <main className="welcome-page">
      <div className="welcome-grid">
        <section className="welcome-content" aria-label="Welcome to OpenImage Viewer">
          <div className="welcome-copy">
            <BetterViewerLogo className="welcome-logo" aria-hidden="true" />
            <div className="welcome-kicker">OpenImage Viewer is ready</div>
            <h1>Thanks for installing OpenImage Viewer</h1>
            <p>
              Image tabs will now open in a fast MV3-compatible viewer with
              zooming, editing, metadata, QR decoding, downloads, and the
              right-click image menu.
            </p>
            <div className="welcome-actions">
              <button
                className="welcome-button primary"
                type="button"
                onClick={openViewerDemo}>
                Open viewer
              </button>
              <button
                className="welcome-button"
                type="button"
                onClick={closeWelcomePage}>
                Done
              </button>
            </div>
          </div>

          <aside className="welcome-panel" aria-label="Getting started">
            <div className="welcome-panel-header" aria-hidden="true">
              <span className="welcome-dot" />
              <span className="welcome-dot" />
              <span className="welcome-dot" />
            </div>
            <div className="welcome-panel-body">
              <div className="welcome-sample">
                <BetterViewerLogo aria-label="OpenImage Viewer logo" />
              </div>
              <ol className="welcome-steps">
                <li>
                  <span>1</span>
                  Open a direct image URL in a new tab.
                </li>
                <li>
                  <span>2</span>
                  Use the right-click menu on any image.
                </li>
                <li>
                  <span>3</span>
                  Zoom, crop, inspect metadata, annotate, or download.
                </li>
              </ol>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default WelcomePage;
