import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const AccountSetting = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  return (
    <div className="">
      <div>
        <h1 className="is-size-3 has-text-weight-bold">Account Settings</h1>
        <div>
          <h1 className="is-size-5 my-3">Change Password</h1>
          <div
            className="is-flex"
            style={{ borderBottom: "1px solid hsl(0, 0%, 71%)" }}
          >
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Old Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faLock} />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left ml-3">
                <input
                  className="input"
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faLock} />
                </span>
              </p>
            </div>
            <button className="button is-danger is-light ml-2">
              Change Password
            </button>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
