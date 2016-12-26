import { Dispather } from 'flux';
class AppDispatcher extends Dispather {
    dispatch(action = {}) {
        console.log("Dispatched", action);
        super.dispatch(action);
    }
}

export default new Dispather();
