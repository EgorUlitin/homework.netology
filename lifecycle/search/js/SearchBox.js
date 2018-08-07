class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false };
    // this.isFixed = this.isFixed.bind(this);
    this.myRef = null;

    this.setInputRef = elem => {
      this.myRef = elem;
    };

    this.scrollTop = () => {
      this.myRef.focus();
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.isFixed);
    this.scrollTop();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.isFixed);
  }

  isFixed() {
    const value = this.myRef;
    console.log(value);
  }

  setPosition() {
    return undefined;
  }

  render() {
    console.log(this.isFixed());
    return (
      <SearchBoxView fixed={this.state.fixed} ref={el => (this.myRef = el)} />
    );
  }
}
