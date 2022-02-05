import React, { useState } from "react";

import logo from "../../Images/HUID.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import { faSearch } from '@fortawesome/free-solid-svg-icons'
//import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [view, setView] = useState(false);
  console.log(view);
  const username = localStorage.getItem("username");
  return (
    <header className="px-4 pt-4 columns is-multiline is-mobile is-justify-content-space-between mb-0">
      <div className="column is-centered is-one-quarter">
        <img className="ml-6" src={logo} alt="logo" />
      </div>
      <div className="column ">
        <input
          className="input is-rounded has-background-light"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="column  has-text-right">
        <div className="is-inline is-flex" onMouseLeave={() => setView(false)}>
          <a
            className="is-size-4 button is-light is-rounded"
            onMouseOver={() => setView(true)}
          >
            <p className="is-inline is-size-5 mr-4 is-capitalized has-text-weight-light is-family-monospace">
              {username}
            </p>
            <FontAwesomeIcon size="sm" icon={faUser} />
          </a>
          <div
            className="is-flex buttons are-normal are-fullwidth is-flex-direction-column box p-0"
            style={{
              position: "absolute",
              opacity: `${view ? 1 : 0}`,
              right: 200,
              zIndex: 100,
            }}
          >
            <div className="is-fullwidth p-9">
              <a
                className="button is-info is-fullwidth is-inverted"
                href="/profile"
              >
                Profile
              </a>
            </div>
            <div className="is-fullwidth">
              <a
                className="button is-info  is-inverted"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/";
                }}
              >
                Logout
              </a>
            </div>
          </div>
        </div>

        <a className="is-size-4 button is-white">
          <FontAwesomeIcon icon={faBell} />
        </a>
        <a href="/settings" className="is-size-4 button is-white">
          <FontAwesomeIcon icon={faCog} />
        </a>
      </div>
    </header>
  );
};

export default Header;
