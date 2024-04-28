<template>
    <div class="flex flex-col">
      <h2 class="text-2xl font-bold text-green-500 mb-5">Blog</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="blog-post group" v-for="post in displayedPosts" :key="post.id">
          <router-link :to="`/blog/${post.id}`">
            <img :src="post.image" alt="" class="blog-post__image mb-4 rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300" style="width: 200px;">
          </router-link>
          <h3 class="blog-post__title text-xl font-bold mb-2">{{ post.title }}</h3>
          <p class="blog-post__excerpt text-gray-500">{{ post.excerpt }}</p>
        </div>
      </div>
      <button v-if="hasMorePosts" @click="loadMore" class="load-more mt-8 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300">Load more</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogSection',
    data() {
      return {
        postsPerPage: 6,
        currentPage: 1,
        posts: [
          { id: 1, title: 'Blog Post 1', excerpt: 'This is the excerpt for blog post 1.', image: 'https://via.placeholder.com/150' },
          { id: 2, title: 'Blog Post 2', excerpt: 'This is the excerpt for blog post 2.', image: 'https://via.placeholder.com/150' },
          // Add more posts here
        ],
      };
    },
    computed: {
      displayedPosts() {
        return this.posts.slice(0, this.currentPage * this.postsPerPage);
      },
      hasMorePosts() {
        return this.posts.length > this.currentPage * this.postsPerPage;
      },
    },
    methods: {
      loadMore() {
        this.currentPage += 1;
      },
    },
  };
  </script>
  
  <style scoped>
  .blog-post {
    transition: transform 0.3s ease-in-out;
  }
  
  .blog-post:hover {
    transform: scale(1.05);
  }
  </style>