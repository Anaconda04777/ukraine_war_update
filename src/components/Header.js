import "../style/Header.css";
import "../style/Global.css";

const date = new Date();
const currentDate =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

export default function Header() {
  return (
    <header className="centrator">
      <h1>Ukraine War Update</h1>
      <p>{currentDate}</p>
    </header>
  );
}
