import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './style/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Category from './Category.js';
function App(props) {
    return _jsx("div", { className: "App", children: _jsxs("header", { className: "App-header", children: [_jsxs("section", { children: [_jsx("h1", { children: "B\u00FCcherei" }), _jsx("h2", { children: "Regale:" })] }), _jsxs("ul", { children: [_jsx("li", { children: _jsx("section", { children: _jsx("p", { children: _jsxs("h2", { children: ["Suche", _jsx("input", { id: "search", placeholder: "|" }), _jsx(FontAwesomeIcon, { icon: faMagnifyingGlass })] }) }) }) }), _jsx("li", { children: _jsx(Category, { Name: "Krimi" }) }), _jsx("li", { children: _jsx(Category, { Name: "Sachbuecher" }) }), _jsx("li", { children: _jsx(Category, { Name: "Romane" }) }), _jsx("li", { children: _jsx(Category, { Name: "Fantasy" }) }), _jsx("li", { children: _jsx(Category, { Name: "fuer Kinder" }) })] })] }) });
}
export default App;
