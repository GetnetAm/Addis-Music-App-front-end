import * as types from "./actionType";
const initialState={
    musics:[],
    loading: false,
    error: null,
};

const musicsReducer=(state =initialState, action)=>{
    switch (action.type) {
        case types.LOAD_MUSICS_START:
        case types.CREATE_MUSICS_START:
        case types.DELETE_MUSICS_START:
        case types.UPDATE_MUSICS_START:
            return{
                ...state,
                loading:true
            };
        case types.LOAD_MUSICS_SUCCESS:
            return{
                ...state,
                loading:false,
                musics: action.payload,

            };

        case types.UPDATE_MUSICS_SUCCESS:
        case types.CREATE_MUSICS_SUCCESS:
            return{
                ...state,
                loading: false,
            };

         
               
        
        case types.DELETE_MUSICS_SUCCESS:
            return{
                ...state,
                loading:false,
                musics: state.musics.filter((item)=> item.id !==action.payload),
            };

        case types.LOAD_MUSICS_ERROR:
        case types.CREATE_MUSICS_ERROR:
        case types.DELETE_MUSICS_ERROR:
        case types.UPDATE_MUSICS_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload,
            }

      
        default:
            return state;
    }
}


export default musicsReducer;