import { createSlice } from "@reduxjs/toolkit";
import users from "../../Component/Users";

const loginSlice=createSlice({
    name: 'login',
    initialState: [],
    reducers: {
        login(state,action){
            const [uname, pass]=action.payload
            for(const user of users){
                if(uname==user.username && pass==user.password)
                {state.push(action.payload);
                }
            }},
        // logout(state,action){},
        // signup(state,action){}
    }
})


export default loginSlice;
export const {login}=loginSlice.actions;