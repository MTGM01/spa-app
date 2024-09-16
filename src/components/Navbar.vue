<script>
import { RouterLink } from 'vue-router'

export default {
    name: 'Navbar'
}
</script>

<template>

    <header class="header">
        <nav class="navbar">
            <ul class="list">
                <li class="list-item">
                    <RouterLink class="link" :to="{ name: 'homePage' }">HOME</RouterLink>
                    <!-- <RouterLink to="/home">HOME</RouterLink> -->
                </li>
                <li class="list-item">
                    <RouterLink class="link" :to="{ name: 'loginPage' }">LOGIN</RouterLink>
                    <!-- <RouterLink to="/login">LOGIN</RouterLink> -->
                </li>
                <li class="list-item">
                    <RouterLink class="link" :to="{ name: 'registerPage' }">REGISTER</RouterLink>
                    <!-- <RouterLink to="/register">REGISTER</RouterLink> -->
                </li>
                <li class="list-item">
                    <RouterLink class="link" :to="{ name: 'coursesPage' }">COURSES</RouterLink>
                    <!-- <RouterLink to="/courses">COURSES</RouterLink> -->
                </li>
            </ul>
            <div class="logo">
                LOGO
            </div>
        </nav>
    </header>

</template>

<style scoped>
.header {
    background-color: white;
    box-shadow: 1px 2px 3px grey;
    padding: 8px;
    border-radius: 3px;
    margin: 10px auto;
    width: 99%;
}

.navbar {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1px;
    list-style: none;
}

.list-item {
    background-color: gray;
    padding: 20px;
    color: white;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.link {
    background-color: gray;
    text-decoration: none;
}

.list-item:first-child {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
}

.list-item:last-child {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}

.logo {
    background-color: gray;
    border-radius: 100%;
    padding: 20px 7px;
    color: white;
}
</style>