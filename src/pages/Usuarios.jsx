const users = [
    { id: 1, name: "Sergio Ulises Lillingston Pérez", role: "Administrador", email: "asesor@udgvirtual.mx" },
    { id: 2, name: "José Alberto Rodriguez Lara", role: "Desarrollador" },
    { id: 3, name: "Mauricio Daiki Rascon Yamamoto", role: "Desarrollador" },
    { id: 4, name: "Raymundo Chavarria Serratos", role: "Desarrollador" },
];

export default function Usuarios() {
    return (
        <section className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Usuarios</h1>
            <ul className="grid md:grid-cols-2 gap-4">
                {users.map(u => (
                    <li key={u.id} className="border rounded-xl p-4">
                        <p className="font-semibold">{u.name}</p>
                        <p className="text-sm text-gray-700">{u.role}</p>
                        {u.email && <p className="text-sm text-gray-700">{u.email}</p>}
                    </li>
                ))}
            </ul>
        </section>
    );
}
