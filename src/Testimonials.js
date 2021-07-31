import React from "react";
import { Carousel } from "react-bootstrap";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <>
      <Carousel style={{ backgroundColor: "#ef8172",textAlign:"center" }}>
        <Carousel.Item interval={2500} className="container-fluid">
          <h2 class="testimonial-text">
            Finally I am able to decide what content to watch. Reviews short and straight to the point. Great Platform!
          </h2>
          <img
            class="testimonial-image"
            src="https://res.cloudinary.com/shubhampersonal/image/upload/v1627409075/man-01_tn9u8y.png"
            alt="avatar"
          />
          <em style={{ color: "#fff" }}>Pranjal, NU</em>
        </Carousel.Item>
        <Carousel.Item interval={2500} className="container-fluid">
          <h2 class="testimonial-text">
            It's fun to be in critic's shoes, and give our perspective of our watched movies, shows, web series.
          </h2>
          <img
            class="testimonial-image"
            src="https://res.cloudinary.com/shubhampersonal/image/upload/v1627312289/pp_esjm1j.jpg"
            alt="avatar"
          />
          <em style={{ color: "#fff" }}>Dhruvit, NIT Surat</em>
        </Carousel.Item>
        <Carousel.Item interval={2500} className="container-fluid">
          <h2 class="testimonial-text">
           The platform is inclined towards young audience, specially high school and college students. So, the reviews are fun to read too..
          </h2>
          <img
            class="testimonial-image"
            src="https://res.cloudinary.com/shubhampersonal/image/upload/v1627311752/bhaiya3_tir6ir.jpg"
            alt="avatar"
          />
          <em style={{ color: "#fff" }}>Shubham Singh, Nirma University</em>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
