import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
 
  const userSlice = createSlice({
           name:"user",
           initialState:userList,
           reducers:{
                      addUser:(state,action)=>
                      {
                        state.push(action.payload);
                      },


                      editUser:(state,action)=>
                      {
                        const {id,name,email} = action.payload;
                        
                        const UserId = state.find(user => user.id == id);

                        if(UserId)
                        {
                          UserId.name = name;
                          UserId.email = email;
                        }
                      },


                      DeleteUser:(state,action)=>
                      {
                        const {id} = action.payload;
                      
                        const UserId = state.find(user => user.id == id);

                        if(UserId)
                        {
                          return state.filter(user => user.id !== id);
                        }
                      }
                    

                    }
          })

    export const {addUser,editUser,DeleteUser} = userSlice.actions;
    export default userSlice.reducer;