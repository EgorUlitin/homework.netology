const Menu = ({ items, opened = false }) =>
  opened ? (
    <div className="menu menu-open">
      <div className="menu-toggle">
        <span />
      </div>
      <nav>
        <ul>
          {items.map((item, i) => (
            <li>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  ) : (
    <div className="menu">
      <div className="menu-toggle">
        <span />
      </div>
    </div>
  );
