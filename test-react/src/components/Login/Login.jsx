import React from 'react';

/*
function Login(props) {
  return (
    <div>
      {props.name}
    </div>
  );
}
*/
/*
const Login =(props) => {
    return (
      <div>
        {props.name}
      </div>
    );
  }
  */
  
  /*
  //deconstruido
  const Login =({name}) => ( //{name:'Rocío'}
      <div>
        {name}
      </div>
  );
*/



class Login extends React.Component {
    constructor(props) { //props las propiedades que recibe tu componente prop es externo, datos de afuera
        super(props);
        this.state = {//agregar es objeto state con valores, state es interno son variables definidas adentro de la funcion
            clicked:false,
            name: this.props.name,
        };

        this.changeClicked = this.changeClicked.bind(this);//bind crea una nueva funcion que amarra el contexto que uno le pasa en este caso es this, en el constructor esta la garantía se refiere al componente que se hace
    }

    changeClicked(event) {
    console.log(event.target);
        this.setState({clicked: !this.state.clicked})//se pasa un objeto con lo que se quiere modificar
    }

    render(){ // es lo que se va a imprimir en pantalla, todo lo de html
        return (
            <div onClick={this.changeClicked}>
                {this.state.name} 
                <br />
                {this.state.clicked.toString()} 
            </div>
        )
    }
}



export default Login;
