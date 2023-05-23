import React,{useState} from 'react';
import Helmet from '../components/Helmet/Helmet'
import {Container,Row,Col,Form,FormGroup} from "reactstrap";
import {Link,useNavigate} from "react-router-dom";

import "../styles/login.css"

import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase.config"
import {toast} from 'react-toastify'




const Login = () => {

const [email,setEmail] = useState('')
const [pasword, setPassword] = useState('')
const [loading, setloading] = useState(false)
const navigate=useNavigate()


const signIn = async (e)=>{


  e.preventDefault()

  setloading(true)

  try{

    const userCredential=await signInWithEmailAndPassword(auth,email,pasword)

    const user=userCredential.user

    console.log(user)
    setloading(false)
    toast.success('Welcome '+user.displayName)
    navigate('/checkout')

  }
  catch(error){

    setloading(false)
    toast.error(error.message)
  }

}



    return <Helmet title='Login'>

      <section className='sec'>
        <Container>
          <Row>
          {
            loading ? <Col className='text-center' lg='12'><h5 className='fw-bold'>Loading....</h5></Col> :  <Col lg='6' className="m-auto text-center">
            <h3 className='fw-bold mb-4'>Login</h3>
            <Form className="auth_form" onSubmit={signIn}>

              <FormGroup className="form_group">
                <input type="email" placeholder="Enter your email" value={email} onChange={e=> setEmail(e.target.value)}></input>
              </FormGroup>

              <FormGroup className="form_group">
                <input type="password" placeholder="Enter your password" value={pasword} onChange={e=> setPassword(e.target.value)}></input>
              </FormGroup>

              <button type="submit" className='buy_btn auth_btn'>Login</button>
              <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
            </Form>

            </Col>
          }
          </Row>
        </Container>
      </section>

    </Helmet>
};

export default Login;