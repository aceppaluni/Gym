//import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const fetchUpperBody = createAsyncThunk(
    'upperBody/fetchUpperBody',
    async () => {
        const response = await fetch(baseUrl + 'upperBody');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
)

// export const fetchUpperBody = createAsyncThunk(
//     'upperBody/fetchUpperBody',
//     async () => {
//         try {
//             const r = await axios.get(baseUrl + 'UpperBody')
//             return r.data
//         } catch (err) {
//             return Promise.reject(err)
//         }
//     }
// )

export const upperBodySlice = createSlice({
    name: 'UpperBody',
    initialState: {isLoading: true, errMess: null, upperBodyArray: []},
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUpperBody.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchUpperBody.fulfilled, (state, action) => {
            state.isLoading = false;
            state.errMess = '';
            state.upperBodyArray = action.payload
        })
        .addCase(fetchUpperBody.rejected, (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch Failed';
        })
    }
})

export const uppderBodyReducer = upperBodySlice.reducer;

