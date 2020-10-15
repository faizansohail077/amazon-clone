export const getBasketTotal=(basket)=>
  basket?.reduce((amount,item)=>item.price+amount,0)




const reducer = (state, action) => {
  // 
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
//sir in state provide value spelling mistake 
      case "SET_USER":
        return{
          ...state,
          user:action.user
        }
    
    
      case 'REMOVE_FROM_BASKET':
      return {...state}
     

    default:
      return state
  }
}

export default reducer;

