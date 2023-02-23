/* eslint-disable no-unused-expressions */
import { useState, useEffect, useRef } from 'react';
import Q3components from '../../components/1.basic/q3components';

function Q3() {
    function useInterval(callback, delay) {
        const savedCallback = useRef(); //클로저 역할을 해주는 useRef. 렌더를 해도 초기화 되지 않는다.

        // callback(setCount)가 변경될 때를 useEffect가 감지해서 최신상태를 저장한다.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // 인터벌과 클리어 세팅
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id); //바로바로 클리어를 해주기 때문에 메모리를 차지하지 않는다.
            }
        }, [delay]);
    }

    const [showComponent, setShowComponent] = useState(false);
    const [count, setCount] = useState(0);
    let [delay, setDelay] = useState(null);

    const onClickStart = () => {
        setShowComponent(true);
        setDelay(2000);
    };
    const onClickStop = () => {
        setShowComponent(false);
        setCount(0);
        setDelay(null);
    };

    useInterval(() => {
        setCount(count + 1);
    }, delay);

    return (
        <>
            <h1>문제3</h1>
            <div>
                <p> 줄넘기 횟수 : {count} </p>
                {showComponent ? <Q3components /> : <></>}
                <p>
                    <button onClick={onClickStart}>줄넘기 시작</button>
                </p>
                <p>
                    <button onClick={onClickStop}>줄넘기 중지</button>
                </p>
            </div>
        </>
    );
}
export default Q3;
