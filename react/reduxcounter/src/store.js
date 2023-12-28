import { configureStore } from "@reduxjs/toolkit";
import { reducerFun } from "./reducer";

export const store = configureStore
(
    {
        reducer : {counter : reducerFun }
    }
)

