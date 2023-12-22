import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import TaskManagementCard from "./TaskManagementCard";



// react dnd package
const TaskManagement = () => {
    const { user } = useContext(AuthContext)
    const [task, setTask] = useState();
    const url = `http://localhost:5000/singleuserdata?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [url])
    // https://www.youtube.com/watch?v=1cGYeNFsiP0


    return (
        <div>
          
              <div className="grid grid-cols-3 w-full">
                <div>Todo</div>
                <div>Ongoing</div>
                <div>Completed</div>
          
            </div>
            <div>
                {
                    task?.map(item => <TaskManagementCard key={item._id} item={item}></TaskManagementCard>)
                }
            </div>
        </div>
    );
};

export default TaskManagement;