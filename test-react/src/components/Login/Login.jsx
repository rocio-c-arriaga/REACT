import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Login = () => (
  <Modal.Dialog>
  <Modal.Header>
    <Modal.Title>Log In</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form.Group controlId="Email"  class="form-inline">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="Password" class="form-inline">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicChecbox">
      <Form.Check type="checkbox" label="Remember Me" />
    </Form.Group>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="info" type="continuar">
      Continuar
    </Button>
  </Modal.Footer>
</Modal.Dialog>
);

export default Login;
/*
  <> 
    Username : <input type="text" />
    Password : <input type="password" />
  </>
);*/

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


/*
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



export default Login;*/
