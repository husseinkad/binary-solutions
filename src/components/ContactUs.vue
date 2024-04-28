<template>
    <div class="container">
      <h2 class="title">Contact Us</h2>
      <p class="description">We would love to hear from you! Please fill out this form and we will get in touch with you shortly.</p>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactUs',
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submitForm() {
        console.log(this.name, this.email, this.message);
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #001d47;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin: auto;
    max-width: 500px;
  }
  
  .container.dark-mode {
  background-color: #333;
  color: #fff;
}
  .title {
    color: #28a745;
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .description {
    color: #6c757d;
    margin-bottom: 20px;
  }
  
  .contact-form {
    width: 100%;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  
  .form-group label {
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group textarea {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #6c757d;
  }
  
  .submit-btn {
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-btn:hover {
    background-color: #218838;
  }
  </style>