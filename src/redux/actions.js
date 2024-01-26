// Action Types
export const ADD_FIELD = 'ADD_FIELD';
export const RESET_FIELDS = 'RESET_FIELDS';

// Action Creators
export const addField = fieldData => ({
  type: ADD_FIELD,
  payload: fieldData
});

export const resetFields = () => ({
  type: RESET_FIELDS
});
