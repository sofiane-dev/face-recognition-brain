import Tilt from "react-tilt";
import brain from "assets/images/brain.png";
import "./index.css";

export default function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img src={brain} alt="brain" />
        </div>
      </Tilt>
    </div>
  );
}
