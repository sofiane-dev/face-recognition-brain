import { useEffect, useState } from "react";
import "./index.css";
import getFaceRegions from "./face-regions";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setIsLoading, setImgSrc } from "features/appSlice";
import updateRank from "./updateRank";

export default function FaceRecognition() {
  const { user, isLoading, imgSrc } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    imgSrc.length > 0 && dispatch(setIsLoading(true));
    return () => {
      dispatch(setIsLoading(false));
    };
  }, [imgSrc]);

  const handleOnLoad = async (e) => {
    const { src: url, height, width } = e.target;
    const imgMeta = { url, height, width };
    const data = await getFaceRegions(imgMeta);
    if (data) {
      setBoxes(data);
      const newUser = await updateRank(user.id);
      if (newUser) {
        dispatch(setUser(newUser));
      }
    }
    dispatch(setIsLoading(false));
  };
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          onLoad={handleOnLoad}
          alt=""
          src={imgSrc}
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
