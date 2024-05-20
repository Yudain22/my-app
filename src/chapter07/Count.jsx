import React, {useEffect, useState, userState} from "react";

// function Counter(props){
//     var count = 0;

//     return (
//         <div>
//             <p>총 {count}번 클릭했습니다.</p>
//             <button onClick={ () => count++}>
//                 클릭
//             </button>
//         </div>
//     );
// }

//Counter 함수 컴포넌트에서 count를 변수로 선언해서 사용하게 되면 
//버튼 클릭 시 카운트 값을 증가시킬 수는 있지만, 
//재 렌더링이 일어나지 않아 새로운 count값이 화면에 표시되지 않음

function Counter(props){
    const [count, setCount] = useState(0);
    //setCount,count를 useState 훅을 걸어줌 
    //State는 환경에 따라변화하는 값, State 값이 바뀌면 재랜더링됨

    //componentDidMount, componentDidUpdate와 비슷하게 작동
    useEffect(()=>{
        //브라우저 API를 사용해서 document의 title을 업데이트합니다.
        document.title = `총 ${count}번 클릭했습니다.`;
    });

    return ( //변수 각각에 대해 set 함수가 따로 존재
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={ () => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}


export default Counter;