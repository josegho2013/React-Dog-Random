import { React, useState } from "react";

import { BiSearchAlt } from "react-icons/bi";
import { GiGecko } from "react-icons/gi";

function NavBar() {
  return (
    <div className="navbar_container">
      <h1>
        {" "}
        <GiGecko size="4rem" />
        MANGO <br />
        GAMES
      </h1>
    </div>
  );
}

export default NavBar;
