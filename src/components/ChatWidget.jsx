import { useEffect } from 'react';

export default function ChatWidget() {
    useEffect(() => {
        if (window.__tawk_loaded__) return;
        var s1 = document.createElement('script');
        var s0 = document.getElementsByTagName('script')[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/68db6044b23a2219512239c1/1j6cf03ht';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
        window.__tawk_loaded__ = true;
    }, []);
    return null;
}