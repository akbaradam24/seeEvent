import React, { useState } from "react";

import LogoWhite from "../assets/LogoWhite.svg";
import search from "../assets/search.svg";
import styles from "../styles/Hero.module.css";
import Avatar from "./Avatar";

const Hero = () => {
  const [isLogged, setIsLogged] = useState(true);

  // Conditial rendering for authenticated user
  let userLogin = !isLogged ? (
    <ul className={styles["non-user"]}>
      <li>
        <a href="#">Sign Up</a>
      </li>
      <li>
        <a href="#">Sign In</a>
      </li>
    </ul>
  ) : (
    <ul className={styles["user"]}>
      <li className={styles["avatar-wrapper"]}>
        <Avatar
          src="https://cdn.idntimes.com/content-images/community/2021/05/s97mhhjwvpii5a0cb41ds2h2tb6-56965fbaa68adf470a17cc45ea5d328d-b110fe95a4e3c84689c90f96df3891e2_600x400.jpg"
          alt=""
        />
      </li>
      <li>
        <p className={styles["user-name"]}>John doe</p>
      </li>
    </ul>
  );

  return (
    <div className={styles.Hero}>
      <header className={styles.header}>
        <img src={LogoWhite} alt="" className={styles.logo} />
        {/* conditional rendering for non-user/user */}
        {userLogin}
      </header>
      <div className={styles["hero-body"]}>
        <h1>
          <span className={styles.yellow}>Create</span> or <span className={styles.yellow}>Find</span> interesting{" "}
          <span className={styles.yellow}>Events</span> around The world
        </h1>
        <form className={styles["form-search"]}>
          <img src={search} alt="logo search" className={styles["logo-search"]} />
          <input type="text" placeholder="Search events" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
