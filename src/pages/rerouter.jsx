import * as React from "react";

export default function Rerouter() {
  return (
    <div className="thinContainer">
      <h1>
        <span className="blue">Rerouter</span> automatically opens all Google
        Maps links in Apple Maps.
      </h1>
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
  );
}
