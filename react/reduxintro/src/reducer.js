export const reducerFun = (state=0,action)=>{

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




// const initialVal = { num: 0 };

// export const reducerFun = (state = initialVal, action) => {
//   switch (action.type) {
//     case "inc":
//       return { ...state, num: state.num + 1 };

//     case "dec":
//       return { ...state, num: state.num - 1 };

//     default:
//       return state;
//   }
// };

