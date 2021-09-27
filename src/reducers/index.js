import { combineReducers } from 'redux';

const songsReducer = () => {
    console.log('songsReducer called');
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'Al Star', duration: '3:15' },
        { title: 'I want it That Way', duration: '1:45' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    console.log('selectedSongReducer called');
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
