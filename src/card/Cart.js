import React from 'react'
import CardItem from './CartItem'

class Cart extends React.Component{

    // constructor() {
    //     super();
    //     this.state = {
    //      products: [
    //         {
    //             id: 1,
    //             price: 100,
    //             title: "watch",
    //             qty: 10,
    //             img: "",
    //         },
    //         {
    //             id: 2,
    //             price: 999,
    //             title: "Mobile Phone",
    //             qty: 1,
    //             img: "",
    //         },
    //         {
    //             id: 3,
    //             price: 5550,
    //             title: "Laptop",
    //             qty: 1,
    //             img: "",
    //         },
    //      ]
    //     };
    //     // this.test();
    //   }

    //   handleIncreaseQuantity = (product) =>{
    //     const { products } = this.state;
    //     console.log(this.state.products);
    //     const index = products?.indexOf(product);
    //     products[index].qty += 1;
    //     this.setState({products})
    //   }
    //   handleDecreaseQuantity = (product) => {
    //     const {products} = this.state;
    //     const index = products.indexOf(product);
    //     if(products[index].qty === 0){
    //         return ;
    //     }
    //     products[index].qty -= 1;
    //     this.setState({products})
    //   }

    //   hadleDeleteProduct = (id) => {
    //     const {products} = this.state;
    //     const items = products.filter((item) => item.id !== id);
    //     this.setState({
    //         products: items
    //     })
    //   }

    render(){
        const {products} = this.props;
        return(
            <div className='cart'>
            {products.map((item) => {
               return(
                <CardItem  
                product={item} 
                key={item.id}
                onIncreaseQuantity={this.props.onIncreaseQuantity}
                onDecreaseQuantity={this.props.onDecreaseQuantity}
                onDeleteProduct={this.props.onDeleteProduct}
                />
               )
            })}
            
            
            </div>
        )
    }
}

export default Cart