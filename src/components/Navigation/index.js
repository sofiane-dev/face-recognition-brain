export default function Navigation({setImgUrl, setUser, route, setRoute }) {
  const handleSignout = () => {
    setImgUrl({});
    setUser({});
    setRoute("signIn");
  };
  const renderNavItems = (path) => {
    switch (path) {
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
              onClick={() => setRoute("signIn")}
            >
              Sign In
            </p>
            <p
              className="f3 link dim black underline pa3 pointer"
              onClick={() => setRoute("register")}
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
