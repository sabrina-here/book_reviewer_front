import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { Tooltip } from "react-bootstrap";

function CopyText({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className="border border-3 rounded mb-3 mt-1 d-flex justify-content-between align-items-center container"
      style={{ width: "445px", height: "50px", backgroundColor: "#F8F0E3" }}
    >
      <div>{text}</div>
      <CopyToClipboard text={text} onCopy={handleCopy}>
        <FaCopy
          style={{ cursor: "pointer" }}
          onMouseOver={(e) => (e.currentTarget.style.color = "green")}
          onMouseOut={(e) => (e.currentTarget.style.color = "")}
        />
      </CopyToClipboard>
      {copied && (
        <Tooltip placement="top" show>
          Link copied
        </Tooltip>
      )}
    </div>
  );
}

export default CopyText;
