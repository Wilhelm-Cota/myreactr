const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e,'Task Description')}
            className="form-control form-control-sm"
            placeholder="Title"
          />
        </div>
        <div className="col">
          <input
            value={updateData && updateData.dateCreated}
            onChange={(e) => changeTask(e, 'dateCreated')}
            className="form-control form-control-sm"
            placeholder="Date Created"
            type="date"
          />
        </div>
        <div className="col">
          <input
            value={updateData && updateData.deadline}
            onChange={(e) => changeTask(e, 'deadline')}
            className="form-control form-control-sm"
            placeholder="Deadline"
            type="date"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={updateTask}
            className="btn btn-sm btn-success mr-20"
          >
            Update
          </button>
          <button
            onClick={cancelUpdate}
            className="btn btn-sm btn-warning"
          >
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default UpdateForm;
