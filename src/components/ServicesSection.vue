<template>
  <section class="services py-20 overflow-hidden">
    <div class="container mx-auto relative">
      <h2 class="text-4xl font-bold text-center text-green-500 mb-10 relative z-10">
        Our Services
        <span class="block text-3xl font-light">
          Boost Your Business with Innovative Solutions
        </span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        <div class="service-card" v-for="service in services" :key="service.id">
          <span class="service-card__icon text-4xl text-center mb-4">{{ service.icon }}</span>
          <h3 class="service-card__title">{{ service.title }}</h3>
          <p class="service-card__description">{{ service.description }}</p>
        </div>
      </div>

      <div class="absolute inset-0 w-full h-full bg-gray-100 opacity-20 blur-3xl z-0"></div>
      <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 to-blue-500 opacity-10 z-0"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        { id: 1, title: 'Web Development', description: 'Build beautiful and functional websites.', icon: '🌐' },
        { id: 2, title: 'Mobile App Development', description: 'Create engaging mobile apps for any platform.', icon: '📱' },
        { id: 3, title: 'Search Engine Optimization (SEO)', description: 'Improve your website visibility in search results.', icon: '🔍' },
        { id: 4, title: 'Social Media Marketing', description: 'Grow your brand and reach new customers on social media.', icon: '📣' },
        { id: 5, title: 'Graphic Design', description: 'Create stunning visuals to elevate your brand identity.', icon: '🎨' },
        { id: 6, title: 'Content Marketing', description: 'Craft compelling content that attracts and engages your audience.', icon: '✍️' },
      ],
    };
  },
};
</script>

<style scoped>
.services {
  background-color: #f5f5f5;
  padding: 20px 0; /* Add vertical padding to the services section */
}

.container {
  position: relative;
  z-index: 1;
  padding: 100px 100px; /* Add horizontal padding to the container */
}

.service-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  margin-bottom: 20px; /* Add bottom margin to the service cards */
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
}

.service-card__icon {
  display: block;
  text-align: center;
  font-size: 50px;
  margin-bottom: 20px;
}

.service-card__title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.service-card__description {
  color: #777;
  margin-bottom: 10px; /* Add bottom margin to the description */
}
</style>