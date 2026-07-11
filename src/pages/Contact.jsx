function Contact() {
    return (
        <main className="max-w-6x1 mx-auto min-h-screen px-8 py-16 bg-zinc-900">
            <h1 className="text-3x1 font-bold text-zinc-100 mb-8">
                Contact
            </h1>

            <section className="rounded-x1 border border-zinc-800 bg-zinc-950 p-6 space-y-5">
                <p>
                    <a href="mailto:singhsonu89860@gmail.com" className="text-zinc-300 hover:text-white">singhsonu89860@gmail.com</a>
                </p>

                <p>
                    <a href="tel:+917643055134" className="text-zinc-300 hover:text-white">+91 7643055134</a>
                </p>

                <p>
                    <a href="https://github.com/singhsonu-dot/crm-dashboard" target="_blank" className="text-zinc-300 hover:text-white">Github</a>
                </p>
            </section>
        </main>
    )
}

export default Contact