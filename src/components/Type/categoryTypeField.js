import InputField from "../InputField/index";
import { useDispatch } from "react-redux";
import { updateCategoryType } from "../../redux/actions/index";

const CategoryTypeFields = ({ category, parentIndex, fields, ...props }) => {
    const handleDispatch = useDispatch();

    const handleFieldValueChange = (index, key, value) => {
        handleDispatch(updateCategoryType({ id: category.id, index, key, value }));
    };

    return fields && fields.map((field, index) => {
        return (
            <div key={index} className="col12">
                <label>{field.name}</label>
                <InputField
                    label={field.name}
                    name={field.id}
                    value={category.types[parentIndex][field.id]}
                    type={field.type}
                    onChange={(key, value) => handleFieldValueChange(parentIndex, key, value)} />
            </div>
        );
    });
};

export default CategoryTypeFields;