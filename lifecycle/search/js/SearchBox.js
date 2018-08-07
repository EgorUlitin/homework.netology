class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false };
    this.isFixed = this.isFixed.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.isFixed);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.isFixed);
  }

  isFixed() {
    window.pageYOffset > 164 ? this.setState({ fixed: true }) : this.setState({ fixed: false });
  }

  // setPosition() {
  //   this.isFixed() ? this.setState({ isFixed: true }) : this.setState({ isFixed: false });
  // }

  render() {
    return (
      <SearchBoxView fixed={this.state.fixed}/>
    );
  }
}
