import React, { useState, useMemo } from 'react';
// Do utilizador
// Aplicando useMemo ● Crie um componente chamado "ProductList" que exibe uma lista de produtos. ● Crie uma matriz de strings de produto para representar sua lista de produtos. ● Use useState para manter o estado da lista de produtos. ● Use useMemo para otimizar o desempenho ao renderizar uma lista de produtos. (Dica: você pode adicionar no useMemo tanto valores primitivos como um componente inteiro) ● Exiba a lista de produtos na tela. ● Teste seu componente para garantir que ele renderize novamente a lista de produtos quando houver uma mudança real no estado da lista de produtos 

const ProductList = () => {
  const [products, setProducts] = useState([
    'Produto 1',
    'Produto 2',
    'Produto 3',
    'Produto 4',
  ]);

  const productList = useMemo(() => {
    // ● Use useMemo para otimizar o desempenho ao renderizar uma lista de produtos.
    return products.map((product, index) => (
      <li key={index}>{product}</li>
    ));
  }, [products]); // obs[]

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>{productList}</ul>
    </div>
  );
};

export default ProductList;
