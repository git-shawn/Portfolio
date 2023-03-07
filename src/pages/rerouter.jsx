import * as React from "react";

export default function Rerouter() {
  return (
    <div className="thinContainer invertedThin">
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
      <div id="aboutApp">
        <h2>The Problem</h2>
        <p>
          If you've ever tried to search for a business, park, or any other
          location on Google, you likely already know the issue. There is no way
          to open those results in Apple Maps. Go ahead, try it right now.
          Rerouter aims to solve that issue by automatically rerouting Google
          Maps links to iOS and macOS's built in maps app.
        </p>
        <h2>The Solution</h2>
        <p>
          Reouter examines URLs to determine if they are for Google Maps. Then,
          instead of letting Safari take you to Google's web-based Maps app,
          Rerouter dissects the URL and rebuilds it as an Apple Maps url. This
          process is totally seamless. Redirection happens automatically, no
          matter how you were sent the URL (so long as you open it in Safari,
          that is). Want some more control? Rerouter offers a manual mode,
          giving you the opportunity to chose everytime you come across a Google
          Maps link.
        </p>
      </div>
      <br></br>
      <div id="privacyPolicy">
        <h2>Privacy Policy</h2>
        <p>
          Convenience shouldn't come at the cost of privacy. Rerouter doesn't
          contain <b>any</b> trackers, loggers, etc., and never will. The app
          converts all links on your device, and never connects to a server.
          Want some more control? Rerouter supports a manual mode, giving you
          the opportunity to chose everytime you come across a Google Maps link.
        </p>
      </div>
      <div className="rerouterHero">
      </div>
    </div>
  );
}
