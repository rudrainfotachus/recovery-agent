import { BILL_DETAILS_FAIL, BILL_DETAILS_REQUEST, BILL_DETAILS_SUCCESS, BILL_LIST_FAIL, BILL_LIST_REQUEST, BILL_LIST_SUCCESS } from "../constants/billsConstants"
import Axios from 'axios'

export const listBills = () => async (dispatch) =>{
    dispatch({
        type: BILL_LIST_REQUEST
    });
    try{
        const {data} = await Axios.get('/api/bills/all');
        dispatch({type:BILL_LIST_SUCCESS, payload: data})
    } catch (error){
        dispatch({type:BILL_LIST_FAIL, payload: error.message})

    }
}

// single bill details
export const detailsBill = (billId) => async (dispatch) =>{
    dispatch({type: BILL_DETAILS_REQUEST, payload: billId})
    try{
        
        const {data} = await Axios.get(`/api/bills/bill/${billId}`)
        dispatch({type:BILL_DETAILS_SUCCESS, payload: data})
    } catch (error){
        dispatch({
            type:BILL_DETAILS_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}