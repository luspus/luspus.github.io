const initialState = {
    topArtists: [],
    artistInfo: [],
    resultOfSearching: [],
    favorites: [],
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TOP_ARTISTS':
            return {
                ...state,
                topArtists: [...action.data]
            }

        case 'GET_INFO':
            return {
                ...state,
                artistInfo: [action.data.artist]
            }

        case 'GET_SIMILAR':
            const similar = action.data.artist;
            const artistName = action.data['@attr'].artist;
            return {
                ...state,
                favorites: [...state.favorites.map((fav, i) => {
                    if(fav.name === artistName) {
                        fav.similarArtists = similar;
                    }
                    return fav;
                })]
            }

        case 'SEARCH_ARTIST':
            return {
                ...state,
                resultOfSearching: (action.res.results && action.res.results.artistmatches.artist) || []
            }


        case 'ADD_TO_FAVORITES':
            const artist = action.artist;
            return {
                ...state,
                favorites: [...state.favorites, ...state.topArtists.filter(i => artist === i.name)]
            }

        case 'DELETE_FROM_FAVORITES':
            const name = action.name;
            return {
                ...state,
                favorites: [...state.favorites.filter(i => name !== i.name)]
            }


        default:
            return state;
    }
}
