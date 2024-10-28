const AuthorData = [
  {
    id: 1,
    name: 'Lord',
    surname: 'Byron',
    url: 'lord-byron',
    life: '(Londres, Inglaterra, 1788 - Mesolongi, Grecia, 1824)',
    bio: 'Figura clave del movimiento romántico que revolucionó Europa a comienzos del siglo <span class="vers">XIX</span>, Lord Byron no sólo legó a la posteridad una de las biografías más ricas y notables del período, sino sobre todo una invalorable obra poética en la que, tras la perfección de sus versos y las tormentas internas de sus sublimes y contradictorios «héroes byronianos», vertió todo su inmortal dolor, su desdén por un bajo mundo con el que nada tenía en común, su amargo pesimismo, su solitario orgullo y sus románticos anhelos de gloria y libertad. Entre sus obras más destacables se encuentran <em>La peregrinación de Childe Harold</em>, <em>Lara</em>, <em>El corsario</em>, <em>Manfred</em>, <em>Las lamentaciones del Tasso</em>, <em>Beppo</em>, <em>Don Juan</em>, <em>Caín</em> y <em>Sardanápalo</em>.',
    trads: ['Manfred (fragmentos)', 'Caín (fragmentos)', 'Oscuridad'],
    links: [
      'https://editorial-alastor.blogspot.com/2011/02/lord-byron-manfred.html',
      'https://editorial-alastor.blogspot.com/2012/01/lord-byron-cain-fragmentos.html',
      'https://editorial-alastor.blogspot.com/2011/02/lord-byron-oscuridad.html',
    ],
    rels: [1, 4],
  },
  {
    id: 2,
    name: 'Percy Bysshe',
    surname: 'Shelley',
    url: 'p-b-shelley',
    life: '(Field Place, Inglaterra, 1792 - La Spezia, Italia, 1822)',
    bio: 'Pese a ser menos recordado que su esposa Mary, autora del clásico <em>Frankenstein</em>, P. B. Shelley puede considerarse, sin embargo, como una de las cúspides de la lírica inglesa romántica y de la literatura universal de todos los tiempos. De espíritu revolucionario, su poesía, alada por una emotividad poco común en la tradición británica, derivó con el tiempo en encendidos llamados a evasiones hacia ideales e inalcanzables mundos de belleza natural. En su obra pueden encontrarse joyas como su <em>Himno a la Belleza Intelectual</em>, <em>Ozymandias</em>, <em>Oda al Viento Oeste</em>, <em>Prometeo desencadenado</em>, <em>A una alondra</em>, <em>La nube</em>, <em>Epipsychidion</em> y <em>Adonais</em>, su célebre elegía a la muerte de <a href="john-keats">John Keats</a>.',
    trads: [
      'La fría tierra se durmió debajo',
      'Invocación a la Miseria',
      'Oda al Viento Oeste',
      'A una alondra',
      'Adonais (fragmento)',
      'Ozymandias',
    ],
    links: [
      'https://editorial-alastor.blogspot.com/2011/02/shelley-lineas.html',
      'https://editorial-alastor.blogspot.com/2011/02/shelley-invocacion-la-miseria.html',
      'https://editorial-alastor.blogspot.com/2016/05/p-b-shelley-oda-al-viento-oeste.html',
      'https://editorial-alastor.blogspot.com/2016/08/p-b-shelley-una-alondra.html',
      'https://editorial-alastor.blogspot.com/2016/05/p-b-shelley-adonais.html',
      'https://editorial-alastor.blogspot.com/2011/02/shelley-ozymandias-espanol.html',
    ],
    rels: [3, 4],
  },
  {
    id: 3,
    name: 'John',
    surname: 'Keats',
    url: 'john-keats',
    life: '(Londres, Inglaterra, 1795 - Roma, Italia, 1821)',
    bio: 'Keats fue uno de los principales exponentes de la segunda generación de poetas románticos ingleses, junto a <a href="lord-byron">Lord Byron</a> y <a href="p-b-shelley">P. B. Shelley</a>. Su obra, teñida de un melancólico lirismo que más tarde sería una gran influencia para los prerrafaelistas, abarca poemas mayores de inspiración helénica, romances de ambientación medieval, baladas, odas, canciones y un sinnúmero de valiosos sonetos. De toda esa producción pueden destacarse <em>Endimión</em>, <em>De puntillas me elevé</em>, <em>La Belle Dame sans Merci</em>, <em>Lamia</em>, <em>La víspera de Santa Inés</em>, <em>Isabella</em>, <em>Oda a un ruiseñor</em>, <em>Oda a una urna griega</em>, <em>Oda a Psique</em>, <em>Oda a la Melancolía</em>, <em>Al Otoño</em>, <em>Hiperión</em> y <em>La caída de Hiperión</em>.',
    trads: [
      'La Belle Dame sans Merci',
      'Oda a una urna griega',
      'Oda a un ruiseñor',
      'Himno a Pan',
      'Hiperión (fragmento)',
      'Lamia (fragmento)',
    ],
    links: [
      'https://editorial-alastor.blogspot.com/2011/02/keats-la-belle-dame-sans-merci.html',
      'https://editorial-alastor.blogspot.com/2011/02/keats-oda-una-urna-griega.html',
      'https://editorial-alastor.blogspot.com/2016/08/john-keats-oda-un-ruisenor.html',
      'https://editorial-alastor.blogspot.com/2011/02/keats-himno-pan.html',
      'https://editorial-alastor.blogspot.com/2016/05/john-keats-hiperion.html',
      'https://editorial-alastor.blogspot.com/2016/05/john-keats-lamia.html',
    ],
    rels: [3, 4],
  },
  {
    id: 4,
    name: 'Walter',
    surname: 'Scott',
    url: 'walter-scott',
    life: '(Edimburgo, Escocia, 1771 - Abbotsford, Escocia, 1832)',
    bio: 'Creador de la novela histórica, en la que hizo gala de una prosa notable, de una gran capacidad para dar vida a sus personajes y de enormes conocimientos sobre los cuentos y leyendas de su Escocia natal, algo que también supo verter con acierto en su obra poética, Walter Scott alcanzó la fama durante su vida. Fundó una editorial propia, contribuyó en diversos periódicos conservadores y escribió un gran número de novelas y obras que, aunque mayormente olvidadas hoy, permanecen como clásicos indiscutidos de la literatura británica, y entre las que pueden mencionarse <em>Ivanhoe</em>, <em>El anticuario</em>, <em>Waverley</em>, <em>Redgauntlet</em>, <em>La novia de Lammermoor</em>, <em>Cartas sobre demonología y brujería</em> y <em>Las crónicas de Cannongate</em>.',
    trads: ['La cámara de los tapices (comienzo)'],
    links: ['../imgs/02-relatos-oscuridad-horror.pdf'],
    rels: [2],
  },
  {
    id: 5,
    name: 'John',
    surname: 'Polidori',
    url: 'john-polidori',
    life: '(Londres, Inglaterra, 1795 - Londres, Inglaterra, 1821)',
    bio: 'Cabe a John William Polidori el mérito de ser considerado, con su relato <em>El vampiro</em>, el creador del primer exponente cuentístico de la copiosa literatura vampírica que llega hasta nuestros tiempos. La historia tiene como trasfondo el trauma que causó a Polidori su relación con <a href="lord-byron">Lord Byron</a>, quien lo había contratado como médico personal para que lo acompañase en un viaje por el continente europeo. Estando en Suiza, se produjo el célebre encuentro de ambos con el poeta <a href="p-b-shelley">P. B. Shelley</a> y su furura esposa Mary, y la legendaria velada en la que realizaron una competencia de cuentos de horror entre ellos que dio lugar tanto al clásico de Mary Shelley, <em>Frankenstein</em>, como a la obra seminal del doctor, quien también fue autor de la novela <em>Ernestus Berchtold</em>.',
    trads: ['El vampiro (comienzo)'],
    links: ['../imgs/02-relatos-oscuridad-horror.pdf'],
    rels: [2],
  },
  {
    id: 6,
    name: 'Edgar Allan',
    surname: 'Poe',
    url: 'edgar-allan-poe',
    life: '(Boston, MA, EEUU, 1809 - Baltimore, MD, EEUU, 1849)',
    bio: 'La literatura de horror tiene un antes y un después de Edgar Allan Poe, a quien, pese a no ser siempre reconocido en su tiempo y de morir en la miseria, la historia terminó erigiendo como la máxima figura del Romanticismo americano. Posesor de un intelecto deslumbrante y de una prosa altamente poética, Poe revolucionó, con los puntos más álgidos de su narrativa, muchos de los parámetros del cuento corto. Lo más interesante de su obra incluye literatura detectivesca, a la cual ayudó a consolidar con cuentos como <em>Los crímenes de la calle Morgue</em>, narraciones populares como <em>Las aventuras de Arthur Gordon Pym</em>, poesía, de la que pueden extraerse joyas imperecederas como <em>El cuervo</em>, numerosos ensayos, y su vasta e inigualable producción en el ámbito del cuento de terror.',
    trads: ['Morella', 'El cuervo', 'La durmiente', 'Solo', 'Ulalume'],
    links: [
      'https://editorial-alastor.blogspot.com/2011/02/poe-morella.html',
      'https://editorial-alastor.blogspot.com/2011/02/poe-el-cuervo.html',
      'https://editorial-alastor.blogspot.com/2016/08/edgar-allan-poe-la-durmiente.html',
      'https://editorial-alastor.blogspot.com/2016/08/edgar-allan-poe-solo-alone.html',
      'https://editorial-alastor.blogspot.com/2016/08/edgar-allan-poe-ulalume.html',
    ],
    rels: [2, 4, 8],
  },
  {
    id: 7,
    name: 'Joseph Sheridan',
    surname: 'Le Fanu',
    url: 'sheridan-le-fanu',
    life: '(Dublín, Irlanda, 1814 - Dublín, Irlanda, 1873)',
    bio: 'Considerado como el primer autor en asumir la literatura de horror como género, Joseph Sheridan Le Fanu fue, ante todo, el mayor cultor de la <em>ghost story</em> del siglo <span class="vers">XIX</span>. Tras recibirse de abogado en 1839, Le Fanu comenzó una extensa carrera como periodista y editor de periódicos y revistas, al tiempo en que se dedicaba a escribir numerosas novelas y relatos de misterio y de horror, entre los cuales son dignos de mención <em>Schalken el pintor</em>, <em>El testamento del squire Toby</em>, <em>El familiar</em>, <em>Té verde</em> y <em>Carmilla</em>, su inmortal narración de vampirismo femenino. También destacó enormemente escribiendo baladas irlandesas y vertiendo leyendas locales en relatos como <em>Laura Silver Bell</em>, <em>El pacto de sir Dominick</em>, <em>Ultor de Lacy</em> e <em>Historias de Lough Guir</em>.',
    trads: ['Ultor de Lacy (comienzo)'],
    links: ['../imgs/02-relatos-oscuridad-horror.pdf'],
    rels: [2],
  },
  {
    id: 8,
    name: 'Ambrose',
    surname: 'Bierce',
    url: 'ambrose-bierce',
    life: '(Meigs, OH, EEUU, 1842 - Chihuahua, México, 1914)',
    bio: 'Célebre panfletista y cronista en su época, su nombre pasó a la historia por su facilidad para evocar simultáneamente, en un estilo simple y directo, el más escalofriante de los terrores y el más ácido de los cinismos, en el que dieron lo mejor de sí tanto su misantropía como el cruel humor negro que volcó en todos sus escritos. Antes de desaparecer para siempre sin dejar rastro alguno tras de sí, como sucediera con muchos personajes de sus cuentos, Bierce legó al mundo obras como <em>El diccionario del diablo</em> y <em>El club de los parricidas</em>, además de relatos como <em>La muerte de Halpin Frayser</em>, <em>La casa encantada</em>, <em>El ambiente adecuado</em>, <em>La maldita criatura</em>, <em>Del otro lado de la pared</em>, <em>El camino bajo la luz de la luna</em>, <em>Una contienda reñida</em>, <em>Un habitante de Carcosa</em> y <em>Un incidente en el puente de Owl Creek</em>.',
    trads: ['Un habitante de Carcosa (comienzo)'],
    links: ['../imgs/02-relatos-oscuridad-horror.pdf'],
    rels: [2],
  },
  {
    id: 9,
    name: 'M. R.',
    surname: 'James',
    url: 'm-r-james',
    life: '(Goodnestone, Inglaterra, 1862 - Eton, Inglaterra, 1936)',
    bio: 'Continuador de la escuela de la <em>ghost story</em> victoriana iniciada por <a href="sheridan-le-fanu">J. Sheridan Le Fanu</a>, Montague Rhodes James logró amoldar el cuento de fantasmas a las exigencias de verosimilitud de los tiempos modernos y otorgó al género sobrenatural una serie de nuevas reglas que resultarían indispensables en su evolución ulterior. Erudito bibliógrafo, especialista en manuscritos medievales, estudios bíblicos y arquitectura de iglesias, director de Eton y miembro de numerosas universidades, M. R. James fue un cuentista más bien flemático y apacible, lo cual se refleja poderosamente en sus metódicos relatos, entre los cuales pueden destacarse <em>El álbum del canónigo Alberic</em>, <em>El grabado</em>, <em>Número 13</em>, <em>El tesoro del abad Thomas</em>, <em>El señor Humphreys y su herencia</em>, <em>Un episodio en la historia de la catedral</em> y <em>El conde Magnus</em>.',
    trads: ['El conde Magnus (comienzo)'],
    links: ['../imgs/02-relatos-oscuridad-horror.pdf'],
    rels: [2],
  },
  {
    id: 10,
    name: 'Arthur',
    surname: 'Machen',
    url: 'arthur-machen',
    life: '(Caerleon, Gales, 1863 - Beaconsfield, Inglaterra, 1947)',
    bio: 'Nacido en una ignota comarca rural galesa, Arthur Machen viajó a Londres llevando ya dentro de sí la semilla de sus geniales historias, dado que no haría sino preconizar, en medio de la gran ciudad, la vuelta al mundo natural y al pasado como fuentes de misterio y terror, dando nueva vida a la herencia pagana de Europa. Su obra consta de autobiografías, novelas, de entre las que sobresalen <em>El terror</em> y la inquietante <em>La colina de los sueños</em>, algunos poemas en prosa que en su momento lo acercaron al decadentismo, y cuentos de horror en los que todo su genio se halla visiblemente condensado y entre los que es ineludible mencionar <em>El gran dios Pan</em>, <em>El polvo blanco</em>, <em>El sello negro</em>, <em>La mano roja</em>, <em>La pirámide brillante</em> y <em>El pueblo blanco</em>, considerado por algunos el mejor relato de horror de la historia.',
    trads: ['El pueblo blanco (comienzo)', 'Verano'],
    links: [
      '../imgs/02-relatos-oscuridad-horror.pdf',
      'https://editorial-alastor.blogspot.com/2020/06/arthur-machen-verano.html',
    ],
    rels: [2],
  },
  {
    id: 11,
    name: 'M. P.',
    surname: 'Shiel',
    url: 'm-p-shiel',
    life: '(Isla de Montserrat, 1865 - Chichester, Inglaterra, 1947)',
    bio: 'Eternamente soslayado por los historiadores literarios, Matthew Phipps Shiel supo crear, sin embargo, un puñado de piezas en el universo de la literatura de horror que destellan como gemas perdidas en un abismo nocturno. La más memorable de todas ellas posiblemente sea su novela <em>La nube púrpura</em>, acaso el primer y mejor logrado intento de plasmar la apocalíptica idea de un hombre que queda solo en el mundo y se pasea entre muertos y ciudades sin vida como rey de todo. Similar interés revisten algunas de sus piezas cuentísticas, la mayoría de las cuales muestran una marcada influencia de la escuela decadentista y de entre las que destacan <em>Tulsah</em>, <em>La mansión de los sonidos</em> y la febril <em>Xélucha</em>.',
    trads: ['Xélucha'],
    links: [
      'https://editorial-alastor.blogspot.com/2016/08/matthew-phipps-shiel-xelucha.html',
    ],
    rels: [2],
  },
  {
    id: 12,
    name: 'H. P.',
    surname: 'Lovecraft',
    url: 'h-p-lovecraft',
    life: '(Providence, RI, EEUU, 1890 - Providence, RI, EEUU, 1937)',
    bio: 'Pagano, de hábitos nocturnos, políticamente incorrecto, retraído salvo por carta, su obra se destaca eminentemente como una de las más lóbregas, imaginativas y subyugantes de toda la literatura de horror y no pierde en nada su vigencia, cual un magnífico panteón irguiéndose imperturbable en la ciega noche de un cementerio de sepulcros en general modestos, derruidos u olvidados. En el conjunto de sus concepciones, de inigualable valor estilístico e inapreciable poder evocador, se conjuga desde lo profundamente demoníaco y sideral de sus Mitos de Cthulhu hasta la magia de sus brillantes vuelos dunsanianos, pero pasando sobre todo por lo notablemente opresivo, personal y oscuro de sus cuentos góticos o de Arkham.',
    trads: ['El extraño', 'Los otros dioses', 'El sabueso'],
    links: [
      'https://editorial-alastor.blogspot.com/2011/02/lovecraft-el-extrano.html',
      'https://editorial-alastor.blogspot.com/2020/07/h-p-lovecraft-los-otros-dioses.html',
      'https://editorial-alastor.blogspot.com/2020/07/h-p-lovecraft-el-sabueso.html',
    ],
    rels: [2],
  },
  {
    id: 13,
    name: 'Clark Ashton',
    surname: 'Smith',
    url: 'clark-ashton-smith',
    life: '(Long Valley, CA, EEUU, 1893 - Pacific Grove, CA, EEUU, 1961)',
    bio: 'Ya como escultor, pintor, poeta o cuentista, nunca dejó el californiano Clark Ashton Smith de sondear los más hondos abismos de los espacios siderales y del horror arquetípico de la conciencia humana. Miembro del círculo de corresponsales de Lovecraft, Smith fue, junto al mismo Lovecraft y a Robert E. Howard, uno de los principales pilares de la revista <em>Weird Tales</em> y de la cimentación de los Mitos de Cthulhu. Smith plasmó sus historias en una serie de ciclos de relatos situados en escenarios como la prehistórica Hiperbórea, la futurística Zothique o los oscuros bosques franceses de la medieval Averoigne. Su prosa altamente poética y ornada, recargada de vocablos exóticos y términos extraños, bastó para situarlo entre los más refinados cuentistas norteamericanos de horror de todo el siglo <span class="vers">XX</span>.',
    trads: ['Ubbo-Sathla', 'Desde las criptas de la memoria'],
    links: [
      'https://editorial-alastor.blogspot.com/2011/02/smith-ubbo-sathla.html',
      'https://editorial-alastor.blogspot.com/2011/02/smith-desde-las-criptas-de-la-memoria.html',
    ],
    rels: [2],
  },
  {
    id: 14,
    name: 'Gottfried',
    surname: 'Bürger',
    url: 'gottfried-burger',
    life: '(Molmerswende, Alemania, 1747 - Gotinga, Alemania, 1794)',
    bio: 'Poeta y traductor alemán prerromántico principalmente recordado por su poesía popular y sus baladas. Su salto a la fama se dio merced a su célebre <em>Lenore</em>, balada que, publicada pocos meses antes que el <em>Werther</em> de Goethe, resultó una influencia capital para la eclosión del Romanticismo germano, y que, por sus tonos sobrenaturales y terroríficos, revolucionó el ambiente literario y cultural europeo de la época y contribuyó tanto como la novela gótica británica a la creación de la literatura de horror. La obra inspiró ilustraciones de William Blake, traducciones de autores como Walter Scott, Dante Gabriel Rossetti y Gérard de Nerval, una espeluznante cantata del checo Anton Reicha que sería modelo para todas las obras musicales de terror del Romanticismo, y hasta una sinfonía de Joachim Raff. Bürger retornó años más tarde a la balada sobrenatural con <em>El cazador salvaje</em>, obra de similar valía que inspiró también varias producciones de otras disciplinas, incluyendo un poema sinfónico de César Franck.',
    trads: ['Lenore (comienzo)', 'El cazador salvaje'],
    links: [
      '../imgs/04-poesia-oscura-romantica.pdf',
      'https://editorial-alastor.blogspot.com/2022/07/gottfried-burger-el-cazador-salvaje.html',
    ],
    rels: [4],
  },
  {
    id: 15,
    name: 'F. R. de',
    surname: 'Chateaubriand',
    url: 'f-r-chateaubriand',
    life: '(Saint-Malo, Francia, 1768 - París, Francia, 1848)',
    bio: 'Considerado, gracias a sus obras <em>Atala</em> y <em>René</em>, el fundador y principal impulsor del Romanticismo en la literatura francesa, el vizconde de François-René de Chateaubriand se destacó por una escritura que rompía los moldes de su época merced a su melancolía, su afinidad con la naturaleza, su inclinación por el aislamiento y su análisis de las subterráneas corrientes emocionales del hombre. De mucho más vasto alcance y aliento fueron sus <em>Memorias de ultratumba</em>, una extensa obra autobiográfica que se publicó póstumamente, pero quizás sus mayores fortalezas literarias se manifiesten en varios de los poemas breves que componen sus <em>Cuadros de la naturaleza</em>, temprana colección de poesías entre cuyas páginas pueden encontrarse versos de inusitada belleza y de encendido culto a una melancólica soledad.',
    trads: ['Cuadros de la naturaleza (selección)'],
    links: [
      'https://editorial-alastor.blogspot.com/2011/02/chateaubriand-el-bosque.html',
    ],
    rels: [4],
  },
  {
    id: 16,
    name: 'Johann Wolfgang von',
    surname: 'Goethe',
    url: 'j-w-goethe',
    life: '(Fráncfort, Alemania, 1749 - Weimar, Alemania, 1832)',
    bio: 'Mediante su participación en el movimiento estético <em>Sturm und Drang</em>, que lo asoció al poeta Friedrich Schiller, Goethe fue uno de los principales precursores del Romanticismo alemán, al cual acaso dio inicio formal con la publicación de su influyente novela epistolar <em>Werther</em>. Figura cimera de las letras occidentales de todos los tiempos, Goethe cultivó la poesía lírica, la balada, la novela, el ensayo científico y el drama, destacándose con solidez en todos los campos por igual. Algunas de sus obras más reconocidas son <em>El rey de los elfos</em>, <em>El pescador</em>, <em>La novia de Corinto</em>, <em>Wilhelm Meister</em>, <em>Egmont</em>, <em>Diván de Oriente y Occidente</em>, <em>Las afinidades electivas</em> y, sobre todo, las dos partes de su inmortal clásico <em>Fausto</em>.',
    trads: ['El rey de los elfos', 'Soledad'],
    links: [
      'https://editorial-alastor.blogspot.com/2014/07/goethe-rey-de-los-elfos-der-erlkonig.html',
      'https://editorial-alastor.blogspot.com/2016/08/johann-wolfgang-von-goethe-soledad.html',
    ],
    rels: [4],
  },
  {
    id: 17,
    name: 'Samuel Taylor',
    surname: 'Coleridge',
    url: 's-t-coleridge',
    life: '(Ottery, Inglaterra, 1772 - Londres, Inglaterra, 1834)',
    bio: 'Poeta inglés que, mediante la publicación junto a William Wordsworth del volumen <em>Lyrical Ballads</em>, dio inicio formal al Romanticismo en Gran Bretaña. Su principal aporte a dicha obra fue el de <em>La balada del viejo marinero</em>, que mostraba marcadas influencias del auge medievalista y arcaizante que se había suscitado en toda Europa tras la publicación de las <em>Reliques of Ancient English Poetry</em> de Thomas Percy, compendio de baladas antiguas entre las que había varias inclinadas a las temáticas de horror. Entre otros grandes aportes hechos por Coleridge a la poesía inglesa durante los años siguientes, en los que además se dedicó a la crítica y la teología, es posible mencionar obras como <em>Kubla Khan</em>, <em>Christabel</em>, <em>The Three Graves</em>, <em>Frost at Midnight</em> y <em>Dejection: An Ode</em>.',
    trads: ['La balada del viejo marinero'],
    links: [
      'https://editorial-alastor.blogspot.com/2016/08/samuel-taylor-coleridge-la-rima-del.html',
    ],
    rels: [4],
  },
  {
    id: 18,
    name: 'Alphonse de',
    surname: 'Lamartine',
    url: 'alphonse-lamartine',
    life: '(Mâcon, Francia, 1790 - París, Francia, 1869)',
    bio: 'Merced a la publicación en 1820 de su influyente colección de poemas <em>Meditaciones poéticas</em>, el político francés Alphonse de Lamartine se convirtió rápidamente en una de las principales figuras de los albores del Romanticismo francés. La obra, claramente influenciada por la poesía de François-René de Chateaubriand y por la intempestiva muerte de la pareja del autor, destacaba por su inclinación a la naturaleza, la soledad, el pesimismo, los escenarios melancólicos, las atmósferas luctuosas y los interrogantes metafísicos sobre la muerte. Además de otras tres colecciones de poesía lírica en línea con sus <em>Meditaciones</em>, Lamartine publicó también novelas, poemas épicos y numerosos volúmenes de historia.',
    trads: ['Meditaciones poéticas (selección)'],
    links: [
      'https://editorial-alastor.blogspot.com/2011/02/lamartine-meditaciones-poeticas.html',
    ],
    rels: [4],
  },
  {
    id: 19,
    name: 'Giacomo',
    surname: 'Leopardi',
    url: 'giacomo-leopardi',
    life: '(Recanati, Italia, 1798 - Nápoles, Italia, 1837)',
    bio: 'Poeta, filósofo y filólogo que, junto a Ugo Foscolo y Alessandro Manzoni, se convirtió rápidamente en una de las principales figuras del Romanticismo italiano. Su obra poética, reunida en los volúmenes <em>Canciones</em>, <em>Versos</em> y <em>Cantos</em>, se caracteriza por su poderoso pesimismo, su desesperada angustia y sus amargos reproches al mundo, herederos de la tradición de la oscura poesía <em>disperata</em> del medioevo italiano y del petrarquismo luctuoso de poetas como Isabella di Morra. Leopardi vertió también sus ideas filosóficas sobre la desesperación y la tragedia propia de la vida en sus <em>Opúsculos morales</em>, obra en prosa que, bajo la forma de diálogos, pone de manifiesto su profunda angustia existencial frente a la ciega inmensidad del universo.',
    trads: ['Cantos (selección)'],
    links: ['https://editorial-alastor.blogspot.com/2011/02/leopardi-cantos.html'],
    rels: [4],
  },
  {
    id: 20,
    name: 'Charles',
    surname: 'Baudelaire',
    url: 'charles-baudelaire',
    life: '(París, Francia, 1821 - París, Francia, 1867)',
    bio: 'Autor, con sus tan sublimes como satánicas y angustiantes <em>Flores del mal</em>, de una de las obras fundamentales en la evolución de la poesía moderna, Charles Baudelaire ha pasado a la historia como el arquetipo del «poeta maldito». De vida bohemia y disipada, en contradicción con la moral dominante en su tiempo, su trabajo, que abreva tanto de las fuentes más oscuras del Romanticismo como de las alucinadas obras de Edgar Allan Poe, sirvió de base para movimientos estéticos posrrománticos como el simbolismo y el decadentismo, además de haber participado en un incipiente parnasianismo y de ser mencionado entre las numerosas y dispares fuentes del surrealismo. También contribuyó notablemente, con <em>El spleen de París</em>, al establecimiento del poema en prosa como género.',
    trads: ['Las flores del mal (selección)'],
    links: [
      'https://editorial-alastor.blogspot.com/2011/02/baudelaire-las-flores-del-mal.html',
    ],
    rels: [4, 8],
  },
  {
    id: 21,
    name: 'Alfred de',
    surname: 'Musset',
    url: 'alfred-musset',
    life: '(París, Francia, 1810 - París, Francia, 1857)',
    bio: 'Autor de poesías, obras de teatro y novelas de inclinación fuertemente melodramática, Alfred de Musset fue tal vez el principal exponente del sentimentalismo romántico francés. Lo más rico de su producción sin duda se centra en los escritos que siguieron a la ruptura de su turbulenta relación amorosa con la novelista George Sand, entre los que pueden contarse su novela <em>La confesión de un hijo del siglo</em> y las emblemáticas poesías reunidas bajo el título de <em>Las noches</em>, en las que toda la sensibilidad emocional del Romanticismo alcanza tal vez su mayor pico de exageración y patetismo. En su obra teatral, de factura bastante más formal, destacan los dramas <em>Lorenzaccio</em>, <em>Los caprichos de Mariana</em>, <em>No se juega con el amor</em> y <em>Fantasio</em>.',
    trads: ['Las noches (selección)'],
    links: [
      'https://editorial-alastor.blogspot.com/2014/07/alfred-de-musset-las-noches.html',
    ],
    rels: [4],
  },
  {
    id: 22,
    name: 'Charles Marie',
    surname: 'Leconte de Lisle',
    url: 'leconte-lisle',
    life: '(Reunión, Francia, 1818 - Voisins, Francia, 1894)',
    bio: 'Principal figura del parnasianismo, movimiento poético de temáticas generalmente neoclásicas que, influenciado por la doctrina de Théophile Gautier sobre «el arte por el arte» y las teorías estéticas de Arthur Schopenhauer, surgió como una reacción tanto contra el excesivo sentimentalismo del Romanticismo francés como contra el activismo político y social de las corrientes realista y naturalista. La parte más importante de la poesía de Lectonte de Lisle se centra en sus colecciones <em>Poemas antiguos</em>, <em>Poemas bárbaros</em> y <em>Poemas trágicos</em>, aunque su producción fue mucho más copiosa e incluyó hasta dramas y tragedias líricas hechas a imitación del teatro griego antiguo, como en el caso de <em>Las erinias</em>.',
    trads: ['Poemas bárbaros (selección)'],
    links: [
      'https://editorial-alastor.blogspot.com/2016/08/leconte-de-lisle-poemas-barbaros.html',
    ],
    rels: [4],
  },
  {
    id: 23,
    name: 'Maurice',
    surname: 'Rollinat',
    url: 'maurice-rollinat',
    life: '(Indre, Francia, 1846 - París, Francia, 1903)',
    bio: 'Tras una temprana incursión en los terrenos de la literatura realista, Rollinat abrazó sin ambages la refinada estética del decadentismo y no tardó en volverse un arquetípico exponente del ideal de «poeta maldito». Lo más importante de su producción poética, que solía recitar por las noches en un cabaret acompañándose con un piano, se reúne en su colección <em>Las neurosis</em>, en la que se evidencia la insoslayable influencia de los momentos más oscuros y macabros de los relatos de horror de Poe y del simbolismo de la poesía de Baudelaire. La obra se divide en diferentes secciones que llevan títulos como «Las almas», «Las lujurias», «Los espectros» y «Las tinieblas». Algunas de sus siguientes producciones fueron <em>El abismo</em>, <em>Las apariciones</em> y <em>Prosas de un solitario</em>, si bien ya no volvió a alcanzar la diabólica intensidad de aquella primera colección.',
    trads: ['Las neurosis (selección)'],
    links: [
      'https://editorial-alastor.blogspot.com/2022/07/maurice-rollinat-las-neurosis-nevroses.html',
    ],
    rels: [4],
  },
  {
    id: 24,
    name: 'Thomas',
    surname: 'Chatterton',
    url: 'thomas-chatterton',
    life: '(Bristol, Inglaterra, 1752 - Holborn, Inglaterra, 1770)',
    bio: 'Poeta prerromántico inglés cuya trágica y prematura muerte lo volvería un icono entre los autores románticos. A imitación de James Macpherson con los poemas apócrifos de Ossian, Thomas Chatterton inició su carrera con una serie de obras de estilo arcaizante que atribuyó a un ficticio monje del siglo <span class="vers">XV</span> llamado Thomas Rowley. Tras esa primera incursión, escribió nuevos poemas ya bajo su propio nombre, hasta que, acuciado por las penurias económicas y la incomprensión del mundo a su arte, puso fin a su vida a los tempranos 17 años de edad. Tanto su figura como su breve obra resultarían de gran influencia para autores de la talla de William Wordsworth, <a href="s-t-coleridge">S. T. Coleridge</a>, <a href="john-keats">John Keats</a>, <a href="p-b-shelley">P. B. Shelley</a> y el francés Alfred de Vigny, quien incluso escribiría una obra de teatro inspirada en su trágica historia.',
    trads: ['Elegía'],
    links: [
      'https://editorial-alastor.blogspot.com/2023/07/thomas-chatterton-elegia.html',
    ],
    rels: [6],
  },
  {
    id: 25,
    name: 'Théodore Agrippa',
    surname: 'd’Aubigné',
    url: 'agrippa-daubigne',
    life: '(Pons, Francia, 1552 - Ginebra, Suiza, 1630)',
    bio: 'Militar y autor barroco del Renacimiento francés que destacó por lo oscuro de gran parte su poesía. Sus principales obras fueron <em>Les Tragiques</em>>, de 1616, largo poema épico en el que se incluye el fragmento «Ved al cielo morir en un doloroso esfuerzo», que pasó a circular desde entonces por numerosas antologías de poesía francesa, y el cancionero neopetrarquista <em>Le Printemps</em>>, de 1573, dedicado a su musa amorosa Diane Salviati y que se subdivide en tres libros: uno de sonetos, llamado <em>Hécatombe à Diane</em>, otro intitulado <em>Stances</em> que reúne estancias de poesía desesperada hechas a imitación del género de la <em>disperata</em> italiana, y uno de odas llamado simplemente <em>Odes</em>. Escribió también obras religiosas y una extensa historia universal.',
    trads: ['Estancias (selección)'],
    links: [
      'https://editorial-alastor.blogspot.com/2023/08/agrippa-aubigne-estancias-stances.html',
    ],
    rels: [6],
  },
  {
    id: 26,
    name: 'John',
    surname: 'Milton',
    url: 'john-milton',
    life: '(Londres, Inglaterra, 1608 - Londres, Inglaterra, 1674)',
    bio: 'Además de ser junto a William Shakespeare el más grande exponente de la poesía inglesa, John Milton fue sobre todo uno de los más eximios e inmortales poetas épicos de todos los tiempos junto a Homero, Dante y Virgilio. Su obra capital, el <em>Paradise Lost</em>, fue una influencia mayor en la literatura universal merced principalmente a la incomparable figura de Satán, tal vez una de las primeras figuras románticas de la historia. Otras obras destacables del autor fueron la elegía <em>Lycidas</em>, escrita a la muerte de su amigo Edward King, las mascaradas <em>Arcades</em> y <em>Comus</em>, la tragedia <em>Samson Agonistes</em>, el <em>Paradise Regained</em>, continuación de su obra maestra, y los notables poemas gemelos <em>L´Allegro</em> e <em>Il Penseroso</em>, el segundo de los cuales sería una enorme influencia para los <em>graveyard poets</em> (poetas de cementerio) del siguiente siglo.',
    trads: ['L’Allegro / Il Penseroso', 'El paraíso perdido (fragmentos)'],
    links: [
      'https://editorial-alastor.blogspot.com/2012/03/john-milton-lallegro-il-penseroso.html',
      'https://editorial-alastor.blogspot.com/2012/03/john-milton-el-paraiso-perdido.html',
    ],
    rels: [6],
  },
  {
    id: 27,
    name: 'Francesco',
    surname: 'Petrarca',
    url: 'francesco-petrarca',
    life: '(Arezzo, Italia, 1304 - Padua, Italia, 1374)',
    bio: 'Autor medieval italiano que, con los más de 300 sonetos y poemas reunidos en su <em>Canzoniere</em> y dedicados a su musa amorosa, Laura, se volvería el padre de un extenso linaje de poetas que, a lo largo de los siguientes siglos, se servirían de vehículos similares para transmitir toda la desesperada pasión y la asfixiante angustia de sus lamentos amorosos. La obra de Petrarca escrita en lengua vulgar se volvería también una gran influencia en la poesía cortesana renacentista por su gran refinamiento y su vital subjetividad, y hasta encontraría ecos en artistas del Romanticismo como el poeta Victor Hugo o el compositor Franz Liszt. También escribió, inspirado por Dante Alighieri, el largo poema narrativo <em>I trionfi</em>, así como diversos tratados filosóficos entre los que destacó su <em>De vita solitaria</em>.',
    trads: ['Solo y pensativo', 'Oh, pasos errantes'],
    links: [
      '../imgs/06-poesia-oscura-antigua.pdf',
      'https://editorial-alastor.blogspot.com/2023/07/petrarquismo-oscuro-italiano-y-frances.html',
    ],
    rels: [6],
  },
  /*{
    id: 28,
    name: '',
    surname: '',
    url: '',
    life: '()',
    bio: '',
    trads: [''],
    links: [''],
    rels: [4],
  },*/
  /* sxix2: gogol kittelsen lautreamont huysmans; irving maupassant hoffmann dunsany; hawthorne hearn wilde howard; */
]

export default AuthorData
