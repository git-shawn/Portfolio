import * as React from "react";
import { Link } from "wouter";

const strings = ["Hi", "Salut", "Hola", "안녕", "Hej"];

function randomLanguage() {
  return strings[Math.floor(Math.random() * strings.length)];
}

export default function Home() {
  const [hello, setHello] = React.useState(strings[0]);

  const handleChangeHello = () => {
    const newHello = randomLanguage();
    setHello(newHello);
  };

  React.useEffect(() => {
    const interval = setInterval(() => handleChangeHello(), 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="thinContainer">
        <div className="aboutMe">
          <img src=""></img>
          <h2>Shawn Davis</h2>
          <p class="subH2">Digital MarCom Professional</p>
          <br></br>
          <h3>About</h3>
          <p>
            {hello}, I'm Shawn.👋 I love creating people-focused messaging and
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
      </div>
    </>
  );
}
