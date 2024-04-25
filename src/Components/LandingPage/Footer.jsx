import linkicon from '../../assets/socialicons/linkedin2.png'
import instaicon from '../../assets/socialicons/instagram.png'
import twittericon from '../../assets/socialicons/twitter.png'
 import mailicon from '../../assets/socialicons/mail.png'
const Footer = () => {
  
  return (
    
  <footer className= " px-5 bg-black text-white border-t border-t-yellow-600 border-b border-b-black mt-40 ">
    <div  class="py-5">
      <div class="container">
        <section class="flex mb-8 justify-between">
          <div class="col-md-3">
            <div class="mb-3">
              <img src="images/logo.png" alt="Logo" /> <br />
              <small>Revolutionize your auto Business</small>
            </div>
            <address>
              Office Address: <br />
              BOS House, <br />
              Olden way Business Park, <br/>
              Ballybrit Galway, H91 E65V, Ireland
            </address>
          </div>
          <div class="">
            <h5>Program Track</h5>
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Practical Scrum Master</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Practical Business Analysis</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Data Analytics</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Resources</h5>
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="faqs.html">FAQs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="privacy-policy.html">Privacy</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="terms.html">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Get In Touch</h5>
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="contact.html">Contact Us</a>
              </li>
              <li>
                Whatsapp
              </li>
              <li>
                +447488818292 <br /> +15873303085
              </li>
            </ul>
          </div>
        </section>
        <section class="border-b py-2 border-b-yellow-400 mx-auto flex justify-between">
          <span class="align-self-center">© 2024 GearLink</span>
          <div class="social-icon flex space-x-5">
            <img src={linkicon} alt="Facebook Icon"  />
            <img src={instaicon} alt="Facebook Icon" />
            <img src={twittericon} alt="Facebook Icon" />
            <img src={mailicon} alt="Facebook Icon" />
          </div>
        </section>
      </div>
      </div>
      </footer>
      
  
)
};
export default Footer;
