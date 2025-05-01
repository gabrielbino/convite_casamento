import React from 'react';

export default function Location() {
  return (
    <section className="px-4 py-12 text-center bg-white">
      <h2 className="text-2xl md:text-3xl font-serif tracking-wide mb-6 text-[#354B25]">CERIMÔNIA</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-lg leading-relaxed">
        Gostaríamos muito de contar com sua presença no momento em que nossa união será abençoada diante de Deus! Dia 07 de junho de 2025, às 16h. Chácara Timoneiro - Serra, Espírito Santo.
      </p>

      <div className="flex justify-center">
        <iframe
          title="Localização da cerimônia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.970266328791!2d-40.215748424765174!3d-20.218556581235685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81d7caa9386e1%3A0xdfdbbdd8e53d3c48!2sCh%C3%A1cara%20Timoneiro!5e0!3m2!1spt-BR!2sbr!4v1745972445224!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg w-full max-w-3xl shadow-md"
        ></iframe>
      </div>
    </section>
  );
}
