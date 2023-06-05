import logo from './logo.svg';
import './App.scss';

function App() {

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <main>
      <div class="container py-4">

        <div class="p-5 mb-4 bg-primary text-white rounded-5 text-center">
          <div class="container-fluid py-5">
            <h1 class="display-4 fw-bold">JOSIE & ANDI</h1>
            <h2 class="fs-4 text-center">Join us to celebrate <br /> 10 years of marriage <br />
            16th july 2023</h2>
          </div>
        </div>

        <div class="row align-items-md-stretch">
          <div class="col-md-4">
            <div class="h-100 p-5 text-white bg-secondary rounded-5">
              <h2>2pm 'till late</h2>
              <h2>Derby Brewery Arms</h2>
              <a class="link-underline-opacity-0 link-light link-underline-opacity-100-hover" href="https://goo.gl/maps/fjUS1EdKVxkantNcA?coh=178571&entry=tt"><h2>95 Cheetham Hill Rd, Cheetham Hill, Manchester M8 8PY</h2></a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="h-100 p-5 fs-4 bg-light rounded-5">
              <p>
                Pizza 🍕 <br/> 
                Look fab! <br/>
                Kids OK (9pm curfew) <br/>
                No Gifts ... <br/>
                Donations welcome: <br/>
                <a href="https://beyond-bars.org/">Donate to Booke Beyond Bars</a> <br/>
                <a href="https://www.sparkle.org.uk/">Donate to Sparkle</a>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="h-100 d-flex fs-4 bg-light rounded-5">
            <button class="btn btn-primary btn-lg btn-block text-white flex-fill rounded-5" type="button" role="link" onClick={() => openInNewTab("https://forms.gle/9Eg8c6L9dhqs9Y868")}><h2>RSVP</h2></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
