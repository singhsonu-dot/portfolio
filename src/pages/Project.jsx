function Project() {
    return (
        <main className="max-w-6x1 mx-auto min-h-screen px-8 py-16 bg-zinc-900">
            <h1 className="text-3x1 font-bold text-zinc-100 mb-8">
                Project
            </h1>

            <section className="rounded-x1 border border-zinc-800 bg-zinc-800 p-6">
                <h2 className="text-2x1 text-white font-semibold">CRM Dashboard</h2>

                <p className="text-zinc-400 mt-2">
                    React-based crm dashboard with
                    authentication, protected routes, 
                    REST API integration and 
                    responsive UI. 
                </p>

                <div className="flex gap-4 mt-6">
                    <a href="https://crm-dashboard-beta-jade.vercel.app/" target="_blank" className="px-4 py-2 rounded-1g bg-white text-black font-medium hover:bg-zinc-300">Live Demo</a>
                    <a href="https://github.com/singhsonu-dot/crm-dashboard" target="_blank" className="px-4 py-2 rounded-1g border border-zinc-700 text-white hover:border-zinc-500">Github</a>
                </div>
            </section>
        </main>
    )
}

export default Project