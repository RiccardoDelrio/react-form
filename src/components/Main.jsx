import { useState, useEffect } from "react"
export default function Main() {

    const [tasklist, setTasklist] = useState(["task1", "task2", "task3"])
    const [task, setTask] = useState("")
    const [editMode, setEditMode] = useState(null)
    const [editTask, setEditTask] = useState("")
    useEffect(() => { console.log("Task list è stato trigherato") }, [tasklist])
    useEffect(() => { console.log("Task  è stato trigherato") }, [task])
    useEffect(() => { console.log("editMode  è stato trigherato") }, [editMode])
    useEffect(() => { console.log("editTask  è stato trigherato") }, [editTask])





    //Funzione del form
    const handleSubmit = (e) => {
        e.preventDefault()
        if (task === "") {
            alert("Task cannot be empty")
        } else {
            setTasklist([...tasklist, task])
        }
        setTask("")
    }
    //funzione per cancellare
    const del = (index) => {
        const newTasklist = [...tasklist]
        newTasklist.splice(index, 1)
        setTasklist(newTasklist)
    }
    //aggiunta di markup al click della modifica
    const markupInput = (index) => {
        return (
            <input type="text"
                name="newTask"
                id="newTask"
                className=" input-group-text"
                placeholder="Modifica la task"
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}

            />
        )
    }
    //cambiare lo status di edit
    const changeEditMode = (index) => {
        setEditMode(index)
        setEditTask(tasklist[index])

    }
    //salvataggio dati nuovi
    const handleSave = (index) => {
        const edited = [...tasklist]
        //edited.splice(index, 1, editTask)
        edited[index] = editTask
        setTasklist(edited)
        setEditMode(null)
        setEditTask("")

    }
    //funzione per restituire l'array principale ordinato in modo alfabetico
    const orderby = () => {
        const ordinato = tasklist
        ordinato.sort()
        console.log(ordinato)
        setTasklist([...ordinato])
        console.log(tasklist)
    }

    return (
        <>
            <main>
                <div className="container ">
                    <div className="row  ">
                        <div className=" mt-5">
                            <form onSubmit={handleSubmit}>
                                <div className="container d-flex gap-1 justify-content-center">
                                    <input type="text"
                                        name="newTask"
                                        id="newTask"
                                        className=" input-group-text"
                                        placeholder="Inserisci la nuova task"
                                        value={task}
                                        onChange={(e) => setTask(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-primary ">Add Task</button>
                                </div>

                            </form>
                        </div>
                        <div className="mt-5">
                            <button
                                className="btn btn-primary mb-4" onClick={orderby} >Ordina</button>
                            <div className="card p-4">

                                {
                                    tasklist.map((item, index, key) => (

                                        <div key={index} className="item d-flex justify-content-between  ">
                                            <div className="text_container">{editMode === index ? markupInput(index) : item}</div>
                                            <div className="btncontainer mb-3 ">
                                                {editMode === index ?
                                                    (<button className="btn btn-primary me-2 " onClick={(e) => { handleSave(index) }}>save</button>)

                                                    :
                                                    <button className="btn btn-primary me-2 " onClick={() => { changeEditMode(index) }}>Edit</button>
                                                }
                                                <button className="btn btn-primary"
                                                    onClick={() => { del(index) }}> Delete</button>
                                            </div>

                                        </div >



                                    ))

                                }
                            </div>

                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}