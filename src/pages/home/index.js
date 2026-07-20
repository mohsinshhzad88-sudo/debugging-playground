import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">

        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>


        {/* HERO SECTION */}
        <div className="intro_sec d-block d-lg-flex align-items-center">

          <div className="hero_media order-1 order-lg-2">
            <img
              src={introdata.your_img_url}
              alt={introdata.title}
              className="hero_image"
            />
          </div>


          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">

            <div className="align-self-center">
              <div className="intro mx-auto">

                <h2 className="mb-1x">
                  {introdata.title}
                </h2>


                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>


                <p className="mb-1x">
                  {introdata.description}
                </p>


                <div className="intro_btn-action pb-5">

                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>


                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>

                </div>

              </div>
            </div>

          </div>

        </div>

<div id="about" className="home_features">

  <div className="feature_box">
    <h3>A BIT ABOUT ME...</h3>

    <p>
      I'm Mohsin Shahzad, a Computer Science student passionate about
      building responsive and interactive web applications using React.
    </p>

    <p>
      Every project I build helps me improve my skills in JavaScript,
      React, and modern web development.
    </p>
  </div>


  <div className="feature_box">
    <h3>WHAT I CAN DO...</h3>

    <div className="feature_item">
      React Development
    </div>

    <div className="feature_item">
      JavaScript
    </div>

    <div className="feature_item">
      Responsive Web Design
    </div>

    <div className="feature_item">
      REST API Integration
    </div>

    <div className="feature_item">
      Git & GitHub
    </div>

  </div>


  <div className="feature_box">
    <h3>RECENT PROJECTS...</h3>

    <div className="project_item">
      🌤 Weather App
    </div>

    <div className="project_item">
      🧮 Calculator
    </div>

    <div className="project_item">
      ✅ To-Do List
    </div>

    <div className="project_item">
      💼 Portfolio Website
    </div>

  </div>

</div>


      </section>
    </HelmetProvider>
  );
};