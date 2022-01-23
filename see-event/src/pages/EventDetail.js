import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import styles from "../styles/EventDetail.module.css";
import calenderLogo from "../assets/calendar.svg";
import Avatar from "../components/Avatar";
import messageIcon from "../assets/message-circle.svg";

const EventDetail = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  let showCommendBox = isAuthenticated ? (
    <div className={styles["commend-box-wrapper"]}>
      <div className={styles["user-account"]}>
        <Avatar
          src="https://cdn.idntimes.com/content-images/community/2021/05/s97mhhjwvpii5a0cb41ds2h2tb6-56965fbaa68adf470a17cc45ea5d328d-b110fe95a4e3c84689c90f96df3891e2_600x400.jpg"
          alt=""
        />
        <p className={styles["account-name"]}>John doe</p>
      </div>
      <form className={styles["commend-box"]}>
        <textarea name="text-area" id="text-area" className={styles["commend-text-area"]}></textarea>
        <button type="submit" className={styles["submit-commend"]}>
          <img src={messageIcon} alt="message icon" className={styles["message-icon"]}></img>
          <span>Submit</span>
        </button>
      </form>
    </div>
  ) : null;

  return (
    <div className={styles.EventDetail}>
      <Navbar isLogin={isAuthenticated} />

      <div className={styles.container}>
        <h1 className={styles["main-title"]}>ESL Game: English on Your Feet!</h1>
        <div className={styles["date-container"]}>
          <div className={styles.calender}>
            <img src={calenderLogo} alt="calender logo" />
          </div>
          <p className={styles.date}>SUN, OCT 24 @ 1:15 AM ICT</p>
          <a href="#" className={styles.label}>
            Business
          </a>
        </div>
        <div className={styles["banner-image"]}>
          <img
            src="https://images.unsplash.com/photo-1642715729583-22dc46d09c8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>

        <div className={styles["detail-wrapper"]}>
          <div className={styles.detail}>
            <h3>Details</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, quae maiores dolores consectetur optio earum eligendi necessitatibus
              perferendis tenetur recusandae. Quam iusto velit blanditiis corrupti eaque inventore delectus nostrum ullam ipsam maxime, voluptas nam
              eveniet molestiae accusantium laborum quae temporibus dignissimos numquam deleniti consequatur obcaecati consequuntur quisquam. Illo,
              sunt reprehenderit perferendis alias reiciendis enim excepturi sit? Expedita autem dicta voluptates, ipsa quasi ipsum harum maxime eaque
              accusantium magnam assumenda quo voluptatum iusto ipsam, necessitatibus id iste libero sapiente cupiditate nostrum dolor laudantium qui.
              Eos ad similique temporibus iste nemo maiores veniam cumque in odio natus libero sit quos, voluptatem harum ullam doloremque ex animi
              nam quae. Sapiente totam deserunt necessitatibus explicabo laborum praesentium est aliquid velit. Illo obcaecati nisi esse animi, eum
              quae dolore illum eius sit quo veniam adipisci ipsum assumenda. Non dolorum eaque odit exercitationem nostrum voluptas perferendis
              obcaecati nesciunt voluptatem cupiditate reiciendis itaque modi omnis illo repellendus dolore mollitia quae quas, dolor, sed rerum,
              incidunt odio sunt quod. In consequatur totam, laborum molestias ratione esse dolores recusandae ab voluptate dignissimos nisi
              consectetur qui nobis debitis illo, quod soluta aliquam quis voluptas. Iusto quaerat distinctio voluptates aliquid veniam quidem saepe
              aperiam iste, cupiditate aspernatur? Facere exercitationem impedit inventore cumque porro repellat distinctio mollitia ipsum et harum
              qui in fugit, molestiae tempore eius error dignissimos quisquam perspiciatis. Aliquid, esse quaerat quae atque laudantium ducimus eos
              non ex possimus nobis tempore animi optio soluta iure quam nemo nostrum nihil iusto minus nulla voluptatum voluptatibus dicta. Eaque,
              blanditiis! Cumque doloremque nobis quos ullam facilis accusamus tempora corrupti iusto voluptatem. Sapiente distinctio autem neque quod
              debitis enim, ab perferendis quibusdam, incidunt animi commodi rem obcaecati possimus, nihil vel nesciunt soluta! Pariatur voluptas
              aliquid doloremque animi quis. Deserunt exercitationem hic pariatur nobis mollitia cum voluptate tenetur rerum, error tempore eligendi
              at facilis quidem!
            </p>
          </div>
          <div className={styles.author}>
            <Avatar
              src="https://cdn.idntimes.com/content-images/community/2021/05/s97mhhjwvpii5a0cb41ds2h2tb6-56965fbaa68adf470a17cc45ea5d328d-b110fe95a4e3c84689c90f96df3891e2_600x400.jpg"
              alt=""
            />
            <div className={styles["author-name"]}>
              <p className={styles.created}>Created by</p>
              <p className={styles.name}>Bagus Nugroho Wisnu</p>
            </div>
          </div>
        </div>

        <div className={styles["users-commend-wrapper"]}>
          <h3>Commends</h3>
          <div className={styles["user-wrapper"]}>
            <div className={styles.user}>
              <Avatar
                src="https://cdn.idntimes.com/content-images/community/2021/05/s97mhhjwvpii5a0cb41ds2h2tb6-56965fbaa68adf470a17cc45ea5d328d-b110fe95a4e3c84689c90f96df3891e2_600x400.jpg"
                alt=""
              />
              <div className={styles["user-name"]}>
                <p className={styles.name}>Bliie eilish</p>
                <p className={styles.activity}>4 hours ago</p>
              </div>
            </div>
            <p className={styles["commend-text"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eius atque eveniet corporis harum voluptas?
            </p>
          </div>
          <div className={styles["user-wrapper"]}>
            <div className={styles.user}>
              <Avatar
                src="https://cdn.idntimes.com/content-images/community/2021/05/s97mhhjwvpii5a0cb41ds2h2tb6-56965fbaa68adf470a17cc45ea5d328d-b110fe95a4e3c84689c90f96df3891e2_600x400.jpg"
                alt=""
              />
              <div className={styles["user-name"]}>
                <p className={styles.name}>Bliie eilish</p>
                <p className={styles.activity}>4 hours ago</p>
              </div>
            </div>
            <p className={styles["commend-text"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eius atque eveniet corporis harum voluptas?
            </p>
          </div>
          <div className={styles["user-wrapper"]}>
            <div className={styles.user}>
              <Avatar
                src="https://cdn.idntimes.com/content-images/community/2021/05/s97mhhjwvpii5a0cb41ds2h2tb6-56965fbaa68adf470a17cc45ea5d328d-b110fe95a4e3c84689c90f96df3891e2_600x400.jpg"
                alt=""
              />
              <div className={styles["user-name"]}>
                <p className={styles.name}>Bliie eilish</p>
                <p className={styles.activity}>4 hours ago</p>
              </div>
            </div>
            <p className={styles["commend-text"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eius atque eveniet corporis harum voluptas?
            </p>
          </div>
        </div>
        {showCommendBox}
      </div>
      <Footer />
    </div>
  );
};

export default EventDetail;
