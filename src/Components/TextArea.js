import React , {useState} from 'react';

export default function TextArea(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted to Uppercase", "success");
  }
  
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text is converted to Lowercase", "success");
  }
  
  const handleReverseClick = ()=>{
    let newText = "";
    for(let i=text.length-1;i>=0;i--){
      newText += text[i];
    }
    setText(newText);
    props.showAlert("Text is Reversed", "success");
  }
  
  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text box is cleared", "success");
  }
  
  const handleRemoveExtraSpacesClick = ()=>{
    // The regular expression /[ ]+/ matches any character that is space. The + sign at the end of the regular expression means that the match must occur one or more times.
    let newText = text.split(/[ ]+/);
    // then joins the text with single spaces 
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed from the text", "success");
  }

  const handleOnChange = (event)=>{
    // console.log("handleOnChange was clicked")
    // setText change the value of the event
    setText(event.target.value);
  }
  // text is variable and setText is a function to update the value to text
  const [text , setText] = useState("");
  // text = "new text"; // wrong way to change text 
  // setText("new text"); // correct way to change text 
  return (
    <>
    <div style={{color:props.mode==="light"?"black":"white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
            <textarea className="form-control" style={{backgroundColor: props.mode==="light"?"white":"#0f0f0f", color:props.mode==="light"?"black":"white"}} value={text} onChange={handleOnChange} id="myBox" rows="11"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-success mx-2" onClick={handleReverseClick}>Reverse the text</button>
        <button className="btn btn-success mx-2" onClick={handleRemoveExtraSpacesClick}>Remove extra spaces</button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear text</button>
    </div>

    <div className="my-3" style={{color:props.mode==="light"?"black":"white"}}>
      <h2>Your Text summary</h2>
      <p> <b>{text.split(" ").length} words and {text.length} characters </b></p>
      <p> <b>{0.008 * text.split(" ").length} minutes to read </b></p>

      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something to preview"}</p>
    </div>

    </>
  );
}
