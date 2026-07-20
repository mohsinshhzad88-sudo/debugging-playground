import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Container } from "react-bootstrap";
import { dataportfolio, meta, services } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">

        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>


        <div className="mb-5 po_items_ho">

          {dataportfolio.map((data, i) => (

            <div key={i} className="po_item">

              <img 
                src={data.img} 
                alt={data.title} 
              />


              <div className="project_info">

                <h2>
                  {data.title}
                </h2>


                <h1 className="fluidz-48">
                  <Typewriter
                    options={{
                      strings: [
                        "React Projects",
                        "Web Development",
                        "UI / UX Design",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>


                <p>
                  {data.description}
                </p>

              </div>

              <section className="portfolio_features" aria-label="Portfolio highlights">
                <div className="portfolio_features__intro">
                  <h2>Highlights</h2>
                  <p>These are the main strengths I bring into my projects.</p>
                </div>

                <div className="portfolio_feature_grid">
                  {services.map((service) => (
                    <div key={service.service_id} className="portfolio_feature_box">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>

          ))}

        </div>

      </Container>
    </HelmetProvider>
  );
};