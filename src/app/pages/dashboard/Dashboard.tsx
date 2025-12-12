import { useCallback, useEffect, useState } from "react";
import {
  Itarefa,
  TarefasService,
} from "../../shared/services/api/tarefas/TarefasService";
import { ApiException } from "../../shared/services/api/ApiExeception";

export const Dashboard = () => {
  const [lista, setLista] = useState<Itarefa[]>([]);

  useEffect(() => {
    TarefasService.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setLista(result);
      }
    });
  }, []);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (e.key === "Enter") {
          if (e.currentTarget.value.trim().length === 0) return;

          const value = e.currentTarget.value;

          e.currentTarget.value = "";

          if (lista.some((item) => item.title === value.trim())) return;

          TarefasService.create({ title: value, isCompleted: false }).then(
            (result) => {
              if (result instanceof ApiException) {
                alert(result.message);
              } else {
                setLista((prevLista) => [...prevLista, result]);
              }
            }
          );
        }
      },
      [lista]
    );

  const handleToggleCompleted = useCallback(
    (id: number) => {
      const tarefasToUpdate = lista.find((item) => item.id === id);
      if (!tarefasToUpdate) return;

      TarefasService.updateById(id, {
        ...tarefasToUpdate,
        isCompleted: !tarefasToUpdate.isCompleted,
      }).then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setLista((prevLista) => {
            return prevLista.map((item) => {
              if (item.id === id) return result;
              return item;
            });
          });
        }
      });
    },
    [lista]
  );

  const handleDelete = useCallback((id: number) => {
    const tarefasToUpdate = lista.find((item) => item.id === id);
    if (!tarefasToUpdate) return;

    TarefasService.deleteById(id).then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setLista((prevLista) => {
          return prevLista.filter((item) => item.id !== id);
        });
      }
    });
  }, [lista]);

  return (
    <div>
      <p>lista</p>
      <input type="text" onKeyDown={handleKeyDown} />

      <p>{lista.filter((item) => item.isCompleted).length}</p>

      <ul>
        {lista.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => handleToggleCompleted(item.id)}
            />
            {item.title}
            <button onClick={() => handleDelete(item.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
