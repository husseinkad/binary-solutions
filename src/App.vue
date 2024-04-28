<template>
  <div class="min-h-screen flex flex-col bg-black text-white">
    <header class="sticky top-0 z-50 bg-primary text-white py-5 shadow-md">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center">
          <img src="./assets/logo.png" alt="Binary Solutions Logo" class="h-12 mr-1">
        </div>
        <nav>
          <ul class="flex space-x-4">
      <li><a href="#home" @click="scrollTo('home')" class="hover:text-primary">Home</a></li>
      <li><a href="#about" @click="scrollTo('about')" class="hover:text-primary">About Us</a></li>
      <li><a href="#projects" @click="scrollTo('projects')" class="hover:text-primary">Projects</a></li>
      <li><a href="#services" @click="scrollTo('services')" class="hover:text-primary">Services</a></li>
      <li><a href="#blog" @click="scrollTo('blog')" class="hover:text-primary">Blog</a></li>
      <li><a href="#contact" @click="scrollTo('contact')" class="hover:text-primary">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="flex-grow p-5">
      <section id="home" class="mb-4">
        <HeroSection />
      </section>
      <section id="about" class="mb-4">
        <AboutUs />
      </section>
      <section id="services" class="mb-4">
        <ServicesSection />
      </section>
      <section id="projects" class="mb-4">
        <h2 class="text-2xl font-bold text-green-500 mb-2">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
      </section>
      <section id="blog" class="mb-4">
        <BlogSection />
      </section>
      <section id="contact" class="mb-4">
        <ContactUs />
      </section>
    </main>
    <footer class="text-center py-5 bg-green-500 text-white">
      <div>
        <p>&copy; 2022 Binary Solutions. All rights reserved.</p>
      </div>
    </footer>
    <a href="https://wa.me/1234567890" target="_blank" class="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-400 transition ease-in-out duration-150">
      <img src="whatsapp-icon.svg" alt="WhatsApp" class="h-8 w-8">
    </a>
  </div>
</template>

<style>

/* Update primary color to medium purple */
.bg-primary {
  background-color: #9370DB; /* Medium Purple */
}

.text-primary {
  color: #9370DB; /* Medium Purple */
}

/* Global animations */
.transition {
  transition: all 0.3s ease;
}

.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>

<script>
import ProjectCard from './components/ProjectCard.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import BlogSection from './components/Blog.vue'
import ContactUs from './components/ContactUs.vue'
import AboutUs from './components/AboutUs.vue' 
import VueScrollTo from 'vue-scrollto'

export default {
  name: 'App',
  components: {
    ProjectCard,
    HeroSection,
    ServicesSection,
    BlogSection,
    ContactUs,
    AboutUs
  },
  data() {
    return {
      title: 'Binary Solutions',
      projects: [
        { id: 1, name: 'Project 1', description: 'Description for Project 1' },
        { id: 2, name: 'Project 2', description: 'Description for Project 2' },
        // Add more projects here...
      ]
    }
  },
  methods: {
    scrollTo(section) {
      VueScrollTo.scrollTo(`#${section}`, 500)
    }
  },
}
</script>