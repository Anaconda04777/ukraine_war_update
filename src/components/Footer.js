import "../style/Footer.css";
import "../style/Global.css";

export default function Footer() {
  return (
    <footer className="sm">
      <div className="api-repo">
        <h3>Fonti:</h3>
        <a href="https://rapidapi.com/davidbenjaminnovotny/api/ukraine-war-live/">
          Api News
        </a>
        <a href="https://rapidapi.com/luca.carducci91/api/ukraine-war-data/">
          Api Rifugiati
        </a>
        <a href="https://me.liveuamap.com/widget">LiveUaMap</a>
        <a href="https://storymaps.arcgis.com/stories/36a7f6a6f5a9448496de641cf64bd375">
          Mappa ISW
        </a>
        <a href="https://rapidapi.com/Glavier/api/twitter135/">Api Twitter</a>
        <a href="https://geo.parabellumhistory.net/index.php/view/map/?repository=urc&project=ukrainian_russian_crisis">
          Mappa Parabellum
        </a>
      </div>
    </footer>
  );
}
