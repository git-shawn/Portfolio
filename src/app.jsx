import React, { useState, useEffect } from "react";
import { Router, Link, useRoute } from "wouter";

import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import Seo from "./components/seo.jsx";

export default function Home() {
  const ActiveLink = (props) => {
    const [isActive] = useRoute(props.href);
    return (
      <Link {...props}>
        <a className={isActive ? "active" : ""}>{props.children}</a>
      </Link>
    );
  };

  return (
    <Router>
      <Seo />
      <header className="header">
        <ul className="nav">
          <ActiveLink href="/">Home</ActiveLink>|
          <ActiveLink href="/apps">Apps</ActiveLink>|
          <a href="mailto:contact@fromshawn.dev">Contact Me</a>
        </ul>
      </header>
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
      </main>
      <footer className="footer">
        <p>This website was written in React and is hosted on Glitch.</p>
        <a href="https://glitch.com/~shawn-portfolio">Check out the source code!</a>
      </footer>
    </Router>
  );
}
