import React from "react";
import classes from "./FormsControls.module.css";

export const FormsControls = ({ input, meta, children, ...restProps }) => {
  let hasError = meta.error && meta.touched;

  return (
    <div
      className={classes.formControls + " " + (hasError ? classes.error : "")}
    >
      {children}

      <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
  );
};

export const TextArea = (props) => {
  const { input, meta, children, ...restProps } = props;

  return (
    <FormsControls {...props}>
      <textarea {...input} {...restProps} /> 
    </FormsControls>
  );
};

export const Input = (props) => {
  const { input, meta, children, ...restProps } = props;
  
  return (
    <FormsControls {...props}>
      <input {...input} {...restProps} /> 
    </FormsControls>
  );
};
