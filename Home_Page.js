
import React, { useState, useEffect } from 'react';
import './Home.css';
import './Dashboard';
import './HeroSection.css';
import './CategoriesGrid.css';
import './TopPicks.css';
import './HowItWorksSlider.css';



const categoryHierarchy = {
  "Consumer Goods": {
    Electronics: {
      "Mobile Phones": ["Android Phones", "iPhones", "Refurbished Mobiles"],
      Laptops: [],
      "Smart TVs": [],
      Appliances: [],
    },
    Apparel: {},
    "Home Essentials": {},
    "Food & Beverages": {},
  },
  "Industrial Goods": {
    Machinery: {
      "Construction Machines": ["Mini Excavators", "Hydraulic Cranes"],
      "Textile Machinery": [],
      "Agricultural Machinery": [],
    },
    "Raw Materials": {},
    "Tools & Equipment": {},
  },
  "Business Services": {
    Marketing: {
      "Digital Marketing": [],
      "SEO Services": ["On-Page SEO", "Off-Page SEO", "Technical SEO"],
      "Content Writing": [],
    },
    "IT Services": {},
    Consultancy: {},
    Finance: {},
  },
  "Personal Services": {
    "Health & Wellness": {
      "Yoga Trainers": ["Personal Yoga", "Group Yoga Classes"],
      Nutritionists: [],
      "Personal Trainers": [],
    },
    "Home Services": {},
    Education: {},
    "Repair Services": {},
  },
  "Rental Equipment": {
    "Construction Equipment": {
      Excavators: ["Mini Excavators", "Standard Excavators"],
      Loaders: [],
      Cranes: [],
      Scaffolding: [],
    },
    "Party/Event Equipment": {},
    "Vehicle Rentals": {},
  },
};

const Header = () => (
  <header className="header">
    <div className="top-header">
      <img src="logo.png" alt="CorpSathi Logo" className="logo" />
      <div className="location">Deliver to [Location]</div>
      <div className="search-section">
        <select className="search-category">
          <option disabled selected>
            Search Category/Sub-category
          </option>
          {Object.entries(categoryHierarchy).map(([section, subSections]) =>
            Object.entries(subSections).map(([subSection, categories]) =>
              Object.entries(categories).map(([category, subCategories]) =>
                subCategories.length > 0 ? (
                  subCategories.map((subCategory) => (
                    <option key={`${section}-${subSection}-${category}-${subCategory}`}>
                      {`${section} > ${subSection} > ${category} > ${subCategory}`}
                    </option>
                  ))
                ) : (
                  <option key={`${section}-${subSection}-${category}`}>
                    {`${section} > ${subSection} > ${category}`}
                  </option>
                )
              )
            )
          )}
        </select>
        <input type="text" placeholder="Search here..." className="search-bar" />
        <button className="search-button">Search</button>
      </div>
      <div className="header-actions">
        <span>Language: English</span>
        <span>Currency: INR</span>
        <span>Sign In</span>
        <img src="cart-icon.png" alt="Cart" className="icon" />
        <img src="notification-icon.png" alt="Notification" className="icon" />
      </div>
    </div>

    <nav className="nav-menu">
      {[
        "All Categories",
        "Consumer Goods",
        "Industrial Goods",
        "Business Services",
        "Personal Services",
        "Rental Equipment",
        "Request",
        "New Arrivals",
        "Special Offers",
        "Join Us",
        "Help Center",
      ].map((item, index) => (
        <div key={index} className="nav-item">
          {item}
        </div>
      ))}
    </nav>
  </header>
);




const slides = [
  {
    id: 1,
    title: "One Place for All Your Needs",
    subtitle: "Buy products, book services, or rent items – all in one simple platform.",
    cta: "Explore Now",
    bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    id: 2,
    title: "Everything You Need for Home & Daily Life",
    subtitle: "From groceries to gadgets – shop trusted products for everyday use.",
    cta: "Shop Consumer Goods",
    bgColor: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)"
  },
  {
    id: 3,
    title: "Tools and Equipment for Your Business",
    subtitle: "Buy strong and reliable industrial goods for all types of industries.",
    cta: "See Industrial Supplies",
    bgColor: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
  },
  {
    id: 4,
    title: "Boost Your Business with Expert Services",
    subtitle: "Find services like accounting, marketing, IT, and more for your business.",
    cta: "Find Business Services",
    bgColor: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
  },
  {
    id: 5,
    title: "Book Trusted Services for Your Home & Life",
    subtitle: "Need a plumber, salon expert, or cleaner? We've got you covered!",
    cta: "Book Personal Services",
    bgColor: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
  },
  {
    id: 6,
    title: "Don't Buy – Rent It!",
    subtitle: "Save money by renting machines, tools, event items, and more.",
    cta: "Start Renting",
    bgColor: "linear-gradient(135deg, #a6c1ee 0%, #fbc2eb 100%)"
  },
  {
    id: 7,
    title: "Start Earning with Your Products or Services",
    subtitle: "List your items or services and reach thousands of customers.",
    cta: "Become a Seller",
    bgColor: "linear-gradient(135deg, #ff8177 0%, #ff867a 100%)"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="hero-section" aria-label="Hero carousel">
      <div 
        className="hero-slide"
        style={{ background: slides[currentSlide].bgColor }}
      >
        <div className="hero-content">
          <h1 className="hero-title">{slides[currentSlide].title}</h1>
          <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
          <button className="hero-cta">{slides[currentSlide].cta}</button>
        </div>
        
        <button 
          className="carousel-control prev" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button 
          className="carousel-control next" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &gt;
        </button>
        
        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <h2 className="how-it-works-title">How It Works</h2>
    </section>
  );
};



// Sample category data with icons and products
const categories = [
  {
    name: "Consumer Goods",
    icon: "🛒",
    description: "Explore Consumer Goods",
    products: [
      { name: "Smartphones", image: "smartphone.jpg" },
      { name: "Home Appliances", image: "appliances.jpg" },
      { name: "Fashion", image: "fashion.jpg" }
    ]
  },
  {
    name: "Industrial Goods",
    icon: "🏭",
    description: "Discover Industrial Goods",
    products: [
      { name: "Machinery", image: "machinery.jpg" },
      { name: "Tools", image: "tools.jpg" },
      { name: "Raw Materials", image: "materials.jpg" }
    ]
  },
  {
    name: "Business Services",
    icon: "💼",
    description: "Browse Services",
    products: [
      { name: "Accounting", image: "accounting.jpg" },
      { name: "Marketing", image: "marketing.jpg" },
      { name: "IT Solutions", image: "it.jpg" }
    ]
  },
  {
    name: "Groceries & Essentials",
    icon: "🛍️",
    description: "Daily essentials for your home",
    products: [
      { name: "Fresh Produce", image: "produce.jpg" },
      { name: "Pantry Items", image: "pantry.jpg" },
      { name: "Cleaning Supplies", image: "cleaning.jpg" }
    ]
  },
  
  
  {
    name: "Personal Services",
    icon: "🧹",
    description: "View Personal Services",
    products: [
      { name: "Cleaning", image: "cleaning-service.jpg" },
      { name: "Plumbing", image: "plumbing.jpg" },
      { name: "Beauty Services", image: "beauty-service.jpg" }
    ]
  },
  {
    name: "Rental Equipment",
    icon: "🔧",
    description: "Rent Equipment Now",
    products: [
      { name: "Construction", image: "construction-equip.jpg" },
      { name: "Event", image: "event-equip.jpg" },
      { name: "Home", image: "home-equip.jpg" }
    ]
  }
];

const CategoriesGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="categories-section">
      <h2>Find products, services, and rentals – all in one place!</h2>
      
      <div className="categories-container">
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="category-card"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="icon-container">
                <div className="category-icon">{category.icon}</div>
                <div className="plus-icon">+</div>
              </div>
              <div className="category-name">{category.name}</div>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  );
};



const services = [
  {
    icon: '🧹',
    name: 'Home Deep Cleaning',
    price: 'From ₹499',
    category: 'Personal Service',
    rating: '★★★★★ (5.0)',
    description: 'Full house cleaning with professional staff',
  },
  {
    icon: '💇‍♀️',
    name: 'Salon at Home',
    price: 'From ₹299',
    category: 'Beauty Service',
    rating: '★★★★☆ (4.5)',
    description: 'Haircut, styling & grooming at your home',
  },
  {
    icon: '🔧',
    name: 'Appliance Repair',
    price: 'From ₹199',
    category: 'Home Service',
    rating: '★★★★☆ (4.3)',
    description: 'Professional repair for ACs, fridges & more',
  },
  {
    icon: '🛏️',
    name: 'Mattress Cleaning',
    price: 'From ₹399',
    category: 'Cleaning',
    rating: '★★★★★ (5.0)',
    description: 'Deep cleaning for mattress & upholstery',
  },
];

const TopPicks = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % services.length);
    }, 5000); // auto-scroll every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent(prev => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % services.length);
  };

  return (
    <section className="top-picks">
      <h2 className="top-picks-title">"Top Picks for You"</h2>
      <p className="top-picks-subtitle">
        Handpicked products, services & rentals trending right now!
      </p>

      <div className="carousel-container">
        <button className="carousel-arrow left" onClick={prevSlide}>❮</button>
        <div className="carousel-slide">
          <div className="product-card">
            <div className="product-image">{services[current].icon}</div>
            <div className="product-info">
              <p><strong>🧾 Service Name:</strong><br />{services[current].name}</p>
              <p><strong>💰 Starting Price:</strong><br />{services[current].price}</p>
              <p><strong>💎 Category:</strong><br /><em>{services[current].category}</em></p>
              <p><strong>⭐ Rating:</strong><br />{services[current].rating}</p>
              <p><strong>📝 Description:</strong><br />{services[current].description}</p>
            </div>
            <div className="product-buttons">
              <button className="btn book">Book Now</button>
              <button className="btn details">View Details</button>
            </div>
          </div>
        </div>
        <button className="carousel-arrow right" onClick={nextSlide}>❯</button>
      </div>
    </section>
  );
};


const BestChoice = () => {
  const cards = [
    {
      title: "Everything You Need, In One Place",
      description:
        "We offer a wide range of products and services, from everyday items to specialized equipment and services, we cover it all under one platform.",
    },
    {
      title: "For Everyone",
      description:
        "Whether you're running a business or fulfilling personal needs, our platform offers tailored solutions for every kind of customer.",
    },
    {
      title: "Quality You Can Trust",
      description:
        "Every product and service listed on CorpSathi is carefully vetted, ensuring you get only trusted quality and reliable support.",
    },
    {
      title: "Easy and Safe Shopping",
      description:
        "From browsing to buying, our platform makes the process smooth, secure, and straightforward. What you see is what you get — no hidden surprises.",
    },
    {
      title: "Helping You Grow",
      description:
        "We are not just a marketplace; we are a bridge that connects ideas, opportunities, businesses, and people — helping everyone grow together.",
    },
  ];

  return (
    <section className="best-choice">
      <h2>Why We’re Your Best Choice</h2>
      <p>
        At CorpSathi, we make it easy for you to find everything you need in one
        place — whether it’s Consumer Goods, Industrial Goods, Business
        Services, Personal Services, or Rental Equipment.
      </p>
      <div className="choice-cards">
        {cards.map((card, index) => (
          <div key={index} className="choice-card">
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};



const items = [
  {
    title: 'Consumers',
    subtitle: 'Discover. Shop. Enjoy.',
    points: [
      'Sign Up and create your account.',
      'Explore thousands of products & services.',
      'Buy or Book at competitive prices.',
      'Enjoy quick delivery and reliable service.',
    ],
    button: 'Start Shopping Now!',
  },
  {
    title: 'Partners',
    subtitle: 'Showcase. Connect. Grow.',
    points: [
      'Register as a Partner and set up your profile.',
      'List your Products, Services, or Rental Equipment easily.',
      'Connect with buyers across industries and locations.',
      'Grow your business with more sales and new opportunities.',
    ],
    button: 'Become a Partner Today!',
  },
  {
    title: 'Associates',
    subtitle: 'Share. Promote. Earn.',
    points: [
      'Join as an Associate and get a unique referral link.',
      'Promote Corpsathi’s products and services.',
      'Earn commissions on every successful sale or booking.',
      'Build your own network and income stream.',
    ],
    button: 'Start Earning with Us!',
  },
  {
    title: 'Riders',
    subtitle: 'Deliver. Earn. Empower.',
    points: [
      'Sign Up as a Delivery Rider.',
      'Accept delivery requests from nearby locations.',
      'Deliver products or services safely and on time.',
      'Earn delivery fees and incentives for great service.',
    ],
    button: 'Join as a Rider Now!',
  },
];

const HowItWorksSlider = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? items.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex((index + 1) % items.length);
  };

  return (
    <section className="how-it-works-slider">
      <h2>How It Works</h2>
      <div className="slider">
        <button className="nav left" onClick={handlePrev}>‹</button>
        <div className="slide">
          <h3>{items[index].title}</h3>
          <h4>{items[index].subtitle}</h4>
          <ul>
            {items[index].points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <button className="cta-button">{items[index].button}</button>
        </div>
        <button className="nav right" onClick={handleNext}>›</button>
      </div>
    </section>
  );
};


const Testimonials = () => (
  <section className="testimonials">
    <h2>What Our Customers Are Saying</h2>
    <div className="testimonial-card">
      <div className="testimonial-image">Image</div>
      <div className="testimonial-content">
        <p><strong>Name:</strong> Rahul Mehla</p>
        <p><strong>Location:</strong> Bangalore, India</p>
        <p><strong>User Type:</strong> Electronics Seller</p>
        <blockquote>
          "Listing my products was simple, and the support team is great. I’ve grown my customer base 3x in just 2 months!"
        </blockquote>
      </div>
    </div>
  </section>
);

const Insights = () => (
  <section className="insights">
    <h2>Latest Insights & Updates</h2>
    <div className="insights-grid">
      <div className="insight-card">
        <h3>Top 5 Must-Have Consumer Products for Your Home</h3>
        <p>Upgrade your daily life with these essential products at great prices.</p>
        <button>🔗 Read More</button>
      </div>
      <div className="insight-card">
        <h3>Rent vs Buy: What’s Better for Your Next Project?</h3>
        <p>See why renting equipment can be smarter for businesses and individuals.</p>
        <button>🔗 Read More</button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <h3>Be Part of Something Bigger</h3>
      <p>Stay updated with the latest offers, products, and services.</p>
      <div className="subscribe">
        <input type="email" placeholder="Email Address" />
        <button>Subscribe</button>
      </div>
    </div>
    <div className="footer-links">
      <div className="footer-column">
        <h4>Know Us</h4>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Blog & News</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Our Products</h4>
        <ul>
          <li>Consumer Goods</li>
          <li>Industrial Goods</li>
          <li>Business Services</li>
          <li>Personal Services</li>
          <li>Rental Equipment</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Join Us</h4>
        <ul>
          <li>As a Rider</li>
          <li>As a Partner</li>
          <li>As an Associate</li>
          <li>As a Consumer</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Help & Support</h4>
        <ul>
          <li>Live Chat</li>
          <li>Contact Us</li>
          <li>Help Center</li>
          <li>Order Status</li>
          <li>Request Quotation</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Policy</h4>
        <ul>
          <li>User Guide</li>
          <li>Privacy Policy</li>
          <li>Return & Refund</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>Follow Us: Facebook | Twitter | Instagram | LinkedIn | YouTube | Download App</p>
      <p>© 2024 CorpSathi. All rights reserved.</p>
    </div>
  </footer>
);

const Home_Page = () => (
  <div className="home-page">
    <Header />
    <HeroSection />
    <CategoriesGrid />
    <TopPicks />
    <BestChoice />
    <HowItWorksSlider />
    <Testimonials />
    <Insights />
    <Footer />
  </div>
);

export default Home_Page;
