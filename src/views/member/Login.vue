<template>
  <div id="container" class="login">login</div>
</template>
<script lang="ts">
export default {
  name: "Login",
  data():any {
    return {
      login: {
        email: "",
        password: "",
      },
      saveId: false,
      snsState: Math.floor(Math.random() * 10000),
    };
  },
  mounted():any {
    console.log(1)
  },
};
</script>
