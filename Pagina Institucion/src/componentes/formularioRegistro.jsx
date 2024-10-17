
const FormularioResgistro = () => {

    return (
        <>
         <div className="mb-3">
                <input type="text" className="form-control" name="nombre" placeholder="Ingrese su nombre"/>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" name="correo" placeholder="Ingrese su correo"/>
            </div>
            <div className="mb-3">
                <input type="file" className="form-control" name="archivo" placeholder="Subir archivo"/>
            </div>
           
        </>

    );
}
export default FormularioResgistro; 