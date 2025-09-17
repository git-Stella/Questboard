//import ProductsView from "./views/products.js";
//import PacklistsView from "./views/packlist.js";

export default class Router extends HTMLElement {
    constructor() {
        super();

        this.currentRoute = "";
        this.wildcard = "";

        this.allRoutes = {
            "": {
                view: "<h1>default</h1>",
                name: "Start",
            },
            "test": {
                view: "<h1>Test</h1>",
                name: "Delayed"
            },
        };
    }

    get routes() {
        return this.allRoutes;
    }

    // connect component
    connectedCallback() {
        window.addEventListener('hashchange', () => {
            this.resolveRoute();
        });

        this.resolveRoute();
    }

    resolveRoute() {
        //this.currentRoute
        let cleanHash = location.hash.replace("#", "");
        //let cleanHash = location.hash;
        this.currentRoute = cleanHash;

        if (cleanHash.includes("/")) {
            let splitHash = cleanHash.split("/");

            this.currentRoute = splitHash[0];

            this.wildcard = splitHash[1];
        }

        this.render();
    }

    render() {

        let html = "<not-found></not-found>";

        if (this.routes[this.currentRoute]) {
            html = this.routes[this.currentRoute].view;

            if (this.wildcard) {
                html = html.replace("$wildcard", this.wildcard);
            }
        }

        this.innerHTML = html;

        //this.innerHTML = this.routes[this.currentRoute].view || "<not-found></not-found>";
    }
}