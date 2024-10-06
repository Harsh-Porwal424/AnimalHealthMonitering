import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Banner Section */}
      <section id="banner" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="heading-1">Monitor Animal Health with Ease</h1>
              <p className="lead">
                Track vital health metrics of your livestock and pets. Ensure
                early diagnosis, get alerts, and improve animal well-being with
                our advanced monitoring system.
              </p>
              <Link to="/login" className="btn btn-get-started">
                Get Started
              </Link>
            </div>
            <div className="col-md-6">
              <img
                src="https://miro.medium.com/v2/resize:fit:1024/1*DM_rSJhRK2GJd8r986LRiQ.png"
                alt="Animal Monitoring"
                className="img-fluid rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="section-description">
            We are dedicated to revolutionizing animal health monitoring. Our
            innovative technology empowers farmers, veterinarians, and pet
            owners to track and improve the well-being of their animals with
            unprecedented ease and accuracy.
          </p>
        </div>
      </section>

      {/* Features Section */}
<section id="features" className="py-5 bg-light">
  <div className="container">
    <h2 className="section-title">Features</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="feature-item text-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2FScreenshot_2024-10-06_at_11.46.01_PM-removebg-preview.png?alt=media&token=65a891fd-3386-4c74-aa50-fa6bcf3f5887"
            alt="Real-time Monitoring"
            className="feature-image"
          />
          <h3>Real-time Monitoring</h3>
          <p>Track vital signs and health metrics in real-time.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-item text-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2F360_F_91708092_BJJtouZ0WymGgV1x3matkZsHibuyUOTV-removebg-preview.png?alt=media&token=05bf23ef-9b84-4b4a-8019-242ab9d21f7e" // Replace with the actual image URL
            alt="Instant Alerts"
            className="feature-image"
          />
          <h3>Instant Alerts</h3>
          <p>Receive immediate notifications for any health anomalies.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-item text-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2Fdata-analytics-logo-design-growth-arrow-logo-design-for-data-finance-investment-vector-removebg-preview%20(1).png?alt=media&token=e4834cfc-bd67-46c0-b346-755ec28f6dde" // Replace with the actual image URL
            alt="Data Analytics"
            className="feature-image"
          />
          <h3>Data Analytics</h3>
          <p>Gain insights with advanced health data analysis.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Pricing Section */}
      <section id="pricing" className="py-5">
        <div className="container">
          <h2 className="section-title">Pricing</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="pricing-card">
                <h3>Basic</h3>
                <p className="price">₹2900/month</p>
                <ul>
                  <li>Up to 10 animals</li>
                  <li>Basic health monitoring</li>
                  <li>Email support</li>
                </ul>
                <button className="btn btn-primary">Choose Plan</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card featured">
                <h3>Pro</h3>
                <p className="price">₹7900/month</p>
                <ul>
                  <li>Up to 50 animals</li>
                  <li>Advanced health analytics</li>
                  <li>24/7 phone support</li>
                </ul>
                <button className="btn btn-primary">Choose Plan</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card">
                <h3>Enterprise</h3>
                <p className="price">Custom</p>
                <ul>
                  <li>Unlimited animals</li>
                  <li>Custom features</li>
                  <li>Dedicated account manager</li>
                </ul>
                <button className="btn btn-primary">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2Fpremium_photo-1677850455009-d67da2b774c9-transformed.jpeg?alt=media&token=d8e47a81-9d7c-4fce-b6f4-8462f2a399b9"
                alt="Animal 1"
                className="img-fluid gallery-img"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                alt="Animal 2"
                className="img-fluid gallery-img"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                alt="Animal 3"
                className="img-fluid gallery-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-5">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="team-member">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2Ff5f47794-0c60-4345-90ef-39acc9b98867-user-pic%20(1).png?alt=media&token=40395980-1860-479d-8979-09105693dd62"
                  alt="John Doe"
                  className="rounded-circle"
                />
                <h3>Harsh Porwal</h3>
                <p>Team Member 1 (21BCT0193)</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2FScreenshot%202024-10-06%20at%2010.49.29%E2%80%AFPM.png?alt=media&token=a0c47e12-a898-4203-93c9-7b2264884f93"
                  alt="Jane Smith"
                  className="rounded-circle"
                />
                <h3>Aadi Jain</h3>
                <p>Team Member 2 (21BCT0425)</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2F3bfb5eee-eab3-4bde-bad3-013fefe21c98.jpeg?alt=media&token=4c725db1-e3be-41b7-ad3e-3c6ddcbb2d14"
                  alt="Mike Johnson"
                  className="rounded-circle"
                />
                <h3>Gyaneshwar Jha</h3>
                <p>Team Member 3 (21BCT0186)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <div>Made With ❤️ By Team - Animal HealthCare Monitoring</div>
      </section>
    </div>
  );
}

export default Home;
