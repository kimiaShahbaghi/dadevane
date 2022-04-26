import React from "react";
import Header from "./Header";
import GirlImg from "./girl.svg";
import BoyImg from "./boy.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.scss";
import AgeSelector from "./AgeSelector";

function Age() {
  return (
    <div className="mycontainer">
      <div className="mycontainer__header">
        <Header />
      </div>
      <div className="mycontainer__content">
        <div className="mycontainer__content__agePic">
          <img src={BoyImg} />
        </div>
        <p>لطفا سال تولدت رو انتخاب کن</p>
        <div className="mycontainer__content__ageSelector">
          <AgeSelector />
        </div>
      </div>
      <div className="mycontainer__footer">
        <button className="mycontainer__button">شروع</button>
        <a href="#">
          <p>! بدون وارد کردن سن شروع کن</p>
        </a>
      </div>
    </div>
  );
}

export default Age;
