import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/MainPage.css';
import Slider from './Slider.jsx';
import slides from '../mock.json';

const MainPage = () => {
  return (
    <div className='background'>
      <div className="px-4 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">Read with Joy</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Welcome to our website, where we are on a mission to 
          provide boundless access to knowledge and imagination. 
          As a sanctuary for avid readers, curious minds, 
          and knowledge seekers, our library stands as a haven for exploration, 
          learning, and discovery. Our library offers a convenient opportunity 
          to borrow books online. You can enjoy reading anytime and anywhere 
          by simply visiting our website. We have an extensive collection of 
          eBooks and audiobooks available to download or read directly in your browser. 
          Just register on our website, select the books you are interested 
          in and start immersing yourself in the world of literature!
          </p>
        </div>
      </div>
      <div>
        <Slider slides={slides} ></Slider>
      </div>
      <div>
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>
        </footer>
      </div>
  
    </div>
  );
}

export default MainPage