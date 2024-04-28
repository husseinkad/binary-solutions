<template>
    <div class="blog-post">
      <img :src="post.image" alt="" class="blog-post__image w-full h-64 object-cover mb-4 rounded-lg shadow-md">
      <h2 class="blog-post__title text-2xl font-bold mb-2">{{ post.title }}</h2>
      <p class="blog-post__content text-gray-500">{{ post.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogPost',
    data() {
      return {
        post: null,
      };
    },
    created() {
      // Fetch the blog post data from an API or your data source here
      // For now, we'll use a placeholder post
      this.post = {
        id: this.$route.params.id,
        title: 'Blog Post ' + this.$route.params.id,
        content: 'This is the content for blog post ' + this.$route.params.id + '.',
        image: 'https://via.placeholder.com/150',
      };
    },
  };
  </script>
  
  <style scoped>
  .blog-post {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
  </style>