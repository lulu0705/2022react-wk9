import { useState } from "react";
import { Link } from "react-router-dom"


export default function Header() {
   return (
      <div className="header" style={{}}>
         <Link to="/">
            {/* <h1 className="header-title">
               SQL Database
            </h1> */}


                  <div className="row">
                     <div className="col-12">
                        <div className="logo_area text-center">
                              <h1 href="index.html" className="yummy-logo">Yummy Choco</h1>
                        </div>
                     </div>
                  </div>


         </Link>
         {/* <p
            className="header-slogan">
            An example made by Create-React-App.
         </p> 
         <hr className="hr-header-line" />*/}
      </div>
   );
}