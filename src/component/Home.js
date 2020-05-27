import React, { useState } from 'react';
import ctaCp from'../image/ctacp.PNG';
import suCp from'../image/sucp.PNG';
import ymCp from'../image/ymcp.PNG';
import tpCp from'../image/tpcpr.PNG';
import CPBar from'../image/ctaheader.png';
import {connect} from 'react-redux';
import {addBasket } from '../actions/addAction';

const Home = (props)=> {
    console.log(props);
    // const [basketNumbers, setBasketNumbers]= useState(0)

    // const addToBasket = () => {
    //     setBasketNumbers(basketNumbers + 1);
    // }
    return(
        <div>
        <div className="cPBar">
                <img src={CPBar} alt="CP Header"/>
            </div>
        <div className="container">
            
            <div className="image">
                <img src={ctaCp} alt="CTA Coupon"/>
                <h3>CTExcel礼券</h3>
                <a onClick={() => props.addBasket('ctaCoupon')} className="addToCart cart1" href="#">加入购物车</a>
            </div>
            <div className="image">
                <img src={suCp} alt="SU Coupon"/>
                <h3>StudentUniverse礼券</h3>
                <a onClick={()=> props.addBasket('suCoupon')} className="addToCart cart2" href="#">加入购物车</a>
            </div>
            <div className="image">
                <img src={ymCp} alt="YM Coupon"/>
                <h3>Yami网礼券</h3>
                <a onClick={()=>props.addBasket('ymCoupon')} className="addToCart cart3" href="#">加入购物车</a>
            </div>
            <div className="image">
                <img src={tpCp} alt="TP Coupon"/>
                <h3>TravelexPay礼券</h3>
                <a onClick={()=>props.addBasket('tpCoupon')} className="addToCart cart4" href="#">加入购物车</a>
            </div>
        </div>
        </div>
    )
}

export default connect(null, { addBasket })(Home);