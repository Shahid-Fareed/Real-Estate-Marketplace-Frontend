import HomeHeader from "../../layout/HomeHeader";
import Footer from "../../layout/Footer";
import FooterCredit from "../../layout/FooterCredit";

const About = () => {
  return (
    <>
      <HomeHeader />
      <section className="blogs p70-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-text">
                <div className="section-title pb-4">
                  <h2>
                    Our Story: IN Realtors – A Legacy of Trust and Excellence
                  </h2>
                </div>
                <p>
                  In the year 1905, a visionary named Raja Pehlwan Khan embarked
                  on a journey that would set the foundation for generations of
                  real estate expertise. His very first venture involved the
                  construction and management of the Upper Canal Jehlum. This
                  marked the genesis of a family legacy deeply rooted in the
                  real estate and construction industry.
                </p>
                <h3>A Legacy Begins</h3>
                <p>
                  It all truly began in 1947, a pivotal year not only in our
                  family's history but also in the birth of our beloved nation,
                  Pakistan. Raja Muhammad Nawaz, the son of Raja Pehlwan Khan,
                  recognized the immense potential within the land and the
                  dreams of those seeking to build their lives here. This vision
                  led him into the world of construction and land acquisition,
                  and he founded a property business named 'Raja Muhammad Nawaz
                  & Co.' This marked the birth of a legacy that would span
                  generations.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <img src="assets/img/about1.jpg" alt="aboutimage" />
              </div>
            </div>
          </div>
          <div className="row">
            <h3>Pioneering New Horizons</h3>
            <p>Fast forward to 2019, and the next generation stepped forward. Raja Naeem Nawaz, son of Raja Muhammad Nawaz, emerged as a trailblazer in the industry. He assumed the role of primary provider for the groundbreaking New Metro City in Saraialamgir. His unwavering dedication and visionary approach turned him into the driving force behind this ambitious project, shaping its growth and development.</p>
            <h3>Expanding the Horizon</h3>
            <p>In the year 2020, Raja Naeem Nawaz's commitment to excellence led him to become the land provider and principal dealer for Pearl Global City Dina, solidifying his position as a key figure in the real estate industry. Concurrently, he established his own property enterprise, 'RB Realtors,' which swiftly gained a reputation for trust and integrity.</p>
            <h3>A New Chapter Unfolds</h3>
            <p>Today, the legacy continues into the hands of the next generation. In 2023, Raja Imran Nawaz has proudly launched IN Realtors, not just as a business but as a promise to our clients. IN Realtors represents the culmination of over a century of experience, dedication, and excellence in real estate.</p>
            <h3>Our Vision</h3>
            <p>With IN Realtors, our vision is to redefine the real estate experience. We harmonize the wisdom of tradition with the dynamism of the modern age to offer you the best of both worlds. Our commitment to transparency, integrity, and personalized service remains steadfast. We don't just sell properties; we guide you in finding your dream home or the perfect investment.</p>
            <h3>Your Journey Begins with Us</h3>
            <p>
            As we embark on this thrilling journey with you, we invite you to explore the boundless opportunities that the world of real estate presents. IN Realtors isn't just a business; it's a legacy of trust and a commitment to excellence. Join us as we continue to shape the future of real estate, one satisfied client at a time.
            </p>
            <p>Your dream property is our mission!</p>
          </div>
        </div>
      </section>
      <Footer />
      <FooterCredit />
    </>
  );
};

export default About;
