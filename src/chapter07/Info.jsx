import React, { act, useEffect, useReducer, useState } from "react";

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

function Info() {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: '',
        addr: ''
    });

    const { name, nickname, addr } = state;
    const onChange = e => {
        dispatch(e.target);
    };

    // 아래 코드를 위처럼 줄임
    // const [name, setName]=useState('');
    // const [nickname, setNickname]= useState('');

    // useEffect(()=>{
    //     console.log('랜더링이 완료됨');
    //     console.log({name, nickname});

    //     return() => {
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // },[name]);

    // const onChageName = e => {
    //     setName(e.target.value);
    // };
    // const onChangeNickname = e=>{
    //     //e=event가 일어난 target객체의 value값
    //     setNickname(e.target.value)
    // };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                {/* onChange가 바뀌면 onChageName 값 호출 */}
                <input name="nickname" value={nickname} onChange={onChange} />
                {/* onChange가 바뀌면 onChangeNickname 값 호출 */}
                <input name="addr" value={addr} onChange={onChange} />
                {/* onChange가 바뀌면 onChangeNickname 값 호출 */}
            </div>
            <div>
                <div><b>이름  : </b>{name}</div>
            </div>
            <div>
                <div><b>닉네임  : </b>{nickname}</div>
            </div>
            <div>
                <div><b>주소  : </b>{addr}</div>
            </div>
        </div>
    )
}
export default Info;