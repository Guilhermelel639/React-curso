import {useCallback, useState} from 'react';

interface IlistItem{
  title: string;
  isSelected: boolean;
}

export const Dashboard = () => {
  const [lista, setLista] = useState<IlistItem[]>([]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === "Enter") {
      if (e.currentTarget.value.trim().length === 0) return;

      const value = e.currentTarget.value;

      setLista((prevLista) => {
        if (prevLista.some((item) => item.title === value.trim()))return prevLista;
        return [...prevLista, 
          {title: value, isSelected: false}
        ];
      });
      e.currentTarget.value = "";
    }
  }, []);

  return (
    <div>
      <p>lista</p>
      <input type="text" onKeyDown={handleKeyDown} />

      <p>{lista.filter((item) => item.isSelected).length}</p>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            <input type="checkbox" onChange={()=> {
              setLista(prevLista => {
                return prevLista.map(item => {
                  const newIsSelected = item.title === lista[index].title ? !item.isSelected : item.isSelected;
                  return {
                    ...item,
                    isSelected: newIsSelected
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
