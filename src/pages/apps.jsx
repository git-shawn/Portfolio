import * as React from "react";
import { Router, Link, useRoute } from "wouter";

export default function Apps() {
  return (
    <div className="thinContainer">
      <h1>My Apps</h1>
      <p>
        Write about my motivations to create apps.
      </p>
      <div className="appGrid">
        
        {/* QR Pop */}
        
        <Link href="/">
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
        </Link>
        
        {/* Rerouter */}
        
        <Link href="/">
          <div className="appInfo">
            <div className="appIcon">
              <img
                src="https://cdn.glitch.global/de491910-0060-4fe1-87cc-7ff32c7bf88e/rerouterApp.webp?v=1678222179149"
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
  );
}
