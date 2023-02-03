import React from "react";
import "./App.css";

const Details = () => {
  return (
    <div className="container">
      <div className="pic">
        {" "}
        <img src="Ellipse 1238.png" alt="img" />
      </div>

      <p className="textBold">Diane Cooper</p>

      <p className="textLight">dianecooper@example.com</p>

      <span className="pastUpcomming">
        <div className="past">
          <p className="number">15</p>
          <p className="smallFont">past</p>
        </div>
        <div className="verLine"></div>
        <div className="upcomming">
          <p className="number">02</p>
          <p className="smallFont">upcomming</p>
        </div>
      </span>

      <a className="sendInput" href="/">
        <p className="sendMsg">Send Message</p>
      </a>

      <div className="files">
        <p>Files / Documents</p>
        <a className="file1" href="/">
          <img className="checkImg" src="note 4.png" alt="img" />
          <p className="checkup">Check Up Results.pdf</p>
        </a>
        <a className="file2" href="/">
          <img className="checkImg" src="note 4.png" alt="img" />
          <p className="checkup">Check Up Results.pdf</p>
        </a>
        <a className="file3" href="/">
          <img className="checkImg" src="note 4.png" alt="img" />
          <p className="checkup">Medical Prescription.pdf</p>
        </a>
        <a className="file4" href="/">
          <img className="checkImg" src="note 4.png" alt="img" />
          <p className="checkup">Dental X-Ray Results.pdf</p>
        </a>
      </div>
    </div>
  );
};

export default Details;
