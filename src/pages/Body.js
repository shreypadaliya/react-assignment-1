import React from "react";

import Whychose from "./Whychose";
import Proslider from "./Proslider";
import Exp from "./Exp";
import Meterial from "./Meterial";


const Body = () => {
  return (
    <>
    <section className="content" id="content" name="content"></section>
      <Whychose/>
      <Proslider/>
      <Exp/>
      <Meterial></Meterial>
      

    </>
  );
};

export default Body;
