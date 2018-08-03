class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: '',
    };
  }

  submitChange() {
    const value = this.valueInput;
    console.log(value.value);
    this.props.filterBooks(value);
  }

  render() {
    const { value, filterBooks } = this.props;

    return (
      <input
        type="text"
        placeholder="Поиск по названию или автору"
        ref={el => (this.valueInput = el)}
        onChange={this.submitChange.bind(this)}
      />
    );
  }
}
