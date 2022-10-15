import { useSelector } from "react-redux";
import TypeComponent from "../components/Type/index";

const Home = () => {
    const category = useSelector(state => state.category);

    if (!category.length) {
        return (<p className="pull-left">No manage types available.</p>);
    }

    return category && category.map((item, index) => {
        return (
            <TypeComponent key={index} categoryId={item.id} />
        );
    });
}

export default Home;
