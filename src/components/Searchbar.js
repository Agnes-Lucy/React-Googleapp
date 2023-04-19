import { useState } from "react"
import "../styles/center.css"

const Searchbar = () => {
    const [text, setText] = useState("");
    const [update, setupdate] = useState("");

    function handleTextChange(event) {
        setText(event.target.value);
    }
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setupdate(text);
        }
    }

    return (
        <div>
            <form onKeyDown={handleKeyDown}>
                 <input type="text" id="input" value={text} onChange={handleTextChange}/>
                 <div>
                    <p>{update}</p>
                 </div>
            </form>
            
        </div>
    )
}

 export default Searchbar;