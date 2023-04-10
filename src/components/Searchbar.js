import { useState } from "react"
import "../styles/center.css"

const Searchbar = () => {
    const [text, setText] = useState("");

    function handleTextChange(e) {
        setText(e.target.value);
    } 

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            e.preventDefault();
        }
    }

    return (
        <div>
            <form onKeyDown={handleKeyDown}>
                 <input type="text" id="input" value={text} onChange={handleTextChange}/>
            </form>
            
        </div>
    )
}

 export default Searchbar;