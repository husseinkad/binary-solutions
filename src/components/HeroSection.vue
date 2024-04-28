<template>
    <div class="hero-section bg-black text-white flex flex-col items-center justify-center h-screen">
      <h2 class="text-4xl font-bold text-lime-500 mb-5 text-center">Transforming Businesses with Innovative Software Solutions</h2>
      <p class="text-xl text-center mb-10">We provide cutting-edge technology solutions to help your business thrive in the digital age.</p>
      <div>
        <button @click="navigateTo('get-started')" class="bg-lime-500 text-white py-3 px-6 rounded-full hover:bg-lime-400 transition ease-in-out duration-150 mr-4">Get Started</button>
        <button @click="navigateTo('services')" class="bg-lime-500 text-white py-3 px-6 rounded-full hover:bg-lime-400 transition ease-in-out duration-150">Explore Our Services</button>
      </div>
    </div>
</template>
  
  <script>
  import VueScrollTo from 'vue-scrollto'
  
  export default {
    name: 'HeroSection',
    methods: {
      navigateTo(section) {
        VueScrollTo.scrollTo(`#${section}`, 500)
      }
    },
  }
  </script>
  
  <style scoped>
  .hero-section {
    background: url('https://wallpapers.com/images/featured/space-sjryfre8k8f6i3ge.jpg') no-repeat center center fixed;
    background-size: cover;
  }
  
  button {
    font-size: 1.25rem;
    font-weight: bold;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  </style>