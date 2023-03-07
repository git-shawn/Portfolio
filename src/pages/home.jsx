import React, { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const words = ["Hello", "Hola", "Salut", "你好", "Aloha", "Ciao", "Hi"];

  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <>
      <div className="thinContainer">
        <div className="aboutMe">
          <div className="fourGrid">
            <div className="fourGridItem">
              <h2>Shawn Davis</h2>
              <p class="subH2">Digital MarCom Professional</p>
            </div>
          </div>
          <br></br>
          <h3>About</h3>
          <p>
            {`${words[index].substring(0, subIndex)}`}, I'm Shawn.👋 I love
            creating people-focused messaging and experiences that are exciting,
            engaging, creative, and inclusive.
          </p>
        </div>
        <div id="education">
          <h3>Education</h3>
          <div className="fourGrid">
            <div className="fourGridDate">
              2016 - 2020<br></br>
              <span class="location">Carbondale, IL</span>
            </div>
            <div className="fourGridItem">
              <b>Southern Illinois University</b>
              <br></br>
              B.S. Journalism (Advertising)<br></br>
              Minor Computer Science
            </div>
          </div>
        </div>
        <div id="volunteer">
          <h3>Volunteerism</h3>
          <div className="fourGrid">
            <div className="fourGridDate">
              2022 - Now<br></br>
              <span class="location">Remote</span>
            </div>
            <div className="fourGridItem">
              <b>Cody Dieruf Foundation</b>
              <br></br>
              WordPress content management and general maintenance
            </div>
          </div>
        </div>
        <div id="work">
          <h3>Work Experience</h3>
          <div className="fourGrid">
            <div className="fourGridDate">
              2022<br></br>
              <span class="location">St. Louis, MO</span>
            </div>
            <div className="fourGridItem">
              <b>
                Digital Marketing Specialist - Bar Association of Metropolitan
                St. Louis
              </b>
              <br></br>
              Implemented GA4, created engaging web experiences, enhanced email
              marketing, and developed social media content calendars.
              <div className="skillPills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Social Media</span>
                <span>Adobe Suite</span>
                <span>Email</span>
                <span>GA4</span>
              </div>
              <a href="https://www.bamsl.org/?pg=business" class="link">
                Business Landing Page
              </a>
              <a href="https://www.bamsl.org/?pg=BarFoundation" class="link">
                Foundation Web Section
              </a>
            </div>
          </div>
          <br></br>
          <div className="fourGrid">
            <div className="fourGridDate">
              2021 - 2022<br></br>
              <span class="location">Bozeman, MT</span>
            </div>
            <div className="fourGridItem">
              <b>AmeriCorps VISTA - Cody Dieruf Foundation</b>
              <br></br>
              Created marketing materials and strategies targeting both donors
              and constituents.
              <div className="skillPills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>WordPress</span>
                <span>Canva</span>
                <span>Market Research</span>
                <span>Social Media</span>
                <span>MailChimp</span>
                <span>GA4</span>
              </div>
              <a href="https://breathinisbelievin.org/plate/" class="link">
                Specialty License Plate
              </a>
              <a
                href="https://breathinisbelievin.org/pages/wp-content/uploads/2021/07/CDF-Brochure.pdf"
                class="link"
              >
                Outreach Materials
              </a>
              <a href="https://www.instagram.com/p/CUYVen_MjcB" class="link">
                Direct Marketing
              </a>
            </div>
          </div>
          <br></br>
          <div className="fourGrid">
            <div className="fourGridDate">
              2020<br></br>
              <span class="location">Carbondale, IL</span>
            </div>
            <div className="fourGridItem">
              <b>Creative Director - Saluki AdLab</b>
              <br></br>
              Worked alongside a team of student creatives and marketers to
              deliver high-quality advertising services to clients.<br></br>
              <a
                href="https://www.salukiadlab.com/post/the-daily-egyptian"
                class="link"
              >
                Daily Egyptian App
              </a>
              <a
                href="https://www.salukiadlab.com/post/community-health-partnership"
                class="link"
              >
                2020 Census Outreach
              </a>
              <a
                href="https://www.salukiadlab.com/post/cool-spoons"
                class="link"
              >
                Cool Spoons Online
              </a>
            </div>
          </div>
        </div>
        <br></br>
        <div id="certs">
          <h3>Certifications</h3>
          <div className="certGrid">
            <div className="certItem">
              <a href="https://skillshop.credential.net/2d72e39e-9cd3-449f-ad50-bf539b182cbb#gs.rdkc2o">
                <img
                  className="rounded"
                  alt="Google Analytics Certification"
                  src="https://cdn.glitch.global/de491910-0060-4fe1-87cc-7ff32c7bf88e/gacert.png?v=1678206954987"
                />
              </a>
            </div>
            <div className="certItem">
              <a href="https://skillshop.exceedlms.com/student/award/qEkwWJxnqxVy9G9b8P7tcSV8">
                <img
                  className="rounded"
                  alt="Google Ads - Measurement Certification"
                  src="https://cdn.glitch.global/de491910-0060-4fe1-87cc-7ff32c7bf88e/gAdsCert.png?v=1678207622285"
                />
              </a>
            </div>
            <div className="certItem">
              <a href="https://cdn.glitch.global/de491910-0060-4fe1-87cc-7ff32c7bf88e/swiftFullCert.jpg?v=1678208575153">
                <img
                  className="rounded"
                  alt="100 Days of Swift Certification"
                  src="https://cdn.glitch.global/de491910-0060-4fe1-87cc-7ff32c7bf88e/100SwiftCert.png?v=1678208562805"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
