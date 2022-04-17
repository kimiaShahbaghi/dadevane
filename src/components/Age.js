import React from "react";
import AgeSelector from "./AgeSelector";
import { ReactComponent as SVG } from "./girl.svg";
import Header from "./Header";

function Age() {
  return (
    <div className="age">
      <Header />
      <div className="age-pic">
        <SVG className="svg-age" />
      </div>
      <p> لطفا سال تولدت رو انتخاب کن</p>
      <AgeSelector />
      <div className="button">
        <button> شروع </button>
        <p>
          <a href="#"> ! بدون وارد کردن سن شروع کن</a>
        </p>
      </div>
    </div>
  );
}

export default Age;
