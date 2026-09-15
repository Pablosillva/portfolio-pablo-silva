import { Mail, Code2, Link2, ArrowUpRight } from "lucide-react";
const links = [
    {
        icon: Mail,
        label: "Email",
        value: "ptox.cs@hotmail.com",
        href: "mailto:ptox.cs@hotmail.com",
    },
    {
        icon: Code2,
        label: "GitHub",
        value: "github.com/Pablosillva",
        href: "https://github.com/Pablosillva",
    },
    {
        icon: Link2,
        label: "LinkedIn",
        value: "linkedin.com/in/pablo-duarte",
        href: "https://www.linkedin.com/in/pablo-duarte-86a54321a/",
    },
];

function Contact() {
    return (
        <section id="contact" className="max-w-[1320px] mx-auto px-5 md:px-14 py-25 md:py-40">
            <div className="max-w-[700px] mb-14 md:mb-20">
                <p className="mb-6 text-[var(--primary)] text-sm font-semibold uppercase tracking-[2px]">
                    Contato
                </p>

                <h2 className="text-4xl md:text-6xl leading-[1.05] tracking-tighter text-[var(--text-primary)]">
                    Vamos conversar
                    <span className="text-[var(--text-secondary)]"> sobre oportunidades.</span>
                </h2>

                <p className="mt-6 text-[var(--text-secondary)] text-lg leading-relaxed">
                    Estou em transição de carreira para desenvolvedor Full Stack e aberto
                    a novas oportunidades. Fico feliz em conversar.
                </p>
            </div>

            <div className="flex flex-col gap-4 max-w-[600px]">
                {links.map((link) => {
                    const Icon = link.icon;
                    return (

                        <a key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-6 py-5 bg-[var(--surface)] border border-[var(--border)] rounded-lg no-underline transition-colors duration-200 hover:border-[var(--primary)]">

                            <div className="flex items-center gap-4">
                                <Icon size={20} className="text-[var(--primary)]" />
                                <div>
                                    <p className="text-xs text-[var(--text-secondary)] mb-0.5">
                                        {link.label}
                                    </p>
                                    <p className="text-sm text-[var(--text-primary)]">
                                        {link.value}
                                    </p>
                                </div>
                            </div>

                            <ArrowUpRight size={18} className="text-[var(--text-secondary)]" />
                        </a>
                    );
                })}
            </div>
        </section>
    );
}

export default Contact;