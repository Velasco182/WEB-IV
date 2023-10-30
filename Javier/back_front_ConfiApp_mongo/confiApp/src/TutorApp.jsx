
const Tutor ={
    nombre:'nicole ',
    apellido:'galindez',
    edad:18
}

export const TutorApp=({nombre,apellido,edad})=>{
    return (
        <>
            <h1> {nombre} </h1>
            <h2>{apellido}</h2>
            <h2>{edad}</h2>
        </>
    );

}