import { 
    FETCH_INITIAL_PRICES_SUCCESS ,
    FETCH_INITIAL_PRICES_FAILURE,
    FETCH_INITIAL_PRICES_REQUESTED,
} from '../actions/action-types'



const mockedData = [
    {"pair":"USD CHF", "buy":0.99143, "sell":0.99043},
    {"pair":"GBP USD", "buy":1.28495, "sell":1.2836},
    {"pair":"GBP CHF", "buy":1.27378, "sell":1.27147},
    {"pair":"EUR SEK", "buy":9.632, "sell":9.6055},
    {"pair":"USD JPY", "buy":110.467, "sell":110.417},
    {"pair":"EUR JPY", "buy":120.589, "sell":120.491},
]
const initialState = {
    prices: [],
    isPricesLoading: false,
    priecesLoadFailure: "",
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_INITIAL_PRICES_SUCCESS:
        return {
          ...state,
          prices: [...state.prices, ...mockedData],
          isPricesLoading: false,
          priecesLoadFailure: "",
        }
  
      case FETCH_INITIAL_PRICES_FAILURE:
        return {
            ...state,
            prices: [],
            isPricesLoading: false,
            priecesLoadFailure: "Unable to laoad prices",
        }
  
      case FETCH_INITIAL_PRICES_REQUESTED:
        return {
          ...state,
          prices: [],
          isPricesLoading: true,
          priecesLoadFailure: "",
        }
  
      default:
        return state
    }
  }