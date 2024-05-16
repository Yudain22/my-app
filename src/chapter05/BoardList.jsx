import React from "react";
import Board from "./Board";



// function BoardList(props) {
//     return (
//         <div>
//             <div>
//                 <Board title={"test1"}
//                     name={"유다인"}
//                     text={"test1입니다"}
//                     date={new Date().toLocaleDateString()} />
//             </div>
//             <div>
//                 <Board title={"test2"}
//                     name={"유다인"}
//                     text={"test2입니다"}
//                     date={new Date().toLocaleDateString()} />
//             </div>
//             <div>
//                 <Board title={"test3"}
//                     name={"유다인"}
//                     text={"test3입니다"}
//                     date={new Date().toLocaleDateString()} />
//             </div>
//         </div>

//     );


//--------------------------------------------------------------------
const boards = [
    {
        image: "https://cdn-icons-png.flaticon.com/128/16147/16147376.png",
        title: "test1",
        name: "유다인",
        text: "test1입니다.",
        date: new Date().toLocaleDateString(),
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/16147/16147397.png",
        title: "test2",
        name: "백승엽",
        text: "test2입니다.",
        date: new Date().toLocaleDateString(),
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/16147/16147407.png",
        title: "test3",
        name: "윤성미",
        text: "test3입니다.",
        date: new Date().toLocaleDateString(),
    },
]

function BoardList(props) {
    return (
        <div>
            {boards.map((board) => {
                return (
                    <Board image={board.image}
                        title={board.title}
                        name={board.name}
                        text={board.text}
                        date={board.date} />
                )
            })}

        </div>

    );
}

export default BoardList;