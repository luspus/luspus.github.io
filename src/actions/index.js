const key = '4404d2f5ff44af76585b0d45e25f087d';
const href = 'https://ws.audioscrobbler.com';

const getTopArtists = () => dispatch => {
    const asyncGetTopArtists = () => {
        const country = 'ukraine';
        const limit = '100';
        return dispatch => {
            fetch(`${href}/2.0/?method=geo.gettopartists&country=${country}&limit=${limit}&api_key=${key}&format=json`)
            .then(response => response.json())
            .then(res => {
                const data = res.topartists.artist;
                dispatch({ type: 'GET_TOP_ARTISTS', data })
            })
            .catch(errors => {
                console.log(errors)
            })
        }
    };
    dispatch(asyncGetTopArtists())
};

const getInfo = (artist) => dispatch => {
    const asyncGetMoreInfo = () => {
        const name = artist;
        return dispatch => {
            fetch(`${href}/2.0/?method=artist.getinfo&artist=${name}&api_key=${key}&format=json`)
            .then(response => response.json())
            .then(req => {
                const data = req;
                dispatch({ type: 'GET_INFO', data })
            })
            .catch(errors => {
                console.log(errors)
            })
        }
    };
    dispatch(asyncGetMoreInfo())
};

const searchArtist = (val) => dispatch => {
    const asyncSearchArtist = () => {
        const name = val;
        return dispatch => {
        fetch(`${href}/2.0/?method=artist.search&artist=${name}&api_key=${key}&format=json`)
        .then(response => response.json())
        .then(res => {
            dispatch({ type: 'SEARCH_ARTIST', res, val })
        })
        .catch(errors => {
            console.log(errors)
        })
    }
  };
  dispatch(asyncSearchArtist())
};

const clearArtist = () => dispatch => {
    dispatch({ type: 'SEARCH_ARTIST', res: {results: {artistmatches: {artist: []}}}, val: '' });
};

const getSimilar = (artist) => dispatch => {
    const asyncGetSimilar = () => {
    const name = artist;
    const limit = 5;
    return dispatch => {
        fetch(`${href}/2.0/?method=artist.getsimilar&artist=${name}&limit=${limit}&api_key=${key}&format=json`)
            .then(response => response.json())
            .then(res => {
                const data = res.similarartists;
                dispatch({ type: 'GET_SIMILAR', data })
            
            })
            .catch(errors => {
                console.log(errors)
            })
        }
    };
    dispatch(asyncGetSimilar())
};

const addToFavorites = artist => ({
    type: 'ADD_TO_FAVORITES',
    artist
});

const deleteFromFavorites = name => ({
    type: 'DELETE_FROM_FAVORITES',
    name
});

export default {
    getTopArtists,
    getInfo,
    getSimilar,
    searchArtist,
    addToFavorites,
    clearArtist,
    deleteFromFavorites
};
