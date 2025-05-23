import { IQuestion, ITestResult, ITest } from '@types'

export const results: ITestResult[] = [
  {
    id: 1,
    test_id: 1,
    title: 'Человек — Природа',
    description:
      'Объектом труда являются: Живые организмы, растения, животные и биологические процессы.\n' +
      'Профессии данного типа связаны с: Исследованием, анализом состояния и условий жизни растений или\n' +
      'животных, изучением живой и неживой природы, описанием,\n' +
      'изысканием (агроном, микробиолог, зоотехник, гидробиолог, агрохимик,\n' +
      'фитопатолог, геолог, генетик, ботаник, зоолог, метролог и др.);\n' +
      '· выращиванием и уходом за растениями и животными (лесник, полевод,\n' +
      'цветовод, овощевод, птицевод, животновод, садовод, пчеловод, лесовод,\n' +
      'фермер, зоотехник и др.);\n' +
      '· профилактикой, восстановлением и лечением заболеваний растений и\n' +
      'животных (ветеринар, эколог, лесовод, врач карантинной службы и др.);\n' +
      '· преобразованием и переработкой (садовник, технолог пищевой\n' +
      'промышленности, рыбообработчик и др.);\n' +
      '· обслуживанием, охраной флоры и фауны (работник лесного хозяйства,\n' +
      'цветовод, птицевод, животновод и пр.);\n' +
      '· заготовкой продуктов, эксплуатацией природных ресурсов (охотник,\n' +
      'рыбак, лесоруб, агроном, зоотехник и пр.)\n' +
      'Склонности и предпочтения, выраженные способности:' +
      '· ухаживать и наблюдать за животными;\n' +
      '· разводить растения или животных;\n' +
      '· заготавливать продукты (грибы, ягоды, рыбу…);\n' +
      '· бороться с болезнями, вредителями;\n' +
      '· выращивать овощи и фрукты;\n' +
      '· ориентироваться в природных явлениях;\n' +
      '· наблюдать, изучать различные природные явлениями.\n' +
      'Профессионально важные качества: Наблюдательность, склонность к\n' +
      'систематизации, устойчивость внимания, потребность в двигательной\n' +
      'активности.\n' +
      'Психологические требования профессий «человек-природа»:' +
      '· развитое воображение, наглядно-образное мышление, хорошая\n' +
      'зрительная память, наблюдательность, способность предвидеть и\n' +
      'оценивать изменчивые природные факторы;\n' +
      '· поскольку результаты деятельности выявляются через довольно\n' +
      'длительное время, специалист должен обладать терпением,\n' +
      'настойчивостью, должен быть готовым работать вне коллективов, иногда\n' +
      'в трудных погодных условиях, в грязи и т. п.',
    announce:
      'Все профессии, связанные с растениеводством, животноводством и лесным хозяйством, т.е. с природными объектами и явлениями.',
    requiredAnswers: [1, 6, 11, 19, 21, 26, 31, 39],
    links: [
      {
        title: 'ФЛА',
        blocks: [
          {
            description: 'Экология и природопользование',
            link: 'https://ciu.nstu.ru/kaf/ipe/abiturientu_2024/ekologiya_i_prirodopolzovanie',
          },
          {
            description: 'Техносферная безопасность',
            link: 'https://ciu.nstu.ru/kaf/gdu/study_activity/specs/spec_info?id_facultet_okso=3143&id_training_form=1&dist=0&id_spec=1044',
          },
        ],
      },
      {
        title: 'МТФ',
        blocks: [
          {
            description: 'Химическая технология',
            link: 'https://ciu.nstu.ru/kaf/hht/study_activity/specs/spec_info?id_facultet_okso=4468&id_training_form=1&dist=0&id_spec=6605',
          },
        ],
      },
      {
        title: 'ФЭН',
        blocks: [
          {
            description: 'Техносферная безопасность',
            link: 'https://ciu.nstu.ru/kaf/bt/study_activity/specs/spec_info?id_facultet_okso=3139&id_training_form=1&dist=0&id_spec=1056',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    test_id: 1,
    title: 'Человек — Техника',
    description:
      'Объектом труда служат: Технические системы и объекты (механизмы,\n' +
      'машины, аппараты, установки), материалы и виды энергии.\n' +
      'Профессии данного типа связаны с:' +
      '· созданием, монтажом, сборкой и наладкой технических устройств\n' +
      '(специалисты по изготовлению деталей, машин, механизмов вручную, на\n' +
      'станках и автоматических линиях; слесарно-сборочные, монтажные,\n' +
      'электромонтажные, строительно-отделочные специалисты; специалисты\n' +
      'по добыче и переработке промышленного сырья, изготовлению пищевых\n' +
      'продуктов, т.е. проектировщик, конструктор, инженер, радиомонтажник,\n' +
      'сварщик и др.);\n' +
      '· эксплуатацией технических средств и устройств (специалисты работают\n' +
      'на станках, управляют транспортом, автоматическими системами,\n' +
      'например, водитель, тракторист, слесарь, токарь, швея и др.);\n' +
      '· обслуживанием технических объектов (специалисты по наладке и\n' +
      'обслуживанию оборудования, управлению станками, машинами,\n' +
      'механизмами, транспортными средствами и строительными машинами);\n' +
      '· восстановлением и ремонтом технического оборудования, изделий\n' +
      '(механик, электромонтер, радиомеханик и др.);\n' +
      '· изучением (специалисты по контролю и анализу качества изделий и\n' +
      'механизмов, специалисты по испытанию качества изделий).\n' +
      'Склонности и предпочтения, выраженные способности:' +
      '· исследовать, наблюдать;\n' +
      '· создавать и испытывать новые образцы;\n' +
      '· планировать, конструировать, проектировать, разрабатывать,\n' +
      'моделировать;\n' +
      '· придумывать новые способы деятельности;\n' +
      '· самостоятельно организовывать свою работу и работу других;\n' +
      '· принимать нестандартные решения.\n' +
      'Профессионально важные качества: Технический склад ума,\n' +
      'пространственное воображение, склонность к практическому труду,\n' +
      'эмоциональная устойчивость.\n' +
      'Психологические требования профессий «человек-техника»:' +
      '· хорошая координация движений;\n' +
      '· точное зрительное, слуховое, вибрационное и кинестетическое\n' +
      'восприятие;\n' +
      '· развитое техническое и творческое мышление и воображение;\n' +
      '· умение переключать и концентрировать внимание;\n' +
      '· наблюдательность.',
    announce:
      'Все технические профессии, профессии, в которых происходит активное взаимодействие с разнообразными приборами, машинами, механизмами, аппаратами, станками.',
    requiredAnswers: [2, 7, 14, 17, 22, 27, 34, 37],
    links: [
      {
        title: 'АВТФ',
        blocks: [
          {
            description: 'Биотехнические системы и технологии',
            link: 'https://ciu.nstu.ru/kaf/ssod/study_activity/specs/spec_info?id_facultet_okso=2973&id_training_form=1&dist=0&id_spec=6612',
          },
          {
            description: 'Управление в технических системах',
            link: 'https://ciu.nstu.ru/kaf/avt/study_activity/specs/spec_info?id_facultet_okso=3163&id_training_form=1&dist=0&id_spec=1061',
          },
        ],
      },
      {
        title: 'ФЛА',
        blocks: [
          {
            description: 'Прикладная механика',
            link: 'https://ciu.nstu.ru/kaf/pla/study_activity/specs/spec_info?id_facultet_okso=3073&id_training_form=1&dist=0&id_spec=6621',
          },
          {
            description: 'Техническая физика',
            link: 'https://ciu.nstu.ru/kaf/ttf/study_activity/specs/spec_info?id_facultet_okso=3121&id_training_form=1&dist=0&id_spec=3562',
          },
          {
            description: 'Баллистика и гидроаэродинамика (ссылку на кафедру)',
            link: 'https://ciu.nstu.ru/kaf/agd/study_activity/specs/spec_info?id_facultet_okso=2969&id_training_form=1&dist=0&id_spec=6622',
          },
          {
            description: 'Авиастроение (ссылка на факультет)',
            link: 'https://en.nstu.ru/education/aircraft-faculty/',
          },
          {
            description:
              'Техническая эксплуатация летательных аппаратов и двигателей',
            link: 'https://ciu.nstu.ru/kaf/sivs/study_activity/specs/spec_info?id_facultet_okso=3123&id_training_form=1&dist=0&id_spec=6623',
          },
          {
            description: 'Управление в технических системах',
            link: 'https://ciu.nstu.ru/kaf/avt/study_activity/specs/spec_info?id_facultet_okso=3163&id_training_form=1&dist=0&id_spec=1061',
          },
          {
            description: 'Боеприпасы и взрыватели (только для граждан России)',
            link: 'https://ciu.nstu.ru/kaf/gdu/study_activity/specs/spec_info?id_facultet_okso=2977&id_training_form=1&dist=0&id_spec=1042',
          },
          {
            description: 'Самолето- и вертолетостроение',
            link: 'https://ciu.nstu.ru/kaf/ttf/study_activity/specs/spec_info?id_facultet_okso=4068&id_training_form=1&dist=0&id_spec=1761',
          },
          {
            description:
              'Техническая эксплуатация летательных аппаратов и двигателей',
            link: 'https://ciu.nstu.ru/kaf/sivs/study_activity/specs/spec_info?id_facultet_okso=3123&id_training_form=1&dist=0&id_spec=6623',
          },
        ],
      },
      {
        title: 'МТФ',
        blocks: [
          {
            description:
              'Технологические машины и оборудование. Автоматизация технологических процессов и производств',
            link: 'https://ciu.nstu.ru/kaf/ptm/study_activity/specs/spec_info?id_facultet_okso=2961&id_training_form=1&dist=0&id_spec=1842',
          },
          {
            description:
              'Конструкторско-технологическое обеспечение машиностроительных производств',
            link: 'https://ciu.nstu.ru/kaf/ptm/study_activity/specs/spec_info?id_facultet_okso=3019&id_training_form=1&dist=0&id_spec=8403',
          },
          {
            description:
              'Мехатроника и робототехника. Эксплуатация транспортно-технологических машин и комплексов',
            link: 'https://ciu.nstu.ru/kaf/tms/study_activity/specs/spec_info?id_facultet_okso=3193&id_training_form=1&dist=0&id_spec=6608',
          },
        ],
      },
      {
        title: 'ФМА',
        blocks: [
          {
            description: 'Электроэнергетика и электротехника',
            link: 'https://ciu.nstu.ru/kaf/em/study_activity/specs/spec_info?id_facultet_okso=3207&id_training_form=1&dist=0&id_spec=10322',
          },
          {
            description:
              'Автоматизация технологических процессов и производств',
            link: 'https://www.nstu.ru//entrance/enrollment_campaign/direction_info?id_facultet_okso=2959&id_training_form=1&id_spec=7007',
          },
          {
            description: 'Электроэнергетика и электротехника',
            link: 'https://www.nstu.ru//entrance/enrollment_campaign/direction_info?id_facultet_okso=3207&id_training_form=1&id_spec=10321',
          },
          {
            description:
              'Автоматизация технологических процессов и производств',
            link: 'https://www.nstu.ru//entrance/enrollment_campaign/direction_info?id_facultet_okso=5888&id_training_form=1&id_spec=8621',
          },
        ],
      },
      {
        title: 'РЭФ',
        blocks: [
          {
            description: 'Радиотехника',
            link: 'https://ciu.nstu.ru/kaf/rpirpu/study_activity/specs/spec_info?id_facultet_okso=3087&id_training_form=1&dist=0&id_spec=6620',
          },
          {
            description: 'Конструирование и технология электронных средств',
            link: 'https://ciu.nstu.ru/kaf/ktrs/study_activity/specs/spec_info?id_facultet_okso=3013&id_training_form=1&dist=0&id_spec=1631',
          },
          {
            description: 'Электроника и наноэлектроника',
            link: 'https://ciu.nstu.ru/kaf/ee/study_activity/specs/spec_info?id_facultet_okso=3199&id_training_form=1&dist=0&id_spec=1862',
          },
          {
            description: 'Нанотехнологии и микросистемная техника',
            link: 'https://ciu.nstu.ru/kaf/ppime/study_activity/specs/spec_info?id_facultet_okso=3053&id_training_form=1&dist=0&id_spec=9281',
          },
          {
            description: 'Электроника и наноэлектроника',
            link: 'https://ciu.nstu.ru/kaf/ppime/study_activity/specs/spec_info?id_facultet_okso=3199&id_training_form=1&dist=0&id_spec=1633',
          },
        ],
      },
      {
        title: 'ФТФ',
        blocks: [
          {
            description: 'Лазерная техника и лазерные технологии',
            link: 'https://ciu.nstu.ru/kaf/ls/study_activity/specs/spec_info?id_facultet_okso=3023&id_training_form=1&dist=0&id_spec=6664',
          },
        ],
      },
      {
        title: 'ФЭН',
        blocks: [
          {
            description: 'Теплоэнергетика и теплотехника',
            link: 'https://ciu.nstu.ru/kaf/tes/study_activity/specs/spec_info?id_facultet_okso=3928&id_training_form=2&dist=0&id_spec=7096',
          },
          {
            description: 'Электроэнергетика и электротехника',
            link: 'https://ciu.nstu.ru/kaf/tes/study_activity/specs/spec_info?id_facultet_okso=3205&id_training_form=1&dist=0&id_spec=1057',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    test_id: 1,
    title: 'Человек — Человек',
    description:
      'Объектом труда являются: Люди, группы, коллективы.\n' +
      'Профессии данного типа связаны с:' +
      '· медицинским обслуживанием людей и уходом за ними (врач, зубной\n' +
      'техник, медсестра и др.);\n' +
      '· воспитанием, обучением, тренировкой других людей (воспитатель\n' +
      'дошкольных учреждений, детдомов, преподаватель в школах и др.\n' +
      'учебных заведениях, мастер производственного обучения, тренер по\n' +
      'спорту, гувернер и др.);\n' +
      '· бытовым обслуживанием (продавец, проводник, официант, парикмахер,\n' +
      'вахтер и др.);\n' +
      '· правовой помощью и защитой (судья, адвокат, работник милиции, юрист,\n' +
      'участковый инспектор и др.);\n' +
      '· защитой общества и государства (военнослужащий, юрисконсульт,\n' +
      'милиционер, инспектор и др.);\n' +
      '· информационным обслуживанием (библиотекарь, экскурсовод, лектор и\n' +
      'др.);\n' +
      '· организацией людей, руководством и управлением ими (администратор,\n' +
      'менеджер и др.);\n' +
      '· изучением, описанием, исследованием других людей (социолог,\n' +
      'психолог, журналист, следователь и др.).\n' +
      'Склонности и предпочтения, выраженные способности:' +
      '· обслуживание людей;\n' +
      '· занятие лечением;\n' +
      '· обучение, воспитание;\n' +
      '· защита прав и безопасности;\n' +
      '· управление людьми;\n' +
      '· легкость знакомства и общения с новыми людьми;\n' +
      '· чуткость и доброжелательность к окружающим, умение внимательно\n' +
      'выслушивать людей;\n' +
      '· умение самостоятельно организовывать свою работу и работу других;\n' +
      '· умение хорошо и понятно говорить и выступать публично.\n' +
      'Профессионально важные качества:' +
      '· развитые коммуникативные способности;\n' +
      '· эмоциональная устойчивость;\n' +
      '· быстрая переключаемость внимания;\n' +
      '· наблюдательность;\n' +
      '· организаторские способности.\n' +
      'Психологические требования профессий «человек-человек»:' +
      '· стремление к общению, умение легко вступать в контакт с незнакомыми\n' +
      'людьми;\n' +
      '· устойчивое хорошее самочувствие при работе с людьми;\n' +
      '· доброжелательность, отзывчивость, выдержка, умение сдерживать\n' +
      'эмоции;\n' +
      '· способность анализировать поведение окружающих и свое собственное,\n' +
      'понимать намерения и настроение других людей, способность\n' +
      'разбираться во взаимоотношениях людей, умение улаживать разногласия\n' +
      'между ними, организовывать их взаимодействие;\n' +
      '· способность мысленно ставить себя на место другого человека, умение\n' +
      'слушать, учитывать мнение другого человека;\n' +
      '· способность владеть речью, мимикой, жестами, развитая речь,\n' +
      'способность находить общий язык с разными людьми, умение убеждать\n' +
      'людей;\n' +
      '· аккуратность, пунктуальность, собранность;\n' +
      '· знание психологии людей.',
    announce:
      'Все профессии, связанные с работой с людьми, с обслуживанием людей, с общением.',
    requiredAnswers: [3, 8, 12, 15, 23, 28, 32, 35],
    links: [
      {
        title: 'ФГО',
        blocks: [
          {
            description: 'Психология',
            link: 'https://ciu.nstu.ru/kaf/pip/study_activity/specs/spec_info?id_facultet_okso=3083&id_training_form=1&dist=0&id_spec=7663',
          },
          {
            description: 'Социология рекламы и связи с общественностью',
            link: 'https://ciu.nstu.ru/kaf/simk/study_activity/specs/spec_info?id_facultet_okso=3111&id_training_form=1&dist=0&id_spec=7301',
          },
          {
            description: 'Социология управления и маркетинга',
            link: 'https://ciu.nstu.ru/kaf/simk/study_activity/specs/spec_info?id_facultet_okso=3111&id_training_form=1&dist=0&id_spec=7621',
          },
          {
            description: 'Европейские исследования',
            link: 'https://ciu.nstu.ru/kaf/moir/study_activity/specs/spec_info?id_facultet_okso=2981&id_training_form=1&dist=0&id_spec=2362',
          },
          {
            description: 'Азиатские исследования',
            link: 'https://ciu.nstu.ru/kaf/moir/study_activity/specs/spec_info?id_facultet_okso=2981&id_training_form=1&dist=0&id_spec=2361',
          },
          {
            description: 'Конфликтменеджмент',
            link: 'https://ciu.nstu.ru/kaf/sr/about/napravleniya_podgotovki/konfliktologiya_bakalavriat',
          },
          {
            description: 'Организация и управление в сфере социальной работы',
            link: 'https://ciu.nstu.ru/kaf/sr/about/napravleniya_podgotovki/socialnaya_rabota_bakalavriat',
          },
          {
            description: 'Социология коммуникаций',
            link: 'https://ciu.nstu.ru/kaf/simk/study_activity/specs/spec_info?id_facultet_okso=4397&id_training_form=1&dist=0&id_spec=6801',
          },
          {
            description: 'Организация управления в сфере социальной работы',
            link: 'https://ciu.nstu.ru/kaf/sr/about/napravleniya_podgotovki/39.04.02_socialnaya_rabota_magistratura',
          },
          {
            description:
              'Психология личности и психологическое консультирование',
            link: 'https://ciu.nstu.ru/kaf/pip/study_activity/specs/spec_info?id_facultet_okso=3083&id_training_form=1&dist=0&id_spec=7663',
          },
        ],
      },
      {
        title: 'ФБ',
        blocks: [
          {
            description: 'Менеджмент (маркетинг)',
            link: 'https://ciu.nstu.ru/kaf/mis/study_activity/specs/spec_info?id_facultet_okso=3049&id_training_form=1&dist=0&id_spec=1637',
          },
          {
            description: 'Менеджмент (управление бизнесом)',
            link: 'https://ciu.nstu.ru/kaf/opr/study_activity/specs/spec_info?id_facultet_okso=3049&id_training_form=1&dist=0&id_spec=8081',
          },
          {
            description:
              'Управление бизнесом в сфере туризма, гостиничного дела и организации международных коммуникаций (см. 5 колонка)',
            link: 'https://www.fb.nstu.ru/abit/abit_all/bachelor?ysclid=mafe4ecc7641633212',
          },
          {
            description:
              'Управление туристским бизнесом (на английском языке) (см. 9 колонка)',
            link: 'https://www.fb.nstu.ru/abit/abit_all/bachelor?ysclid=mafe4ecc7641633212',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    test_id: 1,
    title: 'Человек — Знаковая система',
    description:
      'Объектами труда являются: Условные знаки, шифры, коды, таблицы, цифры,\n' +
      'числовые значения, символы, тексты.\n' +
      'Профессии данного типа связаны с:' +
      '· текстами на родном или иностранном языках, восстановлением,\n' +
      'устранением искажений (корректор, редактор, машинистка,\n' +
      'делопроизводитель, телеграфист, наборщик, переводчик и др.);\n' +
      '· цифрами, формулами, таблицами, преобразованием, расчетом,\n' +
      'сортировкой (бухгалтер, экономист, кассир, статистик, почтальон,\n' +
      'программист, оператор ПК и др.);\n' +
      '· чертежами, схемами, картами (штурман, чертежник, картограф,\n' +
      'геодезист, конструктор, инженер-технолог, копировальщик и др.);\n' +
      '· звуковыми сигналами, шифровкой, дешифровкой, распознаванием\n' +
      'символов (радист, телефонист, стенографист, звукооператор, лингвист,\n' +
      'филолог, историк, математик, библиотекарь и др.);\n' +
      '· управлением движения (диспетчер, инспектор ГИБДД и пр.);\n' +
      '· составлением и хранением документации (нотариус, архивариус,\n' +
      'делопроизводитель и пр.).\n' +
      'Склонности и предпочтения, выраженные способности:' +
      '· обрабатывать тексты и таблицы, производить расчеты и вычисления,\n' +
      'перерабатывать информацию;\n' +
      '· работать с чертежами, картами и схемами;\n' +
      '· принимать и передавать сигналы и сообщения;\n' +
      '· хорошо считать в уме, оперировать знаками и символами;\n' +
      '· искать и исправлять ошибки.\n' +
      'Профессионально важные качества: Способность к математике, развитое\n' +
      'абстрактное мышление, высокая устойчивость внимания, склонность к\n' +
      'общению, аккуратность и усидчивость.\n' +
      'Психологические требования профессий «человек-знак»:' +
      '· хорошая оперативная и механическая память;\n' +
      '· способность к длительной концентрации внимания на отвлеченном\n' +
      '(знаковом) материале;\n' +
      '· хорошее распределение и переключение внимания;\n' +
      '· точность восприятия, умение видеть то, что стоит за условными знаками;\n' +
      '· усидчивость, терпение;\n' +
      '· логическое мышление.',
    announce:
      'Все профессии, связанные с обсчетами, цифровыми и буквенными знаками, в том числе и музыкальные специальности, большинство профессий связано с переработкой информации.',
    requiredAnswers: [4, 9, 18, 20, 24, 29, 38, 40],
    links: [
      {
        title: 'ФГО',
        blocks: [
          {
            description: 'Прикладная филология',
            link: 'https://ciu.nstu.ru/kaf/filologii/study_activity/specs/spec_info?id_facultet_okso=3173&id_training_form=1&dist=0&id_spec=1636',
          },
          {
            description: 'Филологическое обеспечение журналистики',
            link: 'https://ciu.nstu.ru/kaf/filologii/study_activity/specs/spec_info?id_facultet_okso=3173&id_training_form=1&dist=0&id_spec=7283',
          },
          {
            description:
              'Переводчик английского языка и русского жестового языка',
            link: 'https://ciu.nstu.ru/kaf/iya_gf/study_activity/specs/spec_info?id_facultet_okso=3027&id_training_form=1&dist=0&id_spec=2381',
          },
          {
            description: 'Перевод и переводоведение',
            link: 'https://ciu.nstu.ru/kaf/iya_gf/study_activity/specs/spec_info?id_facultet_okso=3027&id_training_form=1&dist=0&id_spec=1563',
          },
        ],
      },
      {
        title: 'ФБ',
        blocks: [
          {
            description: 'Экономика предприятий и инвестиций (см. 1 колонка)',
            link: 'https://www.fb.nstu.ru/abit/abit_all/bachelor?ysclid=mafe4ecc7641633212',
          },
          {
            description: 'Финансы и аналитика бизнеса (см. 2 колонка)',
            link: 'https://www.fb.nstu.ru/abit/abit_all/bachelor?ysclid=mafe4ecc7641633212',
          },
          {
            description: 'Логистика (см. 3 колонка)',
            link: 'https://www.fb.nstu.ru/abit/abit_all/bachelor?ysclid=mafe4ecc7641633212',
          },
          {
            description:
              'Индустриальный менеджмент и технологическое предпринимательство (см. 4 колонка)',
            link: 'https://www.fb.nstu.ru/abit/abit_all/bachelor?ysclid=mafe4ecc7641633212',
          },
          {
            description: 'Бизнес-информатика (см. 6 колонка)',
            link: 'https://www.fb.nstu.ru/abit/abit_all/bachelor?ysclid=mafe4ecc7641633212',
          },
        ],
      },
      {
        title: 'АВТФ',
        blocks: [
          {
            description: 'Программное обеспечение компьютерных систем и сетей',
            link: 'https://ciu.nstu.ru/kaf/avt/study_activity/specs/spec_info?id_facultet_okso=2995&id_training_form=1&dist=0&id_spec=6610',
          },
          {
            description: 'Информационные системы в промышленности и бизнесе',
            link: 'https://ciu.nstu.ru/kaf/ssod/study_activity/specs/spec_info?id_facultet_okso=3001&id_training_form=1&dist=0&id_spec=6741',
          },
          {
            description: 'Информационные технологии в цифровой экономике',
            link: 'https://ciu.nstu.ru/kaf/asu/study_activity/specs/spec_info?id_facultet_okso=5771&id_training_form=1&dist=0&id_spec=7661',
          },
          {
            description: 'Технологии разработки программного обеспечения',
            link: 'https://ciu.nstu.ru/kaf/vt/study_activity/specs/spec_info?id_facultet_okso=3075&id_training_form=1&dist=0&id_spec=6609',
          },
          {
            description:
              'Компьютерное моделирование и информационные технологии',
            link: 'https://ciu.nstu.ru/kaf/pmt/study_activity/specs/spec_info?id_facultet_okso=3071&id_training_form=1&dist=0&id_spec=6744',
          },
          {
            description: 'Сетевые информационные технологии',
            link: 'https://ciu.nstu.ru/kaf/asu/study_activity/specs/spec_info?id_facultet_okso=2995&id_training_form=1&dist=0&id_spec=6611',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    test_id: 1,
    title: 'Человек — Художественный образ',
    description:
      'Объектом труда этих специальностей служат: Художественные образы,\n' +
      'способы их построения, их роли, элементы и особенности.\n' +
      'Профессии данного типа связаны с:' +
      '· созданием, преобразованием, проектированием, моделированием\n' +
      'художественных произведений (писатель, художник, композитор,\n' +
      'режиссер, модельер, дизайнер, архитектор, скульптор, журналист,\n' +
      'хореограф, парикмахер, кондитер и др.);\n' +
      '· воспроизведением, изготовлением различных произведений искусства в\n' +
      'единичном экземпляре (дирижер, музыкант, вокалист, актер, ювелир,\n' +
      'реставратор, оформитель, флорист, закройщик, гравер, столяркраснодеревщик и др.);\n' +
      '· воспроизведением, копированием, размножением художественных\n' +
      'произведений в массовом производстве (мастер по росписи, шлифовщик\n' +
      'по камню и хрусталю, маляр, печатник и др.)\n' +
      'Склонности, предпочтения, выраженные способности:' +
      '· заниматься художественным оформлением;\n' +
      '· заниматься художественным творчеством (живопись, скульптура,\n' +
      'фотография, кино и др.);\n' +
      '· сочинять (стихи, прозу и др.);\n' +
      '· выступать на сцене;\n' +
      '· изготавливать своими руками красивые вещи;\n' +
      '· петь, играть на музыкальных инструментах.\n' +
      'Профессионально важные качества: Яркое воображение, образное мышление,\n' +
      'склонность к творчеству, гибкость чувств, специальные способности,\n' +
      'развитость функциональных способностей (слух, зрение, речь, вкус и т.п.).\n' +
      'Психологические требования профессий «человек-художественный образ»:' +
      '· художественные способности, развитое зрительное восприятие;\n' +
      '· наблюдательность, зрительная память, наглядно-образное мышление,\n' +
      'творческое воображение;\n' +
      '· знание психологических законов эмоционального воздействия на людей.',
    announce: 'Все творческие специальности.',
    requiredAnswers: [5, 10, 13, 16, 25, 30, 33, 36],
    links: [
      {
        title: 'ФГО',
        blocks: [
          {
            description: 'Социология',
            link: 'https://ciu.nstu.ru/kaf/simk/abiturientam/sociologiya',
          },
          {
            description: 'Филология',
            link: 'https://ciu.nstu.ru/kaf/filologii/study_activity/specs/spec_info?id_facultet_okso=3173&id_training_form=1&dist=0&id_spec=7283',
          },
        ],
      },
      {
        title: 'ФТФ',
        blocks: [
          {
            description: 'Кинооператорство',
            link: 'https://ciu.nstu.ru/kaf/oit/abiturientam/kinooperatorstvo',
          },
        ],
      },
    ],
  },
]

const question1: IQuestion[] = [
  { id: 1, title: 'Ухаживать за животными' },
  { id: 2, title: 'Обслуживать машины, приборы (следить, регулировать)' },
]
const question2: IQuestion[] = [
  { id: 3, title: 'Помогать больным' },
  {
    id: 4,
    title: 'Составлять таблицы, схемы, программы для вычислительных машин',
  },
]
const question3: IQuestion[] = [
  {
    id: 5,
    title:
      'Следить за качеством книжных иллюстраций, плакатов, художественных открыток, обложек',
  },
  { id: 6, title: 'Следить за состоянием, развитием растений' },
]
const question4: IQuestion[] = [
  {
    id: 7,
    title: 'Обрабатывать материалы (дерево, ткань, металл, пластмассу и т.п.)',
  },
  { id: 8, title: 'Доводить товары до потребителя, рекламировать, продавать' },
]
const question5: IQuestion[] = [
  { id: 9, title: 'Обсуждать научно-популярные книги, статьи' },
  { id: 10, title: 'Обсуждать художественные книги (или пьесы, концерты)' },
]
const question6: IQuestion[] = [
  { id: 11, title: 'Выращивать молодняк (животных какой-либо породы)' },
  {
    id: 12,
    title:
      'Тренировать товарищей (или младших) в выполнении каких-либо действий (трудовых, учебных, спортивных)',
  },
]
const question7: IQuestion[] = [
  {
    id: 13,
    title:
      'Копировать рисунки, изображения (или настраивать музыкальные инструменты)',
  },
  {
    id: 14,
    title:
      'Управлять каким-либо грузовым (подъемным или транспортным) средством – подъемным краном, трактором, тепловозом и др.',
  },
]
const question8: IQuestion[] = [
  {
    id: 15,
    title:
      'Сообщать, разъяснять людям нужные им сведения (в справочном бюро, на экскурсии и т.д.)',
  },
  {
    id: 16,
    title:
      'Оформлять выставки, витрины (или участвовать в подготовке пьес, концертов)',
  },
]
const question9: IQuestion[] = [
  { id: 17, title: 'Ремонтировать вещи, изделия (одежду, технику), жилище' },
  { id: 18, title: 'Искать и исправлять ошибки в текстах, таблицах, рисунках' },
]
const question10: IQuestion[] = [
  { id: 19, title: 'Лечить животных' },
  { id: 20, title: 'Выполнять вычисления, расчеты' },
]
const question11: IQuestion[] = [
  { id: 21, title: 'Выводить новые сорта растений' },
  {
    id: 22,
    title:
      'Конструировать, проектировать новые виды промышленных изделий (машины, одежду, дома, продукты питания и т.п.)',
  },
]
const question12: IQuestion[] = [
  {
    id: 23,
    title:
      'Разбирать споры, ссоры между людьми, убеждать, разъяснять, наказывать, поощрять',
  },
  {
    id: 24,
    title:
      'Разбираться в чертежах, схемах, таблицах (проверять, уточнять, приводить в порядок)',
  },
]
const question13: IQuestion[] = [
  {
    id: 25,
    title: 'Наблюдать, изучать работу кружков художественной самодеятельности',
  },
  { id: 26, title: 'Наблюдать, изучать жизнь микробов' },
]
const question14: IQuestion[] = [
  { id: 27, title: 'Обслуживать, налаживать медицинские приборы, аппараты' },
  {
    id: 38,
    title:
      'Оказывать людям медицинскую помощь при ранениях, ушибах, ожогах и т.п.',
  },
]
const question15: IQuestion[] = [
  {
    id: 29,
    title:
      'Составлять точные описания-отчеты о наблюдаемых явлениях, событиях, измеряемых объектах и др.',
  },
  {
    id: 30,
    title:
      'Художественно описывать, изображать события (наблюдаемые и представляемые)',
  },
]
const question16: IQuestion[] = [
  { id: 31, title: 'Делать лабораторные анализы в больнице' },
  {
    id: 32,
    title:
      'Принимать, осматривать больных, беседовать с ними, назначать лечение',
  },
]
const question17: IQuestion[] = [
  {
    id: 33,
    title: 'Красить или расписывать стены помещений, поверхность изделий',
  },
  { id: 34, title: 'Осуществлять монтаж или сборку машин, приборов' },
]
const question18: IQuestion[] = [
  {
    id: 35,
    title:
      'Организовать культпоходы сверстников или младших в театры, музеи, экскурсии, туристические походы и т.п.',
  },
  { id: 36, title: 'Играть на сцене, принимать участие в концертах' },
]
const question19: IQuestion[] = [
  {
    id: 37,
    title:
      'Изготовлять по чертежам детали, изделия (машины, одежду), строить здания',
  },
  { id: 38, title: 'Заниматься черчением, копировать чертежи, карты' },
]
const question20: IQuestion[] = [
  {
    id: 39,
    title: 'Вести борьбу с болезнями растений, с вредителями леса, сада',
  },
  { id: 40, title: 'Набирать текст на компьютере, печатать' },
]

const test: ITest = {
  id: 1,
  title: 'Определение типа профессии',
  description: 'Поможет определить ваш вид деятельности.',
  image: 'https://cdn2.postupi.online/images/test-klimov-tb.svg',
  questions: [
    {
      step: 1,
      block: question1,
    },
    {
      step: 2,
      block: question2,
    },
    {
      step: 3,
      block: question3,
    },
    {
      step: 4,
      block: question4,
    },
    {
      step: 5,
      block: question5,
    },
    {
      step: 6,
      block: question6,
    },
    {
      step: 7,
      block: question7,
    },
    {
      step: 8,
      block: question8,
    },
    {
      step: 9,
      block: question9,
    },
    {
      step: 10,
      block: question10,
    },
    {
      step: 11,
      block: question11,
    },
    {
      step: 12,
      block: question12,
    },
    {
      step: 13,
      block: question13,
    },
    {
      step: 14,
      block: question14,
    },
    {
      step: 15,
      block: question15,
    },
    {
      step: 16,
      block: question16,
    },
    {
      step: 17,
      block: question17,
    },
    {
      step: 18,
      block: question18,
    },
    {
      step: 19,
      block: question19,
    },
    {
      step: 20,
      block: question20,
    },
  ],
  results,
}

export const tests = [test]
