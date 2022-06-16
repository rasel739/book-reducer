import React, { memo } from "react";

const Message = ({ handleMessage, count }) => {
  console.log("Message sent response");

  return (
    <div>
      Message count {count}
      <div>
        <button
          className="btn  btn-warning"
          type="button"
          onClick={handleMessage}
        >
          Toggle
        </button>
      </div>
    </div>
  );
};

export default memo(Message);
