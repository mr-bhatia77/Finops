// import React, { useState } from "react";
// import { roles } from "./MenuItems";
// import "./Dropdown.css";

// function Dropdown() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

//   return (
//     <>
//         <ul style={{zIndex: 1}}
//           onClick={handleClick}
//           className={click ? "dropdown-menu clicked" : "dropdown-menu"}
//         >
//           {roles.map((item, index) => {
//             return (
//               <li key={index}  className={item.cName} >
//                   {item.title}
//               </li>
//             );
//           })}
//         </ul>
//     </>
//   );
// }

// export default Dropdown;
