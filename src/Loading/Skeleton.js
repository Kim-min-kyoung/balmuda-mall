import "./Skeleton.css";
import React from "react";

const Skeleton = () => {
  return (
    <div className="skeleton-card">
        <div className="bar">
            <div className="indicator" />
        </div>
        <div>
            <img className="skeleton-img" />
        </div>
        <div className="skeleton-contents">
            <p className="skeleton-name" />
            <p className="skeleton-price" />
        </div>
    </div>
  );
};

export default Skeleton;