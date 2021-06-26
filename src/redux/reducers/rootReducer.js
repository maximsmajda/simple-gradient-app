const initialState = {
    color: [
      {
        r: 255,
        g: 34,
        b: 198,
        a: 1
      },
      {
        r: 89,
        g: 15,
        b: 216,
        a: 1
      }
    ],
    gradientType: 'linear',
    angle: '307',
    startingPoint: '0',
    endingPoint: '81'
  }

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "COLOR_CHANGE":
            var color = state.color
            color[action.payload.id] = action.payload.color
            return{
                color,
                ...state     
            }
        case "GRADIENT_TYPE":
            console.log(action.payload)
           
            return {
                ...state,
                gradientType: action.payload,
            }

        case "SET_ANGLE":
            return{
                ...state,
                angle: action.payload
            }

        case "SET_STARTING_POINT":
            return{
                ...state,
                startingPoint: action.payload
            }

        case "SET_ENDING_POINT":
            return{
                ...state,
                endingPoint: action.payload
            }
    
        default:
            return state;
    }
}

export default rootReducer;