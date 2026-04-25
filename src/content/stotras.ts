import type { Stotra } from "./types";

/**
 * Sacred texts — sourced from public domain devotional material.
 * To add a new stotra: copy the structure below and append to the array.
 * To add many at once: drop JSON files and import them here.
 */
export const stotras: Stotra[] = [
  {
    id: "ganesh-aarti",
    title_dev: "श्री गणेश आरती — सुखकर्ता दुखहर्ता",
    title_en: "Shree Ganesh Aarti — Sukhakarta Dukhaharta",
    deity: "Ganesh",
    category: "aarti",
    description: "The beloved aarti of Lord Ganesha, remover of obstacles.",
    verses: [
      {
        dev: "सुखकर्ता दुखहर्ता वार्ता विघ्नाची ।\nनुरवी पुरवी प्रेम कृपा जयाची ॥\nसर्वांगी सुंदर उटी शेंदुराची ।\nकंठी झळके माळ मुक्ताफळांची ॥",
        en: "Sukhakarta Dukhaharta, vaarta vighnaachi,\nNurvi purvi prem krupa jayaachi.\nSarvaangi sundar uti shenduraachi,\nKanthi zhalake maal muktaaphalaanchi.",
      },
      {
        dev: "जय देव जय देव जय मंगलमूर्ती ।\nदर्शनमात्रे मन कामना पुरती ॥",
        en: "Jai Dev Jai Dev Jai Mangalmurti,\nDarshanmaatre mana kaamana purti.",
      },
      {
        dev: "रत्नखचित फरा तुज गौरीकुमरा ।\nचंदनाची उटी कुंकुमकेशरा ॥\nहिरेजडित मुकुट शोभतो बरा ।\nरुणझुणती नूपुरे चरणी घागरिया ॥",
        en: "Ratnakhachit phara tuj Gaurikumara,\nChandanaachi uti kunkumkesharaa.\nHirejadit mukut shobhato baraa,\nRunjhunti nupure charani ghaagariyaa.",
      },
      {
        dev: "लंबोदर पीतांबर फणिवरबंधना ।\nसरळ सोंड वक्रतुंड त्रिनयना ॥\nदास रामाचा वाट पाहे सदना ।\nसंकटी पावावे निर्वाणी रक्षावे सुरवरवंदना ॥",
        en: "Lambodar Pitambar phanivar-bandhana,\nSaral sond vakratund trinayana.\nDaas Raamaachaa vaat paahe sadana,\nSankati paavaave nirvaani rakshaave survar-vandanaa.",
      },
    ],
  },
  {
    id: "gayatri-mantra",
    title_dev: "गायत्री मंत्र",
    title_en: "Gayatri Mantra",
    deity: "Savitr (Sun)",
    category: "mantra",
    description: "The most revered mantra from the Rigveda, for wisdom and clarity.",
    verses: [
      {
        dev: "ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं ।\nभर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥",
        en: "Om Bhur Bhuvah Svaha,\nTat Savitur Varenyam,\nBhargo Devasya Dheemahi,\nDhiyo Yo Nah Prachodayat.",
      },
    ],
  },
  {
    id: "mahamrityunjaya",
    title_dev: "महामृत्युंजय मंत्र",
    title_en: "Mahamrityunjaya Mantra",
    deity: "Shiva",
    category: "mantra",
    description: "The great death-conquering mantra to Lord Shiva, for healing and protection.",
    verses: [
      {
        dev: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय माऽमृतात् ॥",
        en: "Om Tryambakam Yajaamahe Sugandhim Pushti-Vardhanam,\nUrvaarukamiva Bandhanaan Mrityor-Mukshiya Maa-Amritaat.",
      },
    ],
  },
  {
    id: "om-jai-jagdish",
    title_dev: "ॐ जय जगदीश हरे",
    title_en: "Om Jai Jagdish Hare",
    deity: "Vishnu",
    category: "aarti",
    description: "The universal aarti recited in homes and temples across India.",
    verses: [
      {
        dev: "ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे ।\nभक्त जनों के संकट, दास जनों के संकट,\nक्षण में दूर करे ॥ ॐ जय जगदीश हरे ॥",
        en: "Om Jai Jagdish Hare, Swami Jai Jagdish Hare,\nBhakt-janon ke sankat, daas-janon ke sankat,\nKshan men door kare. Om Jai Jagdish Hare.",
      },
      {
        dev: "जो ध्यावे फल पावे, दुख बिनसे मन का ।\nस्वामी दुख बिनसे मन का ।\nसुख सम्पत्ति घर आवे, सुख सम्पत्ति घर आवे,\nकष्ट मिटे तन का ॥ ॐ जय जगदीश हरे ॥",
        en: "Jo dhyaave phal paave, dukh binase man kaa,\nSwami dukh binase man kaa.\nSukh sampatti ghar aave, sukh sampatti ghar aave,\nKasht mite tan kaa. Om Jai Jagdish Hare.",
      },
      {
        dev: "मात-पिता तुम मेरे, शरण गहूँ मैं किसकी ।\nस्वामी शरण गहूँ मैं किसकी ।\nतुम बिन और न दूजा, तुम बिन और न दूजा,\nआस करूँ मैं जिसकी ॥ ॐ जय जगदीश हरे ॥",
        en: "Maat-pita tum mere, sharan gahoon main kiski,\nSwami sharan gahoon main kiski.\nTum bin aur na doojaa, tum bin aur na doojaa,\nAas karoon main jiski. Om Jai Jagdish Hare.",
      },
      {
        dev: "तुम पूरण परमात्मा, तुम अंतर्यामी ।\nस्वामी तुम अंतर्यामी ।\nपारब्रह्म परमेश्वर, पारब्रह्म परमेश्वर,\nतुम सबके स्वामी ॥ ॐ जय जगदीश हरे ॥",
        en: "Tum pooran Parmaatma, tum antaryaami,\nSwami tum antaryaami.\nPaarbrahm Parameshwar, paarbrahm Parameshwar,\nTum sab ke swaami. Om Jai Jagdish Hare.",
      },
    ],
  },
  {
    id: "hanuman-chalisa",
    title_dev: "श्री हनुमान चालीसा",
    title_en: "Shri Hanuman Chalisa",
    deity: "Hanuman",
    category: "stotra",
    description: "Forty verses in praise of Lord Hanuman, composed by Goswami Tulsidas.",
    verses: [
      {
        dev: "श्रीगुरु चरन सरोज रज, निज मन मुकुरु सुधारि ।\nबरनउँ रघुबर बिमल जसु, जो दायकु फल चारि ॥\nबुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार ।\nबल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार ॥",
        en: "Shri-Guru charan saroj-raj, nij man mukuru sudhaari,\nBaranau Raghubar bimal jasu, jo daayaku phal chaari.\nBuddhi-heen tanu jaanike, sumiraun Pavan-Kumaar,\nBal buddhi vidyaa dehu mohi, harahu kales bikaar.",
      },
      {
        dev: "जय हनुमान ज्ञान गुन सागर ।\nजय कपीस तिहुँ लोक उजागर ॥\nराम दूत अतुलित बल धामा ।\nअंजनि-पुत्र पवनसुत नामा ॥",
        en: "Jai Hanumaan gyaan-gun saagar,\nJai Kapis tihun lok ujaagar.\nRaam-doot atulit bal-dhaamaa,\nAnjani-putra Pavan-sut naamaa.",
      },
      {
        dev: "महाबीर बिक्रम बजरंगी ।\nकुमति निवार सुमति के संगी ॥\nकंचन बरन बिराज सुबेसा ।\nकानन कुंडल कुंचित केसा ॥",
        en: "Mahaabeer bikram Bajrangi,\nKumati nivaar sumati ke sangi.\nKanchan baran biraaj subesaa,\nKaanan kundal kunchit kesaa.",
      },
      {
        dev: "हाथ बज्र औ ध्वजा बिराजै ।\nकाँधे मूँज जनेऊ साजै ॥\nशंकर सुवन केसरीनंदन ।\nतेज प्रताप महा जग बंदन ॥",
        en: "Haath bajra au dhwajaa biraajai,\nKaandhe moonj janeu saajai.\nShankar suvan Kesari-nandan,\nTej prataap mahaa jag bandan.",
      },
      {
        dev: "विद्यावान गुनी अति चातुर ।\nराम काज करिबे को आतुर ॥\nप्रभु चरित्र सुनिबे को रसिया ।\nराम लखन सीता मन बसिया ॥",
        en: "Vidyaavaan guni ati chaatur,\nRaam kaaj karibe ko aatur.\nPrabhu charitra sunibe ko rasiyaa,\nRaam Lakhan Seetaa man basiyaa.",
      },
      {
        dev: "सूक्ष्म रूप धरि सियहिं दिखावा ।\nबिकट रूप धरि लंक जरावा ॥\nभीम रूप धरि असुर सँहारे ।\nरामचन्द्र के काज सँवारे ॥",
        en: "Sookshma roop dhari Siyahin dikhaavaa,\nBikat roop dhari Lank jaraavaa.\nBheem roop dhari asur sanhaare,\nRaam-Chandra ke kaaj sanvaare.",
      },
      {
        dev: "जय जय जय हनुमान गोसाईं ।\nकृपा करहु गुरुदेव की नाईं ॥\nजो सत बार पाठ कर कोई ।\nछूटहि बंदि महा सुख होई ॥",
        en: "Jai Jai Jai Hanumaan gosaain,\nKripaa karahu Gurudev ki naain.\nJo sat baar paath kar koi,\nChhootahi bandi mahaa sukh hoi.",
      },
      {
        dev: "पवनतनय संकट हरन, मंगल मूरति रूप ।\nराम लखन सीता सहित, हृदय बसहु सुर भूप ॥",
        en: "Pavan-tanay sankat haran, mangal moorati roop,\nRaam Lakhan Seetaa sahit, hriday basahu sur bhoop.",
      },
    ],
  },
  {
    id: "shiv-tandav",
    title_dev: "शिव ताण्डव स्तोत्रम् (अंश)",
    title_en: "Shiva Tandava Stotram (Excerpt)",
    deity: "Shiva",
    category: "stotra",
    description: "Composed by Ravana — a thunderous hymn to the cosmic dancer.",
    verses: [
      {
        dev: "जटाटवीगलज्जलप्रवाहपावितस्थले\nगलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम् ।\nडमड्डमड्डमड्डमन्निनादवड्डमर्वयं\nचकार चण्डताण्डवं तनोतु नः शिवः शिवम् ॥",
        en: "Jataa-tavi-galaj-jala-pravaaha-paavita-sthale\nGale-avalambya lambitaam bhujanga-tunga-maalikaam.\nDamad damad damad daman-ninaada-vad damarvayam\nChakaara chanda-taandavam tanotu nah Shivah Shivam.",
      },
      {
        dev: "जटाकटाहसम्भ्रमभ्रमन्निलिम्पनिर्झरी-\nविलोलवीचिवल्लरीविराजमानमूर्धनि ।\nधगद्धगद्धगज्ज्वलल्ललाटपट्टपावके\nकिशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम ॥",
        en: "Jataa-kataaha-sambhrama-bhraman-nilimpa-nirjhari-\nVilola-veechi-vallari-viraajamaana-moordhani.\nDhagad dhagad dhagaj-jvalal-lalaata-patta-paavake\nKishora-chandra-shekhare ratih pratikshanam mama.",
      },
    ],
  },
];

export const mantras = [
  { id: "om", text_dev: "ॐ", text_en: "Om" },
  { id: "om-namah-shivaya", text_dev: "ॐ नमः शिवाय", text_en: "Om Namah Shivaya" },
  { id: "ram", text_dev: "श्री राम जय राम जय जय राम", text_en: "Shri Raam Jai Raam Jai Jai Raam" },
  { id: "krishna", text_dev: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे", text_en: "Hare Krishna Hare Krishna" },
  { id: "ganesh", text_dev: "ॐ गं गणपतये नमः", text_en: "Om Gam Ganapataye Namah" },
  { id: "gayatri", text_dev: "ॐ भूर्भुवः स्वः...", text_en: "Gayatri Mantra" },
];
