import React, { useEffect } from 'react';

const Title = () => {
    useEffect(() => {
        document.title = 'Título Dinámico';
    }, []); // El segundo argumento vacío hace que se ejecute solo al montar el componente.

    return (
        <div>
            <h1>Contenido de mi componente</h1>
        </div>
    );
};

export default Title;
