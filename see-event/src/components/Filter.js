import React, { useState } from "react";
import styles from "../styles/Filter.module.css";
import ReactPaginate from "react-paginate";
import NotFoundImg from "../assets/NotFound.svg";
import Cards from "./Cards";
import axios from "axios";

const categories = ["Photography", "Design", "Lifestyle", "Development", "Marketing", "Business", "Music"];
const times = ["Today", "Tomorrow", "This Week", "This Month", "This Year", "All Time"];
const BASE_URL = "https://see-event-app.herokuapp.com/api/v1";

function Filter() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [filterEvents, setFilterEvents] = useState({
    category: "",
    date: "",
    order: "",
  });

  // const fetchEvents = () => {
  //   axios({
  //     get: "GET",
  //     url: "http://",
  //   });
  // };

  let events = (
    <div className="">
      <Cards />
      <Cards />
      <div className={styles.pagination}>
        <ReactPaginate
          containerClassName={styles.pagination}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={10}
          pageLinkClassName={styles.paginationA}
          activeLinkClassName={styles.paginationB}
          previousLinkClassName={styles.paginationA}
          nextLinkClassName={styles.paginationA}
        />
      </div>
    </div>
    // <div className={styles.cardsContainer}>
    //   <div className={styles.card}></div>
    //   <div className={styles.card}></div>
    // </div>
  );

  let noEventsImage = (
    <div className={styles.ImageNotFoundContainer}>
      <img className={styles.ImageNotFound} aria-hidden src={NotFoundImg} alt="Not Found Image" />
      <p className={styles.textImage}>sorry we couldn't find any events from this category.</p>
    </div>
  );

  let isAvailableEvent = isAvailable ? events : noEventsImage;

  const handleChange = (e) => {
    // console.log(e.target.value);
    // axios({
    //   get: "GET",
    //   url: "https://see-event-app.herokuapp.com/api/v1/event/filter?order=name&page=1",
    // });
  };

  return (
    <div className={styles.container}>
      <p className={styles.filterText}>Showing 68 Results from Development Category</p>
      <div className={styles.DropdownFilter}>
        <div className={styles.containerDropdown}>
          <label className={styles.labelFilter}>Filter By Date</label>
          <select onChange={handleChange} className={styles.Dropdown}>
            <option value="Today">Today</option>
            <option value="">Tomorrow</option>
            <option value="">This Week</option>
            <option value="">This Month</option>
            <option value="">This Year</option>
            <option value="">All Time</option>
          </select>
        </div>
        <div className={styles.containerDropdown}>
          <label className={styles.labelFilter}>Filter By Category</label>
          <select className={styles.Dropdown}>
            <option value="">All Category</option>
            <option value="">Photography</option>
            <option value="">Design</option>
            <option value="">Development</option>
            <option value="">Marketing</option>
            <option value="">Business</option>
            <option value="">Lifestyle</option>
            <option value="">Music</option>
          </select>
        </div>
        <div className={styles.containerDropdown}>
          <label className={styles.labelFilter}>sorting By</label>
          <select className={styles.Dropdown}>
            <option value="">Date</option>
            <option value="">Name</option>
          </select>
        </div>
      </div>
      <div className={styles.line}></div>
      {isAvailableEvent}
    </div>
  );
}
export default Filter;
