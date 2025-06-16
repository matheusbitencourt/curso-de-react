import {
  CheckIcon,
  ChevronRightIcon,
  SquarePenIcon,
  Trash2Icon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  function onEditClick(task) {
    const query = new URLSearchParams();
    query.set("id", task.id);
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/editTask?${query.toString()}`);
  }

  return (
    <ul className="p-6 space-y-4 rounded-md shadow bg-slate-200">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full flex items-center gap-2 text-left text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onEditClick(task)}>
            <SquarePenIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <Trash2Icon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
