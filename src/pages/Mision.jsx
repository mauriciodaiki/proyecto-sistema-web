import Rating from "../components/Rating";

export default function Mision() {
    return (
        <section className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Misión</h1>
            <p>
                Proporcionar productos de limpieza ecológicos que promuevan un estilo de vida sostenible, mejorando la
                calidad de vida de nuestros clientes y reduciendo el impacto ambiental.
            </p>
            <Rating label="¿Te fue útil esta página?" />
        </section>
    );
}
