import "./style/Create.css"
import { useState } from 'react'

interface props {
    hidden: boolean;
    setHidden: (value: boolean) => void;
    types: category[];
}
interface category {
    name : string;
    id : string;
  }

function addBook(categories: category[]) {
    return <div>
        <br/>
        <br/>
        <label htmlFor="title">Title: </label>
        <input id="title"/>
        <br />
        <label htmlFor="author">Author: </label>
        <input id="author"/>
        <br />
        <label htmlFor="isbn">ISBN:</label>
        <input id="isbn"/>
        <br />
        <label htmlFor="cover">Cover:</label>
        <input id="cover" placeholder="Link to cover"/>
        { categories.map((c) => {return <div>
            <p><input type="checkbox" className="type" />{c.name}</p>
        </div>})}
    </div>
}
function add(bookOrShelf : boolean, categories: category[]){
    if (bookOrShelf) {
        let types = []
        let boxes = document.getElementsByClassName("type").length;
        for (var i = 0; i < boxes ; i++) {
            if (boxes[i].checked) types.push(categories[i].id)
        } 
    }
}
function addType() {
    return <p>Test2</p>
}
export default function Create(props : props) {
const [addingBook, setAddingBook] = useState(true)

let toAdd = addingBook ? addBook(props.types) : addType()

    if (props.hidden) {return <div id="wrap"><div id="bg"><div id="center">
        <h1>Add</h1>
        <div className="normal">
            <input type="radio" id="type" name="what" onChange={(event) => {setAddingBook(event.currentTarget.value != "on")}}/>
            <label htmlFor="type">Shelf</label>
            <br />
            <input type="radio" id="addBook"  name="what" onChange={(event) => {setAddingBook(event.currentTarget.value == "on")}}/>
            <label htmlFor="addBook">Book</label> 
        </div>
        { toAdd }
        <p><section className="button" onClick={() => {add(addingBook, props.types)}}>add</section> <section className="button">done</section></p>
</div></div></div>} else {return <p></p>}
}