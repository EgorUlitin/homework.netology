class Cart extends React.Component {
  
  shouldComponentUpdate(nextProps) {
    return (this.props.isOpen !== nextProps.isOpen) 
      || ((nextProps.isOpen === true) && (this.props.items !== nextProps.items));
  }

  render() {
    return (
      <CartView {...this.props} />
    );
  }

}
