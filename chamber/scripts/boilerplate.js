function addHeader() {
    const header = `    
    <header id="header">
        <div class="header__row">
            <div class="logo">
                <img src="images/png/logo-no-background.png" alt="This is a test.">
            </div>
            <nav class="animated__nav">
                <!-- Hamburger Icon for mobile -->
                <div class="hamburger" id="hamburger">
                    <i class="fa fa-bars"></i>
                </div>
                <aside class="nav__toggle">
                    <ul class="nav__menu close" id="navMenu">
                        <li><a href="index.html" class="menu__items active">Home</a></li>
                        <li><a href="directory.html" class="menu__items">Directory</a></li>
                        <li><a href="#" class="menu__items">Join</a></li>
                        <li><a href="#" class="menu__items">Discover</a></li>
                    </ul>
                    <div class="color__toggle">
                        <img src="images/dark-mode (2).png" alt="">
                    </div>
                </aside>
            </nav>
        </div>
    </header>`;

    document.body.insertAdjacentHTML('afterbegin', header);
};


function addFooter() {
    const footer = `    
    <footer>
        <div class="footer__grid">
            <div class="col__1">
                <p class="footer__heading">NextGen Network</p>
                <p>10 Bamburgh Road</p>
                <p>South Africa, 5241</p>
                <p>bee23002@byui.edu</p>
                <p>(+27) 63 723 2709</p>
            </div>

            <ul class="col__2">
                <li>
                    <a class="facebook" href="https://facebook.com" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a class="twitter" href="https://x.com" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a class="instagram" href="https://instagram.com" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a class="linkedin" href="https://linkedin.com" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>

            <div class="col__3">
                <p>WDD231 Class Project</p>
                <p>Kenton Beech</p>
                <p>© <span id="year"></span> NextGen Network</p>
                <p id="lastModified"></p>
            </div>
        </div>
    </footer>`;

    document.body.insertAdjacentHTML('beforeend', footer);
}