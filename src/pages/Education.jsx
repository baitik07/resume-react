import React from "react";
import university from "../asserts/manas_university.png";
import manasBook from "../asserts/manas_book.jpg";

const Education = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div className="container mt-5 d-flex justify-content-between align-items-center">
        <img style={{ width: "220px" }} src={university} alt="" />
        <h2
          style={{
            border: "1px solid gray",
            borderRadius: "10px",
            width: "70%",
            padding: "10px",
          }}
          className="text-light bg-dark"
        >
          Высшее образование: Бакалавр Военной части и мудрости | Университет:
          "Kırgız-Türk Manas Üniversitesi" | Закончил: 2016-2020
        </h2>
      </div>
      <br />
      <br />
      <div className="container mt-5 d-flex justify-content-between align-items-center">
        <h2
          style={{
            border: "1px solid gray",
            borderRadius: "10px",
            width: "70%",
            padding: "10px",
          }}
          className="text-light bg-dark"
        >
          В 2022 году посвятил себя написанию книги, в которой вы сможете узнать
          историю моей жизни. Книга была издана в начале 2023 года, и получила
          все возможные награды "Лучшая книга" по версии Forbes.
        </h2>
        <img style={{ width: "300px" }} src={manasBook} alt="" />
      </div>
    </div>
  );
};

export default Education;
