export const formulaTable = {
    // ALFABETISK SORTERT

    // AREAL
    "dekar-til-hektar": {
        formula: (x) => x * 0.1,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "dekar-til-kvadratmeter": {
        formula: (x) => x * 1000,
        decimals: 3,
        noZero: true,
        neg: false
    },
    "hektar-til-dekar": {
        formula: (x) => x * 10,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "hektar-til-kvadratmeter": {
        formula: (x) => x * 10000,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kvadratmeter-til-dekar": {
        formula: (x) => x * 0.001,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kvadratmeter-til-hektar": {
        formula: (x) => x * 0.0001,
        decimals: 4, // Må være minst 4 for å unngå vitenskapelig notasjon ved 1 som input
        noZero: false,
        neg: false
    },
    "kvadratmeter-til-sqft": {
        formula: (x) => x * 10.7639,
        decimals: 3,
        noZero: true,
        neg: false
    },
    "sqft-til-kvadratmeter": {
        formula: (x) => x * 0.09290313,
        decimals: 3,
        noZero: false,
        neg: false
    },

    // BEVEGELSE
    "kmt-til-knop": {
        formula: (x) => x * 0.5399568,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kmt-til-minkm": {
        formula: (x) => 60 / x,
        decimals: 3,
        noZero: true,
        neg: false
    },
    "kmt-til-mph": {
        formula: (x) => x * 0.621371192,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kmt-til-ms": {
        formula: (x) => x / 3.6,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "knop-til-kmt": {
        formula: (x) => x * 1.852,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "knop-til-ms": {
        formula: (x) => x * 0.514444,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "minkm-til-kmt": {
        formula: (x) => 60 / x,
        decimals: 3,
        noZero: true,
        neg: false
    },
    "mph-til-kmt": {
        formula: (x) => x * 1.609344,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "ms-til-kmt": {
        formula: (x) => x * 3.6,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "ms-til-knop": {
        formula: (x) => x * 1.943844,
        decimals: 3,
        noZero: false,
        neg: false
    },

    // DIVERSE
    "hundear": {
        formula: (x) => 16 * Math.log(x) + 31,
        decimals: 0,
        noZero: true,
        neg: false
    },

    // ELEKTRISITET
    "ampere-og-volt-til-watt": {
        formula: (x, y) => x * y,
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "W",
        prefix: "Effekt:"
    },
    "ohm-og-ampere-til-volt": {
        formula: (x, y) => x * y,
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "V",
        prefix: "Spenning:"
    },
    "volt-og-ampere-til-ohm": {
        formula: (x, y) => x / y,
        decimals: 3,
        noZero: true,
        neg: false,
        unit: "Ω",
        prefix: "Resistans:"
    },
    "volt-og-ohm-til-ampere": {
        formula: (x, y) => x / y,
        decimals: 3,
        noZero: true,
        neg: false,
        unit: "A",
        prefix: "Strøm:"
    },

    // ELEKTROMAGNETISME
    "bolgekalkulator": {
        isStandalone: true
    },
    "magnetisk-fluks-kalkulator": {
        formula: (x, y, z) => {
            if (Math.abs(z % 180) === 90) {
                return 0;
            };
            return x * y * Math.cos(z * Math.PI / 180);
        },
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "Wb",
        prefix: "Fluks:"
    },
    "stefan-boltzmann-kalkulator": {
        isStandalone: true
    },
    "takvinkelkalkulator": {
        isStandalone: true
    },
    "svingninger-og-tid-til-frekvens": {
        formula: (x, y) => x / y,
        decimals: 3,
        noZero: true,
        neg: false,
        unit: "Hz",
        prefix: "Frekvens:"
    },
    "svingninger-og-tid-til-periode": {
        formula: (x, y) => y / x,
        decimals: 3,
        noZero: true,
        neg: false,
        unit: "s",
        prefix: "Periode:"
    },
    "wiens-forskyvningslov-kalkulator": {
        isStandalone: true
    },

    // GEOMETRI
    "areal-av-kule": {
        formula: (x) => 4 * Math.PI * x**2,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "areal-av-sirkel": {
        formula: (x) => Math.PI * x**2,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "areal-av-sylinder": {
        formula: (x, y) => 2 * Math.PI * x**2 + 2 * Math.PI * x * y,
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "",
        prefix: "Areal:"
    },
    "finn-hypotenusen": {
        formula: (x, y) => Math.sqrt(x**2 + y**2),
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "",
        prefix: "Hypotenus:"
    },
    "finn-katet": {
        isStandalone: true
    },
    "omkrets-av-sirkel": {
        formula: (x) => 2 * Math.PI * x,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "takvinkelkalkulator": {
        isStandalone: true
    },
    "volum-av-kjegle": {
        formula: (x, y) => (Math.PI * x**2 * y) / 3,
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "",
        prefix: "Volum:"
    },
    "volum-av-kule": {
        formula: (x) => (4 / 3) * Math.PI * x**3,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "volum-av-sylinder": {
        formula: (x, y) => Math.PI * x**2 * y,
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "",
        prefix: "Volum:"
    },

    // HELSE
    "bmi-kalkulator": {
        formula: (x, y) => y / ((x / 100)**2),
        decimals: 1,
        noZero: true,
        neg: false,
        unit: "",
        prefix: "BMI:"
    },
    "kcal-til-kilojoule": {
        formula: (x) => x * 4.184,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kilojoule-til-kcal": {
        formula: (x) => x * 0.239,
        decimals: 3,
        noZero: false,
        neg: false
    },

    // KRAFT
    "finn-glidefriksjon": {
        formula: (x, y) => x * y,
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "N",
        prefix: "Friksjon:"
    },
    "finn-oppdrift": {
        formula: (x, y, z) => x*y*z,
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "N",
        prefix: "Oppdrift:"
    },
    "finn-tyngden": {
        formula: (x, y) => x * y,
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "N",
        prefix: "Tyngdekraft:"
    },

    // LENGDE
    "cm-til-fot": {
        formula: (x) => x * 0.032808399,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "cm-til-tommer": {
        formula: (x) => x * 0.393700787,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "fot-til-cm": {
        formula: (x) => x * 30.48,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "fot-til-meter": {
        formula: (x) => x * 0.3048,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kilometer-til-mil": {
        formula: (x) => x / 10,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kilometer-til-miles": {
        formula: (x) => x * 0.621371,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "km-til-nautiske-mil": {
        formula: (x) => x * 0.539956,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "meter-til-fot": {
        formula: (x) => x * 3.2808399,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "meter-til-yard": {
        formula: (x) => x * 1.0936133,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "mil-til-kilometer": {
        formula: (x) => x * 10,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "miles-til-kilometer": {
        formula: (x) => x * 1.609344,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "mm-til-tommer": {
        formula: (x) => x * 0.03937007,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "nautiske-mil-til-km": {
        formula: (x) => x * 1.852,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "tommer-til-cm": {
        formula: (x) => x * 2.54,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "tommer-til-mm": {
        formula: (x) => x * 25.4,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "yard-til-meter": {
        formula: (x) => x * 0.9144,
        decimals: 3,
        noZero: false,
        neg: false
    },

    // MAT
    "mel-dl-til-gram": {
        formula: (x) => x * 60,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "mel-gram-til-dl": {
        formula: (x) => x / 60,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "smor-dl-til-gram": {
        formula: (x) => x * 85,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "smor-gram-til-dl": {
        formula: (x) => x / 85,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "stekeovn-til-airfryer-temp": {
        formula: (x) => x - 20,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "stekeovn-til-airfryer-tid": {
        formula: (x) => x * 0.8,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "sukker-dl-til-gram": {
        formula: (x) => x * 90,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "sukker-gram-til-dl": {
        formula: (x) => x / 90,
        decimals: 3,
        noZero: false,
        neg: false
    },

    // MATEMATIKK
    "finn-kvadratroten": {
        formula: (x) => Math.sqrt(x),
        decimals: 3,
        noZero: false,
        neg: false
    },
    "finn-tredjeroten": {
        formula: (x) => Math.cbrt(x),
        decimals: 3,
        noZero: false,
        neg: false
    },

    // MEKANIKK OG ARBEID
    "beregn-arbeid": {
        formula: (x, y, z) => {
            if (Math.abs(z % 180) === 90) {
                return 0;
            };
            return x * y * Math.cos(z * Math.PI / 180);
        },
        decimals: 3,
        unit: "J",
        prefix: "Arbeid:"
    },
    "finn-kinetisk-energi": {
        formula: (x, y) => 0.5 * x * y**2,
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "J",
        prefix: "Energi:"
    },
    "finn-potensiell-energi": {
        formula: (x, y, z) => x * y * z,
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "J",
        prefix: "Energi:"
    },
    "hestekrefter-til-kilowatt": {
        formula: (x) => x * 0.7355,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kilowatt-til-hestekrefter": {
        formula: (x) => x * 1.35962,
        decimals: 3,
        noZero: false,
        neg: false
    },

    // OKONOMI
    "boliglanskalkulator": {
        isStandalone: true
    },
    "investeringskalkulator": {
        isStandalone: true
    },

    // PROSENT
    "finn-forprisen": {
        isStandalone: true
    },
    "finn-hele-tallet-fra-prosenten": {
        formula: (x, y) => x / (y / 100),
        decimals: 3,
        noZero: true,
        neg: false,
        unit: "",
        prefix: "Det hele tallet:"
    },
    "finn-prosentandelen": {
        formula: (x, y) => (x * y)/100,
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "",
        prefix: "Andel:"
    },
    "finn-prosenten": {
        formula: (x, y) => (x / y)*100,
        decimals: 3,
        noZero: true,
        neg: false,
        unit: "%",
        prefix: "Prosenten:"
    },
    "finn-prosentnedgang": {
        isStandalone: true
    },
    "finn-prosentnoppgang": {
        isStandalone: true
    },

    // STATISTIKK
    "gjennomsnittskalkulator": {
        isStandalone: true
    },
    "mediankalkulator": {
        isStandalone: true
    },
    "standardavvikkalkulator": {
        isStandalone: true
    },

    // STROM OG ENERGI
    "beregn-kwh-fra-kilowatt": {
        formula: (x, y) => x * y,
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "kWh",
        prefix: "Resultat:"
    },
    "beregn-kwh-fra-watt": {
        formula: (x, y) => (x * y) / 1000,
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "kWh",
        prefix: "Resultat:"
    },
    "beregn-stromkostnad": {
        formula: (x, y) => x * y,
        decimals: 3,
        noZero: false,
        neg: false,
        unit: "kr",
        prefix: "Kostnad:"
    },
    "joule-til-wattimer": {
        formula: (x) => x / 3600,
        decimals: 4, // Må være minst 4 for å unngå vitenskapelig notasjon ved 1 som input
        noZero: false,
        neg: false
    },
    "kwh-til-megajoule": {
        formula: (x) => x * 3.6,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "megajoule-til-kwh": {
        formula: (x) => x / 3.6,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "wattimer-til-joule": {
        formula: (x) => x * 3600,
        decimals: 3,
        noZero: false,
        neg: false
    },

    // TEMPERATUR
    "celsius-til-fahrenheit": {
        formula: (x) => x * (9 / 5) + 32,
        decimals: 3,
        noZero: false,
        neg: true
    },
    "celsius-til-kelvin": {
        formula: (x) => x + 273.15,
        decimals: 3,
        noZero: false,
        neg: true
    },
    "fahrenheit-til-celsius": {
        formula: (x) => (5 / 9) * (x - 32),
        decimals: 3,
        noZero: false,
        neg: true
    },
    "fahrenheit-til-kelvin": {
        formula: (x) => ((x - 32) / 1.8) + 273.15,
        decimals: 3,
        noZero: false,
        neg: true
    },
    "kelvin-til-celsius": {
        formula: (x) => x - 273.15,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kelvin-til-fahrenheit": {
        formula: (x) => ((x - 273.15) * 1.8) + 32,
        decimals: 3,
        noZero: false,
        neg: false
    },

    // TID
    "dager-til-timer": {
        formula: (x) => x * 24,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "minutter-til-sekunder": {
        formula: (x) => x * 60,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "minutter-til-timer": {
        formula: (x) => x / 60,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "sekunder-til-minutter": {
        formula: (x) => x / 60,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "sekunder-til-timer": {
        formula: (x) => x / 3600,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "timer-til-dager": {
        formula: (x) => x / 24,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "timer-til-minutter": {
        formula: (x) => x * 60,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "timer-til-sekunder": {
        formula: (x) => x * 3600,
        decimals: 3,
        noZero: false,
        neg: false
    },

    // TRYKK
    "bar-til-kpa": {
        formula: (x) => x * 100,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "bar-til-mpa": {
        formula: (x) => x / 10,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "bar-til-psi": {
        formula: (x) => x * 14.503773773,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kpa-til-bar": {
        formula: (x) => x * 0.01,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kpa-til-psi": {
        formula: (x) => x * 0.145037738,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "mpa-til-bar": {
        formula: (x) => x * 10,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "psi-til-bar": {
        formula: (x) => x * 0.0689475729,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "psi-til-kpa": {
        formula: (x) => x * 6.89475729,
        decimals: 3,
        noZero: false,
        neg: false
    },

    // VEKT
    "gram-til-milligram": {
        formula: (x) => x * 1000,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "gram-til-ounces": {
        formula: (x) => x * 0.0352739619,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "gram-til-troy-ounce": {
        formula: (x) => x * 0.0321507466,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kilogram-til-ounces": {
        formula: (x) => x * 35.2739619,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kilogram-til-pund": {
        formula: (x) => x * 2.20462262,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kilogram-til-short-ton": {
        formula: (x) => x * 0.001102311,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kilogram-til-stones": {
        formula: (x) => x * 0.157473044,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "milligram-til-gram": {
        formula: (x) => x / 1000,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "ounces-til-gram": {
        formula: (x) => x * 28.3495231,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "ounces-til-kilogram": {
        formula: (x) => x * 0.0283495231,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "pund-til-kilogram": {
        formula: (x) => x * 0.45359237,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "short-ton-til-kilogram": {
        formula: (x) => x * 907.18474,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "stones-til-kilogram": {
        formula: (x) => x * 6.35029318,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "troy-ounce-til-gram": {
        formula: (x) => x * 31.1034768,
        decimals: 3,
        noZero: false,
        neg: false
    },

    // VOLUM
    "desiliter-til-fluidounce": {
        formula: (x) => x * 3.3814022702,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "desiliter-til-milliliter": {
        formula: (x) => x * 100,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "desiliter-til-uscups": {
        formula: (x) => x * 0.422675284,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "fluidounce-til-desiliter": {
        formula: (x) => x * 0.295735296,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "fluidounce-til-liter": {
        formula: (x) => x * 0.0295735296,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "gallon-til-liter": {
        formula: (x) => x * 3.78541178,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "kubikkmeter-til-liter": {
        formula: (x) => x * 1000,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "liter-til-fluidounce": {
        formula: (x) => x * 33.814022702,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "liter-til-gallon": {
        formula: (x) => x * 0.264172052,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "liter-til-kubikkmeter": {
        formula: (x) => x * 0.001,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "liter-til-milliliter": {
        formula: (x) => x * 1000,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "milliliter-til-desiliter": {
        formula: (x) => x * 0.01,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "milliliter-til-liter": {
        formula: (x) => x * 0.001,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "milliliter-til-spiseskje": {
        formula: (x) => x / 15,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "milliliter-til-teskje": {
        formula: (x) => x / 5,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "spiseskje-til-milliliter": {
        formula: (x) => x * 15,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "spiseskje-til-teskje": {
        formula: (x) => x * 3,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "teskje-til-milliliter": {
        formula: (x) => x * 5,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "teskje-til-spiseskje": {
        formula: (x) => x / 3,
        decimals: 3,
        noZero: false,
        neg: false
    },
    "uscups-til-desiliter": {
        formula: (x) => x * 2.36588237,
        decimals: 3,
        noZero: false,
        neg: false
    }
};
