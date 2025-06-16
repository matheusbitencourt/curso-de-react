import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import EditTask from "../components/EditTask";

function EditTaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  function onBackClick() {
    navigate(-1);
  }

  function handleUpdateTask(id, title, description) {
    localStorage.setItem(
      "tasks",
      JSON.stringify(
        JSON.parse(localStorage.getItem("tasks")).map((task) =>
          task.id === id ? { ...task, title, description } : task
        )
      )
    );
    onBackClick();
  }

  return (
    <div className="flex justify-center w-screen h-screen p-6 bg-slate-500">
      <div className="w-[500px] space-y-4">
        <div className="relative flex justify-center mb-6">
          <button
            onClick={onBackClick}
            className="absolute top-0 bottom-0 left-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Edição da Tarefa</Title>
        </div>
        <EditTask
          id={id}
          title={title}
          description={description}
          handleUpdateTask={handleUpdateTask}
        />
      </div>
    </div>
  );
}

export default EditTaskPage;
