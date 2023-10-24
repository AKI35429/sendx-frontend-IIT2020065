<template>
    <div>
      <form @submit="postData" method="post">
        <input class="mx=w=sm border-black" type="text" name="author" v-model="posts.author" /><br /> <br />
        <input type="text" name="title" v-model="posts.title" /><br /> <br />
        <button type="submit">Post</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'PostComponent',
    data() {
      return {
        posts: {
          title: null,
          author: null,
        },
      };
    },
    methods: {
      postData(e) {
        axios
          .post('http://localhost:5173/posts/', this.posts)
          .then((result) => {
            console.warn(result);
          });
        e.preventDefault();
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  