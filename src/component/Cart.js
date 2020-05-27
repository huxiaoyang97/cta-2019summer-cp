import React, { Fragment } from 'react'
import {connect} from 'react-redux';
import {productQuantity, clearProduct} from '../actions/productQuantity';
import ctaCp from'../image/ctacp.PNG';
import suCp from'../image/sucp.PNG';
import ymCp from'../image/ymcp.PNG';
import tpCp from'../image/tpcpr.PNG';

function Cart({basketProps, productQuantity, clearProduct}) {
    console.log(basketProps);

    let productsInCart =[];

    Object.keys(basketProps.products).forEach( function(item){
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart){
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    });

    const productImages = (product) =>{
        if( product.tagName === 'ctaCoupon'){
            return ctaCp;
        }else if (product.tagName ==='ymCoupon'){
            return ymCp;
        }else if (product.tagName ==='suCoupon'){
            return suCp;
        }else if (product.tagName ==='tpCoupon'){
            return tpCp;
        }
    }

    productsInCart = productsInCart.map( (product, index)=> {
        return(
            <Fragment key={index}>
                
                <div className="product"><ion-icon onClick={() => clearProduct( product.tagName)} name="close-circle"></ion-icon>
                    <img src={productImages(product)}/>
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">{product.price}张</div>
                <div className="quantity">
                    <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="remove-circle-outline"></ion-icon>
                        <span>{product.number}</span>
                    <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="add-circle-outline"></ion-icon>
                </div>
                <div className="total">{product.number * product.price}张兑换券</div>
            </Fragment>
        )
    });

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">礼券</h5>
                <h5 className="price sm-hide">兑换券数量</h5>
                <h5 className="quantity">数量</h5>
                <h5 className="total">合计</h5>
            </div>
            <div className="products">
                {productsInCart}
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">总计：</h4>
                <h4 className="basketTotal">{basketProps.cartCost}张兑换券</h4>
            </div>
        </div>
    )
}

const mapStateToProps= state =>({
     basketProps: state.basketState
});

export default connect(mapStateToProps, {productQuantity, clearProduct})(Cart);
