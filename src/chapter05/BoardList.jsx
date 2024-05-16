import React from "react";
import Board from "./Board";


function BoardList(props) {
    return (
        <div>
            <Board title={"test1"} 
            name={"유다인"} 
            text={"test1입니다"} 
            date={new Date().toLocaleDateString()}/>
        </div>
    );
}

export default BoardList;