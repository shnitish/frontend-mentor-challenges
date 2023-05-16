import "./navigation.css";
const Navigation = ({ data }) => {
  return (
    <header className="primary__header">
      <div className="nav__container">
        <nav>
          <ul role="list" className="nav__list">
            {data.map((nav, i) => {
              return (
                <li key={i}>
                  <a href="#">{nav}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
