const Navbar = () => {
    return (
        <header className="bg-white dark:bg-gray-900">
            <div className="min-w-full mx-auto px-2 py-2">
                <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">User Management</h1>
                        <span className="bg-gray-100 text-gray-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            Made With Next And Spring Boot
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            className="inline-block rounded bg-slate-200 px-5 py-3 text-sm font-medium text-black transition hover:bg-slate-400 focus:outline-none focus:ring"
                            type="button"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Navbar