import Rating from "../components/Rating";

export default function Vision() {
    return (
        <section className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Visión</h1>
            <p>
                Ser líderes en el mercado nacional de productos de limpieza ecológicos, reconocidos por nuestro
                compromiso con la innovación, la sostenibilidad y la responsabilidad social.
            </p>
            <Rating label="¿Te fue útil esta página?" />
        </section>
    );
}
