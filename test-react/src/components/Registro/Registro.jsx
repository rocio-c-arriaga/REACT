import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import Slide from './Bslide5';

class Registro extends React.Component {
    constructor(props) { //props las propiedades que recibe tu componente prop es externo, datos de afuera
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            email: '',
            mensaje: ''
        }
    }

    actualizaNombre(event) {
        let datoIngresado = event.target.value;
        let ingresaNombre = { ...this.state };//... es copiar tal cual el objeto
        ingresaNombre.nombre = datoIngresado;
        this.setState(ingresaNombre);
    }

    actualizaApellido(event) {
        let datoIngresado = event.target.value;
        let ingresaApellido = { ...this.state };//... es copiar tal cual el objeto
        ingresaApellido.apellido = datoIngresado;
        this.setState(ingresaApellido);
    }

    actualizaEmail(event) {
        let datoIngresado = event.target.value;
        let ingresaEmail = { ...this.state };
        ingresaEmail.email = datoIngresado;
        this.setState(ingresaEmail);
    }

    agregaMensaje(event) {
        let datoIngresado = event.target.value;
        let ingresaMensaje = { ...this.state };
        ingresaMensaje.mensaje = datoIngresado;
        this.setState(ingresaMensaje);
    }

    botonClicked(event) {
        alert(`Confirma tus datos ${this.state.nombre}, ${this.state.apellido}, ${this.state.email}, ${this.state.mensaje}`)
    }

    verificarDatos() {
        return (this.state.nombre == '' || this.state.apellido == '' || this.state.email == '' || this.state.mensaje == '')
    }


    render() { // es lo que se va a imprimir en pantalla, todo lo de html
        return (         
            <Carousel>
                <Carousel.Item>
                    <Image 
                        img={Slide}
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="aside2">
                <div>Nombre
                    <input value={this.state.nombre}
                        onChange={(event) => this.actualizaNombre(event)} /> </div>
                <div>Apellido
                    <input value={this.state.apellido}
                        onChange={(event) => this.actualizaApellido(event)} /> </div>
                <div>Email
                    <input value={this.state.email}
                        onChange={(event) => this.actualizaEmail(event)} /> </div>
                <div>Mensaje
                    <textarea value={this.state.mensaje}
                        onChange={(event) => this.agregaMensaje(event)} /> </div>
                <div>
                    <button disabled={this.verificarDatos()}
                        type="submit" onClick={(event) => this.botonClicked(event)} > click me </button> </div>
            </div>
        )
    }
}

export default Registro;