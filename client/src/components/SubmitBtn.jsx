import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ formBtn }) => {
  const navigation = useNavigation();
  const isSubmitted = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className={`btn btn-block ${formBtn && "form-btn"}`}
      disabled={isSubmitted}
    >
      {isSubmitted ? "Submitting..." : "submit"}
    </button>
  );
};

export default SubmitBtn;
