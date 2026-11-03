import { NavLink } from "react-router-dom";

const menu = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/events", label: "Etkinlikler" },
  { to: "/admin", label: "Yönetim" },
  { to: "/login", label: "Giriş" },
];

function Navigation() {
  return (
    <nav className="ana-menu" aria-label="Ana menü">
      <div className="menu-listesi">
        {menu.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className="menu-link"
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
