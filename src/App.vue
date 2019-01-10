<template>
  <div id="app">
    <div>
      <p>通过父组件实现兄弟组件通信：</p>
      <component1 msg="组件1" :showOrNot="showOrNot"/>
      <component2 @click-btn="clickBtnHandler" msg="组件2"/>
    </div>
    <div>
      <p>通过event bus实现兄弟组件通信：</p>
      <component3 msg="组件3"></component3>
      <component4 msg="组件4"></component4>
    </div>
  </div>
</template>

<script>
import component1 from './components/component1.vue';
import component2 from './components/component2.vue';
import component3 from './components/component3.vue';
import component4 from './components/component4.vue';



export default {
  name: 'app',
  components: {
    component1,
    component2,
    component3,
    component4
  },
  data() {
    return {
      showOrNot: false
    }
  },
  methods: {
    clickBtnHandler() {
      this.showOrNot = !this.showOrNot;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
