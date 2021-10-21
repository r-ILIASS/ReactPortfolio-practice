import { IoMdPerson, IoMdMail } from "react-icons/io";
import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            My Stuff
          </a>
          <div className="itemContainer">
            <IoMdPerson className="icon" /> <span>06064440</span>
          </div>
          <div className="itemContainer">
            <IoMdMail className="icon" /> <span>4head@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
