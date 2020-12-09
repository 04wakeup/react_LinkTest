import React from "react";
import { Link } from "react-router-dom";

// export default () => <header>{/* Magic Here */}</header>;
export default () => {
  return (
    <ul>
      <li>
        <Link to="/price">Prices</Link>
      </li>
      <li>
        <Link to="/exchange">Exchanges</Link>
      </li>
      <li>
        <Link to="/coin">Coins</Link>
      </li>
    </ul>
  );
};
