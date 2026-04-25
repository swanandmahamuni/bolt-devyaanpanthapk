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
  {
    id: "mahalakshmi-stotra",
    title_dev: "महालक्ष्मी स्तोत्र",
    title_en: "Mahalakshmi Stotra",
    deity: "Mahalakshmi",
    category: "stotra",
    description: "Agastya-rachit stotra to Goddess Mahalakshmi for prosperity and grace.",
    verses: [
      {
        dev: "पद्मो पद्मपलाशाक्षि जय त्वं श्रीपतिप्रिये ।\nजयमातर्महालक्ष्म संसाराण्वतारिणि ॥१॥",
        en: "Padmo padma-palaashaakshi jaya tvam Shripati-priye,\nJaya-maatar Mahaalakshmi samsaara-arnava-taarini. (1)",
      },
      {
        dev: "महालक्ष्म नमस्तुभ्यं नमस्तुभ्यं सुरेश्वरि ।\nहरिप्रिये नमस्तुभ्यं नमस्तुभ्यं दयानिधे ॥२॥",
        en: "Mahaalakshmi namastubhyam namastubhyam Sureshvari,\nHari-priye namastubhyam namastubhyam Dayaa-nidhe. (2)",
      },
      {
        dev: "पद्मालये नमस्तुभ्यं नमस्तुभ्यं च सर्वदे ।\nसर्वभूताहितार्थाय वसुवृष्टिं सदा कुरु ॥३॥",
        en: "Padmaalaye namastubhyam namastubhyam cha Sarvade,\nSarva-bhootaa-hitaarthaaya vasu-vrishtim sadaa kuru. (3)",
      },
      {
        dev: "जगन्मातर्नमस्तुभ्यं नमस्तुभ्यं दयानिधे ।\nदयावति नमस्तुभ्यं विश्वेश्वरि नमोऽस्तुते ॥४॥",
        en: "Jagan-maatar namastubhyam namastubhyam Dayaa-nidhe,\nDayaa-vati namastubhyam Vishveshvari namo'stute. (4)",
      },
      {
        dev: "नमः क्षीराण्वसुते नमस्त्रैलोक्यधारिणि ।\nवसुवृष्टे नमस्तुभ्यं रक्ष मां शरणागतम् ॥५॥",
        en: "Namah Ksheeraarnava-sute namas-trailokya-dhaarini,\nVasu-vrishte namastubhyam raksha maam sharanaagatam. (5)",
      },
      {
        dev: "रक्ष त्वं देवदेवेशि देवदेवस्य वल्लभे ।\nदारिद्र्यात् त्राहि मां लक्ष्म कृपां कुरु ममोपरि ॥६॥",
        en: "Raksha tvam Deva-deveshi Deva-devasya vallabhe,\nDaaridryaat traahi maam Lakshmi krupaam kuru mamopari. (6)",
      },
      {
        dev: "नमस्त्रैलोक्यजननि नमस्त्रैलोक्यपावनि ।\nब्रह्मादयो नमन्ति त्वां जगदानन्ददायिनि ॥७॥",
        en: "Namas-trailokya-janani namas-trailokya-paavani,\nBrahmaadayo namanti tvaam jagad-aananda-daayini. (7)",
      },
      {
        dev: "विष्णुप्रिये नमस्तुभ्यं नमस्तुभ्यं जगद्धिते ।\nआर्तिहन्त्रि नमस्तुभ्यं समृद्धिं कुरु मे सदा ॥८॥",
        en: "Vishnu-priye namastubhyam namastubhyam Jagad-dhite,\nAarti-hantri namastubhyam samruddhim kuru me sadaa. (8)",
      },
      {
        dev: "अब्जवासे नमस्तुभ्यं चपलायै नमो नमः ।\nचञ्चलायै नमस्तुभ्यं ललितायै नमो नमः ॥९॥",
        en: "Abja-vaase namastubhyam Chapalaayai namo namah,\nChanchalaayai namastubhyam Lalitaayai namo namah. (9)",
      },
      {
        dev: "नमः प्रद्युम्नजननि मातस्तुभ्यं नमो नमः ।\nपरिपालय भो मातर्मां तुभ्यं शरणागतम् ॥१०॥",
        en: "Namah Pradyumna-janani maatas-tubhyam namo namah,\nParipaalaya bho maatar maam tubhyam sharanaagatam. (10)",
      },
      {
        dev: "त्वमेव जननी लक्ष्म पिता लक्ष्म त्वमेव च ।\nभ्राता त्वं च सखा लक्ष्म विद्या लक्ष्म त्वमेव च ॥१९॥",
        en: "Tvameva janani Lakshmi pitaa Lakshmi tvameva cha,\nBhraataa tvam cha sakhaa Lakshmi vidyaa Lakshmi tvameva cha. (19)",
      },
      {
        dev: "त्राहि त्राहि महालक्ष्म त्राहि त्राहि सुरेश्वरि ।\nत्राहि त्राहि जगन्मातर्दारिद्र्यात् त्राहि वेगतः ॥२०॥",
        en: "Traahi traahi Mahaalakshmi traahi traahi Sureshvari,\nTraahi traahi Jagan-maatar daaridryaat traahi vegatah. (20)",
      },
      {
        dev: "नमस्तुभ्यं जगद्धात्रि नमस्तुभ्यं नमो नमः ।\nधर्माधारे नमस्तुभ्यं नमः सम्पत्तिदायिनि ॥२१॥",
        en: "Namastubhyam Jagad-dhaatri namastubhyam namo namah,\nDharmaa-dhaare namastubhyam namah Sampatti-daayini. (21)",
      },
      {
        dev: "यः पठेत् प्रातरुत्थाय श्रद्धाभक्तिसमन्वितः ।\nगृहे तस्य सदा स्थास्ये नित्यं श्रीपतिना सह ॥२७॥",
        en: "Yah pathet praatar-utthaaya shraddhaa-bhakti-samanvitah,\nGruhe tasya sadaa sthaasye nityam Shripatinaa saha. (27)",
      },
    ],
  },
  {
    id: "vardhman-vrataadhiraj",
    title_dev: "श्रीवर्धमान व्रताधिराज",
    title_en: "Shri Vardhman Vrataadhiraj — Vidhi",
    deity: "Shri Aniruddha",
    category: "pujan-vidhi",
    description: "Thirty-day vrata of progressive (vardhmaan) pathan — full nine-anga vidhi.",
    verses: [
      {
        dev: "१) व्रतकाल व पठण (अंग पहिले):\n• मार्गशीर्ष महिन्याच्या पौर्णिमेस या व्रताचा आरंभ करावा.\n• मार्गशीर्ष पौर्णिमा हा पहिला दिवस धरून एकंदर तीस दिवस हा व्रताचा काल आहे.\n• बरोबर तिसाव्या दिवशी व्रताचे उद्यापन करावे (मग त्या दिवशी कुठलीही तिथी असो).\n• श्रीमद्पुरुषार्थ ग्रंथातील कुठलेही स्तोत्र, प्रार्थना, प्रमाण किंवा कुठलेही एक पान स्वच्छेने निवडावे. ह्यास 'व्रतपुष्प' असे म्हणतात.",
        en: "1) Vratkaal & Pathan (First Anga):\n• Begin this vrata on Margashirsh Pournima.\n• Counting Margashirsh Pournima as day 1, the vrata lasts 30 days.\n• Perform Udyaapan exactly on day 30 (whatever the tithi).\n• Choose any one stotra, prarthana, pramaan or page from Shrimad-Purushaarth as your 'Vratpushpa'.",
      },
      {
        dev: "• मार्गशीर्ष पौर्णिमेस व्रतपुष्पाचे एकदा पठण करावे. दुसऱ्या दिवशी दोन वेळा, तिसऱ्या दिवशी तीन वेळा... तिसाव्या दिवशी तीस वेळा (वर्धमान).\n• पठण शक्यतो सलगपणे करावे. मध्ये उठावे लागल्यास परत बसताना — \"जय हरी हरेश्वर जय महामाहेश्वर\" — असे म्हणून पुढे चालू करावे.\n• पठण परमात्म्याच्या मूर्ती वा प्रतिमेसमोरच बसून करावे. खुर्ची, चटई, सोवळे, कांबळे, रेशमी वस्त्र किंवा साधे सुताचे कापड 'आसन' म्हणून वापरण्यास हरकत नाही.",
        en: "• On day 1 recite the Vratpushpa once; day 2 — twice; day 3 — thrice; ... day 30 — thirty times (vardhmaan).\n• Recite continuously if possible. If you must pause, on resuming say: \"Jai Hari Hareshvar Jai Mahaa-Maaheshvar\" and continue.\n• Sit before a moorti/pratima of Paramatma. A chair, mat, sovale, kambale, silk cloth or plain cotton may be used as aasan.",
      },
      {
        dev: "• प्रतिमेस सुंदर हार किंवा प्राप्त फुले वहावीत. निरांजन व सुगंधी उदबत्ती असल्यास अधिकच सुंदर.\n• अनेक मंडळी एकत्र पठण करू शकतात — मात्र संकल्पित व्रतपुष्प समान असावे.\n• प्रत्येक दिवसाचे पठण झाल्यानंतर साष्टांग दंडवत/लोटांगण घालावे.\n• स्त्रियांचा मासिकधर्म व इतर अशौच व्रताच्या आड येत नाहीत.\n• बाहेरगावी गेल्यास परमात्म्याची छोटी प्रतिमा सोबत घेऊन कुठेही पठण करावे.",
        en: "• Garland or fresh flowers, niranjan and incense add to the beauty.\n• Group recitation is allowed if everyone's chosen Vratpushpa is the same.\n• After each day's pathan, offer saashtaang dandavat / lotaangan.\n• Women's monthly cycle and other ashauch do NOT obstruct the vrata.\n• While travelling, carry a small pratima and continue pathan anywhere.",
      },
      {
        dev: "व्रताधिराजाचे एकूण नऊ अंग आहेत. त्यापैकी पहिले अंग 'व्रतकाल व पठण' आणि शेवटचे अंग 'उद्यापनम्' अपरिहार्य आहेत. सर्वच्या सर्व नऊ अंगे पाळण्यास अत्यंत श्रेयस्कर — परंतु न जमल्यास वरील दोन व इतर सात अंगांपैकी कोणतीही तीन अंगे पाळणे आवश्यकच आहे.",
        en: "The Vrataadhiraj has nine angas in all. Of these, the first ('Vratkaal & Pathan') and the last ('Udyaapanam') are mandatory. Observing all nine is most auspicious — but if not possible, the two mandatory ones plus any three of the remaining seven must be observed.",
      },
      {
        dev: "श्री अनिरुद्धगायत्री मंत्र (पठणाच्या आरंभी व शेवटी एकदा):\nॐ मनः प्राणः प्रज्ञा ।\nॐ तत् गुरुदत्तस्य उष्णं स्निग्धं गुरुतेजो धीमहि ।\nरामे चित्तलयः भवन्तु नः ।\nओजः अनिरुद्धामः प्रचोदयात् ॥",
        en: "Shri Aniruddha Gayatri Mantra (once at start and end of pathan):\nOm Manah Praanah Pragyaa.\nOm Tat Guru-Dattasya Ushnam Snigdham Guru-Tejo Dheemahi.\nRaame Chitta-layah Bhavantu Nah.\nOjah Aniruddhaamah Prachodayaat.",
      },
      {
        dev: "२. तिलस्नान (अंग दुसरे): व्रतकाळात स्नानापूर्वी कमीतकमी दोन्ही हातांस कोपरापासून खाली व दोन्ही पायांस गुडघ्यापासून खाली तिळाचे तेल लावावे. (डोळ्यांस तेल लावण्याची आवश्यकता नाही.) तिलस्नानाने भौतिक, प्राणमय व मनोमय अशा तीनही देहांस शुभ स्पंदने स्वीकारणे सोपे होते.",
        en: "2. Til-snaan (Second Anga): Before bath, apply til (sesame) oil at least to both arms below the elbows and both legs below the knees. (Not required on the eyes.) Til-snaan helps the gross, praanic and mental bodies receive auspicious vibrations.",
      },
      {
        dev: "४. त्रिपुरारि त्रिविक्रम मंगलम् (अंग चौथे): व्रताच्या प्रथम दिवशी घराच्या दरवाजास कमीतकमी बारा त्रिपुरारि त्रिविक्रम चिन्हांचे तोरण बांधावे. ही चिन्हे तांबे, पंचधातु, चांदी किंवा सोन्यावर आलेखलेली असावीत.",
        en: "4. Tripuraari Trivikram Mangalam (Fourth Anga): On day 1, tie a torana of at least twelve Tripuraari-Trivikram symbols on the main door. Symbols should be on copper, panchadhaatu, silver or gold.",
      },
      {
        dev: "५. निर्दोष धूपशिखा (अंग पाचवे): दररोज परमात्म्यासमोर निर्दोष शुद्ध धूप लावावा. ह्या धूपशिखेच्या प्रभावामुळे व्रत सफल व संपूर्ण होण्यास साहाय्य होते.",
        en: "5. Nirdosh Dhoopshikhaa (Fifth Anga): Light pure dhoop before Paramatma every day. Its influence helps the vrata become fruitful and complete.",
      },
      {
        dev: "६. त्रिपुरारि त्रिविक्रम भोग (अंग सहावे): व्रतकाळात रोज सकाळी दहीसाखरेचा व संध्याकाळी दूधसाखरेचा नैवेद्य अर्पण करावा. त्या दिवशीचा नैवेद्य त्याच दिवशी प्रसाद म्हणून व्रतधारकाने स्वतः ग्रहण करावा व इतरांस द्यावा.",
        en: "6. Tripuraari Trivikram Bhog (Sixth Anga): Daily — curd-sugar naivedya in the morning, milk-sugar in the evening. Consume that day's naivedya the same day as prasad and share with others.",
      },
      {
        dev: "७. इच्छा दान (अंग सातवे): व्रतकाळात स्वच्छेने भगवंतचरणी दक्षिणा अर्पण करावी व गरजूंस सहाय्य करावे. व्रतकाळात केलेले दान दशगुणा फल देते.\n\n८. पुरुषार्थ दर्शन (अंग आठवे): व्रतकाळात कमीतकमी ९ वेळा परमात्मधामास पवित्र दर्शनासाठी जावे.",
        en: "7. Ichchhaa Daan (Seventh Anga): Offer dakshina at the Lord's feet from the heart and help the needy. Charity in this period gives ten-fold fruit.\n\n8. Purushaarth Darshan (Eighth Anga): Visit Paramatma-dhaam for darshan at least 9 times during the vrata.",
      },
      {
        dev: "९. उद्यापनम् (अंग नववे): तीसाव्या दिवशी विशेष पूजेनंतर एका तबकात नऊ दीप ठेवून प्रज्वलित करावेत व आरती ओवाळून 'श्रीनव-अंकुर-ऐश्वर्य कृपाशीष प्रार्थना' म्हणावी. नंतर नऊ लोटांगणे घालावीत. ह्यालाच श्रीवर्धमान व्रताधिराजाचे \"उद्यापनम्\" असे म्हणतात. उद्यापनाच्या दुसऱ्या दिवशी सकाळी \"त्रिपुरारी त्रिविक्रम मंगलम् तोरण\" सन्मानपूर्वक काढून पवित्र जागी ठेवावे.",
        en: "9. Udyaapanam (Ninth Anga): On day 30, after special pooja, light nine deeps in a tabak, perform aarti and recite 'Shri Nav-Ankur-Aishvarya Krupaashish Praarthana'. Then offer nine lotaangans — this is the Udyaapanam. The next morning respectfully take down the Tripuraari-Trivikram torana and keep it in a sacred place.",
      },
      {
        dev: "श्रीनव-अंकुर-ऐश्वर्य कृपाशीष प्रार्थना:\nॐ नमो देवदेवेश परात्पर दत्तगुरो ।\nअष्टबीजस्मरणं सर्वथा रामदायकम् ॥\nश्रीः शुद्धत्वं वैराग्यं व्यापकत्वं — ॐ द्रां दत्तात्रेयाय नमः ।\nकालातीतत्वं वात्सल्यं — ॐ द्रां दत्तात्रेयाय नमः ।\nसर्वज्ञत्वं कारणं — ॐ द्रां दत्तात्रेयाय नमः ।\nनमो महामाहेश्वर प्रणवरूप परमात्मने ।\nनवांकुरस्मरणं सर्वथा शुभमंगलम् ॥\nश्रीः भर्गः — जन्मकर्मनिवारकम् — ॐ वासुदेवाय नमः ।\nश्रीः ओजः — सर्व-आरोग्यदायकम् — ॐ परमपदाय संकर्षणाय नमः ।\nश्रीः श्रद्धा — सर्वसामर्थ्यमूला — ॐ संकर्षणाय नमः ।\nश्रीः धैर्यः — सर्वसामर्थ्यविधेष्णुः — ॐ संकर्षणाय प्रद्युम्नाय नमः ।\nश्रीः दया — जीवशुद्धमतिः — ॐ संकर्षणाय अनिरुद्धाय नमः ।\nश्रीः अनुकम्पा — साक्षात् वात्सल्यमूर्तिः — ॐ अनिरुद्धाय नमः ।\nश्रीः क्षमा — भवतारिणी — ॐ अनिरुद्धाय आल्हादिनीपतये नमः ॥",
        en: "Shri Nav-Ankur-Aishvarya Krupaashish Praarthana:\nOm Namo Deva-Devesh Paraatpar Datta-Guro.\nAshta-beeja-smaranam sarvathaa Raama-daayakam.\nShreeh Shuddhatvam Vairaagyam Vyaapakatvam — Om Draam Dattaatreyaaya Namah.\nKaalaateetatvam Vaatsalyam — Om Draam Dattaatreyaaya Namah.\nSarvajnatvam Kaaranam — Om Draam Dattaatreyaaya Namah.\nNamo Mahaa-Maaheshvar Pranava-roopa Paramaatmane.\nNavaankura-smaranam sarvathaa shubha-mangalam.\nShreeh Bhargah — janma-karma-nivaarakam — Om Vaasudevaaya Namah.\nShreeh Ojah — sarva-aarogya-daayakam — Om Parama-padaaya Sankarshanaaya Namah.\nShreeh Shraddhaa — sarva-saamarthya-moolaa — Om Sankarshanaaya Namah.\nShreeh Dhairyah — sarva-saamarthya-vidheshnuh — Om Sankarshanaaya Pradyumnaaya Namah.\nShreeh Dayaa — jeeva-shuddha-matih — Om Sankarshanaaya Aniruddhaaya Namah.\nShreeh Anukampaa — saakshaat vaatsalya-moortih — Om Aniruddhaaya Namah.\nShreeh Kshamaa — bhava-taarini — Om Aniruddhaaya Aalhaadinee-pataye Namah.",
      },
      {
        dev: "नाईलाजामुळे व्रत अपूर्ण राहिल्यास कुठलेही पाप अथवा दोष लागत नाही. 'नरक' कुठे वर आकाशात किंवा पाताळात नसतो — तो जीवनातच प्रारब्धामुळे उत्पन्न होतो. श्रीवर्धमान व्रताधिराजाचे पालन केल्याने मनुष्याच्या जीवनात 'नरकयातना' कधीच येत नाहीत. श्रीवर्धमान व्रताधिराजाच्या पालनात स्थूल, सूक्ष्म व तरल — ह्या तीनही स्तरांवर भगवंतकृपेने आपोआपच प्रत्येक गोष्ट संपन्न होते.\n\nतुझिया चरणी भाव अर्पूनि, मी झालो तुझा ।",
        en: "If circumstances leave the vrata incomplete, no sin or dosh attaches. 'Narak' is not somewhere in the sky or paataal — it arises in life itself due to praarabdha. By observing Shri Vardhmaan Vrataadhiraj, narak-yaatanaa never enter a person's life. By the Lord's grace, every detail at the gross, subtle and tarala levels is fulfilled on its own.\n\nTuziyaa charani bhaav arpooni, mee zaalo tuzaa.",
      },
    ],
  },
  {
    id: "sachhidananda-utsav-pujan",
    title_dev: "सच्चिदानंद उत्सव पूजन विधी",
    title_en: "Sachhidananda Utsav Pujan Vidhi",
    deity: "Shri Aniruddha (Paaduka)",
    category: "pujan-vidhi",
    description: "Pratishthaapana & nitya pooja of the Paaduka during Sachhidananda Utsav.",
    verses: [
      {
        dev: "॥ प्रतिष्ठापना पूजा ॥\n१. चौरांगावर / पाटावर पीतांबर किंवा स्वच्छ धुतलेले धोतर अंथरावे.\n२. त्यानंतर तबकात पादुका ठेवाव्यात.\n३. पादुकांच्या मागे आपल्या आवडीचा सद्गुरु श्रीअनिरुद्धांचा फोटो असावा.\n४. चौरांग्याच्या उजव्या व डाव्या बाजूस प्रत्येकी एक मंगलकलश ठेवावा. (मंगलकलश = तांब्याची/चांदीची तांब्या + अर्धा भाग पाणी + एक सुपारी, तुळशीचे पान व थोड्या अक्षता. कलशावर आंब्याचा टहाळा, कलशाला धागा/रंगीत सूत्र.)\n५. चौरांगापुढे पाच नारळ ठेवावेत. त्यांवर अष्टगंधाने 'ॐ' काढलेला असावा.\n६. पुरुषांनी सोवळे/धोतर/लुंगी (सफेद) व स्त्रियांनी रेशमी किंवा स्वच्छ पिवळ्या रंगाची साडी नेसून पूजेस आरंभ करावा.",
        en: "|| Pratishthaapana Pooja ||\n1. Spread a peetambar or clean washed dhoti on the chaurang/paat.\n2. Place the Paaduka in a tabak on it.\n3. Behind the Paaduka, keep a photo of Sadguru Shri Aniruddha of your choice.\n4. Place a Mangal-kalash on the right and left of the chaurang each. (Kalash = copper/silver pot half-filled with water + one supari, tulsi leaf and a few akshataa. A mango sprig on top; tie a thread/coloured sutra around it.)\n5. Place five coconuts in front, each marked with 'Om' in ashtagandha.\n6. Men wear sovale/white dhoti/lungi; women wear silk or clean yellow saree. Begin pooja.",
      },
      {
        dev: "७. प्रथम हात जोडून:\n  गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः ।\n  गुरुः साक्षात् परब्रह्म तस्मै श्रीगुरवे नमः ॥\n८. नंतर हात जोडून गणपतीचे स्मरण करावे व २१ वेळा गणेशगायत्री:\n  ॐ एकदन्ताय विद्महे । वक्रतुण्डाय धीमहि ।\n  तन्नो दन्तिः प्रचोदयात् ॥\n९. दोन्ही मंगलकलशांच्या श्रीफळांस अष्टगंध लावावे व पादुकांना अष्टगंध व अष्टगंध-अंतर लावावे. नंतर हात जोडून मूळ गायत्री मंत्र पाच वेळा:\n  ॐ भूर्भुवःस्वः ।\n  ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\n  धियो यो नः प्रचोदयात् ॐ ॥",
        en: "7. First, with folded hands:\n  Gurur-Brahmaa Gurur-Vishnuh Gurur-Devo Maheshvarah.\n  Guruh saakshaat Para-Brahma tasmai Shri-Gurave namah.\n8. Smarana of Ganapati and Ganesh-Gayatri 21 times:\n  Om Eka-dantaaya Vidmahe. Vakra-tundaaya Dheemahi.\n  Tan-no Dantih Prachodayaat.\n9. Apply ashtagandha to both Shrifals on the kalashas, and ashtagandha + antar to the Paaduka. Then chant the Mool Gayatri 5 times:\n  Om Bhur-Bhuvah-Svah.\n  Om Tat-Savitur-Varenyam Bhargo Devasya Dheemahi.\n  Dhiyo Yo Nah Prachodayaat Om.",
      },
      {
        dev: "१०. श्रीअनिरुद्धगायत्री मंत्र कमीतकमी ५४ वेळा म्हणून पादुकांना तुळशीपत्रे वहावीत:\n  ॐ मनः प्राणः प्रज्ञा ।\n  ॐ तत्तु गुरुदत्तस्य उष्णं स्निग्धं गुरुतेजो धीमहि ।\n  रामे चित्तलयः भवन्तु नः ।\n  ओजः अनिरुद्रामः प्रचोदयात् ॐ ॥\n११. श्रीअनिरुद्ध-अथर्वस्तोत्राची आपल्या इच्छेनुसार आवर्तने (१/३/५/१२/२४) करून पादुकांना बेलपत्रे वहावीत.",
        en: "10. Chant Shri Aniruddha-Gayatri at least 54 times and offer Tulsi leaves on Paaduka:\n  Om Manah Praanah Pragyaa.\n  Om Tattu Guru-Dattasya Ushnam Snigdham Guru-Tejo Dheemahi.\n  Raame Chitta-layah Bhavantu Nah.\n  Ojah Aniruddhaamah Prachodayaat Om.\n11. Recite Shri Aniruddha Atharvasheersh-stotra in any number of aavartans (1/3/5/12/24) and offer Bel leaves on Paaduka.",
      },
      {
        dev: "॥ श्रीअनिरुद्ध-अथर्वस्तोत्र ॥\nअथ श्रीअनिरुद्ध-अथर्वस्तोत्रः ।\nॐ नमो अनिरुद्धाय अर्थवर्पतये ।\nअथर्ववस्तु गुरुतेजः सद्गुरुतत्त्वप्रतिष्ठितः ॥\nअनिरुद्राम त्वमेव अर्थवर्पदाता ।\nत्वमेव साक्षात् सद्गुरुतत्त्वं महाविष्णुः परमशिवः ।\nत्वमेव परब्रह्म दत्तात्रेयः आत्मारामः अभिरामश्च ।\nत्वमेव कर्ता अकर्ता अन्यथाकर्ता परिपालनकर्ता ॥",
        en: "|| Shri Aniruddha Atharva-stotra ||\nAtha Shri Aniruddha Atharvastotrah.\nOm Namo Aniruddhaaya Arthavar-pataye.\nAtharva-vastu Guru-tejah Sadguru-tattva-pratishthitah.\nAniruddhaam tvameva arthavar-padaataa.\nTvameva saakshaat Sadguru-tattvam Mahaa-Vishnuh Parama-Shivah.\nTvameva Para-Brahma Dattaatreyah Aatma-raamah Abhiraamashcha.\nTvameva Kartaa Akartaa Anyathaa-kartaa Paripaalana-kartaa.",
      },
      {
        dev: "त्वमेव स्थूल-सूक्ष्म-तरल-तरलतर-तरलतमः ।\nत्वमेव धरणीधरः सुगन्धपुष्पवर्धको बृहस्पतिः ।\nअम्भसां पतिः क्षीराब्धिनिवृत्तसः ।\nकमलकोमलकमलाकान्तो पद्मनाभः ।\nत्वमेव वैष्णवरः ज्ञानाग्निः प्राणाग्निः यज्ञाग्निः विरहाग्निश्च ।\nत्वमेव जातवेदाः कालकाल-रुद्राग्नि-नाशकः ।\nत्वमेव हिरण्यगर्भः विराट् ईश्वरश्च ।\nमरुत्सखा मरुत्-चैतन्यः ।\nविश्ववायुः समीरणः गति-स्थिति-संकर्ता ।\nत्वमेव नभ-नाभः चिदाकाशप्रतिष्ठितः ॥",
        en: "Tvameva sthoola-sookshma-tarala-taralatara-taralatamah.\nTvameva Dharani-dharah Sugandha-pushpa-vardhako Bruhaspatih.\nAmbhasaam patih Ksheeraabdhi-nivrutta-sah.\nKamala-komala-Kamalaa-kaanto Padmanaabhah.\nTvameva Vaishnava-varah Gnyaanaagnih Praanaagnih Yagnyaagnih Virahaagnishcha.\nTvameva Jaata-vedaah Kaala-kaala-Rudraagni-naashakah.\nTvameva Hiranya-garbhah Viraat Eeshvarashcha.\nMarut-sakhaa Marut-chaitanyah.\nVishva-vaayuh Sameeranah Gati-sthiti-sankartaa.\nTvameva Nabha-naabhah Chid-aakaasha-pratishthitah.",
      },
      {
        dev: "रक्ष नः अतिरेकात् । रक्ष नः अभावात् ।\nरक्ष नो भूतात् । रक्ष नो भविष्यात् ।\nरक्ष नः अनुचित्तात् । अभिप्रेर्य उचितदिशायाम् ।\nअनिरुद्ध त्वमेव मनोरक्षकः मनःसामर्थ्यदाता ॥\nअभिराम त्वमेव सत्यमयः । अनिरुद्ध त्वमेव प्रेममयः ।\nनान्यक्षाता भक्तवत्सलः अनिरुद्धो भक्तसखा ॥\nनन्दापते नमस्तुभ्यं ओजोनिधये नमो नमः ।\nनमोऽद्भुतपराक्रमाय महाकालाय नमो नमः ॥\nनमः सहजसिद्धाय व्यत्यासचरणाय च ।\nनमो पूर्णपुरुषाय पुरुषोत्तमाय ते नमः ॥",
        en: "Raksha nah atirekaat. Raksha nah abhaavaat.\nRaksha no bhootaat. Raksha no bhavishyaat.\nRaksha nah anuchittaat. Abhi-prerya uchita-dishaayaam.\nAniruddha tvameva mano-rakshakah manah-saamarthya-daataa.\nAbhiraama tvameva satya-mayah. Aniruddha tvameva prema-mayah.\nNaanya-kshaataa bhakta-vatsalah Aniruddho bhakta-sakhaa.\nNandaa-pate namastubhyam Ojo-nidhaye namo namah.\nNamo'dbhuta-paraakramaaya Mahaa-kaalaaya namo namah.\nNamah sahaja-siddhaaya vyatyaasa-charanaaya cha.\nNamo Poorna-Purushaaya Purushottamaaya te namah.",
      },
      {
        dev: "श्रीअनिरुद्धः सर्वभूतान्तरात्मा\nअनिरुद्धः वै पूर्णकामं नमामः ।\nअनिरुद्धेन वयमुद्धारिताः\nअनिरुद्धाय पूर्णपुरुषाय नमः ॥\nअनिरुद्धात् नान्यक्षाता हि कोऽपि\nअनिरुद्धस्य चरणकाङ्क्षिणो वयम् ।\nश्रीअनिरुद्ध रमेत चित्तः सदैव\nहे अनिरुद्ध त्वमेव शरणं नान्यथा ॥\n\nअथ फलश्रुतिः ।\nअथर्वीयोऽयं गुह्यतेजःप्रदः चाञ्चल्यहरः सर्वथा सर्वप्रदः ।\nअथर्वस्तोत्रपठनात् महाभयं प्रणश्यति, महापापं प्रणश्यति,\nप्रारब्धं प्रणश्यति, घोरकष्टं प्रणश्यति ॥\nये कृपामिच्छन्ति ते कृपावन्तो भवन्ति ।\nये ऐश्वर्यमिच्छन्ति ते ऐश्वर्यवन्तो भवन्ति ॥",
        en: "Shri Aniruddhah sarva-bhoota-antaraatmaa,\nAniruddhah vai poorna-kaamam namaamah.\nAniruddhena vayam-uddhaaritaah,\nAniruddhaaya Poorna-Purushaaya namah.\nAniruddhaat naanya-kshaataa hi ko'pi,\nAniruddhasya charana-kaankshino vayam.\nShri Aniruddha rameta chittah sadaiva,\nHe Aniruddha tvameva sharanam naanyathaa.\n\nAtha Phalashrutih.\nAtharveeyo'yam guhya-tejah-pradah chaanchalya-harah sarvathaa sarva-pradah.\nAtharva-stotra-pathanaat mahaa-bhayam pranashyati, mahaa-paapam pranashyati,\npraarabdham pranashyati, ghora-kashtam pranashyati.\nYe krupaam-icchhanti te krupaavanto bhavanti.\nYe aishvaryam-icchhanti te aishvaryavanto bhavanti.",
      },
      {
        dev: "१२. नंतर अत्यंत प्रेमाने नैवेद्य अर्पण करावा.\n१३. साष्टांग प्रणिपात करताना मोठ्याने 'नंदारमणा अनिरुद्धा, अनिरुद्धा' असा घोष करावा.\n१४. स्वतःभोवती ३ प्रदक्षिणा घालताना 'प्रेमस्वरूप अनिरुद्ध पाहि माम्' असे ३ वेळा म्हणावे.\n१५. क्षमायाचना — दोन्ही हातांनी स्वतःचे कान धरून 'क्षमस्व अनिरुद्ध' असे म्हणावे.",
        en: "12. Offer naivedya with deep love.\n13. While doing saashtaang pranipaat, loudly call out: 'Nandaa-ramanaa Aniruddhaa, Aniruddhaa'.\n14. Take 3 pradakshinaas around yourself saying 'Prema-svaroopa Aniruddha paahi maam' 3 times.\n15. Kshama-yaachana — hold your own ears with both hands and say 'Kshamasva Aniruddha'.",
      },
      {
        dev: "॥ नित्य पूजा ॥\nप्रतिष्ठापना झाल्यानंतर पादुका घरी असेपर्यंत (२ किंवा ५ दिवस) सकाळी व संध्याकाळी पुढीलप्रमाणे पूजा करावी:\n१. हात जोडून — गुरुर्ब्रह्मा गुरुर्विष्णुः... श्लोक.\n२. श्रीगुरुक्षेत्रम् मंत्र / श्रीअनिरुद्धाष्टोत्तरशतनामावली (१०८ नामे — ॐ रुद्राय नमः, ॐ भक्तनाथाय नमः, ॐ द्वादशजिह्वाय नमः, ॐ शब्दसहायाय नमः, ॐ सामर्थ्यसिन्धवे नमः, ॐ उग्रनेत्राय नमः, ॐ सुचित्रमित्राय नमः, ॐ नन्दा-उत्तमाय नमः, ॐ अगस्तिवंशोद्भवाय नमः, ॐ भक्ततापनिवारकाय नमः, ... ॐ सच्चिदानन्दाय नमः, ॐ केशवाय नमः, ॐ हरिराजाय नमः, ॐ मधुराधिपतये नमः, ... ॐ रामविजयाय नमः, ॐ रामसत्याय नमः, ॐ रामयोगिने नमः, ॐ श्रीमन्-सामर्थ्यदात्रे नमः, ॐ पिपा-प्रेम-परायणाय नमः ).\n३. पूजेच्या वेळेस दूधसाखरेचा नैवेद्य अर्पण करावा व नंतर अन्नग्रहणाच्या वेळेस संपूर्ण नैवेद्य अर्पण करावा.\n४. दूधसाखरेचा नैवेद्य अर्पण केल्यानंतर:\n  अनसूयोऽत्रिसम्भूतो दत्तात्रेयो दिगम्बरः ।\n  स्मृतुर्गामी स्वभक्तानां उद्धर्ता भवसंकटात् ॥",
        en: "|| Nitya Pooja ||\nAfter pratishthaapana, while the Paaduka is at home (2 or 5 days), do morning and evening pooja as follows:\n1. With folded hands — recite 'Gurur-Brahmaa...' shloka.\n2. Shri Guru-kshetram mantra / Shri Aniruddha Ashtottara-shata-naamaavali (108 names — Om Rudraaya Namah, Om Bhakta-naathaaya Namah, Om Dvaadasha-jihvaaya Namah, Om Shabda-sahaayaaya Namah, Om Saamarthya-sindhave Namah, Om Ugra-netraaya Namah, Om Suchitra-mitraaya Namah, Om Nandaa-Uttamaaya Namah, Om Agasti-vamshodbhavaaya Namah, Om Bhakta-taapa-nivaarakaaya Namah, ... Om Sachhidaanandaaya Namah, Om Keshavaaya Namah, Om Hari-raajaaya Namah, Om Madhuraadhipataye Namah, ... Om Raama-vijayaaya Namah, Om Raama-satyaaya Namah, Om Raama-yogine Namah, Om Shreeman-Saamarthya-daatre Namah, Om Pipaa-Prema-paraayanaaya Namah).\n3. Offer milk-sugar naivedya at pooja, and the full naivedya at meal-time.\n4. After milk-sugar naivedya:\n  Anasooyo'tri-sambhooto Dattaatreyo Digambarah.\n  Smartru-gaami sva-bhaktaanaam Uddhartaa Bhava-sankataat.",
      },
      {
        dev: "अल्पशिक्षित व्यक्तींसाठी सोपी पद्धत:\n१. पूजेची मांडणी आधी सांगितल्याप्रमाणे करावी.\n२. 'गुरुर्ब्रह्मा...' हा श्लोक ५ वेळा म्हणून दोन्ही कलशांस अष्टगंध लावावे.\n३. 'श्रीराम राम रघुनन्दन राम राम' हा मंत्र १० वेळा म्हणून पादुकांस अष्टगंध व अंतर लावून तुळशीपत्रे व बेलपत्रे वहावीत.\n४. 'ॐ मनःसामर्थ्यदाता श्रीअनिरुद्धाय नमः' हा जप १० वेळा करून पादुकांना फुले वहावीत.",
        en: "Simple method for those less familiar with Sanskrit:\n1. Arrange pooja items as described above.\n2. Recite 'Gurur-Brahmaa...' 5 times and apply ashtagandha to both kalashas.\n3. Recite 'Shri-Raam Raam Raghu-nandan Raam Raam' 10 times. Apply ashtagandha and antar to Paaduka, then offer Tulsi and Bel leaves.\n4. Chant 'Om Manah-Saamarthya-daataa Shri Aniruddhaaya Namah' 10 times and offer flowers on Paaduka.",
      },
    ],
  },
  {
    id: "ganesh-pujan-vidhi",
    title_dev: "श्रीगणेश पूजाविधि",
    title_en: "Shri Ganesh Pujan Vidhi",
    deity: "Ganesh",
    category: "pujan-vidhi",
    description: "Pratishthaapana and Punarmilaap Aavaahanam vidhi for Ganeshotsav.",
    verses: [
      {
        dev: "॥ प्रतिष्ठापना पूजा ॥\n१. एका ताम्हनात अक्षतांवर तीन सुपाऱ्या ठेवा. हात जोडून डोळे मिटून 'ॐ गं गणपतये नमः' चा २४ वेळा जप करा.\n२. 'ॐ ___ नमः' — हा जप २४ वेळा करा. खालील वर्षानुसार जपाचे नाव निवडा:\n  • २०११ — ॐ ब्रह्मणस्पतये नमः\n  • २०१२ — ॐ वरदविनायकाय नमः\n  • २०१३ — ॐ प्रमथपतये नमः\n  • २०१४ — ॐ वक्रतुण्डाय नमः\n  • २०१५ — ॐ धूम्रवर्णाय नमः\n  • २०१६ — ॐ हेरम्बाय नमः\n  • २०१७ — ॐ धुण्डिराजाय नमः\n  • २०१८ — ॐ मयूरेश्वराय नमः\n  • २०१९ — ॐ लम्बोदराय नमः\n  • २०२० — ॐ एकदन्ताय नमः\n  • २०२१ — ॐ महागणपतये नमः\n  • २०२२ — ॐ गौरीपुत्राय नमः\nयानंतर हाच क्रम पुन्हा सुरू होतो.",
        en: "|| Pratishthaapana Pooja ||\n1. Place three suparis on akshataa in a taamhan. Fold hands, close eyes and chant 'Om Gam Ganapataye Namah' 24 times.\n2. 'Om ___ Namah' — chant 24 times. Pick the name by the year:\n  • 2011 — Om Brahmanaspataye Namah\n  • 2012 — Om Vara-Vinaayakaaya Namah\n  • 2013 — Om Pramatha-pataye Namah\n  • 2014 — Om Vakra-tundaaya Namah\n  • 2015 — Om Dhoomra-varnaaya Namah\n  • 2016 — Om Herambaaya Namah\n  • 2017 — Om Dhundhi-raajaaya Namah\n  • 2018 — Om Mayureshvaraaya Namah\n  • 2019 — Om Lambodaraaya Namah\n  • 2020 — Om Eka-dantaaya Namah\n  • 2021 — Om Mahaa-Ganapataye Namah\n  • 2022 — Om Gauri-putraaya Namah\nThe cycle then repeats.",
      },
      {
        dev: "३. तीनही सुपाऱ्या उचलून दुसऱ्या ताम्हनात ठेवा व अभिषेक करा. अभिषेकाच्या वेळेस संपूर्ण अथर्वशीर्ष (शांतिमंत्र, अथर्वशीर्ष व फलश्रुति) म्हणा. अभिषेक — पहिल्यांदा पंचामृत, मग सुगंधित जल व शेवटी शुद्ध जल.\n४. नंतर सुपाऱ्या स्वच्छ पुसून पुन्हा अक्षतांच्या ताम्हनात ठेवा. एकदा हा मंत्र म्हणा:\n  एकदन्तं शूर्पकर्णं गजवक्त्रं चतुर्भुजम् ।\n  पाशांकुशधरं देवं ध्यायेत् सिद्धिविनायकम् ॥\n  ॥ श्रीसिद्धिविनायकाय नमः । आवाहनार्थं अक्षतां समर्पयामि ॥",
        en: "3. Lift the three suparis into another taamhan and perform abhishek. During abhishek, recite the entire Atharvasheersh (Shaanti-mantra, Atharvasheersh and Phalashruti). Abhishek order — Panchamrit first, then perfumed water, then plain water.\n4. Wipe the suparis and place back on the akshataa taamhan. Recite once:\n  Eka-dantam Shoorpa-karnam Gaja-vaktram Chatur-bhujam.\n  Paasha-ankusha-dharam Devam Dhyaayet Siddhi-Vinaayakam.\n  || Shri Siddhi-Vinaayakaaya Namah. Aavaahanaartham akshataam samarpayaami. ||",
      },
      {
        dev: "५. मधल्या सुपारीस अष्टगंध व बाजूच्या सुपाऱ्यांना हळद-कुंकू लावा (मूर्तीसही). एकदा म्हणा:\n  अष्टगन्धसमायुक्तं सुगन्धद्रव्यसंयुतम् ।\n  श्रीगन्धं गणाध्यक्ष स्वागतार्थं प्रतिगृह्यताम् ॥\n६. ॐ श्रीसिद्धिविनायकाय हेरम्बगणेशाय नमः । यज्ञोपवीतम् समर्पयामि ॥ — असे म्हणून सुपारी व मूर्तीस यज्ञोपवीत (जानवे) अर्पण करा.\n७. ॐ श्रीसिद्धिविनायकाय श्रीधुण्डिराजगणेशाय नमः । वस्त्रम् समर्पयामि ॥ — कापसाचे वस्त्र अर्पण करा.",
        en: "5. Apply ashtagandha to the middle supari and haldi-kunku to the side suparis (and to the moorti). Recite once:\n  Ashta-gandha-samaayuktam Sugandha-dravya-samyutam.\n  Shri-gandham Ganaadhyaksha Svaagataartham Pratigruhyataam.\n6. Om Shri Siddhi-Vinaayakaaya Heramba-Ganeshaaya Namah. Yagnyopaveetam samarpayaami. — Offer yagnyopaveet (janave) to supari and moorti.\n7. Om Shri Siddhi-Vinaayakaaya Shri Dhundhi-raaja-Ganeshaaya Namah. Vastram samarpayaami. — Offer cotton vastra.",
      },
      {
        dev: "८. सुमुखः एकदन्तश्च कपिलो गजकर्णकः ।\n  लम्बोदरश्च विकटो विघ्ननाशी गणाधिपः ॥\n  ॐ श्रीसिद्धिविनायकाय भालचन्द्राय गजाननाय नमः । सुगन्धित-रक्तपुष्पम् समर्पयामि ॥\n  — लाल फुले, सुगंधी फुले व दूर्वा अर्पण करा.\n९. ॐ श्रीसिद्धिविनायकाय ब्रह्मणस्पतये नमः । धूपदीपौ समर्पयामि ॥ — धूप व दीप गणपतीवर ओवाळा.",
        en: "8. Sumukhah Eka-dantashcha Kapilo Gaja-karnakah.\n  Lambodarashcha Vikato Vighna-naashee Ganaadhipah.\n  Om Shri Siddhi-Vinaayakaaya Bhaala-chandraaya Gajaananaaya Namah. Sugandhita-rakta-pushpam samarpayaami.\n  — Offer red flowers, fragrant flowers and durva.\n9. Om Shri Siddhi-Vinaayakaaya Brahmanaspataye Namah. Dhoopa-deepau samarpayaami. — Wave dhoop and deep before Ganapati.",
      },
      {
        dev: "१०. ॐ श्रीसिद्धिविनायकाय विघ्नान्तकाय नमः ।\n  ॐ प्राणाय नमः । ॐ अपानाय नमः । ॐ व्यानाय नमः ।\n  ॐ उदानाय नमः । ॐ समानाय नमः । ॐ ब्रह्मणे नमः ॥\n  — गणेशजींपुढे जलात दोन बोटे बुडवून चौकोन काढा. त्यावर नैवेद्य ठेवा. नैवेद्याच्या भोवती जल फिरवून त्यावर दूर्वा ठेवा. हात जोडून — ॐ श्रीसिद्धिविनायकाय अन्नपूर्णानन्दनाय नमः ॥\n११. गणेश गायत्री — ॐ एकदन्ताय विद्महे । वक्रतुण्डाय धीमहि । तन्नो दन्तिः प्रचोदयात् ॥\n  — हा मंत्र १०८ वेळा म्हणून गणेशजींना दूर्वा अर्पण करा. यामुळे विघ्ननाशक स्वरूपात प्राणप्रतिष्ठा होते.\n१२. साष्टांग नमस्कार करा व ३ प्रदक्षिणा घाला. नंतर —\n  आवाहनम् न जानामि, न जानामि तवार्चनम् ।\n  पूजाम् चैव न जानामि, क्षमस्व परमेश्वर ॥\n  असे म्हणून पानाच्या पत्त्यावर अक्षता वहाव्यात.",
        en: "10. Om Shri Siddhi-Vinaayakaaya Vighnaantakaaya Namah.\n  Om Praanaaya Namah. Om Apaanaaya Namah. Om Vyaanaaya Namah.\n  Om Udaanaaya Namah. Om Samaanaaya Namah. Om Brahmane Namah.\n  — Dip two fingers in water before Ganesha and draw a square. Place naivedya on it. Circle water around the naivedya and place a durva on it. With folded hands — Om Shri Siddhi-Vinaayakaaya Annapoorna-nandanaaya Namah.\n11. Ganesh Gayatri — Om Eka-dantaaya Vidmahe. Vakra-tundaaya Dheemahi. Tan-no Dantih Prachodayaat.\n  — Chant 108 times and offer durva to Ganesha. This establishes praana-pratishthaa in the Vighna-naashak form.\n12. Saashtaang namaskaar and 3 pradakshinaas. Then —\n  Aavaahanam na jaanaami, na jaanaami tavaarchanam.\n  Poojaam chaiva na jaanaami, kshamasva Parameshvara.\n  — Place akshata on a paan leaf.",
      },
      {
        dev: "॥ पुनर्मिलाप आवाहनम् ॥\n१. अक्षतांनी भरलेला ताम्हन (तीनही सुपाऱ्यांसह) उचलून दूर्वांच्या हारांनी आच्छादित आसनावर ठेवा.\n२. आचमन करा.\n३. ॐ गं गणपतये नमः चा १२ वेळा जप करा.\n४. ॐ ___ श्रीसिद्धिविनायकाय नमः चा १२ वेळा जप करत सुपारीवर दूर्वा अर्पण करा. (रिक्त स्थानी प्रतिष्ठापना पूजेत निवडलेले नाव वापरा.)\n५. वक्रतुण्ड महाकाय कोटिसूर्यसमप्रभ ।\n  निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥ — असे म्हणून दूर्वा अर्पण करा.",
        en: "|| Punarmilaap Aavaahanam ||\n1. Lift the akshataa-filled taamhan (with all three suparis) onto an aasan covered with durva garlands.\n2. Aachman.\n3. Chant 'Om Gam Ganapataye Namah' 12 times.\n4. Chant 'Om ___ Shri Siddhi-Vinaayakaaya Namah' 12 times and offer durva on supari. (Fill the blank with the name from step 2 of pratishthaapana.)\n5. Vakra-tunda Mahaa-kaaya Koti-soorya-sama-prabha.\n  Nir-vighnam kuru me Deva sarva-kaaryeshu sarvadaa.\n  — Recite and offer durva.",
      },
      {
        dev: "६. पळीत जल घेऊन म्हणा:\n  आवाहनम् न जानामि, न जानामि तवार्चनम् ।\n  पूजाम् चैव न जानामि, क्षमस्व परमेश्वर ॥\n  मन्त्रहीनम् क्रियाहीनम् भक्तिहीनम् सुरेश्वर ।\n  यत्पूजितम् मया देव परिपूर्णम् तदस्तु मे ॥\n  अपराधसहस्राणि च क्रियन्तेऽहर्निशम् मया ।\n  दासोऽयमिति माम् मत्वा क्षमस्व परमेश्वर ॥\n  — हा श्लोक म्हणत जल व अक्षता ताम्हनात सोडा.\n७. सिन्दूरवदनो देवो यत्पादपङ्कजस्मरणम् ।\n  वासरमणिरवतमसां राशिं नाशयति विघ्नानाम् ॥\n  — हा श्लोक म्हणून सुपारीवर गंध, फूल, हीरा व कुंकू अर्पण करा.\n८. दूध-साखरेचा नैवेद्य अर्पण करा.\n९. दीप प्रज्वलित करून ३ वेळा आरती ओवाळा. आरती करा. नंतर मंत्रपुष्पांजली करा.",
        en: "6. Take water in a paLi and recite:\n  Aavaahanam na jaanaami, na jaanaami tavaarchanam.\n  Poojaam chaiva na jaanaami, kshamasva Parameshvara.\n  Mantra-heenam Kriyaa-heenam Bhakti-heenam Sureshvara.\n  Yat-poojitam mayaa Deva paripoornam tad-astu me.\n  Aparaadha-sahasraani cha kriyante'har-nisham mayaa.\n  Daaso'yam-iti maam matvaa kshamasva Parameshvara.\n  — Drop water and akshataa into the taamhan.\n7. Sindoora-vadano Devo yat-paada-pankaja-smaranam.\n  Vaasara-mani-ravata-masaam raashim naashayati vighnaanaam.\n  — Offer gandha, flower, hira and kunku on the supari.\n8. Offer milk-sugar naivedya.\n9. Light deep, wave the aarti thaal 3 times and perform aarti. Then mantra-pushpaanjali.",
      },
      {
        dev: "१०. उपस्थित सर्व श्रद्धावानांनी दूर्वा अर्पण करून साष्टांग नमस्कार व प्रदक्षिणा करावी.\n११. पुढील मंत्र म्हणत सुपारी व मूर्तीच्या चरणांवर अक्षता अर्पण करा:\n  यान्तु देवगणाः सर्वे पूजामादाय पार्थिवीम् ।\n  इष्टकामप्रसिद्ध्यर्थं पुनरागमनाय च ॥\n  ॐ तत्सद् ब्रह्मार्पणमस्तु ॥\n  — आता मूर्तीचे पीठ थोडेसे हलवा.\n१२. मूर्तीसह निर्गमन करताना घराच्या उंबरठा/गेटपर्यंत दूर्वांकुरांनी दूध-पाण्याचे मिश्रण शिंपडा व 'गणपती बाप्पा मोरया'चा घोष करत राहा.\n१३. उंबरठ्याबाहेर — मूर्तीचा मुख घराकडे करा. घरातील स्त्रीने आरतीची थाळी गणेशासमोर फिरवावी, सोबत दही-पोह्यांची पोटली द्यावी. नंतर 'सुखकर्ता दुःखहर्ता'ची आरती करा. आरतीची थाळी घरातील स्त्रीजवळच राहावी.\n१४. विसर्जनापूर्वी जलाशयाच्या किनारी कापूर आरती करा.\n१५. शेवटी मूर्तीस जलात विसर्जित करा.",
        en: "10. All present offer durva, do saashtaang namaskaar and pradakshinaa.\n11. Offer akshataa at the feet of supari and moorti while reciting:\n  Yaantu Deva-ganaah sarve poojaam-aadaaya paarthiveem.\n  Ishta-kaama-prasiddhyartham punar-aagamanaaya cha.\n  Om Tat-Sad Brahmaarpanam-astu.\n  — Now gently move the moorti's seat slightly.\n12. While leaving with the moorti, sprinkle durva with milk-water mix up to the threshold/gate, chanting 'Ganpati Bappa Morya'.\n13. Outside the threshold — turn the moorti's face toward home. A lady of the house circles the aarti thaal before Ganesha and gives a packet of dahi-pohe. Then perform 'Sukha-kartaa Dukha-hartaa' aarti. The thaal stays with the lady of the house.\n14. Before visarjan, perform kapur-aarti by the water.\n15. Finally, immerse the moorti in water.",
      },
    ],
  },
  {
    id: "saraswati-pujan-vijayadashami",
    title_dev: "सरस्वती पूजन (दसरा / विजयादशमी)",
    title_en: "Saraswati Pujan (Dasara / Vijayadashami)",
    deity: "Saraswati",
    category: "pujan-vidhi",
    description: "Home vidhi for Saraswati Pujan on Dasara — including Vakratund stotra and Yaa Kundendu prarthana.",
    verses: [
      {
        dev: "॥ पूजन साहित्य ॥\n१) हळद, कुंकू, अक्षता\n२) निरांजन\n३) नारळ — २\n४) गुळ-खोबऱ्याचा नैवेद्य\n५) फुले, सोने (आपट्याची पाने)\n६) सरस्वती — पुस्तके आणि चित्र\n७) सुपारी — २\n८) विड्याची पाने — २\n९) मांडणीत सर्वांत मागे महापूजनाची (वरदचण्डिकाप्रसन्नोत्सवातील) किंवा ती नसल्यास मोठी आई (महिषासुरमर्दिनी) व सद्गुरूंची एकत्रित तसबीर ठेवावी.\n\n॥ मांडणी ॥\n१) एक चौरंग किंवा पाट घ्यावा व त्यावर वस्त्र अंथरावे.\n२) त्यावर साहित्य व्यवस्थित मांडावे.",
        en: "|| Items needed ||\n1) Haldi, kunku, akshataa\n2) Niranjan\n3) 2 Coconuts\n4) Gud-khobra naivedya\n5) Flowers, 'sone' (Aapta leaves)\n6) Saraswati — books and image\n7) 2 Suparis\n8) 2 Vidya leaves\n9) At the back of the arrangement, place the Mahaa-poojan picture (from Varad-Chandika-Prasannotsav); if not available, a combined photo of Mothi Aai (Mahishaasura-mardini) and Sadguru.\n\n|| Arrangement ||\n1) Take a chaurang or paat and spread a cloth.\n2) Place the items in order on it.",
      },
      {
        dev: "॥ पूजन विधी ॥\n१) प्रथम निरांजनास हळद-कुंकू वहावे.\n२) त्यानंतर 'वक्रतुण्ड' स्तोत्र म्हणावे.\n\n॥ वक्रतुण्ड स्तोत्र ॥\nप्रणम्य शिरसा देवं गौरीपुत्रं विनायकम् ।\nभक्तावासं स्मरेन्नित्यमायुःकामार्थसिद्धये ॥१॥\nप्रथमं वक्रतुण्डं च एकदन्तं द्वितीयकम् ।\nतृतीयं कृष्णपिङ्गाक्षं गजवक्त्रं चतुर्थकम् ॥२॥\nलम्बोदरं पञ्चमं च षष्ठं विकटमेव च ।\nसप्तमं विघ्नराजेन्द्रं धूम्रवर्णं तथाष्टमम् ॥३॥\nनवमं भालचन्द्रं च दशमं तु विनायकम् ।\nएकादशं तु गणपतिं द्वादशं तु गजाननम् ॥४॥\nद्वादशैतानि नामानि त्रिसन्ध्यं यः पठेन्नरः ।\nन च विघ्नभयं तस्य सर्वसिद्धिकरं प्रभो ॥५॥\nविद्यार्थी लभते विद्यां धनार्थी लभते धनम् ।\nपुत्रार्थी लभते पुत्रान् मोक्षार्थी लभते गतिम् ॥६॥\nजपेत् गणपतिस्तोत्रं षड्भिर्मासैः फलं लभेत् ।\nसंवत्सरेण सिद्धिं च लभते नात्र संशयः ॥७॥\nअष्टभ्यो ब्राह्मणेभ्यश्च लिखित्वा यः समर्पयेत् ।\nतस्य विद्या भवेत्सर्वा गणेशस्य प्रसादतः ॥८॥\n॥ इति श्रीनारदपुराणे संकटविनाशनं श्रीगणपतिस्तोत्रं सम्पूर्णम् ॥",
        en: "|| Pujan Vidhi ||\n1) First offer haldi-kunku to the niranjan.\n2) Then recite the 'Vakratund' stotra.\n\n|| Vakratund Stotra ||\nPranamya shirasaa Devam Gauri-putram Vinaayakam,\nBhaktaavaasam smaren-nityam aayuh-kaamaartha-siddhaye. (1)\nPrathamam Vakra-tundam cha Eka-dantam dviteeyakam,\nTruteeyam Krishna-pingaaksham Gaja-vaktram chaturthakam. (2)\nLambodaram panchamam cha Shashtham Vikatam-eva cha,\nSaptamam Vighna-raajendram Dhoomra-varnam tathaashtamam. (3)\nNavamam Bhaala-chandram cha Dashamam tu Vinaayakam,\nEkaadasham tu Ganapatim Dvaadasham tu Gajaananam. (4)\nDvaadasha-itaani naamaani tri-sandhyam yah pathen-narah,\nNa cha vighna-bhayam tasya sarva-siddhi-karam Prabho. (5)\nVidyaarthee labhate vidyaam dhanaarthee labhate dhanam,\nPutraarthee labhate putraan mokshaarthee labhate gatim. (6)\nJapet Ganapati-stotram shadbhir-maasaih phalam labhet,\nSamvatsarena siddhim cha labhate naatra samshayah. (7)\nAshtabhyo Braahmanebhyash-cha likhitvaa yah samarpayet,\nTasya vidyaa bhavet-sarvaa Ganeshasya prasaadatah. (8)\n|| Iti Shri-Naarada-puraane Sankata-vinaashanam Shri-Ganapati-stotram sampoornam ||",
      },
      {
        dev: "३) स्तोत्र म्हटल्यानंतर तसबिरीस हार घालावा.\n४) त्यानंतर विड्यावर, नारळावर, पुस्तकांवर आणि आयुधांवर हळद-कुंकू व अक्षता वहाव्यात.\n५) त्यानंतर खालील श्लोक म्हणावा:\n  शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं\n  विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम् ।\n  लक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यम्\n  वन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम् ॥",
        en: "3) After the stotra, garland the photo.\n4) Offer haldi-kunku and akshataa on the vidya leaves, the coconut, the books and the implements (aayudha).\n5) Then recite this shloka:\n  Shaantaakaaram bhujaga-shayanam Padma-naabham Suresham\n  Vishvaa-dhaaram gagana-sadrusham megha-varnam shubhaangam.\n  Lakshmee-kaantam kamala-nayanam yogibhir-dhyaana-gamyam\n  Vande Vishnum bhava-bhaya-haram sarva-loka-eka-naatham.",
      },
      {
        dev: "६) त्यानंतर 'या कुन्देन्दुतुषारहारधवला' ही प्रार्थना म्हणत फुले व सोने (आपट्याची पाने) अर्पण करावीत:\n  या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता ।\n  या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना ॥\n  या ब्रह्माच्युतशङ्करप्रभृतिभिर्देवैः सदा वन्दिता ।\n  सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा ॥\n\n७) त्यानंतर २४ वेळा 'ॐ कृपासिन्धु श्रीसाईनाथाय नमः' हा जप करावा.\n८) जप झाल्यानंतर निरांजन ओवाळावे व गुळ-खोबऱ्याचा नैवेद्य अर्पण करावा.\n९) त्यानंतर 'विजयमंत्र' म्हणावा. इथे पूजन सम्पन्न होते.\n\nहरि ॐ • श्रीराम • अम्बज्ञ • नाथसंविध्",
        en: "6) Recite 'Yaa Kundendu-tushaara-haara-dhavalaa' praarthana while offering flowers and 'sone' (Aapta leaves):\n  Yaa Kundendu-tushaara-haara-dhavalaa Yaa shubhra-vastraavrutaa,\n  Yaa Veenaa-vara-danda-mandita-karaa Yaa Shveta-padmaasanaa.\n  Yaa Brahmaachyuta-Shankara-prabhrutibhir-Devaih sadaa vanditaa,\n  Saa maam paatu Sarasvatee Bhagavatee nih-shesha-jaadyaa-pahaa.\n\n7) Then chant 'Om Krupaa-sindhu Shri Saainaathaaya Namah' 24 times.\n8) Wave the niranjan and offer gud-khobra naivedya.\n9) Recite the 'Vijaya-mantra'. Pujan is now complete.\n\nHari Om • Shri Ram • Ambadnya • Naathasamvidh",
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
