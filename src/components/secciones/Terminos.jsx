import Errors from "../Errors";

function Terminos({ register, errors }) {
    return (<section className="w-100 d-flex flex-column justify-content-center align-items-center p-4">
        <h6 className="w-100 text-center p-3 bg-warning fw-bold text-uppercase rounded">Terminos y Condiciones</h6>
        <div className="w-100 border border-2 border-black  rounded bg-secondary-subtle row">
            <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, officiis nemo debitis asperiores, mollitia laboriosam magni sit suscipit, accusamus libero architecto quidem tempora nisi corrupti. Quaerat incidunt non ab recusandae.
                Voluptatem exercitationem aliquid, aperiam quis eveniet atque in amet temporibus totam, laborum sit esse quam hic porro! Unde, rerum? Nemo ipsum inventore ullam quibusdam dolorem debitis tenetur maxime, dolorum facere.
                Nam quaerat earum unde molestiae, aliquam, ipsum quis, doloribus natus eaque dolorum iste minima! Illum voluptate quia delectus itaque culpa nihil, aspernatur rerum mollitia. Impedit quisquam autem placeat consectetur cupiditate?
            </p>
            <div className="col form-check m-2">
                <input type="checkbox" className={`form-check-input ${errors.terms && "border-danger border-2"}`}  {...register("terms", {
                    required: {
                        value: true,
                        message: "Terminos y condiciones son requeridos"
                    }
                })} />
                <label htmlFor="" className="form-check-label">Acepto los términos y condiciones</label>
                {errors.terms && <Errors message={errors.terms.message} />}
            </div>
        </div>
    </section>);
}

export default Terminos;