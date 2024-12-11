import {useState} from "react";

export const useSimCard = () => {
    const [tasksOpen, setTasksOpen] = useState(false);

    const toggleTasks = () => {
        setTasksOpen(wereOpen => !wereOpen);
    }

    return {
        tasksOpen,
        toggleTasks
    }
}