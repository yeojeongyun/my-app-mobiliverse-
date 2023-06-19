import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const movePage = useNavigate();

  function goDetail() {
    movePage("/Detail");
  }

  return (
    <div className="App">
      <div>
        <img
          className="background1"
          alt="background"
          src="img/background.gif"
        />
        <div className="buttonDiv">
          <button className="button" onClick={goDetail}>
            바로가기
          </button>
        </div>
      </div>
    </div>
  );
}
