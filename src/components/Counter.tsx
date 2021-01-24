import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeType } from '../reducers/configureStore';
import { setCount } from '../actions/count/countAction';



const Counter = () => {
    const count = useSelector((state: storeType) => state.countReducer);
    const dispatch = useDispatch();
    const handleOnClick = (n: number): void => {
        dispatch(setCount(n));
    }
    return (
        <>
            <h1>
                共點擊了{count}次
        </h1>
            <button onClick={() => {
                handleOnClick(count + 1)
            }}>
                Click me
        </button>
        </>
    );
};

export default Counter;