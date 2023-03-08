import * as React from "react";

export default function Rerouter() {
  return (
    <>
      <div className="thinContainer">
        <h1 className="appTitle">
          <span className="blue">Rerouter</span> automatically opens all Google
          Maps links in Apple Maps.
        </h1>
        <div className="appIconContainer">
          <a
            href="https://apps.apple.com/us/app/rerouter-open-links-in-maps/id1589151155?itscg=30200&amp;itsct=apps_box_appicon"
            className="embededAppIcon"
          >
            <img
              src="https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/dc/a7/b1/dca7b134-9db7-dd47-69e6-b7c6f878e705/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/540x540bb.jpg"
              alt="Rerouter - Open links in Maps"
            />
          </a>
        </div>
        <div className="viewGithub">
          <a href="https://github.com/git-shawn/Rerouter">
            <img src="https://cdn.glitch.global/de491910-0060-4fe1-87cc-7ff32c7bf88e/githubLogo.png?v=1678227758896" />
            View Project on GitHub
          </a>
        </div>
        <div className="invertedBox" id="aboutApp">
          <h2>Description</h2>
          <p>
            Google is the easiest way to find businesses, restaurants, and
            parks. But what if you want to use Apple Maps to get there? That
            part isn't so easy.
          </p>
          <p>
            Rerouter handles the mess by automatically opening Google Maps
            directions in Apple Maps. It's a simple Safari Extension that runs
            in the background and automatically redirects links to the native
            Apple Maps app in a way that requires no work from you while still
            respecting your privacy.
          </p>
        </div>
        <br></br>
        <div className="invertedBox" id="privacy">
          <h2>Privacy Policy</h2>
          <p>
            Convenience shouldn't come at the cost of privacy. Rerouter doesn't
            contain <b>any</b> trackers, loggers, etc., and never will. The app
            converts all links on your device, and never connects to a server.
            Want some more control? Rerouter supports a manual mode, giving you
            the opportunity to chose everytime you come across a Google Maps
            link.
          </p>
        </div>
      </div>
      <div className="rerouterHero"></div>
    </>
  );
}
