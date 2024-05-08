// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarMenu from './components/common/NavbarMenu';
import './assets/css/header.css';
import Footer from './components/common/FooterMenu';
import OurServices from './components/OurServices';



function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row position-sticky top-0 '>
          <NavbarMenu></NavbarMenu>

        </div>
        <div className='header-bg'>
          <div className='text-center py-5'>

            <div className='pt-5'>
              <i className='py-5 fw-bolder h1'>Web Solutions Beyond Boundaries</i>

            </div>
            <div className='pb-5'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-7 m-auto text-end py-5'>
                    <i className='py-5 fs-4 w-25 '>
                      Crafting Digital Excellence. Elevate Your Brand with Expert Web Development. Transforming Ideas into Impactful Online Experiences.
                    </i>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>


      </div>
        <OurServices></OurServices>
        <Footer></Footer>


      {/* <div className='container-fluid'>
        <div className='position-sticky top-0 '>

          
        </div>

        <div className='container-fluid header-bg'>
          <div className='text-center py-5'>

            <div className='pt-5'>
              <i className='py-5 fw-bolder h1'>Web Solutions Beyond Boundaries</i>

            </div>
            <div className='pb-5'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-7 m-auto text-end py-5'>
                    <i className='py-5 fs-4 w-25 '>
                      Crafting Digital Excellence. Elevate Your Brand with Expert Web Development. Transforming Ideas into Impactful Online Experiences.
                    </i>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>



      </div>

      <OurServices></OurServices>
      <Footer></Footer> */}

    </>

  );
}

export default App;
