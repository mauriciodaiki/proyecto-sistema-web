import Rating from "../components/Rating";

export default function Ubicacion() {
    return (
        <section className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Ubicación Física</h1>
            <p className="mb-4">
                Nos encontramos en Guadalajara, Jalisco. En esta ciudad operamos nuestra planta de producción y
                distribución, además de atender pedidos en línea a todo México.
            </p>
            <Rating label="¿Te fue útil esta página?" />
        </section>
    );
}
