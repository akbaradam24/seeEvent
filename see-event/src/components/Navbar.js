import React from "react";

import Logo from "../assets/LogoWhite.svg";
import Search from "../assets/search.svg";
import styles from "../styles/Navbar.module.css";

const Navbar = (props) => {
  //Show the search bar if the user login already
  let searchLogin = props.isLogin ? (
    <form className={styles["search-bar"]}>
      <img src={Search} alt="search" />
      <input type="text" placeholder="Search.." name="search" />
    </form>
  ) : (
    ""
  );

  //Show the account name and avatar if the user login already
  let showUserAccount = props.isLogin ? (
    <ul className={styles["user"]}>
      <li className={styles["avatar-wrapper"]}>
        <img
          src="https://cdn.idntimes.com/content-images/community/2021/05/s97mhhjwvpii5a0cb41ds2h2tb6-56965fbaa68adf470a17cc45ea5d328d-b110fe95a4e3c84689c90f96df3891e2_600x400.jpg"
          alt=""
          className={styles.avatar}
        />
      </li>
      <li>
        <p className={styles["user-name"]}>John doe</p>
      </li>
    </ul>
  ) : (
    <ul className={styles.auth}>
      <li>
        <a href="#">Sign Up</a>
      </li>
      <li>
        <a href="#">Sign In</a>
      </li>
    </ul>
  );

  return (
    <div className={styles.Navbar}>
      <div className={styles["search-container"]}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        {searchLogin}
      </div>
      {showUserAccount}
    </div>
  );
};

export default Navbar;
