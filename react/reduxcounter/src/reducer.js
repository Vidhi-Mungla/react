const initialval = 0;
export const reducerFun = (state=initialval, action) =>
{
  switch(action.type)
  {
    case "inc":
        return state+1;

    case "dec":
        return state-1;
    
    default :
    return state;
    

  }
}
