import { createSlice } from "@reduxjs/toolkit";

export type taskStatus = "pending" | "fulfilled" | "rejected";

export interface Task {
    id: string;
    title: string;
    description: string;
    assignedTo: string;
    status: taskStatus;
}

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: []
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: { payload: Task }) => {
            state.tasks.push(action.payload);
        },
        updateTaskStatus: (
            state,
            action: { payload: { id: string; status: taskStatus } }
        ) => {
            const task = state.tasks.find(t => t.id === action.payload.id);
            if (task) {
                task.status = action.payload.status;
            }
        }
    }
});

export const { addTask, updateTaskStatus } = taskSlice.actions;
export default taskSlice.reducer;
