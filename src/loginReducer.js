export default function(state=null,action){
  switch(action.type){
    case 'LOGIN':
      return action.data;
    default:
      break;
  }
  return state;
}
