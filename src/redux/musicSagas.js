import * as types from "./actionType";
import {
    take,
     call,
     put, 
     takeEvery, 
     takeLatest,
     all,
     delay,
     fork,
    } from 'redux-saga/effects';
import { createMusicApi, deleteMusicApi, loadMusicApi, updateMusicApi } from "./api";
import { createMusicsError, createMusicsSuccess, deleteMusicsError, deleteMusicsSuccess, loadMusicsError, loadMusicsSuccess, updateMusicsError, updateMusicsSuccess } from "./action";


function* onLoadMusicsStartAsync(){
    try {
        const response = yield call(loadMusicApi);
        if(response.status===200){
            yield delay(500);
            yield put(loadMusicsSuccess(response.data))
        }
        
    } catch (error) {
        yield put(loadMusicsError(error.response.data))
        
    }

}

function* onCreateMusicsStartAsync({payload}){
    try {
        const response = yield call(createMusicApi, payload);
        if(response.status===200){
            yield put(createMusicsSuccess(response.data))
        }
        
    } catch (error) {
        yield put(createMusicsError(error.response.data))
        
    }

}


function* onDeleteMusicsStartAsync(musicId){
    try {
        const response = yield call(deleteMusicApi, musicId);
        if(response.status===200){
            yield delay(500)
            yield put(deleteMusicsSuccess(musicId))
        }
        
    } catch (error) {
        yield put(deleteMusicsError(error.response.data))
        
    }

}

function* onUpdateMusicsStartAsync({payload: {id, formValue}}){
    try {
        const response= yield call(updateMusicApi, id, formValue);
        if(response.status ===200){
            yield put(updateMusicsSuccess());
        }
        
    } catch (error) {
        yield put(updateMusicsError(error.response.data));
        
    }
   

}








function* onLoadMusics(){
    yield takeEvery(types.LOAD_MUSICS_START, onLoadMusicsStartAsync)
}

function* onCreateMusic(){
    yield takeLatest(types.CREATE_MUSICS_START, onCreateMusicsStartAsync)
}

function* onDeleteMusic(){
    while(true){
        const {payload: musicId}= yield take(types.DELETE_MUSICS_START);
        yield call(onDeleteMusicsStartAsync, musicId)
    }
   
}


function* onUpdateMusic(){

        yield takeLatest(types.UPDATE_MUSICS_START, onUpdateMusicsStartAsync);
        
    }
   





const musicsSagas=[
    fork(onLoadMusics),fork(onCreateMusic),fork(onDeleteMusic), fork(onUpdateMusic)
];






export default function* rootSaga(){
    yield all([...musicsSagas]);
}