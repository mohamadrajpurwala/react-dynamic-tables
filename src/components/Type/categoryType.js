import Card from "../Card/index";
import { useDispatch } from "react-redux";
import { removeCategoryType } from "../../redux/actions/index";
import CategoryTypeFields from "./categoryTypeField";

const CategoryTypeList = ({ category, ...props }) => {
    const handleDispatch = useDispatch();

    const handleRemoveType = (index) => {
        handleDispatch(removeCategoryType({ id: category.id, index }));
    };

    return (
        category.types && category.types.map((item, index) => {
            return (
                <div key={index} className="col-lg-3 col-md-3 col-sm-12">
                    <Card
                        title={category.fields.find(c => c.id === category.titleField) && item[category.titleField]}
                        onRemoveTap={(e) => handleRemoveType(index)}
                        renderAddFieldButton={false}>
                        <CategoryTypeFields category={category} parentIndex={index} fields={category.fields} />
                    </Card>
                </div>
            );
        })
    )
};

export default CategoryTypeList;