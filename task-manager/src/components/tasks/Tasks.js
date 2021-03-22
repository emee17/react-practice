import {useState} from 'react';
import Task from './Task';

const Tasks = (props) => {

    
    return (
        <>
            {props.tasks.map((task, index) => (
            <Task key={index} task={task} onDelete={props.onDelete} toggleReminder={props.toggleReminder} />
            ))}
        </>
    )
}

export default Tasks
// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors Appointment',
//         day: 'March 20th at 6.30 PM',
//         reminder: true
//     },
//     {
//         id: 2,
//         text: 'Watch Moview',
//         day: 'March 20th at 8.30 PM',
//         reminder: true
//     },
//     {
//         id: 3,
//         text: 'Take Meds',
//         day: 'March 20th at 11.30 PM',
//         reminder: false
//     }
// ]