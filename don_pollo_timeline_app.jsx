import React from "react";

// Don Pollo - Timeline App
// Single-file React component. Paste this into a React project (Create React App, Vite, Next.js page)
// Tailwind CSS utility classes are used for styling. If you don't have Tailwind set up,
// either set it up or replace classes with your own CSS.

export default function DonPolloApp() {
  const heroImage = "https://images.openai.com/thumbnails/url/tuMJJXicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw7OLAt1TkvKrIhMdfEq9QoMLTFNTk0pD4wMtHAuykksyS7wCQ2NMshx886w8PVxSSuw8DK1MEg3NfRUKwYA4ukpCA";
  const carousel = [
    "https://images.openai.com/thumbnails/url/s2MwWHicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw7y83AvLPFzD0wsy43ycnQ2TErPzPB1Ns_2cDEwCizJrnQMKPFNdvJ2zq0KCvGJzDZLzA0McavMdsmMclQrBgATvynI",
    "https://images.openai.com/thumbnails/url/HOnOnXicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw729SxyN05JzM3PqvLIM3DLDvXwKEsyLjN3rvAoLfYvKcyzzHQxcTKr9E-2MNNNdvJxS4yvdCkycqlSKwYAzTEpGA",
    "https://images.openai.com/thumbnails/url/Rl4jNXicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw5OKigLzjcwyvFw9QuOco-sNMv1CwrUDTB3Di831C3w8Un0dc4JT_LSNTSMTHX0MPA19In3C7IoCTHPSlcrBgD1PihT",
  ];

  const timeline = [
    {
      year: "2021–2022",
      title: "Inicios virales",
      body:
        "Comenzó subiendo videos cortos y absurdos donde comía pollo en su auto, reaccionaba a notificaciones y acumuló millones de vistas. Fue adoptando apodos y stickers en redes.",
    },
    {
      year: "2023",
      title: "Emisión musical",
      body: "Lanzó su primer sencillo 'El Que Quiera Perder Su Tiempo' junto a su pareja Vanessa Acosta, incursionando en la música y el entretenimiento fuera de TikTok.",
    },
    {
      year: "2025 (jun)",
      title: "Colaboración con KFC España",
      body:
        "Colaboró con KFC España en un menú de edición limitada y realizó una gira promocional por Barcelona, Valencia y Madrid, donde su presencia generó grandes aglomeraciones.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-yellow-100 text-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center gap-4 mb-8">
          <img src={heroImage} alt="Don Pollo" className="w-28 h-28 rounded-full object-cover shadow-lg" />
          <div>
            <h1 className="text-3xl font-extrabold">Don Pollo — Agustín Calderón Silverio</h1>
            <p className="text-sm text-gray-700 mt-1">Influencer dominicano — fenómeno viral de humor absurdo y colaboraciones internacionales</p>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <article className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-3">Resumen</h2>
            <p className="text-gray-800 leading-relaxed">
              Don Pollo es un creador de contenido conocido por su estilo espontáneo y humor absurdo. Se hizo viral en TikTok con videos de él comiendo pollo y reaccionando exageradamente a
              notificaciones. Con el tiempo su marca creció hasta colaborar con grandes empresas y realizar giras promocionales.
            </p>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Impacto cultural</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Ejemplo de cómo la autenticidad puede generar alcance global.</li>
                <li>Transformación de contenido casero en oportunidades comerciales.</li>
                <li>Conciencia sobre cómo los memes pueden convertir a cualquiera en una figura pública.</li>
              </ul>
            </div>
          </article>

          <aside className="bg-white p-4 rounded-2xl shadow-md flex flex-col gap-3">
            <div>
              <h4 className="font-bold">Datos rápidos</h4>
              <dl className="text-sm text-gray-700 mt-2">
                <dt className="font-semibold">Nombre real</dt>
                <dd>Agustín Calderón Silverio</dd>
                <dt className="font-semibold mt-2">Plataforma</dt>
                <dd>TikTok (principal), Instagram, YouTube</dd>
                <dt className="font-semibold mt-2">Apodo</dt>
                <dd>King of Ohio</dd>
              </dl>
            </div>

            <div className="mt-2">
              <h4 className="font-bold">¿Quieres exportar?</h4>
              <p className="text-sm text-gray-600">Puedes exportar esta vista a PDF con la impresión del navegador o integrarla en una página estática.</p>
            </div>
          </aside>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Línea de tiempo</h2>

          <div className="relative border-l-2 border-yellow-300 pl-6">
            {timeline.map((t, i) => (
              <div key={i} className="mb-8 relative">
                <div className="absolute -left-7 top-0 bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center shadow-md text-white font-bold">{t.year.split(' ')[0]}</div>
                <div className="ml-2">
                  <h3 className="font-semibold text-lg">{t.title}</h3>
                  <p className="text-gray-700 mt-1">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Galería</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {carousel.map((src, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img src={src} alt={`imagen-${i}`} className="w-full h-48 object-cover" />
                <div className="p-3">
                  <p className="text-sm text-gray-700">Imagen representativa del fenómeno Don Pollo y su cobertura mediática.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-sm text-gray-600 py-6">
          <p>App de demostración — datos resumidos y recopilados para uso informativo.</p>
          <p className="mt-2">Puedes editar el contenido en el objeto <code>timeline</code> o la galería <code>carousel</code>.</p>
        </footer>
      </div>
    </div>
  );
}
