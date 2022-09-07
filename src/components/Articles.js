import "../style/Articles.css";
import "../style/Global.css";
import React, { useEffect, useState } from "react";

export default function Articles() {
  const [data, setData] = useState();
  let index = 0;
  const articles = [];

  useEffect(() => {
    fetchRequest();
    //setTimeout(, 1000);
    console.log(data);
    //scorrimento();
  }, []);

  return (
    <div className="articles glassmorphism centrator">
      <h3>Articles:</h3>
      {data != undefined
        ? data.map((article) => {
            return (
              <div className="article hide centrator">
                <h1 className="centrator">{article.title}</h1>
                <p>{article.source}</p>
                <a href={article.url} target="_blank" className="btn-grad">
                  Read the article
                </a>
              </div>
            );
          })
        : ""}
      <div className="opt-carosello">
        <p className="btn-grad">⋘</p>
        <div className="bollini centrator">
          {data != undefined
            ? data.map((i) => {
                return <p>○</p>;
              })
            : ""}
        </div>
        <p className="btn-grad">⋙</p>
      </div>
    </div>
  );

  function setArt() {
    document.querySelectorAll(".article")[index].classList.remove("hide");
    document.querySelectorAll(".bollini > *")[index].classList.add("white");
  }

  function artPrima() {
    oscura();
    index--;
    if (index < 0) {
      index = articles.length - 1;
    }
    console.log(index);
    setArt();
  }

  function artDopo() {
    oscura();
    index++;
    if (index > articles.length - 1) {
      index = 0;
    }
    console.log(index, data);
    setArt();
  }

  function oscura() {
    document.querySelectorAll(".article")[index].classList.add("hide");
    document.querySelectorAll(".bollini > *")[index].classList.remove("white");
  }

  function setEventListeners() {
    document
      .querySelector(".opt-carosello > p:first-child")
      .addEventListener("click", artPrima);
    document
      .querySelector(".opt-carosello > p:last-child")
      .addEventListener("click", artDopo);
  }

  function fetchRequest() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "daf1a56422mshdb65a203d85e496p1190a3jsnaac63988fa76",
        "X-RapidAPI-Host": "ukraine-war-live.p.rapidapi.com",
      },
    };

    fetch("https://ukraine-war-live.p.rapidapi.com/news", options)
      .then((response) => response.json())
      .then((response) => {
        response.map((article) => {
          if (
            article.url.includes("https") &&
            [...article.title].length < 150 &&
            ctrlDoppi(article, articles)
          ) {
            articles.push(article);
          }
        });
      })
      .then(() => setData(articles))
      //.then(() => )
      .finally(() => {
        setEventListeners();
        setArt();
      })
      .catch((err) => console.error(err));
  }

  function ctrlDoppi(art, arr) {
    let flag = true;
    arr.forEach((i) => {
      //console.log(art.title.split(" "), i.title.split(" "));
      if (art.title.trim() === i.title.trim()) {
        flag = false;
      }
    });
    return flag;
  }
}
