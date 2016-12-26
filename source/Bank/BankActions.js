
import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

let BanckActions = {

    getState() {
        return balance;
    },

    addListener(callback) {
        return _emitter.addEventListener(CHANGE_EVENT, callback);
    },

    createAccount() {
        AppDispatcher.dispatch({
            type: bankConstants.CREATE_ACCOUNT,
            ammount: 0
        });
    },

    depositIntoAccount(ammount) {
        AppDispatcher.dispatch({
            type: bankConstants.WITHDREW_FROM_ACCOUT,
            ammount: ammount
        });
    },

    withdrawFromAccount(ammount) {
        AppDispatcher.dispatch({
            type: bankConstants.WITHDREW_FROM_ACCOUT,
            ammount: ammount
        })
    }

};


export default BanckActions;
