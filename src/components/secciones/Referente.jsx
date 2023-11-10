import Errors from "../Errors";

function Referente({ register, errors, watch }) {
    return (<section className="w-100 d-flex flex-column justify-content-center align-items-center p-4">
        <h5 className="w-100 text-center p-3 bg-warning fw-bold text-uppercase rounded">Referente del Programa Codo a Codo</h5>
        <div className="w-100 border border-2 border-black  rounded bg-secondary-subtle row">
            <div className="col-md-4  my-3">
                <label htmlFor="" className="form-label text-black">PC Disponible</label>
                <select name="" id="" className={`form-control ${errors.pc && "border-danger border-2"}`}  {...register("pc", {
                    required: {
                        value: true,
                        message: "Pc Disponible es requerido"
                    }
                })}>
                    <option value="" >Elija una Opcion</option>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select>
                {errors.pc && <Errors message={errors.pc.message} />}
            </div>
            <div className="col-md-4  my-3">
                <label htmlFor="" className="form-label">¿Cómo nos conociste?</label>
                <select name="" id="" className={`form-control ${errors.conocimiento_programa && "border-danger border-2"}`}  {...register("conocimiento_programa", {
                    required: {
                        value: true,
                        message: "Es requerido"
                    }
                })}>
                    <option value="" >Elija una Opcion</option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="publicidad de google">Publicidad de Google</option>
                    <option value="youtube">YouTube</option>
                    <option value="recomendacion de alguien">Recomendacion de Alguien</option>
                    <option value="otro">Otro</option>
                </select>
                {errors.conocimiento_programa && <Errors message={errors.conocimiento_programa.message} />}
            </div>
            <div className="col-md-4  my-3">
                <label htmlFor="" className="form-label">¿Sos egresado de Codo a Codo?</label>
                <select name="" id="" className={`form-control ${errors.egresado && "border-danger border-2"}`}  {...register("egresado", {
                    required: {
                        value: true,
                        message: "Es requerido"
                    }
                })}>
                    <option value="" >Elija una Opcion</option>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select>
                {errors.egresado && <Errors message={errors.egresado.message} />}
            </div>
            <div className="col-12 my-3">
                <div className="my-3">
                    <label htmlFor="" className="form-label">¿Que turno tenés disponible para cursar Codo a Codo? </label>
                    <select name="" id="" className={`form-control ${errors.turno && "border-danger border-2"}`}  {...register("turno", {
                        required: {
                            value: true,
                            message: "Turno Disponible es requerido"
                        }
                    })}>
                        <option value="" >Elija una Opcion</option>
                        <option value="mañana">Mañana</option>
                        <option value="tarde">Tarde</option>
                        <option value="noche">Noche</option>
                    </select>
                    {errors.turno && <Errors message={errors.turno.message} />}
                </div>
                <div className="my-3">
                    <label htmlFor="" className="form-label">Elegí uno de los cursos disponibles</label>
                    <select name="" id="" className={`form-control ${errors.cursos && "border-danger border-2"}`}  {...register("cursos", {
                        required: {
                            value: true,
                            message: "Curso Disponible es requerido"
                        }
                    })}>
                        <option value="" >Elija una Opcion</option>
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                        <option value=".net">.Net</option>
                        <option value="javascript">Javacript</option>
                        <option value="php">PHP</option>
                    </select>
                    {errors.cursos && <Errors message={errors.cursos.message} />}
                </div>
                <div className="my-3">
                    <label htmlFor="" className="form-label">Elegí una comision</label>
                    <select name="" id="" className={`form-control ${errors.comision && "border-danger border-2"}`}  {...register("comision", {
                        required: {
                            value: true,
                            message: "Comision es requerido"
                        }
                    })}>
                        <option value="" >Elija una Opcion</option>
                        {(watch("cursos") != undefined && watch("turno") === "mañana") &&
                            <>
                                <option value="LyM 8-9:30">Lunes y Miercoles 08 a 9:30 </option>
                                <option value="LyM 10-11:30">Lunes y Miercoles 10 a 11:30</option>
                                <option value="LyM 11-12:30">Lunes y Miercoles 11 a 12:30</option>
                                <option value="MyJ 8-9:30">Martes y Jueves 08 a 9:30 </option>
                                <option value="MyJ 10-11:30">Martes y Jueves 10 a 11:30</option>
                                <option value="MyJ 11-12:30">Martes y Jueves 11 a 12:30</option>
                            </>
                        }
                        {(watch("cursos") != undefined && watch("turno") === "tarde") &&
                            <>
                                <option value="LyM 14-15:30">Lunes y Miercoles 14 a 15:30 </option>
                                <option value="LyM 15:30-17">Lunes y Miercoles 15:30 a 17</option>
                                <option value="LyM 17-18:30">Lunes y Miercoles 17 a 18:30</option>
                                <option value="MyJ 14-15:30">Martes y Jueves 14 a 15:30 </option>
                                <option value="MyJ 15:30-17">Martes y Jueves 15:30 a 17</option>
                                <option value="MyJ 17-18:30">Martes y Jueves 17 a 18:30</option>
                            </>
                        }
                        {(watch("cursos") != undefined && watch("turno") === "noche") &&
                            <>
                                <option value="LyM 19-20:30">Lunes y Miercoles 19 a 20:30 </option>
                                <option value="LyM 20:30-22">Lunes y Miercoles 20:30 a 22</option>
                                <option value="LyM 20-21:30">Lunes y Miercoles 20 a 21:30</option>
                                <option value="MyJ 19-20:30">Martes y Jueves 19 a 20:30 </option>
                                <option value="MyJ 20:30-22">Martes y Jueves 20:30 a 22</option>
                                <option value="MyJ 20-21:30">Martes y Jueves 20 a 21:30</option>
                            </>
                        }
                    </select>
                    {errors.comision && <Errors message={errors.comision.message} />}
                </div>
            </div>
        </div>
    </section>);
}

export default Referente;