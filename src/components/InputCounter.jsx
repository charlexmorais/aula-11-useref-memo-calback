import React, { useRef, useState } from 'react';
// Aplicando useRef
// ● Crie um componente chamado "InputCounter" que exibe um input de texto e um contador que mostra quantos caracteres foram digitados.
// ● Use useRef para criar uma referência para o input de texto.
// ● Use o evento onChange do input para atualizar a contagem de caracteres.
// ● Exiba a contagem de caracteres atualizada ao lado do input.
// ● Teste seu componente para garantir que a contagem seja atualizada corretamente ao digitar no input.


const InputCounter = () => {
  const inputRef = useRef(null); // referencia de input
  const [charCount, setCharCount] = useState(0); // controle de estado

  const handleInputChange = () => { // funcao q retorna o valor 
    const value = inputRef.current.value;
    setCharCount(value.length); // setcharcont mudanca de estado
  };

  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleInputChange} />
      <p>Caracteres digitados: {charCount}</p>
    </div>
  );
};

export default InputCounter;
