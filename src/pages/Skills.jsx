function Skills() {
    return (
        <main className="max-w-6x1 mx-auto min-h-screen px-8 py-16 bg-zinc-900">
            <h1 className="text-3xl font-bold mb-10 text-zinc-100">Skills</h1>
            <section className="grid md:grid-cols-2 1g:grid-cols-3 gap-6 text-zinc-100">
                <article className="rounded-x1 border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-600 transition">
                    <h2>Frontend</h2>

                    <ul className="pl-5 list-disc space-y-1">
                        <li>React</li>
                        <li>JavaScript(ES6+)</li>
                        <li>HTML5</li>
                        <li>Tailwind CSS</li>
                        <li>TanStack Query</li>
                        <li>React-Router V6</li> 
                    </ul>
                </article>

                <article className="rounded-x1 border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-600 transition">
                    <h3>Backend</h3>

                    <ul className="pl-5 list-disc space-y-1">
                        <li>Node.js</li>
                        <li>Express.js</li>
                    </ul>
                </article>

                <article className="rounded-x1 border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-600 transition">
                    <h3>Database</h3>

                    <ul className="pl-5 list-disc space-y-1">
                        <li>PostgreSQL</li>
                        <li>Supabase</li>
                        <li>Row Level Security (RLS)</li>
                    </ul>
                </article>

                <article className="rounded-x1 border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-600 transition">
                    <h3>Auhtentication</h3>

                    <ul className="pl-5 list-disc space-y-1">
                        <li>Supabase Auth</li>
                        <li>Google OAuth</li>
                        <li>Github OAuth</li> 
                    </ul>
                </article>

                <article className="rounded-x1 border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-600 transition">
                    <h4>Tools</h4>

                    <ul className="pl-5 list-disc space-y-1">
                        <li>Git</li>
                        <li>Github</li>
                        <li>VS Code</li>
                        <li>Vite</li>
                    </ul>
                </article>
            </section>
        </main>
    )
}

export default Skills