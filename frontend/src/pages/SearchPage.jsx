import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaBook, FaNewspaper, FaScroll, FaCog, FaSun, FaMoon } from "react-icons/fa";

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [results, setResults] = useState([
        { id: 1, title: "Livro de Matemática", category: "book", image: "https://placehold.co/800?text=Sem+Calculos+Hoje&font=roboto" },
        { id: 2, title: "Artigo sobre Física", category: "article", image: "https://placehold.co/800?text=Buracos+Negros&font=roboto" },
        { id: 3, title: "Revista de Ciência", category: "magazine", image: "https://placehold.co/800?text=Hello+World&font=roboto" },
    ]);
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const handleSearch = () => {
        console.log("Pesquisa por:", searchQuery);
    };

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center py-10 px-4">
            {/* Header */}
            <div className="w-full flex justify-between items-center px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Pesquisar</h1>
                <div className="flex items-center space-x-4">
                    {/* Botão Admin */}
                    <button className="text-gray-600 dark:text-gray-400">
                        <FaCog size={20} />
                    </button>
                    {/* Toggle Dark/Light Mode */}
                    <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-400">
                        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>
                </div>
            </div>

            {/* Barra de Pesquisa */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-3xl"
            >
                <div className="flex items-center bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2 mx-auto">
                    <FaSearch className="text-gray-500 dark:text-gray-400 text-xl mr-2" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Pesquise por livros, artigos ou revistas..."
                        className="flex-grow bg-transparent text-gray-700 dark:text-gray-300 outline-none"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                    >
                        Pesquisar
                    </button>
                </div>
            </motion.div>

            {/* Filtros */}
            <div className="mt-6 flex space-x-4">
                {[{ label: "Todos", value: "all", icon: null }, { label: "Livros", value: "book", icon: FaBook }, { label: "Artigos", value: "article", icon: FaNewspaper }, { label: "Revistas", value: "magazine", icon: FaScroll }].map((category) => (
                    <button
                        key={category.value}
                        onClick={() => setActiveCategory(category.value)}
                        className={`flex items-center px-4 py-2 rounded-full text-sm ${activeCategory === category.value ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"} hover:bg-blue-400 hover:text-white transition`}
                    >
                        {category.icon && <category.icon className="mr-2 text-lg" />}
                        {category.label}
                    </button>
                ))}
            </div>

            {/* Resultados */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-5xl"
            >
                {results.filter((item) => activeCategory === "all" || item.category === activeCategory).map((item) => (
                    <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col items-center"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-40 object-cover rounded-md"
                        />
                        <h3 className="mt-4 font-semibold text-lg text-center">{item.title}</h3>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                            Baixar
                        </button>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default SearchPage;
