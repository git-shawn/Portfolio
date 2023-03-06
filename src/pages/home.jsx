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
        </div>
        <div className="work">
          <h3>Work Experience</h3>
        </div>
      </div>
    </>
  );
}
