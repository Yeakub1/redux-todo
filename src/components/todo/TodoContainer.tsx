import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState('');


  const { data: todos, isLoding, isError } = useGetTodosQuery(priority);
  if (isLoding) {
    <p>loding...</p>
  }
  return (
    <div>
      <div className="flex justify-between">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority}/>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-1 ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.date?.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>
        {/* <div className="bg-white p-3 flex justify-center items-center rounded-md text-2xl font-bold ">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};
export default TodoContainer;
