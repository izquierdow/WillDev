import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
        <>
  <header className="s-header">
    <div className="row s-header__nav-wrap">
      <nav className="s-header__nav">
        <ul>
          <li className="current">
            <a className="smoothscroll" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Say Hello
            </a>
          </li>
        </ul>
      </nav>
    </div>{" "}
    {/* end row */}
    <a className="s-header__menu-toggle" href="#0" title="Menu">
      <span className="s-header__menu-icon" />
    </a>
  </header>{" "}
  {/* end s-header */}
    </>
    )
  }
}
