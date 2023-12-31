import React, { useEffect, useRef } from "react";
import "./Header.css";

function Header(props) {
  const resultRef = useRef();
  const expressionRef = useRef();

  useEffect(() => {
    resultRef.current.scrollIntoView();
  }, [props.history]);

  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [props.expression]);

  return (
    //header contains three aspects
    //history, present expression and result
    <div className="header scroll">
      <div className="header_history">
        {props.history &&
          props.history?.map((item) => (
            <p key={item + "" + Math.random() * 44}>{item}</p>
          ))}
      </div>
      <br />
      <div ref={expressionRef} className="header_expression scroll">
        <p>{props.expression}</p>
      </div>
      <p ref={resultRef} className="header_result">
        {props.result}
      </p>
    </div>
  );
}

export default Header;
