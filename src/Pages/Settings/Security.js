import React, { useState } from "react";

const Security = () => {
  const [mfa, setMfa] = useState(false);
  return (
    <div className="is-fluid">
      <div className="is-full">
        <h1 className="is-size-3 has-text-weight-bold">Security</h1>
        <div className="is-flex my-4 is-align-items-center  is-justify-items-space-between rounded has-background-grey-lighter box is-shadowless p-4">
          <h1 className="is-size-5">Enable Multi Factor Authentication</h1>
          <input
            type="checkbox"
            style={{}}
            className="p-2"
            value={mfa}
            onChange={(e) => {
              setMfa(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Security;
