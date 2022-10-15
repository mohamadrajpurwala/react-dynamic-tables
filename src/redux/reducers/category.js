import ActionTypes from '../actionTypes/index';

function getStorageValue() {
    // getting stored value
    const saved = localStorage.getItem('category');
    const initial = JSON.parse(saved);
    return initial || [];
}

const categoryReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.CATEGORY.ADD:
            return [...state, payload];
        case ActionTypes.CATEGORY.UPDATE:
            const updateCategory = state.map((category, index) => {
                if (index !== payload.id) return category;
                const newCategory = { ...category, [payload.key]: payload.value };
                return newCategory;
            });
            return updateCategory;
        case ActionTypes.CATEGORY.REMOVE:
            const removeCategory = state.filter((item, i) => {
                return i !== payload;
            });
            return removeCategory;
        case ActionTypes.CATEGORY_FIELD.ADD:
            const addFieldInCategory = state.map((category, index) => {
                if (index !== payload.id) return category;

                const newCategoryField = { ...category, fields: [...category.fields, payload.field] };
                return newCategoryField;
            });
            return addFieldInCategory;
        case ActionTypes.CATEGORY_FIELD.UPDATE:
            const updateFieldInCategory = state.map((category, index) => {
                if (index !== payload.parentIndex) return category;

                const categoryFields = category.fields;
                categoryFields[payload.index][payload.key] = payload.value;
                const updateCategoryField = { ...category, fields: [...categoryFields] };
                return updateCategoryField;
            });
            return updateFieldInCategory;
        case ActionTypes.CATEGORY_FIELD.REMOVE:
            const removeFieldInCategory = state.map((category, index) => {
                if (index !== payload.parentIndex) return category;

                const categoryFields = category.fields.filter((field, fieldIndex) => {
                    return fieldIndex !== payload.index;
                });

                const removeCategoryField = { ...category, fields: [...categoryFields] };
                return removeCategoryField;
            });
            return removeFieldInCategory;
        case ActionTypes.CATEGORY_TYPE.ADD:
            const addTypeInCategory = state.map((category, index) => {
                if (category.id !== payload.id) return category;

                const newCategoryType = { ...category, types: [...category.types, payload.type] };
                return newCategoryType;
            });
            return addTypeInCategory;
        case ActionTypes.CATEGORY_TYPE.UPDATE:
            const updateTypeInCategory = state.map((category, index) => {
                if (category.id !== payload.id) return category;

                const types = category.types;
                types[payload.index][payload.key] = payload.value;
                const updateCategoryType = { ...category, types: [...types] };
                return updateCategoryType;
            });
            return updateTypeInCategory;
        case ActionTypes.CATEGORY_TYPE.REMOVE:
            const removeTypeInCategory = state.map((category, index) => {
                if (category.id !== payload.id) return category;

                const categoryTypes = category.types.filter((field, typeIndex) => {
                    return typeIndex !== payload.index;
                });

                const removeCategoryType = { ...category, types: [...categoryTypes] };
                return removeCategoryType;
            });
            return removeTypeInCategory;
        default:
            return getStorageValue();
    }
};

export default categoryReducer;