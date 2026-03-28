import Contact from "@/components/Contact-us";
import React from "react";
import ListingsTitle from "@/components/Listingstitle";

export const metadata = {
  title: "Contact Us - Maganlal Chikki",
  default: ""
};

const Contactus = () =>{
    return(
      <>
        <ListingsTitle title="Contact Us"/>
        <Contact/>
      </>
    )
}

export default Contactus