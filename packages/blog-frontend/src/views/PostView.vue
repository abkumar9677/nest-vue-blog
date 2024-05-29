<template>
  <div class="post">
    <h1>This is an post page</h1>
    <PostDetailVue />
  </div>
</template>

<script>
import PostDetailVue from "@/components/post/Post-detail.vue";

export default {
  name: " CreatePost",
  components: {
    PostDetailVue,
  },
};
</script>
