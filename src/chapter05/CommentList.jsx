import React from "react";
import Comment from "./Comment";

function CommnetList(props) {
    return(
        <div>
            <Comment name={"이인제"} Comment={"안녕하세요, 소플입니다."}/>
            <Comment name={"유재석"} Comment={"리액트 재미있어요~"}/>
            <Comment name={"유다인"} Comment={"오예"}/>
        </div>
    );
}

export default CommnetList;