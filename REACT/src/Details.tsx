import "./style/Details.css"

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
    hide(b:boolean): void
}

export default function Details(details : props) {
    if (details.info) {return <div id="wrap"><div id="bg" onClick={() => {details.hide(false)}}><div id="center">
        <h2>{ details.book.title }</h2>
        <img src={ details.book.cover } alt="cover" width={1920/100*23} height={1080/100*60} />
        <h3>von { details.book.author } </h3>
        <h3>isbn: { details.book.isbn } </h3>
    </div></div></div>} else {return <p></p>}
}
