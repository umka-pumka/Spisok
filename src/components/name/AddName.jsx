import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addName } from '../../app/redux/slice/namesSlice';
import "./Name.css"
const AddNameForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addName(name)); 
      setName(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
      />
      <button className='add btn' type="submit">Добавить</button>
    </form>
  );
};

export default AddNameForm;
