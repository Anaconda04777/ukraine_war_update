import "../style/TweetISW.css";
import "../style/Global.css";
import React, { useEffect, useState } from "react";

export default function TweetISW() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchRequest();
    //setTimeout(, 1000);
    console.log(data);
  }, []);

  return (
    <div className="tweet-isw">
      {data != undefined
        ? data.map((i) => {
            return (
              <div className="tweet glassmorphism">
                <div className="dati-profilo">
                  <img src={i.imgProfilo} />
                  <h3>{i.nome}</h3>
                </div>
                <p className="sm">{i.date}</p>
                <p>{i.testo}</p>
                <img src={i.immagine} />
              </div>
            );
          })
        : ""}
    </div>
  );
  /**/

  function attachEvent() {
    console.log(document.querySelectorAll(".tweet"));
    document
      .querySelectorAll(".tweet")
      .forEach((i) => i.addEventListener("click", showModal));
  }

  function showModal(ogg) {
    console.log(ogg.target.parentElement);
    let tweet = ogg.target.parentElement;
    document.querySelector(".App").innerHTML += `
    <div class="modal centrator">
      <div class="content tweet glassmorphism">
        <div class="dati-profilo">
          <img src=${tweet.querySelector(".dati-profilo > img").src} />
          <h3>${tweet.querySelector(".dati-profilo > h3").innerHTML}</h3>
        </div>
        <p>${tweet.querySelector(".tweet > p").innerHTML}</p>
        <img src=${tweet.querySelector(".tweet >img").src} />
      </div>
    </div>
    `;

    console.log(document.querySelectorAll(".modal"));
    document.querySelectorAll(".modal").forEach((i) =>
      i.addEventListener("click", function (e) {
        console.log(e.target.classList[0]);
        if (e.target.classList[0] === "modal") {
          e.target.remove();
          attachEvent();
        }
      })
    );
  }

  function fetchRequest() {
    const arr = [];
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "563b57910amsh696aaf99c07bf5bp11fc88jsndffe65338c26",
        "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
      },
    };
    /** */
    fetch(
      "https://twitter135.p.rapidapi.com/UserMedia/?id=71298686&count=10",
      options
    )
      .then((response) => response.json())
      //.then(() => console.log("TweetISW"))
      .then((response) => {
        console.log(response);
        response.data.user.result.timeline_v2.timeline.instructions[0].entries.map(
          (element) => {
            if (element.content.itemContent != undefined) {
              //console.log(element.content.items);
              //console.log(element);
              let strDate =
                element.content.itemContent.tweet_results.result.legacy
                  .created_at;
              arr.push({
                testo:
                  element.content.itemContent.tweet_results.result.legacy
                    .full_text,
                immagine:
                  element.content.itemContent.tweet_results.result.legacy
                    .entities.media[0].media_url_https,
                imgProfilo:
                  element.content.itemContent.tweet_results.result.core
                    .user_results.result.legacy.profile_image_url_https,
                nome: element.content.itemContent.tweet_results.result.core
                  .user_results.result.legacy.screen_name,
                date: strDate.split(" ").slice(0, -3).join("-"),
              });
              console.log(arr);
            }
          }
        );
      })
      //ci va per force il response se no non va
      .then((response) => setData(arr))
      //then(() => )
      .finally(() => attachEvent())
      .catch((err) => console.error(err));
  }
}

/*response.data.user.result.timeline_v2.timeline.instructions[0].entries.forEach(
          (element) => {
            if (element.content.itemContent != undefined) {
              const str =
                element.content.itemContent.tweet_results.result.legacy.entities
                  .media[0].expanded_url;
              arr.push(str.split("/").slice(0, -2).join("/"));
            }
          }
        );*/
