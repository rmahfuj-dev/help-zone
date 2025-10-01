import React from "react";
import TicketSystem from "./TicketSystem";
import Company from "./Company";
import Services from "./Services";
import Information from "./Information";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="footer-container max-w-[1440px] mx-auto py-[80px] text-white ">
        <div className="footer-wrapper flex flex-col lg:flex-row justify-center gap-8 items-center lg:items-start ">
          <TicketSystem />
          <Company />
          <Services />
          <Information />
          <SocialLink />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
