const App = () => (
  <Router>
    <div className="tabs">
      <nav className="tabs__items">
        <NavLink exact className="tabs__item" to="/" activeClassName="tabs__item-active">Рефераты</NavLink>
        <NavLink className="tabs__item" to="/creator" activeClassName="tabs__item-active">Криэйтор</NavLink>
        <NavLink className="tabs__item" to="/fortune" activeClassName="tabs__item-active">Гадалка</NavLink>
      </nav>
      <div className="tabs__content">
        <Route exact path="/" component={Essay} />
        <Route exact path="/creator" component={Creator} />
        <Route exact path="/fortune" component={Fortune} />
      </div>
    </div>
  </Router>  
)