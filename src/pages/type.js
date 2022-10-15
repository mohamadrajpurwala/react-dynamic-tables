import { useParams } from "react-router-dom";
import TypeComponent from "../components/Type/index";

const CategoryType = () => {
    const { id } = useParams();

    return (
        <>
            <TypeComponent categoryId={id} />
        </>
    );
};

export default CategoryType;