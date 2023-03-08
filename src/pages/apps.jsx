import * as React from "react";
import { Router, Link, useRoute } from "wouter";

export default function Apps() {
  return (
    <>
      <div className="thinContainer">
        <h1>Hi, I'm Shawn.</h1>
        <p>I make native apps for Apple devices that respect your privacy.</p>
        <p className="alertBox">
          I am currently seeking volunteer opportunities to develop SwiftUI
          apps.{" "}
          <a className="primary" href="mailto:contact@fromshawn.dev">
            Contact me
          </a>{" "}
          if interested!
        </p>
        <div className="appGrid">
          {/* QR Pop */}

          <Link href="/qrpop">
            <div className="appInfo">
              <div className="appIcon">
                <img
                  src="src/assets/qrPopApp.png"
                  alt="QR Pop App Icon"
                />
              </div>
              <div className="appMeta">
                <h2>QR Pop</h2>
                <p>Available for macOS and iOS</p>
              </div>
            </div>
          </Link>

          {/* Rerouter */}

          <Link href="/rerouter">
            <div className="appInfo">
              <div className="appIcon">
                <img
                  src="src/assets/rerouterApp.webp"
                  alt="Rerouter Icon"
                />
              </div>
              <div className="appMeta">
                <h2>Rerouter</h2>
                <p>Available for macOS and iOS</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <footer className="footer">
        <p>This website was written in React and is hosted on Glitch.</p>
        <a href="https://glitch.com/~shawn-portfolio">
          Check out the source code!
        </a>
      </footer>
    </>
  );
}
