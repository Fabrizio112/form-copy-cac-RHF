import Errors from "../Errors";

function ConocimientosPrevios({ register, errors }) {
    return (<section className="w-100 d-flex flex-column justify-content-center align-items-center p-4">
        <h3 className="w-100 text-center p-3 bg-warning fw-bold text-uppercase rounded">Conocimientos Previos</h3>
        <div className="w-100 border border-2 border-black  rounded bg-secondary-subtle row  ">
            <div className="col-md-4  my-3">
                <label htmlFor="" className="form-label">Nivel de Estudio</label>
                <select name="" id="" className={`form-select ${errors.nivel_de_estudios && "border-danger border-2"}`} {...register("nivel_de_estudios", {
                    required: {
                        value: true,
                        message: "Nivel de estudios es requerido"
                    }
                })}>
                    <option value="" >Elija una Opcion</option>
                    <option value="SI">Secundario Incompleto</option>
                    <option value="SC">Secundario Completo</option>
                    <option value="TC">Terciario Completo</option>
                    <option value="TI">Terciario Incompleto</option>
                    <option value="UI">Universitario Incompleto</option>
                    <option value="UC">Universitario Completo</option>
                    <option value="PC">Posgrado Completo</option>
                    <option value="PI">Posgrado Incompleto</option>
                </select>
                {errors.nivel_de_estudios && <Errors message={errors.nivel_de_estudios.message} />}
            </div>
            <div className="col-md-4  my-3">
                <label htmlFor="" className="form-label">Nivel de Ingles</label>
                <select name="" id="" className={`form-select ${errors.nivel_de_ingles && "border-danger border-2"}`}{...register("nivel_de_ingles", {
                    required: {
                        value: true,
                        message: "Nivel de Ingles es requerido"
                    }
                })}>
                    <option value="" >Elija una Opcion</option>
                    <option value="avanzado">Avanzado</option>
                    <option value="intermedio">Intermedio</option>
                    <option value="basico">Basico</option>
                    <option value="ninguno">Ninguno</option>
                </select>
                {errors.nivel_de_ingles && <Errors message={errors.nivel_de_ingles.message} />}
            </div>
            <div className="col-md-4  my-3">
                <label htmlFor="" className="form-label">¿Tenes algun conocimiento en programacion?</label>
                <select name="" id="" className={`form-select ${errors.conocimiento_programacion && "border-danger border-2"}`} {...register("conocimiento_programacion", {
                    required: {
                        value: true,
                        message: "Conocimiento en Programacion es requerido"
                    }
                })}>
                    <option value="" >Elija una Opcion</option>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select>
                {errors.conocimiento_programacion && <Errors message={errors.conocimiento_programacion.message} />}
            </div>

        </div>
    </section>);
}

export default ConocimientosPrevios;