import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
 
const ref = React.createRef();
 
function App() {
 return (
 <div className="App">
 <Pdf targetRef={ref} filename="code-example.pdf">
 {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
 </Pdf>
 <div ref={ref}>
 <h1>pavan</h1>
 </div>
 </div>
 );
}