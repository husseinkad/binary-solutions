<template>
    <div>
      <transition name="fade">
        <section class="hero-section">
          <h2 class="text-3xl font-bold text-lime-500 mb-5 text-center">About Us</h2>
          <p class="text-l text-center mb-10">We are a team of passionate individuals dedicated to creating the best digital solutions for our clients.</p>
          <div class="info-sections">
            <section class="info-section mission-section">
              <h3 class="text-xl font-bold text-lime-500 mb-3 animated fadeInDown">Our Mission</h3>
              <p class="animated fadeInUp">Our mission is to transform the digital world, one bit at a time.</p>
            </section>
            <section class="info-section values-section">
              <h3 class="text-xl text-lime-500 font-bold mb-3 animated fadeInDown">Our Values</h3>
              <ul class="list-disc list-inside animated fadeInUp">
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Customer Satisfaction</li>
                <!-- Add more values here -->
              </ul>
            </section>
            <section class="info-section choose-us-section">
              <h3 class="text-xl text-lime-500 font-bold text-lime-500 mb-3 animated fadeInDown">Why Choose Us?</h3>
              <p class="animated fadeInUp">We provide the best digital solutions with a dedicated team of experts.</p>
            </section>
          </div>
        </section>
      </transition>
      <!-- Removed sections -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
  }
  </script>
  
  <style scoped>
.hero-section {
  background: url('https://cdn.wallpapersafari.com/86/53/T0W6hr.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 50px;
  text-align: center;
}
.hero-section h2 {
  color: #5adc39; /* Green color */
}

.info-sections {
  display: flex;
  justify-content: center; /* Center items */
  flex-wrap: wrap;
  margin: 50px; /* Increase margin */
}
.info-section {
  padding: 20px;
  background: white; /* White color */
  margin: 50px; /* Increase margin */
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  width: 30%;
  min-width: 200px;
  transition: transform 0.3s ease-in-out; /* Add transition for hover effect */
  text-align: center; /* Center text */
}
.info-section:hover {
  transform: scale(1.05); /* Add scale effect on hover */
}

.info-section p, .info-section ul {
  color: black; /* Black color */
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  .fadeInDown {
    animation-name: fadeInDown;
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  </style>