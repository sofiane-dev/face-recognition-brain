import { useEffect, useState } from "react";
import "./index.css";
import getFaceRegions from "./face-regions";

export default function FaceRecognition({ imgUrl, isLoading, setIsLoading }) {
  const [boxes, setBoxes] = useState([]);
  useEffect(() => {
    imgUrl.length > 0 && setIsLoading(true);
    return () => {
      setIsLoading(false);
    };
  }, [imgUrl]);

  const handleOnLoad = async (e) => {
    const { src: url, height, width } = e.target;
    const imgMeta = { url, height, width };
    const response = await getFaceRegions(imgMeta);
    const data = await response.json();
    setBoxes(data);
    setIsLoading(false);
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
        {!isLoading &&
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
      </div>
    </div>
  );
}
