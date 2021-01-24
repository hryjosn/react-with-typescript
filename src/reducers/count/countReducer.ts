import { countActionType, SETCOUNT } from '../../actions/count/countAction';

const reducer = (state = 0, action: countActionType): number => {
    switch (action.type) {
        case SETCOUNT:
            return action.payload.count;
        default:
            return state;
    }
};

export default reducer;
