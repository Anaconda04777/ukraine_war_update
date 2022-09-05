import "../style/UkIntelligence.css";
import "../style/Global.css";
import React, { useEffect, useState } from "react";

export default function UkIntelligence() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchRequest();
    //setTimeout(fetchRequest(), 2000);
    console.log(data);
  }, []);

  return (
    <div className="uk-intelligence glassmorphism centrator">
      <h3>Update of Britannic Intelligence:</h3>
      <p>{data != undefined ? data.testo : ""}</p>
      <div className="centrator">
        <img src={data != undefined ? data.immagine : ""} />
      </div>
    </div>
  );

  function fetchRequest() {
    const arr = [];
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "563b57910amsh696aaf99c07bf5bp11fc88jsndffe65338c26",
        "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
      },
    };

    fetch(
      "https://twitter154.p.rapidapi.com/user/tweets?username=defencehq&limit=10",
      options
    )
      .then((response) => response.json())
      //.then(() => console.log("UK"))
      .then((response) => {
        console.log(response);
        response.results.map((element) => {
          console.log(element.text);
          //console.log(element.content.items);

          if (
            element.text.includes(
              "Latest Defence Intelligence update on the situation in Ukraine"
            )
          ) {
            arr.push({
              testo: element.text,
              immagine: element.media_url[0],
            });
            //console.log(arr);
          }
        });
      })
      //ci va per force il response se no non va
      .then(() => setData(arr[0]))
      //.then(() => (data === undefined ?  : undefined))
      //.then(() => new Promise((resolve) => setTimeout(resolve, 1100)))
      .catch((err) => console.error(err));
  }
}
