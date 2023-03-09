import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';
import { faCaretDown , faCaretLeft, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Book from './Book'
import { useEffect, useState } from "react";
import "./style/Category.css"

let books: Array<book> 

interface book {
    author: string,
    types:  Array<string>,
    title:  string,
    isbn:   string,
    cover:  string,
}
interface props {
    id:string;
    name:string;
}

async function fetchBooks(id) {
    if (id === "null") return []
    let res = await fetch("http://localhost:3001/get?type=" + id)
    let Response = await res.json();
    books = Response[0].result as Array<book>;
    return books;
}

function renderBooks(books: Array<book>, scroll: number) {
    if (books.length === 0) {return <p>Loading</p>}

    let h : Array<book> = []
    
    for (let i = 0; i < 4; i++) {
        if (books.length > i+scroll) h.push(books[i+scroll])
    }

    return h.map((b) => <Book 
                title =  { b.title  }
                author = { b.author }
                isbn =   { b.isbn   }
                cover =  { b.cover  } 
                types =  {    []    }  
            />
        )
}

export default function Category(props : props) {
    const [books, initBooks] = useState([])

    useEffect(() => {
        fetchBooks(props.id).then((data => {initBooks(data)}))
    },[])

    const [hidden, setHidden] = useState(true)
    const [scroll, setScroll] = useState(0)


    return <div className="Category">
        <h3 onClick={ () => {setHidden(!hidden)} } > {props.name } <FontAwesomeIcon icon={hidden ? faCaretDown : faCaretLeft} /></h3>
        <div className="shelf" style={{ display: hidden ? "none" : "flex"}}>
            <div className="Arrow" onClick={ () => {if (scroll !== 0) setScroll(scroll-1)} }>
                <FontAwesomeIcon icon={ faArrowLeft }/>
            </div>
            { renderBooks(books, scroll) }
            <div className="Arrow" onClick={ () => {if (scroll !== books.length-4) setScroll(scroll+1)}}>
                <FontAwesomeIcon icon={ faArrowRight }/>
            </div>
        </div>
    </div>
}
