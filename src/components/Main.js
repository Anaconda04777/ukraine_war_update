//components
import Articles from "../components/Articles";
import CivilLosses from "../components/CivilLosses";
import TweetISW from "../components/TweetISW";
import UkIntelligence from "../components/UkIntelligence";
import React, { useEffect } from "react";
//style
import "../style/Global.css";
import "../style/Main.css";

export default function Main() {
  useEffect(() => {
    try {
      document.querySelector(".liveuamap").addEventListener("click", showUaMap);
      document
        .querySelector(".mappa-parabellum")
        .addEventListener("click", showParabellum);
      document.querySelector(".mappa-isw").addEventListener("click", showISW);
    } catch {}
    /*if (document.querySelector(".mappe") != undefined) {
      console.log("cristo ladro");
      setEventListener();
    }*/

    //setEventListener();
  }, []);

  return (
    <main>
      <UkIntelligence />
      <CivilLosses />
      <Articles />
      <TweetISW />
      <div className="mappe glassmorphism centrator">
        <div className="liveuamap btn-grad centrator">LiveUaMap</div>
        <div className="mappa-parabellum btn-grad centrator">Parabellum</div>
        <div className="mappa-isw btn-grad centrator">Mappa ISW</div>
      </div>
      <div className="uamap glassmorphism">
        <iframe
          className="iframe-liveuamap"
          src="https://liveuamap.com"
        ></iframe>
        <iframe
          className="iframe-mappa-isw hide"
          src="https://storymaps.arcgis.com/stories/36a7f6a6f5a9448496de641cf64bd375?header"
          allowfullscreen
          allow="geolocation"
        ></iframe>
        <iframe
          className="iframe-mappa-parabellum hide"
          src="https://geo.parabellumhistory.net/index.php/view/map/?repository=urc&project=ukrainian_russian_crisis"
        ></iframe>
      </div>
    </main>
  );

  function setEventListener() {
    console.log("gesu");
  }

  function showUaMap() {
    hideAll();
    document.querySelector(".iframe-liveuamap").classList.remove("hide");
  }
  function showParabellum() {
    hideAll();
    document.querySelector(".iframe-mappa-parabellum").classList.remove("hide");
  }
  function showISW() {
    hideAll();
    document.querySelector(".iframe-mappa-isw").classList.remove("hide");
  }

  function hideAll() {
    document
      .querySelectorAll(".uamap > *")
      .forEach((i) => i.classList.add("hide"));
  }
}
