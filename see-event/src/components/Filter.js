import React, { useState, useEffect } from "react";
import styles from "../styles/Filter.module.css";
import styles2 from "../styles/Card.module.css";
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
  const [eventsCoba, setEventsCoba] = useState([]);
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
    console.log(e.target.name);
    setFilterEvents({ ...filterEvents, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/event/filter`, {
        params: {
          ...filterEvents,
          page: 1,
        },
      })
      .then((res) => {
        setEventsCoba(res.data.result);
      })
      .catch((err) => alert(err.response.data.message));
  }, [filterEvents]);

  return (
    <div className={styles.container}>
      <p className={styles.filterText}>Showing 68 Results from Development Category</p>
      <div className={styles.DropdownFilter}>
        <div className={styles.containerDropdown}>
          <label className={styles.labelFilter}>Filter By Date</label>
          <select name="date" onChange={handleChange} className={styles.Dropdown} defaultValue={filterEvents.date}>
            {times.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.containerDropdown}>
          <label className={styles.labelFilter}>Filter By Category</label>
          <select name="category" className={styles.Dropdown} onChange={handleChange} defaultValue={filterEvents.category}>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.containerDropdown}>
          <label className={styles.labelFilter}>sorting By</label>
          <select name="order" className={styles.Dropdown} onChange={handleChange} defaultValue={filterEvents.order}>
            <option value="byDate">Date</option>
            <option value="byName">Name</option>
          </select>
        </div>
      </div>
      <div className={styles.line}></div>
      {/* {isAvailableEvent} */}
      {eventsCoba.map((evt) => (
        <div key={evt.id} className={styles2.Card}>
          <img src={evt.image} alt="" className={styles2["card-images"]} />
          <div className={styles2["card-description"]}>
            <a href="#" className={styles2["link-label"]}>
              {evt.category}
            </a>
            <p className={styles2.date}>{evt.date}</p>
            <h4 className={styles2.title}>{evt.title}</h4>
            <p className={styles2.author}>By Adit nento</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Filter;
