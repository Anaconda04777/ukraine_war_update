import "../style/CivilLosses.css";
import "../style/Global.css";
import React, { useEffect, useState } from "react";

export default function CivilLosses() {
  //const fileSystem = require("../../node_modules/fs-extra/lib/fs/index.js");

  //data.map((i) => console.log(i));
  const [data, setData] = useState();

  //const dio = JSON.stringify(.at(-1));
  console.log();

  useEffect(() => {
    //fetchRequest();
    //setTimeout(fetchRequest(), 2000);
    fetchRequest();
    console.log(data);
  }, []);

  return (
    <div className="civil-losses glassmorphism centrator">
      <h2>Last number of refugee</h2>
      <p>{data != undefined ? data.date : ""}</p>
      <h1>{data != undefined ? data.individuals : ""}</h1>
    </div>
  );

  function fetchRequest() {
    //const arr = [];
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "daf1a56422mshdb65a203d85e496p1190a3jsnaac63988fa76",
        "X-RapidAPI-Host": "ukraine-war-data.p.rapidapi.com",
      },
    };

    fetch(
      "gesu",
      //"https://ukraine-war-data.p.rapidapi.com/data/2021/ukraine-refugee-data/per_date_cumulative.json",
      options
    )
      .then((response) => response.json())
      //.then(() => console.log("UK"))
      .then((response) => {
        //console.log(response.at(-1));
        localStorage.setItem("lastDate", response.at(-1).date);
        localStorage.setItem("lastIndividuals", response.at(-1).individuals);
      })
      //ci va per force il response se no non va
      .catch((err) => {
        console.error(err);
        //date.map((i) => console.log(i));
        //localStorage.setItem("lastRep", JSON.stringify(date.at(-1)));
      });
    setData({
      date: localStorage.getItem("lastDate"),
      individuals: localStorage.getItem("lastIndividuals"),
    });
  }
}
