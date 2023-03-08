import React from "react";
import TextLoop from "react-text-loop";

import githubLogo from "/src/assets/githubLogo.png";
import linkedinLogo from "/src/assets/linkedInLogo.png";
import ga4Cert from "/src/assets/gaCert.png";
import gadsCert from "/src/assets/gAdsCert.png";
import swiftUICert from "/src/assets/100SwiftCert.png";
import swiftUIFullCert from "/src/assets/swiftFullCert.jpg";

export default function Home() {
  return (
    <>
      <div className="thinContainer">
        <div className="aboutMe">
          <div className="fourGrid">
            <div className="fourGridItem">
              <h1>Shawn Davis</h1>
              <p className="subH2">Digital MarCom Professional</p>
            </div>
          </div>
          <br></br>
          <h3>About</h3>
          <p>
            <TextLoop
              children={[
                "Hello!",
                "¡Hola!",
                "Salut!",
                "你好!",
                "Aloha!",
                "Ciao!",
              ]}
            />{" "}
            I'm Shawn.👋
            <br></br>I love creating people-focused messaging and experiences
            that are exciting, engaging, creative, and inclusive.
          </p>
        </div>
        <div id="education">
          <h3>Education</h3>
          <div className="fourGrid">
            <div className="fourGridDate">
              2016 - 2020<br></br>
              <span className="location">Carbondale, IL</span>
            </div>
            <div className="fourGridItem">
              <b>Southern Illinois University</b>
              <br></br>
              B.S. Journalism (Advertising)<br></br>
              Minor Computer Science
            </div>
          </div>
        </div>

        {/* Volunteer */}

        <div id="volunteer">
          <h3>Volunteerism</h3>
          <div className="fourGrid">
            <div className="fourGridDate">
              2022 - Now<br></br>
              <span className="location">Remote</span>
            </div>
            <div className="fourGridItem">
              <b>Cody Dieruf Foundation</b>
              <br></br>
              WordPress content management and general maintenance
              <div className="skillPills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>WordPress</span>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}

        <div id="work">
          <h3>Work Experience</h3>

          {/* BAMSL */}

          <div className="fourGrid">
            <div className="fourGridDate">
              2022<br></br>
              <span className="location">St. Louis, MO</span>
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
                <span>Copywriting</span>
                <span>Email</span>
                <span>GA4</span>
              </div>
              <a
                href="https://www.bamsl.org/?pg=business"
                className="link wavy"
                data-text="Business Landing Page"
              >
                Business Landing Page
              </a>
              <a
                href="https://www.bamsl.org/?pg=BarFoundation"
                className="link wavy"
              >
                Foundation Web Section
              </a>
            </div>
          </div>
          <br></br>

          {/* CDF */}

          <div className="fourGrid">
            <div className="fourGridDate">
              2021 - 2022<br></br>
              <span className="location">Bozeman, MT</span>
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
                <span>Copywriting</span>
                <span>Canva</span>
                <span>Figma</span>
                <span>Market Research</span>
                <span>Social Media</span>
                <span>Salesforce</span>
                <span>MailChimp</span>
                <span>GA4</span>
                <span>Project Management</span>
              </div>
              <a
                href="https://breathinisbelievin.org/plate/"
                className="link wavy"
              >
                Specialty License Plate
              </a>
              <a
                href="https://breathinisbelievin.org/pages/wp-content/uploads/2021/07/CDF-Brochure.pdf"
                className="link wavy"
              >
                Outreach Materials
              </a>
              <a
                href="https://www.instagram.com/p/CUYVen_MjcB"
                className="link wavy"
              >
                Direct Marketing
              </a>
            </div>
          </div>
          <br></br>

          {/* AdLab */}

          <div className="fourGrid">
            <div className="fourGridDate">
              2020<br></br>
              <span className="location">Carbondale, IL</span>
            </div>
            <div className="fourGridItem">
              <b>Creative Director - Saluki AdLab</b>
              <br></br>
              Worked alongside a team of student creatives and marketers to
              deliver high-quality advertising services to clients.
              <div className="skillPills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React Native</span>
                <span>Adobe Suite</span>
                <span>Final Cut Pro</span>
                <span>Media Buying</span>
                <span>Market Research</span>
                <span>Copywriting</span>
                <span>Social Media</span>
                <span>MailChimp</span>
                <span>GA4</span>
                <span>Project Management</span>
              </div>
              <a
                href="https://www.salukiadlab.com/post/the-daily-egyptian"
                className="link wavy"
              >
                Daily Egyptian App
              </a>
              <a
                href="https://www.salukiadlab.com/post/community-health-partnership"
                className="link wavy"
              >
                2020 Census Outreach
              </a>
              <a
                href="https://www.salukiadlab.com/post/cool-spoons"
                className="link wavy"
              >
                Cool Spoons Online
              </a>
            </div>
          </div>
        </div>
        <br></br>

        {/* Certifications */}

        <div id="certs">
          <h3>Certifications</h3>
          <div className="certGrid">
            <div className="certItem">
              <a href="https://skillshop.credential.net/2d72e39e-9cd3-449f-ad50-bf539b182cbb#gs.rdkc2o">
                <img
                  className="rounded"
                  alt="Google Analytics Certification"
                  src={ga4Cert}
                />
              </a>
            </div>
            <div className="certItem">
              <a href="https://skillshop.exceedlms.com/student/award/qEkwWJxnqxVy9G9b8P7tcSV8">
                <img
                  className="rounded"
                  alt="Google Ads - Measurement Certification"
                  src={gadsCert}
                />
              </a>
            </div>
            <div className="certItem">
              <a href={swiftUIFullCert}>
                <img
                  className="rounded"
                  alt="100 Days of Swift Certification"
                  src={swiftUICert}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Outbound Links */}

        <div id="links">
          <h3>Links</h3>

          <a href="https://github.com/git-shawn" className="iconHref wavy">
            <img src={githubLogo} />
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/s" className="iconHref wavy">
            <img src={linkedinLogo} />
            LinkedIn
          </a>
        </div>
      </div>
      <footer className="footer">
        <p>This website was written in React and is hosted on Vercel.</p>
        <a href="https://github.com/git-shawn/Portfolio">
          Check out the source code!
        </a>
      </footer>
    </>
  );
}
