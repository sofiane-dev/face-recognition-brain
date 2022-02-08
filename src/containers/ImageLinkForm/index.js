import Spinner from "components/Spinner";
import { useState } from "react";
import "./index.css";

export default function ImageLinkForm({ handleSubmit , isLoading }) {
  const [inputUrl, setInputUrl] = useState("");

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
            onClick={() => handleSubmit(inputUrl)}
          >
            {isLoading ? <Spinner /> : "Detect"}
          </button>
        </div>
      </div>
    </div>
  );
}