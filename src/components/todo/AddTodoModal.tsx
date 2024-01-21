import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch } from "@/redux/hooks";
import { addTodo } from "@/redux/features/todoSlice";
import { useAddTodosMutation } from "@/redux/api/api";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  // ! for local state management
  // const dispatch = useAppDispatch()

  // * for server
  const [addTodo, { data, isError, isLoading, isSuccess }] = useAddTodosMutation();

  console.log({ data, isError, isLoading, isSuccess });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const randomString = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      title: task,
      description: description,
      priority,
    };
    // ! for local state management
    // dispatch(addTodo(taskDetails));

    // * for server

    addTodo(taskDetails)
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-primary-gradient text-xl font-semibold mb-4">
            Add todo
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add task</DialogTitle>
            <DialogDescription>
              add your task that you want to be finish
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="task" className="text-right">
                  Task
                </Label>
                <Input
                  onBlur={(e) => setTask(e.target.value)}
                  id="task"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onBlur={(e) => setDescription(e.target.value)}
                  id="description"
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AddTodoModal;
