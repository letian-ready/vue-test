<template>
  <div>
    <!-- 用户输入 -->
    <p>
      <input type="text" :value="val"
             @change="onChange"
             v-on:keydown.enter="addCourse"
             ref="inp">
      <button @click="addCourse">新增</button>
    </p>
  </div>
</template>

<script>
export default {
  props: ['val'],
  model: {
    value: 'val',
    event: 'change'
  },
  template: ``,
  methods: {
    addCourse() {
      // 派发事件通知父组件新增课程
      this.$emit('add-course')
      // this.course = ''
    },
    onChange(e){
      this.$emit('change', e.target.value)
    }
  },
}
</script>

<style scoped>

</style>