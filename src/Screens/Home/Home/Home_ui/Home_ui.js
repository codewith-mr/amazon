import React, { useState, useEffect } from "react";
import "../Home_ui/Home_ui.css";
import { Carousel } from "react-bootstrap";
import { items_boxes } from "../../../../Components/Utils/mock/Login_signup_data";
import ExampleCarouselImage1 from "../../../../Images/slider_img/toys.jpg";
import ExampleCarouselImage2 from "../../../../Images/slider_img/beauty.jpg";
import ExampleCarouselImage3 from "../../../../Images/slider_img/quest.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Home_ui = () => {
  const [newClass, setNewClass] = useState(null);

  document.title = "Amazon.com. Spend less. Smile more.";

  const handleClasses = (item) => {
    setNewClass(item);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".custom_carousel1") &&
        !event.target.closest(".custom_carousel2")
      ) {
        setNewClass(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="home_container">
      <div className="container home_ui">
        <Carousel
          indicators={false}
          interval={null}
          className="carousel_container"
          prevIcon={
            <FontAwesomeIcon
              className={`custom_carousel1 ${
                newClass === "prev" ? "focus" : ""
              }`}
              icon={faChevronLeft}
              onClick={() => handleClasses("prev")}
            />
          }
          nextIcon={
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`custom_carousel2 ${
                newClass === "next" ? "focus" : ""
              }`}
              onClick={() => handleClasses("next")}
            />
          }
        >
          <Carousel.Item>
            <img
              src={ExampleCarouselImage1}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              text="First slide"
              alt="img1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={ExampleCarouselImage2}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              alt="img2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={ExampleCarouselImage3}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              text="Third slide"
              alt="img3"
            />
          </Carousel.Item>
        </Carousel>
        <div className="item_container">
          <div className="container items_box">
            {items_boxes.map((item, index) => (
              <div key={index} className={item.className}>
                <h4>{item.title}</h4>
                <div className={item.firstRowClass}>
                  <div className={item.item1Class}>
                    <div className={item.imgClass}>
                      <img src={item.image1} alt="img" />
                    </div>
                    <p>{item.item1_title}</p>
                  </div>
                  <div className={item.item2Class}>
                    <div className={item.imgClass}>
                      <img src={item.image2} alt="img" />
                    </div>
                    <p>{item.item2_title}</p>
                  </div>
                </div>
                <div className={item.secondRowClass}>
                  <div className={item.item3Class}>
                    <div className={item.imgClass}>
                      <img src={item.image3} alt="img" />
                    </div>
                    <p>{item.item3_title}</p>
                  </div>
                  <div className={item.item4Class}>
                    <div className={item.imgClass}>
                      <img src={item.image4} alt="img" />
                    </div>
                    <p>{item.item4_title}</p>
                  </div>
                </div>
                <p>{item.button}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_ui;
