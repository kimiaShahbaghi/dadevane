import React from "react";
import Header from "./Header";
//import { ReactComponent as BoyImg } from "./boy.svg";
//import { ReactComponent as GirlImg } from "./girl.svg";
import GirlImg from "./girl.svg";
import BoyImg from "./boy.svg";

function Gender() {
  return (
    <div className="gender">
      <Header />
      <p id="gender-header">لطفا جنسیت خودت رو انتخاب کن</p>
      <div className="parent">
        <div className="child">
          <div className="pic">
            <img src={BoyImg} />
          </div>
          <p> آقا </p>
        </div>
        <div className="child">
          <div className="pic">
            <img src={GirlImg} />
          </div>
          <p> خانم </p>
        </div>
      </div>
      <div id="checkBox">
        <input type="checkbox" id="myCheckBox" />
        <label for="myCheckBox">با قوانین و مقررات موافقم</label>
      </div>
      <div className="button">
        <button> ادامه </button>
      </div>
    </div>
  );
}

export default Gender;
