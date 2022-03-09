import React from 'react'



const Formulario = ({ inputs, onSubmit, tituloBoton }) => {

	return (
		<form style={{marginLeft:"10px",backgroundColor:"Orangered", padding: "10px",height:"70px"}}
			onSubmit={(evento) => {
				evento.preventDefault()
				if (onSubmit) {
					onSubmit(evento)
                
				}
			}}
		>
			{inputs?.map((item) => {
				return <input style={{backgroundClip: 'border-box'}} key={item.name} placeholder={item.placeholder} name={item.name} />
			})}
            <div style={{textAlign: "right"}}>
			<button style={{borderBlockColor: 'black', backgroundColor:"darkmagenta", height: 20}} type={'submit'}>{tituloBoton}</button></div>
		</form>
	)
}



export default Formulario
