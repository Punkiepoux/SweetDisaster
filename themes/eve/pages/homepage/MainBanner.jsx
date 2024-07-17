import React from "react";
import "./MainBanner.scss";

function MainBanner() {
  return (
    <div className="main-banner-home flex items-center">
      <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="text-center md:text-left px-2 ">
          <h2 className="h1 ">
            Si vous êtes plus qu’un vrai foutoir, alors vous êtes une sweet disaster babe.
            Bienvenue en enfer, bitch 💋
          </h2>
          <p className="banner-font">
            Lieu sûr et sarcasme, sugar and daddy, DIY ou mourir ❤️
            Bien évidemment, c’est fait à la main
            Xoxo
          </p>
          <p></p>
          <a className="button button-primary" href="#">
            SHOW NOW
          </a>
        </div>
        <div />
      </div>
    </div>
  );
}

export default MainBanner;

export const layout = {
  areaId: "content",
  sortOrder: 1,
};
