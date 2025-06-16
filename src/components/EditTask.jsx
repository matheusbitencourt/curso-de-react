import { useState } from "react";
import Input from "./Input";

function EditTask({ id, title, description, handleUpdateTask }) {
  const [titleEdit, setTitleEdit] = useState(title);
  const [descriptionEdit, setDescriptionEdit] = useState(description);
  return (
    <div className="flex flex-col p-6 space-y-4 rounded-md shadow bg-slate-200">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={titleEdit}
        onChange={(event) => setTitleEdit(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={descriptionEdit}
        onChange={(event) => setDescriptionEdit(event.target.value)}
      />
      <button
        onClick={() => {
          if (!titleEdit.trim() || !descriptionEdit.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          }
          handleUpdateTask(id, titleEdit, descriptionEdit);
          setTitleEdit("");
          setDescriptionEdit("");
        }}
        className="px-4 py-2 font-medium text-white rounded-md bg-slate-500"
      >
        Alterar
      </button>
    </div>
  );
}

export default EditTask;
