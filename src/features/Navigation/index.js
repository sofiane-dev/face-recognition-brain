import { useDispatch, useSelector } from "react-redux";
import { navigate, setImgSrc, setUser } from "features/appSlice";

export default function Navigation() {
  const dispatch = useDispatch();
  const route = useSelector((state) => state.app.route);

  const handleSignout = () => {
    dispatch(setUser({}));
    dispatch(setImgSrc(""));
    dispatch(navigate("signin"));
  };
  const renderNavItems = (route) => {
    switch (route) {
      case "home":
        return (
          <p
            className="f3 link dim black underline pa3 pointer"
            onClick={handleSignout}
          >
            Sign Out
          </p>
        );
      default:
        return (
          <>
            <p
              className="f3 link dim black underline pa3 pointer"
              onClick={() => dispatch(navigate("signin"))}
            >
              Sign In
            </p>
            <p
              className="f3 link dim black underline pa3 pointer"
              onClick={() => dispatch(navigate("register"))}
            >
              Register
            </p>
          </>
        );
    }
  };
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      {renderNavItems(route)}
    </nav>
  );
}
