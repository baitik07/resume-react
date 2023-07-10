import React from "react";
import { ProgressBar } from "react-bootstrap";

const Skills = () => {
  return (
    <div style={{ height: "90vh" }}>
      <div
        className="container d-flex flex-column "
        style={{
          rowGap: "30px",
          border: "1px solid",
          borderRadius: "5px",
          padding: "10px",
          marginTop: "60px",
        }}
      >
        <ProgressBar animated striped variant="success" now={88} />
        <ProgressBar animated striped variant="info" now={96} />
        <ProgressBar animated striped variant="warning" now={92} />
        <ProgressBar animated striped variant="danger" now={87} />
      </div>
      <ul className="container mt-5" style={{ fontSize: "20px" }}>
        <li style={{ color: "darkgreen" }}>
          Боевые навыки: владение мечом, стрелами и другими оружиями, умение
          справляться с физическими испытаниями и боями.
        </li>
        <li style={{ color: "blue", marginTop: "15px" }}>
          Стратегическое мышление: Я обладал способностью разрабатывать сложные
          военные стратегии и планы, анализировать ситуацию на поле боя и
          принимать важные решения.
        </li>
        <li style={{ color: "darkgoldenrod", marginTop: "15px" }}>
          Дипломатия: Я проявлял мудрость и толерантность во взаимодействии с
          другими народами и вождями, стремился к мирному сосуществованию и
          установлению справедливых отношений.
        </li>
        <li style={{ color: "red", marginTop: "15px" }}>
          Самоотверженность: Я был полностью предан своему народу и боролся за
          его свободу и благополучие, несмотря на все трудности и опасности.
        </li>
      </ul>
    </div>
  );
};

export default Skills;
