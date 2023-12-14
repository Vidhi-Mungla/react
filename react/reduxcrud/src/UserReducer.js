import { createSlice } from "@reduxjs/toolkit";
import { userDetail } from "./Data";

const userSlice = createSlice({
    name:"Vidhipatel",
    initialState:userDetail ,
    reducers:{
        addusers:(state,action)=>{

              state.push(action.payload)

        },

        editUsers:(state,action)=>{

              const {id,name,email} = action.payload;
           
              const userId =  state.find(user=>       
                user.id == id
            )
        
            if(userId)
             {
                userId.name=name
                userId.email=email 
             }
        },

        deleteUsers:(state,action)=>{

            const {id} = action.payload;

            const userId =  state.find(user=>       
                user.id == id
            ) 

            if(userId) 
             {
                return state.filter(user=>user.id !==id)
             }

        }    
    }
})


export const {addusers,editUsers,deleteUsers} = userSlice.actions;
export default userSlice.reducer;