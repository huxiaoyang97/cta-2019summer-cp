import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { getNumbers } from '../actions/getAction';
import {Link } from 'react-router-dom';

function NavBar(props) {
    useEffect(()=>{
        getNumbers();
    },[])//run after everything is loaded
    return (
        <header>
            <div className="overlay"></div>
            <nav>
            <h1>推荐礼上礼，好礼四选一</h1>
            <ul>
                <li><Link to="/">主页</Link></li>
                <li><Link to="/about">规则</Link></li>
                <li className="cart"><Link to="/cart">
    <ion-icon name="basket"></ion-icon>已选择的奖品<span>{props.basketProps.basketNumbers}</span>
                </Link></li>
            </ul> 
            </nav>
      </header>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})
export default connect(mapStateToProps, { getNumbers })(NavBar);