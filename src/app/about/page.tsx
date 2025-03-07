import React from "react";

import "../../styles/main-page.css";

const colaboradores = [
    {
        name: "Joaquín Giordano",
        github: "https://github.com/JoaquinGiordano",
        description: "Modo oscuro para la página",
    },
    {
        name: "Nicolás Fishman",
        github: "https://github.com/nicofishman",
        description: "Bug visual en el context menu",
    },
];

const AboutPage = () => {
    return (
        <div className="main-container">
            <div className="content-container">
                {/* Header */}
                <h1>Sobre esta App</h1>

                {/* Main Content */}
                <p className="mb-4 leading-relaxed">
                    Este proyecto es una iniciativa de código abierto creada por{" "}
                    <span className="font-bold">Nicolas Dembrowky</span>, estudiante de Ingeniería en Sistemas en la UTN
                    FRBA.
                    <br />
                    El propósito de esta aplicación es brindar a los estudiantes de cualquier carrera y universidad la
                    posibilidad de gestionar sus estudios de forma practica y comoda.
                </p>

                {/* Footer */}
                <p className="mt-6">
                    Si quieres conocer más sobre mis proyectos o ponerte en contacto conmigo, haz clic en el botón de
                    abajo para visitar mi{" "}
                    <a
                        href="https://www.linkedin.com/in/dembrowkynicolas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                        perfil de LinkedIn
                    </a>{" "}
                    o revisar mi{" "}
                    <a
                        href="https://dembrowky-nicolas-portfolioweb.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                        Portafolio Web
                    </a>
                    .
                </p>

                <a
                    href="https://www.linkedin.com/in/dembrowkynicolas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition mt-6 mx-6"
                >
                    Ver LinkedIn
                </a>

                <a
                    href="https://dembrowky-nicolas-portfolioweb.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition mt-6 mx-6"
                >
                    Ver Portafolio
                </a>

                <a
                    href="https://github.com/DDembro/CorrelatiAPP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition mt-6 mx-6"
                >
                    Ver en GitHub
                </a>
            </div>

            <div className="content-container my-6">
                <h1>Colaboradores</h1>

                <div className="flex flex-wrap">
                    {colaboradores.map((colab) => (
                        <div
                            key={colab.name}
                            className="p-4 m-3 bg-indigo-100 dark:bg-slate-800 shadow-lg rounded-lg max-w-xs mx-auto flex flex-col items-start space-y-2"
                        >
                            <div className="flex flex-wrap items-center w-full">
                                <p className="text-lg font-semibold mr-2">{colab.name}:</p>
                                <a
                                    href={colab.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                                >
                                    GitHub
                                </a>
                            </div>
                            <p>{colab.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
