import React from "react";

const Help = () => {
  const shortcuts = [
    { description: "Zoom in", keys: ["+"] },
    { description: "Zoom out", keys: ["-"] },
    { description: "Reset zoom", keys: ["0"] },
    { description: "Rotate left", keys: ["Shift", "⬅️"] },
    { description: "Rotate right", keys: ["Shift", "➡️"] },
    {
      description: "Flip vertically",
      keys: ["Ctrl", "⬆️ or ⬆️"],
    },
    {
      description: "Flip horizontally",
      keys: ["Ctrl", "⬅️ or ➡️"],
    },
    { description: "Open image editor", keys: ["Ctrl", "E"] },
    { description: "Open image cropper", keys: ["Ctrl", "X"] },
    { description: "Open color picker", keys: ["Shift", "C"] },
    { description: "Download image", keys: ["Ctrl", "D"] },
    { description: "Scan QR code", keys: ["Ctrl", "Q"] },
    { description: "View image details", keys: ["Ctrl", "I"] },
  ];

  const features = [
    "🔍 Zoom in and out",
    "🔄 Rotate images",
    "🔃 Flip images",
    "📷 Scan QR codes",
    "ℹ️ View image metadata (EXIF)",
    "🖌️ Use the photo editor",
    "✂️ Crop images",
    "🎨 Use the color picker",
    "🔍 Reverse image search with TinEye",
    "🖼️ Use Photopea to edit images",
    "🚀 And much more coming soon!",
  ];

  const faqs = [
    {
      question: "Which browsers support OpenImage Viewer?",
      answer:
        "OpenImage Viewer is optimized for Chromium browsers, including Chrome and Microsoft Edge.",
    },
    {
      question: "Is OpenImage Viewer available on mobile devices?",
      answer:
        "Not yet. OpenImage Viewer is currently designed for desktop browsers.",
    },
    {
      question: "How can I contribute to OpenImage Viewer?",
      answer: (
        <span>
          You can support OpenImage Viewer by reporting bugs, suggesting new
          features, or contributing code on GitHub.
          <a
            href="https://github.com/lscherub/BetterViewer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline ml-1"
          >
            Visit our GitHub Repository
          </a>
        </span>
      ),
    },
    {
      question: "Why are some features from the old version missing?",
      answer:
        "OpenImage Viewer includes MV3-compatible hybrid detection to restore automatic image-tab opening in modern Chromium browsers.",
    },
    {
      question: "Is OpenImage Viewer free to use?",
      answer:
        "Yes. OpenImage Viewer is free and open-source under the MIT license.",
    },
  ];

  return (
    <div className="h-full w-full overflow-y-auto p-6  text-white bg-[#0e0e0e] custom-scrollbar">
      <section>
        <h1 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">
          Keyboard Shortcuts
        </h1>
        <ul className="space-y-2 pl-5 list-disc text-gray-300">
          {shortcuts.map((shortcut, index) => (
            <li key={index} className="leading-relaxed">
              {shortcut.description}:{" "}
              {shortcut.keys.map((key, i) => (
                <React.Fragment key={i}>
                  <kbd className="px-2 py-1 mx-1 text-xs font-semibold text-white bg-gray-800 border border-gray-200 rounded-lg">
                    {key}
                  </kbd>
                  {i < shortcut.keys.length - 1 && " + "}
                </React.Fragment>
              ))}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h1 className="text-3xl font-bold mt-6 mb-4 border-b border-gray-700 pb-2">
          Features
        </h1>
        <p className="mb-4 text-lg">What can you do with OpenImage Viewer?</p>

        <ul className="space-y-2 pl-5 list-disc text-gray-300">
          {features.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h1 className="text-3xl font-bold mt-6 mb-4 border-b border-gray-700 pb-2">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 text-gray-200">
                {faq.question}
              </h2>
              <p className="text-gray-300">💡 {faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Help;
