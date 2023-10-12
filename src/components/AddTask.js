const AddTaskForm = ({ newTask, setNewTask, addTask, title, setTitle, dateCreated, setDateCreated, deadline, setDeadline }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control form-control-sm"
            placeholder="Title"
          />
        </div>
        <div className="col">
          <input
            value={dateCreated}
            onChange={(e) => setDateCreated(e.target.value)}
            className="form-control form-control-sm"
            placeholder="Date Created"
            type="date"
          />
        </div>
        <div className="col">
          <input
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="form-control form-control-sm"
            placeholder="Deadline"
            type="date"
          />
        </div>
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-sm"
            placeholder="Task Description"
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn-sm btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default AddTaskForm;
