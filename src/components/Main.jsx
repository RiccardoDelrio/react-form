import { useState } from "react"
export default function Main() {

    const [tasklist, setTasklist] = useState([])
    const [task, setTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (task === "") {
            alert("Task cannot be empty")
        } else {
            setTasklist([...tasklist, task])
        }
    }
    return (
        <>
            <main>
                <div className="container ">
                    <div className="row ">
                        <div className="col-6 mt-5">
                            <form onSubmit={handleSubmit}>
                                <div className="container d-flex gap-1">

                                    <input type="text"
                                        name="newTask"
                                        id="newTask"
                                        className=" input-group-text"
                                        placeholder="Inserisci la nuova task"
                                        value={task}
                                        onChange={(e) => setTask(e.target.value)} />
                                    <button
                                        type="submit"
                                        className="btn btn-primary "

                                    >Add Task</button>
                                </div>

                            </form>
                        </div>
                        <div className="col-6 mt-5">
                            <div className="card p-4">

                                {
                                    tasklist.map((item, index) => (

                                        <div key={index} className="item d-flex justify-content-between  ">
                                            <div className="text_container">{item}</div>
                                            <div className="btncontainer mb-3 ">
                                                <div className="btn btn-primary me-2 ">Delete</div>
                                                <div className="btn btn-primary ">Edit</div>
                                            </div>
                                        </div>

                                    ))



                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>


    )
}