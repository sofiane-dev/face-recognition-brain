import "./index.css";

export default function FaceRecognition({ imgUrl, boxes }) {
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
