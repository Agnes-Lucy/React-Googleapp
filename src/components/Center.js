import Googleicon from './Gogleicon';
import Searchbar from './Searchbar';
import SearchLen from './SearchLen';
import Camera from './Cam';
import Button from './Button';
import Language from './Language';
import "../styles/center.css";
const Center = () => {
    return (
        <div className='app-center'>
            <Googleicon />
            <div className='search'>
                  <SearchLen />
                  <Searchbar />
                  <Camera />
            </div>  
            <div className='Button'>
                <Button title= {"Google Search"} />
                <Button title = {"I'm Feeling Lucky"}/>
            </div>
            <div className='Languages'>
                <div>Google offered in:</div>
                <div className='AllLanguage'>
                     <Language title = {"Hausa"} /> 
                     <Language title = {"Igbo"} /> 
                     <Language title = {"Ede Yoruba"} /> 
                     <Language title = {"Nigerian Pidgin"} /> 
                </div>
                
            </div>
            
        </div>
    )
}

export default Center; 