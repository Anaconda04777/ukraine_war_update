//components
import Articles from "../components/Articles";
import CivilLosses from "../components/CivilLosses";
import TweetISW from "../components/TweetISW";
import UkIntelligence from "../components/UkIntelligence";

//style
import "../style/Global.css";
import "../style/Main.css";

export default function Main() {
  return (
    <main>
      <UkIntelligence />
      <CivilLosses />
      <Articles />
      <TweetISW />
      <div className="uamap glassmorphism">
        <iframe src="https://liveuamap.com"></iframe>
      </div>
    </main>
  );
}
