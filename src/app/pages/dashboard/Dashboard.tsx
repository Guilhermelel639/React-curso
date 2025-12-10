import {use, useCallback, useState} from 'react';

export const Dashboard = () => {
  const [lista, setLista] = useState<string[]>(["teste1", "teste2", "teste3"]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === "Enter") {
      if (e.currentTarget.value.trim().length === 0) return;

      const value = e.currentTarget.value;

      setLista((prevLista) => {
        if (prevLista.includes(value))return prevLista;
        return [...prevLista, value];
      });
      e.currentTarget.value = "";
    }
  }, []);

  return (
    <div>
      <p>lista</p>
      <input type="text" onKeyDown={handleKeyDown} />

      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
};
