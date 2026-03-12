// Pi Coin Converter with Multi-Currency & Crypto Support (Real-Time & Multi-Language)
const GCV_VALUE = 314159; // Global Consensus Value in USD
const DECIMAL_PLACES = 5;

// Translations for all supported languages
const TRANSLATIONS = {
    en: {
        subtitle: 'Convert between Pi Coin and USD',
        gcv: 'Global Consensus Value: $314,159 per π',
        labelPi: 'Pi Coin (π)',
        labelCurrency: 'Select Currency & Country (195+ Countries)',
        labelFiat: 'Amount',
        rateLabel: '1 π =',
        resultPiToFiat: 'π to',
        resultFiatToPi: 'to π:',
        resetBtn: 'Reset',
        footerText: 'The vision and mission of the Pi Network is to build the most popular and widely used cryptocurrency for daily services.'
    },
    es: {
        subtitle: 'Convertir entre Moneda Pi y USD',
        gcv: 'Valor de Consenso Global: $314,159 por π',
        labelPi: 'Moneda Pi (π)',
        labelCurrency: 'Seleccionar Moneda y País (195+ Países)',
        labelFiat: 'Cantidad',
        rateLabel: '1 π =',
        resultPiToFiat: 'π a',
        resultFiatToPi: 'a π:',
        resetBtn: 'Restablecer',
        footerText: 'La visión y misión de Pi Network es construir la criptomoneda más popular y ampliamente utilizada para servicios diarios.'
    },
    fr: {
        subtitle: 'Convertir entre Pi Coin et USD',
        gcv: 'Valeur de Consensus Global: $314,159 par π',
        labelPi: 'Monnaie Pi (π)',
        labelCurrency: 'Sélectionner la Devise et le Pays (195+ Pays)',
        labelFiat: 'Montant',
        rateLabel: '1 π =',
        resultPiToFiat: 'π en',
        resultFiatToPi: 'en π:',
        resetBtn: 'Réinitialiser',
        footerText: 'La vision et la mission du réseau Pi est de construire la cryptomonnaie la plus populaire et la plus largement utilisée pour les services quotidiens.'
    },
    de: {
        subtitle: 'Zwischen Pi Coin und USD konvertieren',
        gcv: 'Globaler Konsenswert: $314,159 pro π',
        labelPi: 'Pi Münze (π)',
        labelCurrency: 'Währung und Land wählen (195+ Länder)',
        labelFiat: 'Betrag',
        rateLabel: '1 π =',
        resultPiToFiat: 'π zu',
        resultFiatToPi: 'zu π:',
        resetBtn: 'Zurücksetzen',
        footerText: 'Die Vision und Mission von Pi Network ist es, die beliebteste und am weitesten verbreitete Kryptowährung für tägliche Dienste zu schaffen.'
    },
    zh: {
        subtitle: '在Pi币和美元之间转换',
        gcv: '全球共识价值：每π $314,159',
        labelPi: 'Pi币 (π)',
        labelCurrency: '选择货币和国家 (195+ 国家)',
        labelFiat: '金额',
        rateLabel: '1 π =',
        resultPiToFiat: 'π 转',
        resultFiatToPi: '转π:',
        resetBtn: '重置',
        footerText: 'Pi Network的愿景和使命是建立最受欢迎和最广泛使用的日常服务加密货币。'
    },
    ja: {
        subtitle: 'PiコインとUSDの間で変換',
        gcv: 'グローバルコンセンサス価値：π あたり $314,159',
        labelPi: 'Pi コイン (π)',
        labelCurrency: '通貨と国を選択 (195+ 国)',
        labelFiat: '金額',
        rateLabel: '1 π =',
        resultPiToFiat: 'π から',
        resultFiatToPi: 'から π:',
        resetBtn: 'リセット',
        footerText: 'Pi Network のビジョンとミッションは、日常のサービスに最も人気があり広く使用される暗号通貨を構築することです。'
    },
    ar: {
        subtitle: 'تحويل بين عملة Pi والدولار الأمريكي',
        gcv: 'قيمة الإجماع العالمي: $314,159 لكل π',
        labelPi: 'عملة Pi (π)',
        labelCurrency: 'اختر العملة والدولة (195+ دولة)',
        labelFiat: 'المبلغ',
        rateLabel: '1 π =',
        resultPiToFiat: 'π إلى',
        resultFiatToPi: 'إلى π:',
        resetBtn: 'إعادة تعيين',
        footerText: 'الرؤية والمهمة من شبكة Pi هي بناء أكثر العملات الرقمية شيوعا واستخداما على نطاق واسع للخدمات اليومية.'
    },
    hi: {
        subtitle: 'Pi सिक्का और USD के बीच कनवर्ट करें',
        gcv: 'वैश्विक सहमति मूल्य: प्रति π $314,159',
        labelPi: 'Pi सिक्का (π)',
        labelCurrency: 'मुद्रा और देश चुनें (195+ देश)',
        labelFiat: 'राशि',
        rateLabel: '1 π =',
        resultPiToFiat: 'π से',
        resultFiatToPi: 'से π:',
        resetBtn: 'रीसेट',
        footerText: 'Pi नेटवर्क की दृष्टि और मिशन दैनिक सेवाओं के लिए सबसे लोकप्रिय और व्यापक रूप से उपयोग की जाने वाली क्रिप्टोकरेंसी बनाना है।'
    },
    pt: {
        subtitle: 'Converter entre Pi Coin e USD',
        gcv: 'Valor de Consenso Global: $314.159 por π',
        labelPi: 'Moeda Pi (π)',
        labelCurrency: 'Selecione Moeda e País (195+ Países)',
        labelFiat: 'Valor',
        rateLabel: '1 π =',
        resultPiToFiat: 'π para',
        resultFiatToPi: 'para π:',
        resetBtn: 'Redefinir',
        footerText: 'A visão e missão da Pi Network é construir a criptomoeda mais popular e amplamente utilizada para serviços diários.'
    },
    ru: {
        subtitle: 'Конвертировать между Pi Coin и USD',
        gcv: 'Глобальная консенсусная стоимость: $314 159 за π',
        labelPi: 'Монета Pi (π)',
        labelCurrency: 'Выберите валюту и страну (195+ стран)',
        labelFiat: 'Сумма',
        rateLabel: '1 π =',
        resultPiToFiat: 'π в',
        resultFiatToPi: 'в π:',
        resetBtn: 'Сброс',
        footerText: 'Видение и миссия сети Pi - создать наиболее популярную и широко используемую криптовалюту для повседневных услуг.'
    },
    ko: {
        subtitle: 'Pi 코인과 USD 간 환전',
        gcv: '글로벌 컨센서스 가치: π당 $314,159',
        labelPi: 'Pi 코인 (π)',
        labelCurrency: '통화 및 국가 선택 (195+ 국가)',
        labelFiat: '금액',
        rateLabel: '1 π =',
        resultPiToFiat: 'π에서',
        resultFiatToPi: '에서 π:',
        resetBtn: '초기화',
        footerText: 'Pi Network의 비전과 미션은 일상 서비스를 위해 가장 인기있고 널리 사용되는 암호화폐를 구축하는 것입니다.'
    },
    it: {
        subtitle: 'Converti tra Pi Coin e USD',
        gcv: 'Valore di Consenso Globale: $314.159 per π',
        labelPi: 'Moneta Pi (π)',
        labelCurrency: 'Seleziona Valuta e Paese (195+ Paesi)',
        labelFiat: 'Importo',
        rateLabel: '1 π =',
        resultPiToFiat: 'π a',
        resultFiatToPi: 'a π:',
        resetBtn: 'Ripristina',
        footerText: 'La visione e la missione di Pi Network è costruire la criptovaluta più popolare e ampiamente utilizzata per i servizi quotidiani.'
    },
    nl: {
        subtitle: 'Converteer tussen Pi Coin en USD',
        gcv: 'Globale Consensuswaarde: $314.159 per π',
        labelPi: 'Pi Munt (π)',
        labelCurrency: 'Selecteer Munt en Land (195+ Landen)',
        labelFiat: 'Bedrag',
        rateLabel: '1 π =',
        resultPiToFiat: 'π naar',
        resultFiatToPi: 'naar π:',
        resetBtn: 'Opnieuw instellen',
        footerText: 'De visie en missie van Pi Network is om de meest populaire en veel gebruikte cryptocurrency voor dagelijkse diensten te bouwen.'
    },
    tr: {
        subtitle: 'Pi Coin ile USD Arasında Dönüştür',
        gcv: 'Küresel Fikir Birliği Değeri: π başına $314.159',
        labelPi: 'Pi Para (π)',
        labelCurrency: 'Para Birimi ve Ülke Seçin (195+ Ülke)',
        labelFiat: 'Miktar',
        rateLabel: '1 π =',
        resultPiToFiat: 'π —',
        resultFiatToPi: '— π:',
        resetBtn: 'Sıfırla',
        footerText: 'Pi Network\'in vizyonu ve misyonu, günlük hizmetler için en popüler ve yaygın olarak kullanılan kripto parayı oluşturmaktır.'
    },
    vi: {
        subtitle: 'Chuyển đổi giữa Pi Coin và USD',
        gcv: 'Giá trị đồng thuận toàn cầu: $314.159 mỗi π',
        labelPi: 'Tiền Pi (π)',
        labelCurrency: 'Chọn Tiền tệ và Quốc gia (195+ Quốc gia)',
        labelFiat: 'Số tiền',
        rateLabel: '1 π =',
        resultPiToFiat: 'π sang',
        resultFiatToPi: 'sang π:',
        resetBtn: 'Đặt lại',
        footerText: 'Tầm nhìn và sứ mệnh của Pi Network là xây dựng tiền điện tử phổ biến nhất và được sử dụng rộng rãi nhất cho các dịch vụ hàng ngày.'
    },
    sw: {
        subtitle: 'Badili kati ya Pi Coin na USD',
        gcv: 'Kiwango cha Fikira Global: $314,159 kwa π',
        labelPi: 'Sarafu ya Pi (π)',
        labelCurrency: 'Chagua Sarafu na Nchi (195+ Nchi)',
        labelFiat: 'Kiasi',
        rateLabel: '1 π =',
        resultPiToFiat: 'π kwa',
        resultFiatToPi: 'kwa π:',
        resetBtn: 'Rejesha',
        footerText: 'Maoni na ujumbe wa Pi Network ni kujenga sarafu ya dijitali inayotumiwa zaidi na inayotumiwa sana kwa huduma za kila siku.'
    }
};

let currentLanguage = 'en';

// Exchange rates to USD (1 USD = X currency) - API format, initial values
let EXCHANGE_RATES = {
    // POPULAR
    USD: 1.00,
    EUR: 0.91,
    GBP: 0.78,
    // AFRICA
    ZAR: 18.87,
    EGP: 30.30,
    NGN: 1470.59,
    KES: 128.21,
    GHS: 11.90,
    MAD: 10.00,
    TND: 3.13,
    MUR: 45.45,
    UGX: 3703.70,
    ETB: 52.63,
    ZWL: 333.33,
    BWP: 13.70,
    NAD: 18.18,
    MZN: 62.50,
    XOF: 588.24,
    XAF: 588.24,
    XPF: 107.53,
    RWF: 1176.47,
    TZS: 2564.10,
    ZMW: 20.00,
    // ASIA PACIFIC
    CNY: 7.14,
    JPY: 149.25,
    INR: 83.33,
    SGD: 1.35,
    AUD: 1.49,
    NZD: 1.64,
    KRW: 1315.79,
    THB: 35.71,
    IDR: 15873.02,
    MYR: 4.76,
    PHP: 55.56,
    VND: 25641.03,
    PKR: 278.74,
    BDT: 105.26,
    LKR: 303.03,
    NPR: 128.21,
    TWD: 32.26,
    HKD: 7.81,
    MMK: 2083.33,
    LAK: 21276.60,
    KHD: 4000.00,
    MNT: 2857.14,
    FJD: 2.22,
    PGK: 3.57,
    WST: 2.70,
    VUV: 117.65,
    SBD: 8.33,
    KGS: 86.96,
    KZT: 454.55,
    UZS: 11764.71,
    TJS: 10.64,
    TMT: 3.50,
    AFN: 71.43,
    MVR: 15.38,
    // CARIBBEAN & CENTRAL AMERICA
    CAD: 1.37,
    MXN: 14.71,
    DOP: 58.82,
    JMD: 156.25,
    TTD: 6.67,
    BZD: 2.00,
    CRC: 526.32,
    PAB: 1.00,
    HNL: 24.39,
    GTQ: 7.69,
    NIO: 35.71,
    SVC: 9.09,
    BAD: 1.00,
    BRD: 2.00,
    KYD: 0.82,
    BSD: 1.00,
    ANG: 1.79,
    AWG: 1.79,
    XCD: 2.70,
    // EUROPE
    CHF: 0.89,
    SEK: 10.64,
    NOK: 10.64,
    DKK: 6.80,
    ISK: 138.89,
    PLN: 4.00,
    CZK: 23.81,
    HRK: 6.80,
    RSD: 106.38,
    HUF: 370.37,
    RON: 4.55,
    BGN: 1.79,
    RUB: 90.91,
    UAH: 41.67,
    BYN: 3.23,
    GEL: 2.70,
    AMD: 384.62,
    AZN: 1.69,
    TRY: 31.25,
    MDL: 17.86,
    ALB: 105.26,
    MKD: 55.56,
    // MIDDLE EAST
    AED: 3.70,
    SAR: 3.70,
    KWD: 0.31,
    QAR: 3.70,
    BHD: 0.38,
    OMR: 0.38,
    JOD: 0.71,
    ILS: 3.70,
    LBP: 149253.73,
    SYP: 500000.00,
    IQD: 1298.70,
    IRR: 41666.67,
    YER: 250.00,
    // SOUTH AMERICA
    BRL: 5.00,
    ARS: 344.83,
    CLP: 833.33,
    COP: 4000.00,
    PEN: 3.70,
    VES: 35714.29,
    UYU: 38.46,
    PYG: 7142.86,
    BOB: 7.14,
    GYD: 208.33,
    SRD: 33.33,
    // CRYPTO prompts (will be updated by API)
    BTC: 42000,
    ETH: 2200,
    BNB: 600,
    XRP: 0.52,
    ADA: 0.68,
    SOL: 140,
    DOGE: 0.12,
    USDT: 1.00,
    USDC: 1.00,
    LTC: 85,
    LINK: 15,
    MATIC: 0.80,
    ATOM: 9.5,
    XLM: 0.12,
    APE: 4.5
};

// Currency symbols and display names
const CURRENCY_INFO = {
    USD: { symbol: '$', name: 'USD', country: 'United States', type: 'fiat' },
    EUR: { symbol: '€', name: 'EUR', country: 'European Union', type: 'fiat' },
    GBP: { symbol: '£', name: 'GBP', country: 'United Kingdom', type: 'fiat' },
    JPY: { symbol: '¥', name: 'JPY', country: 'Japan', type: 'fiat' },
    CNY: { symbol: '¥', name: 'CNY', country: 'China', type: 'fiat' },
    AUD: { symbol: '$', name: 'AUD', country: 'Australia', type: 'fiat' },
    INR: { symbol: '₹', name: 'INR', country: 'India', type: 'fiat' },
    SGD: { symbol: '$', name: 'SGD', country: 'Singapore', type: 'fiat' },
    HKD: { symbol: '$', name: 'HKD', country: 'Hong Kong', type: 'fiat' },
    THB: { symbol: '฿', name: 'THB', country: 'Thailand', type: 'fiat' },
    MYR: { symbol: 'RM', name: 'MYR', country: 'Malaysia', type: 'fiat' },
    PHP: { symbol: '₱', name: 'PHP', country: 'Philippines', type: 'fiat' },
    IDR: { symbol: 'Rp', name: 'IDR', country: 'Indonesia', type: 'fiat' },
    VND: { symbol: '₫', name: 'VND', country: 'Vietnam', type: 'fiat' },
    KRW: { symbol: '₩', name: 'KRW', country: 'South Korea', type: 'fiat' },
    TWD: { symbol: '$', name: 'TWD', country: 'Taiwan', type: 'fiat' },
    NZD: { symbol: '$', name: 'NZD', country: 'New Zealand', type: 'fiat' },
    PKR: { symbol: '₨', name: 'PKR', country: 'Pakistan', type: 'fiat' },
    BDT: { symbol: '৳', name: 'BDT', country: 'Bangladesh', type: 'fiat' },
    CHF: { symbol: '₣', name: 'CHF', country: 'Switzerland', type: 'fiat' },
    SEK: { symbol: 'kr', name: 'SEK', country: 'Sweden', type: 'fiat' },
    NOK: { symbol: 'kr', name: 'NOK', country: 'Norway', type: 'fiat' },
    DKK: { symbol: 'kr', name: 'DKK', country: 'Denmark', type: 'fiat' },
    PLN: { symbol: 'zł', name: 'PLN', country: 'Poland', type: 'fiat' },
    CZK: { symbol: 'Kč', name: 'CZK', country: 'Czech Republic', type: 'fiat' },
    RUB: { symbol: '₽', name: 'RUB', country: 'Russia', type: 'fiat' },
    TRY: { symbol: '₺', name: 'TRY', country: 'Turkey', type: 'fiat' },
    ZAR: { symbol: 'R', name: 'ZAR', country: 'South Africa', type: 'fiat' },
    CAD: { symbol: '$', name: 'CAD', country: 'Canada', type: 'fiat' },
    MXN: { symbol: '$', name: 'MXN', country: 'Mexico', type: 'fiat' },
    BRL: { symbol: 'R$', name: 'BRL', country: 'Brazil', type: 'fiat' },
    ARS: { symbol: '$', name: 'ARS', country: 'Argentina', type: 'fiat' },
    CLP: { symbol: '$', name: 'CLP', country: 'Chile', type: 'fiat' },
    COP: { symbol: '$', name: 'COP', country: 'Colombia', type: 'fiat' },
    AED: { symbol: 'د.إ', name: 'AED', country: 'United Arab Emirates', type: 'fiat' },
    SAR: { symbol: '﷼', name: 'SAR', country: 'Saudi Arabia', type: 'fiat' },
    KWD: { symbol: 'د.ك', name: 'KWD', country: 'Kuwait', type: 'fiat' },
    QAR: { symbol: '﷼', name: 'QAR', country: 'Qatar', type: 'fiat' },
    EGP: { symbol: '£', name: 'EGP', country: 'Egypt', type: 'fiat' },
    NGN: { symbol: '₦', name: 'NGN', country: 'Nigeria', type: 'fiat' },
    KES: { symbol: 'Sh', name: 'KES', country: 'Kenya', type: 'fiat' },
    LKR: { symbol: 'Rs', name: 'LKR', country: 'Sri Lanka', type: 'fiat' },
    NPR: { symbol: '₨', name: 'NPR', country: 'Nepal', type: 'fiat' },
    MMK: { symbol: 'K', name: 'MMK', country: 'Myanmar', type: 'fiat' },
    LAK: { symbol: '₭', name: 'LAK', country: 'Laos', type: 'fiat' },
    KHD: { symbol: '៛', name: 'KHD', country: 'Cambodia', type: 'fiat' },
    MNT: { symbol: '₮', name: 'MNT', country: 'Mongolia', type: 'fiat' },
    FJD: { symbol: '$', name: 'FJD', country: 'Fiji', type: 'fiat' },
    PGK: { symbol: 'K', name: 'PGK', country: 'Papua New Guinea', type: 'fiat' },
    ISK: { symbol: 'kr', name: 'ISK', country: 'Iceland', type: 'fiat' },
    HRK: { symbol: 'kn', name: 'HRK', country: 'Croatia', type: 'fiat' },
    RSD: { symbol: 'дин', name: 'RSD', country: 'Serbia', type: 'fiat' },
    HUF: { symbol: 'Ft', name: 'HUF', country: 'Hungary', type: 'fiat' },
    RON: { symbol: 'lei', name: 'RON', country: 'Romania', type: 'fiat' },
    BGN: { symbol: 'лв', name: 'BGN', country: 'Bulgaria', type: 'fiat' },
    UAH: { symbol: '₴', name: 'UAH', country: 'Ukraine', type: 'fiat' },
    BYN: { symbol: 'Br', name: 'BYN', country: 'Belarus', type: 'fiat' },
    GEL: { symbol: '₾', name: 'GEL', country: 'Georgia', type: 'fiat' },
    AMD: { symbol: '֏', name: 'AMD', country: 'Armenia', type: 'fiat' },
    AZN: { symbol: '₼', name: 'AZN', country: 'Azerbaijan', type: 'fiat' },
    PEN: { symbol: 'S/.', name: 'PEN', country: 'Peru', type: 'fiat' },
    VES: { symbol: 'Bs', name: 'VES', country: 'Venezuela', type: 'fiat' },
    UYU: { symbol: '$', name: 'UYU', country: 'Uruguay', type: 'fiat' },
    PYG: { symbol: '₲', name: 'PYG', country: 'Paraguay', type: 'fiat' },
    BOB: { symbol: 'Bs.', name: 'BOB', country: 'Bolivia', type: 'fiat' },
    CRC: { symbol: '₡', name: 'CRC', country: 'Costa Rica', type: 'fiat' },
    PAB: { symbol: 'B/.', name: 'PAB', country: 'Panama', type: 'fiat' },
    DOP: { symbol: 'RD$', name: 'DOP', country: 'Dominican Republic', type: 'fiat' },
    JMD: { symbol: 'J$', name: 'JMD', country: 'Jamaica', type: 'fiat' },
    TTD: { symbol: 'TT$', name: 'TTD', country: 'Trinidad and Tobago', type: 'fiat' },
    BHD: { symbol: '.د.ب', name: 'BHD', country: 'Bahrain', type: 'fiat' },
    OMR: { symbol: 'ر.ع.', name: 'OMR', country: 'Oman', type: 'fiat' },
    JOD: { symbol: 'د.ا', name: 'JOD', country: 'Jordan', type: 'fiat' },
    ILS: { symbol: '₪', name: 'ILS', country: 'Israel', type: 'fiat' },
    LBP: { symbol: 'ل.ل', name: 'LBP', country: 'Lebanon', type: 'fiat' },
    TND: { symbol: 'د.ت', name: 'TND', country: 'Tunisia', type: 'fiat' },
    MAD: { symbol: 'د.م.', name: 'MAD', country: 'Morocco', type: 'fiat' },
    GHS: { symbol: '₵', name: 'GHS', country: 'Ghana', type: 'fiat' },
    MUR: { symbol: '₨', name: 'MUR', country: 'Mauritius', type: 'fiat' },
    UGX: { symbol: 'Sh', name: 'UGX', country: 'Uganda', type: 'fiat' },
    ETB: { symbol: 'Br', name: 'ETB', country: 'Ethiopia', type: 'fiat' },
    ZWL: { symbol: '$', name: 'ZWL', country: 'Zimbabwe', type: 'fiat' },
    BWP: { symbol: 'P', name: 'BWP', country: 'Botswana', type: 'fiat' },
    NAD: { symbol: '$', name: 'NAD', country: 'Namibia', type: 'fiat' },
    MZN: { symbol: 'MT', name: 'MZN', country: 'Mozambique', type: 'fiat' },
    XOF: { symbol: 'Fr', name: 'XOF', country: 'West Africa', type: 'fiat' },
    XAF: { symbol: 'Fr', name: 'XAF', country: 'Central Africa', type: 'fiat' },
    XPF: { symbol: 'Fr', name: 'XPF', country: 'French Polynesia', type: 'fiat' },
    RWF: { symbol: 'FRw', name: 'RWF', country: 'Rwanda', type: 'fiat' },
    TZS: { symbol: 'Sh', name: 'TZS', country: 'Tanzania', type: 'fiat' },
    ZMW: { symbol: 'ZK', name: 'ZMW', country: 'Zambia', type: 'fiat' },
    WST: { symbol: 'T', name: 'WST', country: 'Samoa', type: 'fiat' },
    VUV: { symbol: 'Vt', name: 'VUV', country: 'Vanuatu', type: 'fiat' },
    SBD: { symbol: '$', name: 'SBD', country: 'Solomon Islands', type: 'fiat' },
    KGS: { symbol: 'с', name: 'KGS', country: 'Kyrgyzstan', type: 'fiat' },
    KZT: { symbol: '₸', name: 'KZT', country: 'Kazakhstan', type: 'fiat' },
    UZS: { symbol: "so'm", name: 'UZS', country: 'Uzbekistan', type: 'fiat' },
    TJS: { symbol: 'ЅМ', name: 'TJS', country: 'Tajikistan', type: 'fiat' },
    TMT: { symbol: 'm', name: 'TMT', country: 'Turkmenistan', type: 'fiat' },
    AFN: { symbol: '؋', name: 'AFN', country: 'Afghanistan', type: 'fiat' },
    MVR: { symbol: 'Rf', name: 'MVR', country: 'Maldives', type: 'fiat' },
    BZD: { symbol: '$', name: 'BZD', country: 'Belize', type: 'fiat' },
    HNL: { symbol: 'L', name: 'HNL', country: 'Honduras', type: 'fiat' },
    GTQ: { symbol: 'Q', name: 'GTQ', country: 'Guatemala', type: 'fiat' },
    NIO: { symbol: 'C$', name: 'NIO', country: 'Nicaragua', type: 'fiat' },
    SVC: { symbol: '$', name: 'SVC', country: 'El Salvador', type: 'fiat' },
    BAD: { symbol: '$', name: 'BAD', country: 'Bahamas', type: 'fiat' },
    BRD: { symbol: '$', name: 'BRD', country: 'Barbados', type: 'fiat' },
    KYD: { symbol: '$', name: 'KYD', country: 'Cayman Islands', type: 'fiat' },
    BSD: { symbol: '$', name: 'BSD', country: 'Bahamas', type: 'fiat' },
    ANG: { symbol: 'ƒ', name: 'ANG', country: 'Curacao & Sint Maarten', type: 'fiat' },
    AWG: { symbol: 'ƒ', name: 'AWG', country: 'Aruba', type: 'fiat' },
    XCD: { symbol: '$', name: 'XCD', country: 'East Caribbean', type: 'fiat' },
    MDL: { symbol: 'L', name: 'MDL', country: 'Moldova', type: 'fiat' },
    MNE: { symbol: '€', name: 'MNE', country: 'Montenegro', type: 'fiat' },
    ALB: { symbol: 'L', name: 'ALB', country: 'Albania', type: 'fiat' },
    MKD: { symbol: 'ден', name: 'MKD', country: 'North Macedonia', type: 'fiat' },
    BOH: { symbol: 'KM', name: 'BOH', country: 'Bosnia Herzegovina', type: 'fiat' },
    SYP: { symbol: 'ل.س', name: 'SYP', country: 'Syria', type: 'fiat' },
    IQD: { symbol: 'د.ع', name: 'IQD', country: 'Iraq', type: 'fiat' },
    IRR: { symbol: '﷼', name: 'IRR', country: 'Iran', type: 'fiat' },
    YER: { symbol: '﷼', name: 'YER', country: 'Yemen', type: 'fiat' },
    GYD: { symbol: '$', name: 'GYD', country: 'Guyana', type: 'fiat' },
    SRD: { symbol: '$', name: 'SRD', country: 'Suriname', type: 'fiat' },
    BTC: { symbol: '₿', name: 'BTC', country: 'Bitcoin', type: 'crypto' },
    ETH: { symbol: 'Ξ', name: 'ETH', country: 'Ethereum', type: 'crypto' },
    BNB: { symbol: 'BNB', name: 'BNB', country: 'Binance Coin', type: 'crypto' },
    XRP: { symbol: '✕', name: 'XRP', country: 'Ripple', type: 'crypto' },
    ADA: { symbol: '₳', name: 'ADA', country: 'Cardano', type: 'crypto' },
    SOL: { symbol: 'SOL', name: 'SOL', country: 'Solana', type: 'crypto' },
    DOGE: { symbol: 'Ð', name: 'DOGE', country: 'Dogecoin', type: 'crypto' },
    USDT: { symbol: 'USDT', name: 'USDT', country: 'Tether', type: 'crypto' },
    USDC: { symbol: 'USDC', name: 'USDC', country: 'USD Coin', type: 'crypto' },
    LTC: { symbol: 'Ł', name: 'LTC', country: 'Litecoin', type: 'crypto' },
    LINK: { symbol: 'LINK', name: 'LINK', country: 'Chainlink', type: 'crypto' },
    MATIC: { symbol: 'MATIC', name: 'MATIC', country: 'Polygon', type: 'crypto' },
    ATOM: { symbol: 'ATOM', name: 'ATOM', country: 'Cosmos', type: 'crypto' },
    XLM: { symbol: 'XLM', name: 'XLM', country: 'Stellar', type: 'crypto' },
    APE: { symbol: 'APE', name: 'APE', country: 'ApeCoin', type: 'crypto' }
};

// Crypto IDs for CoinGecko API
const CRYPTO_COINGECKO_IDS = {
    BTC: 'bitcoin',
    ETH: 'ethereum',
    BNB: 'binancecoin',
    XRP: 'ripple',
    ADA: 'cardano',
    SOL: 'solana',
    DOGE: 'dogecoin',
    USDT: 'tether',
    USDC: 'usd-coin',
    LTC: 'litecoin',
    LINK: 'chainlink',
    MATIC: 'matic-network',
    ATOM: 'cosmos',
    XLM: 'stellar',
    APE: 'apecoin'
};

// Get DOM elements
const piInput = document.getElementById('piInput');
const fiatInput = document.getElementById('fiatInput');
const currencySelect = document.getElementById('currencySelect');
const piToFiatResult = document.getElementById('piToFiat');
const fiatToPiResult = document.getElementById('fiatToPi');
const rateDisplay = document.getElementById('rateDisplay');
const currencyLabel = document.getElementById('currencyLabel');
const piToLabel = document.getElementById('piToLabel');
const fiatToLabel = document.getElementById('fiatToLabel');
const resetBtn = document.getElementById('resetBtn');
const languageSelect = document.getElementById('languageSelect');

let currentCurrency = 'USD';
let isUpdatingRate = false;

// Change language and update UI
function changeLanguage(lang) {
    currentLanguage = lang;
    const t = TRANSLATIONS[lang];
    
    // Update HTML elements with translations
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('gcv').innerHTML = `Global Consensus Value: <strong>$314,159 per π</strong>`;
    document.getElementById('label-pi').textContent = t.labelPi;
    document.getElementById('label-currency').textContent = t.labelCurrency;
    document.getElementById('label-fiat').textContent = t.labelFiat;
    document.getElementById('rate-label').textContent = t.rateLabel + ' ';
    document.getElementById('label-result-1').innerHTML = `π to <span id="piToLabel">${currentCurrency}</span>:`;
    document.getElementById('label-result-2').innerHTML = `<span id="fiatToLabel">${currentCurrency}</span> to π:`;
    document.getElementById('resetBtn').textContent = t.resetBtn;
    document.getElementById('footer-text').textContent = t.footerText;
    
    // Update GCV text if exists
    const gcvElement = document.getElementById('gcv');
    if (gcvElement) {
        if (lang === 'zh') {
            gcvElement.innerHTML = `全球共识价值：每π <strong>$314,159</strong>`;
        } else if (lang === 'ja') {
            gcvElement.innerHTML = `グローバルコンセンサス価値：π あたり <strong>$314,159</strong>`;
        } else if (lang === 'ar') {
            gcvElement.innerHTML = `قيمة الإجماع العالمي: لكل π <strong>$314,159</strong>`;
        } else if (lang === 'hi') {
            gcvElement.innerHTML = `वैश्विक सहमति मूल्य: प्रति π <strong>$314,159</strong>`;
        } else if (lang === 'pt') {
            gcvElement.innerHTML = `Valor de Consenso Global: <strong>$314.159</strong> por π`;
        } else if (lang === 'ru') {
            gcvElement.innerHTML = `Глобальная консенсусная стоимость: <strong>$314 159</strong> за π`;
        } else if (lang === 'ko') {
            gcvElement.innerHTML = `글로벌 컨센서스 가치: π당 <strong>$314,159</strong>`;
        } else if (lang === 'it') {
            gcvElement.innerHTML = `Valore di Consenso Globale: <strong>$314.159</strong> per π`;
        } else if (lang === 'nl') {
            gcvElement.innerHTML = `Globale Consensuswaarde: <strong>$314.159</strong> per π`;
        } else if (lang === 'tr') {
            gcvElement.innerHTML = `Küresel Fikir Birliği Değeri: π başına <strong>$314.159</strong>`;
        } else if (lang === 'sw') {
            gcvElement.innerHTML = `Kiwango cha Fikira Global: <strong>$314,159</strong> kwa π`;
        } else {
            gcvElement.innerHTML = `Global Consensus Value: <strong>$314,159 per π</strong>`;
        }
    }
}

// Fetch real-time crypto rates from CoinGecko API
async function updateCryptoRates() {
    try {
        const cryptoIds = Object.values(CRYPTO_COINGECKO_IDS).join(',');
        const response = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoIds}&vs_currencies=usd`
        );
        
        if (!response.ok) throw new Error('Failed to fetch crypto rates');
        
        const data = await response.json();
        
        // Update exchange rates with real data
        Object.keys(CRYPTO_COINGECKO_IDS).forEach(symbol => {
            const geckoId = CRYPTO_COINGECKO_IDS[symbol];
            if (data[geckoId] && data[geckoId].usd) {
                EXCHANGE_RATES[symbol] = data[geckoId].usd;
            }
        });
        
        // Update display if crypto is selected
        if (CURRENCY_INFO[currentCurrency].type === 'crypto') {
            updateExchangeRateDisplay();
            if (piInput.value || fiatInput.value) {
                updateConversion();
            }
        }
        
        console.log('✓ Crypto rates updated');
    } catch (error) {
        console.log('⚠ Using cached crypto rates');
    }
}

// Fetch fiat exchange rates
async function updateFiatRates() {
    try {
        // Using a free fiat exchange rate API
        const fiatCurrencies = Object.keys(EXCHANGE_RATES)
            .filter(c => CURRENCY_INFO[c].type === 'fiat' && c !== 'USD')
            .join(',');
        
        const response = await fetch(
            `https://api.exchangerate-api.com/v4/latest/USD`
        );
        
        if (!response.ok) throw new Error('Failed to fetch fiat rates');
        
        const data = await response.json();
        
        // Update fiat exchange rates (API returns rate as: 1 USD = rate * currency)
        Object.keys(data.rates).forEach(currency => {
            if (EXCHANGE_RATES.hasOwnProperty(currency)) {
                EXCHANGE_RATES[currency] = data.rates[currency]; // Store direct API rate
            }
        });
        
        console.log('✓ Fiat rates updated');
    } catch (error) {
        console.log('⚠ Using cached fiat rates');
    }
}

// Update both fiat and crypto rates
async function updateAllRates() {
    if (isUpdatingRate) return;
    isUpdatingRate = true;
    
    await Promise.all([updateFiatRates(), updateCryptoRates()]);
    
    isUpdatingRate = false;
}

// Format currency based on selected currency
function formatCurrency(amount, currency) {
    const info = CURRENCY_INFO[currency];
    const rate = EXCHANGE_RATES[currency] || 1;
    const convertedAmount = amount * rate;
    
    // Format large numbers with thousands separators
    if (currency === 'JPY' || currency === 'KRW' || currency === 'VND' || currency === 'IDR' || currency === 'CLP') {
        return info.symbol + ' ' + Math.round(convertedAmount).toLocaleString();
    } else if (currency === 'BTC' || currency === 'ETH') {
        return info.symbol + ' ' + convertedAmount.toFixed(8);
    } else if (CURRENCY_INFO[currency].type === 'crypto') {
        return info.symbol + ' ' + convertedAmount.toFixed(6);
    }
    
    return info.symbol + ' ' + convertedAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Format Pi amount
function formatPi(amount) {
    return amount.toFixed(DECIMAL_PLACES) + ' π';
}

// Update conversion results
function updateConversion() {
    const piAmount = parseFloat(piInput.value);
    const fiatAmount = parseFloat(fiatInput.value);
    const rate = EXCHANGE_RATES[currentCurrency] || 1;
    
    if (!isNaN(piAmount) && piAmount >= 0) {
        // Convert Pi to selected currency
        const usdAmount = piAmount * GCV_VALUE;
        const convertedFiat = usdAmount * rate;
        
        const info = CURRENCY_INFO[currentCurrency];
        if (currentCurrency === 'JPY' || currentCurrency === 'KRW' || currentCurrency === 'VND' || currentCurrency === 'IDR' || currentCurrency === 'CLP') {
            piToFiatResult.textContent = info.symbol + ' ' + Math.round(convertedFiat).toLocaleString();
        } else if (currentCurrency === 'BTC' || currentCurrency === 'ETH') {
            piToFiatResult.textContent = info.symbol + ' ' + convertedFiat.toFixed(8);
        } else if (CURRENCY_INFO[currentCurrency].type === 'crypto') {
            piToFiatResult.textContent = info.symbol + ' ' + convertedFiat.toFixed(6);
        } else {
            piToFiatResult.textContent = info.symbol + ' ' + convertedFiat.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        fiatInput.value = convertedFiat.toFixed(8);
    } else if (piAmount === '' && fiatAmount === '') {
        const info = CURRENCY_INFO[currentCurrency];
        if (info.type === 'crypto') {
            piToFiatResult.textContent = info.symbol + ' 0.00';
        } else {
            piToFiatResult.textContent = info.symbol + ' 0.00';
        }
    }
    
    if (!isNaN(fiatAmount) && fiatAmount >= 0) {
        // Convert fiat currency to Pi
        const usdAmount = fiatAmount / rate;
        const convertedPi = usdAmount / GCV_VALUE;
        fiatToPiResult.textContent = formatPi(convertedPi);
        piInput.value = convertedPi.toFixed(8);
    } else if (fiatAmount === '' && piAmount === '') {
        fiatToPiResult.textContent = '0.00000 π';
    }
}

// Update exchange rate display
function updateExchangeRateDisplay() {
    const usdAmount = GCV_VALUE;
    const fiatAmount = usdAmount * (EXCHANGE_RATES[currentCurrency] || 1);
    const info = CURRENCY_INFO[currentCurrency];
    
    if (currentCurrency === 'JPY' || currentCurrency === 'KRW' || currentCurrency === 'VND' || currentCurrency === 'IDR' || currentCurrency === 'CLP') {
        rateDisplay.textContent = info.symbol + ' ' + Math.round(fiatAmount).toLocaleString();
    } else if (currentCurrency === 'BTC' || currentCurrency === 'ETH') {
        rateDisplay.textContent = info.symbol + ' ' + fiatAmount.toFixed(8);
    } else if (info.type === 'crypto') {
        rateDisplay.textContent = info.symbol + ' ' + fiatAmount.toFixed(6);
    } else {
        rateDisplay.textContent = info.symbol + ' ' + fiatAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

// Event listeners for input
piInput.addEventListener('input', (e) => {
    if (e.target.value === '') {
        fiatInput.value = '';
        const info = CURRENCY_INFO[currentCurrency];
        piToFiatResult.textContent = info.symbol + ' 0.00';
        fiatToPiResult.textContent = '0.00000 π';
    } else {
        fiatInput.value = '';
        updateConversion();
    }
});

fiatInput.addEventListener('input', (e) => {
    if (e.target.value === '') {
        piInput.value = '';
        const info = CURRENCY_INFO[currentCurrency];
        piToFiatResult.textContent = info.symbol + ' 0.00';
        fiatToPiResult.textContent = '0.00000 π';
    } else {
        piInput.value = '';
        updateConversion();
    }
});

// Currency selection change
currencySelect.addEventListener('change', (e) => {
    currentCurrency = e.target.value;
    const info = CURRENCY_INFO[currentCurrency];
    
    // Update labels
    currencyLabel.textContent = currentCurrency;
    piToLabel.textContent = currentCurrency;
    fiatToLabel.textContent = currentCurrency;
    
    // Update rate display
    updateExchangeRateDisplay();
    
    // Clear inputs and results
    piInput.value = '';
    fiatInput.value = '';
    piToFiatResult.textContent = info.symbol + ' 0.00';
    fiatToPiResult.textContent = '0.00000 π';
});

// Reset button
resetBtn.addEventListener('click', () => {
    piInput.value = '';
    fiatInput.value = '';
    const info = CURRENCY_INFO[currentCurrency];
    piToFiatResult.textContent = info.symbol + ' 0.00';
    fiatToPiResult.textContent = '0.00000 π';
    piInput.focus();
});

// Initialize
updateExchangeRateDisplay();

// Fetch initial rates
updateAllRates();

// Update rates every 30 seconds for real-time data
setInterval(updateAllRates, 30000);

// Language switcher event listener
languageSelect.addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});
