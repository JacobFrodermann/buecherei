import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Book from './Book.js';
function Category(props) {
    return _jsxs("div", { className: "Category", children: [_jsxs("h3", { children: [" ", props.Name, " ", _jsx(FontAwesomeIcon, { icon: faCaretDown })] }), _jsx("ul", { children: _jsx(Book, {}) })] });
}
export default Category;
