import * as actions from "./constant";
const initialState = {
  error: false,
  message: false,
  loading: false,
  isSaved: false,
  isDeleted: false,
  getPaymentList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PAYMENT_INITIATED:
      return {
        ...state,
        message: false,
        error: false,
        loading: true,
        isSaved: false,
      };
    case actions.ADD_PAYMENT_SUCCESS:
      let locMrth = localStorage.paymentLocal
        ? JSON.parse(localStorage.paymentLocal)
        : [];
      let data = action.payload;
      if (locMrth.length === 0) {
        data.id = 1;
      } else {
        data.id = locMrth[locMrth.length - 1].id + 1;
      }
      locMrth.unshift(data);
      localStorage.setItem("paymentLocal", JSON.stringify(locMrth));
      return {
        ...state,
        loading: false,
        isSaved: true,
      };
    case actions.ADD_PAYMENT_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: false,
        isSaved: false,
      };
      case actions.GET_PAYMENTS_INITIATED:
        return {
          ...state,
          message: false,
          error: false,
          loading: true,
        };
      case actions.GET_PAYMENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          getPaymentList: localStorage.paymentLocal
            ? JSON.parse(localStorage.paymentLocal)
            : [],
        };
      case actions.GET_PAYMENTS_ERROR:
        return {
          ...state,
          error: true,
          loading: false,
          message: action.error,
        };
        case actions.DELETE_PAYMENTS_INITIATED:
          return {
            ...state,
            message: false,
            error: false,
            loading: true,
            isDeleted: false,
          };
        case actions.DELETE_PAYMENTS_SUCCESS:
          let forRemove = localStorage.paymentLocal
            ? JSON.parse(localStorage.paymentLocal)
            : [];
          let ind = forRemove.findIndex((x) => x.id === action.payload);
          forRemove.splice(ind, 1);
          localStorage.setItem("paymentLocal", JSON.stringify(forRemove));
          return {
            ...state,
            loading: false,
            error: false,
            isDeleted: true,
          };
        case actions.DELETE_PAYMENTS_ERROR:
          return {
            ...state,
            error: true,
            loading: false,
            isDeleted: false,
            message: action.error,
          };
    default:
      return state;
  }
};
