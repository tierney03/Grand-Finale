import React from "react";
import "./waiver.css";

const Waiver = () => {
  const URL = "https://form.jotform.com/230127028620141"; //embed URL
  const styles = {
    height: "100vh",
    width: "100%",
  };
  return (
    <div className='waiver'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe
          class='embed-responsive-item'
          title='fitness waiver'
          style={styles}
          src={URL}
        ></iframe>
      </div>
    </div>
  );
};

export default Waiver;
