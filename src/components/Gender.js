import React from "react";
import Header from "./Header";
import GirlImg from "./girl.svg";
import BoyImg from "./boy.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.scss";

function NewGender() {
  return (
    <div className="mycontainer">
      <div className="mycontainer__header">
        <Header />
      </div>
      <div className="mycontainer__content">
        <p> !لطفا جنسیت خودت رو انتخاب کن </p>
        <div className="mycontainer__content__gender">
          <div className="flex-child">
            <div class="grid-child">
              <p className="grid-p">آقا</p>
            </div>
            <div class="grid-child">
              <img src={BoyImg} />
            </div>
          </div>
          <div className="flex-child">
            <div class="grid-child">
              <p className="grid-p">خانم</p>
            </div>
            <div class="grid-child">
              <img src={GirlImg} />
            </div>
          </div>
        </div>
        <div className="checkbox">
          <input type="checkbox" className="checkbox__input" checked />
          <label htmlFor="myCheckBox" className="checkbox__label">
            با قوانین و مقررات موافقم
          </label>
        </div>
      </div>
      <div className="mycontainer__footer">
        <button className="mycontainer__button">ادامه</button>
      </div>
    </div>
  );
}

export default NewGender;
