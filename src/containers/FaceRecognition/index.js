import { useEffect, useState } from "react";
import "./index.css";
import getFaceRegions from "../../api/face-detection";

export default function FaceRecognition({ imgUrl }) {
  const [loading, setLoading] = useState(false);
  const [boxes, setBoxes] = useState([]);
  useEffect(() => {
    imgUrl.length > 0 && setLoading(true);
  }, [imgUrl]);

  const handleOnLoad = async (e) => {
    const { src: url, height, width } = e.target;
    const imgMeta = { url, height, width };
    const response = await getFaceRegions(imgMeta);
    const data = await response.json();
    setBoxes(data);
    setLoading(false);
  };
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          onLoad={handleOnLoad}
          alt=""
          src={imgUrl}
          height="auto"
          width="500px"
        />
        {!loading &&
          boxes.map((box, index) => {
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
        {loading && <p>Finding faces ...</p>}
      </div>
    </div>
  );
}
