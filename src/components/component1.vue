<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-show="showContent">点击组件2按钮展示或隐藏</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    showOrNot: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // showContent: false
    }
  },
  computed: {
    showContent() {
      return this.showOrNot;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
