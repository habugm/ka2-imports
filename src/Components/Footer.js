

function Footer() {
  return (
    <>
      
     <footer id="footer" className="footer dark-background">
  <div className="container footer-top">
    <div className="row gy-4">
      
      
      <div className="col-12 col-lg-4 footer-about">
        <a href="index.html" className="logo d-flex align-items-center mb-2">
          <span className="sitename">KA2 Girmay-Tesfay General Import & Export</span>
        </a>
        <div className="footer-contact pt-2">
          <p>Lideta Subcity, Blen Plaza 7<sup>th</sup> Floor</p>
          <p>Addis Ababa, Ethiopia</p>
          <p className="mt-3"><strong>Phone:</strong> <span>+251 911 46 17 52</span></p>
          <p><strong>Email:</strong> <span>ka2kibrom@gmail.com</span></p>
        </div>
        
      </div>

      
      <div className="col-12 col-lg-4 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#get-started">About us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Products</a></li>
        </ul>
      </div>

     
      <div className="col-12 col-lg-4 footer-links">
        <h4>Social Media Links</h4>
        <div className="social-links d-flex mt-3">
          <a href="#"><i className="bi bi-twitter-x" /></a>
          <a href="#"><i className="bi bi-facebook" /></a>
          <a href="#"><i className="bi bi-instagram" /></a>
          <a href="#"><i className="bi bi-linkedin" /></a>
        </div>
      </div>

    </div>
  </div>

  <div className="container copyright text-center mt-4">
    <p>© <span>Copyright</span> <strong className="px-1 sitename">Haben Gebremedhin</strong> <span>All Rights Reserved</span></p>
    <div className="credits">
      Designed by Haben Gebremedhin
    </div>
  </div>
</footer>



    </>
  );
}

export default Footer;
