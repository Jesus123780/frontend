import React, { useRef, forwardRef, useState, useMemo } from 'react';

const DragContainer = ({ data, children, onMove }) => {
    const refs = useRef([]);
    const setRefs = element => refs?.current.push(element);
    const handleMove = event => {
        const values = refs?.current
            .sort((a, b) => event.clientY - b?.offsetTop)
            .map(element => element?.getAttribute('data-id'));
        console.log(event?.clientY);
        onMove(values);
    };
    const Children = data?.map((item, index) => (
        <Draggable ref={setRefs} index={index} onMove={handleMove}>
            {children(item)}
        </Draggable>
    ));
    return <div>{Children}</div>;
};

const Draggable = forwardRef(({ children, onMove, index }, ref) => {
    const [isMoving, toggleMovement] = useState(false);
    const startDrag = () => toggleMovement(true);
    const endDrag = () => toggleMovement(false);
    return (
        <div
            data-id={index}
            ref={ref}
            onDragStart={startDrag}
            onDrag={onMove}
            onDragEnd={endDrag}
            draggable
            style={{ cursor: 'move', opacity: isMoving ? 0.4 : 1 }}
        >
            {children}
        </div>
    );
});

const Component = forwardRef((props, ref) => {
    const reference = element => {
        ref.current = {
            clear: () => (element.value = ''),
            focus: () => element.focus()
        };
    };
    return <input ref={reference} />;
});

const data = [1, 2, 3, 1, 2, 3, ];

export function App() {
    const [pos, setPos] = useState(null);
    const localData = useMemo(() => {
        console.log(pos);
        if (!pos) return data;
        console.log('here', pos.map(i => data[i]));
        return data;
    }, [pos]);
    const componentRef = useRef();
    const handleClick = () => componentRef.current.clear();
    const handleFocus = () => componentRef.current.focus();
    return (
        <div>
            <Component ref={componentRef} />
            <button onClick={handleClick}>Clear</button>
            <button onClick={handleFocus}>Focus</button>
            <DragContainer data={localData} onMove={setPos}>
                {item => (
                    <div
                        key={item}
                        style={{
                            width: 50,
                            height: 50,
                            background: 'red',
                            margin: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {item}
                    </div>
                )}
            </DragContainer>
        </div>
    );
}
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