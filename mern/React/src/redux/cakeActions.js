// We will make action creater to create action for us. So, we don't need to write the action type again and again.
// 

import { BUY_CAKE, REFUND_CAKE } from './cakeActionTypes';
const buyCake = (cakeCount) => {
    return {
        type: BUY_CAKE,
        payload: { cakesToBuy: cakeCount }
    }

};

const refundCake = () => {
    return {
        type: REFUND_CAKE
    };
};

export { buyCake, refundCake }