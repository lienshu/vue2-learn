<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="divStyle">
      <div class="divSon div1"></div>
      <div class="divSon div2"></div>
      <div class="divSon div3"></div>
      <div class="divSon div1"></div>
      <div class="divSon div2"></div>
      <div class="divSon div3"></div>
      <div class="divSon div1"></div>
      <div class="divSon div2"></div>
      <div class="divSon div3"></div>
      <div class="divSon div1"></div>
      <div class="divSon div2"></div>
      <div class="divSon div3"></div>
      <!-- <div class="divSon div1"></div>
      <div class="divSon div2"></div>
      <div class="divSon div3"></div>
      <div class="divSon div1"></div>
      <div class="divSon div2"></div>
      <div class="divSon div3"></div>
      <div class="divSon div1"></div>
      <div class="divSon div2"></div>
      <div class="divSon div3"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.divStyle{
  display:flex;
  /* flex-direction: row-reverse; */
  border: 1px solid #000;
  padding: 20px;
  /* flex-wrap: wrap-reverse; */
  flex-flow: row-reverse wrap-reverse;
  align-items: baseline;
}
.divSon{
  /* height: 300px; */
  width: 200px;
  margin: 20px;
}
.div1{
  background-color: aquamarine;
  height: 300px;
  order: 10;
  align-self: flex-end;
}
.div2{
  background-color: tomato;
  height: 400px;
  flex-grow: 2;
  order: 5;
  align-self: flex-end;
}
.div3{
  background-color: skyblue;
  height: 500px;
  order: 1;
  align-self: flex-start;
}
</style>
