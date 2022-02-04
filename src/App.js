import Background from "components/Background";
import ImageLinkForm from "components/ImageLinkForm";
import Logo from "components/Logo";
import Navigation from "components/Navigation";
import Rank from "components/Rank";
import FaceRecognition from "components/FaceRecognition";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputUrl: "",
      imgUrl: "",
      box: {},
    };
  }

  onInputChange = (event) => {
    this.setState({ inputUrl: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.inputUrl, box: {} });
    const raw = JSON.stringify({
      user_app_id: {
        user_id: "l3unpgsoqv3a",
        app_id: "a1c2f9739029400a809e6041352b8c34",
      },
      inputs: [
        {
          data: {
            image: {
              url: this.state.inputUrl,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key 2ce8f5fbedad455797e408146f924c67",
      },
      body: raw,
    };

    fetch(
      "https://api.clarifai.com/v2/models/face-detection/outputs",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) =>
        this.renderFaceBox(
          JSON.parse(result, null, 2).outputs[0].data.regions[0].region_info
            .bounding_box
        )
      )
      .catch((error) => console.log("error", error));
  };

  renderFaceBox = (data) => {
    const faceImg = document.getElementById("faceImg");
    const imgWidth = Number(faceImg.width);
    const imgHeight = Number(faceImg.height);
    const faceBox = {
      top_boundry: imgHeight * data.top_row,
      bottom_boundry: imgHeight - imgHeight * data.bottom_row,
      right_boundry: imgWidth - imgWidth * data.right_col,
      left_boundry: imgWidth * data.left_col,
    };
    this.setState({ box: faceBox });
  };
  render() {
    return (
      <div className="App">
        <Background />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imgUrl={this.state.imgUrl} box={this.state.box} />
      </div>
    );
  }
}

export default App;
