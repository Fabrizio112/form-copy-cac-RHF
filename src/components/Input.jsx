import Errors from "./Errors";

function Input({ text, errors, type, register, validar = true, patron }) {
    return (<div className="col-md-4 my-3">
        <label htmlFor="" className="form-label text-capitalize">{text}</label>
        <input className={`form-control ${errors[text] && "border-danger border-2"}`} type={type} {...register(`${text}`, {
            required: {
                value: true,
                message: `${text.charAt(0).toUpperCase() + text.slice(1)} es requerido`
            },
            validate: (data) => {
                if (typeof (validar) === "function") {
                    return validar(data)
                }
                return true
            },
            pattern: {
                value: patron ? patron : true,
                message: `${text.charAt(0).toUpperCase() + text.slice(1)} Invalido`
            }
        })} />
        {errors[text] && <Errors message={errors[text].message} />}
    </div>);
}

export default Input;