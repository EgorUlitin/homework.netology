'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filter) {
    this.setState({
      active: filter
    });
  }

  projectsFilter = (projects, active) => {
    const result = active !== "All" ? projects.filter(item => item.category === active)
                                    : projects;
    return result;
  }

  render() {
    const { filters, projects } = this.props;
    const { active } = this.state;
    
    return (
      <div>
        <Toolbar
          filters={filters}
          selected={active}
          onSelectFilter={(filter) => this.handleChange(filter)} />
        <Portfolio projects={this.projectsFilter(projects, active)} />
      </div>
    );
  }
}