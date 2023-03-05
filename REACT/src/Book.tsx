import "./style/book.css"

interface book {
    author: string,
    types:  Array<string>,
    title:  string,
    isbn:   string,
    cover:  string,
}

function book(props : book) {
return <div>
    <img src={props.cover} alt="cover" width="255" height="380" />
    <p>{props.title}</p>
    <p>von {props.author}</p>
</div>
} 

export default book;