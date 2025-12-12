import {useCallback, useState} from 'react';

interface Itarefa{
  id: number;
  title: string;
  isCompleted: boolean;
}

export const Dashboard = () => {
  const [lista, setLista] = useState<Itarefa[]>([]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === "Enter") {
      if (e.currentTarget.value.trim().length === 0) return;

      const value = e.currentTarget.value;

      setLista((prevLista) => {
        if (prevLista.some((item) => item.title === value.trim()))return prevLista;
        return [...prevLista, 
          {id: prevLista.length + 1, title: value, isCompleted: false}
        ];
      });
      e.currentTarget.value = "";
    }
  }, []);

  return (
    <div>
      <p>lista</p>
      <input type="text" onKeyDown={handleKeyDown} />

      <p>{lista.filter((item) => item.isCompleted).length}</p>

      <ul>
        {lista.map((item) => (
          <li key={item.id}>
            <input type="checkbox" onChange={()=> {
              setLista(prevLista => {
                return prevLista.map(item => {
                  const newIsCompleted = item.title === lista[item.id].title ? !item.isCompleted : item.isCompleted;
                  return {
                    ...item,
                    isCompleted: newIsCompleted
                  }
                })
            })
            }} />
            {item.title}
            </li>
        ))}
      </ul>

    </div>
  );
};
