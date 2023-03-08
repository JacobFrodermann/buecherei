import "./style/book.css"
import "./style/Details.css"
import { useEffect, useState } from "react";
import Details from "./Details";

interface book {
    author: string,
    types:  Array<string>,
    title:  string,
    isbn:   string,
    cover:  string,
}
interface props {
    book: book;
    info:   boolean,
}

function Book(props : book) {
    
    const [ display, setDisplay ] = useState(false);
    
    
    return <div onClick={ () => {if(!display) {setDisplay(true);} console.log(display)}}>
        <img src={props.cover} alt="cover" width="255" height="380" />
        <p>{ props.title }</p>
        <p>von {props.author}</p>
        <Details book={ props } info={ display } hide={setDisplay}/>
    </div>
} 

export default Book;