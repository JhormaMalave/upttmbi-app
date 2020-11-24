import React from 'react';

const LoginForm = () => {
    return (
        <form action="" className="session-form">
            <div className="form-group">
                <label className="block text-sm font-medium text-gray-700">Usuario</label>
                <input type="text" className="form-input " autoComplete="off" />
            </div>
            <div className="form-group">
                <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                <input type="password" className="form-input" />
                <a className="inline-block align-baseline font-normal text-sm text-blue-500" href="/login">¿Has olvidado tu contraseña?</a>
            </div>
            <div className="flex items-center justify-end pt-5">
                <button className="btn btn-primary  transition duration-500 ease select-none focus:shadow-outline">
                    Ingresar
                </button>
            </div>
        </form>
    );
}

export default LoginForm;