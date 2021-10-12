//MADE WITH REDUX

import { createStore} from 'redux'

const initialState = {counter:0, showCounter:true}

const counterReduer = (state=initialState, action)=>{

    if(action.type==="inc"){
        return {
            counter:state.counter+ action.amount,
            showCounter:state.showCounter
        }
    }

    if(action.type==="dec"){
        return {
            counter:state.counter-1,
            showCounter:state.showCounter
        }

        
    }

    if(action.type ==="toggle"){
        return{
            showCounter:!state.showCounter,
            counter:state.counter
        }
    }

    return state;
}

const store = createStore(counterReduer);

export default store; 

