import { useSelector, useDispatch } from "react-redux";
import NotFound from "../../pages/notFound";
import { addCategoryType } from "../../redux/actions/index";
import CategoryTypeList from "./categoryType";

const TypeComponent = ({ categoryId }) => {
    const category = useSelector(state => state.category.find((category) => category.id === categoryId));
    const handleDispatch = useDispatch();

    if (!category) { return <NotFound /> }

    const handleAddType = () => {
        const type = {};
        category.fields.forEach((field) => {
            type[field.id] = '';
        });

        handleDispatch(addCategoryType({ id: categoryId, type }));
    };

    return (
        <>
            <div data-lorem="p">
                <div className="marginTop2">
                    <div className="followMeBar">
                        <h3>{category.name}</h3>
                        <hr />
                    </div>
                    <div className="row">
                        <CategoryTypeList category={category} />
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <button className="btn btn-primary" onClick={handleAddType}>Add Item</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TypeComponent