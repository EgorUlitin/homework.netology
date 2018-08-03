class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validateClass: '',
    };
  }

  submitChange() {
    const email = this.emailText;

    if (email.validity.valid) {
      this.setState({ validateClass: 'is-valid' });
    } else {
      this.setState({ validateClass: 'is-error' });
    }
  }

  render() {
    return (
      <div className="subscribe__form">
        <form
          className={`form form--subscribe ${this.state.validateClass}`}
          onChange={this.submitChange.bind(this)}
        >
          <h4 className="form-title">Подписаться:</h4>
          <div className="form-group">
            <label htmlFor="input-email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="input-email"
              placeholder="Email"
              className="form-control"
              ref={el => (this.emailText = el)}
            />
            <div className="form-error">
              Пожалуйста, проверьте корректность адреса электронной почты
            </div>
            <button type="submit" className="form-next">
              <i className="material-icons">keyboard_arrow_right</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
