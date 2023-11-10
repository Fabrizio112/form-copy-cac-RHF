import Errors from "../Errors";

function SituacionLaboral({ register, errors, watch }) {
    return (
        <section className="w-100 d-flex flex-column justify-content-center align-items-center p-4">
            <h4 className="w-100 text-center p-3 bg-warning fw-bold text-uppercase rounded">Situacion Laboral</h4>
            <div className="w-100 border border-2 border-black  rounded bg-secondary-subtle row  ">
                <div className="col-md-4  my-3">
                    <label htmlFor="" className="form-label">¿Cual es tu situacion laboral actual?</label>
                    <select name="" id="" className={`form-select ${errors.situacion_laboral && "border-danger border-2"}`} {...register("situacion_laboral", {
                        required: {
                            value: true,
                            message: "Situacion Laboral es requerido"
                        }
                    })}>
                        <option value="" >Elija una Opcion</option>
                        <option value="trabajo">Trabajo</option>
                        <option value="no trabajo y busco">No trabajo y Busco Trabajo</option>
                        <option value="no trabaajo y no busco">No trabajo y No busco trabajo</option>
                        <option value="jubilado y/o pensionado">Jubilado y/o Pensionado</option>
                    </select>
                    {errors.situacion_laboral && <Errors message={errors.situacion_laboral.message} />}
                </div>
                {watch("situacion_laboral") === "trabajo" &&
                    <>
                        <div className="col-md-4  my-3">
                            <label htmlFor="" className="form-label">¿Actualmente tu trabajo es?</label>
                            <select name="" id="" className={`form-select ${errors.trabajo_actual && "border-danger border-2"}`} {...register("trabajo_actual", {
                                required: {
                                    value: true,
                                    message: "Trabajo Actual es requerido"
                                }
                            })}>
                                <option value="" >Elija una Opcion</option>
                                <option value="dependencia">En relacion de dependencia</option>
                                <option value="monotributista">Monotributista</option>
                                <option value="informal">Trabajo de Manera Informal</option>
                            </select>
                            {errors.trabajo_actual && <Errors message={errors.trabajo_actual.message} />}
                        </div>
                        <div className="col-md-4  my-3">
                            <label htmlFor="" className="form-label">¿Trabajas actualmente como Programador?</label>
                            <select name="" id="" className={`form-select ${errors.programador && "border-danger border-2"}`} {...register("programador", {
                                required: {
                                    value: true,
                                    message: "Es requerido"
                                }
                            })}>
                                <option value="" >Elija una Opcion</option>
                                <option value="si">Si</option>
                                <option value="no">No</option>
                            </select>
                            {errors.programador && <Errors message={errors.programador.message} />}
                        </div>
                        <div className="col-md-4  my-3">
                            <label htmlFor="" className="form-label">¿Tu puesto de trabajo actual es dentro de la industria IT?</label>
                            <select name="" id="" className={`form-select ${errors.trabajo_it && "border-danger border-2"}`} {...register("trabajo_it", {
                                required: {
                                    value: true,
                                    message: "Es requerido"
                                }
                            })}>
                                <option value="" >Elija una Opcion</option>
                                <option value="si">Si</option>
                                <option value="no">No</option>
                            </select>
                            {errors.trabajo_it && <Errors message={errors.trabajo_it.message} />}
                        </div>
                    </>}
            </div>

        </section>);
}

export default SituacionLaboral;