import React from "react";

const Contacts = () => {
  return (
    <div style={{ height: "70vh" }}>
      <div
        className="container d-flex flex-column mt-5 text-light bg-dark"
        style={{
          textAlign: "center",
          textDecoration: "underline",
          borderRadius: "10px",
          width: "50%",
          padding: "10px",
        }}
      >
        <h1>Contact me: +996(554)-500-005</h1>
        <br />
        <h2>Email: manas@gmail.com</h2>
        <br />
        <h2>Location: Talas village , index: 720010</h2>
      </div>
    </div>
  );
};

export default Contacts;
