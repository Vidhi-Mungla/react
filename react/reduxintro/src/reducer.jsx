export const reducerFun = (state=15,action)=>{

    switch(action.type)
    {

        case "inc":
            return state+1;

        case "dec":
            return state-1;

        default: 
            return state;

    }

}