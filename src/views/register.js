export default class RegisterView extends HTMLElement {
    // connect component
    connectedCallback() {
        this.innerHTML =    `<header class="header">
                                <questboard-title title="Logga in"></questboard-title>
                             </header>
                             <main class="main">
                                <p>Test</p>
                             </main>
                             `;
    }
}