import * as types from "./actionType"

export const loadMusicsStart=()=>({
    type:types.LOAD_MUSICS_START,
});
export const loadMusicsSuccess=(musics)=>({
    type:types.LOAD_MUSICS_SUCCESS,
    payload: musics,
});
export const loadMusicsError=(error)=>({
    type:types.LOAD_MUSICS_ERROR,
    payload:error,
});




export const createMusicsStart=(musics)=>({
    type:types.CREATE_MUSICS_START,
    payload: musics
});
export const createMusicsSuccess=()=>({
    type:types.CREATE_MUSICS_SUCCESS,
 
});
export const createMusicsError=(error)=>({
    type:types.CREATE_MUSICS_ERROR,
    payload:error,
});





export const deleteMusicstart=(musicId)=>({
    type:types.DELETE_MUSICS_START,
    payload: musicId,
});
export const deleteMusicsSuccess=(musicId)=>({
    type:types.DELETE_MUSICS_SUCCESS,
    payload: musicId,
 
});
export const deleteMusicsError=(error)=>({
    type:types.DELETE_MUSICS_ERROR,
    payload:error,
});






export const updateMusicsStart=(musicInfo)=>({
    type:types.UPDATE_MUSICS_START,
    payload: musicInfo,
});
export const updateMusicsSuccess=()=>({
    type:types.UPDATE_MUSICS_SUCCESS,
   
 
});
export const updateMusicsError=(error)=>({
    type:types.UPDATE_MUSICS_ERROR,
    payload:error,
});