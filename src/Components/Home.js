import React, { useState } from "react";

function Home() {


  const photos = [
    { src: "assets/img/gallery/1.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/2.jpg", date: "July 17", title: "From Ningbo" },
    { src: "assets/img/gallery/3.jpg", date: "September 05", title: "From Ningbo" },
    { src: "assets/img/gallery/4.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/5.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/6.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/7.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/8.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/9.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/10.jpg", date: "July 17", title: "From Ningbo" },
    { src: "assets/img/gallery/11.jpg", date: "September 05", title: "From Ningbo" },
    { src: "assets/img/gallery/12.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/13.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/14.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/15.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/16.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/17.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/18.jpg", date: "July 17", title: "From Ningbo" },
    { src: "assets/img/gallery/19.jpg", date: "September 05", title: "From Ningbo" },
    { src: "assets/img/gallery/20.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/21.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/23.jpg", date: "December 12", title: "From Ningbo" },
    { src: "assets/img/gallery/26.jpg", date: "December 12", title: "From Ningbo" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 8;

  // Calculate pagination
  const indexOfLast = currentPage * photosPerPage;
  const indexOfFirst = indexOfLast - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(photos.length / photosPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      
     <main className="main">
  
  <section id="hero" className="hero section dark-background" >
    <div className="info d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>KA2 Girmay-Tesfay General Import & Export</h2>
            <p>KA2 Girmay-Tesfay General Import and Export delivers quality construction, Sanitary, Household and electrical materials to power modern projects</p>
              <a href="#get-started" className="btn-get-started">Get Started</a>
          </div>
        </div>
      </div>
    </div>
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval={5000}>
      <div className="carousel-item active">
        <img src="assets/img/slide/1.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="assets/img/slide/2.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="assets/img/slide/3.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="assets/img/slide/4.jpg" alt />
      </div>
      
      <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
      </a>
      <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
      </a>
    </div>
  </section>
 <section id="get-started" className="get-started section">
  <div className="container">
    <div className="row justify-content-between gy-4">
      <div className="col-lg-6 d-flex align-items-center">
        <div className="content">
          <h3>About Us.</h3>
          <p>
            <strong>KA2 (Girmay Tesfay) General Import and Export</strong> was founded in 2024 with the vision of becoming one of Ethiopia’s most dependable providers of construction and electrical materials. Our Managing Director is <strong>Mr. Kibrom Gebremeskel</strong>. Since our establishment, we have proudly built a reputation for reliability, professionalism, and quality service. Our company plays a vital role in supporting the nation’s infrastructure development by supplying materials that meet the highest standards of durability and performance.
          </p>

          <p>
            At KA2 (Girmay Tesfay), we believe in creating long-term value for our clients through honesty and commitment. From individual builders to large-scale contractors, we serve a diverse range of customers with products tailored to their needs. As Ethiopia continues to grow, we remain committed to being a trusted partner in building the future.
          </p>

          {/* Read More Button */}
          <button
            className="btn btn-primary mt-2 mb-3"
            type="button"
            onClick={() => {
              const moreText = document.getElementById("moreText");
              const btn = document.getElementById("readMoreBtn");
              if (moreText.style.display === "none") {
                moreText.style.display = "block";
                btn.textContent = "Read Less";
              } else {
                moreText.style.display = "none";
                btn.textContent = "Read More";
              }
            }}
            id="readMoreBtn"
          >
            Read More
          </button>

          {/* Hidden extra content */}
          <div id="moreText" style={{ display: "none" }}>
            <p>
              Over the years, our company has expanded its operations significantly. We currently operate three warehouses—one in Addis Ababa and the other two in Mekelle—ensuring that our customers have convenient access to our products. We also have one shop in Addis Ababa located in Merkato and two shops in Mekelle. Our headquarters is in Addis Ababa, and our branch office is in Mekelle. On average, we import 110 containers of goods from over 30 trusted global suppliers annually to meet the growing demand of our clients.
            </p>
            <p>
              Today, KA2 (Girmay Tesfay) General Import and Export has over 50 skilled and dedicated staff members who are the backbone of our success, with around $2,500,000.00 in annual transactions. Together, we continue to expand our reach and strengthen our role as a trusted supplier across Ethiopia and beyond.
            </p>
            <p>
              Now, we have completed all our research and preparations to expand our work to many African countries, especially Angola, Congo, South Africa, Tanzania, Rwanda, and Uganda.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-5 d-flex align-items-center">
        <div className="w-100">
          <img src="assets/img/logoblue.png" className="img-fluid rounded" alt="KA2 Import" />
        </div>
      </div>

      {/* Award Section */}
      <div className="row">
        <h2>Award Winning</h2>
        <p>
          Our company is honored to be recognized by the Ethiopian Customs Commission as one of the nation's top taxpayers, reflecting our strong commitment to transparency, compliance, and national development.
        </p>
        <p>
          This award highlights our dedication to responsible business practices and our contribution to Ethiopia's economic growth.
        </p>

        <div className="col-lg-3 col-md-6">
          <img
            src="assets/img/award/1.jpg"
            className="img-fluid rounded mb-2"
            alt="Award 1"
            style={{ border: "2px solid black", padding: "2px" }}
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <img
            src="assets/img/award/5.jpg"
            className="img-fluid rounded mb-2"
            alt="Award 2"
            style={{ border: "2px solid black", padding: "2px" }}
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <img
            src="assets/img/award/6.jpg"
            className="img-fluid rounded mb-2"
            alt="Award 3"
            style={{ border: "2px solid black", padding: "2px" }}
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <img
            src="assets/img/award/4.jpg"
            className="img-fluid rounded mb-2"
            alt="Award 4"
            style={{ border: "2px solid black", padding: "2px" }}
          />
        </div>
      </div>
      <div className="row">
        <h2>Certeficate of Recognition</h2>
            <p>Down is the certeficate we received from Ethiopian Customs Commission for our contribution to the development of our country
            by achieving a better tax law compliance and paying tax faithfully in the 2024/25 fiscal year.</p>
            <img
            src="assets/img/certeficate.jpg"
            className="img-fluid rounded"
            alt="Award 3"
            style={{ border: "2px solid black", padding: "2px", maxHeight:"400px" }}
          />
      </div>
    </div>
  </div>
</section>

  <section id="services" className="services section light-background" style={{ backgroundColor:"#cfd0d1ff" }}>
    {/* Section Title */}
    <div className="container section-title">
      <h2>Services</h2>
      <p>We Mainly Provide 3 Types of Services</p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6">
          <div className="service-item  position-relative">
            <div className="icon">
              <i class="bi bi-arrow-down-circle-fill" style={{color:'#003366'}} />
            </div>
            <h3 style={{color:'#003366'}}>Imports</h3>
            <p>At KA2 Girmay-Tesfay General Import and Export, we specialize in importing high-quality construction, Sanitary, Household and electrical materials from trusted international suppliers. Our import services are designed to provide Ethiopian and some African businesses, contractors, and individuals with access to durable, reliable, and modern products that meet global standards.</p>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-shop" style={{color:'#003366'}} />
            </div>
            <h3 style={{color:'#003366'}}>Retail Disribution</h3>
            <p>Through our retail distribution network, KA2 Girmay-Tesfay General Import and Export makes construction, Sanitary, Household and electrical materials easily accessible to customers across Ethiopia. We ensure that contractors, businesses, and individual buyers can find the products they need at competitive prices without compromising on quality.</p>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-arrow-up-circle-fill" style={{color:'#003366'}} />
            </div>
            <h3 style={{color:'#003366'}}>Exports</h3>
            <p>At KA2 Girmay-Tesfay General Import and Export, we are expanding our operations to include exports, showcasing Ethiopia’s quality products to international markets. Our export services focus on delivering locally sourced goods that meet global standards, ensuring reliability, consistency, and value for our partners abroad.</p>   
                   </div>
        </div>
        
      </div>
    </div>
  </section> 
  <section id="projects" className="features section">
    <div className="container section-title">
      <h2>Products</h2>
      <p>KA2 Girmay-Tesfay General Import & Export provides quality construction, electrical, household, Sanitary materials, Tyres, and a diverse range of products including speakers, slippers, playing cards, and more.</p>
    </div>
  <div className="container">
    <ul className="nav nav-tabs row  g-2 d-flex" role="tablist" style={{backgroundColor:"#003366"}}>
      <li className="nav-item col" role="presentation">
        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1" aria-selected="true" role="tab">
          <h4>Construction</h4>
        </a>
      </li>{/* End tab nav item */}
      <li className="nav-item col" role="presentation">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" aria-selected="false" tabIndex={-1} role="tab">
          <h4>Electrical</h4>
        </a>{/* End tab nav item */}
      </li>
      <li className="nav-item col" role="presentation">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3" aria-selected="false" tabIndex={-1} role="tab">
          <h4>Household</h4>
        </a>
      </li>{/* End tab nav item */}
      <li className="nav-item col" role="presentation">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-5" aria-selected="false" tabIndex={-1} role="tab">
          <h4>Sanitary</h4>
        </a>
      </li>
            <li className="nav-item col" role="presentation">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4" aria-selected="false" tabIndex={-1} role="tab">
          <h4>Others</h4>
        </a>
      </li>{/* End tab nav item */}
    </ul>
    <div className="tab-content" >
      <div className="tab-pane fade active show" id="features-tab-1" role="tabpanel">
        <div className="row">
          
          <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
  <div className="row">
    {/* Project 1 */}
    {/* <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/construction/1.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>A</h6>
    </div> */}
    <div
  className="col-4 col-lg-2 text-center mb-4"
  
>
  <img
    src="assets/img/construction/1.jpg"
    className="img-fluid rounded mb-2"
    alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}
  />
  <h6>Shovel</h6>
</div>

    {/* Project 2 */}
    <div className="col-4 col-lg-2 text-center mb-4" >
      <img src="assets/img/construction/2.jpg" className="img-fluid rounded mb-2" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Hammer</h6>
    </div>

    {/* Project 3 */}
    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/3.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }} />
      <h6>Disc</h6>
    </div>

    {/* Project 4 */}
    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/4.jpg" className="img-fluid rounded mb-2" alt="Project 4"  style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Padlock</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/5.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Hacksaw</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/6.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Hoe</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/7.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Pickaxe</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/9.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Roofing Nails</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/10.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Black Wire</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/11.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Glue</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/12.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Bridge Welding</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/8.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Hose</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/13.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Hoe Head</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/14.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Sickle</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/15.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Angle Iron</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/16.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Sheet Metal</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/17.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Hinge</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/18.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Screw</h6>
    </div>

    

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/20.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Corrugated Iron</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/21.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Glove</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/22.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Glue</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/23.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Tower Bolt</h6>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/24.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Roofing Nail</h6>
    </div>

    

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/construction/26.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Plastic Tarp</h6>
    </div>

  </div>
</div>

          
        </div>
      </div>
      <div className="tab-pane fade" id="features-tab-2" role="tabpanel">
        <div className="row">
          
          <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/1.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/2.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/3.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
     
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/4.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/5.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/6.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/7.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/8.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/9.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/10.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/11.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/12.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/13.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/14.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/15.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/16.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/17.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/18.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/19.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/20.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/21.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/22.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/23.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/electrical/24.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

        </div>
      </div>
      <div className="tab-pane fade" id="features-tab-3" role="tabpanel">
        <div className="row">
         
         <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/1.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/2.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/3.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/4.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/5.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/6.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/7.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/8.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/9.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/10.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/11.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/12.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/13.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/14.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/15.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/16.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/17.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/18.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/19.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/20.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/21.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/22.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/23.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/household/24.jpg" className="img-fluid rounded mb-2" alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}/>
    </div>

        </div>
      </div>


      <div className="tab-pane fade" id="features-tab-5" role="tabpanel">
        <div className="row">
          
          <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
  <div className="row">
    {/* Project 1 */}
    {/* <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/construction/1.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>A</h6>
    </div> */}
    <div
  className="col-4 col-lg-2 text-center mb-4"
  
>
  <img
    src="assets/img/sanitary/1.jpg"
    className="img-fluid rounded mb-2"
    alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}
  />
  
</div>

    {/* Project 2 */}
    <div className="col-4 col-lg-2 text-center mb-4" >
      <img src="assets/img/sanitary/2.jpg" className="img-fluid rounded mb-2" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    {/* Project 3 */}
    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/3.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }} />
      
    </div>

    {/* Project 4 */}
    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/4.jpg" className="img-fluid rounded mb-2" alt="Project 4"  style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/5.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/6.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/7.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/9.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/10.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/11.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/12.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/8.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/13.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/14.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/15.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/16.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/17.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/18.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/20.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/21.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/22.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/23.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/24.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/25.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/26.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/27.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/28.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

    <div className="col-4 col-lg-2 text-center mb-4">
      <img src="assets/img/sanitary/29.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      
    </div>

  </div>
</div>

          
        </div>
      </div>


      <div className="tab-pane fade" id="features-tab-4" role="tabpanel">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
            <h3>KA2 Girmay-Tesfay IMPORT</h3>
            <p className="fst-italic">
              In addition to construction, Household, Sanitary and electrical supplies, KA2 Girmay-Tesfay General Import and Export also imports Tyres and a variety of consumer products to meet everyday needs. From lifestyle items to educational essentials, we ensure quality and affordability across all categories.
            </p>
            <ul>
              <li><i className="bi bi-check2-all" /> <span>Tyres</span></li>
              <li><i className="bi bi-check2-all" /> <span>Speakers and electronic accessories</span></li>
              <li><i className="bi bi-check2-all" /> <span>School bags and educational supplies</span></li>
              <li><i className="bi bi-check2-all" /> <span>Slippers, playing cards, and other general goods</span></li>
            </ul>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center">
  <video 
    src="assets/img/tyre/1.mp4" 
    className="img-fluid" 
    controls
    loop
    style={{ maxHeight: "400px", objectFit: "contain" }}
  />
</div>

        </div>
      </div>
    </div>
  </div>
</section>

<section id="exports" className="services section light-background" style={{ backgroundColor:"#cfd0d1ff" }}>
    {/* Section Title */}
    <div className="container section-title">
      <h2>EXPORTS</h2>
      <p>We Mainly Export 3 Types of Items</p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6">
          <div className="service-item  position-relative">
            {/* <div className="icon">
              <i class="bi bi-arrow-down-circle-fill" style={{color:'#003366'}} />
            </div> */}
            <h3 style={{color:'#003366'}}>Coffee</h3>
            <p>We specialize in exporting high-quality coffee beans to other countries</p>
            <img src="assets/img/export/c1.jpg" className="img-fluid rounded col-6 col-lg-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      <img src="assets/img/export/c2.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      <img src="assets/img/export/c3.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      <img src="assets/img/export/c4.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      
      <img src="assets/img/export/c5.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      <img src="assets/img/export/c6.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            {/* <div className="icon">
              <i className="bi bi-shop" style={{color:'#003366'}} />
            </div> */}
            <h3 style={{color:'#003366'}}>Live Stock</h3>
            <p>We also export Live stocks like camels, Sheep, and Goats</p>
            <img src="assets/img/export/l1.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      <img src="assets/img/export/l2.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      <img src="assets/img/export/l3.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      <img src="assets/img/export/l4.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      <img src="assets/img/export/l5.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      <img src="assets/img/export/l6.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      
            </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            {/* <div className="icon">
              <i className="bi bi-arrow-up-circle-fill" style={{color:'#003366'}} />
            </div> */}
            <h3 style={{color:'#003366'}}>khat</h3>
            <p>we export Khat to some countries in need</p>   
            <img src="assets/img/export/k1.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      <img src="assets/img/export/k2.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      <img src="assets/img/export/k3.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      <img src="assets/img/export/k4.jpg" className="img-fluid rounded col-6 col-lg-6 col-xs-6 mb-6" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      
                   </div>
        </div>
        
      </div>
    </div>
  </section>



<section
      id="recent-blog-posts"
      className="recent-blog-posts section"
      style={{ backgroundColor: "#cfd0d1ff" }}
    >
      {/* Section Title */}
      <div className="container section-title">
        <h2>Gallery</h2>
        <p>
          You can see Container Loading, Warehouse Shots, Logistics In Action, and Shipment Preparations Below
        </p>
      </div>

      <div className="container">
        <div className="row gy-5">
          {currentPhotos.map((photo, index) => (
            <div key={index} className="col-xl-3 col-md-6 col-6">
              <div className="post-item position-relative h-100">
                <div className="post-img position-relative overflow-hidden">
                  <img src={photo.src} className="img-fluid" alt="" />
                  <span className="post-date">{photo.date}</span>
                </div>
                <div className="post-content d-flex flex-column">
                  <h3 className="post-title">{photo.title}</h3>
                  <div className="meta d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <span className="ps-2">CHN</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <span className="ps-2">DJI</span>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bootstrap Pagination */}
        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            {/* Previous */}
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => goToPage(currentPage - 1)}>
                Previous
              </button>
            </li>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i + 1} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => goToPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}

            {/* Next */}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => goToPage(currentPage + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>






<section id="suppliers" className="services section light-background">
    {/* Section Title */}
    <div className="container section-title">
      <h2>Our Trusted Suppliers</h2>
      <p>Global Suppliers - Partnership in Quality - Photos With Some Of Our Suppliers</p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6">
          <div className="service-item  position-relative">
            <img src="assets/img/suppliers/1.jpg" className="img-fluid rounded mb-2" alt="Project 1"/>

                      </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
           <img src="assets/img/suppliers/2.jpg" className="img-fluid rounded mb-2" alt="Project 1"/>

                    </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
           <img src="assets/img/suppliers/5.jpg" className="img-fluid rounded mb-2" alt="Project 1"/>

                    </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
           <img src="assets/img/suppliers/8.jpg" className="img-fluid rounded mb-2" alt="Project 1"/>

                    </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
           <img src="assets/img/suppliers/3.jpg" className="img-fluid rounded mb-2" alt="Project 1"/>

                    </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <img src="assets/img/suppliers/7.jpg" className="img-fluid rounded mb-2" alt="Project 1"/>

                               </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <img src="assets/img/suppliers/8.jpg" className="img-fluid rounded mb-2" alt="Project 1"/>

                               </div>
        </div>
        
      </div>
    </div>
  </section> 







<section id="contact" className="contact section" style={{ backgroundColor:"#cfd0d1ff" }}>
  <div className="container section-title">
      <h2>Contact US</h2>
      <p> Contact US with the following Informations</p>
    </div>
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-6">
        <div className="info-item d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-geo-alt" />
          <h3>Address</h3>
          <p>Lideta Subcity, Blen Plaza 7<sup>th</sup> Floor</p>
        </div>
      </div>{/* End Info Item */}
      <div className="col-lg-3 col-md-6">
        <div className="info-item d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-telephone" />
          <h3>Call Us</h3>
          <p>+251 911 46 17 52</p>
        </div>
      </div>{/* End Info Item */}
      <div className="col-lg-3 col-md-6">
        <div className="info-item d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-envelope" />
          <h3>Email Us</h3>
          <p>ka2kibrom@gmail.com</p>
        </div>
      </div>{/* End Info Item */}
    </div>
    <div className="row gy-4 mt-1">
      <div className="col-lg-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5173872955447!2d38.73630137408413!3d9.01647658918681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8538983457e5%3A0x6a9a5ac81cbd52ba!2sKA2%20Girmay-Tesfay%20General%20Import%20%26%20Export!5e0!3m2!1sen!2set!4v1762155189183!5m2!1sen!2set" frameBorder={0} style={{border: 0, width: '100%', height: 400}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>{/* End Google Maps */}
      <div className="col-lg-6">
        <form action="forms/contact.php" method="post" className="php-email-form">
          <div className="row gy-4">
            <div className="col-md-6">
              <input type="text" name="name" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 ">
              <input type="email" className="form-control" name="email" placeholder="Your Email" required />
            </div>
            <div className="col-md-12">
              <input type="text" className="form-control" name="subject" placeholder="Subject" required />
            </div>
            <div className="col-md-12">
              <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
            </div>
            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your message has been sent. Thank you!</div>
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


</main>



    </>
  );
}

export default Home;
