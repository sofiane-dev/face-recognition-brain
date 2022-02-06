import { useState } from "react";
import "./index.css";
import requestRegions from "./requestRegions";

export default function FaceRecognition({ imgUrl }) {
  const [boxes, setBoxes] = useState([]);
  if (imgUrl) {
    const faceImg = document.getElementById("faceImg");
    requestRegions(imgUrl, faceImg).then(
      (regions) => regions && setBoxes(regions)
    );
  }
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="faceImg" alt="" src={imgUrl} height="auto" width="500px" />
        {boxes.map((box, index) => {
          const { top_boundry, bottom_boundry, right_boundry, left_boundry } =
            box;
          return (
            <div
              key={index}
              className="bounding-box"
              style={{
                top: top_boundry,
                bottom: bottom_boundry,
                left: left_boundry,
                right: right_boundry,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
