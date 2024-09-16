<script>
import { RouterLink } from 'vue-router'

export default {
    name: 'Courses',
    data() {
        return {
            coursesInfo: [
                {
                    id: 1,
                    title: 'آموزش مقدماتی HTML',
                    imageUrl: '/images/HTML-852x479-2-1-1-768x432.webp',
                    description: 'آموزش رایگان و مقدماتی HTML با طعمی متفاوت + مینی پروژه های جذاب',
                    price: 'رایگان',
                    numberOfStudents: 302,
                    point: 4.8,
                    hour: '03:25'
                },
                {
                    id: 2,
                    title: 'سکوی پرتاب ورود به دنیای طراحی وب',
                    imageUrl: '/images/What-is-Web-design-main-picture.jpg',
                    description: 'سکوی پرتاب ورود به دنیای طراحی وب + مثال های جامع و زنده ;)',
                    price: 'رایگان',
                    numberOfStudents: 234,
                    point: 4.4,
                    hour: '01:48'
                },
                {
                    id: 3,
                    title: 'آموزش مقدماتی CSS',
                    imageUrl: '/images/CSS-852x479-1-1-768x432.webp',
                    description: 'دوره آموزش رایگان CSS به همراه مینی پروژه های جذاب (مقدماتی)',
                    price: 'رایگان',
                    numberOfStudents: 210,
                    point: 4.8,
                    hour: '03:11'
                },
                {
                    id: 4,
                    title: 'آموزش مقدماتی تا پیشرفته Vue Js',
                    imageUrl: '/images/Com_vue-1-768x432.webp',
                    description: 'دوره آموزش رایگان Vue Js به همراه مینی پروژه های جذاب (مقدماتی تا پیشرفته)',
                    price: 'رایگان',
                    numberOfStudents: 500,
                    point: 5,
                    hour: '13:04'
                },
                {
                    id: 5,
                    title: 'آموزش دوره متخصص جاوا اسکریپت',
                    imageUrl: '/images/Com_JAVASCRIPT-1-768x432.webp',
                    description: 'دوره آموزش رایگان JavaScript به همراه مینی پروژه های جذاب (مقدماتی تا پیشرفته)',
                    price: 'رایگان',
                    numberOfStudents: 756,
                    point: 5,
                    hour: '110:56'
                },
                {
                    id: 6,
                    title: 'آموزش دوره متخصص Node Js',
                    imageUrl: '/images/ezgif.com-jpg-to-webp-converted-22-1-768x432.webp',
                    description: 'دوره آموزش رایگان Node Js به همراه مینی پروژه های جذاب (مقدماتی تا پیشرفته)',
                    price: '3,200,000',
                    numberOfStudents: 78,
                    point: 4.3,
                    hour: '65:20'
                },
                {
                    id: 7,
                    title: 'آموزش مقدماتی تا پیشرفته React Js',
                    imageUrl: '/images/Com_react-1-768x432.webp',
                    description: 'دوره آموزش رایگان React Js به همراه مینی پروژه های جذاب (مقدماتی تا پیشرفته)',
                    price: '1,720,000',
                    numberOfStudents: 456,
                    point: 4.9,
                    hour: '23:40'
                },
                {
                    id: 8,
                    title: 'آموزش مقدماتی تا پیشرفته React Js Libraries',
                    imageUrl: '/images/ezgif.com-jpg-to-webp-converted-29-1-768x432.webp',
                    description: 'دوره آموزش رایگان React Js Libraries به همراه مینی پروژه های جذاب (مقدماتی تا پیشرفته)',
                    price: '250,000',
                    numberOfStudents: 125,
                    point: 4.6,
                    hour: '10:00'
                },
                {
                    id: 9,
                    title: 'آموزش مقدماتی تا پیشرفته Angular Js',
                    imageUrl: '/images/angular-js.png',
                    description: 'دوره آموزش رایگان Angular Js به همراه مینی پروژه های جذاب (مقدماتی تا پیشرفته)',
                    price: '3,150,000',
                    numberOfStudents: 190,
                    point: 4.1,
                    hour: '32:45'
                },
                {
                    id: 10,
                    title: 'آموزش مقدماتی تا پیشرفته Tailwind CSS',
                    imageUrl: '/images/tailwind-css.png',
                    description: 'دوره آموزش رایگان Tailwind CSS به همراه مینی پروژه های جذاب (مقدماتی تا پیشرفته)',
                    price: '590,000',
                    numberOfStudents: 856,
                    point: 3.9,
                    hour: '04:30'
                }
            ]
        }
    },
    mounted() {
        console.log(this);
    }
}
</script>

<template>
    <section class="container">
        <div v-for="(courseInfo, i) in coursesInfo" :key="i" class="course-container">
            <img class="course-image" :src="courseInfo.imageUrl" :alt="courseInfo.title" :title="courseInfo.title"
                width="100%" height="250px" />
            <p class="description">{{ courseInfo.description }}</p>
            <div class="price-go-container">
                <RouterLink :to="{ name: 'coursePage', params: { courseId: courseInfo.id } }" class="arrow">
                    <img src="/images/arrow-left-icon-2048x1433-le08mlmd.png" alt="مشاهده دوره" title="مشاهده دوره"
                        width="20px" />
                </RouterLink>
                <!-- <a href="#" class="arrow">
                    <img src="/images/arrow-left-icon-2048x1433-le08mlmd.png" alt="مشاهده دوره" title="مشاهده دوره"
                        width="20px" />
                </a> -->
                <span class="price">{{ courseInfo.price }}</span>
            </div>
            <div class="footer-container">
                <div class="footer-detail-container">
                    <img src="/images/star.png" alt="star-icon" width="20px" />
                    <span>{{ courseInfo.point }}</span>
                </div>
                <div class="footer-detail-container">
                    <img src="/images/clock.png" alt="clock-icon" width="20px" />
                    <span>{{ courseInfo.hour }}</span>
                </div>
                <div class="footer-detail-container">
                    <img src="/images/persons.png" alt="persons-icon" width="20px" />
                    <span>{{ courseInfo.numberOfStudents }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    align-items: center;
    justify-content: space-around;
    width: 100%;
}

.course-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: fit-content;
}

.price-go-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.footer-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
}

.footer-detail-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 7px;
}

.arrow {
    background-color: rgb(31, 173, 31);
    border-radius: 100%;
    padding: 7px 3px 5px;
}

.price {
    color: rgb(31, 173, 31);
}

.course-image {
    border-radius: 10px 10px 0 0;
}
</style>