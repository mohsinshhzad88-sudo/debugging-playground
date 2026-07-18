import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta, introdata } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
    
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
  <img src={data.img} alt={data.title} />

  <div className="project_info">
    <h2>{data.title}</h2>

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

    <p>{data.description}</p>
  </div>
</div>
                
     );

          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};