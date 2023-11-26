import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div style={{ color: "black" }}>
      <Link to="/" style={{ color: "black", paddingLeft: "30px" }}>
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={name}>
            <span style={{ color: "black" }}> {">"} </span>
            {isLast ? (
              <span style={{ color: "black", fontWeight: "600" }}>{name}</span>
            ) : (
              <Link to={routeTo} style={{ color: "black" }}>
                {name}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
