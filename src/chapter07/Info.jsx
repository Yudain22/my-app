import React, {useEffect, useState} from "react";

function Info(){
    const [name, setName]=useState('');
    const [nickname, setNickname]= useState('');

    useEffect(()=>{
        console.log('랜더링이 완료됨');
        console.log({name, nickname});

        return() => {
            console.log('cleanup');
            console.log(name);
        }
    },[name]);

    const onChageName = e => {
        setName(e.target.value);
    };
    const onChangeNickname = e=>{
        //e=event 
        setNickname(e.target.value)
    };

    return(
        <div>
            <div>
                <input value={name} onChange={onChageName}/>
                {/* onChange가 바뀌면 onChageName 값 호출 */}
                <input value={nickname} onChange={onChangeNickname}/>
                {/* onChange가 바뀌면 onChangeNickname 값 호출 */}

            </div>
            <div>
            <div><b>이름  : </b>{name}</div>
        </div>
        <div>
            <div><b>닉네임  : </b>{nickname}</div>
        </div>
        </div>
        
    )
}

export default Info;