import { ADD_FIELD, RESET_FIELDS } from './actions';

const initialState = {
  fields: []
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIELD:
      // Prevent more than 4 fields from being added
      if (state.fields.length >= 4) {
        alert('Maximum of 4 fields can be added.');
        return state;
      }
      return {
        ...state,
        fields: [...state.fields, action.payload]
      };
    case RESET_FIELDS:
      return {
        ...state,
        fields: []
      };
    default:
      return state;
  }
};

export default formReducer;
