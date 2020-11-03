<template>
  <div class="admin">
    <message ref="msgSuccess" class="success">
      <!-- 命名为title插槽内容 -->
      <template v-slot:title="slotProps">
        <strong>{{slotProps.title}}</strong>
      </template>
      <!-- 默认插槽内容-->
      <template v-slot:default>
        新增课程成功
      </template>
    </message>

    <!--新增警告提示窗-->
    <message ref="msgWarning" class="warning">
      <template v-slot:title>
        <strong>警告</strong>
      </template>
      <template v-slot:default>
        请输入课程名称！
      </template>
    </message>

    <h2 :title="title">
      <svg class="icon">
        <use xlink:href="#icon-cart"></use>
      </svg>
      <!-- 插值文本 -->
      {{title}}
    </h2>

    <!-- toolbar -->
    <div class="toolbar">
      <button @click= "$bus.$emit('message-close')">清空提示框</button>
    </div>

    <CourseAdd v-model="course" @add-course="addCourse"></CourseAdd>

    <CourseList :courses="courses"></CourseList>

    <p>
      课程总数：{{totalCount}}
    </p>

    <!-- 嵌套内容的出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import CourseList from '@/components/CourseList';
import CourseAdd from "@/components/CourseAdd";
import Message from "@/components/Message";
import {getCourses} from "@/api/course";

export default {
  name: 'admin',
  components: {
    CourseList,
    CourseAdd,
    Message
  },
  data() {
    return {
      title: '购物车',
      course: '',
      courses: [],
      totalCount: 0,
      price: 0
    }
  },
  // created钩子中调用接口
  async created(){
    // 组件实例已创建，由于未挂载，dom不存在
    const courses = await getCourses()
    this.courses = courses
  },
  methods: {
    addCourse(){
      if(this.course) {
        // 1.添加course到数组
        this.courses.push({name: this.course})
        this.course = ''

        // 2.显示提示信息
        // this.show = true
        this.$refs.msgSuccess.toggle()
      } else {
        // 显示错误信息
        // this.showWarn = true
        this.$refs.msgWarning.toggle()
      }
    },
  },
  computed: {
    total(){
      // 计算属性有缓存性：如果没有发生变化，则页面不会重新渲染
      return this.courses.length + '门'
    }
  },
  watch: {
    courses: {
      immediate: true,
      // deep: true,
      handler(newValue){
        this.totalCount = newValue.length + '门'
      }
    }
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  }
}
  // beforeRouteEnter(to, from, next) {
  //   if (window.isLogin) {
  //     next();
  //   } else {
  //     next("/login?redirect=" + to.fullPath);
  //   }
  // }

</script>
