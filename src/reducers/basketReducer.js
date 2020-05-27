import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from "../actions/types";

const initialState = {
    basketNumbers: 0,
    cartCost:0,
    products:{
        ctaCoupon:{
            name:"CTExcel礼券",
            tagName:'ctaCoupon',
            price: 1,
            number:0,
            inCart:false
        },
        ymCoupon:{
            name:"亚米网满减券",
            tagName:'ymCoupon',
            price:1,
            number:0,
            inCart:false
        },
        suCoupon:{
            name:"SU 满减券",
            tagName:'suCoupon',
            price:1,
            number:0,
            inCart:false
        },
        tpCoupon:{
            name:"TravelexPay 礼券",
            tagName:'tpCoupon',
            price:1,
            number:0,
            inCart:false
        }
    }
}

export default (state=initialState, action) =>{
    let productSelected = "";
    console.log(action);
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            productSelected = {...state.products[action.payload/*access the product name*/]}
            productSelected.number += 1;
            productSelected.inCart=true;
            console.log(productSelected);
            return{
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products:{
                    ...state.products,
                    [action.payload]:productSelected
                }
            }
        case GET_NUMBERS_BASKET:
            return{
                ...state
            }
        case INCREASE_QUANTITY:
            productSelected = {...state.products[action.payload]};
            productSelected.number += 1;
            console.log(state.products);
            return{
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products:{
                    ...state.products,
                    [action.payload]:productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected = {...state.products[action.payload]};
            let newCartCost=0;
            let newBasketNumbers = 0;
            if (productSelected.number===0){
                productSelected.number=0;
                newCartCost = state.cartCost
                newBasketNumbers = state.basketNumbers
            }else{
                productSelected.number-=1
                newCartCost = state.cartCost - state.products[action.payload].price
                newBasketNumbers = state.basketNumbers - 1
            }
            
            return{
                ...state,
                basketNumbers : newBasketNumbers,
                cartCost: newCartCost,
                products:{
                    ...state.products,
                    [action.payload]:productSelected
                }
            } 
        case CLEAR_PRODUCT:
            productSelected = {...state.products[action.payload]};
            console.log(productSelected);
            let numbersBackup= productSelected.number;
            productSelected.number = 0;
            productSelected.inCart = false;
            return{
                ...state,
                basketNumbers: state. basketNumbers - numbersBackup,
                cartCost: state.cartCost - (numbersBackup * productSelected.price),
                products:{
                    ...state.products,
                    [action.payload]:productSelected
                }

            }  
        default:
            return state;
    }
}