import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

function CopyText() {
  return (
    <div
      className="border border-3 rounded my-3 d-flex justify-content-between align-items-center container"
      style={{ width: "360px", height: "50px" }}
    >
      <div>{text}</div>
      <CopyToClipboard text={text}>
        <FaCopy></FaCopy>
      </CopyToClipboard>
    </div>
  );
}

export default CopyText;
