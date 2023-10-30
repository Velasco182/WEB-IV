

// export const FirstApp = () => {
//     return (
//         <>
//         <h1>Bienvenidos a la App con REACT PANITA</h1>
//         <h1>{5+6}</h1>



//         </>
//     )
// }



const mensaje = "Hola mundo cpn variable";
const arreglo = [1,2,3,4,5];

const aprendiz = {
    nombre: 'JAVIER',
    apellido: 'Lozada'
}






// export const FirstApp= () => {
//     return (

//     <>

//     <h1>Bienvenidos a la App con componentes REACT PANITA</h1>
//     <p>Este seria un parrafo</p>
//     <h1>{5+6}</h1>
//     <h1>{mensaje}</h1>
//     <h1>{arreglo}</h1>
    
//     <h1> {JSON.stringify(aprendiz)}</h1>
// </>
//     )


// } 


export const FirstApp = ({name= 'Mario Perez', age = "20", birth = '10/10/2008'}) => {
    return (
        <>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{birth}</h3>


        </>

    );
}