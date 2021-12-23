import React,{useState} from 'react'



export default function Textform(props) {
    const handleUpclick = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(' Text has been converted to uppercase','success');

    }
    const handleLowclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(' Text has been converted to lowercase','success');
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert(' Text has been copied to clipboard','success');
    }
    const [text,setText] = useState('');
    return (
        <>
        <div>
            <div className="mb-3">
                <h1>Enter text to be analysed </h1>
                <textarea className="form-control" value = {text} id="myBox" onChange={handleOnchange} rows="8"></textarea>
                
            </div>
            <button className='btn btn-primary mx-2 my-2 ' onClick={handleUpclick}  >Convert to Upper Case</button>
            <button className='btn btn-primary mx-2 my-2 ' onClick={handleLowclick}  >Convert to Lower Case</button>
            <button className='btn btn-primary mx-2 my-2 ' onClick={handleCopy}  >Copy  Text</button>
        </div>
        <div className="container my-3" >
            <h1>Text Summary</h1>
            <table class="table table-dark table-hover">
            <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Words</td>
                    <td>{text.split(/\s+/).filter((element) => {return element.length!==0}).length }</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Character</td>
                    <td>{text.length}</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td >Typing time  </td>
                    <td>{0.005 * text.split(/\s+/).filter((element) => {return element.length!==0}).length} </td>
                    
                    </tr>
                </tbody>
            </table>
        </div>

        </>
    )
}
