export default function SocialBar() {
    const links = [
        { name: 'Instagram', url: 'https://instagram.com/mauriciodaiki' },
        { name: 'Facebook', url: 'https://facebook.com/mauriciodaiki' },
        { name: 'TikTok', url: 'https://tiktok.com/@mauriciodaiki' },
        { name: 'YouTube', url: 'https://youtube.com/@mauriciodaiki' },
        { name: 'LinkedIn', url: 'https://linkedin.com/company/mauriciodaiki' },
    ];
    return (
        <nav aria-label="Accesos a redes sociales" className="social-bar">
            {links.map(l => (
                <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.name}
                </a>
            ))}
        </nav>
    );
}