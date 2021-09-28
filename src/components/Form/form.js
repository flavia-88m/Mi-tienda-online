/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import '../Checkout/checkout.css';
import {CartContext} from '../../CartContext/CartContext';
import {dataBase} from '../../Firebase/firebase';
import {useContext, useEffect, useState} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';

export const Form = () => {
  const {cart, clear, totalDeItems} = useContext(CartContext);
  const db = dataBase;
  const [form, setForm] = useState(true);
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

  const handleInputChange = (event) =>
    setUserData({...userData, [event.target.name]: event.target.value});
  const handleSubmit = (event) => event.preventDefault();

  const getOrder = () => {
    const itemsOrder = cart.map(({item, quantity}) => ({
      id: item.id,
      title: item.title,
      price: item.precio,
      quantity: quantity,
    }));
    return {
      buyer: userData,
      items: itemsOrder,
      total: totalDeItems,
    };
  };

  const compraOk = (buyer) =>{
    const newOrder = getOrder(buyer);
    const orders = db.collection('orders');
    orders.add(newOrder).then(({id})=>{
      swal({title: `¡Gracias ${userData.nombre} por tu compra!`,
        text: `Tu pedido fue procesado con éxito: ${id}. Luego nos pondremos en contacto con Ud. para coordinar el envío`,
        icon: 'success',
      });
    }).catch((error)=> {
      console.log('Hubo un error', error);
    }).finally(()=> {
      clear();
    });
  };


  return (
    <section>
      <section className="form-container">
        <h2 className="title-checkout">Datos del Comprador</h2>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input type=
                    "text" name="nombre" value={userData.nombre}
                  placeholder=
                    "Ingresar nombre"
                  onChange={handleInputChange} className="form-control">
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
                  onChange={handleInputChange} className="form-control">
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
                {handleInputChange} className="form-control"></input>
              <label className="form-label" htmlFor="form6Example1">
                  Numero de Telefono</label>
              <div className="form-outline mb-4">
                <input type="email" name="email" value=
                  {userData.email} placeholder="Ingresar e-mail"
                onChange={handleInputChange} className="form-control">
                </input>
                <label className="form-label" htmlFor="form6Example1">
                    E-mail</label>
              </div>
              <div className="form-outline mb-4">
                <input type="email" name="email" value=
                  {userData.email} placeholder="Confirmar e-mail"
                onChange={handleInputChange} className="form-control">
                </input>
                <label className="form-label" htmlFor="form6Example1">
                    Confirmar E-mail</label>
              </div>
              <div className="form-outline mb-4">
                <input type="CP" name="codigoPostal" value=
                  {userData.codigoPostal} placeholder="Ingresar CP"
                onChange={handleInputChange} className="form-control">
                </input>
                <label className="form-label" htmlFor="form6Example1">
                    Codigo Postal</label>
              </div>
              <div className="form-outline mb-4">
                <input type="domicilio" name="domicilio" value=
                  {userData.domicilio} placeholder="Ingresar domicilio"
                onChange={handleInputChange} className="form-control">
                </input>
                <label className="form-label" htmlFor="form6Example1">
                    Domicilio</label>
              </div>
              <div className="form-outline mb-4">
                <input type="ciudad" name="ciudad" value=
                  {userData.ciudad} placeholder="Ingresar la ciudad"
                onChange={handleInputChange} className="form-control">
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
      <button className="btn" onClick={()=> compraOk()}>
        Finalizar compra</button>}
        </div>
      </section>
    </section>
  );
};
