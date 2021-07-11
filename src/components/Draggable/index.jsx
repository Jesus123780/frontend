import React, { useRef, useState, useMemo } from 'react';

export const App = ({ children, onMove, data }) => {
    const refs = useRef([]);
    const setRefs = element => refs?.current.push(element);
    const handleMove = event => {
        const values = refs?.current
            .sort((a, b) => event.clientY - b?.offsetTop)
            .map(element => element?.getAttribute('data-id'));
        onMove(values);
        console.log(onMove)
    };
    const [isMoving, toggleMovement] = useState(false);
    const startDrag = () => toggleMovement(true);
    const endDrag = () => toggleMovement(false);
    const [pos, setPos] = useState(null);
    const localData = useMemo(() => {
        if (!pos) return data;
        return data;
    }, [pos]);
    const Children = data?.map((item, index) => (
        <div data={localData} onMove={setPos} onDrag={onMove} onDragStart={startDrag} onDragEnd={endDrag} draggable ref={setRefs} data-id={index} index={index} onMove={handleMove} style={{ display: 'block', cursor: 'move', opacity: isMoving ? 0.4 : 1 }}>
            <div key={item}>
                {children}
            </div>
        </div>
    ));
    return <div>{Children}</div>;
};

// import { useRef } from "react";
// import { Input } from "@freenow/wave";
// import "./styles.css";

// export default function App() {
//   const inputEl = useRef();

//   const selectContent = () => {
//     // This does not work because the ref gives the
//     // container div (see console)
//     console.log(inputEl?.current);
//     // inputEl?.current?.select();

//     // This does work because we "manually" select the input
//     // and will break if the HTML structure ever changes

//     inputEl?.current?.children[0]?.select();
//   };

//   return (
//     <div className="App">
//       <h1>Input ref example</h1>
//       <Input
//         onClick={selectContent}
//         ref={inputEl}
//         value="some content to copy"
//       />
//     </div>
//   );
// }
// import React, { useState } from "react";

// const List = () => {
//   const [text, setText] = useState("");
//   const [item, setItem] = useState([]);

//   const handleClick = () => {
//     setItem([...item, text]);
//     setText("");
//   };

//   const handleRemove = (i) => {
//     setItem(item.filter((text, index) => index !== i));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button type="button" onClick={handleClick}>
//         등록
//       </button>
//       <ul>
//         {item.map((text, i) => (
//           <li key={i}>
//             {text}
//             <button onClick={() => handleRemove(i)}>삭제</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default List;