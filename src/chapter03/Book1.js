import React from "react";

function Book1(porps){
    return React.createElement(
        'div',
        null,
        [
            React.createElement(
                'h1',
                null,
                `이 책의 이름은 ${porps.name}입니다.`
            ),
            React.createElement(
                'h2',
                null,
                `이 책은 총 ${porps.numOfPAge} 페이지로 이뤄져 있습니다.`
            )
        ]
    );
}

export default Book1;