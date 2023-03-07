import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import Seo from "./components/seo.jsx";

export default function Home() {
  return (
    <Router>
      <Seo />
      <header className="header">
        <h1>Shawn Davis</h1>
        <div className="nav">
          <Link href="/">Home</Link>
          <Link href="/apps">Apps</Link>
        </div>
      </header>
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
      </main>
    </Router>
  );
}
