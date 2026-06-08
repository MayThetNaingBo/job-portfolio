<div className="contact-card mx-auto mt-16 flex max-w-3xl flex-col items-center justify-center gap-8 md:flex-row">
  {contacts.map((item) => (
    <a
      key={item.label}
      href={item.href}
      target={item.label === "Email" ? undefined : "_blank"}
      className="group flex items-center gap-3 text-lg font-semibold text-lg leading-8 text-slate-600 transition hover:text-cyan-600"
    >
      <span className="h-2 w-2 rounded-full bg-cyan-400 transition group-hover:scale-150" />
      {item.label}
      <ArrowUpRight
        size={18}
        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>
  ))}
</div>