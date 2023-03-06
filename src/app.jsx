import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import Seo from './components/seo.jsx';

export default function Home() {
  return (
    <Router>
      <Seo />
            <footer className="footer">
        <div className="links">
          <Link href="/">Home</Link>
          <span className="divider">|</span>
          <Link href="/apps">About</Link>
        </div>
      </footer>
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
      </main>
    </Router>
  );
}
