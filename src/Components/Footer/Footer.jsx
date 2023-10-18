import React, { useEffect, useState } from "react";
import "./footer.css";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const noShow = window.location.pathname.includes("TVShow");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 415);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    window.removeEventListener("resize", handleResize);
  });
  if (noShow) {
    return null;
  }
  return (
    <>
      {!isMobile && (
        <div className="emptypadding" style={{ paddingTop: "180px" }}></div>
      )}

      <div className="footer-container noFooter" style={{ padding: "24px" }}>
        <div className="footer-img">
          <img
            src="/Prime-Video-footer.png"
            alt="Prime Video Footer"
            width={102}
            height={32}
          />
        </div>

        <ul className="footer-ul">
          <li className="footer-li footer-links">
            <a href="#">Terms and Privacy Notes</a>
          </li>
          <li className="footer-li footer-links">
            <a href="#">Send us Feedback</a>
          </li>
          <li className="footer-li footer-links">
            <a href="#">Help</a>
          </li>
          <li className="footer-li">
            <a href="#">
              @1996-2023, created by
              <span style={{ color: "#79bbf3" }}> suryaspandey</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
