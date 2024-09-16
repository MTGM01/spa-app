<script>
export default {
  name: 'Login'
}
</script>

<template>

  <section class="log-section">
    <form @submit.prevent class="log-form" action="#">
      <h3 class="form-title">
        Login
      </h3>
      <input placeholder="User Name" type="text" />
      <input placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  </section>

</template>

<style scoped>
.log-section {
  background-color: white;
  box-shadow: 1px 1px 3px grey;
  padding: 20px;
  margin: 20vh auto;
  width: 30vw
}

.log-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px
}

.form-title {
  color: rgb(213, 166, 166);
  font-weight: 700;
  font-size: 28px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

input {
  outline: none;
  border: 1px solid rgb(213, 166, 166);
  padding: 10px;
  width: 250px;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(213, 166, 166);
}

button {
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5px 20px;
  width: 250px;
  font-size: 15px;
  font-weight: 700;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: rgb(62, 163, 62);
  color: white;
  cursor: pointer;
}
</style>