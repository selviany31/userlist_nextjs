import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataUsers = createAsyncThunk(
    "user/getUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const getDetailUser = createAsyncThunk(
    "user/getDetail",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)