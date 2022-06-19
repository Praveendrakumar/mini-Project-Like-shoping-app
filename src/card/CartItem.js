import React from "react";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class CardItem extends React.Component {
  // test(){
  //   const promise = new Promise((resolve, reject) =>{
  //     setTimeout(()=>{
  //       resolve("Done");
  //     }, 5000);
  //   })
  //   promise.then(() =>{
  //     this.setState({qty: 100})
  //     console.log("This State",this.state);
  //   })
  // }

  // increaseQuantity() {
  //   // This is first method for to change the state
  //   // this.setState({
  //   //   qty: this.state.qty + 1,
  //   // })

  //   //This is second method for change the state
  //   this.setState((data) => {
  //     return {
  //       qty: data.qty + 1,
  //     };
  //   });
  // }

  // decreaseQuantity() {
  //   const { qty } = this.state;
  //   if (qty === 0) {
  //     return;
  //   }
  //   this.setState((data) => {
  //     return {
  //       qty: data.qty - 1,
  //     };
  //   });
  // }

  render() {
    const {price, title, qty} = this.props.product;
    const {
      product,
      onIncreaseQuantity, 
      onDecreaseQuantity,
      onDeleteProduct
    } = this.props;
    return (
      <div>
        <div className="cart-item">
          <div className="left-block">
            <img
              style={style.image}
              src={product.img}
              alt="..."
            />
          </div>
          <div className="right-block">
            <dvi style={{ fontSize: 25 }}>{title}</dvi>
            <br />
            <dvi style={{ color: "#777" }}>Rs. {price}</dvi>
            <br />
            <dvi style={{ color: "#777" }}>Qty. {qty}</dvi>
            <div className="cart-item-action">
              {/*buttons*/}
              <img
                className="action-icons"
                src="https://cdn-icons.flaticon.com/png/512/5392/premium/5392715.png?token=exp=1654831372~hmac=9096491887318de1bb01e32df5d5abd7"
                alt=".."
                onClick={() => {onIncreaseQuantity(product)}}
              />
              <img
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                alt=".."
                onClick={() => onDecreaseQuantity(product)}
              />
              <img
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                alt=".."
                onClick={() => onDeleteProduct(product.id)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  image: {
    height: 150,
    width: 210,
    borderRadius: 4,
  },
};

export default CardItem;
