import React from 'react';
import Cart from './card/Cart';
import Navbar from './navbar/navbar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
     products: [
        {
            id: 1,
            price: 100,
            title: "watch",
            qty: 10,
            img: "https://media.istockphoto.com/photos/woman-looking-at-her-smart-watch-for-a-pulse-trace-picture-id1310475310?s=612x612",
        },
        {
            id: 2,
            price: 999,
            title: "Mobile Phone",
            qty: 1,
            img: "https://media.istockphoto.com/photos/customer-service-support-call-center-concept-voip-headset-headphones-picture-id1303610185?s=612x612",
        },
        {
            id: 3,
            price: 5550,
            title: "Laptop",
            qty: 1,
            img: "https://media.istockphoto.com/photos/woman-working-at-home-and-reading-emails-on-her-laptop-picture-id1330800043?s=612x612",
        },
     ]
    };
    // this.test();
  }

  handleIncreaseQuantity = (product) =>{
    const { products } = this.state;
    console.log(this.state.products);
    const index = products?.indexOf(product);
    products[index].qty += 1;
    this.setState({products})
  }
  handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return ;
    }
    products[index].qty -= 1;
    this.setState({products})
  }

  hadleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
        products: items
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => (
      cartTotal = cartTotal + product.qty * product.price
    ))
    return cartTotal;
  }


  render() {
    const { products } = this.state;
    return (
      <div className="App">
      <Navbar count={this.getCartCount()} />
      <Cart
      products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct} 
      />
      <div>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
