import * as React from "react";
import { Link } from "wouter";

const strings = ["Hello", "Salut", "Hola", "안녕", "Hej"];

function randomLanguage() {
  return strings[Math.floor(Math.random() * strings.length)];
}

export default function Home() {
  const [hello, setHello] = React.useState(strings[0]);

  const handleChangeHello = () => {
    const newHello = randomLanguage();
    setHello(newHello);
  };

  return (
    <>
      <h1 className="title">{hello}!</h1>
      <div className="thinContainer">
        <div className="aboutMe">
          <h2>Shawn Davis</h2>
          <p class="subH2">Digital MarCom Professional</p>
          <br></br>
          <h3>About</h3>
          <p>
            Hi, I'm Shawn.👋 I love creating people-focused messaging and
            experiences that are exciting, engaging, creative, and inclusive.
          </p>
        </div>
        <div className="education">
          <h3>Education</h3>
          <div className="fourGrid">
            <div className="fourGridDate">2016 - 2020</div>
            <div className="fourGridItem">
              <b>Southern Illinois University</b>
              <br></br>
              Carbondale, Illinois<br></br>
              B.S. Journalism (Advertising)<br></br>
              Minor Computer Science
            </div>
          </div>
        </div>
        <div className="work">
          <h3>Work Experience</h3>
          <div className="fourGrid">
            <div className="fourGridDate">2022</div>
            <div className="fourGridItem">
              <b>Digital Marketing Specialist - Bar Association of Metropolitan St. Louis</b>
              <br></br>
              Write about whatever I did here. Not too much :)<br></br>
              <a href="" class="link">Business Landing Page</a>
              <a href="" class="link">App Landing Page</a>
            </div>
          </div>
          <br></br>
          <div className="fourGrid">
            <div className="fourGridDate">2021 - 2022</div>
            <div className="fourGridItem">
              <b>AmeriCorps VISTA - Cody Dieruf Foundation</b>
              <br></br>
              Write about whatever I did here. Not too much :)<br></br>
              <a href="" class="link">Specialty License Plate</a>
              <a href="https://www.instagram.com/p/CUYVen_MjcB" class="link">Event Outreach</a>
            </div>
          </div>
          <br></br>
          <div className="fourGrid">
            <div className="fourGridDate">2020</div>
            <div className="fourGridItem">
              <b>Creative Director - Saluki AdLab</b>
              <br></br>
              Write about whatever I did here. Not too much :)<br></br>
              <a href="" class="link">Daily Egyptian App</a>
              <a href="" class="link">2020 Census Outreach</a>
              <a href="" class="link">FroYo Website and Loyalty Program</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
