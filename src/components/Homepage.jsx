import React, { Component } from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import { findDOMNode } from "react-dom";
import { debounce } from "lodash";

import LogoHeader from "./LogoHeader";
import HomepageBanner from "./HomepageBanner";
import ServicePanel from "./ServicePanel";
import ServicePanelsSlider from "./ServicePanelsSlider";

class Homepage extends Component {
  state = {
    navBarFixed: false,
    scrollTop: 0
  };

  handleScroll = element => {
    window.addEventListener("scroll", () => {
      const navBarFixed = window.scrollY * -1;
      this.setState({ navBarFixed: navBarFixed < 0, scrollTop: navBarFixed }),
        300;
      console.log(navBarFixed);
    });
  };

  animateRectangles = () => {
    const svg = document.querySelector(".rects");
    window.addEventListener("scroll", () => {
      svg.style.marginTop = `${this.state.scrollTop * 3}px`;
      document.body.style.backgroundColor = `rgb(${Math.floor(
        245 + this.state.scrollTop / 5
      )}, ${Math.floor(245 + this.state.scrollTop / 5)}, ${Math.floor(
        245 + this.state.scrollTop / 5
      )})`;
    });
  };

  changeServicesPanel() {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );

    console.log(h);
  }

  componentDidMount() {
    this.changeServicesPanel();
  }

  render() {
    return (
      <div>
        <LogoHeader
          scrollTop={this.state.scrollTop}
          navBarFixed={this.state.navBarFixed}
        />
        <HomepageBanner
          fixNavBar={this.handleScroll}
          scrollTop={this.state.scrollTop}
        />
        <SVG
          src="/public/img/rectangles.svg"
          className="rects"
          onLoad={this.animateRectangles}
        />
        <ServicePanelsSlider
          borderColor="var(--blue)"
          scrollTop={this.state.scrollTop}
          title="e-commerce"
        />
      </div>
    );
  }
}

export default Homepage;
