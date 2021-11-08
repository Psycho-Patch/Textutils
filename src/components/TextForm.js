import React, { useState } from "react";
export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    // console.log("Uppercase was Clicked" + text);
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    // console.log("Uppercase was Clicked" + text);
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");

  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I am Copy");
    var text  = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,99999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");

  }

  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "success");
  }

  let [text, setText] = useState("");
  // let [text] = useState('Enter text here');
  // let [text, setText] = useState('Enter text here');
  // text = "new Text"; // Wrong way to change the state
  // setText ("new Text"); // Correct way to change the state
  return (
    <>
      document.title = 'textUtils -Home';

    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}
>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
        style={{backgroundColor: props.mode==='dark'?'#173d38':'white', color: props.mode==='dark'?'white':'black'}}

          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>

      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>

      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read time </p>
      <h2>Preview</h2>
      <p className="blink text-wrap">{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
  
}//042723
