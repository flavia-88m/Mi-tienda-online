import {Fragment} from 'react';
import '../Loading/loading.css';

/* eslint-disable react/react-in-jsx-scope */
export const Loading = () => {
  return (
    <Fragment>
      <div className="spinner-loading">
        <p>¡WAIT!Se están cargando los productos...</p>
      </div>
      <div className="spinner"></div>
    </Fragment>
  );
};
