import React, { useState } from "react";
import Header from "./Header";
import GirlImg from "./girl.svg";
import BoyImg from "./boy.svg";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function NewGender() {
  const navigate = useNavigate();
  const [gender, setGender] = useState(undefined);
  let [check, setCheck] = useState(true);
  let [selected, setSelected] = useState(false);

  const womanHandler = () => {
    setGender("woman");
    setSelected((selected = !selected));
    if (selected === false) {
      setGender(undefined);
    }
  };
  console.log(gender, "gender selected");
  console.log(check, "check");
  console.log(selected, "selected");
  const manHandler = () => {
    setGender("man");
    setSelected((selected = !selected));
    if (selected === false) {
      setGender(undefined);
    }
  };
  const checkHandler = () => {
    setCheck((check = !check));
  };
  const buttonHandler = () => {
    if (check && selected === true) {
      return false;
    } else {
      return true;
    }
  };
  const clickHandler = () => {
    navigate("/age");
  };
  return (
    <div className="mycontainer">
      <div className="mycontainer__header">
        <Header />
      </div>
      <div className="mycontainer__content">
        <p> !لطفا جنسیت خودت رو انتخاب کن </p>
        <div className="mycontainer__content__gender">
          <div
            className={gender === "man" ? "flex-child--selected" : "flex-child"}
            onClick={manHandler}
          >
            <div class="grid-child">
              <p className="grid-p">آقا</p>
            </div>
            <div class="grid-child">
              <img src={BoyImg} />
            </div>
          </div>
          <div
            className={
              gender === "woman" ? "flex-child--selected" : "flex-child"
            }
            onClick={womanHandler}
          >
            <div class="grid-child">
              <p className="grid-p">خانم</p>
            </div>
            <div class="grid-child">
              <img src={GirlImg} />
            </div>
          </div>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            className="checkbox__input"
            checked={check}
            onClick={checkHandler}
          />
          <label htmlFor="myCheckBox" className="checkbox__label">
            با قوانین و مقررات موافقم
          </label>
        </div>
      </div>
      <div className="mycontainer__footer">
        <button
          className="mycontainer__button"
          disabled={buttonHandler()}
          onClick={clickHandler}
        >
          ادامه
        </button>
      </div>
    </div>
  );
}

export default NewGender;
