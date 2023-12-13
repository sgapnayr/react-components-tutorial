import React from "react";

function BaseCard({ text, title, price }) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-text">{text}</div>
      <div className="card-text">{price}</div>
    </div>
  );
}

export default BaseCard;
