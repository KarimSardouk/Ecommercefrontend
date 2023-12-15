import React from "react";
import Slider from "react-slick";
import images from "../Images/laptop.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../Images/right-arrow.png";

function CategoriesHome() {
  var settings = {
    dots: true,
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          background: "rgb(32, 125, 233)",
          borderRadius: "50%",
        }}
      />
    ),
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      <section className="section-white">
        <div className="yellow-background"></div>

        <div className="carousel">
          <Slider {...settings}>
            <div className="home-category">
              <div className="border">
                <img src={images} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h3 className="h3">Category Name</h3>
                  </div>

                  <div className="arr">
                    <img src={image1} className="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-category">
              <div className="border">
                <img src={images} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h3>Category Name</h3>
                  </div>

                  <div className="arr">
                    <img src={image1} className="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-category">
              <div className="border">
                <img src={images} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h3>Category Name</h3>
                  </div>

                  <div className="arr">
                    <img src={image1} className="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-category">
              <div className="border">
                <img src={images} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h3>Category Name</h3>
                  </div>

                  <div className="arr">
                    <img src={image1} className="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-category">
              <div className="border">
                <img src={images} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h3>Category Name</h3>
                  </div>

                  <div className="arr">
                    <img src={image1} className="arrow" />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="home-category">
              <div className="border">
                <img src={images} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h3>Category Name</h3>
                  </div>

                  <div className="arr">
                    <img src={image1} className="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-category">
              <div className="border">
                <img src={images} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h3>Category Name</h3>
                  </div>

                  <div className="arr">
                    <img src={image1} className="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-category">
              <div className="border">
                <img src={images} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h3>Category Name</h3>
                  </div>

                  <div className="arr">
                    <img src={image1} className="arrow" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default CategoriesHome;
