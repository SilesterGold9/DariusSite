import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
            <h1 className="text-4xl font-bold text-red-500">404</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
                Página não encontrada.
            </p>
            <Link
                to="/"
                className="mt-4 text-blue-500 hover:underline"
            >
                Voltar para a página inicial
            </Link>
        </div>
    );
};

export default NotFound;
