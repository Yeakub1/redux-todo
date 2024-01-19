const TodoCard = () => {
    return (
        <div className="bg-white rounded-xl flex justify-between items-center p-3 shadow-xl">
          <input type="checkbox" name="chackbox" id="chackbox" />
          <p className="font-semibold">Todo Title</p>
          <p>Time</p>
          <p>Description</p>
          <div className="space-x-5">
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </div>
    );
};
export default TodoCard;