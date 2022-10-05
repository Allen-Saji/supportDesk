import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {register} from '../features/auth/authSlice'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const {name, email, password, password2} = formData

    const dispatch = useDispatch()

    const {user, isLoading, isSuccess, message} = useSelector((state) => state.auth)

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,[e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(password2 !== password){
            toast.error('passwords do not match')
        }
    }

  return (
    <>
        <section className="heading">
        <h1> <FaUser />Register {user}</h1>
           <p>create an account</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text"
                    className="form-control" 
                    id='name'
                    name='name'
                    value={name}
                    onChange={onChange}
                    placeholder="Enter your name"
                    required />  
                    
                </div>
                <div className="form-group">
                    <input type="email"
                    className="form-control" 
                    id='email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    placeholder="Enter your email"
                    required />
                    
                </div>
                <div className="form-group">
                    <input type="password"
                    className="form-control" 
                    id='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                    placeholder="Set password"
                    required />
                   
                </div>
                <div className="form-group">
                    <input type="password"
                    className="form-control" 
                    id='password2'
                    name='password2'
                    value={password2}
                    onChange={onChange}
                    placeholder="Confirm password"
                    required />
                </div>
                <div className="form-group">
                    <button className='btn btn-block'>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Register