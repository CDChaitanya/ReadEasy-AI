import React from "react";

function SummarizeButton({ onSummarize }) {
  return (
    <button className="btn btn-primary mt-3" onClick={onSummarize}>
      Summarize
    </button>
  );
}

export default SummarizeButton;
