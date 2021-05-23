import React from "react";

const current_year = new Date().getFullYear();

function Footer(){
  return(
    <footer>
      <p>Copyright ©{current_year}</p>
      <p>Göksel Önal</p>
    </footer>
  );
}

export default Footer;
