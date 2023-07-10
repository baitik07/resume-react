import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import ManasHeader from "../asserts/manas_header2.jpg";

const AboutMe = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div className="container d-flex justify-content-between align-items-center mt-5 ">
        <Row>
          <Col xs={6} md={4}>
            <Image width={300} src={ManasHeader} roundedCircle />
          </Col>
        </Row>
        <h1
          style={{ borderRadius: "5px", padding: "10px" }}
          className="text-light bg-dark"
        >
          Имя: Манас | Возраст: 1000 лет
        </h1>
      </div>
      <h2
        style={{
          border: "1px solid gray",
          borderRadius: "10px",
          padding: "10px",
        }}
        className="container mt-5 text-light bg-dark"
      >
        Обо мне: Я - легендарный герой исторического эпоса, известного как
        "Манас". Являюсь символом храбрости, мужества и справедливости. Я
        обладаю непревзойденными боевыми навыками, выдающейся лидерской
        способностью и безупречной мудростью.
      </h2>

      <div
        style={{ border: "1px solid gray", borderRadius: "10px" }}
        className="container mt-4 text-light bg-dark"
      >
        <h3>Семейный статус: "женат"</h3>
        <br />
        <h3>Жена: Каныкей | Возраст: 990 лет | Славится своей мудростью</h3>
        <br />
        <h3>Сын: Семетей | Возраст: 965лет | Отважный воин как отец</h3>
      </div>
    </div>
  );
};

export default AboutMe;
