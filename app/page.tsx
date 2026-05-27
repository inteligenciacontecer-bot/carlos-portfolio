// @ts-nocheck
'use client'

import React, { useState, useEffect, useRef, useContext, createContext } from 'react'

/* ================================================================
   Carlos Valencia Durán — Portfolio
   Next.js 'use client' · converted from browser-only JSX
   ================================================================ */

/* ---- Color helpers ---- */
function hexToRgb(hex) {
  hex = hex.replace('#', '')
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('')
  const n = parseInt(hex, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}
function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2, '0')).join('')
}
function shade(hex, amt) {
  const [r, g, b] = hexToRgb(hex)
  return rgbToHex(r + amt, g + amt, b + amt)
}
function mix(hexA, hexB, t) {
  const a = hexToRgb(hexA), b = hexToRgb(hexB)
  return rgbToHex(a[0] * (1 - t) + b[0] * t, a[1] * (1 - t) + b[1] * t, a[2] * (1 - t) + b[2] * t)
}
function hexa(hex, alpha) {
  const [r, g, b] = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/* ================================================================
   CV CONTENT (bilingual)
   ================================================================ */
const CV_CONTENT = {
  es: {
    nav: {
      profile: 'Perfil', experience: 'Experiencia', coverage: 'Coberturas',
      debates: 'Debates', skills: 'Habilidades', interviews: 'Entrevistas',
      awards: 'Premios', education: 'Educación', projects: 'Proyectos', contact: 'Contacto',
    },
    hero: {
      tag: 'Edición 2026 · Vol. 06',
      issue: 'N° 001 / Periodista Independiente',
      first: 'Carlos', last: 'Valencia',
      roles: ['Periodista', 'Director de Medios Digitales', 'Consultor en Comunicación', 'Media Tech'],
      location: 'Heredia, Costa Rica',
      meta1: 'Fundador', meta1v: 'Acontecer.co.cr',
      meta2: 'Miembro activo', meta2v: 'COLPER',
      meta3: 'Reconocido', meta3v: 'Premio Alberto Martén · 2023',
      scroll: 'Desplazar para leer',
    },
    ticker: [
      'Acontecer.co.cr', 'Cum Laude Probatus', 'Budapest · Hungría 2026',
      'Premio Alberto Martén 2023', 'Director General', 'SICOP',
      'Concacaf', 'Selección Nacional CR', 'Next.js / Headless', 'Mención Honorífica',
    ],
    profile: {
      num: '01 / Perfil',
      title: ['Periodismo,', <em key="k1">tecnología</em>, ' y estrategia ', <em key="k2">en un mismo nombre</em>, '.'],
      quote: ['Construyo medios y narrativas con la misma rigurosidad con la que ', <span className="hl" key="k3">despliego servidores</span>, '.'],
      p1: ['Soy ', <strong key="k4">periodista galardonado</strong>, ' con Mención Honorífica en el ', <strong key="k5">Premio Alberto Martén Chavarría 2023</strong>, ' y graduado de Bachillerato con la distinción ', <strong key="k6">Cum Laude Probatus</strong>, '.'],
      p2: ['A los 20 años fundé y dirijo ', <strong key="k7">Acontecer.co.cr</strong>, ', un medio de comunicación digital posicionado en Costa Rica gracias a la implementación de infraestructuras tecnológicas avanzadas, automatización y una sólida línea de coberturas nacionales e internacionales.'],
      p3: ['Más de ', <strong key="k8">7 años</strong>, ' en comunicación política y corporativa: coordinación de eventos, conferencias de prensa, asesoría estratégica y manejo de crisis para clientes del sector público y privado.'],
      p4: ['Como emprendedor registrado como PYME ante el MEIC, especializado en ', <strong key="k9">contratación pública</strong>, ' (SICOP / Ministerio de Hacienda) y en el ', <strong key="k10">liderazgo de salas de redacción</strong>, ' bajo entornos de alta presión informativa.'],
      cardLabel: 'Afiliación oficial',
      cardValue: 'Colegio de Periodistas de Costa Rica (COLPER)',
    },
    stats: {
      num: '02 / Cifras',
      title: ['En ', <em key="k11">números</em>, '.'],
      subtitle: 'Una trayectoria medida en coberturas, equipos liderados y plataformas desplegadas.',
      items: [
        { num: 7, suffix: '+', label: 'Años en comunicación política y corporativa' },
        { num: 3, suffix: '', label: 'Procesos electorales cubiertos en Costa Rica' },
        { num: 3, suffix: '', label: 'Continentes cubiertos: América, Europa y Reino Unido' },
        { num: 200, suffix: '+', label: 'Entrevistas a políticos, ministros y candidatos presidenciales' },
        { num: 100, suffix: '%', label: 'Migración técnica del medio Acontecer.co.cr' },
        { num: 6, suffix: '', label: 'Certificaciones oficiales de Google' },
        { num: 150, suffix: 'K+', label: 'Seguidores en redes del medio Acontecer.co.cr' },
        { num: 1, suffix: '', label: 'Mención Honorífica · Premio Alberto Martén 2023' },
      ],
    },
    experience: {
      num: '03 / Experiencia',
      title: ['Trayectoria ', <em key="k12">profesional</em>, '.'],
      items: [
        {
          date: '2020 — Actualidad', current: true,
          title: 'Acontecer.co.cr', role: 'Fundador y Director General',
          bullets: [
            ['Gestión de sala de redacción: ', <strong key="k13">dirección editorial</strong>, ', coordinación de reporteros, planificación de coberturas diarias, fotografía, diseño gráfico y edición general.'],
            ['Cobertura de procesos electorales clave: ', <strong key="k14">Presidenciales 2022</strong>, ', ', <strong key="k15">Municipales 2024</strong>, ' y ', <strong key="k16">Presidenciales 2026</strong>, '.'],
            ['Corresponsal enviado a ', <strong key="k17">Budapest, Hungría</strong>, ' para las Elecciones de 2026 con acreditación oficial ante la Nemzeti Választási Iroda.'],
            ['Coberturas deportivas con el medio: seguimiento de ', <strong key="k18">La Sele</strong>, ' y torneos oficiales ', <strong key="k19">CONCACAF</strong>, '.'],
            ['Organización de ', <strong key="k18b">debates electorales</strong>, ' entre candidatos y programas especiales en los procesos 2022, 2024 (Municipales, en alianza con la ', <strong key="k18c">UIA</strong>, ') y 2026.'],
            ['Desarrollo y migración completa del medio bajo ', <strong key="k20">Next.js, arquitecturas headless, Vercel y xCloud</strong>, '.'],
          ],
        },
        {
          date: '2024 — Actualidad', current: true,
          title: 'Bufete Abogado Joseph Rivera', role: 'Director de Comunicación · Gestión de Prensa Estratégica',
          bullets: [
            ['Estrategia de ', <strong key="k21">relaciones públicas</strong>, ', posicionamiento institucional y manejo de crisis.'],
            ['Diseño y despliegue desde cero del sitio ', <strong key="k22">abogadojosephrivera.com</strong>, ' (Next.js / Headless).'],
            ['Vocería ante medios nacionales e internacionales en casos mediáticos como ', <strong key="k23">Nadia Peraza</strong>, ' y ', <strong key="k24">Junieysis Merlo</strong>, '.'],
            ['Estrategia de contenido audiovisual para formato corto (TikTok) con guiones especializados.'],
          ],
        },
        {
          date: '2022 — Actualidad', current: true,
          title: 'Consultor Independiente', role: 'Agencia de Comunicación Freelance',
          bullets: [
            ['Servicios autónomos de consultoría en comunicación, desarrollo web y producción audiovisual.'],
            ['Operación bajo ', <strong key="k25">registro formal de PYME ante el MEIC</strong>, '.'],
            ['Gestión directa de pliegos y ofertas económicas en ', <strong key="k26">SICOP</strong>, ' para Ministerios e instituciones del Estado.'],
            ['Trabajos de comunicación estratégica para clientes adicionales del sector legal, incluyendo al ', <strong key="k26b">Abogado Boris Molina</strong>, '.'],
            ['Gestión y producción de ', <strong key="k26c">eventos, conferencias de prensa y actividades públicas</strong>, ' para diversos clientes del sector público y privado.'],
          ],
        },
        {
          date: '2023 — 2024', current: false,
          title: 'Suppcenter Global Services / Credimall.cr', role: 'Community Manager · Apoyo en Comunicación',
          bullets: [
            ['Estrategia de comunicación digital y administración de comunidades virtuales.'],
            ['Soporte en flujos informativos externos de la marca.'],
          ],
        },
      ],
    },
    acontecer: {
      num: '04 / Proyecto Insignia',
      title: ['El medio que construí ', <em key="k27">desde cero</em>, '.'],
      tag: 'Medio digital · Costa Rica',
      desc1: 'Acontecer.co.cr es un medio de comunicación digital costarricense fundado en 2020, posicionado mediante infraestructura tecnológica avanzada, automatización y una línea editorial sólida.',
      desc2: 'La plataforma fue migrada y desarrollada bajo Next.js, arquitecturas headless, Vercel y xCloud, garantizando estabilidad y velocidad de carga ante picos masivos de tráfico durante coberturas electorales.',
      stats: [
        { v: '2020', l: 'Año de fundación' }, { v: '150K+', l: 'Seguidores en redes' },
        { v: 'Next.js', l: 'Stack técnico' }, { v: '24/7', l: 'Cobertura noticiosa' },
      ],
      cta: 'Visitar acontecer.co.cr',
      mockHeadline: 'Corresponsalía en Budapest: la cobertura costarricense de las elecciones húngaras 2026',
      mockSub: 'Internacional · Reportaje especial',
      mockCats: ['Portada', 'Política', 'Internacional', 'Deportes', 'Tecnología', 'Opinión'],
      mockItems: [
        { cat: 'Política', t: 'Elecciones Municipales 2024: el análisis cantón por cantón' },
        { cat: 'Deportes', t: 'La Sele rumbo a la Concacaf: lo que vimos en cancha' },
        { cat: 'Nacional', t: 'Cobertura especial: proceso electoral Costa Rica 2026' },
      ],
    },
    coverage: {
      num: '05 / Coberturas',
      title: ['En el ', <em key="k28">terreno</em>, '.'],
      subtitle: 'Despliegue periodístico en procesos electorales nacionales e internacionales, eventos deportivos de la Premier League y casos judiciales de altísimo perfil mediático.',
      items: [
        { span: 7, photo: '/assets/photos/budapest.jpeg', flag: '🇭🇺 HU', place: 'Internacional · Budapest', title: 'Elecciones de Hungría 2026', desc: 'Corresponsal enviado a Budapest con acreditación oficial ante la Nemzeti Választási Iroda. Cobertura desde el sitio durante las elecciones de 2026 que dieron la victoria a Péter Magyar y su partido Tisza frente al oficialismo de Fidesz.', meta: ['Budapest', 'Fidesz', 'Tisza', 'Péter Magyar', 'Acreditación NVI'], accent: '#22c55e' },
        { span: 5, photo: '/assets/photos/anfield.jpeg', flag: '🇬🇧 UK', place: 'Internacional · Liverpool', title: 'Cobertura desde Anfield', desc: 'Cobertura desde Anfield, casa del Liverpool FC en Inglaterra, sobre la Premier League. Trabajo de campo internacional en uno de los estadios más emblemáticos del fútbol mundial.', meta: ['Anfield', 'Liverpool FC', 'Premier League'], accent: '#ef4444' },
        { span: 6, photo: '/assets/photos/villalta-2022.jpeg', flag: '🇨🇷 CR', place: 'Nacional · Plaza pública', title: 'Elecciones Presidenciales 2022', desc: 'Cobertura en sitio del proceso electoral 2022. Trabajo de campo en plazas públicas y giras de campaña de los principales candidatos presidenciales, entre ellos José María Villalta del Frente Amplio.', meta: ['TSE', 'Campaña 2022', 'Trabajo de campo'], accent: '#f59e0b' },
        { span: 6, photo: '/assets/photos/laura-fernandez.jpeg', flag: '🇨🇷 CR', place: 'Nacional · Tarima de victoria', title: 'Elecciones Presidenciales 2026', desc: 'Cobertura en vivo de la noche electoral 2026, incluyendo la grabación desde la tarima de victoria de Laura Fernández y la transmisión del momento de continuidad política del oficialismo.', meta: ['TSE', 'Laura Fernández', 'Victoria 2026', 'En vivo'], accent: '#22c55e' },
        { span: 6, flag: '⚖ JUDICIAL', place: 'Casos mediáticos', illustration: 'legal', title: 'Casos Nadia Peraza · Junieysis Merlo', desc: 'Coordinación de prensa y vocería en casos judiciales de altísimo perfil mediático y trascendencia social, junto al Bufete Joseph Rivera.', meta: ['Vocería', 'Crisis', 'Medios nacionales e internacionales'], accent: '#22c55e' },
        { span: 6, flag: '⚽ CONCACAF', place: 'Deportes', illustration: 'football', title: 'La Sele · Torneos CONCACAF', desc: 'Coberturas deportivas con el medio Acontecer.co.cr: seguimiento de la Selección Nacional de Costa Rica y torneos oficiales de clubes y selecciones CONCACAF.', meta: ['Selección de Costa Rica', 'Concacaf', 'Clubes oficiales'], accent: '#ef4444' },
      ],
    },
    debates: {
      num: '06 / Producción electoral',
      title: ['Debates y ', <em key="k200">programas</em>, ' electorales.'],
      subtitle: 'Organización, moderación y producción de debates entre candidatos y programas especiales en tres procesos electorales consecutivos.',
      feature: { photo: '/assets/photos/debate-heredia.jpeg', cap: 'Debate alcaldías · Heredia 2024 · alianza con UIA' },
      items: [
        { year: '2022', title: 'Debates entre candidatos a diputados', desc: 'Organización y moderación de debates entre candidatos a diputados de cara a las Elecciones Legislativas 2022, con amplia recepción y discusión pública.', tags: ['Diputados', 'Moderación', 'Legislativas'] },
        { year: '2024', title: 'Debates entre candidatos a alcaldías · UIA', desc: 'Organización de debates muy exitosos entre candidatos a alcaldías en alianza con la Universidad Internacional de las Américas (UIA) durante las Elecciones Municipales 2024.', tags: ['Alcaldías', 'UIA', 'Municipales'], featured: true },
        { year: '2026', title: 'Debates a diputados · Programas electorales', desc: 'Repetición del formato de debates a candidatos a diputados para el ciclo 2026, junto a programas electorales especiales con alta audiencia durante el proceso presidencial.', tags: ['Diputados', 'Programas electorales', 'Presidenciales'] },
      ],
    },
    skills: {
      num: '07 / Stack',
      title: ['Habilidades ', <em key="k29">técnicas</em>, '.'],
      items: [
        { icon: '▤', title: 'Contratación Pública', desc: 'Experiencia como emprendedor registrado como PYME ante el MEIC. Dominio de SICOP y plataformas del Ministerio de Hacienda (ATV, facturación electrónica) aplicado a la formulación y ejecución de ofertas institucionales.', tags: ['SICOP', 'Hacienda', 'ATV', 'PYME-MEIC'] },
        { icon: '$_', title: 'SysAdmin & CLI', desc: 'Configuración y mantenimiento de servidores VPS Linux (32GB+ RAM). Operación en CMD y PowerShell para automatización, scripts y gestión de entornos.', tags: ['Linux VPS', 'PowerShell', 'CMD', 'Bash'] },
        { icon: '</>', title: 'Desarrollo Web', desc: 'Despliegue, migración y desarrollo de plataformas informativas complejas: Next.js, arquitecturas headless, Vercel y xCloud.', tags: ['Next.js', 'Headless', 'Vercel', 'xCloud'] },
        { icon: '◉', title: 'Producción Audiovisual', desc: 'Equipo profesional propio: cámaras Canon XA60, microfonía inalámbrica DJI y cámaras Nikon DSLR para coberturas de campo.', tags: ['Canon XA60', 'DJI', 'Nikon DSLR'] },
        { icon: '✶', title: 'Diseño & UI/UX', desc: 'Dominio avanzado de Adobe Photoshop, Creative Suite (Premiere, DaVinci Resolve), Canva y Figma.', tags: ['Photoshop', 'Premiere', 'DaVinci', 'Figma'] },
        { icon: '⚡', title: 'Automatización & IA', desc: 'Diseño de flujos de trabajo y bots a medida (WhatsApp API). Uso experto de sistemas generativos: ChatGPT, Midjourney, RunwayML.', tags: ['WhatsApp API', 'ChatGPT', 'Midjourney', 'RunwayML'] },
        { icon: '↑', title: 'SEO Técnico', desc: 'Optimización de robots.txt, gestión de subdominios/CMS y estrategias de escalabilidad de autoridad de dominio.', tags: ['SE Ranking', 'Rank Math', 'robots.txt', 'Subdominios'] },
        { icon: '▶', title: 'Dirección Editorial', desc: 'Liderazgo y coordinación de salas de redacción: supervisión editorial, asignación de pautas y edición bajo alta presión informativa.', tags: ['Newsroom', 'Edición', 'Pautas', 'Crisis'] },
        { icon: '◐', title: 'Comunicación Política', desc: '7 años en comunicación política y corporativa: eventos, conferencias de prensa y asesoría estratégica para sector público y privado.', tags: ['Vocería', 'RR.PP.', 'Crisis', 'Asesoría'] },
      ],
    },
    interviews: {
      num: '08 / Entrevistas',
      title: ['Voces de ', <em key="k30">primer orden</em>, '.'],
      subtitle: 'Más de 200 entrevistas a figuras políticas, ministros, expresidentes y candidatos a la Presidencia de Costa Rica. Una selección curada de las conversaciones más representativas.',
      items: [
        { initials: 'RC', photo: '/assets/photos/rodrigo-chaves.jpeg', name: 'Rodrigo Chaves', role: 'Expresidente de la República', body: 'Entrevista al expresidente sobre la gestión presidencial, escenarios políticos y el rumbo de su administración en momentos clave del país.', topics: ['Política', 'Presidencia', 'Gobierno'] },
        { initials: 'LS', photo: '/assets/photos/luis-guillermo-solis.jpeg', name: 'Luis Guillermo Solís', role: 'Expresidente de Costa Rica', body: 'Entrevista en estudio de radio al expresidente sobre democracia, escenario regional y reflexiones sobre el sistema político costarricense.', topics: ['Expresidente', 'Democracia', 'Política regional'] },
        { initials: 'PC', photo: '/assets/photos/pilar-cisneros.jpeg', name: 'Pilar Cisneros', role: 'Diputada y periodista', body: 'Diálogo sobre la dinámica del Congreso, la relación Ejecutivo–Legislativo y la cobertura de los temas legislativos prioritarios.', topics: ['Asamblea Legislativa', 'Política'] },
        { initials: 'MM', photo: '/assets/photos/mary-munive.jpeg', name: 'Mary Munive', role: 'Ex Vicepresidenta de la República', body: 'Entrevista oficial en Casa Presidencial sobre salud pública, gestión de gobierno y los retos de la administración durante su período.', topics: ['Vicepresidencia', 'Salud'] },
        { initials: 'ND', photo: '/assets/photos/natalia-diaz.jpeg', name: 'Natalia Díaz', role: 'Política y ex jerarca', body: 'Conversación sobre la agenda pública, gestión institucional y el rol de los liderazgos políticos en el Costa Rica actual.', topics: ['Gobierno', 'Política', 'Gestión pública'] },
        { initials: 'PN', photo: '/assets/photos/paola-najera.jpeg', name: 'Paola Nájera', role: 'Política', body: 'Entrevista en pauta de actualidad política nacional sobre su trayectoria, propuestas y visión del escenario costarricense.', topics: ['Política', 'Actualidad'] },
        { initials: 'DS', photo: '/assets/photos/daniel-salas.jpeg', name: 'Daniel Salas', role: 'Ex Ministro de Salud · Pandemia COVID-19', body: 'Entrevistas durante la pandemia de COVID-19 sobre el manejo sanitario nacional, casos confirmados, fallecimientos y proyecciones epidemiológicas para Costa Rica.', topics: ['Salud', 'COVID-19', 'Pandemia'] },
        { initials: 'JF', photo: '/assets/photos/jose-maria-figueres.png', name: 'José María Figueres', role: 'Expresidente · Ex candidato presidencial', body: 'Análisis del panorama político-económico y reflexión histórica sobre liderazgo y democracia costarricense.', topics: ['Liberación Nacional', 'Historia'] },
        { initials: 'JV', photo: '/assets/photos/jose-maria-villalta.png', name: 'José María Villalta', role: 'Ex candidato presidencial y diputado', body: 'Entrevista sobre frente amplio, política social y la postura ideológica del bloque progresista nacional.', topics: ['Frente Amplio', 'Social'] },
        { initials: 'FA', photo: '/assets/photos/fabricio-alvarado.png', name: 'Fabricio Alvarado', role: 'Diputado y ex candidato presidencial', body: 'Diálogo sobre Nueva República, agenda valórica y el rol de los partidos cristianos en el sistema político.', topics: ['Nueva República', 'Valores'] },
        { initials: 'EF', photo: '/assets/photos/eli-feinzaig.png', name: 'Eli Feinzaig', role: 'Diputado y ex candidato presidencial', body: 'Conversación sobre economía, partidos minoritarios y la representación liberal en el Congreso costarricense.', topics: ['Economía', 'Partidos'] },
        { initials: 'DS2', photo: '/assets/photos/daniel-suchar.png', name: 'Daniel Suchar', role: 'Analista financiero internacional', body: 'Conversación sobre macroeconomía, mercados internacionales y proyecciones económicas para Costa Rica.', topics: ['Economía', 'Mercados'] },
      ],
    },
    awards: {
      num: '09 / Reconocimientos',
      title: ['Premios y ', <em key="k31">distinciones</em>, '.'],
      mainTag: 'Premio · 2023 · AMCHAM Costa Rica',
      mainTitle: 'Mención Honorífica · Premio Alberto Martén Chavarría',
      mainDesc: 'Reconocimiento otorgado por la Cámara de Comercio de Costa Rica–Estados Unidos (AMCHAM) en el marco del Premio Responsabilidad Social en Acción. Una de las distinciones más representativas del periodismo costarricense, entregada en 2023.',
      photo: '/assets/photos/amcham-award.jpeg',
      photoCaption: 'AMCHAM Costa Rica · 27 Aniversario · Premio Alberto Martén Chavarría 2023',
      otherTitle: 'Otras distinciones académicas',
      others: [
        { title: 'Cum Laude Probatus', sub: 'Distinción de graduación · UIA' },
        { title: 'Cuadro de Honor', sub: 'Bachillerato en Periodismo · UIA' },
        { title: 'Miembro COLPER', sub: 'Colegio de Periodistas de Costa Rica' },
        { title: 'Acreditación NVI', sub: 'Oficina Nacional de Elecciones · Hungría' },
      ],
    },
    education: {
      num: '10 / Formación',
      title: ['Educación y ', <em key="k32">certificaciones</em>, '.'],
      items: [
        { yr: '2024 — Actualidad', deg: 'Licenciatura en Comunicación y Mercadeo', uni: 'Universidad Latina de Costa Rica', honors: ['En curso'] },
        { yr: '2021 — 2024', deg: 'Bachillerato en Periodismo', uni: 'Universidad Internacional de las Américas (UIA)', honors: ['Cum Laude Probatus', 'Cuadro de Honor'] },
      ],
      certsLabel: 'Certificaciones oficiales',
      certsTitle: 'Google Ads · 6 áreas certificadas',
      certs: ['Search', 'Display', 'Video', 'Shopping', 'Apps', 'Measurement'],
    },
    projects: {
      num: '11 / Proyectos destacados',
      title: ['Trabajo en ', <em key="k33">vivo</em>, '.'],
      items: [
        { span: 7, kind: 'Medio digital propio', title: 'Acontecer.co.cr', desc: 'Medio de comunicación digital líder en Costa Rica. Fundado, dirigido y desplegado desde cero bajo Next.js, arquitectura headless, Vercel y xCloud.', link: 'acontecer.co.cr/autor/editor', url: 'https://acontecer.co.cr/autor/editor' },
        { span: 5, kind: 'Sitio institucional', title: 'AbogadoJosephRivera.com', desc: 'Diseño, desarrollo y despliegue desde cero del sitio oficial del bufete legal bajo arquitectura moderna optimizada para conversión.', link: 'abogadojosephrivera.com', url: 'https://abogadojosephrivera.com' },
        { span: 4, kind: 'Redes · TikTok', title: 'Joseph Rivera Abogado', desc: 'Estrategia de contenido audiovisual de formato corto: guiones, investigación y producción.', link: '@josephriveraabogado', url: 'https://www.tiktok.com/@josephriveraabogado' },
        { span: 4, kind: 'Redes · Instagram', title: 'Bufete Joseph Rivera', desc: 'Gestión de comunidad y posicionamiento institucional para la firma legal en Instagram.', link: '@abogadojosephrivera', url: 'https://www.instagram.com/abogadojosephrivera/' },
        { span: 4, kind: 'Perfil profesional', title: 'Perfil de autor', desc: 'Página de autor en Acontecer.co.cr con artículos firmados y coberturas especiales.', link: 'acontecer.co.cr/autor/editor', url: 'https://acontecer.co.cr/autor/editor' },
        { span: 6, kind: 'Producción audiovisual', title: 'Reportaje YouTube · 01', desc: 'Producción audiovisual de cobertura periodística publicada en YouTube.', link: 'youtube.com/watch?v=2958pRhXy4I', url: 'https://www.youtube.com/watch?v=2958pRhXy4I', video: true, videoId: '2958pRhXy4I' },
        { span: 6, kind: 'Producción audiovisual', title: 'Reportaje YouTube · 02', desc: 'Pieza audiovisual de campo con producción técnica completa (cámara, sonido y edición).', link: 'youtube.com/watch?v=DwDcYMUVM48', url: 'https://www.youtube.com/watch?v=DwDcYMUVM48', video: true, videoId: 'DwDcYMUVM48' },
      ],
    },
    contact: {
      num: '12 / Contacto',
      title: ['¿Hablamos?'],
      big: ['Disponible para ', <em key="k34">colaboraciones, asesorías</em>, ' y ', <em key="k35">nuevos proyectos</em>, '.'],
      items: [
        { lbl: 'Email · personal', val: 'cv0756294@gmail.com', url: 'mailto:cv0756294@gmail.com' },
        { lbl: 'Email · prensa', val: 'prensa@acontecer.co.cr', url: 'mailto:prensa@acontecer.co.cr' },
        { lbl: 'LinkedIn', val: 'Carlos Valencia Durán', url: 'https://cr.linkedin.com/in/carlos-valencia-durán-b87864205' },
        { lbl: 'Perfil autor', val: 'acontecer.co.cr/autor/editor', url: 'https://acontecer.co.cr/autor/editor' },
      ],
    },
  },
  en: {
    nav: {
      profile: 'Profile', experience: 'Experience', coverage: 'Coverage',
      debates: 'Debates', skills: 'Skills', interviews: 'Interviews',
      awards: 'Awards', education: 'Education', projects: 'Projects', contact: 'Contact',
    },
    hero: {
      tag: 'Edition 2026 · Vol. 06',
      issue: 'Issue 001 / Independent Journalist',
      first: 'Carlos', last: 'Valencia',
      roles: ['Journalist', 'Digital Media Director', 'Communications Consultant', 'Media Tech'],
      location: 'Heredia, Costa Rica',
      meta1: 'Founder', meta1v: 'Acontecer.co.cr',
      meta2: 'Active member', meta2v: 'COLPER',
      meta3: 'Honored', meta3v: 'Alberto Martén Award · 2023',
      scroll: 'Scroll to read',
    },
    ticker: [
      'Acontecer.co.cr', 'Cum Laude Probatus', 'Budapest · Hungary 2026',
      'Alberto Martén Award 2023', 'General Director', 'SICOP',
      'Concacaf', 'Costa Rica National Team', 'Next.js / Headless', 'Honorable Mention',
    ],
    profile: {
      num: '01 / Profile',
      title: ['Journalism,', <em key="k36">technology</em>, ' and strategy ', <em key="k37">under one name</em>, '.'],
      quote: ['I build media and narratives with the same rigor I use to ', <span className="hl" key="k38">deploy servers</span>, '.'],
      p1: ['I\'m an ', <strong key="k39">award-winning journalist</strong>, ' with Honorable Mention at the ', <strong key="k40">2023 Alberto Martén Chavarría Award</strong>, ' and a graduate with the ', <strong key="k41">Cum Laude Probatus</strong>, ' distinction.'],
      p2: ['At 20 I founded and now direct ', <strong key="k42">Acontecer.co.cr</strong>, ', a digital news outlet positioned in Costa Rica through advanced tech infrastructure, automation and a solid editorial line of national and international coverage.'],
      p3: ['Over ', <strong key="k43">7 years</strong>, ' in political and corporate communications: event coordination, press conferences, strategic advisory and crisis management for public and private clients.'],
      p4: ['As an entrepreneur formally registered as an SME with the MEIC, specialized in ', <strong key="k44">public procurement</strong>, ' (SICOP / Ministry of Finance) and in ', <strong key="k45">newsroom leadership</strong>, ' under high-pressure news environments.'],
      cardLabel: 'Official affiliation',
      cardValue: 'Costa Rica Journalists Association (COLPER)',
    },
    stats: {
      num: '02 / Numbers',
      title: ['By the ', <em key="k46">numbers</em>, '.'],
      subtitle: 'A career measured in coverage, teams led and platforms deployed.',
      items: [
        { num: 7, suffix: '+', label: 'Years in political and corporate communications' },
        { num: 3, suffix: '', label: 'Electoral processes covered in Costa Rica' },
        { num: 3, suffix: '', label: 'Continents covered: America, Europe and the UK' },
        { num: 200, suffix: '+', label: 'Interviews with politicians, ministers and presidential candidates' },
        { num: 100, suffix: '%', label: 'Technical migration of Acontecer.co.cr' },
        { num: 6, suffix: '', label: 'Official Google certifications' },
        { num: 150, suffix: 'K+', label: 'Followers across Acontecer.co.cr social channels' },
        { num: 1, suffix: '', label: 'Honorable Mention · Alberto Martén 2023' },
      ],
    },
    experience: {
      num: '03 / Experience',
      title: ['Career ', <em key="k47">track record</em>, '.'],
      items: [
        {
          date: '2020 — Present', current: true,
          title: 'Acontecer.co.cr', role: 'Founder & General Director',
          bullets: [
            ['Newsroom management: ', <strong key="k48">editorial direction</strong>, ', reporter coordination, daily coverage planning, photography, graphic design and overall editing.'],
            ['Coverage of key electoral processes: ', <strong key="k49">Presidential 2022</strong>, ', ', <strong key="k50">Municipal 2024</strong>, ' and ', <strong key="k51">Presidential 2026</strong>, '.'],
            ['Foreign correspondent in ', <strong key="k52">Budapest, Hungary</strong>, ' for the 2026 elections with official accreditation by the Nemzeti Választási Iroda.'],
            ['Sports coverage with the outlet: tracking of ', <strong key="k53">La Sele</strong>, ' and official ', <strong key="k54">CONCACAF</strong>, ' tournaments.'],
            ['Organization of ', <strong key="k53b">electoral debates</strong>, ' between candidates and special programs in the 2022, 2024 (Municipal, in partnership with ', <strong key="k53c">UIA</strong>, ') and 2026 processes.'],
            ['Full migration and development of the outlet under ', <strong key="k55">Next.js, headless architecture, Vercel and xCloud</strong>, '.'],
          ],
        },
        {
          date: '2024 — Present', current: true,
          title: 'Joseph Rivera Law Firm', role: 'Communications Director · Strategic Press Management',
          bullets: [
            ['Strategy for ', <strong key="k56">public relations</strong>, ', institutional positioning and crisis management.'],
            ['Design and deployment from scratch of the site ', <strong key="k57">abogadojosephrivera.com</strong>, ' (Next.js / Headless).'],
            ['Spokesperson before national and international media in high-profile cases such as ', <strong key="k58">Nadia Peraza</strong>, ' and ', <strong key="k59">Junieysis Merlo</strong>, '.'],
            ['Short-form audiovisual content strategy (TikTok) with specialized scripts.'],
          ],
        },
        {
          date: '2022 — Present', current: true,
          title: 'Independent Consultant', role: 'Freelance Communications Agency',
          bullets: [
            ['Standalone services in communications consulting, web development and audiovisual production.'],
            ['Operating under ', <strong key="k60">formal SME registration with the MEIC</strong>, '.'],
            ['Direct management of bids and economic offers in ', <strong key="k61">SICOP</strong>, ' for Ministries and State institutions.'],
            ['Strategic communications work for additional legal-sector clients, including ', <strong key="k61b">Attorney Boris Molina</strong>, '.'],
            ['Management and production of ', <strong key="k61c">events, press conferences and public activities</strong>, ' for diverse public and private sector clients.'],
          ],
        },
        {
          date: '2023 — 2024', current: false,
          title: 'Suppcenter Global Services / Credimall.cr', role: 'Community Manager · Communications Support',
          bullets: [
            ['Digital communications strategy and virtual community management.'],
            ['Support for the brand\'s external information flows.'],
          ],
        },
      ],
    },
    acontecer: {
      num: '04 / Flagship Project',
      title: ['The outlet I built ', <em key="k62">from scratch</em>, '.'],
      tag: 'Digital media · Costa Rica',
      desc1: 'Acontecer.co.cr is a Costa Rican digital news outlet founded in 2020, positioned through advanced tech infrastructure, automation and a solid editorial line.',
      desc2: 'The platform was migrated and developed under Next.js, headless architecture, Vercel and xCloud, guaranteeing stability and load speed during traffic peaks in electoral coverage.',
      stats: [
        { v: '2020', l: 'Founded' }, { v: '150K+', l: 'Social followers' },
        { v: 'Next.js', l: 'Tech stack' }, { v: '24/7', l: 'News coverage' },
      ],
      cta: 'Visit acontecer.co.cr',
      mockHeadline: 'Budapest correspondence: Costa Rican coverage of the 2026 Hungarian elections',
      mockSub: 'International · Special report',
      mockCats: ['Home', 'Politics', 'International', 'Sports', 'Tech', 'Opinion'],
      mockItems: [
        { cat: 'Politics', t: 'Municipal Elections 2024: county-by-county analysis' },
        { cat: 'Sports', t: 'La Sele toward Concacaf: what we saw on the field' },
        { cat: 'National', t: 'Special coverage: Costa Rica 2026 election process' },
      ],
    },
    coverage: {
      num: '05 / Coverage',
      title: ['On the ', <em key="k63">ground</em>, '.'],
      subtitle: 'Journalistic deployment in national and international elections, Premier League sports events and high-profile judicial cases.',
      items: [
        { span: 7, photo: '/assets/photos/budapest.jpeg', flag: '🇭🇺 HU', place: 'International · Budapest', title: 'Hungary Elections 2026', desc: 'Foreign correspondent in Budapest with official accreditation by the Nemzeti Választási Iroda. On-site coverage during the 2026 elections, won by Péter Magyar and his party Tisza against the ruling Fidesz.', meta: ['Budapest', 'Fidesz', 'Tisza', 'Péter Magyar', 'NVI accreditation'], accent: '#22c55e' },
        { span: 5, photo: '/assets/photos/anfield.jpeg', flag: '🇬🇧 UK', place: 'International · Liverpool', title: 'Coverage from Anfield', desc: 'On-site coverage from Anfield, home of Liverpool FC in England, for the Premier League. International field work at one of the most iconic stadiums in world football.', meta: ['Anfield', 'Liverpool FC', 'Premier League'], accent: '#ef4444' },
        { span: 6, photo: '/assets/photos/villalta-2022.jpeg', flag: '🇨🇷 CR', place: 'National · Public square', title: 'Presidential Elections 2022', desc: 'On-site coverage of the 2022 electoral process. Field work in public squares and campaign tours of the main presidential candidates, including José María Villalta of the Broad Front.', meta: ['TSE', 'Campaign 2022', 'Field work'], accent: '#f59e0b' },
        { span: 6, photo: '/assets/photos/laura-fernandez.jpeg', flag: '🇨🇷 CR', place: 'National · Victory stage', title: 'Presidential Elections 2026', desc: 'Live coverage of the 2026 election night, including filming from Laura Fernández\'s victory stage and the broadcast of the ruling party\'s continuity moment.', meta: ['TSE', 'Laura Fernández', 'Victory 2026', 'Live'], accent: '#22c55e' },
        { span: 6, flag: '⚖ LEGAL', place: 'Media cases', illustration: 'legal', title: 'Nadia Peraza · Junieysis Merlo cases', desc: 'Press coordination and spokesperson role in judicial cases of the highest media profile and social significance, alongside the Joseph Rivera Law Firm.', meta: ['Spokesperson', 'Crisis', 'National & intl. media'], accent: '#22c55e' },
        { span: 6, flag: '⚽ CONCACAF', place: 'Sports', illustration: 'football', title: 'La Sele · CONCACAF Tournaments', desc: 'Sports coverage with the outlet Acontecer.co.cr: tracking of the Costa Rica National Team and official CONCACAF club and team tournaments.', meta: ['Costa Rica Team', 'Concacaf', 'Official clubs'], accent: '#ef4444' },
      ],
    },
    debates: {
      num: '06 / Electoral production',
      title: ['Debates and ', <em key="k201">electoral programs</em>, '.'],
      subtitle: 'Organization, moderation and production of debates between candidates and special programs across three consecutive electoral processes.',
      feature: { photo: '/assets/photos/debate-heredia.jpeg', cap: 'Mayoral debate · Heredia 2024 · partnership with UIA' },
      items: [
        { year: '2022', title: 'Debates between candidates for Congress', desc: 'Organization and moderation of debates between candidates for Congress ahead of the 2022 Legislative Elections, with wide public reception and discussion.', tags: ['Congress', 'Moderation', 'Legislative'] },
        { year: '2024', title: 'Mayoral candidate debates · UIA', desc: 'Organization of highly successful debates between mayoral candidates in partnership with the Universidad Internacional de las Américas (UIA) during the 2024 Municipal Elections.', tags: ['Mayors', 'UIA', 'Municipal'], featured: true },
        { year: '2026', title: 'Congress debates · Electoral programs', desc: 'Repetition of the candidate debate format for the 2026 Congress cycle, alongside special electoral programs with high audience during the presidential process.', tags: ['Congress', 'Electoral programs', 'Presidential'] },
      ],
    },
    skills: {
      num: '07 / Stack',
      title: ['Technical ', <em key="k64">skills</em>, '.'],
      items: [
        { icon: '▤', title: 'Public Procurement', desc: 'Experience as an entrepreneur formally registered as an SME with the MEIC. Command of SICOP and Ministry of Finance platforms (ATV, e-invoicing) for the formulation and execution of institutional bids.', tags: ['SICOP', 'Finance Ministry', 'ATV', 'SME-MEIC'] },
        { icon: '$_', title: 'SysAdmin & CLI', desc: 'Configuration and maintenance of Linux VPS servers (32GB+ RAM). Operation in CMD and PowerShell for automation, scripts and environment management.', tags: ['Linux VPS', 'PowerShell', 'CMD', 'Bash'] },
        { icon: '</>', title: 'Web Development', desc: 'Deployment, migration and development of complex news platforms: Next.js, headless architectures, Vercel and xCloud.', tags: ['Next.js', 'Headless', 'Vercel', 'xCloud'] },
        { icon: '◉', title: 'Audiovisual Production', desc: 'Own professional gear: Canon XA60 cameras, DJI wireless mics and Nikon DSLRs for field coverage.', tags: ['Canon XA60', 'DJI', 'Nikon DSLR'] },
        { icon: '✶', title: 'Design & UI/UX', desc: 'Advanced command of Adobe Photoshop, Creative Suite (Premiere, DaVinci Resolve), Canva and Figma.', tags: ['Photoshop', 'Premiere', 'DaVinci', 'Figma'] },
        { icon: '⚡', title: 'Automation & AI', desc: 'Workflow design and custom bots (WhatsApp API). Expert use of generative systems: ChatGPT, Midjourney, RunwayML.', tags: ['WhatsApp API', 'ChatGPT', 'Midjourney', 'RunwayML'] },
        { icon: '↑', title: 'Technical SEO', desc: 'robots.txt optimization, subdomain/CMS management and strategies for scaling domain authority.', tags: ['SE Ranking', 'Rank Math', 'robots.txt', 'Subdomains'] },
        { icon: '▶', title: 'Editorial Direction', desc: 'Leadership and coordination of newsrooms: editorial oversight, assignment and editing under high news pressure.', tags: ['Newsroom', 'Editing', 'Assignments', 'Crisis'] },
        { icon: '◐', title: 'Political Communications', desc: '7 years in political and corporate communications: events, press conferences and strategic advisory for public and private sector.', tags: ['Spokesperson', 'PR', 'Crisis', 'Advisory'] },
      ],
    },
    interviews: {
      num: '08 / Interviews',
      title: ['Top-tier ', <em key="k65">voices</em>, '.'],
      subtitle: 'Over 200 interviews with political figures, ministers, former presidents and presidential candidates of Costa Rica. A curated selection of the most representative conversations.',
      items: [
        { initials: 'RC', photo: '/assets/photos/rodrigo-chaves.jpeg', name: 'Rodrigo Chaves', role: 'Former President of the Republic', body: 'Interview with the former president on presidential management, political scenarios and the direction of his administration at key moments for the country.', topics: ['Politics', 'Presidency', 'Government'] },
        { initials: 'LS', photo: '/assets/photos/luis-guillermo-solis.jpeg', name: 'Luis Guillermo Solís', role: 'Former President of Costa Rica', body: 'Radio studio interview with the former president on democracy, the regional scenario and reflections on the Costa Rican political system.', topics: ['Former President', 'Democracy', 'Regional politics'] },
        { initials: 'PC', photo: '/assets/photos/pilar-cisneros.jpeg', name: 'Pilar Cisneros', role: 'Congresswoman & journalist', body: 'Dialogue on Congress dynamics, the Executive–Legislative relationship and coverage of priority legislative topics.', topics: ['Legislative', 'Politics'] },
        { initials: 'MM', photo: '/assets/photos/mary-munive.jpeg', name: 'Mary Munive', role: 'Former Vice President of the Republic', body: 'Official interview at Casa Presidencial on public health, government management and the challenges of the administration during her term.', topics: ['Vice Presidency', 'Health'] },
        { initials: 'ND', photo: '/assets/photos/natalia-diaz.jpeg', name: 'Natalia Díaz', role: 'Politician and former public officer', body: 'Conversation on the public agenda, institutional management and the role of political leadership in present-day Costa Rica.', topics: ['Government', 'Politics', 'Public management'] },
        { initials: 'PN', photo: '/assets/photos/paola-najera.jpeg', name: 'Paola Nájera', role: 'Politician', body: 'Interview on a national political affairs segment about her career, proposals and vision of the Costa Rican scenario.', topics: ['Politics', 'Current affairs'] },
        { initials: 'DS', photo: '/assets/photos/daniel-salas.jpeg', name: 'Daniel Salas', role: 'Former Minister of Health · COVID-19 Pandemic', body: 'Interviews during the COVID-19 pandemic on national health management, confirmed cases, deaths and epidemiological projections for Costa Rica.', topics: ['Health', 'COVID-19', 'Pandemic'] },
        { initials: 'JF', photo: '/assets/photos/jose-maria-figueres.png', name: 'José María Figueres', role: 'Former President · Former presidential candidate', body: 'Analysis of the political-economic landscape and historical reflection on leadership and Costa Rican democracy.', topics: ['PLN', 'History'] },
        { initials: 'JV', photo: '/assets/photos/jose-maria-villalta.png', name: 'José María Villalta', role: 'Former presidential candidate & congressman', body: 'Interview on the Broad Front, social policy and the ideological stance of the national progressive bloc.', topics: ['Broad Front', 'Social'] },
        { initials: 'FA', photo: '/assets/photos/fabricio-alvarado.png', name: 'Fabricio Alvarado', role: 'Congressman & former presidential candidate', body: 'Dialogue on Nueva República, values agenda and the role of Christian parties in the political system.', topics: ['Nueva República', 'Values'] },
        { initials: 'EF', photo: '/assets/photos/eli-feinzaig.png', name: 'Eli Feinzaig', role: 'Congressman & former presidential candidate', body: 'Conversation on the economy, minority parties and liberal representation in the Costa Rican Congress.', topics: ['Economy', 'Parties'] },
        { initials: 'DS2', photo: '/assets/photos/daniel-suchar.png', name: 'Daniel Suchar', role: 'International financial analyst', body: 'Conversation on macroeconomics, international markets and economic projections for Costa Rica.', topics: ['Economy', 'Markets'] },
      ],
    },
    awards: {
      num: '09 / Recognition',
      title: ['Awards and ', <em key="k66">distinctions</em>, '.'],
      mainTag: 'Award · 2023 · AMCHAM Costa Rica',
      mainTitle: 'Honorable Mention · Alberto Martén Chavarría Award',
      mainDesc: 'Recognition granted by the Costa Rica–U.S. Chamber of Commerce (AMCHAM) as part of the Social Responsibility in Action Award. One of the most representative distinctions in Costa Rican journalism, granted in 2023.',
      photo: '/assets/photos/amcham-award.jpeg',
      photoCaption: 'AMCHAM Costa Rica · 27th Anniversary · Alberto Martén Chavarría Award 2023',
      otherTitle: 'Other academic distinctions',
      others: [
        { title: 'Cum Laude Probatus', sub: 'Graduation distinction · UIA' },
        { title: 'Honor Roll', sub: 'Journalism B.A. · UIA' },
        { title: 'COLPER Member', sub: 'Costa Rica Journalists Assoc.' },
        { title: 'NVI Accreditation', sub: 'National Elections Office · Hungary' },
      ],
    },
    education: {
      num: '10 / Education',
      title: ['Education and ', <em key="k67">certifications</em>, '.'],
      items: [
        { yr: '2024 — Present', deg: 'B.A. Communications & Marketing', uni: 'Universidad Latina de Costa Rica', honors: ['In progress'] },
        { yr: '2021 — 2024', deg: 'B.A. Journalism', uni: 'Universidad Internacional de las Américas (UIA)', honors: ['Cum Laude Probatus', 'Honor Roll'] },
      ],
      certsLabel: 'Official certifications',
      certsTitle: 'Google Ads · 6 certified areas',
      certs: ['Search', 'Display', 'Video', 'Shopping', 'Apps', 'Measurement'],
    },
    projects: {
      num: '11 / Featured projects',
      title: ['Live ', <em key="k68">work</em>, '.'],
      items: [
        { span: 7, kind: 'Own news outlet', title: 'Acontecer.co.cr', desc: 'Leading digital news outlet in Costa Rica. Founded, directed and deployed from scratch under Next.js, headless architecture, Vercel and xCloud.', link: 'acontecer.co.cr/autor/editor', url: 'https://acontecer.co.cr/autor/editor' },
        { span: 5, kind: 'Institutional site', title: 'AbogadoJosephRivera.com', desc: 'Design, development and deployment from scratch of the law firm\'s official site, optimized for conversion.', link: 'abogadojosephrivera.com', url: 'https://abogadojosephrivera.com' },
        { span: 4, kind: 'Social · TikTok', title: 'Joseph Rivera Abogado', desc: 'Short-form audiovisual content strategy: scripts, research and production.', link: '@josephriveraabogado', url: 'https://www.tiktok.com/@josephriveraabogado' },
        { span: 4, kind: 'Social · Instagram', title: 'Joseph Rivera Firm', desc: 'Community management and institutional positioning for the law firm on Instagram.', link: '@abogadojosephrivera', url: 'https://www.instagram.com/abogadojosephrivera/' },
        { span: 4, kind: 'Author profile', title: 'Author profile', desc: 'Author page on Acontecer.co.cr with signed articles and special coverage.', link: 'acontecer.co.cr/autor/editor', url: 'https://acontecer.co.cr/autor/editor' },
        { span: 6, kind: 'Audiovisual production', title: 'YouTube report · 01', desc: 'Audiovisual production of journalistic coverage published on YouTube.', link: 'youtube.com/watch?v=2958pRhXy4I', url: 'https://www.youtube.com/watch?v=2958pRhXy4I', video: true, videoId: '2958pRhXy4I' },
        { span: 6, kind: 'Audiovisual production', title: 'YouTube report · 02', desc: 'Field audiovisual piece with complete technical production (camera, sound and editing).', link: 'youtube.com/watch?v=DwDcYMUVM48', url: 'https://www.youtube.com/watch?v=DwDcYMUVM48', video: true, videoId: 'DwDcYMUVM48' },
      ],
    },
    contact: {
      num: '12 / Contact',
      title: ['Let\'s talk?'],
      big: ['Available for ', <em key="k69">collaborations, advisory</em>, ' and ', <em key="k70">new projects</em>, '.'],
      items: [
        { lbl: 'Email · personal', val: 'cv0756294@gmail.com', url: 'mailto:cv0756294@gmail.com' },
        { lbl: 'Email · press', val: 'prensa@acontecer.co.cr', url: 'mailto:prensa@acontecer.co.cr' },
        { lbl: 'LinkedIn', val: 'Carlos Valencia Durán', url: 'https://cr.linkedin.com/in/carlos-valencia-durán-b87864205' },
        { lbl: 'Author profile', val: 'acontecer.co.cr/autor/editor', url: 'https://acontecer.co.cr/autor/editor' },
      ],
    },
  },
}

/* ================================================================
   i18n context
   ================================================================ */
const I18nContext = createContext({ lang: 'es', t: CV_CONTENT.es })
const useT = () => useContext(I18nContext)

/* ================================================================
   Hooks
   ================================================================ */
function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (!ref.current || seen) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setSeen(true); obs.disconnect() }
        })
      },
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [seen, threshold])
  return [ref, seen]
}

/* ================================================================
   Shared UI components
   ================================================================ */

function CountUp({ to, suffix = '', duration = 1400 }) {
  const [ref, seen] = useReveal()
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!seen) return
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(to * eased))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [seen, to, duration])
  const display = to >= 1000 ? val.toLocaleString('en-US') : val.toString()
  return <span ref={ref}>{display}<small>{suffix}</small></span>
}

function Reveal({ as: As = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, seen] = useReveal(0.1)
  return (
    <As ref={ref} className={`${className} reveal ${seen ? 'in' : ''}`}
      style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </As>
  )
}

const K = (v) => React.Children.toArray(v)

function SectionHead({ num, children, eyebrowText }) {
  return (
    <Reveal className="section-head">
      <div className="num">{num}</div>
      <h2>{K(children)}</h2>
      {eyebrowText && <p className="intro-text">{eyebrowText}</p>}
    </Reveal>
  )
}

/* ================================================================
   Nav
   ================================================================ */
function Nav({ lang, setLang }) {
  const t = useT().t
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      setScrolled(y > 32)
      const max = (document.documentElement.scrollHeight - window.innerHeight) || 1
      setProgress(Math.min(1, y / max))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <span className="brand-mark">
            <span className="brand-mark-letters">CV</span>
            <span className="brand-mark-dot"></span>
          </span>
          <span className="brand-wordmark">
            <span className="brand-name">Carlos Valencia</span>
            <span className="brand-role">{lang === 'es' ? 'Periodista · Media Tech' : 'Journalist · Media Tech'}</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#profile">{t.nav.profile}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#coverage">{t.nav.coverage}</a>
          <a href="#debates">{t.nav.debates}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#interviews">{t.nav.interviews}</a>
          <a href="#projects">{t.nav.projects}</a>
        </div>
        <div className="nav-actions">
          <div className="lang-toggle">
            <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <a href="#contact" className="nav-cta">
            <span>{t.nav.contact}</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ================================================================
   Ticker
   ================================================================ */
function Ticker() {
  const t = useT().t
  const items = t.ticker
  return (
    <div className="ticker">
      <div className="ticker-track">
        <span>
          {[...items, ...items].map((it, i) => (
            <React.Fragment key={i}>
              {it}<span className="dot">◆</span>
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  )
}

/* ================================================================
   Modal
   ================================================================ */
function Modal({ data, onClose }) {
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])
  if (!data) return null
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        <div className="modal-head">
          {data.photo
            ? <div className="modal-portrait modal-portrait-photo"><img src={data.photo} alt={data.name} /></div>
            : <div className="modal-portrait">{data.initials}</div>}
          <div>
            <div className="tag">Entrevista</div>
            <h3>{data.name}</h3>
            <div className="role">{data.role}</div>
          </div>
        </div>
        <div className="modal-body">
          <p>{data.body}</p>
          <div className="topics">
            {data.topics.map((tp) => <span key={tp}>{tp}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ================================================================
   Footer
   ================================================================ */
function Footer() {
  const { t, lang } = useT()
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-monogram"><span>C</span><span>V</span></div>
          <div className="footer-tagline">
            <div className="footer-name">Carlos Valencia Durán</div>
            <div className="footer-role">
              {lang === 'es'
                ? 'Periodista · Director de Medios Digitales · Consultor en Comunicación'
                : 'Journalist · Digital Media Director · Communications Consultant'}
            </div>
          </div>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <div className="footer-col-label">{lang === 'es' ? 'Navegación' : 'Navigation'}</div>
            <a href="#profile">{t.nav.profile}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#coverage">{t.nav.coverage}</a>
            <a href="#debates">{t.nav.debates}</a>
            <a href="#interviews">{t.nav.interviews}</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-label">{lang === 'es' ? 'Contacto' : 'Contact'}</div>
            <a href="mailto:cv0756294@gmail.com">cv0756294@gmail.com</a>
            <a href="mailto:prensa@acontecer.co.cr">prensa@acontecer.co.cr</a>
            <a href="https://cr.linkedin.com/in/carlos-valencia-durán-b87864205" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://acontecer.co.cr/autor/editor" target="_blank" rel="noreferrer">acontecer.co.cr/autor/editor</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-label">{lang === 'es' ? 'Proyectos' : 'Projects'}</div>
            <a href="https://acontecer.co.cr" target="_blank" rel="noreferrer">acontecer.co.cr</a>
            <a href="https://abogadojosephrivera.com" target="_blank" rel="noreferrer">abogadojosephrivera.com</a>
            <a href="https://www.instagram.com/abogadojosephrivera/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@josephriveraabogado" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
      </div>
      <div className="footer-meta">
        <div className="footer-left">
          <span className="footer-dot"></span>
          {lang === 'es' ? 'Disponible para nuevos proyectos' : 'Available for new projects'}
        </div>
        <div className="footer-center">© {year} · Heredia, Costa Rica</div>
        <div className="footer-right">
          <span>v.1.0</span>
          <span>{lang === 'es' ? 'Edición 26' : 'Edition 26'}</span>
        </div>
      </div>
    </footer>
  )
}

/* ================================================================
   SECTION A — Hero, Profile, Stats, Experience, Acontecer
   ================================================================ */

function Hero() {
  const t = useT().t
  return (
    <section className="hero wrap" id="top">
      <div className="hero-masthead">
        <span>{t.hero.tag}</span>
        <span>Carlos Valencia Durán · Periodista</span>
        <span>{t.hero.issue}</span>
      </div>
      <div className="hero-title">
        <h1 className="hero-name">
          <span className="first">{t.hero.first}</span>
          <span className="last">{t.hero.last}</span>
        </h1>
        <div className="hero-roles">
          {t.hero.roles.map((r) => <span key={r}>{r}</span>)}
        </div>
        <div className="hero-location">{t.hero.location}</div>
        <div className="hero-meta">
          <div className="hero-tag">{t.hero.meta1}: <b>{t.hero.meta1v}</b></div>
          <div className="hero-tag">{t.hero.meta2}: <b>{t.hero.meta2v}</b></div>
          <div className="hero-tag">{t.hero.meta3}: <b>{t.hero.meta3v}</b></div>
        </div>
      </div>
      <div className="hero-photo">
        <span className="hero-photo-frame" />
        <span className="hero-photo-corner tl" />
        <span className="hero-photo-corner tr" />
        <span className="hero-photo-corner bl" />
        <span className="hero-photo-corner br" />
        <img src="/assets/carlos.png" alt="Carlos Valencia Durán" />
      </div>
      <div className="hero-scroll">{t.hero.scroll}</div>
    </section>
  )
}

function ProfileSection() {
  const t = useT().t
  const p = t.profile
  return (
    <section className="section wrap" id="profile">
      <SectionHead num={p.num}>{p.title}</SectionHead>
      <div className="profile">
        <div className="profile-left">
          <Reveal>
            <p className="profile-quote">"{K(p.quote)}"</p>
            <div className="tag">— Carlos Valencia D.</div>
          </Reveal>
          <Reveal delay={200} className="profile-card">
            <div className="label">{p.cardLabel}</div>
            <div className="value">{p.cardValue}</div>
          </Reveal>
        </div>
        <Reveal className="profile-body">
          <p>{K(p.p1)}</p>
          <p>{K(p.p2)}</p>
          <p>{K(p.p3)}</p>
          <p>{K(p.p4)}</p>
        </Reveal>
      </div>
    </section>
  )
}

function StatsSection() {
  const t = useT().t
  const s = t.stats
  return (
    <section className="section stats-section wrap" id="stats">
      <SectionHead num={s.num}>{s.title}</SectionHead>
      <Reveal>
        <p className="intro-text" style={{ marginBottom: 48, color: '#4a4f44' }}>{s.subtitle}</p>
      </Reveal>
      <Reveal className="stats-grid">
        {s.items.map((it, i) => (
          <div className="stat-cell" key={i}>
            <div className="stat-num"><CountUp to={it.num} suffix={it.suffix} /></div>
            <div className="stat-label">{it.label}</div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

function ExperienceSection() {
  const { t, lang } = useT()
  const x = t.experience
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in') }) },
      { threshold: 0.2 }
    )
    document.querySelectorAll('.tl-item').forEach((n) => obs.observe(n))
    return () => obs.disconnect()
  }, [x.items])
  return (
    <section className="section wrap" id="experience">
      <SectionHead num={x.num}>{x.title}</SectionHead>
      <div className="timeline">
        {x.items.map((it, i) => (
          <div key={i} className={`tl-item ${it.current ? 'current' : ''}`}>
            <div className="tl-date">
              {it.date}
              {it.current && <div><span className="now">● {lang === 'es' ? 'VIGENTE' : 'CURRENT'}</span></div>}
            </div>
            <div>
              <h3 className="tl-title">{it.title}</h3>
              <div className="tl-role">{it.role}</div>
              <div className="tl-body">
                <ul>
                  {it.bullets.map((b, j) => <li key={j}>{K(b)}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function AcontecerSection() {
  const t = useT().t
  const a = t.acontecer
  return (
    <section className="section acontecer wrap" id="acontecer">
      <SectionHead num={a.num}>{a.title}</SectionHead>
      <div className="ac-grid">
        <Reveal className="ac-info">
          <div className="ac-logo">acontecer<span>.</span></div>
          <div className="ac-tag">{a.tag}</div>
          <p>{a.desc1}</p>
          <p>{a.desc2}</p>
          <div className="ac-stats">
            {a.stats.map((s, i) => (
              <div key={i}><div className="v">{s.v}</div><div className="l">{s.l}</div></div>
            ))}
          </div>
          <a className="ac-cta" href="https://acontecer.co.cr/autor/editor" target="_blank" rel="noreferrer">{a.cta}</a>
        </Reveal>
        <Reveal delay={150}>
          <div className="browser">
            <div className="browser-bar">
              <div className="browser-dots"><i /><i /><i /></div>
              <div className="browser-url">https://acontecer.co.cr</div>
            </div>
            <div className="browser-content">
              <div className="mock-mast">
                <div className="logo">acontecer<span>.</span></div>
                <div className="date">VIERNES · 26 MAY 2026</div>
              </div>
              <div className="mock-cats">
                {a.mockCats.map((c) => <span key={c}>{c}</span>)}
              </div>
              <div className="mock-headline">
                <div>
                  <div className="mock-sub">{a.mockSub}</div>
                  <div className="big">{a.mockHeadline}</div>
                </div>
                <div className="img" />
              </div>
              <div className="mock-list">
                {a.mockItems.map((it, i) => (
                  <div className="item" key={i}><span className="cat">{it.cat}</span>{it.t}</div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================
   SECTION B — Coverage, Debates, Skills, Interviews, Awards, Education, Projects, Contact
   ================================================================ */

function CoverageIllustration({ kind, accent }) {
  if (kind === 'football') {
    return (
      <div className="cov-illust">
        <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
          <rect width="400" height="280" fill="#0a0e0a" />
          <rect x="20" y="40" width="360" height="200" fill="none" stroke={accent} strokeWidth="1" opacity="0.5" />
          <line x1="200" y1="40" x2="200" y2="240" stroke={accent} strokeWidth="1" opacity="0.5" />
          <circle cx="200" cy="140" r="40" fill="none" stroke={accent} strokeWidth="1" opacity="0.5" />
          <rect x="20" y="100" width="60" height="80" fill="none" stroke={accent} strokeWidth="1" opacity="0.5" />
          <rect x="320" y="100" width="60" height="80" fill="none" stroke={accent} strokeWidth="1" opacity="0.5" />
          <circle cx="70" cy="140" r="5" fill={accent} />
          <circle cx="130" cy="100" r="5" fill={accent} />
          <circle cx="130" cy="180" r="5" fill={accent} />
          <circle cx="180" cy="140" r="5" fill={accent} />
          <circle cx="230" cy="100" r="5" fill="#f4f1e8" opacity="0.4" />
          <circle cx="230" cy="180" r="5" fill="#f4f1e8" opacity="0.4" />
          <circle cx="280" cy="120" r="5" fill="#f4f1e8" opacity="0.4" />
          <circle cx="280" cy="160" r="5" fill="#f4f1e8" opacity="0.4" />
          <circle cx="330" cy="140" r="5" fill="#f4f1e8" opacity="0.4" />
          <circle cx="200" cy="140" r="5" fill="#f4f1e8" />
          <text x="20" y="270" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={accent} letterSpacing="2">SAN JOSÉ · CR</text>
          <text x="380" y="270" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#f4f1e8" textAnchor="end" letterSpacing="2" opacity="0.6">CONCACAF</text>
        </svg>
      </div>
    )
  }
  return (
    <div className="cov-illust">
      <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
        <rect width="400" height="280" fill="#0a0e0a" />
        <g opacity="0.15">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1="20" y1={40 + i * 18} x2="380" y2={40 + i * 18} stroke="#f4f1e8" />
          ))}
        </g>
        <g transform="translate(170, 80)">
          <rect x="20" y="0" width="20" height="60" rx="10" fill={accent} />
          <path d="M 8 45 Q 8 80, 30 80 Q 52 80, 52 45" fill="none" stroke={accent} strokeWidth="3" />
          <line x1="30" y1="80" x2="30" y2="110" stroke={accent} strokeWidth="3" />
          <line x1="20" y1="112" x2="40" y2="112" stroke={accent} strokeWidth="3" />
        </g>
        <g fill="#f4f1e8" opacity="0.4">
          <circle cx="60" cy="70" r="4" />
          <circle cx="90" cy="100" r="4" />
          <circle cx="50" cy="130" r="4" />
          <circle cx="320" cy="90" r="4" />
          <circle cx="350" cy="70" r="4" />
          <circle cx="360" cy="130" r="4" />
        </g>
        <text x="20" y="265" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={accent} letterSpacing="2">CONFERENCIA DE PRENSA</text>
      </svg>
    </div>
  )
}

function CoverageSection() {
  const t = useT().t
  const c = t.coverage
  return (
    <section className="section wrap" id="coverage">
      <SectionHead num={c.num}>{c.title}</SectionHead>
      <Reveal>
        <p className="intro-text" style={{ marginBottom: 48, color: 'var(--ink-dim)' }}>{c.subtitle}</p>
      </Reveal>
      <Reveal className="coverage-grid">
        {c.items.map((it, i) => (
          <div className={`cov-card span-${it.span || 6}`} key={i}>
            {it.photo ? (
              <div className="cov-photo">
                <img src={it.photo} alt={it.title} />
                <span className="flag-overlay">{it.flag}</span>
                <span className="place-overlay" style={{ '--accent': it.accent }}>{it.place}</span>
              </div>
            ) : (
              <CoverageIllustration kind={it.illustration} accent={it.accent} flag={it.flag} place={it.place} />
            )}
            <h3>{it.title}</h3>
            {!it.photo && <div className="place" style={{ color: it.accent }}>{it.place}</div>}
            <p className="desc">{it.desc}</p>
            <div className="meta">{it.meta.map((m) => <span key={m}>{m}</span>)}</div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

function DebatesSection() {
  const { t, lang } = useT()
  const d = t.debates
  if (!d) return null
  return (
    <section className="section debates-section wrap" id="debates">
      <SectionHead num={d.num}>{d.title}</SectionHead>
      <Reveal>
        <p className="intro-text" style={{ marginBottom: 48, color: 'var(--ink-dim)' }}>{d.subtitle}</p>
      </Reveal>
      <Reveal className="dbt-grid">
        <div className="dbt-feature">
          <img src={d.feature.photo} alt={d.feature.cap} />
          <div className="badge">2024</div>
          <div className="meta">
            <div className="tag">{lang === 'es' ? 'Pieza destacada' : 'Featured piece'}</div>
            <div className="cap">{d.feature.cap}</div>
          </div>
        </div>
        <div className="dbt-list">
          {d.items.map((it, i) => (
            <div key={i} className={`dbt-item ${it.featured ? 'featured' : ''}`}>
              <div className="yr">{it.year}</div>
              <h3>{it.title}</h3>
              <p className="desc">{it.desc}</p>
              <div className="tags">{it.tags.map((tg) => <span key={tg}>{tg}</span>)}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function SkillsSection() {
  const t = useT().t
  const s = t.skills
  return (
    <section className="section wrap" id="skills">
      <SectionHead num={s.num}>{s.title}</SectionHead>
      <Reveal className="skills-grid">
        {s.items.map((it, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-icon">{it.icon}</div>
            <h3>{it.title}</h3>
            <p className="desc">{it.desc}</p>
            <div className="skill-tags">{it.tags.map((tg) => <span key={tg}>{tg}</span>)}</div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

function InterviewsSection({ onOpen }) {
  const { t } = useT()
  const iv = t.interviews
  return (
    <section className="section interviews-section wrap" id="interviews">
      <SectionHead num={iv.num}>{iv.title}</SectionHead>
      <Reveal>
        <p className="intro-text">{iv.subtitle}</p>
      </Reveal>
      <Reveal className="iv-grid">
        {iv.items.map((it) => (
          <div className={`iv-card ${it.photo ? 'with-photo' : 'no-photo'}`} key={it.name} onClick={() => onOpen(it)}>
            {it.photo ? (
              <React.Fragment>
                <div className="iv-photo"><img src={it.photo} alt={it.name} /></div>
                <div className="iv-body">
                  <h3>{it.name}</h3>
                  <div className="role">{it.role}</div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="iv-portrait">{it.initials}</div>
                <h3>{it.name}</h3>
                <div className="role">{it.role}</div>
              </React.Fragment>
            )}
          </div>
        ))}
      </Reveal>
    </section>
  )
}

function AwardsSection() {
  const t = useT().t
  const a = t.awards
  return (
    <section className="section wrap" id="awards">
      <SectionHead num={a.num}>{a.title}</SectionHead>
      <div className="award">
        <Reveal>
          <div className="award-photo">
            <img src={a.photo} alt={a.mainTitle} />
            <div className="badge-corner">2023</div>
            <div className="caption">{a.photoCaption}</div>
          </div>
        </Reveal>
        <Reveal delay={150} className="award-info">
          <div className="tag" style={{ color: 'var(--accent-2)' }}>{a.mainTag}</div>
          <h3>{a.mainTitle}</h3>
          <p>{a.mainDesc}</p>
          <div className="eyebrow" style={{ marginTop: 40, marginBottom: 16 }}>{a.otherTitle}</div>
          <div className="award-grid">
            {a.others.map((o, i) => (
              <div className="a-item" key={i}>
                <div className="a-title">{o.title}</div>
                <div className="a-sub">{o.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function EducationSection() {
  const t = useT().t
  const e = t.education
  return (
    <section className="section wrap" id="education">
      <SectionHead num={e.num}>{e.title}</SectionHead>
      <Reveal className="edu-grid">
        {e.items.map((it, i) => (
          <div className="edu-card" key={i}>
            <div className="yr">{it.yr}</div>
            <div className="deg">{it.deg}</div>
            <div className="uni">{it.uni}</div>
            <div className="honors">{it.honors.map((h) => <span key={h}>{h}</span>)}</div>
          </div>
        ))}
      </Reveal>
      <Reveal delay={150} className="certs">
        <div>
          <div className="label">{e.certsLabel}</div>
          <div className="title">{e.certsTitle}</div>
        </div>
        <div className="badges">{e.certs.map((c) => <span key={c}>{c}</span>)}</div>
      </Reveal>
    </section>
  )
}

function ProjectsSection() {
  const t = useT().t
  const p = t.projects
  return (
    <section className="section wrap" id="projects">
      <SectionHead num={p.num}>{p.title}</SectionHead>
      <Reveal className="proj-grid">
        {p.items.map((it, i) => (
          <a key={i} className={`proj-card span-${it.span}`} href={it.url} target="_blank" rel="noreferrer">
            <div className="kind">{it.kind}</div>
            <h3>{it.title}</h3>
            <p className="desc">{it.desc}</p>
            {it.video && (
              <div className="video-thumb">
                {it.videoId && (
                  <img className="video-thumb-img"
                    src={`https://img.youtube.com/vi/${it.videoId}/hqdefault.jpg`}
                    srcSet={`https://img.youtube.com/vi/${it.videoId}/hqdefault.jpg 480w, https://img.youtube.com/vi/${it.videoId}/maxresdefault.jpg 1280w`}
                    alt={it.title} loading="lazy" />
                )}
                <div className="play">▶</div>
                <div className="label">YOUTUBE · {it.videoId}</div>
              </div>
            )}
            <div className="proj-link">{it.link}</div>
          </a>
        ))}
      </Reveal>
    </section>
  )
}

function ContactSection() {
  const t = useT().t
  const c = t.contact
  return (
    <section className="section contact-section wrap" id="contact">
      <SectionHead num={c.num}>{c.title}</SectionHead>
      <div className="contact-grid">
        <Reveal>
          <p className="contact-big">{K(c.big)}</p>
          <div className="eyebrow" style={{ color: 'rgba(10,14,10,0.7)' }}>
            Carlos Valencia Durán · Heredia, Costa Rica
          </div>
        </Reveal>
        <Reveal delay={100} className="contact-list">
          {c.items.map((it) => (
            <a key={it.lbl} href={it.url} target="_blank" rel="noreferrer">
              <div><div className="lbl">{it.lbl}</div></div>
              <div className="val">{it.val}</div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================
   Tweaks system (design panel — activated from within iframe host)
   ================================================================ */

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:13px}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;overflow-y:auto}
  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);transition:left .15s,width .15s}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;border-radius:6px;cursor:pointer;padding:4px 6px}
  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;padding:0;border:0;border-radius:6px;overflow:hidden;cursor:pointer;box-shadow:0 0 0 .5px rgba(0,0,0,.12);transition:transform .12s,box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1}
  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  select.twk-field{padding-right:22px}
`

function useTweaks(defaults) {
  const [values, setValues] = useState(defaults)
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val }
    setValues((prev) => ({ ...prev, ...edits }))
    try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*') } catch (e) {}
  }, [])
  return [values, setTweak]
}

function TweaksPanel({ title = 'Tweaks', children }) {
  const [open, setOpen] = useState(false)
  const dragRef = useRef(null)
  useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type
      if (t === '__activate_edit_mode') setOpen(true)
      else if (t === '__deactivate_edit_mode') setOpen(false)
    }
    window.addEventListener('message', onMsg)
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*') } catch (e) {}
    return () => window.removeEventListener('message', onMsg)
  }, [])
  const dismiss = () => {
    setOpen(false)
    try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*') } catch (e) {}
  }
  if (!open) return null
  return (
    <>
      <style>{__TWEAKS_STYLE}</style>
      <div ref={dragRef} className="twk-panel" style={{ right: 16, bottom: 16 }}>
        <div className="twk-hd">
          <b>{title}</b>
          <button className="twk-x" onClick={dismiss}>✕</button>
        </div>
        <div className="twk-body">{children}</div>
      </div>
    </>
  )
}

function TweakSection({ label }) {
  return <div className="twk-sect">{label}</div>
}

function TweakRow({ label, children }) {
  return (
    <div className="twk-row">
      <div className="twk-lbl"><span>{label}</span></div>
      {children}
    </div>
  )
}

function TweakRadio({ label, value, options, onChange }) {
  const opts = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }))
  const idx = Math.max(0, opts.findIndex((o) => o.value === value))
  const n = opts.length
  return (
    <TweakRow label={label}>
      <div role="radiogroup" className="twk-seg">
        <div className="twk-seg-thumb"
          style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`, width: `calc((100% - 4px) / ${n})` }} />
        {opts.map((o) => (
          <button key={o.value} type="button" role="radio" aria-checked={o.value === value}
            onClick={() => onChange(o.value)}>{o.label}</button>
        ))}
      </div>
    </TweakRow>
  )
}

function TweakSelect({ label, value, options, onChange }) {
  return (
    <TweakRow label={label}>
      <select className="twk-field" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => {
          const v = typeof o === 'object' ? o.value : o
          const l = typeof o === 'object' ? o.label : o
          return <option key={v} value={v}>{l}</option>
        })}
      </select>
    </TweakRow>
  )
}

function TweakColor({ label, value, options, onChange }) {
  const key = (o) => String(JSON.stringify(o)).toLowerCase()
  const cur = key(value)
  return (
    <TweakRow label={label}>
      <div className="twk-chips" role="radiogroup">
        {options.map((o, i) => {
          const colors = Array.isArray(o) ? o : [o]
          const [hero, ...rest] = colors
          const on = key(o) === cur
          return (
            <button key={i} type="button" className="twk-chip" role="radio"
              aria-checked={on} data-on={on ? '1' : '0'}
              style={{ background: hero }} onClick={() => onChange(o)}>
              {rest.length > 0 && (
                <span>{rest.slice(0, 4).map((c, j) => <i key={j} style={{ background: c }} />)}</span>
              )}
            </button>
          )
        })}
      </div>
    </TweakRow>
  )
}

/* ================================================================
   Main page — App config
   ================================================================ */

const TWEAK_DEFAULTS = {
  palette: ['#0a0e0a', '#22c55e', '#f4f1e8'],
  displayFont: 'Bricolage Grotesque',
  bodyFont: 'Space Grotesk',
  density: 'normal',
}

const PALETTES = [
  ['#0a0e0a', '#22c55e', '#f4f1e8'],
  ['#0a0a14', '#7c3aed', '#f1eef9'],
  ['#120808', '#f43f5e', '#fdf2f2'],
  ['#0a1424', '#38bdf8', '#eaf4fc'],
  ['#1a1410', '#f59e0b', '#f8f1e3'],
]

const FONT_PAIRS = [
  { display: 'Bricolage Grotesque', body: 'Space Grotesk' },
  { display: 'Newsreader', body: 'Manrope' },
  { display: 'DM Serif Display', body: 'IBM Plex Sans' },
  { display: 'Big Shoulders Display', body: 'Space Grotesk' },
]

export default function Page() {
  const [lang, setLang] = useState('es')
  const [modal, setModal] = useState(null)
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS)

  // Apply palette
  useEffect(() => {
    const [bg, accent, ink] = tweaks.palette
    const root = document.documentElement
    root.style.setProperty('--bg', bg)
    root.style.setProperty('--ink', ink)
    root.style.setProperty('--accent', accent)
    root.style.setProperty('--bg-2', shade(bg, 8))
    root.style.setProperty('--ink-dim', mix(ink, bg, 0.35))
    root.style.setProperty('--ink-mute', mix(ink, bg, 0.55))
    root.style.setProperty('--line', hexa(ink, 0.12))
    root.style.setProperty('--line-strong', hexa(ink, 0.28))
  }, [tweaks.palette])

  // Apply fonts
  useEffect(() => {
    const isSerif = /serif/i.test(tweaks.displayFont) || /reader/i.test(tweaks.displayFont)
    document.documentElement.style.setProperty('--f-display', `"${tweaks.displayFont}", ${isSerif ? 'serif' : 'sans-serif'}`)
    document.documentElement.style.setProperty('--f-body', `"${tweaks.bodyFont}", sans-serif`)
  }, [tweaks.displayFont, tweaks.bodyFont])

  // Apply density
  useEffect(() => {
    document.body.dataset.density = tweaks.density
  }, [tweaks.density])

  const t = CV_CONTENT[lang]
  const ctx = { lang, t }

  return (
    <I18nContext.Provider value={ctx}>
      <Nav lang={lang} setLang={setLang} />
      <Hero />
      <Ticker />
      <ProfileSection />
      <StatsSection />
      <ExperienceSection />
      <AcontecerSection />
      <CoverageSection />
      <DebatesSection />
      <SkillsSection />
      <InterviewsSection onOpen={setModal} />
      <AwardsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      {modal && <Modal data={modal} onClose={() => setModal(null)} />}
      <TweaksPanel>
        <TweakSection label={lang === 'es' ? 'Paleta' : 'Palette'} />
        <TweakColor
          label={lang === 'es' ? 'Esquema' : 'Scheme'}
          value={tweaks.palette}
          options={PALETTES}
          onChange={(v) => setTweak('palette', v)}
        />
        <TweakSection label={lang === 'es' ? 'Tipografía' : 'Typography'} />
        <TweakSelect
          label={lang === 'es' ? 'Fuentes' : 'Fonts'}
          value={`${tweaks.displayFont} / ${tweaks.bodyFont}`}
          options={FONT_PAIRS.map((p) => `${p.display} / ${p.body}`)}
          onChange={(v) => {
            const pair = FONT_PAIRS.find((p) => `${p.display} / ${p.body}` === v)
            if (pair) setTweak({ displayFont: pair.display, bodyFont: pair.body })
          }}
        />
        <TweakSection label={lang === 'es' ? 'Densidad' : 'Density'} />
        <TweakRadio
          label={lang === 'es' ? 'Espaciado' : 'Spacing'}
          value={tweaks.density}
          options={['compact', 'normal', 'spacious']}
          onChange={(v) => setTweak('density', v)}
        />
      </TweaksPanel>
    </I18nContext.Provider>
  )
}
