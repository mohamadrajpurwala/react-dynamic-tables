import ActionTypes from '../actionTypes/index';

export const addCategory = payload => {
    return {
        type: ActionTypes.CATEGORY.ADD,
        payload
    }
};

export const updateCategory = payload => {
    return {
        type: ActionTypes.CATEGORY.UPDATE,
        payload
    }
};

export const removeCategory = payload => {
    return {
        type: ActionTypes.CATEGORY.REMOVE,
        payload
    }
};

export const addCategoryField = payload => {
    return {
        type: ActionTypes.CATEGORY_FIELD.ADD,
        payload
    }
};

export const updateCategoryField = payload => {
    return {
        type: ActionTypes.CATEGORY_FIELD.UPDATE,
        payload
    }
};

export const removeCategoryField = payload => {
    return {
        type: ActionTypes.CATEGORY_FIELD.REMOVE,
        payload
    }
}

export const addCategoryType = payload => {
    return {
        type: ActionTypes.CATEGORY_TYPE.ADD,
        payload
    }
};

export const updateCategoryType = payload => {
    return {
        type: ActionTypes.CATEGORY_TYPE.UPDATE,
        payload
    };
};

export const removeCategoryType = payload => {
    return {
        type: ActionTypes.CATEGORY_TYPE.REMOVE,
        payload
    }
};