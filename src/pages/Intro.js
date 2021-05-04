import React from "react";

function Intro() {
  return (
    <div id="homePage" className="mainContainer home Intro">
      <section className="left">
        <div className="box">
          <h1 className="myName">
            Hello I am
            <br></br>Jeremiah Valencia
            <br></br>
            <br></br>
            <br></br>Full Stack Developer
            <br></br>based in
            <br></br>Philippines
          </h1>
        </div>
      </section>
      <section className="right">
        <div className="box1">
          <div className="imgContainer">
            <img
              alt="myimage"
              className="myImage"
              src="https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.6435-9/147454798_5042041179203023_1862199331036992512_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHFJUko907LPxerP_uVzzvhBNjeZwestDUE2N5nB6y0Nbwfq61pHIiwwjXxUM9nSMDNEBISA3MFXpBgCyputGIu&_nc_ohc=kOmn_vRo0c0AX_TVyqP&_nc_ht=scontent.fcrk1-1.fna&oh=d0e0382bdc66d0b18f60d0a8dbc8f0d5&oe=60AE2376"
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
