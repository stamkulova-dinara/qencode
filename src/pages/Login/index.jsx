import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import { FormInput } from "../../components/FromInput";
import Google from "../../assets/google.svg";
import Github from "../../assets/github.svg";
import "./style.css";

export const Login = () => {
  const [emailFull, setEmailFull] = useState(false);
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (email.length) {
      setEmailFull(!email);
    }
    console.log(email);
  }, [email]);

  return (
    <section className="container">
      <div className="content">
        <img src={Logo} alt="logo" />
        <h1>Log in to your account</h1>
        <div className="social-content">
          <div className="social-content__box">
            <img src={Google} alt="google" /> <span>Google</span>
          </div>
          <div className="social-content__box">
            <img src={Github} alt="" />
            <span>Github</span>
          </div>
        </div>
        <div className="divider">
          <p></p> OR <p></p>
        </div>
        <form>
          <FormInput
            title={"Work Email"}
            eventHandler={setEmail}
            type={"email"}
          />
          {emailFull && <FormInput title={"Password"} />}
          <button className="form-btn btn">Log in to Qencode</button>
        </form>
        <p>
          Is your company new to Qencode? <a href="#"> Sign up</a>
        </p>
      </div>
    </section>
  );
};
