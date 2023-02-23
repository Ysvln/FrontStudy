import { useState, useRef } from 'react';
import PlayListMock from '../../__mock__/playList.json';

function State1() {
    /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

    // console.log(PlayListMock.playlist);
    /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

    /* 풀이 ******************************
    1. 곡명 (title), 가수 및 작곡 (singer) ==> 각 input에 입력한 값을 가져와서 객체에 내용을 추가
    2. 추가된 새로운 객체를 기존 데이터의 배열에 추가
    3. 삭제 ==> 새롭게 추가된 리스트 배열에서 삭제
    */

    const [list, setList] = useState(PlayListMock.playlist);
    console.log(list);
    const [inputs, setInputs] = useState({
        title: '',
        signer: '',
    });

    const { title, signer } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onAddList = () => {
        const newList = {
            title,
            signer,
        };
        setList([...list, newList]);
        setInputs({
            title: '',
            signer: '',
        });
        console.log(list);
    };

    const onDeleteList = (title) => {
        setList(list.filter((el) => el.title !== title));
    };

    return (
        <>
            <h1>문제1</h1>
            <ul>
                {/* list */}
                {list.map((el) => (
                    <li>
                        <h3>{el.title}</h3>
                        <p>{el.signer}</p>
                        <button onClick={() => onDeleteList(el.title)}>삭제</button>
                    </li>
                ))}
            </ul>
            <div>
                <p>
                    곡명 : <input name="title" value={title} onChange={onChange} />
                </p>
                <p>
                    가수/작곡 : <input name="signer" value={signer} onChange={onChange} />
                </p>
                <p>
                    <button onClick={onAddList}>추가</button>
                </p>
            </div>
        </>
    );
}
export default State1;
