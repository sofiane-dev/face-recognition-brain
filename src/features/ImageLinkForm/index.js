import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "common/Spinner";
import { setImgSrc } from "features/appSlice";
import "./index.css";

export default function ImageLinkForm() {
  const [inputUrl, setInputUrl] = useState("");
  const { isLoading } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    setInputUrl(event.target.value);
  };

  return (
    <div>
      <p className="f3">
        This Magic Brain will detect faces in your pictures. Give it a try !
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center bw2"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-25 grow f4 fw6 bn link ph3 pv2 dib near-black bg-washed-yellow"
            onClick={() => dispatch(setImgSrc(inputUrl))}
          >
            {isLoading ? <Spinner /> : "Detect"}
          </button>
        </div>
      </div>
    </div>
  );
}
