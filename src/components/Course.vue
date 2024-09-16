<script>
export default {
  name: 'Course',
  data() {
    return {
      courseId: this.$route.params.courseId
    }
  }
}
</script>

<template>
  <section>
    <h2>
      Course ID IS: |{{ courseId }}|
    </h2>
  </section>
</template>

<style scoped>
h2 {
  text-align: center;
}
</style>