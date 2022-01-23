import React from "react";

import styles from "../styles/Footer.module.css";
import LogoYellow from "../assets/LogoYellow.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import Twitter from "../assets/Twitter.svg";
import Youtube from "../assets/Youtube.svg";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles["site-map"]}>
        <div className={styles.description}>
          <img src={LogoYellow} alt="footer logo" className={styles.logo} />
          <p>SeeEvent is a platform where you can create or find an amazing events around the world.</p>
          <div className={styles["social-media"]}>
            <p>Follow Us on</p>
            <ul>
              <li>
                <a href="#">
                  <img src={Facebook} alt="facebook" className={styles.facebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Instagram} alt="instagram" className={styles.instagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Twitter} alt="twitter" className={styles.twitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Youtube} alt="youtube" className={styles.youtube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.services}>
          <div className={styles.links}>
            <h3>Links</h3>
            <ul>
              <li>
                <a href="">
                  <span style={{ color: "#F2D555" }}>Home</span>
                </a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">My Events</a>
              </li>
              <li>
                <a href="#">Bookmarks</a>
              </li>
            </ul>
          </div>
          <div className={styles.categories}>
            <h3>Top Categories</h3>
            <ul>
              <li>
                <a href="#">Design</a>
              </li>
              <li>
                <a href="#">Photography</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
            </ul>
          </div>
          <div className={styles["contact-us"]}>
            <h3>Contact Use</h3>
            <p>
              Indonesia <br /> Jl. Planet Namek No. 123, Surabaya Telp : 083849420146 Email : Johndoe@seeevent.com
            </p>
          </div>
        </div>
      </div>
      <div className={styles["copyright-information"]}>
        <p>© 2021 SeeEvent All rights reserved.</p>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Helps</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
