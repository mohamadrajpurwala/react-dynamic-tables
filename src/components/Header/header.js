import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {
    const category = useSelector(state => state.category);

    const prepareURL = (id) => {
        return `/type/${id}`;
    };

    const renderCategories = () => {
        return category && category.map((item, index) => {
            return (
                <li key={index} className="nav-item">
                    <NavLink activeclassname="active" className="nav-link" to={prepareURL(item.id)}>{item.name}</NavLink>
                </li>
            );
        });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/all">Machine Store</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink activeclassname="active" className="nav-link" to="/all">All</NavLink>
                    </li>
                    {renderCategories()}
                    <li className="nav-item">
                        <NavLink activeclassname="active" className="nav-link" to="/manage-types">Manage Types</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;