import { useSelector } from "react-redux";
import Background from "common/Background";
import ImageLinkForm from "features/ImageLinkForm";
import Logo from "common/Logo";
import Navigation from "features/Navigation";
import Rank from "features/Rank";
import FaceRecognition from "features/FaceRecognition";
import SignIn from "features/SignIn";
import Register from "features/Register";
import Error from "common/Error";

export default function Routes() {
  const { route, error } = useSelector((state) => state.app);

  const renderRoute = (route) => {
    switch (route) {
      case "register":
        return <Register />;
      case "home":
        return (
          <div>
            <Rank />
            <ImageLinkForm />
            <FaceRecognition />
          </div>
        );
      default:
        return <SignIn />;
    }
  };

  return (
    <>
      <Background />
      <Navigation />
      <Logo />
      {renderRoute(route)}
      {error && <Error />}
    </>
  );
}
