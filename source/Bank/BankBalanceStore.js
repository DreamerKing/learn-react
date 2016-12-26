
import { EventEmitter } from 'fbemitter';
import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

const CHANGE_EVENT = "change";
let _emitter = new EventEmitter();
let balance = 0;

let BankBlanceStore = {

    getState() {
        return balance;
    },

    addListener(callback) {
        return _emitter.addEventListener(CHANGE_EVENT, callback);
    }

};

BankBlanceStore.dispatchToken = AppDispatcher.register((action) => {
    switch (action.type) {
        case bankConstants.CREATE_ACCOUNT:
            balance = 0;
            _emitter.emit(CHANGE_EVENT);
            break;

        case bankConstants.DEPOSITED_INTO_ACCOUNT:
            balance = balance + action.ammount;
            _emitter.emit(CHANGE_EVENT);
            break;

        case bankConstants.WITHDREW_FROM_ACCOUT:
            balance = balance - action.ammount;
            _emitter.emit(CHANGE_EVENT);
            break;

    }
});


export default BankBlanceStore;
