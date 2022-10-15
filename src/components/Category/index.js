import { addCategoryField, removeCategory, updateCategory } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import Card from "../Card/index";
import InputField from "../InputField/index";
import SelectField from "../SelectField/index";
import CategoryFields from "./categoryField";

const CategoryList = ({ categories, ...props }) => {
    const handleDispatch = useDispatch();

    const handleRemoveCategory = (index) => {
        handleDispatch(removeCategory(index));
    }

    const handleChange = (index, key, value) => {
        handleDispatch(updateCategory({ id: index, key, value }));
    };

    const handleAddField = (index, type) => {
        handleDispatch(addCategoryField({ id: index, field: { id: nanoid(), name: '', type: type } }));
    };

    return (
        categories && categories.map((item, index) => {
            return (
                <div key={index} className="col-lg-3 col-md-3 col-sm-12">
                    <Card
                        onRemoveTap={(e) => handleRemoveCategory(index)}
                        onActionTap={(e, type) => handleAddField(index, type)}
                        renderAddFieldButton={true}
                        title={item.name}
                    >
                        <div className="col12">
                            <label>Name</label>
                            <InputField name="name" type="text" value={item.name} onChange={(key, value) => handleChange(index, key, value)} />
                        </div>
                        <div className="col12">
                            <label>Title Field</label>
                            <SelectField
                                name="titleField"
                                items={item.fields}
                                value={item.titleField}
                                onChange={(key, value) => { handleChange(index, key, value) }} />
                        </div>
                        <hr />
                        <CategoryFields parentIndex={index} fields={item.fields} />
                    </Card>
                </div>
            );
        })
    );
};

export default CategoryList;