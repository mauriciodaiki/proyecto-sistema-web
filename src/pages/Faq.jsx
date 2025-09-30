// src/pages/Faq.jsx
import { useLocation } from "react-router-dom";
import Giscus from "@giscus/react";

export default function Faq() {
    const location = useLocation();

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-xl font-semibold">Foro de Preguntas Frecuentes</h1>
            <p className="mt-2 mb-6 text-sm text-gray-300">
                Comparte tus dudas o respuestas. Este foro usa GitHub Discussions vía Giscus.
            </p>

            <Giscus
                key={location.pathname + location.hash}   // fuerza re-mount en HashRouter
                id="giscus-comments"
                repo="mauriciodaiki/proyecto-sistema-web"
                repoId="R_kgDOPzydrQ"
                category="Q&A"
                categoryId="DIC_kwDOPzydrc4CwD0y"

                /* Con HashRouter, usa 'url' o 'hash' para que no se quede en blanco */
                mapping="url"
                term="faq"              // opcional cuando mapping no sea 'pathname'
                strict="0"

                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme="preferred_color_scheme"
                lang="es"
                loading="lazy"
            />
        </div>
    );
}
