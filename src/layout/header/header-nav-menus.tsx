import { NavLink, useLocation } from "react-router-dom";
// import menu_data from "../../data/menu-data";

const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "#home",
  },
  {
    id: 2,
    title: "About Us",
    link: "#about",
  },
  {
    id: 3,
    title: "SSS",
    link: "#faqs",
  },
  {
    id: 3,
    title: "Contact",
    link: "#contact",
  },
];

export default function HeaderNavMenus() {
    const location = useLocation();
    const { pathname } = location;
    return (
        // <ul className="navigation">
        //     {menu_data.map((menu) =>
        //         menu.sub_menu ? (
        //             <li
        //                 key={menu.id}
        //                 className={`menu-item ${menu.sub_menu && menu.sub_menu.some(sub => pathname === sub.link) ? 'menu-item-has-children active' : ''}`}
        //             >
        //                 <NavLink to="#">{menu.title}</NavLink>
        //                 <ul className="sub-menu">
        //                     {menu.sub_menu.map((sub, i) => (
        //                         <li key={i} className={pathname === sub.link ? 'active' : ''}>
        //                             <NavLink to={sub.link}>{sub.title}</NavLink>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </li>
        //         ) : (
        //             <li key={menu.id} className={pathname === menu.link ? 'active' : ''}>
        //                 <NavLink to={menu.link}>{menu.title}</NavLink>
        //             </li>
        //         )
        //     )}
        // </ul>
        <ul className="navigation">
            {menu_data.map((menu) =>
                (
                    <li key={menu.id} className={pathname === menu.link ? 'active' : ''}>
                        {/* <NavLink to={menu.link}>{menu.title}</NavLink> */}
                        <a href={menu.link}>{menu.title}</a>
                    </li>
                )
            )}
        </ul>
    )
}
