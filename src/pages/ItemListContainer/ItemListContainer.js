/* eslint-disable react/no-unknown-property */
/* eslint-disable spaced-comment */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import './ItemListContainer.css';
import {useState, useEffect} from 'react';
import {ItemList} from '../../components/ItemList/ItemList';
import {useParams} from 'react-router-dom';
import {Loading} from '../../components/Loading/loading';
import {dataBase} from '../../Firebase/firebase';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const ItemListContainer = (props) => {
  const {categoryId} = useParams();
  const [loading, setLoading] = useState(true);
  const [catalogoProductos, setCatalogoProductos] = useState([]);

  useEffect(() => {
           const db = dataBase;
           const itemCollection = db.collection('productos');
           let listaDeItems;
           categoryId ?
		   (listaDeItems = itemCollection.where('category', '==', categoryId)) :
		   (listaDeItems = itemCollection);
	       listaDeItems
		              .get()
		              .then((querySnapshot) => {
		                    setCatalogoProductos(
		                            querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})),
		      );
		    })
		    .catch((error) => {
		      console.log('Hubo un error al cargar los productos', error);
		    })
		    .finally(() => {
		      setLoading(false);
		    });
  }, [categoryId]);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    // eslint-disable-next-line react/jsx-no-comment-textnodes
	// eslint-disable-next-line react/react-in-jsx-scope
    <>
		  <main>
			  <h1 className='title'>{props.greeting}</h1>
			  <h3>{props.greeting2}</h3>
		  </main>
		  <section className="item-list-container">
			  {loading ? (
				  <Loading />
			  ) : (
				  <ItemList catalogoProductos={catalogoProductos} />
			  )}
		  </section></>
  );
};
