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
      <div className="navigation">
      </div>
      <div className="instructions">
        <h2>Using this project</h2>
        <p>
          This is the Glitch <strong>Hello React</strong> project. You can use
          it to build your own app. See more info in the{" "}
          <Link href="/about">About</Link> page, and check out README.md in the
          editor for additional detail plus next steps you can take!
        </p>
      </div>
    </>
  );
}
