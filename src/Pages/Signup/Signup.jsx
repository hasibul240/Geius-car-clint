import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Signup = () => {

    const {create_user} = React.useContext(AuthContext)

    const handleSubmit = (event) => { 
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        create_user(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => console.error(error));


        console.log(name, email, password);
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-8">
                    <h1 className="text-5xl text-center font-bold">SignUp</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary normal-case" value="SignUp" />
                        </div>
                    </form >
                    <p className='text-center pb-8'>Already have an account ? <Link to='/login' className='text-orange-600 hover:underline'>LogIn</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;