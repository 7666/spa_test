
export const goods = (state, action) => {
  switch (action.type){
    case 'GET_GOODS':
      return {
        ...state,
        data: action.payload
      };
    default:
      return {
        data:[]
      }
  }
}
