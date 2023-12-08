import {configureStore} from '@reduxjs/toolkit';
import { uppderBodyReducer } from '../features/workouts/workoutsSlice';

export const store = configureStore({
    reducer: {
        upperBody: uppderBodyReducer
    }
})