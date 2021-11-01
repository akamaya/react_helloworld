import React from 'react'
import TaskItemView from '../taskItem/taskItemView'
import { useSelector } from 'react-redux'
import { RootState } from '../../rootReducer'

const TaskListView: React.FC = () => {
    const { tasks } = useSelector((state: RootState) => state.tasks)

    return (
        <div className="inner">
            {
                tasks.length <= 0 ? '登録されたTODOはありません。' :
                    <ul className="task-list">
                        {tasks.map(task => (
                            <TaskItemView key={task.id} task={task} />
                        ))}
                    </ul>
            }
        </div>
    )
}

export default TaskListView