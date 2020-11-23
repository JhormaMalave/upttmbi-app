import React from 'react';

const SubjectsScreen = () => {
    return (
        <>
            <h1 className="app-main__title">Asignaturas</h1>
            <div className="app-main__options-area">
                <select name="course" id="course-form">
                    <option value="1">Inicial</option>
                    <option value="2">Trayecto 1</option>
                    <option value="3">Trayecto 2</option>
                    <option value="4">Trayecto 3</option>
                    <option value="5">Trayecto 4</option>
                </select>
                <div className="app-main__options">
                    <a href="/">Agregar</a>
                </div>
            </div>
            <div className="subjects">
                <h2 className="subjects__title">Trayecto 2</h2>
                <article className="subject">
                    <h3 className="subject__title">Matematicas</h3>
                    <p className="subject__uc"><strong>UC:</strong> 9 </p>
                </article>

            </div>
        </>
    );
}

export default SubjectsScreen;