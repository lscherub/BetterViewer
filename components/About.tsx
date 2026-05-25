import React from "react";
import BetterViewerLogo from "./BetterViewerLogo";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <BetterViewerLogo width={150} height={150} />
      <h1 className="text-4xl font-bold text-white text-center">
        OpenImage Viewer <span className="text-blue-500 text-sm">v2.0.4</span>
      </h1>
      <h3 className="text-lg text-white text-center">
        Fast advanced image viewer for Chrome & Edge
      </h3>
      <p className="text-white mt-4">
        OpenImage Viewer makes image viewing faster, easier, and more powerful.
      </p>
      <p className="text-white mt-2">
        A community-maintained fork inspired by BetterViewer, designed as an
        advanced replacement for built-in browser image tabs. OpenImage Viewer
        lets you:
        <br />✅ Zoom & Pan with ease
        <br />✅ Edit & Enhance images instantly
        <br />✅ Open image tabs automatically with MV3-compatible detection
        <br />✅ Use handy keyboard shortcuts for quick navigation
        <br />and much more!
      </p>

      <p className="text-white mt-2">
        ⭐️ If you find OpenImage Viewer useful, please star and share the project.
      </p>
      <a href="https://github.com/lscherub/BetterViewer" target="_blank">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded mt-2">
          Star on GitHub 🌟
        </button>
      </a>
      <p className="text-white mt-2">
        Maintained with ❤️ by{" "}
        <a
          href="https://github.com/lscherub"
          target="_blank"
          className="font-semibold underline"
        >
          OpenImage Viewer Community
        </a>
      </p>
    </div>
  );
};

export default About;
