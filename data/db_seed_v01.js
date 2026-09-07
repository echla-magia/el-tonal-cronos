// ============================================================================
// ARCHIVO DOCUMENTAL — FASE 2: Base de datos semilla
// Datos reales del expediente Israel/Palestina. Cada entidad lleva su
// prefixed_id, metadata, estatus de certeza y fuentes.
// La IA PROPONE; el humano valida. Nada aquí es "hecho consumado".
// ============================================================================

const DB = { persons: [], orgs: [], videos: [], claims: [], events: [], sources: [], rels: [], conflicts: [] };

// ----------------------------------------------------------------------------
// CONFLICTOS
// ----------------------------------------------------------------------------
DB.conflicts.push({
  id: "CNF-000001", name: "Conflicto Israel-Palestina",
  period: "1848–presente (fase moderna: 1948–actualidad)",
  background: "Conflicto entre el Estado de Israel, el pueblo palestino y actores regionales/internacionales, atravesado por tensiones territoriales, religiosas, políticas y geopolíticas.",
  actors: ["Estado de Israel", "Hamás", "Autoridad Nacional Palestina", "colonos", "población civil palestina"],
  status: "documentado",
  refs: ["SRC-000001"]
});

// ----------------------------------------------------------------------------
// FUENTES
// ----------------------------------------------------------------------------
DB.sources.push({
  id: "SRC-000001", name: "Expediente Sombras de Israel 2026", type: "archivo de investigación",
  url: "C:\\Users\\USUARIO\\Downloads\\expediente_sombras_israel_2026-08-29\\",
  accessed: "2026-09-03", note: "Fuente de verdad local del archivo documental."
});
DB.sources.push({
  id: "SRC-000002", name: "Caso FARA 7649 Clock Tower X LLC", type: "documento oficial (DOJ FARA)",
  url: "expediente/evidence/fara_7649_clock_tower_x_israel/", accessed: "2026-09-03",
  note: "Registro de agente extranjero. No prueba por sí solo contrato directo con OpenAI."
});
DB.sources.push({
  id: "SRC-000003", name: "X / Twitter", type: "red social", accessed: "2026-09-03",
  note: "Plataforma de publicación de los videos; los videos son pistas hasta conectarse con fuentes primarias."
});

// ----------------------------------------------------------------------------
// PERSONAS
// ----------------------------------------------------------------------------
DB.persons.push({
  id: "PER-000001", name: "Benjamin Netanyahu", original: "בִּניָמִין נְתַנְיָהוּ",
  roles: ["Primer Ministro de Israel", "líder Likud"], nationality: "Israelí",
  bio: "Primer ministro de Israel en varios periodos. Figura central de la política israelí y de las relaciones con Estados Unidos.",
  img: "img/netanyahu.jpg", certainty: "DOCUMENTADO", review: "REVISADO", refs: ["SRC-000001","SRC-000003"]
});
DB.persons.push({
  id: "PER-000002", name: "Donald Trump", roles: ["expresidente de EUA"], nationality: "Estadounidense",
  bio: "Presidente de Estados Unidos (2017-2021). Relaciones políticas y económicas documentadas con figuras israelíes y pro-Israel.",
  img: "img/trump.jpg", certainty: "DOCUMENTADO", review: "REVISADO", refs: ["SRC-000001"]
});
DB.persons.push({
  id: "PER-000003", name: "Moshe Feiglin", roles: ["ex-MK (Parlamento israelí)"], nationality: "Israelí",
  bio: "Exlegislador israelí de línea dura. En video viral: 'no podemos vivir si queda un palestino'.",
  img: "img/feiglin.jpg", certainty: "CORROBORADO (cita audiovisual)", review: "PENDIENTE", refs: ["SRC-000003"]
});
DB.persons.push({
  id: "PER-000004", name: "Amit Halevi", roles: ["diputado israelí"], nationality: "Israelí",
  bio: "Diputado israelí que vinculó nacimientos en una maternidad con supuestos 'terroristas'.",
  img: "img/halevi.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});
DB.persons.push({
  id: "PER-000005", name: "Norman Finkelstein", roles: ["profesor, autor"], nationality: "Estadounidense",
  bio: "Autor judío crítico de la política israelí. Sobre el 'Estado del pueblo judío' y el respaldo del mundo.",
  img: "img/finkelstein.jpg", certainty: "DOCUMENTADO", review: "REVISADO", refs: ["SRC-000001","SRC-000003"]
});
DB.persons.push({
  id: "PER-000006", name: "Tucker Carlson", roles: ["presentador, comentarista"], nationality: "Estadounidense",
  bio: "Figura mediática. Tema de declaraciones de Ted Cruz y del debate sobre antisemitismo.",
  img: "img/carlson.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});
DB.persons.push({
  id: "PER-000007", name: "Ted Cruz", roles: ["senador de EUA"], nationality: "Estadounidense",
  bio: "Senador republicano. Según clip: 'panicking'; llama a Tucker Carlson 'el mayor antisemita'.",
  img: "img/cruz.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});
DB.persons.push({
  id: "PER-000008", name: "Jared Kushner", roles: ["empresario, exasesor de la Casa Blanca"], nationality: "Estadounidense",
  bio: "Yerno de Trump. Sobre Gaza como 'waterfront teardown' y torres de lujo sobre escombros.",
  img: "img/kushner.jpg", certainty: "CORROBORADO (cita audiovisual)", review: "PENDIENTE", refs: ["SRC-000003"]
});
DB.persons.push({
  id: "PER-000009", name: "Haitham Abdelhadi", roles: ["analista"], nationality: "Palestino-británico",
  bio: "Afirma: 'criticar el sionismo no es antisemitismo'.",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});
DB.persons.push({
  id: "PER-000010", name: "May Golan", roles: ["ministra (Gabinete de Israel)"], nationality: "Israelí",
  bio: "Ministra. Video la muestra orgullosa de la destrucción en Gaza.",
  img: "img/golan.jpg", certainty: "CORROBORADO (cita audiovisual)", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000011", name: "Eran Efrati",
  roles: [["Veterano israelí/testimonio en video ('I was the terrorist')"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Testimonio de veterano; rótulo 'I was the terrorist'. Observado en video.",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000012", name: "John Hagee",
  roles: [["Líder religioso, vinculado a CUFI / sionismo cristiano"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Asociado visual/temáticamente a CUFI en video.",
  img: "img/john_hagee.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000013", name: "Kenneth Copeland",
  roles: [["Televangelista pro-Israel"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Mencionado en video sobre televangelismo/pro-Israel.",
  img: "img/kenneth_copeland.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000014", name: "Paula White",
  roles: [["Líder religioso-político, sionismo cristiano"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Mencionada en video sobre 'Zionism hijacking Christianity'.",
  img: "img/paula_white.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000015", name: "Mike Huckabee",
  roles: [["Político/religioso pro-Israel"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Figura política/religiosa pro-Israel. Observado en video.",
  img: "img/mike_huckabee.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000016", name: "Lawrence Wilkerson",
  roles: [["Exfuncionario/comentarista (Judging Freedom)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Entrevista/podcast Judging Freedom. Observado en video.",
  img: "img/lawrence_wilkerson.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000017", name: "Gustavo Petro",
  roles: [["Presidente de Colombia / autor de post"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Autor/post observado sobre Cerimedo y Casa Rosada.",
  img: "img/gustavo_petro.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000018", name: "Fernando Cerimedo",
  roles: [["Operador de propaganda política y estratega digital (La Derecha Diario)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Nadia Beller confirma que Cerimedo trabajó en campaña pinochetista del rechazo y campaña de Kast.",
  img: "img/fernando_cerimedo.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000019", name: "Wesley Clark",
  roles: [["General retirado de EEUU, citado"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Citado sobre invasión de 7 países en 5 años (clip Kamelia/Irán).",
  img: "img/wesley_clark.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000020", name: "Richard Nixon",
  roles: [["Expresidente de EEUU"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Cita atribuida sobre el lobby judío/pro-Israel.",
  img: "img/richard_nixon.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000021", name: "Jeffrey Epstein",
  roles: [["Financista, caso penal/reorganización"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Caso criminal/red de abuso; mencionado como eje de montajes sobre élite.",
  img: "img/jeffrey_epstein.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000022", name: "Alan Dershowitz",
  roles: [["Abogado ligado a Epstein"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Clip: 'Epstein's Jewish lawyer'. Tema Epstein/Dershowitz.",
  img: "img/alan_dershowitz.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000023", name: "John Fetterman",
  roles: [["Senador de EEUU (clip GBC)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Clip: Fetterman: 'Is Israel committing genocide?'",
  img: "img/john_fetterman.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000024", name: "Jon Stewart",
  roles: [["Presentador de TV (respuesta)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Clip con Fetterman/Stewart sobre Epstein/Hamás.",
  img: "img/jon_stewart.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000025", name: "Marco Rubio",
  roles: [["Secretario de Estado (2025)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Clip Praxedes: respuesta del secretario de Estado Marco Rubio.",
  img: "img/marco_rubio.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000026", name: "Meilich Cohen",
  roles: [["Rabino antisionista (Voice of Rabbis)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. 'A firm clear statement by Rabbi Meilich Cohen'. Judíos estadounidenses sin conexión con Israel.",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000027", name: "Hind Rajab",
  roles: [["Víctima civil (caso mencionado)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Caso de niña/familia/ambulancia mencionado en entrevista.",
  img: "img/hind_rajab.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000028", name: "Rodrigo Paz",
  roles: [["Político boliviano (clip Julián Macías)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Clip sobre Cerimedo y asesoría política; '¿no decía Rodrigo Paz...?'",
  img: "img/rodrigo_paz.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000029", name: "Nadia Beller",
  roles: [["Investigadora/periodista mencionada"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Confirma datos sobre Cerimedo y bots.",
  img: "img/nadia_beller.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000030", name: "Theodor Herzl",
  roles: [["Fundador del sionismo político"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Cita atribuida: 'Argentina tendría el mayor interés en cedernos un pedazo de territorio para construir el estado sionista'.",
  img: "img/theodor_herzl.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000031", name: "Sergio Bergman",
  roles: [["Rabino sionista argentino, exfuncionario"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Cita: 'Argentina como tierra prometida del sionismo, debe ser partida y repartida como en Palestina'.",
  img: "img/sergio_bergman.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000032", name: "David Roet",
  roles: [["Embajador de Israel en Austria"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Filmado en reunión en Innsbruck hablando de palestinos y Gaza.",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000033", name: "Javier Negre",
  roles: [["Periodista/fundador de La Derecha Diario"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Testimonio Jean Carlo Portillo: Negre y Cerimedo tenían 'el secreto para reventar el algoritmo (granjas de bots)'.",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000034", name: "Ricardo Salinas Pliego",
  roles: [["Empresario mexicano"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Clip Catrina Norteña: exhibe a La Derecha Diario de Negre, Cerimedo y Salinas Pliego por granjas de bots.",
  img: "img/ricardo_salinas_pliego.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000035", name: "Diego Ruzzarin",
  roles: [["Comentarista/creador de contenido"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Clip Catrina Norteña: 'EXHIBE @DiegoRuzzarin los crímenes de La Derecha Diario'.",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000036", name: "Mosab Hassan Yousef",
  roles: [["Exmiembro de inteligencia israelí"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Clip Parody Jeff: 'Former Israeli intelligence member Mosab Hassan claims Israel has secret advanced weapons'.",
  img: "img/mosab_hassan_yousef.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000037", name: "Philip Tourney",
  roles: [["Veterano estadounidense, sobreviviente USS Liberty"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. 'Israel nos controla. Controlan el Congreso, el Senado, nuestro dinero.'",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000038", name: "Julian Assange",
  roles: [["Fundador de WikiLeaks"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Cita atribuida: 'El objetivo es tener una guerra interminable, no una guerra exitosa'.",
  img: "img/julian_assange.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000039", name: "Rabbi Kohn",
  roles: [["Rabino antisionista"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. 'Zionists stole the Jewish name and now use it as a shield.'",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000040", name: "Bezalel Smotrich",
  roles: [["Ministro de Finanzas de Israel"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. 'Israel will expand into Lebanon, Syria, and Gaza. To the Litani. Mount Hermon.'",
  img: "img/bezalel_smotrich.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000041", name: "Javier Milei",
  roles: [["Presidente de Argentina"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Anunció que extranjeros (incluidos sionistas) pueden comprar tierras argentinas tras incendios.",
  img: "img/javier_milei.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000042", name: "Charlie Kirk",
  roles: [["Activista conservador, fundador de Turning Point USA"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Figura del movimiento MAGA; tema en fuentes del expediente sobre adoctrinamiento político-religioso.",
  img: "img/charlie_kirk.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000043", name: "Candace Owens",
  roles: [["Comentarista política conservadora"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Figura mediática conservadora; tema en fuentes del expediente.",
  img: "img/candace_owens.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000044", name: "John Mearsheimer",
  roles: [["Politólogo, coautor 'The Israel Lobby'"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Autores del lobby israelí en EUA; citados en fuentes del expediente.",
  img: "img/john_mearsheimer.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000045", name: "Stephen Walt",
  roles: [["Politólogo, coautor 'The Israel Lobby'"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Coautor de 'The Israel Lobby and U.S. Foreign Policy'.",
  img: "img/stephen_walt.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000046", name: "JD Vance",
  roles: [["Vicepresidente de EEUU (2025)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Figura política estadounidense mencionada en fuentes del expediente.",
  img: "img/jd_vance.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000047", name: "Itamar Ben-Gvir",
  roles: [["Ministro de Seguridad Nacional de Israel"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Israeli National Security Minister Itamar Ben-Gvir faced an embarrassing confrontation at the US Capitol... 'You're a racist war criminal!'",
  img: "img/itamar_ben_gvir.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000048", name: "Joe Kent",
  roles: [["Congresista estadounidense (R-WA), ex Navy SEAL"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. I saw Israeli lobby groups dictate terms inside the White House under Trump... manipulating those around President Trump to put us into this war",
  img: "img/joe_kent.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000049", name: "Jeffrey Sachs",
  roles: [["Economista estadounidense"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Jeffrey Sachs names the driver of the wars: Washington and Europe still believe they run the world... hegemonic mindset at work in Ukraine, Gaza, Iran and Venezuela",
  img: "img/jeffrey_sachs.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000050", name: "Gabriel Rockhill",
  roles: [["Profesor/filósofo"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. La CIA tiene 2 ramas... de 1947 a 1987 mataron a 6 millones y derribaron 50 gobiernos democráticos... Gabriel Rockhill, profesor",
  img: "img/gabriel_rockhill.png", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000051", name: "David Icke",
  roles: [["Autor/conferenciante (teorías conspirativas)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. David Icke speaks about the dancing Israelis: 'Five Israelis, two confirmed as Mossad agents, had prior knowledge of 9/11'",
  img: "img/david_icke.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000052", name: "George Lincoln Rockwell",
  roles: [["Histórico; fundador del American Nazi Party"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. George Lincoln Rockwell speaks his mind on the 6,000,000 figure. Fun fact: the figure was achieved by the torture of Rudolph Höss",
  img: "img/george_lincoln_rockwell.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000053", name: "Mark Weber",
  roles: [["Figura revisionista; director del Institute for Historical Review"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Mark Weber explains that the photos taken at the concentration camps were the result of starvation and disease... there was no extermination policy",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000054", name: "Rudolph Höss",
  roles: [["Histórico; comandante de Auschwitz (mencionado)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. the 6,000,000 figure was achieved by the torture of Rudolph Höss (commandant to Auschwitz) by the British",
  img: "img/rudolph_hoss.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000055", name: "Riccardo Bosi",
  roles: [["Excomandante de fuerzas especiales australianas"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Riccardo Bosi, der ehemaliger australische Kommandeur der Spezialkräfte, über die Ukraine: 'Die Ukraine ist das Zentrum des tiefen...'",
  img: "img/riccardo_bosi.png", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000056", name: "Robert David Steele",
  roles: [["Exanalista de inteligencia de EEUU (exCIA)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Robert D. Steele, exCIA: 'Tenemos 1000 bases militares para contrabandear oro, armas, drogas, efectivo y niños pequeños para las élites de EEUU'",
  img: "img/robert_david_steele.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000057", name: "Jussi Saramo",
  roles: [["Eurodiputado finlandés (MEP)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. MEP Jussi Saramo speaking in the European Parliament: 'tieto kuinka monta palestiinalaista Israel tappoi joka vuosi ennen Hamasin iskua'",
  img: "img/jussi_saramo.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000058", name: "Enrique Peña Nieto",
  roles: [["Expresidente de México"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. El expresidente de México Enrique Peña Nieto fue captado en una boda en Italia junto a Avishay Neriah, comercializador del software espía Pegasus",
  img: "img/enrique_pena_nieto.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000059", name: "Avishay Neriah",
  roles: [["Empresario israelí, comercializador de Pegasus"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Neriah y su socio Uri Ansbacher habrían pagado a Peña Nieto 25 millones de dólares para asegurar contratos de ciberseguridad con NSO Group",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000060", name: "Uri Ansbacher",
  roles: [["Socio de Avishay Neriah (empresario israelí)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Neriah y su socio Uri Ansbacher habrían pagado a Peña Nieto 25 millones de dólares",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000061", name: "Saddam Hussein",
  roles: [["Dictador de Irak (mencionado en archivo 2002)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. 2002: 'If you take out Saddam, I guarantee you it will have enormously positive impact in the region'. A million people died in a War based on a complete lie",
  img: "img/saddam_hussein.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000062", name: "Yitzchak Breitowitz",
  roles: [["Rabino influyente"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. L'influent rabbin Yitzchak Breitowitz: 'La Torah dit que nous prenons cette nation appelée Amalek et que nous l'exterminons. Hommes, femmes, enfants, bébés...'",
  img: "img/yitzchak_breitowitz.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000063", name: "Chay Bowes",
  roles: [["Comentarista (autor del clip con archivo de 2002)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. If you take out Saddam... I guarantee you that it will have enormous positive reverberations on the region",
  img: "img/chay_bowes.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000064", name: "Jesse Lyons",
  roles: [["Comentarista (EEUU First)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. The Auschwitz liberation photos were staged and perhaps even years later... 'There are many pictures about the Russians liberating Auschwitz and there's never any snow'",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000065", name: "Ibrahim Al-Matari (د ابراهيم المطري)",
  roles: [["Médico/activista palestino (autor del clip)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. UN institutions are attacked. The ICC is punished. ICJ orders are ignored... We are watching International system destruction",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000066", name: "César Vidal",
  roles: [["Historiador, escritor y presentador español"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Cuantas horas de televisión se emplearían para difundir declaraciones como estas si las pronunciaran iraníes, alemanes o incluso españoles",
  img: "img/cesar_vidal.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000067", name: "Diego Vélez (Gar)",
  roles: [["Comunicador/analista"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. La agencia estatal francesa de control digital... campaña masiva de desinformación contra políticos críticos con Israel, principalmente de Francia Insumisa",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000068", name: "Yakov Rabkin",
  roles: [["Profesor e historiador de la Universidad de Montreal, entrevistado sobre sionismo"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Para que los judíos fueran a Israel, los sionistas se disfrazaron de musulmanes y atacaron a mujeres judías, hicieron atentados terroristas contra judíos en sinagogas de Irak, Egipto, Marruecos",
  img: "img/yakov_rabkin.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000069", name: "Jean Carlo Portillo",
  roles: [["Denunciante/presentador que expone a La Derecha Diario"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. El actual dueño de la derecha diario me buscó para conseguirle yo 25 mil dólares para crear la derecha diario México antes de que se creara, y yo dije que no",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000070", name: "Ignacio González",
  roles: [["Creador de contenido/denunciante (cuenta Ignaciogjv)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. ¡Los monstruos sí existen! Así de fácil el gobierno Israel le dispara a un niño palestino de 14 años que estaba en un centro de refugiados en Tizjordánea",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000071", name: "Greta Thunberg",
  roles: [["Activista ambiental"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Greta Thunberg is facing arrests, investigations, and a media blackout for showing solidarity with the Palestinian and Sahrawi peoples",
  img: "img/greta_thunberg.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000072", name: "Sebastián Salgado",
  roles: [["Reportero (HispanTV / Nexo Latino)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Sebastián Salgado reporta desde Buenos Aires sobre incendios intencionales en la Patagonia y encubrimiento del gobierno de Milei",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000073", name: "Ben-Gurion",
  roles: [["Primer primer ministro de Israel"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Famosa o infamemente, Ben-Gurion es citado diciendo que preferiría salvar a la mitad de los niños judíos",
  img: "img/ben_gurion.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000074", name: "Yosef Basri",
  roles: [["Abogado judío iraquí del subterráneo sionista"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Basri, un abogado judío muy inteligente, y su ayudante Shalom Salah fueron responsables de tres de las cinco bombas",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000075", name: "Max Binet",
  roles: [["Oficial de inteligencia israelí en Teherán"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. El controlador de Basri era un oficial de inteligencia israelí llamado Max Binet, con base en Teherán",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000076", name: "Shalom Salah Shalom",
  roles: [["Ayudante de Yosef Basri"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. su asistente Shalom Salah Shalom fueron responsables de tres de las cinco bombas",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000077", name: "Rupert Butler",
  roles: [["Autor del libro 'Legions of Death'"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. This is confirmed in the book 'legions of death' by Rupert Butler",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000078", name: "Henry H. Klein",
  roles: [["Autor del panfleto de 1946 sobre conspiración judía mundial"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. 1946 - A Jew Exposes the Jewish World Conspiracy - Henry H. Klein",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000079", name: "José Antonio Kast",
  roles: [["Político chileno, candidato presidencial"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. trabajó en la campaña electoral de Kast",
  img: "img/jose_antonio_kast.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000080", name: "Flavio Bolsonaro",
  roles: [["Diputado brasileño, hijo de Jair Bolsonaro"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. tienen un vínculo directo con Flavio Bolsonaro, el hijo de Jair Mesías Bolsonaro",
  img: "img/flavio_bolsonaro.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000081", name: "Jair Bolsonaro",
  roles: [["Ex presidente de Brasil"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. el hijo de Jair Mesías Bolsonaro",
  img: "img/jair_bolsonaro.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000082", name: "Daniel Noboa",
  roles: [["Presidente de Ecuador"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. lo vemos en Ecuador, después de la victoria de Noboa, caminando muy orgulloso hacia la Asamblea Nacional",
  img: "img/daniel_noboa.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000083", name: "Myron Gaines",
  roles: [["Comentarista/participante en debate sobre el Holocausto"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. A jew debates Myron Gaines on the casualties sustained in the Holocaust",
  img: "img/myron_gaines.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000084", name: "Steve Cohen",
  roles: [["Supuesto agente de Mossad (señalado en Washington Square Park)"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. That's steve Cohen and Addy... Steve is a Mossad agent. This is insane",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000085", name: "Leonardo Roca",
  roles: [["Investigador que rastreó la billetera cripto de Cerimedo"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Lo que descubrió Leonardo Roca a través de la billetera fría es que se movieron miles de dólares hacia cuentas que contienen millones",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000086", name: "Amichai Chikli (Ami Khailahu)",
  roles: [["Ministro de Patrimonio/Diáspora de Israel"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. tu heritage minister, Ami Khailahu, dijo que Nuking Gaza era una opción y pedía métodos más dolorosos que la muerte para los palestinos",
  img: "img/amichai_chikli.jpg", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000087", name: "alextopol",
  roles: [["Periodista internacional que documenta el control de IDs en Jerusalén"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. This is a bus full of Palestinians with Israeli ID's in the middle of Jerusalem that they just decided to raid... tell me again how Israel is not an apartheid state",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

DB.persons.push({
  id: "PER-000088", name: "Julián Macías Tovar",
  roles: [["Investigador/denunciante de la red de bots de Cerimedo"]],
  nationality: "?",
  bio: "Figura relevante en el conflicto/geopolítica. Julán Macías Tovar: 'Nadia Beller confirma que Cerimedo trabajó en la campaña pinochetista del rechazo y en la campaña electoral de Kast'",
  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

// ----------------------------------------------------------------------------
// ORGANIZACIONES
// ----------------------------------------------------------------------------
DB.orgs.push({
  id: "ORG-000001", name: "AIPAC", full: "American Israel Public Affairs Committee",
  type: "grupo de presión (lobby)", country: "EUA",
  bio: "Principal lobby pro-Israel en Estados Unidos.",
  img: "img/aipac.jpg",
  certainty: "DOCUMENTADO", review: "REVISADO", refs: ["SRC-000001"]
});
DB.orgs.push({
  id: "ORG-000002", name: "IDF", full: "Fuerzas de Defensa de Israel", type: "fuerza militar", country: "Israel",
  bio: "Ejército del Estado de Israel.",
  img: "img/idf.svg", certainty: "DOCUMENTADO", review: "REVISADO", refs: ["SRC-000001"]
});
DB.orgs.push({
  id: "ORG-000003", name: "CUFI", full: "Christians United for Israel", type: "organización religioso-política", country: "EUA",
  bio: "Movimiento cristiano sionista estadounidense.",
  img: "img/cufi.png", certainty: "DOCUMENTADO", review: "REVISADO", refs: ["SRC-000001"]
});
DB.orgs.push({
  id: "ORG-000004", name: "Clock Tower X LLC", type: "empresa (registrante FARA)", country: "EUA",
  bio: "Registrante del caso FARA 7649; relación con Havas Media y State of Israel.",
  certainty: "CORROBORADO", review: "VERIFICADO", refs: ["SRC-000002"]
});
DB.orgs.push({
  id: "ORG-000005", name: "NSO Group", type: "empresa de ciberseguridad", country: "Israel",
  bio: "Desarrolladora de Pegasus (software de espionaje).Tema en clips de México.",
  img: "img/nso.svg",
  certainty: "CORROBORADO", review: "REVISADO", refs: ["SRC-000003"]
});

// ----------------------------------------------------------------------------
// VIDEOS  (los 21 que Christo ha ido pasando + algunos representativos)
// ----------------------------------------------------------------------------
DB.videos.push({
  id: "VID-000001", title: "Feiglin: exterminio implícito", url: "https://x.com/GBC_Press/status/2094438857618174386",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\GBC_Press_2094438857618174386.mp4",
  sha256:"c0710ede597fb3f7fd221444d2221c2c10edbcfe1ccca3bfb1c1292ba8a0c609",
  platform: "X", channel: "GBC_Press", published: "2026-09", dur: "00:00:45",
  lang: "he/en", manipulation: "B", by: "PER-000003", subject: "clima de exterminio",
  desc: "Ex-MK Moshe Feiglin: 'no podemos vivir si queda un palestino'.", certainty: "CORROBORADO", review: "PENDIENTE",
  refs: ["PER-000003","ORG-000002"], src: "SRC-000003"
});
DB.videos.push({
  id: "VID-000002", title: "Amit Halevi: '300 terroristas'", url: "https://x.com/GBC_Press/status/2094786200934764993",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\GBC_Press_2094786200934764993.mp4",
  sha256:"5ed7791552331ed58bcda20e6a5fb9136ea1d9f98f87c113a5043f903856342e",
  platform: "X", channel: "GBC_Press", published: "2026-09", dur: "00:00:38", lang: "he/en",
  manipulation: "C", by: "PER-000004", desc: "Diputado sobre maternidad y supuestos terroristas.",
  certainty: "REPORTADO", review: "PENDIENTE", refs: ["PER-000004"], src: "SRC-000003"
});
DB.videos.push({
  id: "VID-000003", title: "Ted Cruz vs Tucker Carlson", url: "https://x.com/GBC_Press/status/2094502293953708473",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\GBC_Press_2094502293953708473.mp4",
  sha256:"7e8e0f09ea58448817e23b2cab650a789c2d53f9802daaa3bf17a40c3f5d60f6",
  platform: "X", channel: "GBC_Press", published: "2026-09", dur: "00:00:52", lang: "en",
  manipulation: "B", by: "PER-000007", desc: "Cruz 'panicking'; llama a Carlson 'mayor antisemita'.",
  certainty: "REPORTADO", review: "PENDIENTE", refs: ["PER-000007","PER-000006"], src: "SRC-000003"
});
DB.videos.push({
  id: "VID-000004", title: "Kushner: Gaza teardown", url: "https://x.com/DaniMayakovski/status/2094661570869469242",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\DaniMayakovski_2094661570869469242.mp4",
  sha256:"8609bd66a0b7fb33761c0736f42f19e63b849b341105510d7834a88f21fce007",
  platform: "X", channel: "DaniMayakovski", published: "2026-09", dur: "00:00:41", lang: "en",
  manipulation: "B", by: "PER-000008", desc: "Kushner sobre Gaza como 'waterfront teardown' y torres de lujo.",
  certainty: "CORROBORADO", review: "PENDIENTE", refs: ["PER-000008"], src: "SRC-000003"
});
DB.videos.push({
  id: "VID-000005", title: "Haitham: crítica al sionismo", url: "https://youtube.com/shorts/yb76gKV8fJQ",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\youtube_yb76gKV8fJQ_BreezyPolitics.mp4",
  sha256:"062902a64145786e23374150ad8fba75466ff86c6a35d8e88ae5f27d9115af9b",
  platform: "YouTube", channel: "Shorts", published: "2026-09", dur: "00:00:33", lang: "en",
  manipulation: "A", by: "PER-000009", desc: "Criticar el sionismo no es antisemitismo.",
  certainty: "REPORTADO", review: "PENDIENTE", refs: ["PER-000009"], src: "SRC-000003"
});
DB.videos.push({
  id: "VID-000006", title: "May Golan: destrucción Gaza", url: "https://x.com/GBC_Press/status/2094795333297672625",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\GBC_Press_2094795333297672625.mp4",
  sha256:"48797708308e95b7f4791238a77fbfbe84f80e2c20c2c90670f0f0c66966c836",
  platform: "X", channel: "GBC_Press", published: "2026-09", dur: "00:00:29", lang: "en",
  manipulation: "A", by: "PER-000010", desc: "Ministra orgullosa de la devastación.",
  certainty: "CORROBORADO", review: "PENDIENTE", refs: ["PER-000010"], src: "SRC-000003"
});

DB.videos.push({ id: "VID-000007", title: "GBC: denuncias de Gaza (Golan/IDF)", url: "https://x.com/GBC_Press/status/2094474126778065211",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\GBC_Press_2094474126778065211.mp4",
  sha256:"b34c9cb7644c05d7b8c413bc7c0d6ef974115d75ace36ed89ba48f6e298f092c", platform: "X", channel: "GBC_Press", published: "2026-09", dur: "00:00:40", lang: "en", manipulation: "B", desc: "GBC Press sobre May Golan e IDF en Gaza.", certainty: "REPORTADO", review: "PENDIENTE", src: "SRC-000003" });
DB.videos.push({ id: "VID-000008", title: "Dr. Hossam: escenario Gaza", url: "https://x.com/drhossamsamy65/status/2094597567405273525", platform: "X", channel: "drhossamsamy65", published: "2026-09", dur: "00:01:00", lang: "ar/en", manipulation: "A", desc: "Profesional médico sobre la situación en Gaza.", certainty: "REPORTADO", review: "PENDIENTE", src: "SRC-000003" });
DB.videos.push({ id: "VID-000009", title: "GBC: presas/política israelí", url: "https://x.com/GBC_Press/status/2094799910637822418", platform: "X", channel: "GBC_Press", published: "2026-09", dur: "00:00:35", lang: "en", manipulation: "B", desc: "GBC Press sobre presa palestina y política israelí.", certainty: "REPORTADO", review: "PENDIENTE", src: "SRC-000003" });
DB.videos.push({ id: "VID-000010", title: "MrsRoyKeaneo: testimonio", url: "https://x.com/MrsRoyKeaneo/status/2094768446235979902", platform: "X", channel: "MrsRoyKeaneo", published: "2026-09", dur: "00:00:47", lang: "en", manipulation: "A", desc: "Testimonio sobre conflicto en Gaza.", certainty: "REPORTADO", review: "PENDIENTE", src: "SRC-000003" });
DB.videos.push({ id: "VID-000011", title: "DavidVargasA18: análisis", url: "https://x.com/DavidVargasA18/status/2094546241728225442", platform: "X", channel: "DavidVargasA18", published: "2026-09", dur: "00:00:55", lang: "es", manipulation: "B", desc: "Análisis sobre Israel/Palestina y geopolítica.", certainty: "REPORTADO", review: "PENDIENTE", src: "SRC-000003" });
DB.videos.push({ id: "VID-000012", title: "GBC: otro clip Gaza", url: "https://x.com/GBC_Press/status/2094795601871569283", platform: "X", channel: "GBC_Press", published: "2026-09", dur: "00:00:33", lang: "en", manipulation: "B", desc: "GBC Press, material adicional sobre Gaza.", certainty: "REPORTADO", review: "PENDIENTE", src: "SRC-000003" });
DB.videos.push({ id: "VID-000013", title: "RealTheForce: narrativa", url: "https://x.com/RealTheForce/status/2094599404221042791", platform: "X", channel: "RealTheForce", published: "2026-09", dur: "00:00:50", lang: "en", manipulation: "B", desc: "Narrativa sobre Israel/poder. Tratar con cautela (riesgo alto).", certainty: "NO_VERIFICADO", review: "PENDIENTE", src: "SRC-000003" });
DB.videos.push({ id: "VID-000014", title: "DaniMayakovski: colonos", url: "https://x.com/DaniMayakovski/status/2094630062720958801", platform: "X", channel: "DaniMayakovski", published: "2026-09", dur: "00:00:44", lang: "en", manipulation: "B", desc: "Testimonio sobre colonos y palestinos.", certainty: "REPORTADO", review: "PENDIENTE", src: "SRC-000003" });
DB.videos.push({ id: "VID-000015", title: "hippyygoat: análisis", url: "https://x.com/hippyygoat/status/2094668608924201406", platform: "X", channel: "hippyygoat", published: "2026-09", dur: "00:00:48", lang: "en", manipulation: "B", desc: "Análisis sobre ocupación/geopolítica.", certainty: "REPORTADO", review: "PENDIENTE", src: "SRC-000003" });
DB.videos.push({ id: "VID-000016", title: "GBC: otro clip (16)", url: "https://x.com/GBC_Press/status/2094786359764599265", platform: "X", channel: "GBC_Press", published: "2026-09", dur: "00:00:36", lang: "en", manipulation: "B", desc: "GBC Press, material adicional.", certainty: "REPORTADO", review: "PENDIENTE", src: "SRC-000003" });
DB.videos.push({ id: "VID-000017", title: "DaniMayakovski: (17)", url: "https://x.com/DaniMayakovski/status/2095535765392343311", platform: "X", channel: "DaniMayakovski", published: "2026-09", dur: "00:00:52", lang: "en", manipulation: "B", desc: "DaniMayakovski, material sobre el conflicto.", certainty: "REPORTADO", review: "PENDIENTE", src: "SRC-000003" });
DB.videos.push({ id: "VID-000018", title: "Bry: testimonio", url: "https://x.com/Bry___l/status/2095472658477392283", platform: "X", channel: "Bry___l", published: "2026-09", dur: "00:00:40", lang: "en", manipulation: "A", desc: "Testimonio sobre el terreno del conflicto.", certainty: "REPORTADO", review: "PENDIENTE", src: "SRC-000003" });
DB.videos.push({ id: "VID-000019", title: "daniel153177: análisis", url: "https://x.com/daniel153177/status/2095244120507773067", platform: "X", channel: "daniel153177", published: "2026-09", dur: "00:01:05", lang: "en/es", manipulation: "B", desc: "Análisis sobre evolución de la narrativa.", certainty: "REPORTADO", review: "PENDIENTE", src: "SRC-000003" });
DB.videos.push({ id: "VID-000020", title: "Ginnysaidso: (20)", url: "https://x.com/Ginnysaidso/status/2094486341627097559", platform: "X", channel: "Ginnysaidso", published: "2026-09", dur: "00:00:38", lang: "en", manipulation: "B", desc: "Comentario sobre el conflicto/geopolítica.", certainty: "REPORTADO", review: "PENDIENTE", src: "SRC-000003" });
DB.videos.push({ id: "VID-000021", title: "YouTube Short: Gaza (21)", url: "https://youtube.com/shorts/nfE1C8H70ws", platform: "YouTube", channel: "Shorts", published: "2026-09", dur: "00:00:30", lang: "en", manipulation: "A", desc: "Video corto de YouTube sobre Gaza.", certainty: "REPORTADO", review: "PENDIENTE", src: "SRC-000003" });

// ----------------------------------------------------------------------------
// EVENTOS
// ----------------------------------------------------------------------------
DB.events.push({
  id: "EVT-000001", name: "Ofensiva en Gaza (cruce de declaraciones)",
  date: "2025-2026", place: "Gaza / Israel", conflict: "CNF-000001",
  desc: "Declaraciones de ministros y diputados israelíes durante la ofensiva, recogidas por GBC_Press.",
  certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});
DB.events.push({
  id: "EVT-000002", name: "Debate sobre antisemitismo y cristianismo sionista",
  date: "2026", place: "EUA", conflict: "CNF-000001",
  desc: "Cruz vs Carlson; sionismo, judaísmo y crítica a Israel.",
  certainty: "REPORTADO", review: "PENDIENTE", refs: ["SRC-000003"]
});

// ----------------------------------------------------------------------------
// AFIRMACIONES (CLAIMS)
// ----------------------------------------------------------------------------
DB.claims.push({
  id: "CLM-000001", author: "PER-000003", text: "'No podemos vivir si queda un palestino'",
  video: "VID-000001", status: "CORROBORADA (cita)", confidence: 60, reviewed: "2026-09-03",
  srcs: ["SRC-000003"]
});
DB.claims.push({
  id: "CLM-000002", author: "PER-000009", text: "'Criticar el sionismo no es antisemitismo'",
  video: "VID-000005", status: "PARCIALMENTE_CORROBORADA", confidence: 55, reviewed: "2026-09-03",
  srcs: ["SRC-000003"]
});
DB.claims.push({
  id: "CLM-000003", author: "PER-000008", text: "'Gaza como waterfront teardown, torres de lujo sobre escombros'",
  video: "VID-000004", status: "CORROBORADA (cita)", confidence: 63, reviewed: "2026-09-03",
  srcs: ["SRC-000003"]
});

// ----------------------------------------------------------------------------
// RELACIONES  (sujeto → predicado → objeto, con fuente obligatoria)
// ----------------------------------------------------------------------------
DB.rels.push({ subject: "PER-000001", predicate: "lidera", object: "ORG-000002", type: "INSTITUCIONAL", src: "SRC-000001" });
DB.rels.push({ subject: "PER-000002", predicate: "recibió_lobby_de", object: "ORG-000001", type: "LOBBYING", src: "SRC-000001" });
DB.rels.push({ subject: "PER-000001", predicate: "se_reunió_con", object: "PER-000002", type: "REUNION", src: "SRC-000001" });
DB.rels.push({ subject: "ORG-000004", predicate: "registrada_bajo_FARA_de", object: "ORG-000002", type: "CONTRATO", src: "SRC-000002" });
DB.rels.push({ subject: "PER-000008", predicate: "relacionado_con", object: "PER-000002", type: "LABORAL", src: "SRC-000001" });
DB.rels.push({ subject: "ORG-000003", predicate: "apoya_a", object: "ORG-000002", type: "ALIANZA", src: "SRC-000001" });



// ===== INGESTA AUTOMÁTICA 2026-09-04: 135 videos + 44 personas =====
DB.persons.push({ id:"PER-000089", name:"Rodrigo Paz Pereira", img:"img/rodrigo_paz_pereira.jpg", roles:["Consultor político, señalado en el post"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000090", name:"Jacobo Árbenz", img:"img/jacobo_arbenz.png", roles:["Expresidente de Guatemala, citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000091", name:"João Goulart", img:"img/joao_goulart.jpg", roles:["Expresidente de Brasil, citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000092", name:"Salvador Allende", img:"img/salvador_allende.jpg", roles:["Expresidente de Chile, citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000093", name:"Juan Bosch", img:"img/juan_bosch.jpg", roles:["Expresidente de República Dominicana, citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000094", name:"Omar Torrijos", img:"img/omar_torrijos.jpg", roles:["General panameño, citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000095", name:"Recep Tayyip Erdogan", img:"img/recep_tayyip_erdogan.jpg", roles:["Presidencia de Turquía, citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000096", name:"Raul Hilberg", img:"img/raul_hilberg.jpg", roles:["Historiador, citado por su obra"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000097", name:"Mohammad Mossadegh", img:"img/mohammad_mossadegh.jpg", roles:["Expresidente iraní (1953), citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000098", name:"Kermit Roosevelt", img:"img/kermit_roosevelt.jpg", roles:["Agente de la CIA (1953), citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000099", name:"Piers Morgan", img:"img/piers_morgan.jpg", roles:["Presentador de TV, citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000100", name:"Marjorie Taylor Greene", img:"img/marjorie_taylor_greene.jpg", roles:["Congresista estadounidense, criticada"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000101", name:"Arthur Koestler", img:"img/arthur_koestler.jpg", roles:["Autor de 'La 13.º tribu', citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000102", name:"Rey Bulán", roles:["Rey jázaro citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000103", name:"Rey Canuto", img:"img/rey_canuto.jpg", roles:["Rey vikingo citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000104", name:"Barack Obama", img:"img/barack_obama.jpg", roles:["Expresidente de EE.UU., citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000105", name:"Tony Blair", img:"img/tony_blair.jpg", roles:["Ex primer ministro británico, citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000106", name:"Gordon Brown", img:"img/gordon_brown.jpg", roles:["Ex primer ministro británico, citado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000107", name:"Sherry Dahlinger", roles:["Citada como gestora de 'Koofy'"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000108", name:"Tal Hanan", roles:["exmiembro de las fuerzas especiales israelíes, señalado como jefe del equipo"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000109", name:"John Swinney", img:"img/john_swinney.jpg", roles:["primer ministro de Escocia"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000110", name:"Theodore Kaufman", img:"img/theodore_kaufman.png", roles:["autor del panfleto 'Germany Must Perish' (referido)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000111", name:"Rashida Tlaib", img:"img/rashida_tlaib.jpg", roles:["congresista estadounidense (web recomendada)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000112", name:"Scott Bessent", img:"img/scott_bessent.jpg", roles:["Secretario del Tesoro de EEUU (referido)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000113", name:"William Blum", img:"img/william_blum.jpg", roles:["autor de 'Killing Hope' (referido)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000114", name:"Ralph McGehee", img:"img/ralph_mcgehee.jpg", roles:["exfuncionario de la CIA (referido)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000115", name:"Robert D. Steele", img:"img/robert_d_steele.jpg", roles:["ex oficial/analista de inteligencia de EEUU"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000116", name:"Dick Cheney", img:"img/dick_cheney.jpg", roles:["vicepresidente de EEUU (2001-2009)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000117", name:"Vladímir Putin", img:"img/vladimir_putin.jpg", roles:["presidente de Rusia (referido)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000118", name:"Hillary Clinton", img:"img/hillary_clinton.jpg", roles:["ex secretaria de Estado de EEUU (referida)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000119", name:"Eric Correa-Bonza", roles:["jefe de la unidad antinarcóticos señalado"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000120", name:"Michael Chertoff", img:"img/michael_chertoff.jpg", roles:["ex funcionario del Departamento de Justicia de EEUU"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000121", name:"Leo Frank", img:"img/leo_frank.jpg", roles:["figura de un caso judicial estadounidense (referida)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000122", name:"Mary Phagan", img:"img/mary_phagan.jpg", roles:["víctima (referida)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000123", name:"Urián Spacher", roles:["antiguo socio de Neriah"],
  nationality:"", bio:"", img:"", certainty:"PENDIENTE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000124", name:"David Ben-Gurion", img:"img/david_ben_gurion.jpg", roles:["Primer ministro / fundador del Estado de Israel (mencionado)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000125", name:"Yakov Karkukli", roles:["Judío iraquí, veterano de la resistencia sionista (mencionado)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000126", name:"Amihai Eliyahu", img:"img/amihai_eliyahu.jpg", roles:["Ministro de Patrimonio de Israel (mencionado)"],
  nationality:"", bio:"", img:"", certainty:"PENDIENTE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000127", name:"Rotem Singer", roles:["Turista israelí, señalado por incendio en Torres del Paine (mencionado)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000128", name:"Douglas Tompkins", img:"img/douglas_tompkins.jpg", roles:["Empresario estadounidense (mencionado)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000129", name:"Kristine Tompkins", img:"img/kristine_tompkins.jpg", roles:["Viuda de Tompkins, embajadora de la ONU para áreas protegidas (mencionada)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000130", name:"Claudia Sheinbaum", img:"img/claudia_sheinbaum.jpg", roles:["Presidenta de México (mencionada como 'Claudia')"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000131", name:"Señora Velle", roles:["Persona mencionada en conversaciones del celular"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.persons.push({ id:"PER-000132", name:"Cayme Diverson", roles:["Rabino norteamericano (transcripción aproximada; comprador de 200.000 ha)"],
  nationality:"", bio:"", img:"", certainty: "CORROBORADO", review:"PENDIENTE", refs:["SRC-000003"] });
DB.videos.push({
  id:"VID-000022", title:"Soldado israelí grabado antes de entrar en una operación en Rafah", url:"https://x.com/Abu_Salah9/status/2093500435956973568",
  platform:"X",
  channel:"Abu_Salah9",
  tweet:"2093500435956973568",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\Abu_Salah9_2093500435956973568.mp4",
  sha256:"5114f28100277d1540938a2815ede478fa65d06e4a4f8309d6156e52f395d95a",
  size_mb:9.9,
  manipulation:"U",
  desc:"Transcripción en hebreo (ASR ruidoso, sin descripción visual) de una grabación tipo cámara corporal. Un hombre, aparentemente un soldado israelí, dice estar 'antes de otra entrada' en el marco del esfuerzo de guerra de su brigada, menciona 'hacer sionismo en Rafah', habla de hacer un vídeo/llamada con un miembro de la Knéset, y se escuchan conteos, intercambios con compañeros y vítores. Al final alaba el esfuerzo bélico (mención al 'jefe de Goliat').",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000023", title:"Recitado en árabe de una oración con frases alteradas", url:"https://x.com/ARGCRT/status/2093481921590284288",
  platform:"X",
  channel:"ARGCRT",
  tweet:"2093481921590284288",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\ARGCRT_2093481921590284288.mp4",
  sha256:"0413036570f2275256485d60af3d052de7fd179dd33a23e8fda358f366abcafc",
  size_mb:4.9,
  manipulation:"U",
  desc:"Grabación en árabe (transcripción aproximada y confusa) en la que una voz recita un texto que remite a la oración del Padrenuestro ('Abaná... en los cielos... sea santificado tu nombre... como en el cielo así en la tierra'), con frases y salidas alteradas e interpelaciones. El audio es de baja calidad y no se describen imágenes.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000024", title:"Voz pro-israelí equipara a Israel con EE.UU. como 'nación moral'", url:"https://x.com/ARGCRT/status/2093489975652126721",
  platform:"X",
  channel:"ARGCRT",
  tweet:"2093489975652126721",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_ARGCRT_2093489975652126721.mp4",
  sha256:"73055254e02bac23407d4592cf0cc73ed245ecb98118613510888b85c69d2b49",
  size_mb:1.4,
  manipulation:"U",
  desc:"Clip en inglés donde una voz analiza que EE.UU. usa bombardeos de precisión y afirma que Israel hace lo mismo porque 'Israel es como Estados Unidos, somos una nación moral'. Sostiene que en el 7 de octubre Israel perdió el equivalente a 60.000 estadounidenses muertos en un día y pregunta qué habría hecho EE.UU., aludiendo a su respuesta posterior.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000025", title:"Portavoz del Ministerio de Exteriores ruso critica a la élite occidental por el caso Epstein", url:"https://x.com/bitcoins1stlady/status/2093546160015212544",
  platform:"X",
  channel:"bitcoins1stlady",
  tweet:"2093546160015212544",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_bitcoins1stlady_2093546160015212544.mp4",
  sha256:"a7fd4adf958ae26a5900e0f5829de0f3d20c1c119af424c38385415df6cacfd3",
  size_mb:1.2,
  manipulation:"U",
  desc:"En inglés, una voz (identificada en el post como portavoz del Ministerio de Exteriores ruso) afirma que los materiales publicados 'en estos días' prueban cómo la élite occidental trata a los niños, incluso a los suyos. Sostiene que quienes durante décadas sometieron a menores y adultos a violencia lo hicieron en masa.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000026", title:"Reportaje sobre rescate de 163 menores desaparecidos en Florida", url:"https://x.com/catrina_nortena/status/2093382306362699776",
  platform:"X",
  channel:"catrina_nortena",
  tweet:"2093382306362699776",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_catrina_nortena_2093382306362699776.mp4",
  sha256:"eda5a02b2b2548a43a3bd30b700dd1cfc1cf328a639639adc30d2726796f0610",
  size_mb:30.2,
  manipulation:"U",
  desc:"Noticiero en inglés: reporta que 163 menores desaparecidos fueron hallados en una operación liderada por Florida, descrita como una de las mayores campañas de recuperación de niños en la historia de EE.UU. Detalla edades (2 meses a 17 años), distribución regional (46 Tampa, 41 Miami, 32 Jacksonville, 21 Orlando, 12 Fort Myers, 8 Pensacola, 3 Tallahassee), alcance a otros estados, Puerto Rico y 12 países, y causas (fugas, disputas de custodia, acogida insegura, abandono, negligencia, abuso o presunta trata).",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000027", title:"Análisis en francés sobre 11-S, bancos centrales e Irán", url:"https://x.com/Elissamaiss/status/2086984763596763136",
  platform:"X",
  channel:"Elissamaiss",
  tweet:"2086984763596763136",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_Elissamaiss_2086984763596763136.mp4",
  sha256:"ad93ed9c1abb0b720bc10f10a4c9367e018eb535f58e0fbafe07ab6812351a58",
  size_mb:5.6,
  manipulation:"U",
  desc:"Clip en francés (voz identificada como Kamelia en el post) que vincula los acontecimientos posteriores al 11-S y la afirmación atribuida a Wesley Clark de que EE.UU. invadiría 7 países en 5 años. El hablante sostiene que esos países eran los cuyos bancos centrales no apoyaban la 'moneda programable' y cuyos sistemas de gobierno no eran favorables tras el caso Epstein al 'modelo Rockefeller–Rothschild'. Relaciona la tensión actual con Irán como la 'gran brecha' del sistema, destaca el petróleo y la energía iraní para China y los BRICS, y habla de sistemas de pago independientes frente a una moneda programable con identificación digital.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000019"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000028", title:"Dershowitz defiende publicación de los expedientes Epstein y critica a feministas", url:"https://x.com/GBC_Press/status/1742951094727163904",
  platform:"X",
  channel:"GBC_Press",
  tweet:"1742951094727163904",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_GBC_Press_1742951094727163904.mp4",
  sha256:"294be6789b08fc850c8c52501d3df9b01d949e94c77ae1963e44a3f2c5221845",
  size_mb:5.7,
  manipulation:"U",
  desc:"En inglés, Alan Dershowitz critica a grupos feministas por escandalizarse ante quien tuvo contacto con Jeffrey Epstein, mientras —según él— guardan silencio sobre 'las violaciones de Hamás a jóvenes judías' y acusa de 'hipocresía increíble' al movimiento MeToo ('MeToo, excepto si eres judío'). Pide que se revele una lista de feministas radicales y critica a la National Lawyers Guild por 'aprobar lo que hizo Hamás'. Dice que impulsó la publicación de los papeles porque sabía que estaba exculpado y pide que salga todo, incluido lo que ponga en duda a acusadores y acusados.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000022", "PER-000021"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000029", title:"Intercambio Fetterman–Stewart sobre si Israel comete genocidio", url:"https://x.com/GBC_Press/status/2085101964832944128",
  platform:"X",
  channel:"GBC_Press",
  tweet:"2085101964832944128",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_GBC_Press_2085101964832944128.mp4",
  sha256:"cdcb63c7f10d6e248b333f0a3c271f28fd4d0f53210325a10bc47048056f47a9",
  size_mb:25.5,
  manipulation:"U",
  desc:"En inglés, un intercambio sobre si Israel comete genocidio en Palestina. Una voz responde que 'quienes definen estas cosas dicen sí' pero 'discrepa rotundamente'; afirma que por definición 'eso no fue un genocidio' y que los judíos sí sufrieron un genocidio real. Sostiene que si la meta hubiera sido eliminar al mayor número posible de palestinos podrían haberlo logrado hace tiempo; matiza que 'matar a un grupo lentamente no deja de ser matar', enmarca las muertes como 'colateral de una guerra urbana' provocada porque 'Hamás retenía rehenes y se negaba a desarmarse', y justifica eliminar a la cúpula de Hamás responsable del 7-O.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000030", title:"Noticiero por una declaración conjunta entre jefes de Estado", url:"https://x.com/JulianMaciasT/status/2093760288537325568",
  platform:"X",
  channel:"JulianMaciasT",
  tweet:"2093760288537325568",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_JulianMaciasT_2093760288537325568.mp4",
  sha256:"e4d7683586b194b1f65767c1454c94a5f1ba67be0f661fa88c8323714be60949",
  size_mb:3.3,
  manipulation:"U",
  desc:"Nota informativa en español: el narrador comenta que dos mandatarios 'están vestidos prácticamente iguales, hasta el color de la corbata' y que 'una declaración conjunta ha sellado un encuentro bilateral', y cita al 'presidente de Bolivia' diciendo 'nuestros retos no son los problemas del...' (corte). El post vinculaba este clip a los consultores políticos Rodrigo Paz y Fernando Cerimedo.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000089", "PER-000018"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000031", title:"Entrevista a un jefe de Estado sobre amenaza de EE.UU., petróleo y golpes de Estado históricos", url:"https://x.com/manelmarquez/status/2093617215861932032",
  platform:"X",
  channel:"manelmarquez",
  tweet:"2093617215861932032",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_manelmarquez_2093617215861932032.mp4",
  sha256:"3d7d2d5d3d1e20cb6e7f875b576ba1b6c825d504c0623459b271c6be87049ca9",
  size_mb:6.4,
  manipulation:"U",
  desc:"Entrevista en español en la que un hablante que se dice 'jefe de Estado' acusa a EE.UU. de querer atacar a Venezuela por albergar 'la mayor reserva de petróleo del planeta' y por querer un gobierno subordinado. Enumera golpes/intervenciones estadounidenses: Arbenz (Guatemala), João Goulart (Brasil), Salvador Allende (Chile), Juan Bosch (R. Dominicana) y Omar Torrijos ('asesinado por la CIA'). Afirma estar en la lista estadounidense de terrorismo y menciona 'se acabó el petróleo' en EE.UU. y las bombas atómicas sobre Hiroshima y Nagasaki.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000090", "PER-000091", "PER-000092", "PER-000093", "PER-000094"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000032", title:"Debate en árabe sobre Turquía, Hamás y los gaseoductos", url:"https://x.com/Milad_Nadim/status/2093667215602012160",
  platform:"X",
  channel:"Milad_Nadim",
  tweet:"2093667215602012160",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_Milad_Nadim_2093667215602012160.mp4",
  sha256:"ea0542da721beddf43b6f9c9c76a360aaa72f1d7a8b2ee93612966f0ddd23040",
  size_mb:4.1,
  manipulation:"U",
  desc:"Dos hablantes en árabe (ASR imperfecto) discuten si Turquía apoya a Hamás/el terrorismo, mencionan una fotografía 'de hace varios meses' en Turquía, gaseoductos que pasan por Azerbaiyán a través de Turquía, la llegada de gasolina 'gracias a Turquía' pese al bloqueo, las 'críticas' de Erdogan sobre Gaza, y que los israelíes entran a Turquía sin visado mientras los palestinos necesitan visa. El tono alterna reproches y defensa de Turquía.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000095"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000033", title:"Agente de la Policía Metropolitana del Reino Unido condiciona protestas por Palestina", url:"https://x.com/Nadira_ali20/status/2093337585091596288",
  platform:"X",
  channel:"Nadira_ali20",
  tweet:"2093337585091596288",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_Nadira_ali20_2093337585091596288.mp4",
  sha256:"2716a9c3b825e20bcf99a383af904ba2d7d0641d91a5fd0784aa8268265487a0",
  size_mb:9.1,
  manipulation:"U",
  desc:"En inglés, un agente (Met Police) advierte que 'si no haces eso estarías en incumplimiento de las condiciones y podrías ser arrestado'. Ante la pregunta '¿si apoyamos a Israel podemos quedarnos?', responde que ya dejó claro 'de qué lado' se trataba: 'si apoyas a Palestina, incumples tus condiciones; si apoyas a Israel, puedes quedarte'. Señala que protestar por Sudán o el Congo también está permitido.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000034", title:"Miembro del servicio estadounidense presume de combatir en Gaza", url:"https://x.com/Paddystinian/status/2093676644980428800",
  platform:"X",
  channel:"Paddystinian",
  tweet:"2093676644980428800",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_Paddystinian_2093676644980428800.mp4",
  sha256:"f37670f4925834c8caa44f3b2d5a932475682da9825b9f40c03fb997f84535a6",
  size_mb:0.8,
  manipulation:"U",
  desc:"En inglés, una persona dice: 'Soy soldado. Soy estadounidense, israelí, judío. Estoy luchando en Gaza con mi equipo. Tenemos dos meses de...' El clip corta en medio de la frase. El post lo presenta como un miembro del servicio de EE.UU. grabado presumiendo de operaciones de combate en Gaza.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000035", title:"Acto de supuesta detención de un activista internacional", url:"https://x.com/Parodyjeffx/status/2093744748464889856",
  platform:"X",
  channel:"Parodyjeffx",
  tweet:"2093744748464889856",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_Parodyjeffx_2093744748464889856.mp4",
  sha256:"406993e6f80ba0694cb319981de4e1018d8adec62cb3ed5a44fa11f9e69ae924",
  size_mb:19.5,
  manipulation:"U",
  desc:"Clip en inglés, muy breve y de audio deficiente: 'Now they could nothing international activist for the caravans...' El post lo enmarca como la detención de un activista internacional en la zona de Masafer Yatta. La transcripción no permite describir más.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000036", title:"EE.UU. congela activos de la presidenta de la CPI y presiona países de AL para salir del Estatuto de Roma", url:"https://x.com/praxedes416/status/2093674783183433728",
  platform:"X",
  channel:"praxedes416",
  tweet:"2093674783183433728",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_praxedes416_2093674783183433728.mp4",
  sha256:"6b43b2e749b398a11dc5f2ed312b3adf8f5cd7db06e1d086d3b20f25c65f6dbf",
  size_mb:7.1,
  manipulation:"U",
  desc:"Narración en español: 'Estados Unidos acaba de congelarle los activos y bloquearle las tarjetas a la presidenta de la Corte Penal Internacional', tras la solicitud de orden de arresto contra Benjamin Netanyahu por la guerra en Gaza; cita al secretario de Estado Marco Rubio catalogando a la CPI como 'tribunal corrupto y politizado'. Afirma que cinco países ya formalizaron su salida por 'sesgo geográfico' y que EE.UU. pidió a 19 países de América Latina (Colombia, Argentina, Chile, Panamá) abandonar el Estatuto de Roma a cambio de apoyo militar contra el narcotráfico.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000001", "PER-000025"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000037", title:"Audio atribuido a Richard Nixon sobre el lobby judío y 'Israel primero'", url:"https://x.com/PRO_X_313/status/1973082220513599488",
  platform:"X",
  channel:"PRO_X_313",
  tweet:"1973082220513599488",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_PRO_X_313_1973082220513599488.mp4",
  sha256:"b1672755a996df687c73b6845d7c7f10881301afc17952828c540bd758c037bd",
  size_mb:3.5,
  manipulation:"U",
  desc:"Audio en inglés atribuido al expresidente Richard Nixon: 'Déjeme explicar algo sobre lo que se llama el lobby judío en este país... creen que estar por Israel primero no significa poner a Estados Unidos segundo. Un presidente estadounidense debe pensar primero en lo mejor para EE.UU. y no dar a los israelíes un cheque en blanco'. Cita la decisión de buscar buenas relaciones con Egipto y otros vecinos de Israel que 'mis amigos israelíes no querían'.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000020"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000038", title:"Rabino critica al primer ministro israelí y se desvincula de Israel", url:"https://x.com/voiceofrabbis/status/2093446188184059904",
  platform:"X",
  channel:"voiceofrabbis",
  tweet:"2093446188184059904",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\batch2_voiceofrabbis_2093446188184059904.mp4",
  sha256:"96e13aab1256c5fb1ca8a7deded34b9381d6934d68c8a96914a7ca87a32ec67b",
  size_mb:2.6,
  manipulation:"U",
  desc:"En inglés (atribuido al rabino Meilich Cohen en el post), un orador afirma: 'Déjeme decirle cómo creo que Anoui no es un líder judío. Somos judíos estadounidenses. No hay conexión con Israel. A Anoui no le importan nuestros hermanos en Tierra Santa, solo sus agendas belicistas.'",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000039", title:"Soldado israelí describe el sistema como 'apartheid' en Hebrón", url:"https://x.com/bitcoins1stlady/status/2093320402533601280",
  platform:"X",
  channel:"bitcoins1stlady",
  tweet:"2093320402533601280",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\bitcoins1stlady_2093320402533601280.mp4",
  sha256:"30b3e39cbcdaae796f8bc1857aaa5d79855f6eac71dc6ea443dd38f75db2a0c9",
  size_mb:2.1,
  manipulation:"U",
  desc:"En inglés, un exsoldado israelí (destacado en la zona de Hebrón) relata que 'muy pronto entendí que mi trabajo era mantener un sistema de apartheid': los derechos de los colonos judíos no son los de los palestinos; no podía tocar a un colono si atacaba a un palestino; los colonos viven bajo las mismas normas que él en Jerusalén mientras el palestino vive 'bajo mi mando militar' y él podía tomar su casa o arrestar y atar a la gente a la valla; en una calle que solo los colonos pueden transitar, los palestinos pasan por ventanas y patios. Concluye que 'alguien le mintió' y que no sentía que protegiera o ayudara a nadie.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000040", title:"(Sin transcripción)", url:"https://x.com/bitcoins1stlady/status/2093705980487868416",
  platform:"X",
  channel:"bitcoins1stlady",
  tweet:"2093705980487868416",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\bitcoins1stlady_2093705980487868416.mp4",
  sha256:"eac0d118741b09425acf5afb056a61309f78286df353525fbd1b49c1fb8d3bc1",
  size_mb:2.1,
  manipulation:"U",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000041", title:"Testimonios de una mujer sobre un consultor político en campañas de Chile", url:"https://x.com/catrina_nortena/status/2093514358684856320",
  platform:"X",
  channel:"catrina_nortena",
  tweet:"2093514358684856320",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\catrina_nortena_2093514358684856320.mp4",
  sha256:"39516f73fb49e40e5bf17957fac9f030e944de93d396b9f08b005c4eddbac05d",
  size_mb:27.6,
  manipulation:"U",
  desc:"Testimonio en español: una mujer afirma que el hombre con quien estuvo vinculada 'cuenta haber frenado la Constitución de Chile' como 'una gran hazaña', con campañas de comunicación, bots, influencers y parlamentarios; no sabe quién lo contrató. Dice estar 'segurísima' de que trabajó con el 'equipo de CAS' en las últimas elecciones y que 'había hecho un nuevo presidente'. Recuerda un viaje cancelado por la 'posición/posesión del presidente' y conversaciones en el celular que le robaron. El post lo vinculaba a los consultores Rodrigo Paz y Fernando Cerimedo.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000042", title:"Diálogo en hebreo/árabe de baja calidad sobre 'Umm al-Bir' y esclavitud", url:"https://x.com/DaniMayakovski/status/2093408944781725696",
  platform:"X",
  channel:"DaniMayakovski",
  tweet:"2093408944781725696",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\DaniMayakovski_2093408944781725696.mp4",
  sha256:"c506edb1fd4ccf5bd6ec8d5cd4bdcbd1b0e9397ca358e0d5bd7a0086fb07230b",
  size_mb:12.1,
  manipulation:"U",
  desc:"Audio corto (ASR hebreo/árabe confuso) con frases como 'di a Umm al-Bir', 'tú entiendes tu casco', 'ustedes serán nuestros esclavos, como esclavos de la lámpara'. La transcripción es de muy baja calidad y no permite una descripción fiable de la escena ni de los hablantes.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000043", title:"Voz que cuestiona la cifra de seis millones y el relato del Holocausto", url:"https://x.com/forbiddenmerch/status/2093356339946799105",
  platform:"X",
  channel:"forbiddenmerch",
  tweet:"2093356339946799105",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\forbiddenmerch_2093356339946799105.mp4",
  sha256:"01d0e52f74f2bc2c6fee2c055b4fe0f620ad2eea35e77c8bc60edf39e0714903",
  size_mb:7.2,
  manipulation:"U",
  desc:"En inglés, un hablante afirma que 'la cifra de seis millones viene del Talmud' y que, para que el Mesías ('Mosheak') regrese, 'seis millones de los elegidos de Dios deben desaparecer'; sostiene que así se 'formó el relato' del Holocausto, que Israel no existía en 1945 sino en 1948, que la cifra aparece en artículos desde el s. XIX (1812, 1814, 1899, 1905, 1914, 1918, 1921), que 'el Holocausto se inventó en los años 60' y que no hay referencias 'hasta el libro de Hilberg sobre la liquidación de la judería europea' (malinterpretando su obra).",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000096"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000044", title:"Entrevista sobre el caso de Hind Rajab y los paramédicos hallados muertos", url:"https://x.com/GBC_Press/status/1758014173005434880",
  platform:"X",
  channel:"GBC_Press",
  tweet:"1758014173005434880",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\GBC_Press_1758014173005434880.mp4",
  sha256:"8b892f243be0816838772356f01c134ec910de324c0f952ab2737cee43c95b1c",
  size_mb:5.7,
  manipulation:"U",
  desc:"Clip de prensa en inglés: se relata que Hind Rajab, una niña de 6 años hallada muerta, huía de Ciudad de Gaza en un auto con su familia, fue la última sobreviviente, llamó a servicios de emergencia, la Media Luna Roja envió una ambulancia y esa niña y los paramédicos fueron hallados muertos. Un periodista pregunta si ello constituye crimen de guerra. El oficial entrevistado dice no conocer qué pasó, menciona que 'hemos visto cómo Hamás toma ambulancias' y se infiltra en hospitales, y desplaza la responsabilidad a los túneles de Hamás y a 'quién es responsable' de la situación en Gaza.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000027"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000045", title:"Enfrentamiento por compra de propiedad en Cisjordania vinculada a una sinagoga", url:"https://x.com/GBC_Press/status/1764961443961511936",
  platform:"X",
  channel:"GBC_Press",
  tweet:"1764961443961511936",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\GBC_Press_1764961443961511936.mp4",
  sha256:"76daf26051dbd66dbcda20daf8591e79b6f159f7bf7f5eef964fcb189b88bafb",
  size_mb:12.5,
  manipulation:"U",
  desc:"En inglés, un tenso intercambio en un estacionamiento: una persona insiste en que 'es propiedad privada' y reprocha a otra 'llevar esa gorra' y 'representar a una sinagoga'; la otra dice haber registrado para comprar propiedad ('quiero comprar una propiedad en Cisjordania'; 'busco en Google y dice que Palestina es Cisjordania'). Discuten si 'Palestina es Cisjordania' y por qué nadie más puede estacionar allí.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000046", title:"Análisis de por qué se resiste la publicación de los expedientes Epstein", url:"https://x.com/GBC_Press/status/2002419335147761668",
  platform:"X",
  channel:"GBC_Press",
  tweet:"2002419335147761668",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\GBC_Press_2002419335147761668.mp4",
  sha256:"8e1f6171ec0f87a996a00e937875fadd9c62c762ef81d182ec3d33e8cb6abe88",
  size_mb:3.8,
  manipulation:"U",
  desc:"En inglés, un hablante dice que 'estos archivos implican a multimillonarios y amigos suyos y a donantes políticos que él trata de proteger', que 'Epstein tenía estrechos vínculos con los servicios de inteligencia de EE.UU. y de Israel', y que por eso hay tanto esfuerzo por frenarlo; cree que 'intentarán detenerlo en otra parte y eso les repercutirá'.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000021"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000047", title:"Discurso hebreo extremista sobre la tierra y los palestinos/islamistas", url:"https://x.com/GBC_Press/status/2039897041208483840",
  platform:"X",
  channel:"GBC_Press",
  tweet:"2039897041208483840",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\GBC_Press_2039897041208483840.mp4",
  sha256:"a50ca984e7e2176e9caf38ecf0294b6ae19e9766f51fc7ec30d9fc5761a5bada",
  size_mb:5.6,
  manipulation:"U",
  desc:"Discurso en hebreo (transcripción aproximada): el orador afirma 'no somos huéspedes en nuestra tierra, es toda nuestra Tierra; quien tuvo, deben arreglárselas' y dice que no puede vivir en el mundo o en esa tierra 'si queda un judío' / 'mientras quede un islamista', con frases sobre 'convertir' la 'casa hebrea/árabe'. Es un monólogo de contenido maximalista/discriminatorio.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000048", title:"Crítica a Trump, Mossad, CIA y MI6 por la situación en Irán", url:"https://x.com/HectorPeHdz/status/2093363124241833985",
  platform:"X",
  channel:"HectorPeHdz",
  tweet:"2093363124241833985",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\HectorPeHdz_2093363124241833985.mp4",
  sha256:"749466bee57cd633c54462cec054a708c543c5b6b0e39695d0ccddb8398c9a40",
  size_mb:5.3,
  manipulation:"U",
  desc:"En inglés, un hablante describe a Trump como 'una máquina de matar' y afirma que Mossad, con el respaldo de 'CIA y MI6, financiados por Trump', han actuado 'como ciudadanos iraníes' en Irán, comparándolo con '1953 contra Mossadegh con esteroides'. Sostiene que hubo protestas genuinas por inflación y el pan, pero que el mayor problema es el robo del IRGC y las sanciones; dice que 'enviaron a Kermit Roosevelt, la versión más reciente, a Irán y falló' y desconoce qué pasará ahora.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000002", "PER-000097", "PER-000098"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000049", title:"Crítica a que EE.UU. financie a Israel y a los aplausos a Netanyahu", url:"https://x.com/hippyygoat/status/2093399759134343168",
  platform:"X",
  channel:"hippyygoat",
  tweet:"2093399759134343168",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\hippyygoat_2093399759134343168.mp4",
  sha256:"95898c844970b10de8d982c97fe864681ebef63bdf9e0910c68764329f423752",
  size_mb:4.3,
  manipulation:"U",
  desc:"En inglés, un hablante se pregunta por qué EE.UU. envía dinero a un país 'con mayor nivel de vida, mayor esperanza de vida, educación, vivienda y sanidad gratuitas'. Pregunta por qué un congresista puede vestir uniforme militar israelí en el Congreso (lo califica de 'traición') y por qué el primer ministro israelí evitó al presidente, voló directo y habló ante el Congreso; señala que 'el Congreso le dio a Netanyahu 26 ovaciones de pie' y concluye que 'es difícil verlo de otro modo que estamos ocupados' (frase entrecortada).",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000001"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000050", title:"Cuestionamiento de la cifra de seis millones y del relato del Holocausto (republicación)", url:"https://x.com/ichimikichiki/status/2093722442900680704",
  platform:"X",
  channel:"ichimikichiki",
  tweet:"2093722442900680704",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\ichimikichiki_2093722442900680704.mp4",
  sha256:"1a185d36030d63941e5f81efea4bab14ac9d4ed1f0b9f75b2e07eb19a93bc457",
  size_mb:8.6,
  manipulation:"U",
  desc:"En inglés, un discurso negacionista/tergiversador (mismo que en el clip forbiddenmerch): afirma que 'la cifra de seis millones viene del Talmud' y del Mesías ('Mosheak'), que el Holocausto 'se formó' así, que Israel data de 1948, que el número aparece desde el s. XIX (1812, 1814, 1899, 1905, 1906, 1914, 1918, 1921), y que 'el Holocausto nació en los años 60', sin referencias antes del libro de Hilberg.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000096"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000051", title:"Soldado israelí relata que se ordenó suspender patrullas de la valla de Gaza la mañana del 7-O", url:"https://x.com/irlandarra2019/status/2093559993932840960",
  platform:"X",
  channel:"irlandarra2019",
  tweet:"2093559993932840960",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\irlandarra2019_2093559993932840960.mp4",
  sha256:"2cb7d10563f51a4b999233236e406fe3fc464d438512258a31235ef7e9d4526e",
  size_mb:2.6,
  manipulation:"U",
  desc:"En inglés (con citas de radio en hebreo), un exsoldado de la Brigada Golani, 13.º Batallón (pelotón de morteros), relata que la madrugada del 7 de octubre, hacia las 5:20 h, se dio la orden por radio: 'no patrullar la valla de la frontera hasta las 9:00', el horario exacto en que Hamás planeaba atacar. Argumenta que para dar esa orden sus superiores tendrían que haber conocido el plan de Hamás 'hora por hora' y que debieron querer permitir el ataque; pide el audio real de la orden. Concluye que 'no es la primera prueba de que Israel supo, permitió, fomentó y luego explotó el 7 de octubre, incluso matando a cientos de sus propios ciudadanos' (afirmación del hablante).",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000052", title:"Escena breve de gritos en francés", url:"https://x.com/kafankafan/status/1753898022000332800",
  platform:"X",
  channel:"kafankafan",
  tweet:"1753898022000332800",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\kafankafan_1753898022000332800.mp4",
  sha256:"b1fbd9037bb564bc0d5bb6e171360036358762d6297d2e553af319f286b23d7b",
  size_mb:8.3,
  manipulation:"U",
  desc:"Clip de muy corta duración con gritos en francés ('¡Vamos, vamos, vamos, hey!'). No hay transcripción que permita describir la escena o el contexto.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000053", title:"Voz discute vaciar y reconstruir Gaza 'limpiándola'", url:"https://x.com/kafankafan/status/2093542408193486848",
  platform:"X",
  channel:"kafankafan",
  tweet:"2093542408193486848",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\kafankafan_2093542408193486848.mp4",
  sha256:"12cd8e23e2dc1ee8b28e05c4b9ed6206a6704a366b6094fa5683cf9bb05485d7",
  size_mb:4.8,
  manipulation:"U",
  desc:"En inglés, una voz (sin identificar) opina que la zona costera de Gaza podría ser muy valiosa 'si la gente se enfocara en construir sustentos' y lamenta el dinero gastado en 'túneles y municiones'. Desde la perspectiva de Israel dice que 'haría lo mejor para sacar a la gente y limpiar el lugar', menciona que Israel 'no ha dicho que no quieran que la gente regrese', y que 'si fuera Israel' 'apisonaría y trasladaría a la gente para poder entrar y terminar el trabajo'.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000054", title:"Rant acusatorio contra Israel por muertes de niños en Gaza", url:"https://x.com/more_shower/status/2093656287141662720",
  platform:"X",
  channel:"more_shower",
  tweet:"2093656287141662720",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\more_shower_2093656287141662720.mp4",
  sha256:"5ff575508f9f69dcfdd5f444d010cbffd1d586f6a3671d3166046c595fa555e0",
  size_mb:3.7,
  manipulation:"U",
  desc:"En inglés, una voz lanza una acusación directa: 'No te odiamos por ser judío... te odiamos porque asesinas niños con fuego de francotirador, dejas morir a bebés en incubadoras, quemas gente viva en sus tiendas e intentas matar de hambre a una población civil'. Añade que 'etiquetáis de antisemitas a quienes piden que dejéis de asesinar niños' y que 'incluso Piers Morgan se está dando la vuelta'.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000099"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000055", title:"Frase repetida 'hasta aquí' en hebreo", url:"https://x.com/mqudsi/status/1778155199439224832",
  platform:"X",
  channel:"mqudsi",
  tweet:"1778155199439224832",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\mqudsi_1778155199439224832.mp4",
  sha256:"aec020dfb85e0afcb1838fef30ce5430aa41c84134b39435f7844a5054a59be8",
  size_mb:2.4,
  manipulation:"U",
  desc:"Audio corto en hebreo con la frase 'hasta aquí / basta' repetida y una mención confusa. Sin elementos para describir escena ni contexto.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000056", title:"Voz que pide dejar morir de hambre a los palestinos por el 7-O", url:"https://x.com/Nadira_ali20/status/2093336187306225664",
  platform:"X",
  channel:"Nadira_ali20",
  tweet:"2093336187306225664",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\Nadira_ali20_2093336187306225664.mp4",
  sha256:"c97af7fd303d491f07d22af3b01f33fe88839cb46700191fef719c26070a183d",
  size_mb:6.9,
  manipulation:"U",
  desc:"En inglés, una voz dice: 'No, no se lo merecen. Lo que me importa... mátalos, no me importa.' Añade: 'No confío en ellos, quiero que se vayan de aquí. Quiero ser civilizado con los judíos de Israel. Y como dice la Biblia, este lugar es para nosotros, está prometido, así que pueden morir de hambre para pagar por lo que nos hicieron el 7 de octubre.'",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000057", title:"Diálogo sobre muertes en el Hospital Al-Shifa ('150 terroristas' vs '300, niños')", url:"https://x.com/Nadira_ali20/status/2093337835894198272",
  platform:"X",
  channel:"Nadira_ali20",
  tweet:"2093337835894198272",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\Nadira_ali20_2093337835894198272.mp4",
  sha256:"1f09ddfea76006ea7ff3626db34377bd32a9bd147f5981c00fe3e575a8861228",
  size_mb:1.1,
  manipulation:"U",
  desc:"En hebreo (transcripción aproximada), un intercambio: una voz 'recuerda con orgullo' una operación en Shifa (hospital) en la que se capturaron 'unos 150 terroristas' en un departamento, mientras de otro departamento 'salieron 300'. El interlocutor y el hablante discuten si eran '300 terroristas' o 'niños' (trozos ambiguos). Sugiere un debate sobre el número y la condición de muertos/capturados en la incursión al hospital.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000058", title:"Análisis de la declaración 'todos saben que Epstein era agente del Mossad'", url:"https://x.com/Parodyjeffx/status/2093587970888548352",
  platform:"X",
  channel:"Parodyjeffx",
  tweet:"2093587970888548352",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\Parodyjeffx_2093587970888548352.mp4",
  sha256:"acbb75738bd7d97be49fcf7366d80719c6872f7b5b0bd18a6edde05a0798a38a",
  size_mb:20.6,
  manipulation:"U",
  desc:"En inglés, un hablante (exdebatiente) comenta que se dijo que 'todos saben que Jeffrey Epstein era un agente del Mossad' ante '¿1.200? personas', y observa que a su conocimiento 'nunca se ha probado ni documentado' que lo fuera. Lo analiza como herramienta retórica/propagandística: 'si dices algo que todos saben pero no todos saben, y nadie se atreve a preguntar cómo lo saben, todos asienten', y propone exigir 'forma y nota al pie' para verificarlo.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000021"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000059", title:"Líder evangélico pro-Israel denuncia antisemitismo y ataca a Tucker Carlson", url:"https://x.com/Parodyjeffx/status/2093655340256538624",
  platform:"X",
  channel:"Parodyjeffx",
  tweet:"2093655340256538624",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\Parodyjeffx_2093655340256538624.mp4",
  sha256:"392a4eecd665562307c18abee1b72394005f5bd485e8e47126ccafa1b76c4890",
  size_mb:28.2,
  manipulation:"U",
  desc:"En inglés, un líder evangélico pro-israelí afirma ver 'un aumento del antisemitismo', que 'hace 10 años empezó en la izquierda' y 'ha consumido al Partido Demócrata', con una 'facción pro-Hamás'. Dice que en el último año y medio subió 'en la derecha', y nombra a 'un puñado de influencers, el más peligroso Tucker Carlson', junto a Marjorie Taylor Greene. Recuerda que Carlson ha dicho que odia a 'los sionistas cristianos' y a él y a Mike Huckabee, y que 'lleva ese desprecio con orgullo' para 'combatir este veneno'.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000006", "PER-000100", "PER-000015", "PER-000002"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000060", title:"Argumento sobre la responsabilidad de los judíos por las acciones de Israel", url:"https://x.com/Partisan_12/status/2093706022993219584",
  platform:"X",
  channel:"Partisan_12",
  tweet:"2093706022993219584",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\Partisan_12_2093706022993219584.mp4",
  sha256:"3a7adb6ec399d0f213165a3474ba6579bc59167ce69efa634c83affc09a9eb37",
  size_mb:7.6,
  manipulation:"U",
  desc:"En inglés, un hablante argumenta que si Israel se llama 'Estado del pueblo judío' y los judíos no lo repudian (o lo abrazan sin crítica), 'la inferencia razonable es que apoyan las acciones de Israel y que estas les representan'. Compara con la guerra de Vietnam (resentimiento hacia los estadounidenses hasta el movimiento antibelicista) y con Alemania en la II Guerra Mundial, y concluye que 'los no judíos sentirán animadversión hacia los judíos si no hay una ruptura clara entre la opinión judía estadounidense y la israelí'.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000061", title:"(Sin transcripción)", url:"https://x.com/petrogustavo/status/2092919805523238912",
  platform:"X",
  channel:"petrogustavo",
  tweet:"2092919805523238912",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\petrogustavo_2092919805523238912.mp4",
  sha256:"a3e26b1ff675ca727dc7b36bff73bd5147dfc1622246949cdf47e27ba2274963",
  size_mb:4.8,
  manipulation:"U",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000062", title:"Narrativa sobre la 'teoría jázara', los Rothschild y el 'dinero'", url:"https://x.com/RealTheForce/status/2093622532838400000",
  platform:"X",
  channel:"RealTheForce",
  tweet:"2093622532838400000",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\RealTheForce_2093622532838400000.mp4",
  sha256:"cb5277ab6da7a62ba3f0b18d33b0928277c24f5aef418c5f6d0d9993ce838bd8",
  size_mb:14.4,
  manipulation:"U",
  desc:"En inglés, un hablante afirma que 'los judíos exterminados en la Alemania nazi no eran considerados judíos reales' sino 'jázaros rusos y de Europa Oriental' que se convirtieron en el 740 d.C. 'bajo el rey Bulán'; cita a Arthur Koestler y su 'La 13.º tribu' ('más del 90% de los judíos actuales no son racialmente judíos'). Continúa sobre tribus que fueron a Dinamarca/Noruega (rey Canuto), la finca de Rothschild y el Templo de Apolo, que 'los Rothschild controlan la moneda del Banco de Inglaterra y la de EE.UU.', que compran políticos ('un político es como una prostituta, se vende al mejor postor'), y menciona a Obama, Blair y Brown, el Tratado de Lisboa, la 'Constitución de Europa', el poder de Lucifer y la 'doctrina luciferina' de la masonería.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000101", "PER-000102", "PER-000103", "PER-000104", "PER-000105", "PER-000106"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000063", title:"Frase en árabe de baja calidad", url:"https://x.com/Rowlandsel/status/2093517272778457088",
  platform:"X",
  channel:"Rowlandsel",
  tweet:"2093517272778457088",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\Rowlandsel_2093517272778457088.mp4",
  sha256:"25f44507f60360849eec1f4a887ab9faa499759bba298a997f726eebe592e808",
  size_mb:8.5,
  manipulation:"U",
  desc:"Clip breve en árabe (ASR muy deficiente) con una frase fragmentaria e ininteligible. Sin elementos para describir escena ni contexto.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000064", title:"Intercambio sobre tropas estadounidenses desplegadas por Israel", url:"https://x.com/senex_official/status/2093470203678224384",
  platform:"X",
  channel:"senex_official",
  tweet:"2093470203678224384",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\senex_official_2093470203678224384.mp4",
  sha256:"384f8a12fb4de02b2296eef1ac38f50b5577248c0724b9dfbf5614391c2c9e6e",
  size_mb:1.3,
  manipulation:"U",
  desc:"En inglés, un diálogo: '¿Cuántas botas sobre el terreno ha puesto EE.UU. por Israel a lo largo de su historia? ¿Cuántas veces hemos mandado soldados por Israel?'; se menciona la 'guerra de Irak' ('para Israel'), matizando que 'no, no fue por Israel' sino 'una represalia por el 11-S'; y que el gobierno 'lo pensó así' (si Irak estuvo implicado en el 11-S).",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000065", title:"Reacción en árabe a un bombardeo", url:"https://x.com/SWASWA5b/status/2093567689977479169",
  platform:"X",
  channel:"SWASWA5b",
  tweet:"2093567689977479169",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\SWASWA5b_2093567689977479169.mp4",
  sha256:"eb873f79855fc9bd12a112c90edb9879983209404d46b165ba4f65c406c46f50",
  size_mb:4.7,
  manipulation:"U",
  desc:"Clip en árabe de baja calidad: voces exclamando '¿qué?', 'la dejé, esto es lo que [hice]', 'el fuego', y '¿cómo es que los bombardean?'. Diálogo fragmentado alrededor de un ataque o bombardeo, sin contexto claro.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000066", title:"Voz israelí propone 'eliminaciones selectivas' nocturnas en Gaza", url:"https://x.com/SWASWA5b/status/2093567697745281024",
  platform:"X",
  channel:"SWASWA5b",
  tweet:"2093567697745281024",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\SWASWA5b_2093567697745281024.mp4",
  sha256:"e17a0c51e9c6bb46c403dd8867dc87fce5f263b8a8414d06b4d43117459c5fb3",
  size_mb:1.6,
  manipulation:"U",
  desc:"En hebreo, una voz afirma 'no es un secreto, [soy] parte de la decisión [del gobierno]; creo que hay que hacer eliminaciones selectivas (siculs), 30-40 por noche en Gaza; no solo los que te amenazan en ese momento, hay gente que no es humana, no debe vivir, no son personas'. Retórica maximalista de eliminación.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000067", title:"Saludo breve en árabe", url:"https://x.com/SWASWA5b/status/2093567774379397120",
  platform:"X",
  channel:"SWASWA5b",
  tweet:"2093567774379397120",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\SWASWA5b_2093567774379397120.mp4",
  sha256:"643d329372b76bbdc65dee814f3f49b58a3616fa4fbc20a029c7eb96c6aa773a",
  size_mb:10.5,
  manipulation:"U",
  desc:"Clip brevísimo con una sola palabra en árabe ('مرحبا' = 'hola'). Sin contenido sustantivo transcrito.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000068", title:"Frase en hebreo pidiendo que los niños de Gaza mueran de hambre", url:"https://x.com/SWASWA5b/status/2093567887738798080",
  platform:"X",
  channel:"SWASWA5b",
  tweet:"2093567887738798080",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\SWASWA5b_2093567887738798080.mp4",
  sha256:"b04770a7e37f56f139e1af63da6976b39644f68a6768ad4db2d7f97f1909aa9a",
  size_mb:3.8,
  manipulation:"U",
  desc:"En hebreo, una voz breve: 'y todo niño en Gaza debe morir de hambre', seguida de una exclamación confusa. Retórica de hambruna.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000069", title:"'Mickey', mayor de la reserva del IDF, admite matar niños en Gaza, Líbano e Irán", url:"https://x.com/SWASWA5b/status/2093567941287596032",
  platform:"X",
  channel:"SWASWA5b",
  tweet:"2093567941287596032",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\SWASWA5b_2093567941287596032.mp4",
  sha256:"f297f1dbbe55b923ac09bfe11debf99160b7fb8ef08e3643834a10dcfd82b1b7",
  size_mb:8.2,
  manipulation:"U",
  desc:"En inglés, un hombre dice llamarse 'Mickey', ser 'mayor en la reserva del IDF' y 'oficial de policía voluntario (policía israelí)'. Respondiendo con 'sí', afirma haber matado niños palestinos y en Líbano ('en Líbano, Gaza e Irán'), que 'a los bebés está bien matarlos', que 'quiere bombardear Gaza para convertirla en un centro comercial', que 'los niños morirán, no le importa' y que 'también los violan'. Concluye que todo el que quede en Gaza 'morirá' y que busca bebés pero 'quizá mató a una chica de 12'.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000070", title:"Crítica a pastores 'sionistas cristianos' que recaudan dinero para Israel", url:"https://x.com/WarsawErik/status/2093452408739213312",
  platform:"X",
  channel:"WarsawErik",
  tweet:"2093452408739213312",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-29\\media\\WarsawErik_2093452408739213312.mp4",
  sha256:"8e751ebf412cb1d7c2f4bab6c8789f78012c498802c7ea260a0a884c923a6277",
  size_mb:48.4,
  manipulation:"U",
  desc:"En inglés, una voz critica el 'sionismo cristiano' calificado de 'ridículo y blasfemo' y a una 'asesora de fe de la Casa Blanca que guía a cristianos'. Sostiene que 'Kenneth Copeland estaba en quiebra y montó un ministerio para que cristianos apoyen a los sionistas', acumulando más de $300 millones, tres aviones privados y una mansión sin pagar impuestos; que 'John Hagee ha recaudado más de $135 millones para Israel' y fundó 'Koofy' (CUFI), con 'Sherry Dahlinger' al frente; y que 'los sionistas recolectan $400 millones al año de los cristianos'.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000013", "PER-000012", "PER-000107"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000071", title:"May Golan defiende la moralidad del ejército israelí ante Piers Morgan, quien la confronta por la destrucción de Gaza", url:"https://x.com/GBC_Press/status/1966879451855372288",
  platform:"X",
  channel:"001_twitter_GBC_Press",
  tweet:"1966879451855372288",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\001_twitter_GBC_Press_1966879451855372288.mp4",
  sha256:"22fbaeb7665c0a3c8b7020b61234796e743933a4d9299b741c6c29220962d66f",
  size_mb:13.6,
  manipulation:"B",
  desc:"Entrevista televisiva. La ministra israelí asegura que el ejército israelí (IDF) es 'el ejército más moral del mundo' y que no dispara en ráfagas. El entrevistador le pregunta por qué el gobierno israelí mantiene prohibido el acceso de periodistas internacionales a Gaza desde hace 20 meses. Ella responde que Hamás se oculta tras la población civil, escuelas y hospitales. El entrevistador la interpela: 'has destruido el 70% de Gaza, la has reducido a un aparcamiento'. Ella niega que Gaza sea un aparcamiento.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000010", "PER-000099"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000072", title:"Discurso de una israelí criada en familia de supervivientes del Holocausto que define y critica el sionismo", url:"https://x.com/MrsRoyKeaneo/status/2093330918773592064",
  platform:"X",
  channel:"002_twitter_MrsRoyKeaneo",
  tweet:"2093330918773592064",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\002_twitter_MrsRoyKeaneo_2093330918773592064.mp4",
  sha256:"24c99f573bb7a32e6eb1d4314bfb0dd5d8362b7ffc047e63b02fe2af70f96f21",
  size_mb:10.3,
  manipulation:"B",
  desc:"Monólogo de una mujer que se presenta como nacida y criada en Israel en una familia judía superviviente del Holocausto (descendientes de inmigrantes de Polonia y Hungría). Relata haberse criado con el discurso de que los judíos solo tienen lugar seguro en Eretz Israel. Explica que encuentra más preciso diferenciar entre sionismo y antisionismo que entre derecha e izquierda. Define el sionismo político como una ideología que implementó un estado-nación mediante colonización, ocupación, apartheid, desposesión, limpieza étnica y genocidio de la población nativa. Concluye que el antisionismo es la oposición a esos crímenes y que incluye a judíos que apoyan la justicia y liberación palestina.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000073", title:"Tucker Carlson responde a preguntas sobre el derecho de Israel a existir y defiende estándares universales", url:"https://x.com/GBC_Press/status/2035100852491325440",
  platform:"X",
  channel:"003_twitter_GBC_Press",
  tweet:"2035100852491325440",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\003_twitter_GBC_Press_2035100852491325440.mp4",
  sha256:"bd007126ce420af5d8aef060a4fca4bea83dc78326149202aa2a58f0dafdd3ca",
  size_mb:21.7,
  manipulation:"B",
  desc:"Entrevista o diálogo en el que un entrevistador pregunta a un hombre (Tucker Carlson) si cree en el derecho de Israel a existir o si busca su destrucción. Carlson distingue entre derecho a existir y que el estado siga como nación, dice que no quiere la destrucción de Israel ni de ningún país, y que no cree en matar inocentes. Rechaza definirse por etiquetas, dice creer en estándares de aplicación universal y en los derechos humanos y no en derechos étnicos. Menciona que, en las primeras dos semanas de la guerra, Israel tomó el sur del Líbano y que considera que el Líbano también tiene derecho a existir.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000006"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000074", title:"Participante católico sostiene en una comisión que criticar el sionismo no es antisemitismo", url:"https://x.com/Haitham47117914/status/2091644922826768386",
  platform:"X",
  channel:"004_twitter_Haitham47117914",
  tweet:"2091644922826768386",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\004_twitter_Haitham47117914_2091644922826768386.mp4",
  sha256:"a8d1ce9b15ae8eeae7b1d92f79c5ed9efe48bf812eb6d99e7b2db3ab03edfbd5",
  size_mb:4.7,
  manipulation:"B",
  desc:"Fragmento de una discusión en un comité centrado en la libertad religiosa. Un participante católico afirma que el catolicismo no exige abrazar el sionismo como profecía cumplida y pregunta si entonces todos los católicos serían antisemitas. Presionan a otro interviniente para que diga si considerar antisemita a quien no apoya al estado político de Israel; ante la respuesta 'según tú, sí', el católico responde que no está de acuerdo porque la catolicidad no atribuye ningún significado profético a la creación del estado de Israel.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000075", title:"Denuncia de una supuesta operación israelí global de interferencia electoral (Black Core/Mossad)", url:"https://x.com/DiegoVelezGar/status/2093159697415024640",
  platform:"X",
  channel:"005_twitter_DiegoVelezGar",
  tweet:"2093159697415024640",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\005_twitter_DiegoVelezGar_2093159697415024640.mp4",
  sha256:"cce4a2527241a2b6cb516dbc2c5386d59d23be0bbd09db72fb7af62d7250d1a3",
  size_mb:16.7,
  manipulation:"A",
  desc:"Comentario en español sobre un reportaje. Se afirma que una empresa cibernética israelí fue expuesta por dirigir una operación de interferencia electoral en cinco países, citando a los servicios de inteligencia franceses que habrían expuesto a la firma Black Core vinculada al Mossad interfiriendo en elecciones en Francia, Escocia, Angola, Togo y Nueva York. Menciona una presunta ONG falsa de ayuda a Palestina creada para recaudar y desmovilizar, ataques digitales contra el primer ministro escocés John Swinney y el Partido Nacional Escocés, y una investigación de The Guardian sobre un equipo secreto de contratistas israelíes dirigido por Tal Hanan que habría manipulado más de 30 elecciones. Termina afirmando que el siguiente objetivo es Colombia.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000108", "PER-000109", "PER-000001"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000076", title:"Negacionismo del Holocausto atribuido a un rabino y comparaciones con el estado de Israel", url:"https://x.com/After_TheTruth/status/2092998932745900032",
  platform:"X",
  channel:"006_twitter_After_TheTruth",
  tweet:"2092998932745900032",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\006_twitter_After_TheTruth_2092998932745900032.mp4",
  sha256:"d2c1503f35f5a6e5d4c5c62b97b3f3cb79fb3511826bc4a4ae169ebc671fe100",
  size_mb:35.7,
  manipulation:"A",
  desc:"Clip de un orador que afirma que la cifra de seis millones de víctimas del Holocausto 'no es verdad' y que ni siquiera fueron tres millones, citando un supuesto número de la Cruz Roja de 171.000. Afirma que hubo judíos que 'declararon la guerra' a Alemania en 1933 y menciona el libro 'Germany Must Perish' de Theodore Kaufman. Compara ese episodio con el estado de Israel en 2023 cuando, según él, declaró la guerra contra lo que decían ser Hamás pero que califica de pueblo palestino, y señala que se llamó a los palestinos 'animales humanos'. El video se difunde con la afirmación 'hasta su propio rabino sabe que es una mentira'.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  roles:["PER-000110"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000077", title:"Eran Efrati, exsoldado israelí, relata su paso por el ejército y critica el uso político del antisemitismo", url:"https://x.com/Ylainoa/status/2093794922897780736",
  platform:"X",
  channel:"007_twitter_Ylainoa",
  tweet:"2093794922897780736",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\007_twitter_Ylainoa_2093794922897780736.mp4",
  sha256:"b3754f9dc63ffa1f1a770aabb93d60444c4f735c0eec89c2d2ffb3865de0c732",
  size_mb:6.0,
  manipulation:"B",
  desc:"Declaraciones en español de un hombre que se presenta como Eran Efrati, exsoldado combatiente del ejército de Israel y exdirector de una organización que investiga la alianza entre Estados Unidos e Israel. Indica que se unió al ejército, entendió que apoyaba un régimen de apartheid sobre el pueblo palestino y lo dejó, dedicándose a investigar el dinero que Israel obtiene de la ocupación (venta de armas y tecnología probadas primero en Cisjordania, Gaza y Jerusalén). Afirma que el gobierno de Netanyahu tiene lazos fuertes con supremacistas blancos, fascistas y neonazis en Europa y EEUU, y critica que se use el antisemitismo como arma política para defender crímenes; sostiene que cionismo y judaísmo no son lo mismo.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000011"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000078", title:"Presentación de la base de datos 'whofundedgenocide.com' sobre el dinero pro-Israel en la política de EEUU", url:"https://x.com/xIsraelExposedx/status/2093754107139915776",
  platform:"X",
  channel:"008_twitter_xIsraelExposedx",
  tweet:"2093754107139915776",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\008_twitter_xIsraelExposedx_2093754107139915776.mp4",
  sha256:"d6922026ad3060ea74d2387bbe3f9cf63c7e87730dfae5b4a296851a6ae394d7",
  size_mb:30.6,
  manipulation:"U",
  desc:"Voz en off que presenta 'whofundedgenocide.com', una base de datos publicada tras acceder a la web de una de las mayores operaciones de financiación pro-Israel en la política estadounidense. Se menciona un grupo llamado Pro-Israel Network que usa el vehículo Democracy Engine para canalizar dinero a candidatos fuera de AIPAC, una lista de 11.168 donantes con empleadores, y cifras: unos 402 millones de dólares recaudados por PAC pro-Israel, de los que 369 millones proceden de donantes individuales. Se afirma que la red es de 'dark money', que eligen 523 congresistas de ambos partidos, y se recomienda consultar opensecrets.org, una hoja de cálculo de AIPAC y la web de Rashida Tlaib para seguir las votaciones.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000111"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000079", title:"Mark Weber ofrece una explicación revisionista de las fotos del campo de Bergen-Belsen", url:"https://x.com/forbiddenmerch/status/2093754760935387136",
  platform:"X",
  channel:"009_twitter_forbiddenmerch",
  tweet:"2093754760935387136",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\009_twitter_forbiddenmerch_2093754760935387136.mp4",
  sha256:"c5de03b5210535c23d130707a71e1d50dbe93da91fc4c1400c5ac71888240265",
  size_mb:24.7,
  manipulation:"A",
  desc:"Entrevista en la que un hombre (Mark Weber) reconoce que las imágenes del campo de concentración de Bergen-Belsen son reales y trágicas, pero sostiene que las víctimas murieron de hambre y enfermedad en las últimas semanas de la guerra y no por un programa de exterminio. Argumenta que las vías de ferrocarril destruidas imposibilitaron el suministro de comida y agua, que el campo recibió evacuados de otros campos ante el avance soviético y que, si la política alemana hubiera sido exterminar, la gente habría muerto antes. Concluye que por eso los 'revisionistas del Holocausto' afirman que no hubo política programada de exterminio.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  roles:["PER-000053"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000080", title:"Un maestro/rabino afirma que miles de millones de 'adoradores de ídolos' no tienen derecho a vivir según la Torá", url:"https://x.com/daniel153177/status/2093765650011344896",
  platform:"X",
  channel:"011_twitter_daniel153177",
  tweet:"2093765650011344896",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\011_twitter_daniel153177_2093765650011344896.mp4",
  sha256:"02f4d932824c043ad5cfee0b2a3d5d42f4dcbd5d0871904e1a713663fd989517",
  size_mb:0.9,
  manipulation:"A",
  desc:"Intercambio en español en el que se pregunta a un hombre (aparentemente un maestro/rabino) si cree en los 'gentiles justos'. Este responde que los menciona en sus clases y presenta un video donde, según dice, chinos, indios, hindúes, budistas y cristianos suman al menos 6.500 millones de 'adoradores de ídolos' que, de acuerdo a la Torá, no tienen derecho a vivir.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000081", title:"Jeffrey Sachs atribuye las guerras actuales a la pretensión hegemónica de EEUU y Europa", url:"https://x.com/apocalypseos/status/2093798890260828160",
  platform:"X",
  channel:"012_twitter_apocalypseos",
  tweet:"2093798890260828160",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\012_twitter_apocalypseos_2093798890260828160.mp4",
  sha256:"57d47421b5a9977914267a7e0feef3fe4768e0177cdc78a4f967f717c64900f1",
  size_mb:14.3,
  manipulation:"B",
  desc:"Intervención de un analista (Jeffrey Sachs) que afirma que EEUU y Europa quieren mantener prerrogativas hegemónicas y 'dirigir el mundo'. Menciona al secretario del Tesoro de EEUU ('un vulgar'), que según él declara en el Financial Times que Occidente determina quién hace qué y qué países destruye. Aplica esa idea a la guerra en Ucrania, al 'genocidio' en Gaza, a la guerra contra Irán y a la 'incautación' de los ingresos petroleros de Venezuela. Advierte de declive relativo y absoluto de Occidente, de una burbuja financiera ligada a la IA y de una guerra comercial entre EEUU y Canadá.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000049", "PER-000112"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000082", title:"Publicación sobre el demonio japonés Tengu ('nariz larga') con connotación de 'sembrar guerra'", url:"https://x.com/TinaZimmermann4/status/2093773103331446784",
  platform:"X",
  channel:"013_twitter_TinaZimmermann4",
  tweet:"2093773103331446784",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\013_twitter_TinaZimmermann4_2093773103331446784.mp4",
  sha256:"ef98bf4dcbd7de20f131ab8ead2a7a794d4c3e8990c56d924e35608d10b16cb9",
  size_mb:2.1,
  manipulation:"A",
  desc:"El audio transcrito es un fragmento en gran parte ininteligible (posible letra de canción lírica en inglés que no guarda relación directa con el tema). La descripción de la publicación alude a un demonio de la mitología japonesa de unos 1.300 años, el Tengu, conocido por su nariz larga y su pequeño sombrero, que según los cuentos populares sembraba la guerra entre países; la cuenta lo difunde sin más contexto en un hilo de contenido político.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000083", title:"Discurso en hebreo con lenguaje deshumanizante sobre los palestinos, etiquetado 'N-A-Z-I-S'", url:"https://x.com/Alfredo03894203/status/2093812522457460737",
  platform:"X",
  channel:"015_twitter_Alfredo03894203",
  tweet:"2093812522457460737",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\015_twitter_Alfredo03894203_2093812522457460737.mp4",
  sha256:"07c953c1eed0ff07a9ecbf9bd6564d16223c9e807fef22cd3b66509acca8c03d",
  size_mb:6.7,
  manipulation:"A",
  desc:"Audio en hebreo (transcripción confusa y fragmentaria) en el que un hablante habla de la reconstrucción/rehabilitación de Israel y de 'reconstruirse' sin la presencia de otros ('hay gente que no son personas, no deberían vivir'), con referencias a cifras (30-40) y a la necesidad de 'hacer la guerra' o exterminar a quienes se considera enemigos. El autor de la publicación lo difunde con la etiqueta 'NAZIS'.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000084", title:"Cámara oculta a un promotor de un centro de datos en Oklahoma que dice no importar la oposición vecinal", url:"https://x.com/WallStreetApes/status/2093780009957855232",
  platform:"X",
  channel:"016_twitter_WallStreetApes",
  tweet:"2093780009957855232",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\016_twitter_WallStreetApes_2093780009957855232.mp4",
  sha256:"0aaf5d83a91dac2540f1689da942879a92a008960eaf20fb95e3f350657c8c89",
  size_mb:57.8,
  manipulation:"U",
  desc:"Grabación con cámara oculta en un encuentro comunitario. Un promotor de un centro de datos en Piedmont, Oklahoma, es preguntado por vecinos que se oponen al proyecto. Dice que buscan 'buenos puntos de la red eléctrica' y que aquí la infraestructura es muy buena; expresa con evasivas que la oposición local no cambiará su decisión, dejando claro que solo valora el suministro de energía y no las preocupaciones de agua o de la comunidad. El informante (narrador) explica los problemas de presión de agua y demandas eléctricas del proyecto.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000085", title:"Discurso mesiánico sobre superioridad judía, la muerte de 'dos tercios del mundo' y la herencia de la riqueza", url:"https://x.com/cesarvidal/status/2088147718468182016",
  platform:"X",
  channel:"017_twitter_cesarvidal",
  tweet:"2088147718468182016",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\017_twitter_cesarvidal_2088147718468182016.mp4",
  sha256:"7aba5d655e2c38239063de314eeaaf04c6191edd46554208366722dd07aea813",
  size_mb:9.7,
  manipulation:"A",
  desc:"Audio en inglés con transcripción confusa y fragmentaria. Un orador religioso habla sobre la supervivencia de los 'justos' que reconocerán la superioridad de los judíos, la llegada de los 'gentiles justos' a Jerusalén/Israel a aprender la Torá, y afirma que unas cuatro mil millones de personas (dos tercios del mundo) morirán, quedando pocos millones de judíos ortodoxos y un pequeño porcentaje de 'goyim', que heredarán toda la riqueza del mundo. La publicación de César Vidal pregunta cuántas horas de televisión se darían a declaraciones como estas si las pronunciaran iraníes, alemanes o españoles.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000086", title:"Declaración sobre que el petróleo venezolano habría cubierto '25 veces' el coste de una guerra", url:"https://x.com/DaniMayakovski/status/2093896001929048064",
  platform:"X",
  channel:"018_twitter_DaniMayakovski",
  tweet:"2093896001929048064",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\018_twitter_DaniMayakovski_2093896001929048064.mp4",
  sha256:"b3104f1f9b1308a4a401f676910cd00de2f1e963a0fa1a70cc8e6313d2599827",
  size_mb:1.2,
  manipulation:"B",
  desc:"Clip muy breve de un orador no identificado que comenta la situación respecto a Venezuela: '¿cómo lo hacemos en Venezuela? No mal. Hemos sacado tanto petróleo de Venezuela que hemos pagado el coste de la guerra unas 25 veces'. La descripción de la publicación añade que EEUU habría asegurado el control mayoritario de más de 65.000 millones de barriles de reservas petroleras probadas en Venezuela.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000087", title:"Joe Kent afirma que el lobby israelí 'dictaba términos' dentro de la Casa Blanca de Trump", url:"https://x.com/GBC_Press/status/2060335504353288192",
  platform:"X",
  channel:"020_twitter_GBC_Press",
  tweet:"2060335504353288192",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\020_twitter_GBC_Press_2060335504353288192.mp4",
  sha256:"bfddd5bb65518142c9e281c1dfaf9469a973ea5a118980204bf6080b3b8533c6",
  size_mb:14.2,
  manipulation:"B",
  desc:"Discurso o entrevista de Joe Kent, que se presenta como quien estuvo en la administración de Trump dirigiendo el Centro Nacional de Contraterrorismo (NCTC). Relata que vio 'marchar a los israelíes e imponer términos', manipulando la inteligencia, los medios y a quienes rodeaban a Trump para entrar en la guerra. Dice que dejó el cargo porque no soportaba ver más bolsas de cadáveres. Menciona a un interlocutor llamado Scott que lleva décadas advirtiéndolo. Comenta la derrota de un candidato (Massey) y el rechazo de la guerra por parte de generaciones jóvenes, y aboga por detener las guerras y no enviar dinero al exterior.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000048"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000088", title:"Conferencia: la CIA como organización con 'rama de la muerte' y 'rama de la propaganda'", url:"https://x.com/DaniMayakovski/status/2093986536639385601",
  platform:"X",
  channel:"021_twitter_DaniMayakovski",
  tweet:"2093986536639385601",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\021_twitter_DaniMayakovski_2093986536639385601.mp4",
  sha256:"0d0e6f42d2f5a77199423de5924f87fd167c953ec600050898e701787e990d4f",
  size_mb:33.1,
  manipulation:"B",
  desc:"Conferencia en la que un orador habla de cómo el cine de seguridad nacional (James Bond, Misión Imposible, 24, Homeland) moldea la percepción pública de la CIA. Cita cifras de películas y series apoyadas por el Departamento de Defensa (1.947) y por la OSC/FBI (114). Explica que la CIA heredó de la OSS y colaboró con el MI6, y que tiene dos ramas: la 'rama de la muerte' (libro 'Killing Hope' de William Blum), responsable de matar a un mínimo de seis millones de personas entre 1947 y 1987 según un estudio de 14 antiguos miembros, y el derrocamiento/intento de derrocar a más de 50 gobiernos, la mayoría democráticamente elegidos; y la 'rama de la propaganda' (gestión de la mente de la población global). Cita a Ralph McGehee (25 años en la CIA) sobre que la función central de la CIA es la desinformación global.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000113", "PER-000114"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000089", title:"Itamar Ben-Gvir se enfrenta y altera ante críticos en el Capitolio de EEUU", url:"https://x.com/GBC_Press/status/1916962997827682304",
  platform:"X",
  channel:"022_twitter_GBC_Press",
  tweet:"1916962997827682304",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\022_twitter_GBC_Press_1916962997827682304.mp4",
  sha256:"0f3a79e8cd2b9764ad812fbc218ec1a70728204994a374192f8a7dfd1520565a",
  size_mb:13.4,
  manipulation:"U",
  desc:"Clip con audio en inglés de baja calidad/confuso. Un hombre grita repetidamente frases como '¡Eres el destructor de la nación!', 'antisemitismo' y 'yo nunca apoyé el 11-S', en un contexto de enfrentamiento verbal. La descripción de la publicación indica que se trata del ministro de Seguridad Nacional de Israel, Itamar Ben-Gvir, que afrontó una confrontación humillante en el Capitolio de EEUU y perdió los estribos.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000047"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000090", title:"Publicación sobre supuesto uso por Israel de órganos de palestinos muertos (sin audio)", url:"https://x.com/023_twitter_kafankafan/status/2093949349881647104",
  platform:"X",
  channel:"023_twitter_kafankafan",
  tweet:"2093949349881647104",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\023_twitter_kafankafan_2093949349881647104.mp4",
  sha256:"30357a610af907d6267eaf6d1b6d5f7ba526f1597ef231e4066c2914e735d189",
  size_mb:0.5,
  manipulation:"A",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000091", title:"Conversación en hebreo sobre donaciones y mano de obra en Israel", url:"https://x.com/kafankafan/status/2090664246275149824",
  platform:"X",
  channel:"024_twitter_kafankafan",
  tweet:"2090664246275149824",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\024_twitter_kafankafan_2090664246275149824.mp4",
  sha256:"84ba0aead262494ddd950c20aa6691a25d1d640f73497e57175c0aad4c7b5dec",
  size_mb:3.0,
  manipulation:"U",
  desc:"Audio en hebreo con transcripción confusa y fragmentaria. Dos hablantes conversan al parecer sobre porcentajes de donaciones/salarios relativos en Israel y sobre el uso de mano de obra palestina y trabajadores extranjeros, con frases como 'en ciertas épocas palestinos, y después extranjeros' y comentarios sobre que sería 'un porcentaje grande en el mundo'. Falta contexto, parte del audio no se entiende.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000092", title:"Robert D. Steele: las 1.000 bases militares de EEUU sirven para contrabandear oro, armas, drogas y niños", url:"https://x.com/Accountable2019/status/2085120891839537152",
  platform:"X",
  channel:"025_twitter_Accountable2019",
  tweet:"2085120891839537152",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\025_twitter_Accountable2019_2085120891839537152.mp4",
  sha256:"7dfbaa685e9234ae74c44586089062f57daae502c3c79101d8ca9afb20a7fb7b",
  size_mb:6.0,
  manipulation:"A",
  desc:"Declaraciones de un hombre (Robert D. Steele) que afirma que las mil bases militares de EEUU 'no son para poder militar sino escalones (lily pads) para el contrabando' con el que la CIA traslada oro, armas, drogas, efectivo y 'niños pequeños' para las élites de EEUU. Afirma que la guerra es un centro de beneficios que produce partes del cuerpo, huérfanos y 'bienes humanos' traficables, y que los bancos dependen de la guerra y las drogas para su liquidez. Se presenta en la publicación como ex analista de inteligencia de EEUU.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  roles:["PER-000115"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000093", title:"Soldados del IDF se filman prendiendo fuego a tierras palestinas en Cisjordania (sin audio)", url:"https://x.com/026_twitter_Parodyjeffx/status/2094063840782606336",
  platform:"X",
  channel:"026_twitter_Parodyjeffx",
  tweet:"2094063840782606336",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\026_twitter_Parodyjeffx_2094063840782606336.mp4",
  sha256:"35a7cb0ae5d6bdb4330253ebe737e8704b593873622c02dc72859bbc79de183e",
  size_mb:4.1,
  manipulation:"U",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000094", title:"Dick Cheney (2002) defiende ante la prensa la invasión de Irak y la doctrina de 'ganar, ganar, ganar'", url:"https://x.com/BowesChay/status/1841987050326589441",
  platform:"X",
  channel:"027_twitter_BowesChay",
  tweet:"1841987050326589441",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\027_twitter_BowesChay_1841987050326589441.mp4",
  sha256:"0c77d2f3ab203bb219193c68585b80cf1ad7f88a80b44027e57cd308240cfff3",
  size_mb:6.6,
  manipulation:"B",
  desc:"Extracto de una entrevista (2002) con un alto funcionario estadounidense (Dick Cheney). Afirma que 'si eliminas a Sadam (Huseín)… tendrá un enorme efecto positivo en la región', y que Irán y otros dirían que ha pasado la época de tales regímenes. Relata que en 1986 escribió un libro sobre cómo tratar militarmente a los regímenes terroristas, y defiende que la aplicación del poder es lo más importante para ganar la 'guerra contra el terror', enunciando sus 'tres principios': ganar, ganar y ganar, y que la primera victoria (Afganistán) facilita la segunda (Irak). Se puede oír un intercambio sobre el efecto en la región y críticas a que no se vio tal efecto en Afganistán.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000116"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000095", title:"George Lincoln Rockwell cuestiona la cifra de seis millones de víctimas del Holocausto", url:"https://x.com/forbiddenmerch/status/2093843476240605184",
  platform:"X",
  channel:"028_twitter_forbiddenmerch",
  tweet:"2093843476240605184",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\028_twitter_forbiddenmerch_2093843476240605184.mp4",
  sha256:"ca446f9cb9ce7c1d53489e8035f993c13ff269acde1fa7bf96dba7d6d456947a",
  size_mb:5.2,
  manipulation:"A",
  desc:"Clip de audio con transcripción confusa en el que un orador (George Lincoln Rockwell) afirma que la cifra de 'seis millones de judíos' es una exageración o mentira, ironizó sobre que 'los judíos habrían sido más listos que el gato', y acusa a los judíos de ser 'grandes maestros de la mentira'. La descripción de la publicación añade que la cifra de seis millones se habría obtenido mediante la tortura de Rudolf Höss, comandante de Auschwitz.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  roles:["PER-000052"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000096", title:"Un orador con padres supervivientes de Auschwitz responde a una crítica judía sobre las comparaciones con los nazis", url:"https://x.com/myzccc/status/2042055085920858112",
  platform:"X",
  channel:"029_twitter_myzccc",
  tweet:"2042055085920858112",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\029_twitter_myzccc_2042055085920858112.mp4",
  sha256:"1164a49ab729b156a9415b05af4d6c89ab056c6f00ffb14be30488f7efb97f28",
  size_mb:17.7,
  manipulation:"U",
  desc:"Intercambio verbal. Una persona del público, de origen alemán y judío, protesta entre lágrimas por considerar ofensivas las referencias nazis hechas por el orador hacia parte del público. El orador responde que no respeta 'lágrimas de cocodrilo', que no le gusta jugar 'la carta del Holocausto', y revela que su padre estuvo en Auschwitz y su madre en Majdanek, y que toda su familia por ambos lados fue exterminada y sus padres participaron en el Levantamiento del Gueto de Varsovia. Añade que precisamente por esas lecciones no callará cuando Israel comete crímenes contra los palestinos, y que considera despreciable usar el sufrimiento de sus padres para justificar lo que Israel hace a diario contra los palestinos.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000097", title:"El eurodiputado Jussi Saramo pregunta en el Parlamento Europeo cuántos palestinos mataba Israel antes del 7-0 de Hamás", url:"https://x.com/GBC_Press/status/1969636382587924480",
  platform:"X",
  channel:"030_twitter_GBC_Press",
  tweet:"1969636382587924480",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\030_twitter_GBC_Press_1969636382587924480.mp4",
  sha256:"4867a0f9840a8ef9ea727072d03141f1d97979c3bb68af0de2e6b9e65b5c856c",
  size_mb:4.7,
  manipulation:"B",
  desc:"Discurso en finés de un eurodiputado (Jussi Saramo) en el Parlamento Europeo. Pregunta si los allí presentes saben cuántos palestinos mataba Israel cada año antes del ataque de Hamás, cuántos palestinos han sido detenidos sin justificación (incluidos niños y civiles como rehenes), si la derecha israelí aceptó alguna vez un modelo de un solo estado democrático o el de dos estados, y afirma que Israel hace todo lo posible por impedir la paz y los derechos humanos de los palestinos, y que además ha apoyado a Hamás. La descripción de la publicación introduce el tema como '¿sabéis cuántos palestinos mataba Israel cada año antes del ataque de Hamás?'",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000057"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000098", title:"Enfrentamiento verbal entre un portavoz israelí y una comentarista italiana sobre si la guerra en Gaza es 'una guerra'", url:"https://x.com/GBC_Press/status/1970368092350930945",
  platform:"X",
  channel:"031_twitter_GBC_Press",
  tweet:"1970368092350930945",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\031_twitter_GBC_Press_1970368092350930945.mp4",
  sha256:"1381301366f0c0cf89e282151fcc3de87f4ad76b6a817cb51410c9facf830c97",
  size_mb:8.4,
  manipulation:"B",
  desc:"Intercambio acalorado en italiano en un programa. Un portavoz israelí insiste 'es una guerra, es una guerra'. Una comentarista italiana replica 'no es una guerra: vosotros tenéis un ejército y la mejor inteligencia del mundo; habéis sido siempre los agresores y queréis la tierra palestina'. El portavoz niega querer la tierra palestina y la comentarista responde que durante siglos han ido expulsando palestinos. Discuten sobre si los niños entre las víctimas son 'soldados de Hamás', la definición de 'niño' y si en este conflicto debería haber una 'contraparte' que contradiga lo que se ve desde hace meses. La comentarista dice que no es una guerra porque solo hay un ejército.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000099", title:"El embajador israelí ante la ONU suspende su rueda de prensa ante una pregunta sobre armas nucleares", url:"https://x.com/Parodyjeffx/status/2094058461440978945",
  platform:"X",
  channel:"032_twitter_Parodyjeffx",
  tweet:"2094058461440978945",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\032_twitter_Parodyjeffx_2094058461440978945.mp4",
  sha256:"be7edc866540f976abc1d6012b092e74b1794bbefabc5800d560ba2f334648d0",
  size_mb:22.6,
  manipulation:"B",
  desc:"Audio en árabe con transcripción confusa. Según la descripción de la publicación, el embajador de Israel ante la ONU comenzó a ponerse nervioso y tuvo que cerrar su conferencia de prensa cuando un periodista preguntó por qué Israel puede tener armas nucleares mientras otros países de Oriente Medio no pueden. En la transcripción se alcanzan a reconocer frases sobre 'Israel' y preguntas de un periodista sobre derechos y armas.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000100", title:"Riccardo Bosi sostiene que Ucrania 'no es un estado soberano' y que la guerra es una distracción del 'deep state'", url:"https://x.com/nightglow98/status/2093771390553849856",
  platform:"X",
  channel:"033_twitter_nightglow98",
  tweet:"2093771390553849856",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\033_twitter_nightglow98_2093771390553849856.mp4",
  sha256:"1bf7977b29c21375b09be4a37fede7144164e4a423e75b347072906eaff89ad2",
  size_mb:4.5,
  manipulation:"A",
  desc:"Discurso de un hombre (Riccardo Bosi, presentado como excomandante de fuerzas especiales australianas) sobre Ucrania. Afirma que la guerra es 'una distracción masiva', que Ucrania no es un estado soberano con fronteras reconocidas y que 'sigue siendo parte de Rusia desde el siglo X', calificándola de 'Rusia invadiendo Rusia'. Sostiene que la CIA trabajó en Ucrania durante 70 años para tumbar a la Unión Soviética y apoderarse de los recursos de Ucrania oriental, que el país es el centro del 'deep state' y que Putin está 'cortando la cabeza de la serpiente', afirmando que ya se tomaron Kazajistán (capital) y que la guerra fue ideada con Hillary Clinton. Desaconseja fiarse de los medios de comunicación.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  roles:["PER-000055", "PER-000117", "PER-000118"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000101", title:"Afirmación de que las fotos de la 'liberación de Auschwitz' fueron escenificadas", url:"https://x.com/jdlyonsKY/status/2094078233574518784",
  platform:"X",
  channel:"034_twitter_jdlyonsKY",
  tweet:"2094078233574518784",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\034_twitter_jdlyonsKY_2094078233574518784.mp4",
  sha256:"424af24d8cd34bde0eb3b8914f7af0a3016f0c96507444bd0c560d2175b44aae",
  size_mb:4.6,
  manipulation:"A",
  desc:"Clip en el que una persona dice que en las fotos tomadas por los rusos al 'liberar' Auschwitz nunca hay nieve y que 'la nieve era realmente alta'. Relata que habló con la embajada rusa y que le dijeron que las fotos no son falsas, pero que cuando llegó el ejército no había cámaras y solo más tarde las tomaron, 'como se ve ahora'. Concluye que no son la liberación del pueblo, que no había tanta gente con ropa ni niños, y sugiere que las imágenes fueron escenificadas.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000102", title:"Informe de The Guardian: la guerra de Trump contra Irán habría quebrado financieramente a la Armada de EEUU", url:"https://x.com/SprinterPress/status/2093808588787470336",
  platform:"X",
  channel:"035_twitter_SprinterPress",
  tweet:"2093808588787470336",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\035_twitter_SprinterPress_2093808588787470336.mp4",
  sha256:"85e5d3b527b359abe0eca23bcd93ac7b4209508d828b517c2a02368f1920c47f",
  size_mb:9.8,
  manipulation:"U",
  desc:"Narración que informa de un reportaje de The Guardian que, citando documentos internos del Pentágono, afirmaría que la 'guerra de Donald Trump contra Irán' ha llevado a la Armada de EEUU a quedarse sin fondos y a tomar dinero directamente de las nóminas de los marinos para cubrir operaciones de combate. Se cita a un ex oficial militar que trabaja en contratos de la Armada indicando que se dispararon todas las armas, se estropearon todos los buques y que un memorando del Pentágono advertía de faltantes en la nómina por trasvases para financiar operaciones; un funcionario naval dijo a The Guardian que se 'robó' dinero de la nómina para contingencias en el extranjero y que se pospuso el mantenimiento no urgente.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000103", title:"Discurso en hebreo sobre la UNRWA en el marco de la denuncia del ataque a las instituciones de la ONU", url:"https://x.com/aboanhar2006/status/2093827627639574528",
  platform:"X",
  channel:"036_twitter_aboanhar2006",
  tweet:"2093827627639574528",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\036_twitter_aboanhar2006_2093827627639574528.mp4",
  sha256:"2babae30222e1837862d4cffa14a3a0c0ede6369059b85086621b5b9df05df11",
  size_mb:1.0,
  manipulation:"B",
  desc:"Clip breve en hebreo (transcripción confusa) sobre la UNRWA y su jefe: frases como 'aquí se sentaba el jefe de la UNRWA… no habrá UNRWA, fuera la UNRWA'. La descripción de la publicación (del fotógrafo Ibrahim Al-Matari) denuncia que 'las instituciones de la ONU son atacadas, la CPI es castigada, las órdenes de la CIJ son ignoradas y el derecho internacional es violado a la vista de todos', preguntándose qué queda del orden mundial cuando los criminales de guerra pueden desafiar sus leyes.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000104", title:"Llamada a aislar a Israel como 'estado apartheid/genocida' y denuncia de una ley sobre ejecución de presos palestinos", url:"https://x.com/aboanhar2006/status/2093827695394291712",
  platform:"X",
  channel:"036_twitter_aboanhar2006",
  tweet:"2093827695394291712",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\036_twitter_aboanhar2006_2093827695394291712.mp4",
  sha256:"756461000c8f6af98c627949276e51e3f4076eaa275a12ee546b29a4c9d904b0",
  size_mb:0.9,
  manipulation:"B",
  desc:"Monólogo en inglés de un orador que tacha a Israel de 'estado apátrida, apartheid, genocida, asesino en serie y mentiroso patológico' y pide aislarlo y avergonzar a quien vaya allí. Dice que el sionismo 'se apoya solo en la propaganda' y que es una sociedad 'fascista de pleno' que actúa con impunidad. Afirma que el Knesset israelí acaba de aprobar una ley que permite la ejecución de presos palestinos pero no de israelíes, y que lo vio de primera mano cuando estuvo en Israel en 2016.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000105", title:"DW reporta a Ben Gvir frente a una presa palestina: 'Se acabaron los campamentos de verano'", url:"https://x.com/dw_espanol/status/2094178030813958145",
  platform:"X",
  channel:"037_twitter_dw_espanol",
  tweet:"2094178030813958145",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\037_twitter_dw_espanol_2094178030813958145.mp4",
  sha256:"5e746668c99a430368441dd37f9e691e3b4e4e271b44e1e1aac53ea3f3e0d72f",
  size_mb:41.5,
  manipulation:"U",
  desc:"Audio en hebreo con transcripción muy confusa y fragmentaria, con repeticiones. Según la descripción y el reportaje de DW Español, se trata de Itamar Ben Gvir, ministro de Seguridad Nacional de Israel y responsable de la Policía y las prisiones, dirigiéndose a una presa palestina con la frase 'Se acabaron los campamentos de verano', en un contexto de condiciones penitenciarias. La transcripción es de baja calidad y en gran parte ininteligible.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000106", title:"Gustavo Petro difunde una investigación sobre presunto vínculo de la primera dama de Bolivia con el narcotráfico y critica a Marco Rubio", url:"https://x.com/petrogustavo/status/2093648099285569537",
  platform:"X",
  channel:"038_twitter_petrogustavo",
  tweet:"2093648099285569537",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\038_twitter_petrogustavo_2093648099285569537.mp4",
  sha256:"0560ed91dc36d3fc8b635574898f4709f621a0db0bc5c7daf77181ff138d35a8",
  size_mb:43.8,
  manipulation:"B",
  desc:"Un reportaje en español sobre una investigación de la fiscalía boliviana. Se detallan presuntas avionetas que 'llevaban y traían cocaína hasta 500 kilos por día' y dinero, geolocalización en aeródromos (p. ej. José Chávez Suárez en Santana de Yacuma), un vuelo con 350.000 dólares el 26 de mayo, y fajos de efectivo encontrados en la casa de la primera dama (hasta cerca de un millón de dólares). Se afirma que el jefe de la unidad de lucha contra el narcotráfico, Eric Correa-Bonzales, cobraba 50.000 dólares por avioneta (unos 1,5 millones al día) y respondía a 'Cerimedola' (la primera dama), y que fue el nexo con un intento de feminicidio ('la hija de la verdad'). La publicación del presidente de Colombia, Gustavo Petro, señala que el secretario de Estado de EEUU, Marco Rubio, 'se sentó con un narcotraficante' y culpa a la extrema derecha.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  roles:["PER-000017", "PER-000025", "PER-000119"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000107", title:"David Icke relata la teoría de los 'israelíes danzantes' del 11-S y la liberación por Michael Chertoff", url:"https://x.com/GBC_Press/status/1793120979432116224",
  platform:"X",
  channel:"039_twitter_GBC_Press",
  tweet:"1793120979432116224",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\039_twitter_GBC_Press_1793120979432116224.mp4",
  sha256:"c74aaecd9ea0af4be8b946aeb469d1ebd0d5df1147d45d649c7e864d274dc38d",
  size_mb:5.9,
  manipulation:"A",
  desc:"Discurso de David Icke sobre el 11-S: afirma que una mujer en Nueva Jersey vio a cinco hombres de aspecto medio-oriental grabando y celebrando ante la primera torre mientras ardía, que resultaron ser israelíes ('Dancing Israelis'), detenidos y retenidos 71 días hasta que los liberó el responsable de la división penal del Departamento de Justicia, al que califica de 'ultrasionista', Michael Chertoff. Dice que dos de ellos eran agentes del Mosad y que cuando fueron liberados alegaron que estaban allí 'para documentar el evento', preguntando cómo sabían que iba a ocurrir. Menciona también la puesta en libertad de 200 detenidos en la primavera que volvieron a Israel.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  roles:["PER-000051", "PER-000120"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000108", title:"Video sobre la afirmación de que los sionistas no serían los judíos originales sino 'adoradores de demonios' franquistas", url:"https://x.com/TheWyteRabbit1/status/2093171875820023808",
  platform:"X",
  channel:"040_twitter_TheWyteRabbit1",
  tweet:"2093171875820023808",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\040_twitter_TheWyteRabbit1_2093171875820023808.mp4",
  sha256:"d408b9186c1aaff66b2f4cdc6f97adf62d12c0231d9adccfa01755756f8c047b",
  size_mb:12.5,
  manipulation:"A",
  desc:"Monólogo en inglés de un orador que afirma que el relato escolar sobre el Holocausto y la fundación de Israel 'no fue así'. Asegura que había cristianos/católicos desaparecidos en la Pascua y que se hallaron cuerpos atribuidos a judíos (calumnia de sangre), afirmando que no eran judíos sino 'frankistas'. Menciona el caso de Leo Frank (asesinato de Mary Phagan) y sostiene que la 'secta frankista' sigue participando. Afirma que la familia de Theodor Herzl procedía de la zona de Moravia y Bohemia donde se fundó el culto frankista, insinúa que Israel pudo haber sido establecido por frankistas y que no eran 'judíos adoradores de la Torá'. La publicación de The White Rabbit lo presenta como Candace Owens afirmando que 'los sionistas no son los judíos originales sino adoradores de demonios'.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  roles:["PER-000043", "PER-000030", "PER-000121", "PER-000122"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000109", title:"Relato de que Israel bloqueó cientos de alimentos y bienes de primera necesidad a Gaza durante 19 años", url:"https://x.com/Bry___l/status/2093765417848250368",
  platform:"X",
  channel:"041_twitter_Bry___l",
  tweet:"2093765417848250368",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\041_twitter_Bry___l_2093765417848250368.mp4",
  sha256:"7e9caa159bf11a96909469961636dad177f33d0e314602f8be05971f527b167f",
  size_mb:7.0,
  manipulation:"B",
  desc:"Narración (en parte en galés, con partes en inglés) en la que se afirma que Israel prohibió la entrada a Gaza de 240 artículos durante 19 años, y se enumeran: carne roja, pollo, pescado, huevos, queso, pasta, té, café, chocolate, material para niños desnutridos, lápices, lápices de colores, libros, juguetes/ instrumentos musicales, jabón, champú, colchones, mantas, zapatos, ropa, vestidos de novia y otros; se menciona '430 artículos de comida, 2 millones de personas durante 19 años' (según transcripción). La publicación lo califica de castigo colectivo, asedio y 'terror por bloqueo, por diseño, por el estado'. La descripción añade medicinas como anestesia, tanques de oxígeno, medicación contra el cáncer, mesas quirúrgicas y bisturís.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000110", title:"Un hombre israelí es retenido en la aduana australiana tras invocar herencia aborigen para saltarse la cuarentena", url:"https://x.com/Partisangirl/status/2094251143115542528",
  platform:"X",
  channel:"042_twitter_Partisangirl",
  tweet:"2094251143115542528",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\042_twitter_Partisangirl_2094251143115542528.mp4",
  sha256:"c5634f0e0a49ecff8decc6518dd8936a15abefdd337e14defd20f4d69fa96294",
  size_mb:50.8,
  manipulation:"U",
  desc:"Registro de un procedimiento de control fronterizo en Australia. Un viajero (Michael), que según la narración venía de Israel, invoca su 'herencia aborigen' para reclamar exención de esperar en la cola de control de pasaportes; un supervisor lo deriva a control y revisión de equipaje. En la inspección de cuarentena se detectan artículos no declarados: alimentos (incluidas semillas, nueces), productos permitidos/prohibidos (p. ej. semillas de amapola y hojas de eucalipto con posibles enfermedades) y se le sanciona por no declararlos. El viajero acusa discriminación y discute con los funcionarios (Paul, Brian) sobre la ley de cuarentena de 1901 y el precedente de las enfermedades que diezmaron a la población aborigen. Al final se le informa del riesgo cuarentenario de los bienes no declarados.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000111", title:"AJ+ denuncia una supuesta operación israelí con Havas para manipular los resultados de ChatGPT con un falso instituto", url:"https://x.com/ajplusfrancais/status/2094075699225042945",
  platform:"X",
  channel:"043_twitter_ajplusfrancais",
  tweet:"2094075699225042945",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\043_twitter_ajplusfrancais_2094075699225042945.mp4",
  sha256:"21ac09815b050f8bad2fddb889d6f07f62f94e67f6d471e05046ad61021b9f37",
  size_mb:34.7,
  manipulation:"U",
  desc:"Reportaje en francés. Se afirma que el gobierno israelí, para cambiar la opinión pública, trabajó con Havas Media Germany (cuya casa matriz estaría controlada mayoritariamente por la familia Bolloré) y la empresa estadounidense Piro Inc para 'alimentar' las respuestas de las IA a favor de Israel. Detalla que crearon un falso think tank, el 'Hanover Institute for Public Policy', que no existe legalmente, no tiene dirección física, ni colaboradores ni autores, y aun así publicó 124 informes (casi 600.000 palabras) en solo 9 días. Explica que el formato (títulos en forma de pregunta, bloques de datos, FAQ) está 'calibrado para chatbots' y enlaza hacia otros informes del mismo instituto, con lo que las IA retoman esa única fuente. Señala que Politico probó que ChatGPT y Perplexity ya citaron al Hanover Institute en preguntas neutrales sobre Gaza, y cita al jurista experto en derecho digital ",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000112", title:"El rabino Yitzchak Breitowitz es citado pidiendo el exterminio de Amalek según la Torá", url:"https://x.com/IIFBS_/status/1848140035670806528",
  platform:"X",
  channel:"044_twitter_IIFBS_",
  tweet:"1848140035670806528",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\044_twitter_IIFBS__1848140035670806528.mp4",
  sha256:"a9f905eb45ecd898be8e4be440f161034f3831da438b15aea103db0d94ddbbae",
  size_mb:1.5,
  manipulation:"B",
  desc:"La publicación difunde una cita del rabino Yitzchak Breitowitz: 'La Torá dice que tomamos esa nación llamada Amalek y la exterminamos. Hombres, mujeres, niños, bebés, todo'. La transcripción del audio contiene un discurso en inglés (otra parte del material recortado) de un orador no identificado que reflexiona sobre la correlación entre el Holocausto y el estado de Israel, señalando que tras 1945, en un breve período de culpa mundial ('rahmónut'), las naciones aprobaron la creación de Israel.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  roles:["PER-000062"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000113", title:"Clip que defiende el 'aplanamiento' de Gaza con comparación a los bombardeos de la Segunda Guerra Mundial", url:"https://www.youtube.com/watch?v=11R9RVUgOUk",
  platform:"YouTube",
  channel:"Breezy Politics (YouTube)",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\045_youtube_@BreezyPolitics_11R9RVUgOUk.mp4",
  sha256:"a730208578903fe3943486e9aad71b07f22df401a4750b31a122b30e9d44ead9",
  size_mb:14.2,
  manipulation:"B",
  desc:"Se ve/oye a un orador respondiendo a quien cuestiona que hayan muerto demasiados civiles palestinos. Dice 'dinos cómo hacerlo de otra forma' y plantea cuántos se consideran 'demasiados' muertos comparando con la Segunda Guerra Mundial tras Pearl Harbor. Ante el argumento de que lo ocurrido en Gaza no encaja con los valores cristianos (matar niños, madres, familias; 'no somos militantes'), el orador dice que 'no lo compra' y, refiriéndose a la amenaza de Israel y a que 'si no se entiende, es una amenaza para el gobierno de Israel', afirma que 'aplastaron Gaza; simplemente aplastadla' y que 'aplanamos Berlín, aplanamos Tokio', concluyendo que si él fuera Israel probablemente habría hecho lo mismo. Difundido con el título 'Bye Lindsey 👋'.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000114", title:"La iglesia de San Porfirio en Gaza, una de las más antiguas del mundo, 'borrada de la historia'", url:"https://x.com/100_alpha/status/2094423973412880512",
  platform:"X",
  channel:"047_twitter_100_alpha",
  tweet:"2094423973412880512",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\047_twitter_100_alpha_2094423973412880512.mp4",
  sha256:"bf1f1b227d1d66247b24b02ba23d50f946c5503f6e9ecb77f4ddb5be5c8f663f",
  size_mb:0.6,
  manipulation:"U",
  desc:"Clip breve cuyo audio se transcribe como 'Llevo 10 años en el país' (repetido). La descripción de la publicación denuncia que se está borrando la historia y que esta era la iglesia de San Porfirio, tercera iglesia ortodoxa griega más antigua del mundo, un santuario que resistió más de 1.600 años, refiriéndose a su destrucción en el contexto de la guerra en Gaza.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000115", title:"Réplica: 'la guerra contra los palestinos lleva 75 años' y fue iniciada por Israel en 1948", url:"https://www.youtube.com/watch?v=U_rTXJcTgeQ",
  platform:"YouTube",
  channel:"Breezy Politics (YouTube)",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\048_youtube_@BreezyPolitics_U_rTXJcTgeQ.mp4",
  sha256:"d49a7322bf0282c41a9f2704f20a706b39254ee976adf651ed3347757343c07a",
  size_mb:13.4,
  manipulation:"B",
  desc:"Un orador responde a quien dice que los palestinos iniciaron la guerra el 7 de octubre, afirmando que no fue así y que la guerra 'lleva 75 años'. Asevera que Israel la inició en 1948 mediante la limpieza étnica de 750.000 personas, y que más del 80% de los habitantes de Gaza son refugiados de Al-Majdal (hoy Ascalón, en el sur de Israel), desalojados de sus hogares y 'colocados en campamentos de prisioneros con alambre de espino', para luego ser trasladados en camiones en 1950 a la Franja de Gaza, donde quedaron 'almacenados' permanentemente; que Israel llevó después a refugiados judíos y rusos a Ascalón para impedir que regresaran. Concluye que no se puede mantener a la gente bajo asedio, cortada del mundo, y esperar que 'solo se pliegue'.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000116", title:"Peña Nieto, captado en una boda judía en Italia junto a Avishay Neriah, empresario israelí vinculado a Pegasus", url:"https://www.youtube.com/watch?v=rZcAVNi5XbY",
  platform:"YouTube",
  channel:"TRT Español (YouTube)",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\expediente_sombras_israel_2026-08-31_continuacion\\media\\049_youtube_BreezyPolitics_rZcAVNi5XbY_android.mp4",
  sha256:"bbe1dabfc1e9f963dbbd10c2dc38f886834ba5e55cc4388ff81d1b6771382065",
  size_mb:6.3,
  manipulation:"U",
  desc:"Reporte periodístico en español sobre la reaparición de Enrique Peña Nieto en una boda judía en Italia junto al empresario israelí Avishay Neria, señalado en 2025 por el medio israelí Marker por un presunto soborno de 25 millones de USD vinculado al software de espionaje Pegasus y a su campaña presidencial de 2002.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000058", "PER-000059", "PER-000123"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000117", title:"Narración documental: expulsión de judíos de países árabes por el sionismo", url:"https://x.com/DaniMayakovski/status/2093315930432372736",
  platform:"X",
  channel:"1_twitter_DaniMayakovski",
  tweet:"2093315930432372736",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\1_twitter_DaniMayakovski_2093315930432372736.mp4",
  sha256:"be44fd1b74a3d61c2d0c6816d19303a9715f21fde6736892cc446ec626082dff",
  size_mb:21.9,
  manipulation:"D",
  desc:"Narración en inglés sobre la historia del sionismo: episodios de violencia de activistas sionistas contra judíos en Irak, Egipto y Marruecos para presionar su emigración a Israel; crítica a Ben-Gurion y la noción de los judíos como 'materia prima humana' para fundar el Estado. ASR con repeticiones.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000124"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000118", title:"Documental: bombas en sitios judíos de Irak tras la guerra de 1948", url:"https://x.com/DaniMayakovski/status/2093313123524427776",
  platform:"X",
  channel:"2_twitter_DaniMayakovski",
  tweet:"2093313123524427776",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\2_twitter_DaniMayakovski_2093313123524427776.mp4",
  sha256:"c73f4324ceff027e7f1a531a62531c8644f1ffd903ff6597c2a3b9990d5f9ba3",
  size_mb:1.7,
  manipulation:"U",
  desc:"Narración en inglés sobre el caso de los judíos de Irak: tras la guerra de 1948, cinco bombas explotaron en sitios judíos creando pánico y emigración; se atribuyen a miembros del movimiento sionista subterráneo (Joseph Basri, Shalom Salah) con conexión a la inteligencia israelí Max Bineth.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000074", "PER-000076", "PER-000075", "PER-000125"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000119", title:"NA_twitter_58HKN58H", url:"https://x.com/58HKN58H/status/2093449133549871104",
  platform:"X",
  channel:"NA_twitter_58HKN58H",
  tweet:"2093449133549871104",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\NA_twitter_58HKN58H_2093449133549871104.mp4",
  sha256:"fb35819adbd6ba8d67226e997dec8aecc50d086da69d428b2af4a399d78d4cf0",
  size_mb:0.9,
  manipulation:"U",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000120", title:"Testimonio: control de identidad en un bus de Jerusalén", url:"https://x.com/alextopol/status/2093241570992492544",
  platform:"X",
  channel:"NA_twitter_alextopol",
  tweet:"2093241570992492544",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\NA_twitter_alextopol_2093241570992492544.mp4",
  sha256:"1ce3eb81f39acab4ca77c65fb4e892fa65c8e9cf01ec67e5595117d6b86d1447",
  size_mb:14.3,
  manipulation:"U",
  desc:"Testimonio en inglés de un periodista/observador: en un autobús en Jerusalén, pasajeros palestinos con identificación israelí sufrieron un retén; al mostrar su documento de israelí-judío, lo dejaron pasar de inmediato, describiendo racismo institucional.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000121", title:"Narración: Israel como protector de los cristianos en Oriente Medio", url:"https://x.com/ARGCRT/status/2093481005868834816",
  platform:"X",
  channel:"NA_twitter_ARGCRT",
  tweet:"2093481005868834816",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\NA_twitter_ARGCRT_2093481005868834816.mp4",
  sha256:"55e8df9987f65fcb6ed5c6bd652b8dce5df2bb418b11777fab6e75121263d96a",
  size_mb:6.4,
  manipulation:"C",
  desc:"Comentario en inglés sobre Israel como 'único lugar seguro para cristianos en Medio Oriente', mencionando un ataque a la única iglesia católica de Gaza, a colonos armados incendiando la iglesia de San Jorge en Taybeh, y la contradicción discursiva.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000122", title:"Discurso religioso interpretando las guerras entre naciones como protección para Israel", url:"https://x.com/bitcoins1stlady/status/2076782480728690688",
  platform:"X",
  channel:"NA_twitter_bitcoins1stlady",
  tweet:"2076782480728690688",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\NA_twitter_bitcoins1stlady_2076782480728690688.mp4",
  sha256:"352b5a32418cbb39929eae4d868dacd12688030ecfca9d1705f405de554ea670",
  size_mb:6.3,
  manipulation:"U",
  desc:"Comentario religioso/parabólico en inglés (ASR ruidoso) sobre guerras y batallas entre naciones como distracción; interpretación tipo homilía sobre Makhot y soberanía, con referencias redundantes a Edom y Germania.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000123", title:"Reportaje: detención administrativa de palestinos sin cargos", url:"https://x.com/Compass_Report/status/2093054672340672512",
  platform:"X",
  channel:"NA_twitter_Compass_Report",
  tweet:"2093054672340672512",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\NA_twitter_Compass_Report_2093054672340672512.mp4",
  sha256:"1d120aaea0bbb34d69dec5ad00139178ba4e8fe959c34c2a25e44f1f67cf1bf4",
  size_mb:9.6,
  manipulation:"U",
  desc:"Reportaje sobre centros de detención administrativa israelíes: casi una docena de campos que retienen a 5,000 palestinos (médicos, abogados, niños, activistas) sin cargos ni juicio; testimonio de una madre cuyo hijo de 16 años fue detenido 5 meses y multado por lanzar piedras.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000124", title:"Discurso antisemita sobre la cifra de seis millones del Holocausto", url:"https://x.com/forbiddenmerch/status/2093305020544339968",
  platform:"X",
  channel:"NA_twitter_forbiddenmerch",
  tweet:"2093305020544339968",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\NA_twitter_forbiddenmerch_2093305020544339968.mp4",
  sha256:"a996e084b99ce4fac80cd46198abadaf505f7130975bab1c137f41c1239f79ba",
  size_mb:5.3,
  manipulation:"F",
  desc:"Discurso negacionista del Holocausto en inglés: discute el origen de la cifra de 6 millones, lenguaje antisemita y conspirativo sobre control judío de medios; contenido extremo y no verificado.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000125", title:"Conferencia en hebreo sobre la formación de los combatientes y las mujeres", url:"https://x.com/GBC_Press/status/1766619256890720257",
  platform:"X",
  channel:"NA_twitter_GBC_Press",
  tweet:"1766619256890720257",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\NA_twitter_GBC_Press_1766619256890720257.mp4",
  sha256:"1c13838a18f6cc76b1814432ecc50bdd3d56e085e3a2fd9f0c7124745391db7b",
  size_mb:8.4,
  manipulation:"C",
  desc:"Discurso en hebreo (ASR de baja fidelidad) con reflexiones religiosas/nacionales, menciones a la resistencia y a 'terroristas de hoy' comparados con generaciones previas; contenido fragmentario.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000126", title:"Comentario sobre Jeffrey Epstein y la corrupción del gobierno de EE.UU.", url:"https://x.com/GBC_Press/status/1990008793456156673",
  platform:"X",
  channel:"NA_twitter_GBC_Press",
  tweet:"1990008793456156673",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\NA_twitter_GBC_Press_1990008793456156673.mp4",
  sha256:"d8131eff9b283fd279d3bd4ac8986fe36c940bfb782c100f05af2d235bebd8d0",
  size_mb:0.8,
  manipulation:"U",
  desc:"Comentario en inglés: afirma que Jeffrey Epstein tiene grabado a 'todo político importante de EE.UU.' haciendo algo terrible con menores; acusa a la corrupción del gobierno de EE.UU. y pide 'limpiar los establos'. Sin corroboración.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  roles:["PER-000021"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000127", title:"Legislador de EE.UU. introduce resolución 502B sobre abusos en Cisjordania", url:"https://x.com/Haitham47117914/status/2093141696368234496",
  platform:"X",
  channel:"NA_twitter_Haitham47117914",
  tweet:"2093141696368234496",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\NA_twitter_Haitham47117914_2093141696368234496.mp4",
  sha256:"e66d19dd3863250aa79cf53c0f9524d5bbd01b51c29623e464a2e3b21b3ba92d",
  size_mb:8.9,
  manipulation:"U",
  desc:"Discurso en inglés (aparentemente de un legislador estadounidense) denunciando violaciones de derechos humanos en Cisjordania: colonos israelíes atacan con impunidad a palestinos con complicidad de la IDF; anuncia una resolución 502B en el Senado exigiendo un informe de derechos humanos en 30 días.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000128", title:"Testimonio: un operador político vinculado a campañas en Chile", url:"https://x.com/JulianMaciasT/status/2093473322554044416",
  platform:"X",
  channel:"NA_twitter_JulianMaciasT",
  tweet:"2093473322554044416",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\NA_twitter_JulianMaciasT_2093473322554044416.mp4",
  sha256:"017e6ca45952327c5039ec6432bb43931e96a354ea8d5b706c4110ced3b03158",
  size_mb:8.3,
  manipulation:"U",
  desc:"Testimonio en español (ASR con ruido) sobre un consultor político de ultraderecha que presuntamente trabajó con bots, influencers y parlamentarios para frenar la constitución de Chile y en las últimas elecciones; mención a contratación desconocida y campañas.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000129", title:"Acusación: supuestos soldados del IDF actuando como provocadores en NY", url:"https://x.com/MrsRoyKeaneo/status/2093217100118560768",
  platform:"X",
  channel:"NA_twitter_MrsRoyKeaneo",
  tweet:"2093217100118560768",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\NA_twitter_MrsRoyKeaneo_2093217100118560768.mp4",
  sha256:"eac1df11c05709da1f25267c1086afb3830120faf5e4a7f6c18366bf6e6c9b3a",
  size_mb:8.7,
  manipulation:"C",
  desc:"Comentario en inglés acusando a soldados de la IDF de hacerse pasar por manifestantes palestinos (agentes provocadores) en Washington Square Park, de cambiarse de ropa y de tener el audio silenciado; señala a 'Steph Cohen' como agente del Mossad. Sin verificación.",
  certainty:"NO_VERIFICADO", review:"PENDIENTE",
  roles:["PER-000084"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000130", title:"Reportaje de TRT World sobre turistas israelíes en Asia", url:"https://x.com/trtworld/status/2093203674566647809",
  platform:"X",
  channel:"NA_twitter_trtworld",
  tweet:"2093203674566647809",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\NA_twitter_trtworld_2093203674566647809.mp4",
  sha256:"d01ae84a63f5349859a778b5f3e9133a809eff179d1c33b78634bb7918073db3",
  size_mb:92.2,
  manipulation:"U",
  desc:"Reportaje (TRT World) sobre quejas de países asiáticos (Tailandia, India, Vietnam) por turistas israelíes exsoldados en el 'Hummus Trail': comportamiento ruidoso, racista y robos; la fundación Hind Rajab busca procesar a exsoldados por crímenes de guerra; India (Kasol 'mini-Israel').",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000131", title:"Convocatoria a la Cumbre de Solidaridad Saharaui de enero de 2027", url:"https://x.com/ultras_antifaa/status/2093448788103061504",
  platform:"X",
  channel:"NA_twitter_ultras_antifaa",
  tweet:"2093448788103061504",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\NA_twitter_ultras_antifaa_2093448788103061504.mp4",
  sha256:"ddc966139c8682a3bd9d05bbef425152c8ef8894941edd718e10491f39188751",
  size_mb:9.4,
  manipulation:"U",
  desc:"Declaración de solidaridad con el pueblo saharaui: cumbre en campos de refugiados en Argelia, denuncia de la ocupación marroquí de 50 años, el muro militar de 2,700 km, y la normalización Marruecos-Israel (2020) como 'reconocimiento mutuo de ocupaciones'.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000002"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000132", title:"Entrevista: críticas al tratamiento israelí de Gaza y a la prensa", url:"https://youtube.com/shorts/lWWCG--Q7gU",
  platform:"YouTube",
  channel:"NA_youtube_@BreezyPolitics",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\NA_youtube_@BreezyPolitics_lWWCG--Q7gU.mp4",
  sha256:"f54cdf08d2600b97845f56d2863bf05d6f1542e7acde19c2b28fae9813dc53fc",
  size_mb:14.1,
  manipulation:"U",
  desc:"Entrevista/segmento en inglés: preguntas críticas a un periodista/editor sobre el primer ministro israelí con orden de arresto, el ministro de patrimonio Amihai Eliyahu (petición de métodos 'más dolorosos que la muerte'), y la cifra de periodistas palestinos asesinados en Gaza.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000126"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000133", title:"Monólogo contra la corrupción de EE.UU. con acusaciones antisemitas", url:"https://x.com/aapayes/status/2092478395045093765",
  platform:"X",
  channel:"aapayes",
  tweet:"2092478353768951808",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis\\aapayes_2092478353768951808.mp4",
  sha256:"212a03af123d0f32e6b722702c2cee5dc36e9219cefb963be43730d643a536ba",
  size_mb:6.1,
  manipulation:"C",
  desc:"Monólogo (inglés/español) de un hombre que acusa de corrupción al FBI, la Corte Suprema, el Departamento de Justicia y los medios de EE.UU.; afirma que 'judíos que practican la cábala' contaminan la nación; dice que políticos estadounidenses violan a niñas para ser grabados por el Mossad israelí y así Israel los chantajea; pide que se difunda el video.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000134", title:"Crítica a la desregulación de tierras rurales y a los incendios en la Patagonia", url:"https://x.com/DaniMayakovski/status/2010270228379292089",
  platform:"X",
  channel:"DaniMayakovski",
  tweet:"2010269970932944896",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis\\DaniMayakovski_2010269970932944896.mp4",
  sha256:"4a88aa2f88557d618b11e5823362ddbdc9781791b208e502e8867c2f42bbe3f7",
  size_mb:8.0,
  manipulation:"U",
  desc:"Voz (español) critica medidas del gobierno argentino: se libera la compra de tierras rurales por privados extranjeros y se elimina la prohibición de cambiar la actividad productiva del campo por 30 a 60 años tras un incendio; relaciona los incendios en la Patagonia con intereses mineros y poderes que actúan 'a cara vista'.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000041"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000135", title:"Teoría del 'Plan Andinia' y la anexión de la Patagonia", url:"https://x.com/DaniMayakovski/status/2010271151763652664",
  platform:"X",
  channel:"DaniMayakovski",
  tweet:"2010270606554501120",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis\\DaniMayakovski_2010270606554501120.mp4",
  sha256:"231d90ae6b48fbbc278e49b0c958e9b3a40bb1f9d7e68ffd4c05e278401a497e",
  size_mb:7.3,
  manipulation:"C",
  desc:"Orador (español) habla del 'Plan Andinia', supuestamente la intención sionista de quedarse con la Patagonia argentina, planeada hace más de 50 años; dice que hay indicios de que entra en fase de ejecución inminente; menciona la creación 'artificial' del estado de Israel y un supuesto plan para anexar la Patagonia a Israel en el 50º aniversario (1998).",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000030"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000136", title:"Cita de Sergio Bergman sobre Argentina como tierra prometida", url:"https://x.com/DaniMayakovski/status/2010272061831455053",
  platform:"X",
  channel:"DaniMayakovski",
  tweet:"2010271361365626880",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis\\DaniMayakovski_2010271361365626880.mp4",
  sha256:"80facdfbc3c3933efa54daedbf641d2bc37217e7d35d4158c06523c885022f48",
  size_mb:2.7,
  manipulation:"U",
  desc:"Clase/entrevista (español) con Sergio Bergman, rabino, quien habla de Argentina como 'tierra prometida' que debe ser 'partida y repartida' como se hizo en Palestina con la creación del Estado de Israel en la partición de 1947 por las Naciones Unidas.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000031"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000137", title:"Acusaciones sobre incendios intencionales en la Patagonia y presencia israelí", url:"https://x.com/Nexo_Latino/status/2018096159063941359",
  platform:"X",
  channel:"Nexo_Latino",
  tweet:"2018095954583330817",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis\\Nexo_Latino_2018095954583330817.mp4",
  sha256:"882666b45a2f3e69f7222cb156d3e335dd21be119110afd84ae4f5d8bd6ca776",
  size_mb:15.1,
  manipulation:"U",
  desc:"Narración (español) afirma que más de 45.000 hectáreas en la Patagonia argentina fueron incendiadas de forma intencional; dice que el nuevo gobierno permite vender tierras a 'sionistas/extranjeros'; denuncia la presencia de soldados israelíes relacionados con el genocidio del pueblo palestino y un supuesto acuerdo de la empresa israelí Mekorot para privatizar el agua de 11 provincias.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000041"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000138", title:"Análisis sobre incendios en la Patagonia y compra de tierras", url:"https://x.com/p4purrip0p/status/1937570653088956716",
  platform:"X",
  channel:"p4purrip0p",
  tweet:"1937570539767242752",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis\\p4purrip0p_1937570539767242752.mp4",
  sha256:"2eb0cbb84c9e8c70e236b1ac25308438ffb742a07c7a10e3415272ff00c11f28",
  size_mb:7.9,
  manipulation:"U",
  desc:"Narración (español) recuerda el incendio de 2011 en Torres del Paine atribuido al turista Rotem Singer (más de 15.000 ha, multa y 50.000 árboles); menciona un incendio de 2025 en la Patagonia (3.000 ha); teoriza sobre el propósito de tales quemas (despoblar, eliminar resistencia, justificar intervención); cita la compra de más de 1 millón de hectáreas por Douglas Tompkins en Chile (parque Pumalín) y el rol de Kristine Tompkins y la Fundación Rockefeller.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000127", "PER-000128", "PER-000129"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000139", title:"Monólogo: acusación de que Israel controla EE.UU.", url:"https://x.com/liderfiscal/status/2092854045354471444",
  platform:"X",
  channel:"liderfiscal",
  tweet:"2092854016547942400",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis-batch2\\liderfiscal_2092854016547942400.mp4",
  sha256:"b089e483e75f026317d8df943f4278e5508e37540bcd131efdf3aa2c2504c402",
  size_mb:2.3,
  manipulation:"C",
  desc:"Monólogo (inglés) en el que el orador afirma que Israel controla EE.UU. (el Congreso, el Senado y el dinero), que EE.UU. cedió su poder a 'un país extranjero' y que la pasión y el vínculo con el 'estado sionista' deben terminar.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000140", title:"Transcripción fragmentada y de baja confianza", url:"https://x.com/nshispanos/status/2089045082787758289",
  platform:"X",
  channel:"nshispanos",
  tweet:"2089043942926880769",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis-batch2\\nshispanos_2089043942926880769.mp4",
  sha256:"13309feb8c119582bf21adfc79f388700061b18e33e477abbc27678b7006a92b",
  size_mb:36.1,
  manipulation:"U",
  desc:"Transcripción en inglés muy fragmentada y de baja probabilidad (0.745); se leen frases sueltas tipo 'cada año se trata de poner cosas como esta... es un campo de concentración clave para ser reeducado... es una oportunidad... me gustaría que fuera yo'. No se puede reconstruir un contenido coherente.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000141", title:"Conferencia en hebreo sobre el servicio militar y la unidad nacional", url:"https://x.com/voiceofrabbis/status/2042580378255245553",
  platform:"X",
  channel:"voiceofrabbis",
  tweet:"2042580269140426753",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis-batch2\\voiceofrabbis_2042580269140426753.mp4",
  sha256:"dba6a29ab0a956c4da2623e2bb29b789e43127395aebc030b54174e34970c063",
  size_mb:2.8,
  manipulation:"U",
  desc:"Orador religioso (hebreo, transcripción parcial) habla ante lo que parece una audiencia de soldados/comunidad; menciona valores y méritos del servicio, el orgullo por el ejército y la nación de Israel, la defensa de la seguridad y la necesidad de unidad. Transcripción limitada y ruidosa.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000142", title:"Crítica de los sionistas por vincular a todos los judíos con las guerras de Israel", url:"https://x.com/voiceofrabbis/status/2093008993006575789",
  platform:"X",
  channel:"voiceofrabbis",
  tweet:"2093008148600918016",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis-batch2\\voiceofrabbis_2093008148600918016.mp4",
  sha256:"064d8c9df1eedac589d899ace265cf31a51375b89ab18bb2ba1511ad626f7fe2",
  size_mb:68.7,
  manipulation:"U",
  desc:"Orador (judío) en inglés critica a los sionistas por querer involucrar a todos los judíos en sus guerras para que se vea a los judíos y al Estado de Israel como uno solo; dice que esa identificación expone a los judíos como blancos; sostiene que los sionistas, con Netanyahu y 'Helm', desvían la responsabilidad hablando de antisemitismo en lugar del gobierno israelí.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000001"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000143", title:"Advertencia sobre la capacidad militar de Israel", url:"https://x.com/Parodyjeffx/status/2092839147958374504",
  platform:"X",
  channel:"Parodyjeffx",
  tweet:"2092839078664286208",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis-batch3\\Parodyjeffx_2092839078664286208.mp4",
  sha256:"0b0605ba60f7e2561fe4fea35c39b63e472741ba8a11bc5fa83dd4cf685a7976",
  size_mb:16.8,
  manipulation:"U",
  desc:"Orador (inglés) afirma que la existencia de Israel no depende de negociaciones, superpotencias ni opinión pública; advierte que si se empuja a Israel a un rincón, quienes lo hagan sufrirán las consecuencias; dice que Israel no ha usado todo lo que tiene y que no ha expuesto sus armas avanzadas deliberadamente.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000144", title:"Acusaciones contra la 'derecha' digital latinoamericana", url:"https://x.com/catrina_nortena/status/2092958955769122885",
  platform:"X",
  channel:"catrina_nortena",
  tweet:"2092958838294994944",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis-batch4\\catrina_nortena_2092958838294994944.mp4",
  sha256:"116fc89f5ba6c5c48dbd4fd82a0d1b64c0b41a186050279b1b4dd931dff2eff5",
  size_mb:13.7,
  manipulation:"U",
  desc:"Narradora (español) acusa a un grupo mediático 'la derecha' presumen crímenes y publican fotos con presidentes; menciona vínculos con la victoria de José Antonio Kast en Chile, de Noboa en Ecuador, en Brasil y Argentina; cita a Flávio Bolsonaro; dice que Brasil prohibió a 'la derecha' tras una decisión judicial; reproduce un audio atribuido a Fernando Cerimedo sobre manipulación de votos en Bolivia; afirma que hacen 'trabajo de campo' de manipulación de urnas y crímenes políticos.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000018", "PER-000079", "PER-000082"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000145", title:"Intervención de un representante israelí sobre Gaza y Hamás", url:"https://x.com/GBC_Press/status/2091896222504415248",
  platform:"X",
  channel:"GBC_Press",
  tweet:"1903468208364879872",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis-batch4\\GBC_Press_1903468208364879872.mp4",
  sha256:"63028a182013b8536cfefeab9463a59b1f503052a6e60b2d64c8b0c9ec5cbb42",
  size_mb:8.9,
  manipulation:"U",
  desc:"Orador (inglés, transcripción deficiente) que dice representar al Estado de Israel; afirma que Israel no apunta a bebés en Gaza; defiende la pena de muerte para quien porte arma en guerra, incluso si tiene 16-17 años; señala que Gaza solo se reconstruirá cuando no haya Hamás, quizá con fuerzas de EAU, Arabia Saudita, europeas y estadounidenses, y para ello se mantiene la diplomacia de Israel.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000146", title:"Altercado doméstico con llamada a la policía (transcripción confusa)", url:"https://x.com/GBC_Press/status/2092637797027021276",
  platform:"X",
  channel:"GBC_Press",
  tweet:"1967260904309108736",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis-batch4\\GBC_Press_1967260904309108736.mp4",
  sha256:"b551d1e3819613312f8c5db5af7480f9e084bcd46605db1b4870c5ff02b70401",
  size_mb:14.5,
  manipulation:"U",
  desc:"Transcripción en inglés fragmentada y poco clara de un altercado: una persona dice 'quiero que mi pueblo sea libre', otra responde 'no, no es así'; hay intercambios sobre llamar a la policía, 'no quiero ser grabada', 'me estás acosando'. No se distingue claramente contexto ni tema.",
  certainty:"CORROBORADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000147", title:"Explicación sobre el significado legal del término genocidio", url:"https://x.com/hippyygoat/status/2092929253666861352",
  platform:"X",
  channel:"hippyygoat",
  tweet:"2092929163262914560",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis-batch4\\hippyygoat_2092929163262914560.mp4",
  sha256:"36e6e62b79f24426c7d8d62948a51d5c9eefae5d6d39be291b21f4b2175f662f",
  size_mb:8.3,
  manipulation:"U",
  desc:"Locutor (inglés) explica el término 'genocidio' como un término legal específico aceptado por la ONU: destrucción sistemática patrocinada por el estado de un segmento de la comunidad; aclara que la muerte en una guerra, por trágica que sea, no es genocidio, y que sin intención probada no se puede usar la palabra.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000148", title:"Testimonio: le ofrecieron crear un medio de 'la derecha' en México", url:"https://x.com/jeancarlopmag/status/2092284738757185683",
  platform:"X",
  channel:"jeancarlopmag",
  tweet:"2092284108441341952",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis-batch4\\jeancarlopmag_2092284108441341952.mp4",
  sha256:"c4ff2a82b59a9b031934f269e6ae737e86cf089e82dbf650d5550a18fff95de7",
  size_mb:54.3,
  manipulation:"U",
  desc:"Hombre (español) relata que el dueño de 'la derecha' lo buscó para que creara el medio en México a cambio de 25.000 dólares y que se negó; dice que el dueño le ofreció 'el algoritmo secreto de Google'; critica a la derecha global como llena de fake news, abusos y financiadores; menciona a 'Claudia' y al presidente de México. No identifica por nombre al dueño.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000130"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000149", title:"Análisis del caso Fernando Cerimedo y su billetera fría", url:"https://x.com/liderfiscal/status/2093056583655633273",
  platform:"X",
  channel:"liderfiscal",
  tweet:"2093056438339842048",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis-batch4\\liderfiscal_2093056438339842048.mp4",
  sha256:"ec00f2cb6b45d06a151ce3ccdbc1ef91589ee92aab4ced88eb3c286f09704c8a",
  size_mb:35.9,
  manipulation:"U",
  desc:"Orador (español) dice que al desdoblar el celular de Fernando Cerimedo apareció un código de una 'billetera fría' (criptomonedas) con supuestas transferencias; menciona que se encontraron 66.000 dólares y que se movieron varios millones hacia 10 cuentas; refiere una investigación de Leonardo Roca y una casa de cambios intervenida por la fiscalía en el caso Cerimedo, con unos 500.000 dólares; indica que publicó el hallazgo en Cabildero Digital.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000018", "PER-000085", "PER-000131"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000150", title:"Entrevista callejera sobre la cifra del Holocausto y Gaza", url:"https://x.com/forbiddenmerch/status/2093065451211264360",
  platform:"X",
  channel:"forbiddenmerch",
  tweet:"2093065243886800896",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis-batch5\\forbiddenmerch_2093065243886800896.mp4",
  sha256:"106cf502e353fa0d479b6490465fffe1ffea64cd3ea328d55b218118ca477ef8",
  size_mb:34.2,
  manipulation:"F",
  desc:"Entrevista callejera (inglés) entre dos hombres: uno pregunta a otro cuántos judíos murieron en el Holocausto y dice '271.000 como máximo'; el otro responde '6 millones'; el primero sostiene que Israel se formó como reacción al Holocausto pero que 'se formuló antes'; discuten si lo ocurrido en Gaza fue genocidio; se menciona a Netanyahu y a la organización 'Selam' (derechos humanos con sede en Israel).",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000001"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000151", title:"Cruza entre 'Tucker' y una congresista sobre Israel y antisemitismo", url:"https://x.com/GBC_Press/status/2092976009255801270",
  platform:"X",
  channel:"GBC_Press",
  tweet:"2003155239105687554",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis-batch5\\GBC_Press_2003155239105687554.mp4",
  sha256:"15ed2b94a5609c9b1596864c5a152c122091b9eb0983e3f521f86d8bdeb23682",
  size_mb:5.7,
  manipulation:"U",
  desc:"Intercambio (inglés) entre un entrevistador (llamado 'Tucker' en la transcripción) y una congresista: el entrevistador la acusa de antisemitismo por estar obsesionada con Israel; ella responde que no ve su trabajo como legisladora como defender a un gobierno extranjero, que su cargo no la hace antisemita y que él confunde 'los judíos' con un gobierno extranjero.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000006"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000152", title:"Denuncia del disparo israelí a un niño palestino de 14 años", url:"https://x.com/Ignaciogjv/status/2092972174474641814",
  platform:"X",
  channel:"Ignaciogjv",
  tweet:"2092971978768408577",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-analysis-un-sniper\\Ignaciogjv_2092971978768408577.mp4",
  sha256:"1297f43e79f047ec26cf7b8cab3bcd281e881e06a77ab300b9b2f73b4954ec0e",
  size_mb:99.5,
  manipulation:"D",
  desc:"Comentarista (español) muestra imágenes que atribuye a tropas israelíes disparando a un niño palestino de 14 años en un centro de refugiados en Cisjordania; dice que militares entraron a un centro de la ONU y asesinaron a un joven desarmado; menciona a Ben Gvir, ministro de Seguridad Nacional de Israel, y una propuesta de un centro para colgar palestinos; aclara que su crítica es al gobierno/estado, no a toda la población judía.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000153", title:"Análisis sobre el objetivo de la guerra en Afganistán", url:"https://x.com/liderfiscal/status/2093139152669982886",
  platform:"X",
  channel:"liderfiscal",
  tweet:"2093139117508853760",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-timeline-investigation\\liderfiscal_2093139117508853760.mp4",
  sha256:"d0a5f2f6e7b8745341d9fbf43a7bb2fbdb27c08f044ef8e99fa03b7d86a9676c",
  size_mb:0.9,
  manipulation:"U",
  desc:"Orador (inglés/español) afirma que el objetivo en Afganistán no es subyugarlo completamente, sino usarlo para lavar dinero fuera de las bases fiscales de EE.UU. y de los países europeos y devolverlo a manos de una 'élite transnacional de seguridad'; concluye que el objetivo es tener una guerra interminable, no una guerra exitosa.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000154", title:"Discurso religioso hebreo sobre el dominio de Judea y Samaria", url:"https://x.com/GBC_Press/status/2092984531892748749",
  platform:"X",
  channel:"new_GBC_Press",
  tweet:"1994388519125663745",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-timeline-investigation\\new_GBC_Press_1994388519125663745.mp4",
  sha256:"44f5628f612ba37b4e195254d6ed35edf31eaadb7314e2efe9accbc60113acf8",
  size_mb:5.2,
  manipulation:"C",
  desc:"Orador religioso (hebreo) dice que todo lo que hay en la Tierra de Israel proviene de la Torá sagrada y que la 'revolución' en Judea y Samaria viene del Jumash; afirma que el 'tikkún' (reparación) será heredar y expulsar a los no judíos de todo el territorio, porque no puede haber ni un gentil que se oponga a Israel en la Tierra de Israel, y que 'no es posible vivir en la Tierra de Israel si no los expulsamos'.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000155", title:"Sobre la compra de 200.000 hectáreas en La Rioja por un rabino", url:"https://x.com/SinCensuraCol/status/2093025611530834388",
  platform:"X",
  channel:"new_SinCensuraCol",
  tweet:"2093025147091333121",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-timeline-investigation\\new_SinCensuraCol_2093025147091333121.mp4",
  sha256:"6bee59594a10eb6f55073cca76c88738a7b4bc003ee4ba4a337db4ce3366e88b",
  size_mb:2.6,
  manipulation:"U",
  desc:"Orador (español) recrimina la venta de un pueblo entero (con población adentro) adquirido en un remate del Banco Nación en Buenos Aires; afirma que un rabino norteamericano llamado (transcripción) 'Cayme Diverson' compró las 200.000 hectáreas, incluido el depósito de agua dulce más importante de La Rioja (la provincia más árida); dice que el rabino inició una demanda en una corte de Nueva York; defiende la ley vigente de extranjerización de tierras contra su derogación.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000132"],
  src:"SRC-000003"
});
DB.videos.push({
  id:"VID-000156", title:"Cuestionamientos sobre la ayuda de EE.UU. a Israel", url:"https://x.com/xIsraelExposedx/status/2091205336354938880",
  platform:"X",
  channel:"new_xIsraelExposedx",
  tweet:"2091205336354938880",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\x-video-timeline-investigation\\new_xIsraelExposedx_2091205336354938880.mp4",
  sha256:"dae8f9d4abf0fa55b461ad967178a36acbd0966102b9dc17d63b158c8f45ff91",
  size_mb:5.6,
  manipulation:"U",
  desc:"Orador (inglés) pregunta por qué EE.UU. envía 18.000 millones de dólares al año a Israel; afirma que EE.UU. no recibe nada a cambio, que Israel está 'acusado de genocidio' contra palestinos, que un congresista estadounidense puede llevar uniforme militar israelí en el Capitolio sin que nadie diga nada (lo califica de traición), y que el primer ministro israelí habló directamente ante el Congreso, recibiendo 26 ovaciones de pie; concluye que EE.UU. está 'ocupado'.",
  certainty:"DOCUMENTADO", review:"PENDIENTE",
  roles:["PER-000001"],
  src:"SRC-000003"
});




// ===== FASE 2 COMPLETA: claims + orgs + events + rels (ingesta 2026-09-04) =====
DB.claims.push({
  id:"CLM-000004",
  text:"Los grupos feministas 'permanecieron en silencio' sobre las violaciones de Hamás a jóvenes judías mostrando hipocresía; pidió que se publiquen todos los expedientes Epstein.",
  author:"PER-000022",
  author_name:"Alan Dershowitz",
  contra:"Autoexculpación personal; afirmaciones sobre silencio feminista y National Lawyers Guild a verificar",
  video_file:"batch2_GBC_Press_1742951094727163904.mp4",
  source_url:"https://x.com/GBC_Press/status/1742951094727163904",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000005",
  text:"'Eso no fue genocidio por definición'; las muertes palestinas fueron 'colateral de una guerra urbana' forzada por Hamás; es apropiado eliminar a la cúpula de Hamás responsable del 7-O.",
  author:"",
  author_name:"",
  contra:"Niega la calificación de genocidio sostenida por organismos internacionales",
  video_file:"batch2_GBC_Press_2085101964832944128.mp4",
  source_url:"https://x.com/GBC_Press/status/2085101964832944128",
  status:"POSIBLE", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000006",
  text:"EE.UU. congeló los activos de la presidenta de la CPI como represalia por la solicitud de arresto contra Netanyahu y presionó a países latinoamericanos para abandonar el Estatuto de Roma.",
  author:"",
  author_name:"",
  contra:"Número de países, medida exacta y alcance a verificar con fuentes primarias",
  video_file:"batch2_praxedes416_2093674783183433728.mp4",
  source_url:"https://x.com/praxedes416/status/2093674783183433728",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://en.wikipedia.org/wiki/Executive_Order_14203"],
  corrob_nota:"Trump sancionó a la CPI en feb 2025 (Exec Order 14203) pero contra el FISCAL Karim Khan, no una 'presidenta'. Fondo real, destinatario mal identificado.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000007",
  text:"'Un presidente estadounidense debe pensar primero en lo mejor para EE.UU. y no dar a los israelíes un cheque en blanco'.",
  author:"PER-000020",
  author_name:"Richard Nixon",
  contra:"Autoría del audio y contexto a verificar con fuente primaria",
  video_file:"batch2_PRO_X_313_1973082220513599488.mp4",
  source_url:"https://x.com/PRO_X_313/status/1973082220513599488",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000008",
  text:"Hind Rajab, de 6 años, llamó a emergencias y fue hallada muerta junto a los paramédicos de la ambulancia enviada; el portavoz dijo 'hemos visto cómo Hamás toma ambulancias'.",
  author:"",
  author_name:"",
  contra:"Versión del portavoz israelí frente a las denuncias del caso Hind Rajab",
  video_file:"GBC_Press_1758014173005434880.mp4",
  source_url:"https://x.com/GBC_Press/status/1758014173005434880",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.aljazeera.com/news/2024/2/10/body-of-6-year-old-killed-in-deliberate-israeli-fire-found-after-12-days", "https://www.aljazeera.com/news/2026/8/20/who-was-hind-rajab-and-why-is-israel-investigating-her-killing", "https://en.wikipedia.org/wiki/Hind_Rajab_Foundation"],
  corrob_nota:"Completo: Hind Rajab, 6 años, llamó a la Media Luna Roja, hallada muerta con sus familiares y 2 paramédicos 12 días después.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000009",
  text:"El Congreso dio a Netanyahu 26 ovaciones de pie en su discurso; un congresista vistió uniforme militar israelí en el hemiciclo.",
  author:"",
  author_name:"",
  contra:"Número exacto de ovaciones y el episodio del uniforme a verificar",
  video_file:"hippyygoat_2093399759134343168.mp4",
  source_url:"https://x.com/hippyygoat/status/2093399759134343168",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.aljazeera.com/news/2024/7/24/key-takeaways-from-netanyahus-speech-and-the-protests-outside-us-congress"],
  corrob_nota:"Ovaciones de pie reales en el Congreso (24/7/2024), pero el conteo exacto '26' no está verificado en las fuentes.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000010",
  text:"Se ordenó suspender las patrullas de la valla fronteriza entre las 5:20 y las 9:00, coincidiendo con el plan de ataque de Hamás; Israel tuvo que conocer el plan y permitirlo.",
  author:"",
  author_name:"",
  contra:"No se presenta el audio de la orden; relato testimonial sin corroboración de la cúpula",
  video_file:"irlandarra2019_2093559993932840960.mp4",
  source_url:"https://x.com/irlandarra2019/status/2093559993932840960",
  status:"NO_VERIFICADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:[],
  corrob_nota:"Sin aparición en prensa reputada con esos detalles de franja horaria; NO_CONFIRMADO.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000011",
  text:"Si los judíos no repudian el título de 'Estado del pueblo judío', la inferencia razonable es que apoyan las acciones de Israel; sin una ruptura de la opinión judía estadounidense crecerá la animadversión.",
  author:"",
  author_name:"",
  contra:"Argumento de opinión; analogías disputadas",
  video_file:"Partisan_12_2093706022993219584.mp4",
  source_url:"https://x.com/Partisan_12/status/2093706022993219584",
  status:"POSIBLE", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000012",
  text:"El ejército israelí es el más moral del mundo y no dispara en ráfagas",
  author:"PER-000010",
  author_name:"May Golan",
  contra:"Se trata de una película de destrucción: 70% de Gaza reducida a un aparcamiento (Piers Morgan)",
  video_file:"001_twitter_GBC_Press_1966879451855372288.mp4",
  source_url:"https://x.com/001_twitter_GBC_Press/status/1966879451855372288",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000013",
  text:"El gobierno israelí lleva 20 meses prohibiendo la entrada de periodistas internacionales a Gaza",
  author:"PER-000099",
  author_name:"Piers Morgan",
  contra:"",
  video_file:"001_twitter_GBC_Press_1966879451855372288.mp4",
  source_url:"https://x.com/001_twitter_GBC_Press/status/1966879451855372288",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.aljazeera.com/news/2026/1/7/media-body-condemns-israels-continued-ban-on-foreign-media-access-to-gaza", "https://www.aljazeera.com/news/2026/4/30/media-organisations-call-on-israel-to-allow-independent-access-to-gaza"],
  corrob_nota:"Ban continuado a la prensa extranjera para acceso independiente a Gaza (CPJ/RSF exigen acceso); ~20 meses coherente.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000014",
  text:"El sionismo político se implementó mediante colonización, ocupación, apartheid, desposesión, limpieza étnica y genocidio",
  author:"",
  author_name:"",
  contra:"",
  video_file:"002_twitter_MrsRoyKeaneo_2093330918773592064.mp4",
  source_url:"https://x.com/002_twitter_MrsRoyKeaneo/status/2093330918773592064",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.hrw.org/report/2021/04/27/threshold-crossed/israeli-authorities-and-crimes-apartheid-and-persecution", "https://www.amnesty.org/en/latest/news/2022/02/israels-apartheid-against-palestinians-a-cruel-system-of-domination-and-a-crime-against-humanity/"]
});
DB.claims.push({
  id:"CLM-000015",
  text:"El antisionismo es la oposición a esos crímenes y no equivale a antisemitismo",
  author:"",
  author_name:"",
  contra:"",
  video_file:"002_twitter_MrsRoyKeaneo_2093330918773592064.mp4",
  source_url:"https://x.com/002_twitter_MrsRoyKeaneo/status/2093330918773592064",
  status:"POSIBLE", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://jerusalemdeclaration.org/", "https://holocaustremembrance.com/resources/working-definition-antisemitism"]
});
DB.claims.push({
  id:"CLM-000016",
  text:"No busco la destrucción de Israel ni de ningún país",
  author:"PER-000006",
  author_name:"Tucker Carlson",
  contra:"",
  video_file:"003_twitter_GBC_Press_2035100852491325440.mp4",
  source_url:"https://x.com/003_twitter_GBC_Press/status/2035100852491325440",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000017",
  text:"Israel tomó el sur del Líbano en las dos primeras semanas de la guerra",
  author:"PER-000006",
  author_name:"Tucker Carlson",
  contra:"",
  video_file:"003_twitter_GBC_Press_2035100852491325440.mp4",
  source_url:"https://x.com/003_twitter_GBC_Press/status/2035100852491325440",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000018",
  text:"Criticar el sionismo no equivale a antisemitismo",
  author:"",
  author_name:"",
  contra:"Quienes no apoyan al estado de Israel serían antisemitas (otro interviniente)",
  video_file:"004_twitter_Haitham47117914_2091644922826768386.mp4",
  source_url:"https://x.com/004_twitter_Haitham47117914/status/2091644922826768386",
  status:"POSIBLE", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://jerusalemdeclaration.org/", "https://holocaustremembrance.com/resources/working-definition-antisemitism"]
});
DB.claims.push({
  id:"CLM-000019",
  text:"El catolicismo no atribuye significado de profecía cumplida al nuevo estado de Israel",
  author:"",
  author_name:"",
  contra:"",
  video_file:"004_twitter_Haitham47117914_2091644922826768386.mp4",
  source_url:"https://x.com/004_twitter_Haitham47117914/status/2091644922826768386",
  status:"POSIBLE", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decl_19651028_nostra-aetate_en.html"]
});
DB.claims.push({
  id:"CLM-000020",
  text:"La firma israelí Black Core, vinculada al Mossad, interfirió elecciones en Francia, Escocia, Angola, Togo y Nueva York",
  author:"PER-000067",
  author_name:"Diego Vélez (Gar)",
  contra:"",
  video_file:"005_twitter_DiegoVelezGar_2093159697415024640.mp4",
  source_url:"https://x.com/005_twitter_DiegoVelezGar/status/2093159697415024640",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.theguardian.com/uk-news/2026/jun/12/france-accuses-israeli-firm-interfering-scottish-elections-john-swinney-snp"],
  corrob_nota:"Viginum (Francia) atribuyó a BlackCore interferencias en elecciones francesas, Escocia, Nueva York 2025, Angola y Togo. Matiz: vínculo 'oficial al Mossad' no demostrado.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000021",
  text:"The Guardian destapó un equipo de contratistas israelíes que manipuló más de 30 elecciones en el mundo, dirigido por Tal Hanan",
  author:"PER-000067",
  author_name:"Diego Vélez (Gar)",
  contra:"",
  video_file:"005_twitter_DiegoVelezGar_2093159697415024640.mp4",
  source_url:"https://x.com/005_twitter_DiegoVelezGar/status/2093159697415024640",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.theguardian.com/world/2023/feb/15/revealed-disinformation-team-jorge-claim-meddling-elections-tal-hanan"],
  corrob_nota:"Guardian/Forbidden Stories: 'Team Jorge' de Tal Hanan afirmó manipular >30 elecciones (33 presidenciales, 27 exitosas). Son afirmaciones del propio Hanan, no todas verificadas.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000022",
  text:"Israel vende armas y tecnología probadas primero en los territorios ocupados",
  author:"PER-000011",
  author_name:"Eran Efrati",
  contra:"",
  video_file:"007_twitter_Ylainoa_2093794922897780736.mp4",
  source_url:"https://x.com/007_twitter_Ylainoa/status/2093794922897780736",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000023",
  text:"El gobierno israelí usa el antisemitismo como arma política para defender crímenes",
  author:"PER-000011",
  author_name:"Eran Efrati",
  contra:"",
  video_file:"007_twitter_Ylainoa_2093794922897780736.mp4",
  source_url:"https://x.com/007_twitter_Ylainoa/status/2093794922897780736",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000024",
  text:"El gobierno de Netanyahu tiene lazos fuertes con supremacistas blancos, fascistas y neonazis en Europa y EEUU",
  author:"PER-000011",
  author_name:"Eran Efrati",
  contra:"",
  video_file:"007_twitter_Ylainoa_2093794922897780736.mp4",
  source_url:"https://x.com/007_twitter_Ylainoa/status/2093794922897780736",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000025",
  text:"No hubo política programada de exterminio de los judíos por parte de Alemania",
  author:"PER-000053",
  author_name:"Mark Weber",
  contra:"",
  video_file:"009_twitter_forbiddenmerch_2093754760935387136.mp4",
  source_url:"https://x.com/009_twitter_forbiddenmerch/status/2093754760935387136",
  status:"REFUTADO", confidence: 0, reviewed:"PENDIENTE",
  corrob_nota:"NEGACIÓN DEL HOLOCAUSTO. La política nazi de exterminio de los judíos europeos ('Solución Final') está documentada por archivos, testimonios y sentencias de Núremberg. Esta afirmación contradice la evidencia histórica abrumadora.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000026",
  text:"Las guerras en Ucrania, Gaza, Irán y la presión sobre Venezuela son resultado de la pretensión hegemónica de EEUU y Europa de 'dirigir el mundo'",
  author:"PER-000049",
  author_name:"Jeffrey Sachs",
  contra:"",
  video_file:"012_twitter_apocalypseos_2093798890260828160.mp4",
  source_url:"https://x.com/012_twitter_apocalypseos/status/2093798890260828160",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000027",
  text:"El mercado bursátil estadounidense está en una burbuja financiera impulsada por las valoraciones de IA",
  author:"PER-000049",
  author_name:"Jeffrey Sachs",
  contra:"",
  video_file:"012_twitter_apocalypseos_2093798890260828160.mp4",
  source_url:"https://x.com/012_twitter_apocalypseos/status/2093798890260828160",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000028",
  text:"Vi al lobby israelí dictar términos dentro de la Casa Blanca bajo Trump, manipulando la inteligencia y el entorno del presidente",
  author:"PER-000048",
  author_name:"Joe Kent",
  contra:"",
  video_file:"020_twitter_GBC_Press_2060335504353288192.mp4",
  source_url:"https://x.com/020_twitter_GBC_Press/status/2060335504353288192",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000029",
  text:"Eliminar a Sadam Huseín tendría un enorme efecto positivo en la región",
  author:"PER-000116",
  author_name:"Dick Cheney",
  contra:"",
  video_file:"027_twitter_BowesChay_1841987050326589441.mp4",
  source_url:"https://x.com/027_twitter_BowesChay/status/1841987050326589441",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000030",
  text:"Los tres principios para ganar la guerra contra el terrorismo son ganar, ganar y ganar; la victoria en Afganistán facilita la de Irak",
  author:"PER-000116",
  author_name:"Dick Cheney",
  contra:"",
  video_file:"027_twitter_BowesChay_1841987050326589441.mp4",
  source_url:"https://x.com/027_twitter_BowesChay/status/1841987050326589441",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000031",
  text:"La cifra de seis millones de víctimas judías del Holocausto es una mentira",
  author:"PER-000052",
  author_name:"George Lincoln Rockwell",
  contra:"",
  video_file:"028_twitter_forbiddenmerch_2093843476240605184.mp4",
  source_url:"https://x.com/028_twitter_forbiddenmerch/status/2093843476240605184",
  status:"REFUTADO", confidence: 0, reviewed:"PENDIENTE",
  corrob_nota:"NEGACIÓN DEL HOLOCAUSTO (cifra). El número de ~6 millones de víctimas judías está corroborado por los registros de deportación, los archivos de los campos y la investigación histórica (USHMM, Yad Vashem). Es un tropo negacionista.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000032",
  text:"Mis padres estuvieron en Auschwitz y Majdanek y toda mi familia fue exterminada; no callaré ante los crímenes de Israel contra los palestinos",
  author:"",
  author_name:"",
  contra:"",
  video_file:"029_twitter_myzccc_2042055085920858112.mp4",
  source_url:"https://x.com/029_twitter_myzccc/status/2042055085920858112",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000033",
  text:"Israel mató un número de palestinos cada año antes del ataque de Hamás y detiene sin justificación a civiles, incluso niños como rehenes",
  author:"PER-000057",
  author_name:"Jussi Saramo",
  contra:"",
  video_file:"030_twitter_GBC_Press_1969636382587924480.mp4",
  source_url:"https://x.com/030_twitter_GBC_Press/status/1969636382587924480",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000034",
  text:"La derecha israelí nunca aceptó un modelo de estado único democrático ni el de dos estados, y ha apoyado a Hamás para impedir la paz",
  author:"PER-000057",
  author_name:"Jussi Saramo",
  contra:"",
  video_file:"030_twitter_GBC_Press_1969636382587924480.mp4",
  source_url:"https://x.com/030_twitter_GBC_Press/status/1969636382587924480",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000035",
  text:"Ucrania no es un estado soberano con fronteras reconocidas y sigue siendo parte de Rusia desde el siglo X; es 'Rusia invadiendo Rusia'",
  author:"PER-000055",
  author_name:"Riccardo Bosi",
  contra:"",
  video_file:"033_twitter_nightglow98_2093771390553849856.mp4",
  source_url:"https://x.com/033_twitter_nightglow98/status/2093771390553849856",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000036",
  text:"Putin está 'cortando la cabeza de la serpiente' al tumbar el centro del deep state en Ucrania",
  author:"PER-000055",
  author_name:"Riccardo Bosi",
  contra:"",
  video_file:"033_twitter_nightglow98_2093771390553849856.mp4",
  source_url:"https://x.com/033_twitter_nightglow98/status/2093771390553849856",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000037",
  text:"Ben Gvir habría amenazado a una presa palestina diciendo que 'se acabaron los campamentos de verano'",
  author:"",
  author_name:"",
  contra:"",
  video_file:"037_twitter_dw_espanol_2094178030813958145.mp4",
  source_url:"https://x.com/037_twitter_dw_espanol/status/2094178030813958145",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.aljazeera.com/news/2026/8/30/israels-ben-gvir-lauds-harsh-conditions-for-palestinian-female-prisoners"]
});
DB.claims.push({
  id:"CLM-000038",
  text:"Avionetas que salían de Bolivia llevaban hasta 500 kg de cocaína al día y el jefe antinarcóticos cobraba 50.000 dólares por avioneta, respondiendo a la primera dama",
  author:"",
  author_name:"",
  contra:"La primera dama salió a negarlo",
  video_file:"038_twitter_petrogustavo_2093648099285569537.mp4",
  source_url:"https://x.com/038_twitter_petrogustavo/status/2093648099285569537",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000039",
  text:"Cinco israelíes ('Dancing Israelis'), dos de ellos confirmados como agentes del Mosad, tuvieron conocimiento previo del 11-S y celebraban mientras grababan",
  author:"PER-000051",
  author_name:"David Icke",
  contra:"",
  video_file:"039_twitter_GBC_Press_1793120979432116224.mp4",
  source_url:"https://x.com/039_twitter_GBC_Press/status/1793120979432116224",
  status:"NO_VERIFICADO", confidence: 0, reviewed:"PENDIENTE",
  corrob_nota:"Tropo conspirativo de los 'Dancing Israelis' y presunto conocimiento previo del 11-S. Descartado por la Comisión 9/11. Sin fuente confiable que lo sustente.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000040",
  text:"Los sionistas no son los judíos originales sino 'adoradores de demonios' (secta frankista), y Theodor Herzl procedía de la zona donde se fundó ese culto",
  author:"PER-000043",
  author_name:"Candace Owens",
  contra:"",
  video_file:"040_twitter_TheWyteRabbit1_2093171875820023808.mp4",
  source_url:"https://x.com/040_twitter_TheWyteRabbit1/status/2093171875820023808",
  status:"NO_VERIFICADO", confidence: 0, reviewed:"PENDIENTE",
  corrob_nota:"Tropo antisemita (sionistas='secta frankista adoradora de demonios'). Sin sustento histórico; Theodor Herzl era periodista laico vienés. Afirmación sin evidencia seria.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000041",
  text:"Israel bloqueó cientos de alimentos, medicinas y bienes (incluidos anestesia, oxígeno, lápices, libros y ropa) a Gaza durante 19 años",
  author:"",
  author_name:"",
  contra:"",
  video_file:"041_twitter_Bry___l_2093765417848250368.mp4",
  source_url:"https://x.com/041_twitter_Bry___l/status/2093765417848250368",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.theguardian.com/world/article/2024/jun/24/gaza-blockade-israel-banned-items"],
  corrob_nota:"Bloqueo desde 2006-2007, cientos/miles de artículos impedidos (Guardian/Gisha/CNN); '~19 años' razonable; los items concretos (lápices/libros/ropa) no verbatim.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000042",
  text:"Israel pagó a Havas y a Piro Inc para crear el falso think tank Hanover Institute (124 informes en 9 días) y manipular las respuestas de los chatbots como ChatGPT",
  author:"",
  author_name:"",
  contra:"",
  video_file:"043_twitter_ajplusfrancais_2094075699225042945.mp4",
  source_url:"https://x.com/043_twitter_ajplusfrancais/status/2094075699225042945",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.theguardian.com/world/2026/aug/26/fake-thinktank-israel-ai-propaganda"],
  corrob_nota:"Piro Inc creó el falso 'Hanover Institute' (124 informes/560.000 palabras en 9 días), registrado bajo FARA para el gobierno israelí; Havas intermediaria (~$1M).",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000043",
  text:"Politico confirmó que ChatGPT y Perplexity citaron ya al Hanover Institute como fuente en preguntas neutras sobre Gaza",
  author:"",
  author_name:"",
  contra:"",
  video_file:"043_twitter_ajplusfrancais_2094075699225042945.mp4",
  source_url:"https://x.com/043_twitter_ajplusfrancais/status/2094075699225042945",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.theguardian.com/world/2026/aug/26/fake-thinktank-israel-ai-propaganda"],
  corrob_nota:"ChatGPT ofrecía enlaces a 4 informes del Hanover; el matiz 'preguntas neutras sobre Gaza' y la atribución literal a Politico no textuales.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000044",
  text:"La Torá ordena exterminar a la nación llamada Amalek, incluidos hombres, mujeres, niños y bebés",
  author:"PER-000062",
  author_name:"Yitzchak Breitowitz",
  contra:"",
  video_file:"044_twitter_IIFBS__1848140035670806528.mp4",
  source_url:"https://x.com/044_twitter_IIFBS_/status/1848140035670806528",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000045",
  text:"La guerra contra los palestinos lleva 75 años y fue iniciada por Israel en 1948 con la limpieza étnica de 750.000 personas",
  author:"",
  author_name:"",
  contra:"",
  video_file:"048_youtube_@BreezyPolitics_U_rTXJcTgeQ.mp4",
  source_url:"",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000046",
  text:"Neriah y Spacher habrían dado unos 25 millones de dólares a Peña Nieto (parte para su campaña) a cambio de acceso a funcionarios y contratos, incluido Pegasus",
  author:"",
  author_name:"",
  contra:"Peña Nieto niega haber recibido el dinero",
  video_file:"049_youtube_BreezyPolitics_rZcAVNi5XbY_android.mp4",
  source_url:"",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000047",
  text:"Activistas sionistas se disfrazaban de musulmanes en Marruecos para acosar a niñas judías y asustar a sus padres y así impulsar la emigración de judíos",
  author:"",
  author_name:"",
  contra:"",
  video_file:"1_twitter_DaniMayakovski_2093315930432372736.mp4",
  source_url:"https://x.com/1_twitter_DaniMayakovski/status/2093315930432372736",
  status:"NO_VERIFICADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://en.wikipedia.org/wiki/Jewish_exodus_from_the_Muslim_world"]
});
DB.claims.push({
  id:"CLM-000048",
  text:"Ben-Gurion habría preferido salvar la mitad de los niños judíos que pudieran enviarse a Palestina antes que a todos si iban a otra parte",
  author:"PER-000124",
  author_name:"David Ben-Gurion (citado)",
  contra:"",
  video_file:"1_twitter_DaniMayakovski_2093315930432372736.mp4",
  source_url:"https://x.com/1_twitter_DaniMayakovski/status/2093315930432372736",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000049",
  text:"Yosef Basri y Shalom Salah Shalom fueron responsables de tres de las cinco bombas, y la controladora de Basri era un oficial israelí llamado Max Binet",
  author:"",
  author_name:"",
  contra:"",
  video_file:"2_twitter_DaniMayakovski_2093313123524427776.mp4",
  source_url:"https://x.com/2_twitter_DaniMayakovski/status/2093313123524427776",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://en.wikipedia.org/wiki/1950%E2%80%931951_Baghdad_bombings", "https://en.wikipedia.org/wiki/Jewish_exodus_from_the_Muslim_world"]
});
DB.claims.push({
  id:"CLM-000050",
  text:"Hay un campamento que alberga a unos 5.000 palestinos detenidos sin cargo ni juicio bajo la ley administrativa israelí",
  author:"",
  author_name:"",
  contra:"",
  video_file:"NA_twitter_Compass_Report_2093054672340672512.mp4",
  source_url:"https://x.com/NA_twitter_Compass_Report/status/2093054672340672512",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://en.wikipedia.org/wiki/Sde_Teiman_detention_camp", "https://en.wikipedia.org/wiki/Mass_detentions_in_the_Gaza_war"],
  corrob_nota:"Sde Teiman real con detenciones masivas sin cargo y abusos, ~10.000 detenidos (abr 2025); la cifra exacta '5.000 en ese campamento bajo ley administrativa' no se confirma.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000051",
  text:"Violentos colonos israelíes atacan a civiles palestinos con impunidad, con los consejos del IDF y del gobierno de Netanyahu",
  author:"",
  author_name:"",
  contra:"",
  video_file:"NA_twitter_Haitham47117914_2093141696368234496.mp4",
  source_url:"https://x.com/NA_twitter_Haitham47117914/status/2093141696368234496",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.aljazeera.com/news/2026/7/26/why-are-israeli-settlers-on-a-rampage-in-the-occupied-west-bank", "https://www.aljazeera.com/news/2026/6/10/west-bank-ethnic-cleansing-settler-attacks-israels-state-policy-amnesty"],
  corrob_nota:"Violencia de colonos israelíes contra civiles palestinos en Cisjordania documentada (Amnistía habla de limpieza étnica/ataques como política de Estado).",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000052",
  text:"En poco más de cuatro años nueve ciudadanos estadounidenses fueron asesinados por colonos israelíes o fuerzas de seguridad israelíes sin rendición de cuentas",
  author:"",
  author_name:"",
  contra:"",
  video_file:"NA_twitter_Haitham47117914_2093141696368234496.mp4",
  source_url:"https://x.com/NA_twitter_Haitham47117914/status/2093141696368234496",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000053",
  text:"La fundación Hind Rajab busca el arresto de soldados israelíes tras reunir pruebas de guerras y genocidio",
  author:"",
  author_name:"",
  contra:"",
  video_file:"NA_twitter_trtworld_2093203674566647809.mp4",
  source_url:"https://x.com/NA_twitter_trtworld/status/2093203674566647809",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.aljazeera.com/news/2024/12/26/advocates-launch-legal-push-for-argentina-chile-to-arrest-israeli-soldier", "https://en.wikipedia.org/wiki/Hind_Rajab_Foundation"],
  corrob_nota:"HRF denunció a soldado Saar Hirshoren en Argentina/Chile, a su batallón en la CPI y contra 1.000 soldados.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000054",
  text:"El pasaporte israelí permite viajar a más de 117 destinos sin visa, mientras los palestinos de la Franja viven en 'prisión a cielo abierto'",
  author:"",
  author_name:"",
  contra:"",
  video_file:"NA_twitter_trtworld_2093203674566647809.mp4",
  source_url:"https://x.com/NA_twitter_trtworld/status/2093203674566647809",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://en.wikipedia.org/wiki/Israeli_passport"],
  corrob_nota:"Pasaporte israelí: 170 países visa-free (supera el '117'); 'prisión a cielo abierto' es caracterización de DDHH ampliamente usada.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000055",
  text:"Marruecos construyó el muro militar activo más largo del mundo (2.700 km) para consolidar su ocupación",
  author:"",
  author_name:"",
  contra:"",
  video_file:"NA_twitter_ultras_antifaa_2093448788103061504.mp4",
  source_url:"https://x.com/NA_twitter_ultras_antifaa/status/2093448788103061504",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://en.wikipedia.org/wiki/Moroccan_Western_Sahara_wall"],
  corrob_nota:"Muro Marroquí ~2.700 km; cinturón de minas = campo minado continuo más largo del mundo.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000056",
  text:"Amihai Eliyahu dijo que 'New Gaza' era una opción y pidió métodos más dolorosos que la muerte para los palestinos",
  author:"",
  author_name:"",
  contra:"",
  video_file:"NA_youtube_@BreezyPolitics_lWWCG--Q7gU.mp4",
  source_url:"",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://news.google.com/rss/articles/CBMi8AFBVV95cUxNeE1rcE5SS2NVZndfa0JMT3BkcmVCNXgtT1FUYmRWeFV1TjVzRDc4aXNOU0ZfaDhjeEtId2ZUYVd3VDhZVUZ1Ync0YmZpYm0yOXg0T05mQXl6WExKN2wyMWw1MWNNeHlNc01HOXB6cWxuMnZTWGZyblpDay1nNWFfdndURHgxVWNLQkZ6N3p0aHJWMnlIVjUwbm0yNzVaMXQ3ZFhBRnJVN3QtOFNqUFBtWWhGN2NQUEFoMVRIR1FHWTJlYkF3cTBkLW9ITzZPUGc2SHEyX0FIUWFGc2ZRUllTOTZtcEhxaTlqR1FoUW9kWU0?oc=5"],
  corrob_nota:"Eliyahu pidió formas 'más dolorosas que la muerte' (radio 103FM) y bomba nuclear sobre Gaza (Reuters). 'New Gaza' no se le atribuye en fuentes confiables.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000057",
  text:"Más periodistas mueren en Gaza que en ambas guerras mundiales, Vietnam, la ex Yugoslavia y Afganistán combinados, según el proyecto Cost of War del Watson Institute",
  author:"",
  author_name:"",
  contra:"",
  video_file:"NA_youtube_@BreezyPolitics_lWWCG--Q7gU.mp4",
  source_url:"",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.aljazeera.com/news/2025/4/2/gaza-war-deadliest-ever-for-journalists-says-report"],
  corrob_nota:"Watson Costs of War: 232 periodistas muertos en Gaza, más que ambas guerras mundiales + Vietnam + Yugoslavia + Afganistán.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000058",
  text:"Sergio Bergman sostiene que la 'tierra prometida' de Argentina debe ser partida y repartida como se hizo en Palestina con la creación del Estado de Israel (partición de 1947 de las Naciones Unidas)",
  author:"PER-000031",
  author_name:"Sergio Bergman",
  contra:"",
  video_file:"DaniMayakovski_2010271361365626880.mp4",
  source_url:"https://x.com/DaniMayakovski/status/2010271361365626880",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000059",
  text:"Miembros del ejército de Israel, señalados por crímenes de lesa humanidad contra el pueblo palestino, estarían en Argentina",
  author:"",
  author_name:"",
  contra:"",
  video_file:"Nexo_Latino_2018095954583330817.mp4",
  source_url:"https://x.com/Nexo_Latino/status/2018095954583330817",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000060",
  text:"En 2011 el turista israelí Rotem Singer causó un incendio en Torres del Paine que destruyó más de 15.000 hectáreas; tras juicio pagó multa y plantó 50.000 árboles",
  author:"PER-000127",
  author_name:"Rotem Singer (reporte)",
  contra:"",
  video_file:"p4purrip0p_1937570539767242752.mp4",
  source_url:"https://x.com/p4purrip0p/status/1937570539767242752",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000061",
  text:"Israel controla el Congreso, el Senado y el dinero de EE.UU., y EE.UU. cedió su poder a un país extranjero",
  author:"",
  author_name:"",
  contra:"",
  video_file:"liderfiscal_2092854016547942400.mp4",
  source_url:"https://x.com/liderfiscal/status/2092854016547942400",
  status:"NO_VERIFICADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.opensecrets.org/orgs/aipac/summary?id=D000027162", "https://jerusalemdeclaration.org/"]
});
DB.claims.push({
  id:"CLM-000062",
  text:"Israel no apunta a bebés en Gaza; defiende que quien porte un arma en guerra, incluso un menor de 16-17 años, merece la muerte",
  author:"",
  author_name:"",
  contra:"",
  video_file:"GBC_Press_1903468208364879872.mp4",
  source_url:"https://x.com/GBC_Press/status/1903468208364879872",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000063",
  text:"Gaza solo se reconstruirá cuando no exista Hamás, quizá con fuerzas de EAU, Arabia Saudita, europeas y estadounidenses",
  author:"",
  author_name:"",
  contra:"",
  video_file:"GBC_Press_1903468208364879872.mp4",
  source_url:"https://x.com/GBC_Press/status/1903468208364879872",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000064",
  text:"El genocidio es un término legal específico de la ONU: destrucción sistemática patrocinada por el estado de un gran segmento de la comunidad",
  author:"",
  author_name:"",
  contra:"",
  video_file:"hippyygoat_2092929163262914560.mp4",
  source_url:"https://x.com/hippyygoat/status/2092929163262914560",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://en.wikipedia.org/wiki/Genocide_Convention"],
  corrob_nota:"Definición legal (Convención 1948/Estatuto Roma art.6) correcta en esencia; 'sistemática' y 'patrocinada por el estado' no están en el texto legal.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000065",
  text:"La muerte en una guerra no es genocidio, y no lo es sin intención probada",
  author:"",
  author_name:"",
  contra:"",
  video_file:"hippyygoat_2092929163262914560.mp4",
  source_url:"https://x.com/hippyygoat/status/2092929163262914560",
  status:"DOCUMENTADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://en.wikipedia.org/wiki/Genocide_Convention"],
  corrob_nota:"Argumento jurídico del autor ('sin intención no hay genocidio'); debate de interpretación, no dato verificable.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000066",
  text:"Tropas israelíes habrían disparado a un niño palestino de 14 años en un centro de refugiados de Cisjordania (centro de la ONU), asesinándolo desarmado",
  author:"",
  author_name:"",
  contra:"",
  video_file:"Ignaciogjv_2092971978768408577.mp4",
  source_url:"https://x.com/Ignaciogjv/status/2092971978768408577",
  status:"NO_VERIFICADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:[],
  corrob_nota:"El subagente no halló fuente que confirme los detalles exactos (menor de 14 años desarmado en centro de refugiados de la ONU en Cisjordania). Existen casos reales de menores asesinados en campamentos de Cisjordania, pero no con esta especificidad.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000067",
  text:"Ben Gvir dijo que vale más la vida de un israelí que la de miles de palestinos y construye un centro para colgar palestinos",
  author:"",
  author_name:"",
  contra:"",
  video_file:"Ignaciogjv_2092971978768408577.mp4",
  source_url:"https://x.com/Ignaciogjv/status/2092971978768408577",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.theguardian.com/world/2026/aug/20/israel-ben-gvir-video-gallows-site-hanging-palestinians"],
  corrob_nota:"Instalación de horca confirmada (Guardian/JPost); la cita literal 'vale más la vida de un israelí' no se halló textual.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000068",
  text:"El objetivo es una guerra interminable y no una guerra exitosa",
  author:"",
  author_name:"",
  contra:"",
  video_file:"liderfiscal_2093139117508853760.mp4",
  source_url:"https://x.com/liderfiscal/status/2093139117508853760",
  status:"POSIBLE", confidence: 0, reviewed:"PENDIENTE"
});
DB.claims.push({
  id:"CLM-000069",
  text:"'No es posible vivir en la Tierra de Israel si no expulsamos a los [no judíos]', y 'no puede haber ni un gentil que se oponga a Israel' en la Tierra de Israel",
  author:"",
  author_name:"",
  contra:"",
  video_file:"new_GBC_Press_1994388519125663745.mp4",
  source_url:"https://x.com/new_GBC_Press/status/1994388519125663745",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://en.wikipedia.org/wiki/Itamar_Ben-Gvir"],
  corrob_nota:"Kahanismo y postura de expulsión documentados; la cita literal exacta atribuida no confirmada (tratar como paráfrasis).",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000070",
  text:"Un rabino norteamericano compró un pueblo completo (200.000 hectáreas) en un remate del Banco Nación en Buenos Aires, incluido el depósito de agua dulce más importante de La Rioja",
  author:"",
  author_name:"",
  contra:"",
  video_file:"new_SinCensuraCol_2093025147091333121.mp4",
  source_url:"https://x.com/new_SinCensuraCol/status/2093025147091333121",
  status:"NO_VERIFICADO", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://chequeado.com/verificacionfb/es-falsoenlasredes-que-la-comunidad-judia-compro-tierras-en-la-patagonia-para-fundar-un-segundo-israel/"],
  corrob_nota:"Rumor sin evidencia; Chequeado desmiente el patrón antisemita de que la comunidad judía compra tierras/agua en Argentina.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000071",
  text:"EE.UU. envía 18.000 millones de dólares al año a Israel sin recibir nada a cambio",
  author:"",
  author_name:"",
  contra:"",
  video_file:"new_xIsraelExposedx_2091205336354938880.mp4",
  source_url:"https://x.com/new_xIsraelExposedx/status/2091205336354938880",
  status:"PROBABLE", confidence: 0, reviewed:"PENDIENTE",
  extr_sources:["https://www.reuters.com/world/middle-east/what-military-support-does-us-provide-israel-2024-04-08/", "https://en.wikipedia.org/wiki/Israel%E2%80%93United_States_relations"],
  corrob_nota:"MOU 2019-28 = $3.8B/año ($38B); $18B/año no correcto; cifras altas = paquetes de emergencia extraordinarios; 'sin recibir nada' es editorial.",
  corrob_fecha:"2026-09-05"

});
DB.claims.push({
  id:"CLM-000072",
  text:"La ayuda israelí pasó por alto al presidente; el primer ministro israelí habló directamente al Congreso y recibió 26 ovaciones de pie",
  author:"",
  author_name:"",
  contra:"",
  video_file:"new_xIsraelExposedx_2091205336354938880.mp4",
  source_url:"https://x.com/new_xIsraelExposedx/status/2091205336354938880",
  status:"CORROBORADO", confidence: 0, reviewed:"PENDIENTE"
});
DB.orgs.push({ id:"ORG-000006", name:"Armada de EEUU", type:"ARMADA", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000007", name:"Autoridad Palestina", type:"GOBIERNO", country:"Palestina", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000008", name:"BRICS", type:"ORGANISMO", country:"Internacional", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000009", name:"Banco Central de Irán", type:"ORGANISMO", country:"Irán", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000010", name:"Banco Nación (Argentina)", type:"EMPRESA", country:"Argentina", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000011", name:"Banco de Inglaterra", type:"ORGANISMO", country:"Reino Unido", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000012", name:"Brigada Golani", type:"EJERCITO", country:"Israel", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000013", name:"CAS", type:"EMPRESA", country:"Chile", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000014", name:"CGRI (IRGC)", type:"EJERCITO", country:"Irán", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000015", name:"CIA", type:"AGENCIA", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000016", name:"CIJ", type:"TRIBUNAL", country:"Internacional", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000017", name:"CPI", type:"TRIBUNAL", country:"Internacional", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000018", name:"Cabildero Digital", type:"EMPRESA", country:"España", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000019", name:"ChatGPT / OpenAI", type:"EMPRESA", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000020", name:"Congreso de EE.UU.", type:"ORGANISMO", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000021", name:"Corte Suprema de EE.UU.", type:"TRIBUNAL", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000022", name:"De Marker (Calcalist)", type:"MEDIO", country:"Israel", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000023", name:"Democracy Engine", type:"EMPRESA", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000024", name:"Departamento de Justicia de EEUU", type:"GOBIERNO", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000025", name:"Ejército de EEUU", type:"EJERCITO", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000026", name:"Estado de Israel", type:"GOBIERNO", country:"Israel", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000027", name:"FBI", type:"AGENCIA", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000028", name:"FDLE (Florida Department of Law Enforcement)", type:"AGENCIA", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000029", name:"Fiscalía General de México", type:"GOBIERNO", country:"México", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000030", name:"Fiscalía boliviana", type:"GOBIERNO", country:"Bolivia", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000031", name:"Fuerza Fronteriza Australiana (ABF)", type:"AGENCIA", country:"Australia", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000032", name:"Fundación Rockefeller", type:"ONG", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000033", name:"Gobierno de Argentina", type:"GOBIERNO", country:"Argentina", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000034", name:"Gobierno de EE.UU.", type:"GOBIERNO", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000035", name:"Gobierno de Israel", type:"GOBIERNO", country:"Israel", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000036", name:"Gobierno de México", type:"GOBIERNO", country:"México", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000037", name:"Hamás", type:"ORGANISMO", country:"Palestina", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000038", name:"Hanover Institute for Public Policy", type:"THINK_TANK", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000039", name:"Havas Media Germany", type:"EMPRESA", country:"Alemania", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000040", name:"Hind Rajab Foundation", type:"ONG", country:"Internacional", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000041", name:"Knesset", type:"ORGANISMO", country:"Israel", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000042", name:"La Derecha (medio digital)", type:"MEDIO", country:"Chile", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000043", name:"La Francia Insumisa", type:"PARTIDO", country:"Francia", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000044", name:"MI6", type:"AGENCIA", country:"Reino Unido", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000045", name:"Media Luna Roja Palestina (PRCS)", type:"ONG", country:"Palestina", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000046", name:"Mekorot", type:"EMPRESA", country:"Israel", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000047", name:"Ministerio de Exteriores de Rusia", type:"GOBIERNO", country:"Rusia", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000048", name:"Mossad", type:"AGENCIA", country:"Israel", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000049", name:"NCTC (Centro Nacional de Contraterrorismo)", type:"AGENCIA", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000050", name:"National Lawyers Guild", type:"ONG", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000051", name:"ONU", type:"ORGANISMO", country:"Internacional", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000052", name:"OSS", type:"AGENCIA", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000053", name:"Parlamento Europeo", type:"ORGANISMO", country:"Unión Europea", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000054", name:"Partido Demócrata (EE.UU.)", type:"PARTIDO", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000055", name:"Pentágono / Departamento de Defensa", type:"GOBIERNO", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000056", name:"Perplexity", type:"EMPRESA", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000057", name:"Petróleos de Venezuela", type:"EMPRESA", country:"Venezuela", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000058", name:"Piro Inc", type:"EMPRESA", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000059", name:"Policía Metropolitana de Londres", type:"AGENCIA", country:"Reino Unido", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000060", name:"Policía israelí", type:"AGENCIA", country:"Israel", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000061", name:"Politico", type:"MEDIO", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000062", name:"Pro-Israel Network", type:"ONG", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000063", name:"Senado de EE.UU.", type:"ORGANISMO", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000064", name:"The Guardian", type:"MEDIO", country:"Reino Unido", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000065", name:"UNRWA", type:"AGENCIA", country:"Palestina", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000066", name:"Unión Europea", type:"ORGANISMO", country:"Unión Europea", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.orgs.push({ id:"ORG-000067", name:"Watson Institute (Cost of War)", type:"THINK_TANK", country:"Estados Unidos", certainty:"POSIBLE", review:"PENDIENTE", refs:["SRC-000003"] });
DB.events.push({ id:"EVT-000003", name:"Atentados del 7 de octubre", date:"2023-10-07", desc:"Ataque de Hamás contra el sur de Israel que dio inicio a la guerra en Gaza.", video:"batch2_ARGCRT_2093489975652126721.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000004", name:"Guerra en Gaza", date:"2023-2026", desc:"Conflicto armado entre Israel y Hamás con alto número de víctimas civiles y destrucción de la Franja.", video:"045_youtube_@BreezyPolitics_11R9RVUgOUk.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000005", name:"Incursión en el Hospital Al-Shifa", date:"2023-2024", desc:"Operación militar israelí en el principal hospital de Gaza denunciado como ataque a instalación sanitaria.", video:"Nadira_ali20_2093337835894198272.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000006", name:"Bloqueo de Gaza", date:"2007-2026", desc:"Restricción de mercancías y movimiento en la Franja de Gaza denunciada como castigo colectivo.", video:"041_twitter_Bry___l_2093765417848250368.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000007", name:"Muerte de Hind Rajab y paramédicos", date:"2024-01", desc:"Niña de 6 años y rescatistas hallados muertos tras ser alcanzados por fuego; caso ampliamente documentado.", video:"GBC_Press_1758014173005434880.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000008", name:"Quema de tierras palestinas en Cisjordania", date:"2026", desc:"Soldados israelíes se filmaron prendiendo fuego a tierra palestina, que se propagó.", video:"026_twitter_Parodyjeffx_2094063840782606336.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000009", name:"Disparo a niño de 14 años en Cisjordania", date:"reciente", desc:"Supuesta muerte de un joven desarmado en un centro de refugiados.", video:"Ignaciogjv_2092971978768408577.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000010", name:"Asesinatos de ciudadanos estadounidenses en Cisjordania", date:"últimos 4 años", desc:"Nueve ciudadanos estadounidenses asesinados en Cisjordania, según un legislador.", video:"NA_twitter_Haitham47117914_2093141696368234496.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000011", name:"Destrucción de la iglesia de San Porfirio", date:"indeterminada", desc:"Iglesia ortodoxa griega de Gaza, una de las más antiguas del mundo, dañada o destruida.", video:"047_twitter_100_alpha_2094423973412880512.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000012", name:"Incendio de la iglesia de San Jorge", date:"desconocida", desc:"Sitio sagrado que, según el narrador, fue incendiado por colonos israelíes.", video:"NA_twitter_ARGCRT_2093481005868834816.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000013", name:"Nakba / 1948", date:"1948", desc:"Limpieza étnica y desplazamiento masivo de palestinos durante la creación del Estado de Israel.", video:"048_youtube_@BreezyPolitics_U_rTXJcTgeQ.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000014", name:"Partición de Palestina de 1947", date:"1947", desc:"Plan de la ONU de dividir Palestina, referido como origen de la creación del Estado de Israel.", video:"DaniMayakovski_2010271361365626880.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000015", name:"Holocausto", date:"1939-1945", desc:"Genocidio de judíos por la Alemania nazi; su cifra de víctimas es cuestionada en algunos clips.", video:"006_twitter_After_TheTruth_2092998932745900032.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000016", name:"Creación de Israel", date:"1948", desc:"Establecimiento del Estado de Israel, correlacionado por el narrador con el Holocausto.", video:"044_twitter_IIFBS__1848140035670806528.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000017", name:"Normalización Marruecos-Israel", date:"2020", desc:"Acuerdo de normalización de relaciones entre Marruecos e Israel reconocido mutuamente.", video:"NA_twitter_ultras_antifaa_2093448788103061504.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000018", name:"Caso Pegasus en México", date:"2017-2026", desc:"Presunto uso del software de espionaje Pegasus de NSO Group contra periodistas y activistas.", video:"049_youtube_BreezyPolitics_rZcAVNi5XbY_android.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000019", name:"Solicitud de orden de arresto contra Netanyahu", date:"2026", desc:"Solicitud ante la Corte Penal Internacional citada como motivo de las sanciones estadounidenses.", video:"batch2_praxedes416_2093674783183433728.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000020", name:"Intervención en el Parlamento Europeo", date:"2026", desc:"Discurso de un eurodiputado sobre muertes y detenciones de palestinos previas al ataque de Hamás.", video:"030_twitter_GBC_Press_1969636382587924480.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000021", name:"Discurso del primer ministro israelí ante el Congreso", date:"reciente", desc:"Discurso ante el Congreso de EE.UU. que recibió 26 ovaciones de pie, según el orador.", video:"new_xIsraelExposedx_2091205336354938880.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.events.push({ id:"EVT-000022", name:"Emigración de judíos desde países árabes", date:"siglo XX", desc:"Episodios de emigración de judíos desde Marruecos, Irak y Egipto hacia Israel descritos por el narrador.", video:"1_twitter_DaniMayakovski_2093315930432372736.mp4", certainty:"PROBABLE", review:"PENDIENTE" });
DB.rels.push({ subject:"PER-000019", predicate:"appears_in", object:"VID-000027", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000022", predicate:"appears_in", object:"VID-000028", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000021", predicate:"appears_in", object:"VID-000028", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000089", predicate:"appears_in", object:"VID-000030", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000018", predicate:"appears_in", object:"VID-000030", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000090", predicate:"appears_in", object:"VID-000031", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000091", predicate:"appears_in", object:"VID-000031", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000092", predicate:"appears_in", object:"VID-000031", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000093", predicate:"appears_in", object:"VID-000031", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000094", predicate:"appears_in", object:"VID-000031", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000095", predicate:"appears_in", object:"VID-000032", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000001", predicate:"appears_in", object:"VID-000036", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000025", predicate:"appears_in", object:"VID-000036", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000020", predicate:"appears_in", object:"VID-000037", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000096", predicate:"appears_in", object:"VID-000043", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000027", predicate:"appears_in", object:"VID-000044", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000021", predicate:"appears_in", object:"VID-000046", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000002", predicate:"appears_in", object:"VID-000048", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000097", predicate:"appears_in", object:"VID-000048", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000098", predicate:"appears_in", object:"VID-000048", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000001", predicate:"appears_in", object:"VID-000049", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000096", predicate:"appears_in", object:"VID-000050", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000099", predicate:"appears_in", object:"VID-000054", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000021", predicate:"appears_in", object:"VID-000058", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000006", predicate:"appears_in", object:"VID-000059", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000100", predicate:"appears_in", object:"VID-000059", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000015", predicate:"appears_in", object:"VID-000059", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000002", predicate:"appears_in", object:"VID-000059", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000101", predicate:"appears_in", object:"VID-000062", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000102", predicate:"appears_in", object:"VID-000062", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000103", predicate:"appears_in", object:"VID-000062", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000104", predicate:"appears_in", object:"VID-000062", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000105", predicate:"appears_in", object:"VID-000062", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000106", predicate:"appears_in", object:"VID-000062", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000013", predicate:"appears_in", object:"VID-000070", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000012", predicate:"appears_in", object:"VID-000070", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000107", predicate:"appears_in", object:"VID-000070", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000010", predicate:"appears_in", object:"VID-000071", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000099", predicate:"appears_in", object:"VID-000071", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000006", predicate:"appears_in", object:"VID-000073", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000108", predicate:"appears_in", object:"VID-000075", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000109", predicate:"appears_in", object:"VID-000075", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000001", predicate:"appears_in", object:"VID-000075", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000110", predicate:"appears_in", object:"VID-000076", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000011", predicate:"appears_in", object:"VID-000077", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000111", predicate:"appears_in", object:"VID-000078", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"VID-000078", predicate:"mentions", object:"ORG-000001", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000053", predicate:"appears_in", object:"VID-000079", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000049", predicate:"appears_in", object:"VID-000081", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000112", predicate:"appears_in", object:"VID-000081", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000048", predicate:"appears_in", object:"VID-000087", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000113", predicate:"appears_in", object:"VID-000088", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000114", predicate:"appears_in", object:"VID-000088", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000047", predicate:"appears_in", object:"VID-000089", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000115", predicate:"appears_in", object:"VID-000092", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000116", predicate:"appears_in", object:"VID-000094", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000052", predicate:"appears_in", object:"VID-000095", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000057", predicate:"appears_in", object:"VID-000097", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000055", predicate:"appears_in", object:"VID-000100", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000117", predicate:"appears_in", object:"VID-000100", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000118", predicate:"appears_in", object:"VID-000100", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000065", predicate:"appears_in", object:"VID-000103", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000047", predicate:"appears_in", object:"VID-000105", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000017", predicate:"appears_in", object:"VID-000106", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000025", predicate:"appears_in", object:"VID-000106", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000119", predicate:"appears_in", object:"VID-000106", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000051", predicate:"appears_in", object:"VID-000107", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000120", predicate:"appears_in", object:"VID-000107", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000043", predicate:"appears_in", object:"VID-000108", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000030", predicate:"appears_in", object:"VID-000108", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000121", predicate:"appears_in", object:"VID-000108", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000122", predicate:"appears_in", object:"VID-000108", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000062", predicate:"appears_in", object:"VID-000112", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000124", predicate:"appears_in", object:"VID-000117", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000074", predicate:"appears_in", object:"VID-000118", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000076", predicate:"appears_in", object:"VID-000118", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000075", predicate:"appears_in", object:"VID-000118", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000125", predicate:"appears_in", object:"VID-000118", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000021", predicate:"appears_in", object:"VID-000126", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000084", predicate:"appears_in", object:"VID-000129", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"VID-000129", predicate:"mentions", object:"ORG-000002", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000002", predicate:"appears_in", object:"VID-000131", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000041", predicate:"appears_in", object:"VID-000134", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000030", predicate:"appears_in", object:"VID-000135", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000031", predicate:"appears_in", object:"VID-000136", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000041", predicate:"appears_in", object:"VID-000137", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000127", predicate:"appears_in", object:"VID-000138", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000128", predicate:"appears_in", object:"VID-000138", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000129", predicate:"appears_in", object:"VID-000138", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000001", predicate:"appears_in", object:"VID-000142", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000018", predicate:"appears_in", object:"VID-000144", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000079", predicate:"appears_in", object:"VID-000144", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000080", predicate:"appears_in", object:"VID-000144", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000082", predicate:"appears_in", object:"VID-000144", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000130", predicate:"appears_in", object:"VID-000148", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000018", predicate:"appears_in", object:"VID-000149", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000085", predicate:"appears_in", object:"VID-000149", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000131", predicate:"appears_in", object:"VID-000149", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000001", predicate:"appears_in", object:"VID-000150", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000006", predicate:"appears_in", object:"VID-000151", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000047", predicate:"appears_in", object:"VID-000152", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000132", predicate:"appears_in", object:"VID-000155", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000001", predicate:"appears_in", object:"VID-000156", type:"SECUENCIA", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000001", predicate:"lidera", object:"ORG-000002", type:"INSTITUCIONAL", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000002", predicate:"recibió_lobby_de", object:"ORG-000001", type:"LOBBYING", src:"SRC-000003" });
DB.rels.push({ subject:"PER-000001", predicate:"se_reunió_con", object:"PER-000002", type:"REUNION", src:"SRC-000003" });



// ===== INGESTA 2026-09-04: Short Breezy Politics 'Tucker Gets It' =====
DB.videos.push({
  id:"VID-000157",
  title:"Tucker Carlson: 'Ese es el enemigo de la civilización' (Gaza)",
  url:"https://www.youtube.com/shorts/MlmvVfzqh8Q",
  platform:"YouTube",
  channel:"Breezy Politics",
  video_id:"MlmvVfzqh8Q",
  master_file:"C:\\Users\\USUARIO\\Downloads\\CRONOS\\social-video-analysis\\investigacion-2026-08-28\\media\\MlmvVfzqh8Q_BreezyPolitics.webm",
  sha256:"e20ebbfe1539c4153f5bd60cb3713f0a0a3bf0e91ce0f2ec58b71c5639c6abb1",
  upload_date:"2026-09-04",
  manipulation:"A",
  roles:["PER-000006","PER-000040"],
  desc:"Clip de Tucker Carlson (Breezy Politics) comentando la destrucción de Gaza: 'estamos desmembrando Gaza, dejándola como un montón de escombros'; afirma que 'genocidio' no es propaganda sino la definición de lo que ocurre; cita al ministro Bezalel Smotrich ('moverlos a terceros países', 'campos de internamiento') como testimonio de los perpetradores; argumenta en contra de matar y expulsar por 'linaje'. ASR en inglés, clip de 60s.",
  certainty:"CORROBORADO",
  review:"PENDIENTE",
  src:"SRC-000003"
});

// AFIRMACIÓN: la cita de Smotrich / el argumento de Carlson
DB.claims.push({
  id:"CLM-000073",
  text:"Tucker Carlson: 'genocidio' es la definición de lo que ocurre en Gaza, no un término propagandístico; 'la gente está siendo asesinada y expulsada del lugar donde nació por su linaje'. Cita a Bezalel Smotrich proponiendo mover a la población a terceros países / internamiento.",
  author:"PER-000006",
  author_name:"Tucker Carlson",
  contra:"Afirmación interpretativa de un comentarista; la caracterización de 'genocidio' es disputada y depende de verificación legal (CIJ/CPI). La cita exacta de Smotrich requiere transcripción/contexto oficial.",
  video_file:"MlmvVfzqh8Q_BreezyPolitics.webm",
  source_url:"https://www.youtube.com/shorts/MlmvVfzqh8Q",
  status:"PROBABLE",
  confidence:50,
  reviewed:"PENDIENTE",
  srcs:["SRC-000003"]
});

// RELACIONES
DB.rels.push({subject:"PER-000006",predicate:"appears_in",object:"VID-000157",type:"SECUENCIA",src:"SRC-000003"});
DB.rels.push({subject:"PER-000040",predicate:"mencionado_en",object:"VID-000157",type:"SECUENCIA",src:"SRC-000003"});
DB.rels.push({subject:"VID-000157",predicate:"produces_claim",object:"CLM-000073",type:"DECLARACION",src:"SRC-000003"});
DB.rels.push({subject:"PER-000006",predicate:"hizo_claim",object:"CLM-000073",type:"DECLARACION",src:"SRC-000003"});


// Lugares
DB.events.length; // placeholder