'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onSwitch: "view_module",
    }
  }

  handleSwitched = () => {
    this.state.onSwitch === "view_module" ? this.setState({ onSwitch: "view_list" })
                                          : this.setState({ onSwitch: "view_module" })
  }

  renderLayout(cardView) {
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} 
        />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }
  
  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }

  render() {
    const cardView = this.state.onSwitch === "view_module" ? true : false;
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.onSwitch}
            onSwitch={() => this.handleSwitched()} />
        </div>
        {this.renderLayout(cardView)}
      </div>
    );
  }
}
