import * as React from "react";

export default function QRPop() {
  return (
    <>
      <div className="thinContainer">
        <h1 className="appTitle">
          <span className="orange">QR Pop</span> automatically opens all Google
          Maps links in Apple Maps.
        </h1>
        <div className="appIconContainer">
          <a
            className="embededAppIcon"
            href="https://apps.apple.com/us/app/qr-pop/id1587360435?itscg=30200&amp;itsct=apps_box_appicon"
          >
            <img
              src="https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/be/c1/85/bec185f1-57f6-e5a8-44c7-6f9382d52b5b/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/540x540bb.jpg"
              alt="QR Pop"
            />
          </a>
        </div>
        <div className="invertedBox" id="aboutApp">
          <h2>Description</h2>
          <p>
            If you've ever tried to search for a business, park, or any other
            location on Google, you likely already know the issue. There is no
            way to open those results in Apple Maps. Go ahead, try it right now.
            Rerouter aims to solve that issue by automatically rerouting Google
            Maps links to iOS and macOS's built in maps app.
          </p>
        </div>
        <br></br>
        <div className="invertedBox" id="privacyPolicy">
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
      <div className="qrpopHero"></div>
    </>
  );
}
