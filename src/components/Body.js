import React from "react";
import Meterial from "./Meterial";
import Whychose from "./Whychose";
import Proslider from "./Proslider";
import Exp from "./Exp";


const Body = () => {
  return (
    <>
    <section className="content" id="content" name="content"></section>
      <Whychose/>
      <Proslider/>
      <Exp/>
      <Meterial/>
      

    </>
  );
};

export default Body;
