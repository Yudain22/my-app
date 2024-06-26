import React, { useCallback, useMemo, useState, useRef } from "react";

const getAverage = Numbers => {
    console.log("평균값 계산 중");
    if (Numbers.length === 0) return 0;
    const sum = Numbers.reduce((a, b) => a + b);
    return sum / Numbers.length;
};

function Average(props) {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl=useRef(null);


    //useMemo
    // const onChange = e => {
    //     setNumber(e.target.value);
    // };

    // const onInsert = e => {
    //     const nextList = list.concat(parseInt(number));
    //     setList(nextList);
    //     setNumber('')
    // }

    // useCallback
    // useMemo() Hook과 유사하지만 값이 아닌 함수를 반환
    const onChange = useCallback(e =>{
        setNumber(e.target.value);
    },[]); //컴포넌트가 처음 렌더링될 때만 함수 생성

    const onInsert = useCallback(e =>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('')
        inputEl.current.focus();
    },[number,list]); //number 혹은 list가 변경될 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list])

    return (
        <div>
            {/* useRef를 사용하여 Average 컴퍼넌트에서 등록 버튼 클릭 시 
            포커서가 자동으로 input에 맞춤 */}
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>{list.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
            </ul>
            {/* <div><b>평균값 : </b>{getAverage(list)}</div> */}
            {/* useMemo 적용 전 : 숫자 입력과 등록에getAverage() 함수 적용*/}
            
            <div><b>평균값 : </b>{avg}</div>
            {/* useMemo Hook 적용 후 : 렌더링하는 과정에 특정 값이 변경되었을 때만 연산을 수행, 연산 최적화가 됨  */}

        </div>
    )
}

export default Average;