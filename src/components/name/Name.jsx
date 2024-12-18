import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delName } from '../../app/redux/slice/namesSlice';

const Name = () => {
  const names = useSelector((state) => state.names.list); 
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Список имен</h2>
      <ul>
        {names.map((name, index) => (
          <li  className='namelist'  key={index}>
            {name}{' '}
            <button  className="del btn" onClick={() => dispatch(delName(index))}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Name