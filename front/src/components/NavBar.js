import { NavLink } from "react-router-dom";
// import { navData } from "./navData";

export default function NavBar({ open }) {
  return (
    <>   
      {/* <div className={`sidenav-wrap ${open ? "" : "collapse-mobile-wrap"}`}></div>
      <div className={`sidenav ${open ? "" : "collapse-mobile"}`}>
       
      <div className="sidenav">
      <br/><br/><br/>
        {navData.map(item =>{
            return <NavLink key={item.id} className = "sideitem" to={item.link}>
            {item.icon}
            <span className = "linkText" >{item.text}</span>
        </NavLink>
        })}
    </div>
    </div> */}
    </>
  )
}