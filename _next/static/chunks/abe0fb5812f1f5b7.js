(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 18566, (e, n, t) => {
    n.exports = e.r(76562)
}, 91432, 54858, e => {
    "use strict";
    var n = e.i(43476),
        t = e.i(71645),
        i = e.i(18566);
    async function a(e, n, t) {
        let i = localStorage.getItem("admin_token"),
            a = await fetch(`https://moaiendy.onrender.com/api-backend${n}`, {
                method: e,
                headers: {
                    "Content-Type": "application/json",
                    ...i ? {
                        Authorization: `Bearer ${i}`
                    } : {}
                },
                body: t ? JSON.stringify(t) : void 0
            });
        if (!a.ok) {
            if (401 === a.status) throw localStorage.removeItem("admin_token"), window.dispatchEvent(new CustomEvent("admin:session-expired")), Error("Session expired. Please login again.");
            throw Error((await a.json().catch(() => ({
                error: "Unknown error"
            }))).error || `HTTP ${a.status}`)
        }
        return a.json()
    }
    async function o(e, n) {
        let t = await a("POST", "/api/admin/login", {
            email: e,
            password: n
        });
        return t.token && localStorage.setItem("admin_token", t.token), t
    }
    async function s() {
        localStorage.removeItem("admin_token")
    }

    function r() {
        return localStorage.getItem("admin_token")
    }
    async function l() {
        return a("GET", "/api/admin/visitors")
    }
    async function c(e) {
        try {
            return await a("GET", `/api/admin/visitors/${e}`)
        } catch {
            return null
        }
    }
    async function u(e, n) {
        await a("PATCH", `/api/admin/visitors/${e}`, n)
    }
    async function d(e) {
        await a("DELETE", `/api/admin/visitors/${e}`)
    }
    async function m(e) {
        await a("DELETE", "/api/admin/visitors/bulk", {
            ids: e
        })
    }
    async function p(e) {
        try {
            return await a("GET", `/api/admin/visitors/${e}/messages`)
        } catch {
            return []
        }
    }
    async function g(e, n, t) {
        await a("POST", `/api/admin/visitors/${e}/messages`, {
            message: n,
            senderName: t,
            senderRole: "admin"
        })
    }
    async function f() {
        return a("GET", "/api/admin/cors")
    }
    async function y(e) {
        return a("POST", "/api/admin/cors", {
            origin: e
        })
    }
    async function h(e) {
        return a("DELETE", "/api/admin/cors", {
            origin: e
        })
    }
    e.i(47167), e.s(["addCorsOrigin", () => y, "adminLogin", () => o, "adminLogout", () => s, "deleteApplication", () => d, "deleteMultipleApplications", () => m, "getAdminToken", () => r, "getAllApplications", () => l, "getApplication", () => c, "getCorsOrigins", () => f, "getMessages", () => p, "removeCorsOrigin", () => h, "sendAdminMessage", () => g, "updateApplication", () => u], 54858);
    let w = (0, t.createContext)({
        user: null,
        loading: !0,
        login: async () => {},
        logout: async () => {}
    });

    function E({
        children: e
    }) {
        let [a, l] = (0, t.useState)(null), [c, u] = (0, t.useState)(!0), d = (0, i.useRouter)(), m = (0, i.usePathname)();
        (0, t.useEffect)(() => {
            let e = () => {
                l(null)
            };
            return window.addEventListener("admin:session-expired", e), () => window.removeEventListener("admin:session-expired", e)
        }, []), (0, t.useEffect)(() => {
            let e = r();
            if (e) try {
                let n = JSON.parse(atob(e.split(".")[1])),
                    t = Math.floor(Date.now() / 1e3);
                n.exp && n.exp < t ? (s(), l(null)) : l({
                    email: n.email || "",
                    role: n.role || "admin",
                    name: n.name
                })
            } catch {
                s(), l(null)
            } else l(null);
            u(!1)
        }, []), (0, t.useEffect)(() => {
            !c && (a || "/login" === m ? a && "/login" === m && d.push("/") : d.push("/login"))
        }, [a, c, m, d]);
        let p = async (e, n) => {
            let t = JSON.parse(atob((await o(e, n)).token.split(".")[1]));
            l({
                email: t.email || e,
                role: t.role || "admin",
                name: t.name
            }), d.push("/")
        }, g = async () => {
            await s(), l(null), d.push("/login")
        };
        return (0, n.jsx)(w.Provider, {
            value: {
                user: a,
                loading: c,
                login: p,
                logout: g
            },
            children: e
        })
    }

    function v() {
        return (0, t.useContext)(w)
    }
    e.s(["AuthProvider", () => E, "useAuth", () => v], 91432)
}]);