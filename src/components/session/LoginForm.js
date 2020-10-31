import React from 'react';

const LoginForm = () => {
    return (
        <form action="" className="session-form">
            <div className="form-control">
                <label className="label">Usuario</label>
                <input type="text" autoComplete="off" />
            </div>
            <div className="form-control">
                <label className="label">Contraseña</label>
                <input type="password" />
                <a className="form-control__link" href="/login">¿Has olvidado tu contraseña?</a>
            </div>
            <button className="primary-button session-form__button">
                Ingresar
            </button>
        </form>
    );
}

export default LoginForm;