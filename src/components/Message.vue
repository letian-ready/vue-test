<template>
  <div class="message-box" v-if="show">
    <slot name="title" title="来自message的标题">默认标题</slot>
    <slot></slot>
    <span class="message-box-close" @click="toggle">X</span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show: false
    }
  },
  // 具名插槽 // 通过slot获取传入的内容
  // <span class="message-box-close" @click="$emit('update:show', false)">
  template: ``,
  // 监听关闭事件
  mounted(){
    this.$bus.$on('message-close', () => {
      this.toggle()
    });
  },
  // 增加toggle方法维护toggle状态
  methods: {
    toggle() {
      this.show = !this.show;
    }
  },
}
</script>

<style scoped>
.message-box {
  padding: 10px 20px;
}
.message-box-close {
  float: right;
}
</style>