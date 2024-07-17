import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img src="/logo.jpg" alt="Sweet Disaster" style={{ width: 100 }} />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
