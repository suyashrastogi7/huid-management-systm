import React, { useState } from "react";

//Components
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

import AccountSetting from "./AccountSetting";
import Appearance from "./Appearance";
import Help from "./Help";
import Security from "./Security";

const Settings = () => {
  const [appearance, setAppearance] = useState(false);
  const [account, setAccount] = useState(false);
  const [security, setSecurity] = useState(false);
  const [help, setHelp] = useState(false);

  function Reset() {
    setAccount(false);
    setSecurity(false);
    setAppearance(false);
    setHelp(false);
  }

  return (
    <div>
      <Header />
      <div className="is-flex">
        <Navbar />
        <div
          class="column has-background-light"
          style={{ height: "85vh", overflowY: "scroll" }}
        >
          <div className="box is-flex">
            <div
              className="pr-4 mr-4"
              style={{ borderRight: "1px solid hsl(0, 0%, 71%)" }}
            >
              <h1 className="is-size-4 has-text-weight-bold">Settings</h1>
              <div className="">
                <div
                  className="is-flex my-4 is-align-items-center rounded has-background-grey-lighter box is-shadowless p-4 is-clickable"
                  onClick={() => {
                    Reset();
                    setAppearance(true);
                  }}
                >
                  <div className="mx-8">
                    <FontAwesomeIcon icon={faGhost} size="2x" />
                  </div>
                  <div className="mx-5">
                    <h1 className="is-size-4">Appearance</h1>
                    <p>Dark and Light mode, Themes , Font Size ...</p>
                  </div>
                  <div className="ml-auto">
                    <FontAwesomeIcon icon={faArrowRight} size="2x" />
                  </div>
                </div>
                <div
                  className="is-flex my-4 is-align-items-center rounded has-background-grey-lighter box is-shadowless p-4 is-clickable"
                  onClick={() => {
                    Reset();
                    setAccount(true);
                  }}
                >
                  <div className="mx-8">
                    <FontAwesomeIcon icon={faUserCog} size="2x" />
                  </div>
                  <div className="mx-5">
                    <h1 className="is-size-4">Account Settings</h1>
                    <p>Personal Information, Email</p>
                  </div>
                  <div className="ml-auto">
                    <FontAwesomeIcon icon={faArrowRight} size="2x" />
                  </div>
                </div>
                <div
                  className="is-flex my-4 is-align-items-center rounded has-background-grey-lighter box is-shadowless p-4 is-clickable"
                  onClick={() => {
                    Reset();
                    setSecurity(true);
                  }}
                >
                  <div className="mx-8">
                    <FontAwesomeIcon icon={faShieldAlt} size="2x" />
                  </div>
                  <div className="mx-5">
                    <h1 className="is-size-4">Security</h1>
                    <p>Change Password, 2FA</p>
                  </div>
                  <div className="ml-auto">
                    <FontAwesomeIcon icon={faArrowRight} size="2x" />
                  </div>
                </div>
                <div
                  className="is-flex my-4 is-align-items-center rounded has-background-grey-lighter box is-shadowless p-4 is-clickable"
                  onClick={() => {
                    Reset();
                    setHelp(true);
                  }}
                >
                  <div className="mx-8">
                    <FontAwesomeIcon icon={faUser} size="2x" />
                  </div>
                  <div className="mx-5">
                    <h1 className="is-size-4">Help</h1>
                    <p>Customer Care, Contact</p>
                  </div>
                  <div className="ml-auto">
                    <FontAwesomeIcon icon={faArrowRight} size="2x" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              {appearance ? <Appearance /> : <div></div>}
              {account ? <AccountSetting /> : <div></div>}
              {security ? <Security /> : <div></div>}
              {help ? <Help /> : <div></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
