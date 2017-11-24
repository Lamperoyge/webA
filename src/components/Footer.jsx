import React from "react";
import styled from "styled-components";


const Footerz = styled.div`
  background: #F4F4F4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0px 50px;
  color: rgba(0,0,0,0.3);
  .footer-link {
    display: flex;
    align-items: center;
  }
  a {
    color: var(--blue);
    font-weight: lighter;
    font-family: var(--font-montserrat);
    text-decoration: none;
    font-size: 1.5rem;
    padding: 0px 20px;
    margin-left: 10px;
  }

  .btn-contact {
  color: white;
  padding: 10px 15px;
  border-radius: 35px;
  background-color: var(--pink);
  font-weight: lighter;
  }
`;

const Footer = () => (
  <Footerz>
    <div className = "footer-link">
      <a href='#'>home</a>
      <a href="#">services</a>
      <a href="#">portfolio</a>
      <a href="#">about us</a>
      </div>
      <div className = "footer-contact">
        <a href="#" className="btn-contact">contact us</a>
    </div>
  </Footerz>
  );

export default Footer;