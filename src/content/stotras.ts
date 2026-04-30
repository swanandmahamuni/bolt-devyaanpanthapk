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
  {
    id: "sundarkand",
    title_dev: "श्री सुन्दरकाण्ड",
    title_en: "Shri Sundarkand",
    deity: "Hanuman",
    category: "stotra",
    description:
      "The fifth book of Tulsidas's Ramcharitmanas — Hanuman's leap to Lanka, his meeting with Sita, and the divine assurance of Shri Ram. Sanskrit shlokas and Awadhi chaupais (Devanagari) as transcribed from the source PDF.",
    verses: [
      {
        dev: "॥ श्लोक ॥\nशान्तं शाश्वतमप्रमेयमनधं निर्वाणशान्तिप्रदं\nब्रह्माशम्भुफणीन्द्रसेव्यमनिशं वेदान्तवेद्यं विभुम् ।\nरामाख्यं जगदीश्वरं सुरगुरुं मायामनुष्यं हरिं\nवन्देऽहं करुणाकरं रघुवरं भूपालचूडामणिम् ॥१॥",
        en: "Shlok 1 — Invocation to Shri Ram, the eternal, peaceful, immeasurable, sinless Lord; bestower of nirvana, served by Brahma, Shambhu and Sheshnag; knowable through Vedanta; the all-pervading Hari who appears as a human through maya; the compassionate crest-jewel of kings.",
      },
      {
        dev: "नान्या स्पृहा रघुपते हृदयेऽस्मदीये\nसत्यं वदामि च भवानखिलान्तरात्मा ।\nभक्तिं प्रयच्छ रघुपुङ्गव निर्भरां मे\nकामादिदोषरहितं कुरु मानसं च ॥२॥",
        en: "Shlok 2 — O Raghupati, no other desire dwells in my heart; I speak the truth, for You are the inner Self of all. O best of the Raghus, grant me unwavering devotion and purify my mind of lust and other faults.",
      },
      {
        dev: "अतुलितबलधामं हेमशैलाभदेहं\nदनुजवनकृशानुं ज्ञानिनामग्रगण्यम् ।\nसकलगुणनिधानं वानराणामधीशं\nरघुपतिप्रियभक्तं वातजातं नमामि ॥३॥",
        en: "Shlok 3 — I bow to Hanuman, son of the wind: abode of immeasurable strength, body radiant as a golden mountain, fire to the forest of demons, foremost among the wise, treasure of all virtues, lord of the vanaras, and beloved devotee of Shri Ram.",
      },
      {
        dev: "जामवंत के बचन सुहाए । सुनि हनुमंत हृदय अति भाए ॥\nतब लगि मोहि परिखेहु तुम्ह भाई । सहि दुख कंद मूल फल खाई ॥१॥",
        en: "Chaupai 1 — Jambavant's stirring words pleased Hanuman's heart. He said, 'Brothers, await me here, sustaining yourselves on roots, fruits and tubers.'",
      },
      {
        dev: "जब लगि आवौं सीतहि देखी । होइहि काजु मोहि हरष बिसेषी ॥\nयह कहि नाइ सबन्हि कहँ माथा । चलेउ हरषि हियँ धरि रघुनाथा ॥२॥",
        en: "Chaupai 2 — 'Until I return having beheld Sita, only then will the mission be fulfilled and my joy complete.' Bowing to all, with Raghunath enshrined in his heart, he set forth in delight.",
      },
      {
        dev: "सिंधु तीर एक भूधर सुंदर । कौतुक कूदि चढ़ेउ ता ऊपर ॥\nबार बार रघुबीर सँभारी । तरकेउ पवनतनय बल भारी ॥३॥",
        en: "Chaupai 3 — On the seashore stood a beautiful mountain. With a playful leap he climbed it, and remembering Raghuvir again and again, the mighty son of the wind sprang forth.",
      },
      {
        dev: "जेहिं गिरि चरन देइ हनुमंता । चलेउ सो गा पाताल तुरंता ॥\nजिमि अमोघ रघुपति कर बाना । एही भाँति चलेउ हनुमाना ॥४॥",
        en: "Chaupai 4 — The mountain on which Hanuman set his foot sank at once into the netherworld. Like the unfailing arrow loosed by Raghupati's hand, even so flew Hanuman through the sky.",
      },
      {
        dev: "जलनिधि रघुपति दूत बिचारी । तैं मैनाक होहि श्रमहारी ॥५॥",
        en: "Chaupai 5 — Recognising him as Raghupati's messenger, the Ocean said to Mount Mainak, 'Be thou the reliever of his fatigue.'",
      },
      {
        dev: "दोहा — हनुमान तेहि परसा कर पुनि कीन्ह प्रनाम ।\nराम काजु कीन्हें बिनु मोहि कहाँ बिश्राम ॥६॥",
        en: "Doha 6 — Hanuman touched the mountain with his hand and bowed, saying, 'Where is rest for me until Ram's work is done?'",
      },
      {
        dev: "जात पवनसुत देवन्ह देखा । जानैं कहुँ बल बुद्धि बिसेषा ॥\nसुरसा नाम अहिन्ह कै माता । पठइन्हि आइ कही तेहिं बाता ॥७॥",
        en: "Chaupai 7 — The gods watched the wind-son's flight and, to test his strength and wisdom, sent Surasa, mother of serpents, who came and spoke to him.",
      },
      {
        dev: "आजु सुरन्ह मोहि दीन्ह अहारा । सुनत बचन कह पवनकुमारा ॥\nराम काजु करि फिरि मैं आवौं । सीता कइ सुधि प्रभुहि सुनावौं ॥८॥",
        en: "Chaupai 8 — 'Today the gods have given me my food.' Hearing this, the wind's son replied, 'Let me complete Ram's work, return, and bring tidings of Sita to my Lord;'",
      },
      {
        dev: "तब तव बदन पैठिहउँ आई । सत्य कहउँ मोहि जान दे माई ॥\nकवनेहुँ जतन देइ नहिं जाना । ग्रससि न मोहि कहेउ हनुमाना ॥९॥",
        en: "Chaupai 9 — '…then I will enter your mouth — I speak truly, Mother, let me pass.' When she would not yield by any means, Hanuman said, 'You shall not be able to swallow me.'",
      },
      {
        dev: "जोजन भरि तेहिं बदनु पसारा । कपि तनु कीन्ह दुगुन बिस्तारा ॥\nसोरह जोजन मुख तेहिं ठयऊ । तुरत पवनसुत बत्तिस भयऊ ॥१०॥",
        en: "Chaupai 10 — She stretched her mouth a yojana wide; the monkey doubled his form. She made it sixteen yojanas; instantly the wind's son grew to thirty-two.",
      },
      {
        dev: "जस जस सुरसा बदनु बढ़ावा । तासु दून कपि रूप देखावा ॥\nसत जोजन तेहिं आनन कीन्हा । अति लघु रूप पवनसुत लीन्हा ॥११॥",
        en: "Chaupai 11 — As Surasa enlarged her mouth, the monkey doubled his form in answer. When she opened it a hundred yojanas wide, the wind's son took a tiny form,",
      },
      {
        dev: "बदन पइठि पुनि बाहेर आवा । मागा बिदा ताहि सिरु नावा ॥\nमोहि सुरन्ह जेहि लागि पठावा । बुधि बल मरमु तोर मैं पावा ॥१२॥",
        en: "Chaupai 12 — entered her mouth, came back out, bowed and asked leave. She said, 'I have learned the secret of your wisdom and strength — for that the gods sent me.'",
      },
      {
        dev: "दोहा — राम काजु सबु करिहहु तुम्ह बल बुद्धि निधान ।\nआसिष देइ गई सो हरषि चलेउ हनुमान ॥१३॥",
        en: "Doha 13 — 'You will accomplish all of Ram's work, treasury of strength and wisdom.' Blessing him, she departed, and Hanuman gladly went on.",
      },
      {
        dev: "निसिचरि एक सिंधु महुँ रहई । करि माया नभु के खग गहई ॥\nजीव जंतु जे गगन उड़ाहीं । जल बिलोकि तिन्ह कै परिछाहीं ॥१४॥",
        en: "Chaupai 14 — A demoness lived in the sea, who by illusion seized the birds of the sky. Spotting in the water the shadows of creatures flying above,",
      },
      {
        dev: "गहइ छाहँ सक सो न उड़ाई । एहि बिधि सदा गगनचर खाई ॥\nसोइ छल हनुमान कहँ कीन्हा । तासु कपटु कपि तुरतहिं चीन्हा ॥१५॥",
        en: "Chaupai 15 — she would catch their shadows so they could not fly, and so devour the sky-dwellers. She tried the same trick on Hanuman, but he saw through her deceit at once.",
      },
      {
        dev: "ताहि मारि मारुतसुत बीरा । बारिधि पार गयउ मतिधीरा ॥\nतहाँ जाइ देखी बन सोभा । गुंजत चंचरीक मधु लोभा ॥१६॥",
        en: "Chaupai 16 — Slaying her, the brave wind-son crossed the ocean. There he beheld the splendour of a forest, where bees hummed, greedy for honey.",
      },
      {
        dev: "नाना तरु फल फूल सुहाए । खग मृग बृंद देखि मन भाए ॥\nसैल बिसाल देखि एक आगें । ता पर धाइ चढ़ेउ भय त्यागें ॥१७॥",
        en: "Chaupai 17 — Lovely trees bearing fruit and flower, flocks of birds and herds of deer delighted his heart. Seeing a great mountain ahead, he ran up it without fear.",
      },
      {
        dev: "उमा न कछु कपि कै अधिकाई । प्रभु प्रताप जो कालहि खाई ॥\nगिरि पर चढ़ि लंका तेहिं देखी । कहि न जाइ अति दुर्ग बिसेषी ॥१८॥",
        en: "Chaupai 18 — (Shiva to Uma:) It is no merit of the monkey alone — it is the Lord's glory, which devours even Time. From the mountain he saw Lanka, a fortress beyond description.",
      },
      {
        dev: "अति उतंग जलनिधि चहुँ पासा । कनक कोट कर परम प्रकासा ॥१९॥",
        en: "Chaupai 19 — Towering high, with the ocean on every side, its golden ramparts shone with brilliant light.",
      },
      {
        dev: "छंद — कनक कोट बिचित्र मनि कृत सुंदरायतना घना\nचउहट्ट हट्ट सुबट्ट बीथीं चारु पुर बहु बिधि बना ।\nगज बाजि खच्चर निकर पदचर रथ बरूथन्हि को गनै\nबहुरूप निसिचर जूथ अतिबल सेन बरनत नहिं बनै ॥२०॥",
        en: "Chand 20 — Golden ramparts set with rare gems, countless beautiful mansions, squares, markets, fine streets and lanes — the city was wrought in many ways. Who could number the elephants, horses, mules, foot-soldiers and chariot-troops? The host of demons in many forms is beyond description.",
      },
      {
        dev: "बन बाग उपबन बाटिका सर कूप बापीं सोहहीं\nनर नाग सुर गंधर्व कन्या रूप मुनि मन मोहहीं ।\nकहूँ माल देह बिसाल सैल समान अतिबल गर्जहीं\nनाना अखारेन्ह भिरहिं बहु बिधि एक एकन्ह तर्जहीं ॥२१॥",
        en: "Chand 21 — Forests, gardens, groves, orchards, lakes, wells and step-wells adorned the city. The beauty of human, naga, deva and gandharva maidens enchanted even sages. Mighty wrestlers with mountainous bodies roared, sparring in many arenas and challenging one another.",
      },
      {
        dev: "करि जतन भट कोटिन्ह बिकट तन नगर चहुँ दिसि रच्छहीं\nकहुँ महिष मानुष धेनु खर अज खल निसाचर भच्छहीं ।\nएहि लागि तुलसीदास इन्ह की कथा कछु एक है कही\nरघुबीर सर तीरथ सरीरन्ह त्यागि गति पैहहिं सही ॥२२॥",
        en: "Chand 22 — Crores of fierce-bodied warriors guarded the city on all sides; some wicked demons devoured buffaloes, men, cows, asses and goats. Tulsidas tells a little of their tale, for these very beings, leaving their bodies at the sacred ford of Raghuvir's arrow, will surely attain the supreme state.",
      },
      {
        dev: "दोहा — पुर रखवारे देखि बहु कपि मन कीन्ह बिचार ।\nअति लघु रूप धरौं निसि नगर करौं पइसार ॥२३॥",
        en: "Doha 23 — Seeing the many guards, Hanuman thought to himself: 'Let me take a very small form and enter the city by night.'",
      },
      {
        dev: "मसक समान रूप कपि धरी । लंकहि चलेउ सुमिरि नरहरी ॥\nनाम लंकिनी एक निसिचरी । सो कह चलेसि मोहि निंदरी ॥२४॥",
        en: "Chaupai 24 — Taking a form the size of a gnat, remembering Narahari, Hanuman went toward Lanka. A demoness named Lankini said, 'You walk past, defying me?'",
      },
      {
        dev: "जानेहि नहीं मरमु सठ मोरा । मोर अहार जहाँ लगि चोरा ॥\nमुठिका एक महा कपि हनी । रुधिर बमत धरनीं ढनमनी ॥२५॥",
        en: "Chaupai 25 — 'Fool, you do not know my secret — every thief is my food.' The great monkey struck her with one blow; vomiting blood, she rolled to the ground.",
      },
      {
        dev: "पुनि संभारि उठी सो लंका । जोरि पानि कर बिनय ससंका ॥\nजब रावनहि ब्रह्म बर दीन्हा । चलत बिरंचि कहा मोहि चीन्हा ॥२६॥",
        en: "Chaupai 26 — Recovering, Lankini rose, joined her palms in awe and prayed. 'When Brahma granted Ravan his boon, the Creator told me a sign as he departed:',",
      },
      {
        dev: "बिकल होसि तैं कपि कें मारे । तब जानेसु निसिचर संघारे ॥\nतात मोर अति पुन्य बहूता । देखेउँ नयन राम कर दूता ॥२७॥",
        en: "Chaupai 27 — '\"When you are stricken by a monkey's blow, know that the doom of the demons is at hand.\" O dear one, great is my merit that I have beheld with my own eyes the messenger of Ram.'",
      },
      {
        dev: "दोहा — तात स्वर्ग अपबर्ग सुख धरिअ तुला एक अंग ।\nतूल न ताहि सकल मिलि जो सुख लव सतसंग ॥२८॥",
        en: "Doha 28 — 'Dear one, place all the joys of heaven and liberation on one pan of the scales — even together they cannot equal a moment's joy of holy company.'",
      },
      {
        dev: "प्रबिसि नगर कीजे सब काजा । हृदयँ राखि कोसलपुर राजा ॥\nगरल सुधा रिपु करहिं मिताई । गोपद सिंधु अनल सितलाई ॥२९॥",
        en: "Chaupai 29 — 'Enter the city and accomplish all your work, holding the king of Kosala in your heart. Then poison turns to nectar, foes to friends, the ocean to a cow's hoof-print, and fire grows cool.'",
      },
      {
        dev: "गरुड़ सुमेरु रेनु सम ताही । राम कृपा करि चितवा जाही ॥\nअति लघु रूप धरेउ हनुमाना । पैठा नगर सुमिरि भगवाना ॥३०॥",
        en: "Chaupai 30 — 'For one upon whom Ram has cast a gracious glance, Garuda is as a mote of dust on Mount Sumeru.' Hanuman took a tiny form and entered the city, remembering the Lord.",
      },
      {
        dev: "मंदिर मंदिर प्रति करि सोधा । देखे जहँ तहँ अगनित जोधा ॥\nगयउ दसानन मंदिर माहीं । अति बिचित्र कहि जात सो नाहीं ॥३१॥",
        en: "Chaupai 31 — He searched mansion after mansion and saw countless warriors everywhere. He entered Ravan's palace, so wondrous it cannot be described.",
      },
      {
        dev: "सयन किएँ देखा कपि तेही । मंदिर महुँ न दीखि बैदेही ॥\nभवन एक पुनि दीख सुहावा । हरि मंदिर तहँ भिन्न बनावा ॥३२॥",
        en: "Chaupai 32 — He saw Ravan asleep, but Vaidehi was nowhere in that palace. Then he saw a lovely house, in which a separate shrine of Hari had been built.",
      },
      {
        dev: "दोहा — रामायुध अंकित गृह सोभा बरनि न जाइ ।\nनव तुलसिका बृंद तहँ देखि हरष कपिराइ ॥३३॥",
        en: "Doha 33 — A house adorned with Ram's weapons, of beauty beyond words; seeing fresh tulsi groves there, the lord of monkeys rejoiced.",
      },
      {
        dev: "लंका निसिचर निकर निवासा । इहाँ कहाँ सज्जन कर बासा ॥\nमन महुँ तरक करै कपि लागा । तेहीं समय बिभीषनु जागा ॥३४॥",
        en: "Chaupai 34 — 'Lanka is the abode of demon hordes — how can a saint dwell here?' As the monkey reasoned thus in his mind, at that very moment Vibhishan awoke.",
      },
      {
        dev: "राम राम तेहिं सुमिरन कीन्हा । हृदयँ हरष कपि सज्जन चीन्हा ॥\nएहि सन हठि करिहउँ पहिचानी । साधु ते होइ न कारज हानी ॥३५॥",
        en: "Chaupai 35 — He uttered 'Ram, Ram'; the monkey rejoiced, knowing him a saint. 'I will surely make his acquaintance — no harm to one's task ever comes from a holy man.'",
      },
      {
        dev: "बिप्र रूप धरि बचन सुनाए । सुनत बिभीषन उठि तहँ आए ॥\nकरि प्रनाम पूँछी कुसलाई । बिप्र कहहु निज कथा बुझाई ॥३६॥",
        en: "Chaupai 36 — Taking a brahmin's form, he called out. Hearing, Vibhishan rose, came to him, bowed, asked his welfare, and said, 'O brahmin, pray tell me your story.'",
      },
      {
        dev: "की तुम्ह हरि दासन्ह महँ कोई । मोरें हृदय प्रीति अति होई ॥\nकी तुम्ह रामु दीन अनुरागी । आयहु मोहि करन बड़भागी ॥३७॥",
        en: "Chaupai 37 — 'Are you one of Hari's servants? Great love wells in my heart for you. Or are you Ram Himself, lover of the lowly, come to make me blessed?'",
      },
      {
        dev: "दोहा — तब हनुमंत कही सब राम कथा निज नाम ।\nसुनत जुगल तन पुलक मन मगन सुमिरि गुन ग्राम ॥३८॥",
        en: "Doha 38 — Then Hanuman told all of Ram's story and his own name. Hearing it, both their bodies thrilled and their minds were absorbed in the recollection of Ram's virtues.",
      },
      {
        dev: "सुनहु पवनसुत रहनि हमारी । जिमि दसनन्हि महुँ जीभ बिचारी ॥\nतात कबहुँ मोहि जानि अनाथा । करिहहिं कृपा भानुकुल नाथा ॥३९॥",
        en: "Chaupai 39 — 'Hear, son of the wind, how I live here — like a poor tongue between teeth. O dear one, will the Lord of the solar race ever know me as helpless and show me grace?'",
      },
      {
        dev: "तामस तनु कछु साधन नाहीं । प्रीति न पद सरोज मन माहीं ॥\nअब मोहि भा भरोस हनुमंता । बिनु हरिकृपा मिलहिं नहिं संता ॥४०॥",
        en: "Chaupai 40 — 'My body is tamasic, I have done no spiritual practice, and my mind has no love for His lotus feet. Yet now, Hanuman, I am sure — for without Hari's grace, the saints are never met.'",
      },
      {
        dev: "जौं रघुबीर अनुग्रह कीन्हा । तौ तुम्ह मोहि दरसु हठि दीन्हा ॥\nसुनहु बिभीषन प्रभु कै रीती । करहिं सदा सेवक पर प्रीती ॥४१॥",
        en: "Chaupai 41 — 'Since Raghuvir has shown grace, you have come and given me His sight.' (Hanuman:) 'Hear, Vibhishan — such is the Lord's way: He ever loves His servants.'",
      },
      {
        dev: "कहहु कवन मैं परम कुलीना । कपि चंचल सबहीं बिधि हीना ॥\nप्रात लेइ जो नाम हमारा । तेहि दिन ताहि न मिलै अहारा ॥४२॥",
        en: "Chaupai 42 — 'Tell me, of what high lineage am I? Monkeys are restless and lacking in every way. Whoever takes our name at dawn finds no food that day.'",
      },
      {
        dev: "दोहा — अस मैं अधम सखा सुनु मोहू पर रघुबीर ।\nकीन्ही कृपा सुमिरि गुन भरे बिलोचन नीर ॥४३॥",
        en: "Doha 43 — 'Hear, friend — lowly though I am, even on me Raghuvir has shown grace.' Recalling His virtues, Hanuman's eyes filled with tears.",
      },
      {
        dev: "जानतहूँ अस स्वामि बिसारी । फिरहिं ते काहे न होहिं दुखारी ॥\nएहि बिधि कहत राम गुन ग्रामा । पावा अनिर्बाच्य बिश्रामा ॥४४॥",
        en: "Chaupai 44 — 'Those who knowingly forget such a Lord and wander — why should they not suffer?' Speaking thus of Ram's virtues, Hanuman attained an indescribable peace.",
      },
      {
        dev: "पुनि सब कथा बिभीषन कही । जेहि बिधि जनकसुता तहँ रही ॥\nतब हनुमंत कहा सुनु भ्राता । देखी चहउँ जानकी माता ॥४५॥",
        en: "Chaupai 45 — Vibhishan told all the tale of how Janak's daughter was kept there. Then Hanuman said, 'Hear, brother — I wish to behold mother Janaki.'",
      },
      {
        dev: "जुगुति बिभीषन सकल सुनाई । चलेउ पवनसुत बिदा कराई ॥\nकरि सोइ रूप गयउ पुनि तहवाँ । बन असोक सीता रह जहवाँ ॥४६॥",
        en: "Chaupai 46 — Vibhishan explained all the means; the wind-son took leave and set out. Resuming his tiny form, he went to the Ashok grove where Sita stayed.",
      },
      {
        dev: "देखि मनहि महुँ कीन्ह प्रनामा । बैठेहिं बीति जात निसि जामा ॥\nकृस तनु सीस जटा एक बेनी । जपति हृदयँ रघुपति गुन श्रेनी ॥४७॥",
        en: "Chaupai 47 — Beholding her, he bowed in his mind. The watches of the night passed as she sat — body wasted, hair in a single matted braid, silently telling Raghupati's virtues in her heart.",
      },
      {
        dev: "दोहा — निज पद नयन दिएँ मन राम पद कमल लीन ।\nपरम दुखी भा पवनसुत देखि जानकी दीन ॥४८॥",
        en: "Doha 48 — Her eyes were on her own feet, her mind absorbed in Ram's lotus feet. Seeing Janaki so wretched, the wind's son was deeply grieved.",
      },
      {
        dev: "तरु पल्लव महुँ रहा लुकाई । करइ बिचार करौं का भाई ॥\nतेहि अवसर रावनु तहँ आवा । संग नारि बहु किएँ बनावा ॥४९॥",
        en: "Chaupai 49 — He hid among the leaves and pondered, 'What shall I do, brother?' Just then Ravan came there, decked out, with many women in his train.",
      },
      {
        dev: "बहु बिधि खल सीतहि समुझावा । साम दान भय भेद देखावा ॥\nकह रावनु सुनु सुमुखि सयानी । मंदोदरी आदि सब रानी ॥५०॥",
        en: "Chaupai 50 — The wretch tried to win Sita over by every means — soft words, gifts, threats and division. Said Ravan, 'Hear, fair and wise one — Mandodari and all my queens',",
      },
      {
        dev: "तव अनुचरीं करउँ पन मोरा । एक बार बिलोकु मम ओरा ॥\nतृन धरि ओट कहति बैदेही । सुमिरि अवधपति परम सनेही ॥५१॥",
        en: "Chaupai 51 — '…I will make your handmaidens — this is my vow; only look once toward me.' Placing a blade of grass between them, Vaidehi spoke, remembering her most beloved Lord of Ayodhya:",
      },
      {
        dev: "सुनु दसमुख खद्योत प्रकासा । कबहुँ कि नलिनी करइ बिकासा ॥\nअस मन समुझु कहति जानकी । खल सुधि नहिं रघुबीर बान की ॥५२॥",
        en: "Chaupai 52 — 'Hear, ten-headed one — does the lotus ever bloom by the firefly's light? Take this to heart. O wretch, have you no thought of Raghuvir's arrow?'",
      },
      {
        dev: "सठ सूनें हरि आनेहि मोही । अधम निलज्ज लाज नहिं तोही ॥५३॥",
        en: "Chaupai 53 — 'Villain, you carried me off when I was alone — base and shameless one, have you no shame?'",
      },
      {
        dev: "दोहा — आपुहि सुनि खद्योत सम रामहि भानु समान ।\nपरुष बचन सुनि काढ़ि असि बोला अति खिसिआन ॥५४॥",
        en: "Doha 54 — Hearing himself called a firefly and Ram a sun — at her stinging words Ravan drew his sword and, blazing with rage, said:",
      },
      {
        dev: "सीता तैं मम कृत अपमाना । कटिहउँ तव सिर कठिन कृपाना ॥\nनाहिं त सपदि मानु मम बानी । सुमुखि होति न त जीवन हानी ॥५५॥",
        en: "Chaupai 55 — 'Sita, you have insulted me — with this cruel sword I will sever your head! Else heed my word at once, fair one, or your life is forfeit.'",
      },
      {
        dev: "स्याम सरोज दाम सम सुंदर । प्रभु भुज करि कर सम दसकंधर ॥\nसो भुज कंठ कि तव असि घोरा । सुनु सठ अस प्रवान पन मोरा ॥५६॥",
        en: "Chaupai 56 — 'Lovely as a garland of blue lotuses, mighty as an elephant's trunk — my Lord's arms; or your dreadful sword, ten-necked one — one of these shall touch my throat. Hear, fool, this is my firm vow.'",
      },
      {
        dev: "चंद्रहास हरु मम परितापं । रघुपति बिरह अनल संजातं ॥\nसीतल निसित बहसि बर धारा । कह सीता हरु मम दुख भारा ॥५७॥",
        en: "Chaupai 57 — 'O Chandrahas (sword), take away my torment, born of the fire of Raghupati's separation. Cool, sharp, with a fine flowing edge — Sita says, lift this burden of grief from me.'",
      },
      {
        dev: "सुनत बचन पुनि मारन धावा । मयतनयाँ कहि नीति बुझावा ॥\nकहेसि सकल निसिचरिन्ह बोलाई । सीतहि बहु बिधि त्रासहु जाई ॥५८॥",
        en: "Chaupai 58 — Hearing this he rushed to strike again, but Mandodari restrained him with wise words. He summoned all the demonesses: 'Go and frighten Sita in every way.'",
      },
      {
        dev: "मास दिवस महुँ कहा न माना । तौ मैं मारबि काढ़ि कृपाना ॥५९॥",
        en: "Chaupai 59 — 'If within a month she does not heed me, I will draw my sword and slay her.'",
      },
      {
        dev: "दोहा — भवन गयउ दसकंधर इहाँ पिसाचिनि बृंद ।\nसीतहि त्रास देखावहिं धरहिं रूप बहु मंद ॥६०॥",
        en: "Doha 60 — Ten-headed Ravan went to his palace; here the demoness troop, taking many ghastly forms, terrorised Sita.",
      },
      {
        dev: "त्रिजटा नाम राच्छसी एका । राम चरन रति निपुन बिबेका ॥\nसबन्हौ बोलि सुनाएसि सपना । सीतहि सेइ करहु हित अपना ॥६१॥",
        en: "Chaupai 61 — Among them was one demoness named Trijata, devoted to Ram's feet, of keen discernment. She called the others and told her dream: 'Serve Sita and so secure your own welfare.'",
      },
      {
        dev: "सपनें बानर लंका जारी । जातुधान सेना सब मारी ॥\nखर आरूढ़ नगन दससीसा । मुंडित सिर खंडित भुज बीसा ॥६२॥",
        en: "Chaupai 62 — 'In the dream a monkey burned Lanka and slew all the demon host. Naked Ravan rode an ass, his head shaven, his twenty arms cut off.',",
      },
      {
        dev: "एहि बिधि सो दच्छिन दिसि जाई । लंका मनहुँ बिभीषन पाई ॥\nनगर फिरी रघुबीर दोहाई । तब प्रभु सीता बोलि पठाई ॥६३॥",
        en: "Chaupai 63 — 'Thus he went to the southern quarter (of Yama), and Lanka, as it were, fell to Vibhishan. Raghuvir's proclamation rang through the city, and the Lord then sent for Sita.'",
      },
      {
        dev: "यह सपना मैं कहउँ पुकारी । होइहि सत्य गएँ दिन चारी ॥\nतासु बचन सुनि ते सब डरीं । जनकसुता के चरनन्हि परीं ॥६४॥",
        en: "Chaupai 64 — 'I tell this dream aloud — in but a few days it will come true.' Hearing her, all the demonesses were afraid and fell at Janak's daughter's feet.",
      },
      {
        dev: "दोहा — जहँ तहँ गईं सकल तब सीता कर मन सोच ।\nमास दिवस बीतें मोहि मारिहि निसिचर पोच ॥६५॥",
        en: "Doha 65 — They scattered hither and thither. Sita grieved within: 'When the month is past, the vile demon will slay me.'",
      },
      {
        dev: "त्रिजटा सन बोलीं कर जोरी । मातु बिपति संगिनि तैं मोरी ॥\nतजौं देह करु बेगि उपाई । दुसह बिरहु अब नहिं सहि जाई ॥६६॥",
        en: "Chaupai 66 — Folding her hands, she said to Trijata, 'Mother, you are my companion in calamity. Quickly contrive a way for me to leave this body — this unbearable separation can no longer be endured.'",
      },
      {
        dev: "आनि काठ रचु चिता बनाई । मातु अनल पुनि देहि लगाई ॥\nसत्य करहि मम प्रीति सयानी । सुनै को श्रवन सूल सम बानी ॥६७॥",
        en: "Chaupai 67 — 'Bring wood, build a pyre, and then, mother, set it alight. Make my love true, wise one — who can bear words that pierce the ears like a spear?'",
      },
      {
        dev: "सुनत बचन पद गहि समुझाएसि । प्रभु प्रताप बल सुजसु सुनाएसि ॥\nनिसि न अनल मिल सुनु सुकुमारी । अस कहि सो निज भवन सिधारी ॥६८॥",
        en: "Chaupai 68 — Hearing her, Trijata clasped Sita's feet and consoled her, recounting the Lord's glory, strength and fame. 'No fire is to be had at night, gentle one,' she said, and went home.",
      },
      {
        dev: "कह सीता बिधि भा प्रतिकूला । मिलिहि न पावक मिटिहि न सूला ॥\nदेखिअत प्रगट गगन अंगारा । अवनि न आवत एकउ तारा ॥६९॥",
        en: "Chaupai 69 — Sita said, 'Fate itself is against me — no fire, no end to my pain. I see embers gleaming in the sky, yet not one star falls to earth.'",
      },
      {
        dev: "पावकमय ससि स्रवत न आगी । मानहुँ मोहि जानि हतभागी ॥\nसुनहि बिनय मम बिटप असोका । सत्य नाम करु हरु मम सोका ॥७०॥",
        en: "Chaupai 70 — 'Even the moon, full of fire, sheds no flame, knowing me unfortunate. Hear my prayer, O Ashok tree — make your name true and take away my sorrow.'",
      },
      {
        dev: "नूतन किसलय अनल समाना । देहि अगिनि जनि करहि निदाना ॥\nदेखि परम बिरहाकुल सीता । सो छन कपिहि कल्प सम बीता ॥७१॥",
        en: "Chaupai 71 — 'Your fresh leaves are as fire — give me flame, do not refuse to end my woe.' Seeing Sita so utterly stricken with separation, that moment passed for the monkey like an age.",
      },
      {
        dev: "दोहा — कपि करि हृदयँ बिचार दीन्हि मुद्रिका डारि तब ।\nजनु असोक अंगार दीन्ह हरषि उठि कर गहेउ ॥७२॥",
        en: "Doha 72 — Reflecting in his heart, the monkey then dropped the ring. As if Ashok had given her an ember, she sprang up in joy and took it in her hand.",
      },
      {
        dev: "तब देखी मुद्रिका मनोहर । राम नाम अंकित अति सुंदर ॥\nचकित चितव मुदरी पहिचानी । हरष बिषाद हृदयँ अकुलानी ॥७३॥",
        en: "Chaupai 73 — She beheld the lovely ring, beautifully engraved with Ram's name. Astonished, she gazed and recognised it; her heart was tossed between joy and sorrow.",
      },
      {
        dev: "जीति को सकइ अजय रघुराई । माया तें असि रचि नहिं जाई ॥\nसीता मन बिचार कर नाना । मधुर बचन बोलेउ हनुमाना ॥७४॥",
        en: "Chaupai 74 — 'Who can defeat the unconquerable Raghurai? Such a ring cannot be fashioned by maya.' As Sita pondered in many ways, Hanuman spoke in sweet words.",
      },
      {
        dev: "रामचंद्र गुन बरनै लागा । सुनतहिं सीता कर दुख भागा ॥\nलागीं सुनैं श्रवन मन लाई । आदिहु तें सब कथा सुनाई ॥७५॥",
        en: "Chaupai 75 — He began to recount Ramchandra's virtues; the moment Sita heard, her sorrow fled. She listened with mind intent, as he told the whole story from the beginning.",
      },
      {
        dev: "श्रवनामृत जेहिं कथा सुहाई । कही सो प्रगट होति किन भाई ॥\nतब हनुमंत निकट चलि गयऊ । फिरि बैठीं मन बिसमय भयऊ ॥७६॥",
        en: "Chaupai 76 — 'Why does he who has spoken this nectar-sweet tale not appear, brother?' Then Hanuman came near; she turned away and sat, her mind filled with wonder.",
      },
      {
        dev: "राम दूत मैं मातु जानकी । सत्य सपथ करुनानिधान की ॥\nयह मुद्रिका मातु मैं आनी । दीन्हि राम तुम्ह कहँ सहिदानी ॥७७॥",
        en: "Chaupai 77 — 'Mother Janaki, I am Ram's messenger — true, by the oath of the ocean of compassion. This ring, mother, I have brought; Ram gave it as a token for you.'",
      },
      {
        dev: "नर बानरहि संग कहु कैसें । कही कथा भइ संगति जैसें ॥७८॥",
        en: "Chaupai 78 — 'Tell me, how came man and monkey to be companions?' He recounted the tale of their meeting.",
      },
      {
        dev: "दोहा — कपि के बचन सप्रेम सुनि उपजा मन बिस्वास ।\nजाना मन क्रम बचन यह कृपासिंधु कर दास ॥७९॥",
        en: "Doha 79 — Hearing the monkey's loving words, faith arose in her mind; she knew that in thought, deed and word he was a servant of the Ocean of Mercy.",
      },
      {
        dev: "हरिजन जानि प्रीति अति गाढ़ी । सजल नयन पुलकावलि बाढ़ी ॥\nबूड़त बिरह जलधि हनुमाना । भयहु तात मो कहुँ जलजाना ॥८०॥",
        en: "Chaupai 80 — Knowing him a devotee of Hari, deep love welled up; her eyes filled with tears, her body thrilled. 'Hanuman, sinking in the sea of separation, you have become my ship, dear one.'",
      },
      {
        dev: "अब कहु कुसल जाउँ बलिहारी । अनुज सहित सुख भवन खरारी ॥\nकोमलचित कृपाल रघुराई । कपि केहि हेतु धरी निठुराई ॥८१॥",
        en: "Chaupai 81 — 'Now tell the welfare — I am ever grateful — of the slayer of Khar, abode of joy, with His brother. Tender-hearted, gracious Raghurai — why, monkey, has He turned so stern?'",
      },
      {
        dev: "सहज बानि सेवक सुख दायक । कबहुँक सुरति करत रघुनायक ॥\nकबहुँ नयन मम सीतल ताता । होइहहिं निरखि स्याम मृदु गाता ॥८२॥",
        en: "Chaupai 82 — 'It is His nature to gladden His servants — does Raghunayak ever remember me? Will my eyes, dear one, ever be cooled by gazing on His dark, gentle form?'",
      },
      {
        dev: "बचनु न आव नयन भरे बारी । अहह नाथ हौं निपट बिसारी ॥\nदेखि परम बिरहाकुल सीता । बोला कपि मृदु बचन बिनीता ॥८३॥",
        en: "Chaupai 83 — Words failed her, her eyes brimmed with tears: 'Alas, Lord, You have utterly forgotten me!' Seeing Sita so overcome, the monkey spoke gentle, humble words:",
      },
      {
        dev: "मातु कुसल प्रभु अनुज समेता । तव दुख दुखी सुकृपा निकेता ॥\nजनि जननी मानहु जियँ ऊना । तुम्ह ते प्रेमु राम कें दूना ॥८४॥",
        en: "Chaupai 84 — 'Mother, the Lord and His brother are well; the abode of grace is grieved by your grief. Mother, do not feel small in your heart — Ram's love for you is twice your own.'",
      },
      {
        dev: "दोहा — रघुपति कर संदेसु अब सुनु जननी धरि धीर ।\nअस कहि कपि गदगद भयउ भरे बिलोचन नीर ॥८५॥",
        en: "Doha 85 — 'Now hear, mother, Raghupati's message — with patience.' So saying, the monkey's voice choked and his eyes filled with tears.",
      },
      {
        dev: "कहेउ राम बियोग तव सीता । मो कहुँ सकल भए बिपरीता ॥\nनव तरु किसलय मनहुँ कृसानू । कालनिसा सम निसि ससि भानू ॥८६॥",
        en: "Chaupai 86 — Ram had said, 'Sita, in your separation everything is turned against me — fresh leaves seem like fire; night is as the night of doom; the moon is as the sun.'",
      },
      {
        dev: "कुबलय बिपिन कुंत बन सरिसा । बारिद तपत तेल जनु बरिसा ॥\nजे हित रहे करत तेइ पीरा । उरग स्वास सम त्रिबिध समीरा ॥८७॥",
        en: "Chaupai 87 — 'Lotus thickets seem like forests of spears; clouds rain down as if boiling oil. What was once kind now wounds; the threefold breeze is as a serpent's breath.'",
      },
      {
        dev: "कहेहूँ तें कछु दुख घटि होई । काहि कहौं यह जान न कोई ॥\nतत्व प्रेम कर मम अरु तोरा । जानत प्रिया एकु मनु मोरा ॥८८॥",
        en: "Chaupai 88 — 'Even by telling, sorrow may lessen — but to whom can I tell? None knows it. The essence of the love between you and me, beloved, my mind alone knows.'",
      },
      {
        dev: "सो मनु सदा रहत तोहि पाहीं । जानु प्रीति रसु एतनेहि माहीं ॥\nप्रभु संदेसु सुनत बैदेही । मगन प्रेम तन सुधि नहिं तेही ॥८९॥",
        en: "Chaupai 89 — 'That mind ever stays with you — know the savour of our love in this alone.' Hearing the Lord's message, Vaidehi was lost in love and forgot her body.",
      },
      {
        dev: "कह कपि हृदयँ धीर धरु माता । सुमिरु राम सेवक सुखदाता ॥\nउर आनहु रघुपति प्रभुताई । सुनि मम बचन तजहु कदराई ॥९०॥",
        en: "Chaupai 90 — Said the monkey, 'Take heart, mother; remember Ram, the giver of joy to His servants. Bring Raghupati's lordly might to mind, and at my word cast off your fear.'",
      },
      {
        dev: "दोहा — निसिचर निकर पतंग सम रघुपति बान कृसानु ।\nजननी हृदयँ धीर धरु जरे निसाचर जानु ॥९१॥",
        en: "Doha 91 — 'The hosts of demons are as moths, Raghupati's arrows as fire. Mother, take heart — count the demons already burnt to ash.'",
      },
      {
        dev: "जौं रघुबीर होति सुधि पाई । करते नहिं बिलंबु रघुराई ॥\nराम बान रबि उएँ जानकी । तम बरूथ कहँ जातुधान की ॥९२॥",
        en: "Chaupai 92 — 'Had Raghuvir but learnt your whereabouts, Raghurai would brook no delay. Janaki, when the sun of Ram's arrows rises, where shall the demon-darkness stand?'",
      },
      {
        dev: "अबहिं मातु मैं जाउँ लवाई । प्रभु आयसु नहिं राम दोहाई ॥\nकछुक दिवस जननी धरु धीरा । कपिन्ह सहित अइहहिं रघुबीरा ॥९३॥",
        en: "Chaupai 93 — 'I could carry you away this very moment, mother — but, by Ram's name, I have not the Lord's command. Take heart for a few days more; Raghuvir will come with the monkey hosts.'",
      },
      {
        dev: "निसिचर मारि तोहि लै जैहहिं । तिहुँ पुर नारदादि जसु गैहहिं ॥\nहैं सुत कपि सब तुम्हहि समाना । जातुधान अति भट बलवाना ॥९४॥",
        en: "Chaupai 94 — 'Slaying the demons He will bear you home, and Narada and the sages will sing His praise in the three worlds.' (Sita:) 'Son, are all the monkeys like you, while the demons here are mighty warriors?'",
      },
      {
        dev: "मोरें हृदय परम संदेहा । सुनि कपि प्रगट कीन्ह निज देहा ॥\nकनक भूधराकार सरीरा । समर भयंकर अतिबल बीरा ॥९५॥",
        en: "Chaupai 95 — 'This is the great doubt in my heart.' Hearing this, the monkey revealed his true form — a body like a golden mountain, a hero of immense strength, terrible in battle.",
      },
      {
        dev: "सीता मन भरोस तब भयऊ । पुनि लघु रूप पवनसुत लयऊ ॥९६॥",
        en: "Chaupai 96 — Then assurance arose in Sita's heart, and the wind's son resumed his small form.",
      },
      {
        dev: "दोहा — सुनु माता साखामृग नहिं बल बुद्धि बिसाल ।\nप्रभु प्रताप तें गरुड़हि खाइ परम लघु ब्याल ॥९७॥",
        en: "Doha 97 — 'Hear, mother — monkeys are not great in strength or wit; but by the Lord's glory even the tiniest snake may devour Garuda.'",
      },
      {
        dev: "मन संतोष सुनत कपि बानी । भगति प्रताप तेज बल सानी ॥\nआसिष दीन्हि राम प्रिय जाना । होहु तात बल सील निधाना ॥९८॥",
        en: "Chaupai 98 — Hearing the monkey's words — steeped in devotion, glory, splendour and might — Sita was content. Knowing him dear to Ram, she gave her blessing: 'Be, dear son, a treasury of strength and virtue.'",
      },
      {
        dev: "अजर अमर गुननिधि सुत होहू । करहुँ बहुत रघुनायक छोहू ॥\nकरहुँ कृपा प्रभु अस सुनि काना । निर्भर प्रेम मगन हनुमाना ॥९९॥",
        en: "Chaupai 99 — 'Be undecaying, immortal, treasure of virtues, son; may Raghunayak grant you abundant grace.' Hearing 'May the Lord show grace,' Hanuman was utterly absorbed in love.",
      },
      {
        dev: "बार बार नाएसि पद सीसा । बोला बचन जोरि कर कीसा ॥\nअब कृतकृत्य भयउँ मैं माता । आसिष तव अमोघ बिख्याता ॥१००॥",
        en: "Doha/Chaupai 100 — Again and again he bowed his head at her feet; with folded hands the monkey said, 'Now, mother, I am fulfilled — your blessing is famed as never failing.'",
      },
      {
        dev: "सुनहु मातु मोहि अतिसय भूखा । लागि देखि सुंदर फल रूखा ॥\nसुनु सुत करहिं बिपिन रखवारी । परम सुभट रजनीचर भारी ॥१०१॥",
        en: "Chaupai 101 — 'Hear, mother — seeing these lovely fruit-laden trees I am very hungry.' (Sita:) 'Hear, son — mighty demon warriors guard this grove.' [Continued in the next section…]",
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
