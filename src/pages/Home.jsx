function Home() {
    return (
        <main className="max-w-6x1 mx-auto min-h-screen px-8 pt-32 bg-zinc-900">
            <h1 className="text-4x1 font-bold text-white mb-10">Home</h1>

            <section className="max-w-3x1">
                <p className="text-zinc-400 text-1g">
                     Hi, I'm
                </p>

                <h1 className="text-6x1 font-bold mt-2 text-white">
                     Sonu Kumar Singh
                </h1>

                <h2 className="text-3x1 text-zinc-300 mt-3">
                        Full Stack Developer 
                </h2>

                <div className="flex flex-wrap gap-3 mt-6 text-white">
                    <span className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-sm">
                        React
                    </span>

                    <span className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-sm">
                        Node.js 
                    </span>

                    <span className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-sm">
                        Express.js  
                    </span>

                    <span className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-sm">
                        Tailwind CSS
                    </span>

                    <span className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-sm">
                        PostgreSQL 
                    </span>

                    <span className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-sm">
                        Supabase
                    </span>
                </div>
                <p className="mt-6 leading-8 text-zinc-300">
                    Building production-ready full stack applications with React, Node.js,
                    Express, PostgreSQL and Supabase. Experienced with authentication,
                    multi-tenant architecture, REST APIs and secure CRUD workflows. 
                </p>
            </section>

            <section className="flex gap-5 mt-10">
                <a href="/Sonu_Kumar_Singh_Resume.pdf" target="_blank" className="px-6 py-3 rounded-1g bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white transition">Download Resume</a>
            </section>
        </main>
    )
}

export default Home