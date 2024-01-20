import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Button className="bg-primary-gradient text-xl font-semibold mb-4">Add todo</Button>
        <Button>Fileter</Button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-1 ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
        {/* <div className="bg-white p-3 flex justify-center items-center rounded-md text-2xl font-bold ">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};
export default TodoContainer;
