import React, {useState} from "react";
import './SubHeader.css'

const SubHeader = (props) => {
    const [theme, setTheme] = useState('white');
    const themeHandler = () => {
        if (theme === 'white') {
            setTheme('black');
            props.themeChange('black');
        } else {
            setTheme('white');
            props.themeChange('white');
        }
    }
    return (
        <>
            <div className={`${theme === 'black'? 'subheader-dark' : 'subheader-light'}`}>
                <div className='theme-block'>
                    <span>Today's Tasks ({props.cardsLength})</span>
                    <label className="switch">
                        <input type="checkbox" id="themeToggle" onChange={themeHandler}/>
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </>
    );
}

export default SubHeader;
