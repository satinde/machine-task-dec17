import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL
} from '../constants/data'

const initialState={
    data:[]
}

export const dataReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_DATA_REQUEST:
        return{
            loding:true
        }
        case GET_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload.data
            }
        case GET_DATA_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
        return state
    }
}





// import { GET_ALL_PRODUCT_REQUEST
// ,GET_ALL_PRODUCTS_SUCCESS,GET_ALL_PRODUCTS_FAIL
//  } from '../constants/allProducts'

// const initialState={
//     products:[]
// }

// export const productReducer = (state= initialState,action)=>{
//     switch (action.type) {
//         case GET_ALL_PRODUCT_REQUEST:
//             return{
//                 ...state,
//                 loading:true
//             };
//         case GET_ALL_PRODUCTS_SUCCESS:
//             return{
//                 ...state,
//                 loading:false,
//                 products:action.payload
//             };
//         case GET_ALL_PRODUCTS_FAIL:
//             return{
//                 ...state,
//                 loading:false,
//                 error:action.payload
//             }
//         default:
//             return state;
//     }
// }