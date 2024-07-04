import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputchange = ({ target }) => {
    //console.log(target.value)
    setInputValue(target.value);
  };

  const onSubmit = ( event ) => {
    event.preventDefault();
    onNewCategory( inputValue.trim());
    //setCategories((categories) => [inputValue, ...categories]);
    setInputValue('');
  };

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputchange}
      />
    </form>
  );
};
