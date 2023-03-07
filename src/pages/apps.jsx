import * as React from "react";

export default function Apps() {
  return (
    <div className="thinContainer">
      <h1>My Apps</h1>
      <p>
        Welcome to the Glitch React starter, where you can instantly create a
        React site that's fully customizable.
      </p>
      <div className="appGrid">
        <div className="appInfo">
          <div className="appIcon">
            <img
              src="https://cdn.glitch.global/de491910-0060-4fe1-87cc-7ff32c7bf88e/qrPopApp.png?v=1678221258807"
              alt="QR Pop App Icon"
            />
          </div>
          <div className="appMeta">
            <h2>QR Pop</h2>
            <p>Available for macOS and iOS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
