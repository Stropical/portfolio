/* eslint-disable no-nested-ternary */
import { useWeb3React } from "@web3-react/core";

export const Account = function Account() {
  const { account } = useWeb3React();

  return (
    <div 
      className="btn btn-ghost btn-sm rounded-btn vfont"
      style={{ textTransform: "uppercase" }}
    >
      <span>Account</span>
      <span role="img" aria-label="robot">
        🤖
      </span>
      <span>
        {account === null
          ? "-"
          : account
          ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
          : ""}
      </span>
    </div>
  );
};

export default Account;
