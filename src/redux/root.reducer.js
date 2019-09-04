import { InitialState } from '../models/initialState.model';

export const rootReducer = ( state = InitialState, action ) => {

    switch( action.type ){

        case '' : 
            return{
                ...state
            }

        default:
            return{
                ...state
            }
    }
}