import * as React from "react";
import TextLoop from "react-text-loop";

export default function QRPop() {
  return (
    <>
      <div className="thinContainer">
        <h1 className="appTitle">
          <span className="orange">QR Pop</span> is the easiest way to turn{" "}
          <TextLoop
            children={[
              "links",
              "contacts",
              "wifi networks",
              "calendar events",
              "shortcuts",
              "places",
            ]}
            springConfig={{ stiffness: 100, damping: 10 }}
          />{" "}
          into QR codes.
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
        <div className="viewGithub">
          <a href="https://github.com/git-shawn/QR-Pop">
            <img src="https://cdn.glitch.global/de491910-0060-4fe1-87cc-7ff32c7bf88e/githubLogo.png?v=1678227758896" />
            View Project on GitHub
          </a>
        </div>
        <div className="invertedBox" id="aboutApp">
          <h2>Description</h2>
          <p>
            QR Pop can transform links into QR codes from almost anywhere in iOS
            and macOS. If you're browsing the web, you can take advantage of the
            built-in Safari Extension to see a code for the website you're
            visiting. Most importantly?
          </p>
          <p>
            In other apps, QR Pop offers a Share Sheet Extension that can turn
            links into codes for a variety of apps. Inside the QR Pop app, you
            can go beyond links and generate codes for contacts, wifi networks,
            locations, and more. Built in design features empower you to
            customize your code to your liking.
          </p>
          <p>QR Pop is free, private, and has no ads.</p>
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
