import Errors from "../Errors";
import Input from "../Input";

function PerfilPersonal({ register, errors }) {

    const validarDocumento = (data) => {
        if (data.length === 8) return true
        return "Documento debe tener 8 digitos"
    }
    const patterEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    return (
        <section className="w-100 d-flex flex-column justify-content-center align-items-center p-4">
            <h2 className="w-100 text-center p-3 bg-warning fw-bold text-uppercase rounded">Perfil Personal</h2>
            <div className="w-100 border border-black border-2 rounded bg-secondary-subtle row  ">
                <Input text="nombre" errors={errors} type="text" register={register} />
                <Input text="apellido" errors={errors} type="text" register={register} />
                <div className="col-md-4  my-3">
                    <label htmlFor="" className="form-label">Tipo de Documento</label>
                    <select name="" id="" className={`form-control ${errors.tipo_de_documento && "border-danger border-2"}`} {...register("tipo_de_documento", {
                        required: {
                            value: true,
                            message: "Seleccione una opcion"
                        }
                    })} >
                        <option value="" >Elija una Opcion</option>
                        <option value="dni">DNI</option>
                        <option value="pasaporte">Pasaporte</option>
                        <option value="cuit/cuil">CUIT/CUIL</option>
                    </select>
                    {errors.tipo_de_documento && <Errors message={errors.tipo_de_documento.message} />}
                </div>
                <Input text="numero de documento" errors={errors} type="number" register={register} validar={validarDocumento} />
                <Input text="fecha de nacimiento" errors={errors} type="date" register={register} />
                <div className="col-md-4  my-3">
                    <label htmlFor="" className="form-label" >Género</label>
                    <select name="" id="" className={`form-control ${errors.genero && "border-danger border-2"}`}  {...register("genero", {
                        required: {
                            value: true,
                            message: "Genero es requerido"
                        }
                    })} >
                        <option value="" >Elija una Opcion</option>
                        <option value="h">Hombre</option>
                        <option value="m">Mujer</option>
                        <option value="o">Otro</option>
                    </select>
                    {errors.genero && <Errors message={errors.genero.message} />}
                </div>
                <Input text="email" errors={errors} type="email" register={register} patron={patterEmail} />
                <Input text="telefono" errors={errors} type="number" register={register} />
                <div className="col-md-4  my-3">
                    <label htmlFor="" className="form-label" >Nacionalidad</label>
                    <select name="" id="" className={`form-control ${errors.nacionalidad && "border-danger border-2"}`} {...register("nacionalidad", {
                        required: {
                            value: true,
                            message: "Nacionalidad es requerido"
                        }
                    })} >
                        <option value="" >Elija una Opcion</option>
                        <option value="arg">Argentino</option>
                        <option value="bra">Brasilero</option>
                        <option value="bol">Boliviano</option>
                        <option value="chl">Chileno</option>
                        <option value="par">Paraguayo</option>
                    </select>
                    {errors.nacionalidad && <Errors message={errors.nacionalidad.message} />}
                </div>
                <Input text="provincia" errors={errors} type="text" register={register} />

            </div>
        </section>);
}

export default PerfilPersonal;