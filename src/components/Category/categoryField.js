import { removeCategoryField, updateCategoryField } from "../../redux/actions/index";
import DropDownButton from "../DropDownButton/index";
import InputField from "../InputField/index";
import { useDispatch } from "react-redux";

const CategoryFields = ({ parentIndex, fields }) => {
    const handleDispatch = useDispatch();

    const handleRemoveField = (parentIndex, index) => {
        handleDispatch(removeCategoryField({ parentIndex, index }));
    };

    const handleFieldChange = (parentIndex, index, key, value) => {
        handleDispatch(updateCategoryField({ parentIndex, index, key, value }));
    };

    return fields && fields.map((field, index) => {
        return (
            <div key={index} className="col12">
                <div className="input-group">
                    <InputField name="name" type="text" value={field.name} onChange={(key, value) => handleFieldChange(parentIndex, index, key, value)} />
                    <DropDownButton style="dropdown input-group-append"
                        btnStyle="btn btn-secondary dropdown-toggle"
                        label={field.type}
                        isDisplayRemove={true}
                        onActionTap={(e, type) => handleFieldChange(parentIndex, index, 'type', type)}
                        onRemoveTap={(e) => handleRemoveField(parentIndex, index)}
                    />
                </div>
            </div>
        );
    });
};

export default CategoryFields;