import React from 'react';

/**
 * @param {object} props - Propiedades del componente.
 * @param {string} props.greeting - El mensaje de bienvenida.
 */
const ItemListContainer = ({ greeting }) => {
  return (
    <main className="item-list-container">
      {/* Mensaje de bienvenida */}
      <p>{greeting}</p>
    </main>
  );
};

export default ItemListContainer;
