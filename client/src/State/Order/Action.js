import { api } from "../../config/apiConfig.js";
import { 
    CREATE_ORDER_FAILURE, 
    CREATE_ORDER_REQUEST, 
    CREATE_ORDER_SUCCESS, 
    GEt_ORDER_BY_ID_FAILURE, 
    GEt_ORDER_BY_ID_REQUEST,
    GEt_ORDER_BY_ID_SUCCESS
} from "./ActionType.js"

export const createOrder = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
        const { data } = await api.post("/api/orders", reqData.address);

        if(data.id) {
            reqData.navigate({ search: `step=3&order_id=${data.id}` });
        }

        console.log('created Order: - ', data);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
    }
};

export const getOrderById = (orderID) => async (dispatch) => {
    console.log("Get Order REQ: ", orderID);
    dispatch({ type: GEt_ORDER_BY_ID_REQUEST });
    try {
        
        const { data } = await api.get(`/api/orders/${orderID}`);
        dispatch({ type: GEt_ORDER_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: GEt_ORDER_BY_ID_FAILURE, payload: error.message });
    }
};