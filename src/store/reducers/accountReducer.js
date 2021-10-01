import {
  LOGIN_SUCCESS,
  SILENT_LOGIN,
  SIGNOUT,
} from "../actions/accountActions";

const INITIAL_STATE = {
  user: null,
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        user: action.payload.user,
      };
    }
    case SILENT_LOGIN: {
      return {
        user: action.payload.user,
      };
    }
    case SIGNOUT: {
      return {
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default accountReducer;
