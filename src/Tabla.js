import React from "react"

const Tabla = (props) => {
    const {colegios}=props
    
    return <div ><table style={{backgroundColor: "darkmagenta", color: "white", textAlign: "center",height: "50px",width:"500px",marginLeft: "500px",marginRight: "50px", marginTop:"300px"}}>
        <tbody >
        <tr style={{backgroundColor: "orangered", alignItems:"normal"}}>
            <td>Colegio </td>
            <td>Curso </td>
            <td>Contacto </td>
            <td>Lunes </td>
            <td>Martes </td>
            <td>Miercoles </td>
            <td>Jueves </td>
            <td>Viernes </td>
            
        </tr>
        {colegios.map((delcole)=>{
            return( 
            <tr>
                <td>{delcole.nombre}</td>
                <td>{delcole.curso}</td>
                <td>{delcole.encargado}</td>
                <td>{delcole.lunes}</td>                
                <td>{delcole.martes}</td>
                <td>{delcole.miercoles}</td>
                <td>{delcole.jueves}</td>
                <td>{delcole.viernes}</td>

        </tr>)
        })}
    


    
    </tbody>
    </table>
    </div>
}

export default Tabla