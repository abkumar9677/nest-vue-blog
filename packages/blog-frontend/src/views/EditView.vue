<template>
  <div class="edit">
    <h1>This is an edit page</h1>
    <EditPost />
  </div>
</template>

<script>
import EditPost from "@/components/post/Edit-post.vue";

export default {
  name: " EditPost",
  components: {
    EditPost,
  },
};
</script>
