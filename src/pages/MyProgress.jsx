import React from "react";
import progress from "../asserts/progress.png";

const MyProgress = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div className="container mt-5 d-flex justify-content-between align-items-center">
        <ul
          className="mt-5"
          style={{
            borderRadius: "5px",
            backgroundColor: "#708090",
            width: "50%",
            flexWrap: "wrap",
            color: "rgb(58, 55, 52)",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          //   className="text-light bg-secondary"
        >
          <li style={{ padding: "10px" }}>
            Победы в сражениях: Я совершил ряд героических подвигов, одержав
            победы над врагами своего народа и обеспечивая ему безопасность.
          </li>
          <li className="mt-5" style={{ padding: "10px" }}>
            Установление мира: Я стремился к миру и справедливости, и моими
            усилиями были установлены длительные периоды мира и процветания для
            моего народа.
          </li>
        </ul>
        <img style={{ width: "45%" }} src={progress} alt="" />
      </div>
    </div>
  );
};

export default MyProgress;
