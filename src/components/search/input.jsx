import React, {memo, useRef} from 'react';
import styles from './input.module.css';

const Input= memo(({onSearch})=>{
    const inputRef = useRef();
    const handleSearch = () =>{
        const inputValue = inputRef.current.value;
        onSearch(inputValue);
        inputRef.current.value = '';
    };
    const onKeyPress =(e)=>{
        if(e.key === "Enter"){
            handleSearch();
        }        
    }
    const onClick=()=>{
        handleSearch();
    }
    return (
        <div className={styles.container}>
            <span className={styles.logo}><i className="fab fa-youtube"></i></span>
            <span className={styles.title}>Itube</span>               
            <input 
                className={styles.input}
                onKeyPress = {onKeyPress}
                ref={inputRef}
                type="search" 
                name="input" 
                id="input" 
                placeholder="  search..." 
            />
            <button 
                className={styles.submit}
                onClick = {onClick}
            >
                <i className="fas fa-search"></i>
            </button>
        </div>
    );   
  }
);

export default Input;