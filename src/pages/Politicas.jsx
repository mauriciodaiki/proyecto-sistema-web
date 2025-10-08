import Rating from "../components/Rating";

export default function Politicas() {
    return (
        <section className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Políticas</h1>

            <h2 className="text-2xl font-semibold mb-2">Políticas de calidad</h2>
            <p className="mb-6">
                Todos nuestros productos cumplen con estándares de calidad estrictos. Utilizamos ingredientes
                biodegradables y empaques reciclables para asegurar una cadena de valor coherente con nuestros valores
                ecológicos.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Políticas de envío</h2>
            <p className="mb-6">
                Realizamos envíos a todo México. El tiempo estimado de entrega es de 2 a 5 días hábiles. El costo de
                envío se calcula automáticamente al momento de la compra.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Políticas de devolución</h2>
            <p className="mb-6">
                Las devoluciones se aceptan dentro de los 7 días naturales posteriores a la recepción del pedido. El
                producto debe estar sin usar y en su empaque original.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Atención al cliente</h2>
            <p>
                Para iniciar un proceso de devolución o solicitar ayuda, por favor contáctanos mediante el formulario
                o vía WhatsApp.
            </p>

            <Rating label="Califica la claridad de nuestras políticas" />
        </section>
    );
}
