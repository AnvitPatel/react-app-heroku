import * as actions from "./constant";
const initialState = {
  error: false,
  message: false,
  loading: false,
  isSaved: false,
  isDeleted: false,
  isUpdated:false,
  getMethodsList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_METHOD_INITIATED:
      return {
        ...state,
        message: false,
        error: false,
        loading: true,
        isSaved: false,
      };
    case actions.ADD_METHOD_SUCCESS:
      let locMrth = localStorage.localMethods
        ? JSON.parse(localStorage.localMethods)
        : [];
      let data = action.payload;
      if (locMrth.length === 0) {
        data.id = 1;
      } else {
        data.id = locMrth[locMrth.length - 1].id + 1;
      }
      locMrth.unshift(data);
      localStorage.setItem("localMethods", JSON.stringify(locMrth));
      return {
        ...state,
        loading: false,
        isSaved: true,
      };
    case actions.ADD_METHOD_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: false,
        isSaved: false,
      };
    case actions.GET_METHODS_INITIATED:
      return {
        ...state,
        message: false,
        error: false,
        loading: true,
      };
    case actions.GET_METHODS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        getMethodsList: localStorage.localMethods
          ? JSON.parse(localStorage.localMethods)
          : [],
      };
    case actions.GET_METHODS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.error,
      };
    case actions.DELETE_METHODS_INITIATED:
      return {
        ...state,
        message: false,
        error: false,
        loading: true,
        isDeleted: false,
      };
    case actions.DELETE_METHODS_SUCCESS:
      let forRemove = localStorage.localMethods
        ? JSON.parse(localStorage.localMethods)
        : [];
      let ind = forRemove.findIndex((x) => x.id === action.payload);
      forRemove.splice(ind, 1);
      localStorage.setItem("localMethods", JSON.stringify(forRemove));
      // localStorage.paymentLocal
      return {
        ...state,
        loading: false,
        error: false,
        isDeleted: true,
      };
    case actions.DELETE_METHODS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        isDeleted: false,
        message: action.error,
      };
    case actions.UPDATE_METHODS_INITIATED:
      return {
        ...state,
        message: false,
        error: false,
        loading: true,
        isUpdated: false,
      };
    case actions.UPDATE_METHODS_SUCCESS:
      let methData = localStorage.localMethods
      ? JSON.parse(localStorage.localMethods)
      : [];
      let index = methData.findIndex((x) => x.id === action.payload.id);
      methData[index].name=action.payload.name;
      localStorage.setItem("localMethods", JSON.stringify(methData));
      let payData = localStorage.paymentLocal?JSON.parse(localStorage.paymentLocal):[];
      payData?.forEach((a,i)=>{
        if(a.paymentTypeId === action.payload.id){
          payData[i].paymentType=action.payload.name;
        }
      })
      localStorage.setItem("paymentLocal", JSON.stringify(payData));
      return {
        ...state,
        loading: false,
        error: false,
        isUpdated: true,
      };
    case actions.UPDATE_METHODS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        isUpdated: false,
        message: action.error,
      };
    default:
      return state;
  }
};
