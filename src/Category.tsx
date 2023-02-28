import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Book from './Book'

function Category(props) {
    return <div className="Category">
        <h3> {props.Name } <FontAwesomeIcon icon={faCaretDown} /></h3>
        <ul>
            <Book></Book>
        </ul>
    </div>
}

export default Category;