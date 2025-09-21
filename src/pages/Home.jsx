export default function Home() {
    const productos = [
        { img: "/img/detergente1.png", nombre: "Limpiador multiusos", precio: "$85.00 MXN" },
        { img: "/img/detergente2.png", nombre: "Detergente líquido", precio: "$95.00 MXN" },
        { img: "/img/detergente3.png", nombre: "Desengrasante cocina", precio: "$90.00 MXN" },
        { img: "/img/detergente4.PNG", nombre: "Suavizante de telas", precio: "$80.00 MXN" },
    ];

    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            {/* Slider simple con imágenes existentes */}
            <section aria-label="Promociones" className="mb-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <img src="/img/slide1.jpg" alt="Producto 1" className="rounded-lg object-cover w-full h-40" />
                    <img src="/img/slide2.jpg" alt="Producto 2" className="rounded-lg object-cover w-full h-40" />
                    <img src="/img/slide3.jpg" alt="Producto 3" className="rounded-lg object-cover w-full h-40" />
                    <img src="/img/ecoclean-2.png" alt="Producto 4" className="rounded-lg object-contain w-full h-40 bg-white" />
                </div>
            </section>

            <h2 className="text-2xl font-bold mb-4">Productos Destacados</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {productos.map((p) => (
                    <article key={p.nombre} className="border rounded-xl p-4 bg-white shadow-sm">
                        <img src={p.img} alt={p.nombre} className="w-full h-40 object-contain mb-3" />
                        <h3 className="font-semibold">{p.nombre}</h3>
                        <p className="text-gray-700">{p.precio}</p>
                        <button className="mt-3 text-sm border px-3 py-1 rounded-lg hover:bg-gray-50">Ver más</button>
                    </article>
                ))}
            </div>
        </main>
    );
}
