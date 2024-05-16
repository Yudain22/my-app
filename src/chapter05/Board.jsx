import React from "react";

// function Board(props) {
//     return (
//         <div style={styles.wrapper}>
//             <div style={styles.imageContainer}>
//                 <img
//                     // src={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
//                     src={props.image}
//                     style={styles.image}
//                 />
//             </div>

//             <div style={styles.contentContainer}>
//                 <span style={styles.titleText}>{props.title}</span>
//                 <span style={styles.nameText}>{props.name}</span>
//                 <span style={styles.commentText}>{props.text}</span>
//                 <span style={styles.dateText}>{props.date}</span>
//             </div>
//         </div>
//     )
// }
const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    titleText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    nameText: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
    dateText: {
        color: "black",
        fontSize: 12,
    },
};

//-----------------아래는 컴포넌트 분리 연습
function Board(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <User src={props.image} name={props.name} />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.titleText}>{props.title}</span>
                <span style={styles.commentText}>{props.text}</span>
                <span style={styles.dateText}>{props.date}</span>
            </div>
        </div>
    )
}

function User(props) {
    return (
        <div style={styles.imageContainer}>
            <img
                src={props.src}
                style={styles.image}
            />
            <span style={styles.nameText}>{props.name}</span>

        </div>
    );
}

export default Board;