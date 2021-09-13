/* eslint-disable react/react-in-jsx-scope */

import {dataBase} from '../../Firebase/firebase';
import {CartContext} from '../../CartContext/CartContext';
import {Fragment, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Loading} from '../Loading/loading';
import '../Checkout/checkout.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const Checkout = () => {
  const {cart, clear, totalDeItems, cartQuantity} = useContext(CartContext);
  const db = dataBase;
  const [form, setForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(
      {
        nombre: '',
        apellido: '',
        phone: '',
        email: '',
        codigoPostal: '',
        domicilio: '',
        ciudad: '',

      },
  );

  useEffect(() => {
    const dataForm =
     [userData.nombre, userData.apellido, userData.phone,
       userData.email, userData.codigoPostal,
       userData.domicilio, userData.ciudad].includes('');
    setForm(dataForm);
  }, [userData]);

  const handleSend = (e) => e.preventDefault();
  const handleChangeInput = (e) =>
    setUserData({...userData, [e.target.nombre]: e.target.value});

  const getOrder = () => {
    const itemsOrder = cart.map(({item, quantity}) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: quantity,
    }));
    return {
      buyer: userData,
      items: itemsOrder,
      total: cartQuantity,
    };
  };

  const compraOk = (buyer) =>{
    const newOrder = getOrder(buyer);
    const orders = db.collection('orders');
    orders.add(newOrder).then(({id})=>{
      alert(`¡Gracias ${userData.nombre} por tu compra!.
      Tu pedido fue procesado con éxito: ${id}.Luego nos pondremos en contacto 
      con Ud. para coordinar el envío`);
    }).catch((error)=> {
      console.log('Hubo un error', error);
    }).finally(()=> {
      setLoading(false);
      clear();
    });
  };


  return (
    <Fragment>
      { loading ?
         <Loading/> :
         ( cart.length > 0 ?
           (<section className="checkout-container">
             <h2 className="title-checkout">DETALLE DE TU COMPRA:</h2>
             { cart.map( (obj)=>(<ul key={obj.item.id}>
               <li><span className="font-checkout">
                 Cantidad de productos:</span> {cartQuantity}</li>
               <li>{obj.item.title}</li>
               <li><span className="font-checkout">
                 ARS $</span> {obj.item.precio}</li>
             </ul>)) }
             <span className="font-checkout">Total ${totalDeItems}</span>
             <section className="form-container">
               <h2 className="title-checkout">Datos del Comprador</h2>
               <div className="row">
                 <form onSubmit={handleSend}>
                   <div className="row mb-4">
                     <div className="col">
                       <div className="form-outline">
                         <input type=
                           "text" name="nombre" value={userData.nombre}
                         placeholder=
                           "Ingresar nombre"
                         onChange={handleChangeInput} className="form-control">
                         </input>
                         <label className="form-label" htmlFor="form6Example1">
                           Nombre</label>
                       </div>
                     </div>
                     <div className="col">
                       <div className="form-outline">
                         <input type=
                           "text" name="apellido"
                         value={userData.apellido} placeholder=
                           "Ingresar apellido"
                         onChange={handleChangeInput} className="form-control">
                         </input>
                         <label className="form-label" htmlFor="form6Example1">
                           Apellido
                         </label>
                       </div>
                     </div>
                   </div>
                   <div className="form-outline mb-4">
                     <input type=
                       "phone" name="phone" value={userData.phone}
                     placeholder=
                       "Ingresar numero de teléfono" onChange=
                       {handleChangeInput} className="form-control"></input>
                     <label className="form-label" htmlFor="form6Example1">
                       Numero de Telefono</label>
                     <div className="form-outline mb-4">
                       <input type="email" name="email" value=
                         {userData.email} placeholder="Ingresar e-mail"
                       onChange={handleChangeInput} className="form-control">
                       </input>
                       <label className="form-label" htmlFor="form6Example1">
                         E-mail</label>
                     </div>
                     <div className="form-outline mb-4">
                       <input type="email" name="email" value=
                         {userData.email} placeholder="Confirmar e-mail"
                       onChange={handleChangeInput} className="form-control">
                       </input>
                       <label className="form-label" htmlFor="form6Example1">
                         Confirmar E-mail</label>
                     </div>
                     <div className="form-outline mb-4">
                       <input type="CP" name="CP" value=
                         {userData.email} placeholder="Ingresar CP"
                       onChange={handleChangeInput} className="form-control">
                       </input>
                       <label className="form-label" htmlFor="form6Example1">
                         Codigo Postal</label>
                     </div>
                     <div className="form-outline mb-4">
                       <input type="domicilio" name="domicilio" value=
                         {userData.email} placeholder="Ingresar domicilio"
                       onChange={handleChangeInput} className="form-control">
                       </input>
                       <label className="form-label" htmlFor="form6Example1">
                         Domicilio</label>
                     </div>
                     <div className="form-outline mb-4">
                       <input type="ciudad" name="ciudad" value=
                         {userData.email} placeholder="Ingresar la ciudad"
                       onChange={handleChangeInput} className="form-control">
                       </input>
                       <label className="form-label" htmlFor="form6Example1">
                         Ciudad</label>
                     </div>
                   </div>
                 </form>
               </div>
               <div className="button-finalizar">
                 {form ?
               <button type="submit" className="btn">
                 Finalizar compra</button> :
               <button onClick={()=> compraOk()}> Finalizar compra</button>}
               </div>
             </section>
           </section>
        ) :
        <div className="volver-al-home">
          <Link className="link-volver-home" extact to="/">Volver al home</Link>
        </div>
        )
      }
    </Fragment>
  );
};
