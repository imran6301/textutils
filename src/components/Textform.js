import React, { useState } from 'react'

export default function Textform(props) {
    const handleupclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success")
    }
    const handleLoclick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
  }
  const handleRepclick = () => {
    let newText = text.replace(/a/gi, "e");
    setText(newText);
    document.getElementById("myBox").value = newText;
}

    const handleonclick=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState('');
   
  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}}>
     <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonclick} style={{backgroundColor: props.mode==="dark"?"grey":"white" , color: props.mode ==="dark" ? "white":"#042743"}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleRepclick}>Replace 'a'with'e'</button>
    </div>
    <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743"}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ?text:"Enter something in the text box above to preview it"}</p>
    </div>
    </>
  )
  }