/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react';
import Q3components from '../../components/1.basic/q3components';

function Q3() {
    /* 
    문제3
    useEffect useState에 관련한 문제입니다
    단체 줄넘기 대회에 출전하였습니다

    줄넘기 시작 버튼을 누르면 
    Q3components 컴포넌트가 보입니다.

    Q3components 내부에는

    해당 컴포넌트가 보이기 시작한 시점부터
    2초마다 줄넘기 횟수가 1회 씩 증가하는 비즈니스 로직이 존재합니다

    또한, 이러한 줄넘기 횟수 증가는 q3.js(index)에서도 확인할 수 있도록
    <p> 줄넘기 횟수 : 0 </p> 에 횟수로 표시됩니다

    줄넘기 중지 버튼을 누르면
    해당 컴포넌트는 보이지 않아야하며, 줄넘기 횟수도 더이상 증가해서는 안됩니다.
    또한, 줄넘기 횟수는 0으로 고정되어야합니다.
  */

    /*
   ********************************* 풀이 *********************************
  1. 시작 버튼을 눌렀을 때 
    1-1) Q3 컴포넌트가 보임
    1-2) Q3이 보이면 ==> setInterval 사용하여 / 2초마다 / 줄넘기 횟수가 +1

  
  2. 중지 버튼을 눌렀을 때
    2-1) Q3 컴포넌트가 안 보임
    2-2) Q3이 안 보이면 ===> clearInterval 사용 / 줄넘기 횟수 증가를 멈추고 / 줄넘기 횟수의 값은 0
      Q3 컴포넌트가 안 보이는 state (false) 일 때 
       clearInterval, count의 값이 0으로 리셋
  */

    const [showComponent, setShowComponent] = useState(false);
    const [count, setCount] = useState(0);

    const onClickStart = () => {
        setShowComponent(true);
        console.log(count, showComponent);
    };

    const onClickStop = () => {
        setShowComponent(false);
        setCount(0);
    };

    console.log(showComponent, 'Test');

    useEffect(() => {
        if (showComponent) {
            setInterval(() => setCount(count + 1), 2000);
            console.log(count);
        } else {
            clearInterval(setInterval(() => setCount(count + 1), 2000));
            setCount(0);
            console.log(count);
        }
    }, [count, showComponent]);
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
