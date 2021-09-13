/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {Fragment, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {ItemDetail} from '../../components/ItemDetail/ItemDetail';
import {Loading} from '../../components/Loading/loading';
import {NotFound} from '../../components/NotFound/notFound';
import {dataBase} from '../../Firebase/firebase';
import '../ItemDetailContainer/itemDetailContainer.css';


export const ItemDetailContainer = () => {
  const {id} = useParams();
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const db = dataBase;
    const itemCollection = db.collection('productos');
    const product = itemCollection.doc(id);

    product
        .get()
        .then((doc) => {
          if (!doc.exists) {
            console.log('¡El producto no existe!');
            setNotFound(true);
            return;
          }
          setItem({...doc.data(), id: doc.id});
        })
        .catch((error) => {
          console.log('Error al buscar los productos', error);
        })
        .finally(() => {
          setLoading(false);
          setNotFound(false);
        });
  }, [id]);

  return (
    <Fragment>
      { notFound ? <NotFound/> :
      loading ? <section className="spinnerI"><Loading /></section> :
         <ItemDetail item={item} key={item.id} />}
    </Fragment>
  );
};
