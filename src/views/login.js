export default class LoginView extends HTMLElement {
    // connect component
    connectedCallback() {
        this.innerHTML =    `<header class="header">
                                <questboard-title title="Logga in"></questboard-title>
                             </header>
                             <main class="main">
                                <form action="/login.php">
                                    <label for="uname">Username:</label>
                                    <input type="text" id="uname" name="uname"><br><br>
                                    <label for="pword">Password:</label>
                                    <input type="text" id="pword" name="pword"><br><br>
                                    <input type="submit" value="Submit">
                                </form>
                             </main>
                             `;
    }
}