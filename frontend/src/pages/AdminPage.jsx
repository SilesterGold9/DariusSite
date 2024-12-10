import React from "react";
import { AiOutlineFileAdd, AiOutlineFolder, AiOutlineBarChart } from "react-icons/ai";
import { MdOutlineArticle } from "react-icons/md";

const AdminPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
            {/* Cabeçalho */}
            <header className="bg-purple-700 text-white py-4 shadow">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">Administração</h1>
                    <button className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-200 transition">
                        Logout
                    </button>
                </div>
            </header>

            {/* Conteúdo Principal */}
            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card: Gerenciar Livros */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <AiOutlineFolder className="text-4xl text-purple-600 mb-4" />
                        <h2 className="text-lg font-semibold">Gerenciar Livros</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Adicione, edite ou exclua livros disponíveis no site.
                        </p>
                        <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
                            Acessar
                        </button>
                    </div>

                    {/* Card: Gerenciar Artigos */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <MdOutlineArticle className="text-4xl text-purple-600 mb-4" />
                        <h2 className="text-lg font-semibold">Gerenciar Artigos</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Escreva e gerencie artigos que serão publicados.
                        </p>
                        <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
                            Acessar
                        </button>
                    </div>

                    {/* Card: Relatórios de Uso */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <AiOutlineBarChart className="text-4xl text-purple-600 mb-4" />
                        <h2 className="text-lg font-semibold">Relatórios de Uso</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Veja o espaço de armazenamento e o progresso do site.
                        </p>
                        <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
                            Acessar
                        </button>
                    </div>
                </div>

                {/* Seção de Upload */}
                <section className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4 flex items-center">
                        <AiOutlineFileAdd className="text-2xl text-purple-600 mr-2" />
                        Upload de Arquivos
                    </h2>
                    <form>
                        <div className="flex items-center space-x-4">
                            <input
                                type="file"
                                className="border border-gray-300 dark:border-gray-700 rounded px-4 py-2 w-full"
                                accept=".pdf"
                            />
                            <button
                                type="submit"
                                className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
                            >
                                Upload
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default AdminPage;
