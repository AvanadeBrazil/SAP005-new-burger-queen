import React from 'react';

const ButtonCommon = (props) => {
  const { text, onClick, disabled, className } = props;
  return (
    <button
      className={`button-common ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonCommon;
