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
            <div className="fourGridItem centerGrid">
              <h2>Shawn Davis</h2>
              <p class="subH2">Digital MarCom Professional</p>
            </div>
          </div>
          <br></br>
          <h3>About</h3>
          <p>
            {`${words[index].substring(0, subIndex)}`}, I'm Shawn.👋 I love creating people-focused messaging and
            experiences that are exciting, engaging, creative, and inclusive.
          </p>
        </div>
        <div className="education">
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
        <div className="work">
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
              Write about whatever I did here. Not too much :)<br></br>
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
              Created outreach materials and strategies for<br></br>
              <a href="https://breathinisbelievin.org/plate/" class="link">
                Specialty License Plate
              </a>
              <a href="https://www.instagram.com/p/CUYVen_MjcB" class="link">
                Event Outreach
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
        <div className="certs">
        <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/66917739"/>
        </div>
      </div>
    </>
  );
}
