import { useState } from "react";
import { useDispatch } from "react-redux";
import { navigate, setUser, setError } from "features/appSlice";
import register from "./register";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await register(email, name, password);
    if (typeof data === "object") {
      dispatch(setUser(data));
      dispatch(navigate("home"));
    } else {
      dispatch(setError(data));
    }
  };

  return (
    <article className="pa3 br3 ba b--black-10 mv4 mw6 shadow-5 center">
      <main className="pa1 black-80 w-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mv3">
              <label className="db fw6 lh-copy f4" htmlFor="email-address">
                Email
              </label>
              <input
                className="f5 pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f4" htmlFor="name">
                Name
              </label>
              <input
                className="f5 pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f4" htmlFor="password">
                Password
              </label>
              <input
                className="f5 b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
              type="submit"
              value="Register"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </main>
    </article>
  );
}
