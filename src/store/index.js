import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { dataReducer } from '../reducers/dataReducer'

const reducer = combineReducers({
    data:dataReducer
})

const initialState={}

const middleware= [thunk]

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default store













// import {createStore,combineReducers, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import {productReducer} from '../reducers/productReducer'

// const initialState={}
// const reducer=combineReducers({
//     products:productReducer
// })
// const middleware=[thunk]


// const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// )

// export default store