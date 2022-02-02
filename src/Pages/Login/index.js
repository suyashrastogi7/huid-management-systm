import React, { useState } from "react";
import { useHistory } from "react-router";
//Components

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  let history = useHistory();

  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    })
      .then(async (res) => {
        const response = await res.json();
        if (response.success) {
          history.push("/company");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                {isLogin ? (
                  <form onSubmit={handleLogin} className="box">
                    <div className="field">
                      <label className="label">Username</label>
                      <div className="control has-icons-left">
                        <input
                          type="email"
                          placeholder="e.g. patharia_jewellers"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="input"
                          required
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control has-icons-left">
                        <input
                          type="password"
                          placeholder="*******"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="input"
                          required
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faLock} />
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label className="checkbox">
                        <input type="checkbox" className="mx-2" />
                        Remember me
                      </label>
                    </div>
                    <div class="field is-flex  is-align-items-center is-flex-direction-column">
                      <button type="submit" className="button is-success">
                        Login
                      </button>
                    </div>
                    <div class="field is-flex mt-4 is-align-items-center ">
                      <p>New User ? </p>
                      <button
                        onClick={() => setIsLogin(false)}
                        className="button  mx-2 is-link is-outlined"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                ) : (
                  //*************************Sign up*******************************//

                  <form onSubmit={handleSignup} className="box">
                    <div className="field">
                      <label className="label">Username</label>
                      <div className="control has-icons-left">
                        <input
                          type="text"
                          placeholder="e.g. patharia_jewellers"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="input"
                          required
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Email</label>
                      <div className="control has-icons-left">
                        <input
                          type="email"
                          placeholder="e.g. abc@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="input"
                          required
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control has-icons-left">
                        <input
                          type="password"
                          placeholder="*******"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="input"
                          required
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faLock} />
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label className="checkbox">
                        <input type="checkbox" className="mx-2" />
                        Remember me
                      </label>
                    </div>
                    <div class="field is-flex  is-align-items-center is-flex-direction-column">
                      <button type="submit" className="button is-success">
                        Create Account
                      </button>
                    </div>
                    <div class="field is-flex mt-4 is-align-items-center ">
                      <p>Already Registered ? </p>
                      <button
                        onClick={() => setIsLogin(true)}
                        className="button  mx-2 is-link is-outlined"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
