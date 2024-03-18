import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../features/tasks/tasksSlice';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);
    const status = useSelector((state) => state.tasks.status);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <div>
            {status === 'loading' && <div>Loading...</div>}
            {status === 'failed' && <div>Error: Failed to fetch tasks</div>}
            {status === 'succeeded' && (
                <div>
                    <h2>Task List</h2>
                    <ul>
                        {tasks.map((task) => (
                            <li key={task.id}>{task.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TaskList;