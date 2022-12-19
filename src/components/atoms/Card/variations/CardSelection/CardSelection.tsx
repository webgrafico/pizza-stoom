import React from 'react';
import { Price } from '../../../Price/Price';

export const CardSelection = () => {
  const formatCurrency = (priceValue: number) => {
    const options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    return priceValue.toLocaleString('pt-br', options);
  };

  return (
    <div>
      <img src='' alt='' />
      <div>
        <h2>Pizza Napolitana</h2>
        <div>fsadfasd</div>
        <Price value={10} />
      </div>
    </div>
  );
};
