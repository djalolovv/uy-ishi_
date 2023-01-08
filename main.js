let body = document.querySelector("#bodyga");
let menuBtn = document.querySelector(".menu-btn");
function writeToBody() {
  body.innerHTML += `   
   <!-- HEADER -->
    <header>
      <div class="container">
        <div class="header-container">
          <ul class="header-list">
            <li class="header-item">
              <a class="logo" href="#">
                <img class="logo-img" src="./img/logo.svg" alt="sunnyside" />
              </a>
            </li>
            <li class="header-item header-item2">
              <ul class="header-list2">
                <li class="header-item3">
                  <a class="header-link" href="#">About</a>
                </li>
                <li class="header-item3">
                  <a class="header-link" href="#"> Services</a>
                </li>
                <li class="header-item3">
                  <a class="header-link" href="#">Projects</a>
                </li>
                <li class="header-item3">
                  <a class="header-link header-btn" href="#">CONTACT</a>
                </li>
              </ul>
            </li>
            <li class="menu">
              <ul class="header-list2 header-menu-list">
                <li class="header-item3">
                  <a class="header-link header-link2" href="#">About</a>
                </li>
                <li class="header-item3">
                  <a class="header-link header-link2" href="#"> Services</a>
                </li>
                <li class="header-item3">
                  <a class="header-link header-link2" href="#">Projects</a>
                </li>
                <li class="header-item3">
                  <a class="header-link header-btn header-btn2" href="#"
                    >CONTACT</a
                  >
                </li>
              </ul>
            </li>
            <div class="menu-btn">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </ul>
          <h1 class="header-title">We are creatives</h1>
          <div class="header-img-div">
            <img class="header-img" src="./img/we-img.png" alt="line" />
          </div>
        </div>
      </div>
    </header>
    <!-- MAIN -->
    <main>
      <section class="transtion-section">
        <div class="container">
          <div class="transform-box">
            <ul class="transform-list">
              <ul class="for-flex for-flex1">
                <li class="transform-card transform-card1">
                  <h3 class="transform-title title-texts">Transform your <br> brand</h3>
                  <p class="transform-text">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                  <a class="trnsform-link" href="#">LEARN MORE</a>
                  <hr class="transform-line">
                </li>
                <li class="transform-card transform-card2"></li>
              </ul>
              <ul class="for-flex for-flex2">
                <li class="transform-card transform-card1">
                  <h3 class="transform-title title-texts">Stand out to the right <br> audience</h3>
                  <p class="transform-text">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                  <a class="trnsform-link" href="#">LEARN MORE</a>
                  <hr class="transform-line">
                </li>
                <li class="transform-card transform-card3"></li>
              </ul>
              <ul class="for-flex">
                <li class="transform-card4 transform-card ">
                  <h4 class="trnsforim-title-4">Graphic Design</h4>
                  <p class="transform-text4"> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                </li>
                <li class="transform-card5 transform-card ">
                  <h4 class="trnsforim-title-4">Photography</h4>
                  <p class="transform-text4">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </section>
      <section class="clients">
      <div class="container">
        <h5 class="clients-title">CLIENT TESTIMONIALS</h5>
        <ul class="clients-list">
          <li class="clients-card">
            <img class="client-img" src="./img/client-1.png" alt="clients">
            <p class="clieant-text">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h6 class="clieant-name">Emily R.</h6>
            <p class="client-job">Marketing Director</p>
          </li>
          <li class="clients-card clien-card-2">
            <img class="client-img" src="./img/client-2.png" alt="clients">
            <p class="clieant-text">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h6 class="clieant-name">Thomas S.</h6>
            <p class="client-job">Chief Operating Officer</p>
          </li>
          <li class="clients-card clien-card-2">
            <img class="client-img" src="./img/client-3.png" alt="clients">
            <p class="clieant-text">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h6 class="clieant-name">Jennie F.</h6>
            <p class="client-job">Business Owner</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="banner">
    <div class="container">
      <ul class="banner-list">
        <li class="banner-item">
          <ul class="banner-list2">
            <li class="banner-item1"></li>
            <li class="banner-item2"></li>
          </ul>
        </li>
        <li class="banner-item">
          <ul class="banner-list2">
            <li class="banner-item3"></li>
            <li class="banner-item4"></li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
    </main>
    <footer>
    <div class="container">
      <a class="last-logo" href="#">
        <img last-logo-img src="./img/logo-2.svg" alt="logo-2" width: 170px;
        height: 33>
      </a>
      <ul class="footer-list">
        <li class="footer-item">
          <a class="footer-link" href="#">About</a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#"> Services</a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#">Projects</a>
        </li>
      </ul>
      <ul class="footer-list">
        <li class="footer-item">
          <a class="footer-link" href="#"> <img src="./img/facebook.png" alt="logos" width: 20;
height: 20;></a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#"> <img src="./img/Shape.png" alt="logos" width: 20;
height: 20;> </a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#"> <img src="./img/pinterest.png" alt="logos" width: 20;
height: 20;></a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#"> <img src="./img/twitter.png" alt="logos" width: 20;
height: 20;></a>
        </li>
      </ul>
    </div>
  </footer>`;
}
writeToBody();
// let menu = document.querySelector(".menu");
// menuBtn.addEventListener("click", function () {
//   menuBtn.classList.toggle("active");
//   menu.classList.toggle("active");
// });
