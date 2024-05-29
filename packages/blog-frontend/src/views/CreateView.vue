<template>
  <div class="create">
    <CreateVue/>
    <h1>This is an create page</h1>
  </div>
</template>

<script>
import CreateVue from "@/components/post/Create-post.vue";

export default {
  name: " CreatePost",
  components: {
    CreateVue,
  },
};
</script>

