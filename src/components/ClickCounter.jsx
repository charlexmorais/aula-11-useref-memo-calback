import React, { useState, useCallback } from 'react';
// Aplicando useCallback
// ● Crie um componente chamado "ClickCounter" que exibe um botão e um contador. 
// ● Use useState para manter o estado do contador. 
// ● Use useCallback para criar uma função que atualiza o estado do contador ao clicar no botão. 
// ● Exiba o valor atual do contador ao lado do botão.
// ● Teste seu componente para garantir que o contador seja atualizado corretamente ao clicar no botão.  


const ClickCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = useCallback(() => {
    setCounter(prevCounter => prevCounter + 1);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Clique aqui</button>
      <span>Contador: {counter}</span>
    </div>
  );
};

export default ClickCounter;
