import { useForm } from "react-hook-form";
import PerfilPersonal from "./secciones/PerfilPersonal"
import ConocimientosPrevios from "./secciones/ConocimientoPrevios";
import SituacionLaboral from "./secciones/SituacionLaboral";
import Referente from "./secciones/Referente";
import Terminos from "./secciones/Terminos";


function FormApp() {
    const { formState: { errors }, handleSubmit, register, reset, watch } = useForm()

    const enviarFormulario = handleSubmit(() => {
        alert("Enviando Datos ....")
        reset()
    })
    return (
        <>
            <h1 className="w-100 text-center display-4 my-4">Formulario Simulado Curso</h1>
            <form action="" className="d-flex flex-column justify-content-center align-items-center" onSubmit={enviarFormulario}>
                <PerfilPersonal register={register} errors={errors} />
                <ConocimientosPrevios register={register} errors={errors} />
                <SituacionLaboral register={register} errors={errors} watch={watch} />
                <Referente register={register} errors={errors} watch={watch} />
                <Terminos register={register} errors={errors} />
                <button id="button-send" className="btn btn-primary btn-lg px-5 align-self-start ">Enviar</button>
            </form>
        </>);
}

export default FormApp;