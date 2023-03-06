import * as React from "react";
import { Link } from "wouter";

const strings = [
  "Hello",
  "Salut",
  "Hola",
  "안녕",
  "Hej"
];

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
      <div className="about-me">
        <h2>Shawn Davis</h2>
        <p class="subh2">
          People focused digital communicator, marketer, and developer.
        </p>
      </div>
      <div className="cv">
      </div>
    </>
  );
}
