import React, { useState } from "react";
import "../CSS/About.css";

import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import processIcon1 from "../Assets/process-icon-4-1.svg";
import processIcon2 from "../Assets/process-icon-4-2.svg";
import processIcon3 from "../Assets/process-icon-4-3.svg";
import check from "../Assets/check.svg";
import wcuBox1 from "../Assets/wcu-box-icon-1.svg";
import wcuBox2 from "../Assets/wcu-box-icon-2.svg";
import quote from "../Assets/quote-icon2.svg";

import {
  brandBreakpoints,
  brandData,
  feedBreakpoints,
  feedbackData,
  teamBreakpoints,
  teamData,
} from "../Data/Data";

const About = () => {
 

  const [state, setState] = useState(true);


  const changeState = () => {
    setState((prev) => !prev);
  };

  return (
    <div>
      {/* ==============Introduction============= */}

      <section className="intro-sec">
        <div className="title-area">
          <span className="double-title">
            <span className="double-line"></span>ABOUT OUR COMPANY
          </span>
          <h2 className="sec-title">Welcome to S-Store</h2>
        </div>

        <div className="about-intro">
          <p>
            Progressively develop out-of-the-box initiatives with superior
            opportunities. Interactively streamline cross-media partnerships
            without efficient process improvements. Distinctively network
            exceptional e-services. Progressively develop out-of-the-box
            initiatives with superior opportunities. Interactively streamline
            cross-media partnerships without efficient process improvements.
            Distinctively network exceptional e-services. Progressively develop
            out-of-the-box initiatives with superior opportunities.
            Interactively streamline cross-media partnerships without efficient
            process improvements. Distinctively network exceptional e-services.
            Progressively develop out-of-the-box initiatives with superior
            opportunities. Interactively streamline cross-media partnerships
            without efficient process improvements. Distinctively network
            exceptional e-services.
          </p>
        </div>

        <div>
          <div className="list-column2">
            <div className="checklist">
              <ul>
                <li>
                  <img src={check} alt="img" /> We’re Here When You Need Us
                </li>
                <li>
                  <img src={check} alt="img" /> Service &amp; Maintenance
                </li>
                <li>
                  <img src={check} alt="img" /> In House Financing
                </li>
                <li>
                  <img src={check} alt="img" /> Best Collection
                </li>
                <li>
                  <img src={check} alt="img" /> Famous Brands
                </li>
                <li>
                  <img src={check} alt="img" />
                  Trusted Car Dealer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==============Delivery Process============= */}

      <section className="process-sec ">
        <div className="process-con">
          <div className="title-area process-head">
            <span className="double-title">
              <span className="double-line"></span> HOW IT WORKS
            </span>
            <h2 className="sec-title">Easy 3-Step Working Process</h2>
          </div>
          <div className="process-content">
            <div className="col-md-6 col-lg-4 process-box-wrap">
              <div className="process-box">
                <div className="process-box_icon background-image">
                  <img className="process-icon" src={processIcon1} alt="icon" />
                  <div className="process-box_number">01</div>
                </div>
                <h2 className="process-box_title box-title">
                  Replenishment &amp; Picking
                </h2>
                <p className="process-box_text">
                  Professionally unleash collaborative e-services whereas
                  frictionless niches. Conveniently mesh cooperative quality
                  vectors.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 process-box-wrap">
              <div className="process-box">
                <div className="process-box_icon background-image">
                  <img className="process-icon" src={processIcon2} alt="icon" />
                  <div className="process-box_number">02</div>
                </div>
                <h2 className="process-box_title box-title">
                  Transportation Process
                </h2>
                <p className="process-box_text">
                  Transportation unleash collaborative e-services whereas
                  frictionless niches. Conveniently mesh cooperative quality
                  vectors.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 process-box-wrap">
              <div className="process-box">
                <div className="process-box_icon background-image">
                  <img className="process-icon" src={processIcon3} alt="icon" />
                  <div className="process-box_number">03</div>
                </div>
                <h2 className="process-box_title box-title">
                  Packaging &amp; Distribution
                </h2>
                <p className="process-box_text">
                  Distribution unleash collaborative e-services whereas
                  frictionless niches. Conveniently mesh cooperative quality
                  vectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============Team Section============= */}

      <section className="team-swiper">
        <div className="title-area team-head">
          <h3 className="double-title">
            <span className="double-line"></span> TEAM MEMBERS
          </h3>
          <h2 className="sec-title">Our Expert Team Members</h2>
        </div>

        <div className="team-prev">
          <GrFormPrevious />
        </div>
        <div className="team-next">
          <GrFormNext />
        </div>

        <Swiper
          className="swiper"
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          breakpoints={teamBreakpoints}
          modules={[Navigation, Autoplay, Pagination]}
          pagination={{ clickable: true, dynamicBullets: true, }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          navigation={{ prevEl: ".team-prev", nextEl: ".team-next" }}
        >
          <div className="team-con">
            {teamData.map((item, id) => {
              return (
                <SwiperSlide key={id}>
                  <div className="team-card swiper-slide">
                    <div className="team-img">
                      <img src={item.image} alt="Team" />
                    </div>
                    <div className="team-content">
                      <h3 className="team-name">
                        <a>{item.name}</a>
                      </h3>
                      <span className="team-desig">{item.position}</span>
                      <div className="team-social">
                        <a target="_blank"  rel="noreferrer" href="https://facebook.com/">
                          <FaFacebook />
                        </a>
                        <a target="_blank"  rel="noreferrer" href="https://twitter.com/">
                          <FaTwitter />
                        </a>
                        <a target="_blank"  rel="noreferrer" href="https://linkedin.com/">
                          <FaLinkedin />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <FaInstagram />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </section>

      {/* ==============Why choose Us Section============= */}

      <section className="Why-us-con">
        <div className="why-content">
          <div className="why-data-img">
            <div className="why-img">
              <a className="play-btn popup-video" onClick={changeState}>
                <FaPlay className="play-icon" />
              </a>
            </div>
          </div>
          <div className="why-data">
            <div className="wcu-wrap">
              <div className="wcu-text">
                <span className="double-title">WHY CHOOSE US </span>
                <h2 className="sec-title">
                  We Got Your Covered. Guaranteed Quality
                </h2>
                <p className="content">
                  Uniquely reintermediate distinctive niche market wherea
                  interoperable infomediarie. Completely negotiate seamless
                  partnerships via cutting-edge expertise. Rapidiously
                  reintermediate cooperative expertise rather than high-quality
                  growth strategies.
                </p>
              </div>

              <div className="wcu-card-con">
                <div className="wcu-card">
                  <div className="wcu-icon">
                    <img src={wcuBox1} alt="icon" />
                  </div>
                  <h3 className="card-title h4">Wide range of brands</h3>
                  <p className="content">
                    Dynamically redefine flexible core competencies with
                    synergistic.
                  </p>
                </div>

                <div className="wcu-card">
                  <div className="wcu-icon">
                    <img src={wcuBox2} alt="icon" />
                  </div>
                  <h3 className="">Get Reasonable Price</h3>
                  <p className="content">
                    Reasonable redefine flexible core competencies with
                    synergistic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`i-vid ${state ? "i-vid-hide" : "iframe-show"}`}>
          <iframe src="https://www.youtube.com/embed/2LCNqRj6tJU?si=B97p8x3vP4oTTMSD?&amp;mute=1"title="About-Video"></iframe>
          <button className="vid-close" onClick={changeState}>
            <FaXmark />
          </button>
        </div>
      </section>

      {/*============Feedback section===============*/}

      <section className="feedback">
        <div className="title-area feedback-head">
          <span className="double-title">
            <span className="double-line"></span> TESTIMONIALS
          </span>
          <h2 className="sec-title">Our Customer Feedback</h2>
        </div>

        <div className="feed-prev">
          <GrFormPrevious />
        </div>
        <div className="feed-next">
          <GrFormNext />
        </div>

        <Swiper
          className="swiper"
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          breakpoints={feedBreakpoints}
          pagination={{ clickable: true, dynamicBullets: true, }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination]}
          navigation={{ prevEl: ".feed-prev", nextEl: ".feed-next" }}
        >
          <div className="feed-card-con">
            {feedbackData.map((item, id) => {
              return (
                <SwiperSlide key={id}>
                  <div className="feed-card">
                    <div className="feed-icon">
                      <img src={quote} alt="" />
                    </div>
                    <div className="feed-content">
                      <p>{item.feedback}</p>
                      <div className="testi-box_profile">
                        <div className="testi-dp">
                          <img src={item.image} alt="img" />
                        </div>
                        <div className="details">
                          <h4 className="testi-box_name">{item.name}</h4>
                          <span className="testi-box_desig">
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </section>

      {/*============Brands Section=============*/}

      <section className="Brand-con">
        <div className="title-area">
          <h2 className="double-title">
            <span className="double-line"></span> WE HAVE TRUSTED MORE THAN{" "}
            <span className="text-theme">20K+ </span>GLOBAL CLIENTS
          </h2>
        </div>

        <div className="brand-swiper ">
          <Swiper
            className="swiper"
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            breakpoints={brandBreakpoints}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: ".feed-prev", nextEl: ".feed-next" }}
          >
            {brandData.map((item, id) => {
              return (
                <SwiperSlide key={id}>
                  <div className="brand-slide">
                    <img src={item.image} alt="Client Logo" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default About;
