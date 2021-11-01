import React from 'react'
import TaskListView from './taskList/taskListView'
import TaskInputView from './taskInput/taskInputView'


const App: React.FC = () => {
    return (
        <div>
            <TaskInputView />
            <TaskListView />
        </div>
    )
}

export default App