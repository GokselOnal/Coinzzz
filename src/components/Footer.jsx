import React from "react";

const current_year = new Date().getFullYear();

function Footer(){
  return(
    <footer>
      <p className="copyright">Copyright ©{current_year} </p>
      <p className="name">Göksel Önal</p>
    </footer>
  );
}

export default Footer;
