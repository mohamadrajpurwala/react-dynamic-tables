import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from "react-redux";
import { addCategory } from "../redux/actions/index";
import CategoryList from "../components/Category/index";

const ManageType = () => {
    const titleId = nanoid();
    const defaultCategory =
    {
        id: nanoid(),
        name: "New Category",
        titleField: titleId,
        fields: [
            {
                id: titleId,
                name: 'Title',
                type: 'Text'
            }
        ],
        types: []
    };

    const category = useSelector(state => state.category);
    const handleDispatch = useDispatch();

    const handleAddCategory = () => {
        handleDispatch(addCategory(defaultCategory));
    }

    return (
        <>
            <div className="row">
                <CategoryList categories={category} />
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <button className="btn btn-primary" onClick={handleAddCategory}>Add Category</button>
                </div>
            </div>
        </>
    );
}

export default ManageType;
