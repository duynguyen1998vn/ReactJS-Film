
const initial = {
    film:[],
    anything:{},
}



const filmReducer = (state = initial,action) =>{

    
    switch (action.type) {
        case 'POST_FROM_API_TO_STORE':
         
            initial.film = action.state.data;
            return initial;
            
        case 'SEARCH' :
                if(action.state === '') return initial;
                
                const search = [...state.film];
                return {
                    ...state,
                    film:search.filter(film => film.name.toLowerCase().includes(action.state)),
                }
              
        case 'CATEGORY' :

            const oldListFilm = [...state.film];

            return {
                ...state,
                film:oldListFilm.filter(film => film.category === action.state),
            };
        
        case 'RESET_LIST_FILM' :
            return initial;
           
        default :
        return state;
    }
}

export default filmReducer ;