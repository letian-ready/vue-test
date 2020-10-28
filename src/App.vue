<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <CourseList :courses="courses"></CourseList>
  </div>
</template>

<script>
import CourseList from '@/components/CourseList.vue'
import {getCourses} from "@/api/course";

export default {
  name: 'App',
  components: {
    CourseList
  },
  data() {
    return {
      title: '购物车',
      course: '',
      courses: [],
    }
  },
  // created钩子中调用接口
  async created(){
    // 组件实例已创建，由于未挂载，dom不存在
    const courses = await getCourses()
    this.courses = courses
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
