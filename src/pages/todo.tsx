import TodoContainer from "@/components/todo/TodoContainer";
import Containers from "@/components/ui/Container";

const Todo = () => {
  return (
    <Containers>
      <h1 className="text-center font-semibold text-3xl my-10">My todos</h1>
      <TodoContainer />
    </Containers>
  );
};
export default Todo;
