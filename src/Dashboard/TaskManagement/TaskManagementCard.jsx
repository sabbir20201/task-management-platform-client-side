import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const TaskManagementCard = ({ item }) => {
    // eslint-disable-next-line react/prop-types
    const { title, _id } = item;
    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            // eslint-disable-next-line no-empty
            if (result.isConfirmed) {
           
            }
          });
          fetch(`http://localhost:5000/delete/${_id}`, {
            method: 'DELETE',

          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your TODO has been deleted.",
                    icon: "success"
                  });
                  
            }
          })
    }
    return (
        <div>
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>We are using cookies for no reason.</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=> handleDelete(_id)} className="btn btn-primary">Delete</button>
                        <button className="btn btn-ghost">Deny</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskManagementCard;