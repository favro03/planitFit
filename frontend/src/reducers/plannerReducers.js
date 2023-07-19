import {
    PLANNER_LIST_REQUEST,
    PLANNER_LIST_SUCCESS,
    PLANNER_LIST_FAIL,
    PLANNER_DETAILS_REQUEST,
    PLANNER_DETAILS_SUCCESS,
    PLANNER_DETAILS_FAIL,
    PLANNER_DELETE_REQUEST,
    PLANNER_DELETE_SUCCESS,
    PLANNER_DELETE_FAIL,
    PLANNER_CREATE_REQUEST,
    PLANNER_CREATE_SUCCESS,
    PLANNER_CREATE_FAIL,
    PLANNER_CREATE_RESET,
    PLANNER_UPDATE_REQUEST,
    PLANNER_UPDATE_SUCCESS,
    PLANNER_UPDATE_FAIL,
    PLANNER_UPDATE_RESET,
    PLANNER_USER_LIST_REQUEST,
    PLANNER_USER_LIST_SUCCESS,
    PLANNER_USER_LIST_FAIL,


} from '../constants/plannerConstants'

export const plannerListReducer = (state = { planner: [] }, action) => {
    switch (action.type) {
      case PLANNER_LIST_REQUEST:
        return { loading: true, planner: [] }
      case PLANNER_LIST_SUCCESS:
        return {
          loading: false,
          planner: action.payload.planner,
        }
      case PLANNER_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  

  export const plannerDetailsReducer = (state = { planner: { reviews: [] }, loading: false }, action) => {
    switch (action.type) {
      case PLANNER_DETAILS_REQUEST:
        return { ...state, loading: true };
      case PLANNER_DETAILS_SUCCESS:
        return {
          loading: false,
          planner: action.payload,
        };
      case PLANNER_DETAILS_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  export const plannerDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case PLANNER_DELETE_REQUEST:
        return { loading: true };
      case PLANNER_DELETE_SUCCESS:
        return { loading: false, success: true };
      case PLANNER_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  
  export const plannerCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PLANNER_CREATE_REQUEST:
        return { loading: true }
      case PLANNER_CREATE_SUCCESS:
        return { loading: false, success: true, planner: action.payload }
      case PLANNER_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case PLANNER_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const plannerUpdateReducer = (state = { planner: {} }, action) => {
    switch (action.type) {
      case PLANNER_UPDATE_REQUEST:
        return { loading: true }
      case PLANNER_UPDATE_SUCCESS:
        return { loading: false, success: true, planner: action.payload }
      case PLANNER_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case PLANNER_UPDATE_RESET:
        return { planner: {} }
      default:
        return state
    }
  }
  
  export const plannerUserListReducer = (
    state = { loading: false, planners: [], error: null },
    action
  ) => {
    switch (action.type) {
      case PLANNER_USER_LIST_REQUEST:
        return { loading: true, planners: [], error: null };
      case PLANNER_USER_LIST_SUCCESS:
        return {
          loading: false,
          planners: action.payload,
          error: null,
        };
      case PLANNER_USER_LIST_FAIL:
        return { loading: false, planners: [], error: action.payload };
      default:
        return state;
    }
  };
  
  
