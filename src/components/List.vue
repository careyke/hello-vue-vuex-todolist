<template>
  <div class="container">
    <div class="inputContainer">
      <span class="check">
        <img />
      </span>
      <input class="input" />
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

import uncheckImg from "../assets/uncheck.png";
import checkImg from "../assets/check.png";

export default {
  name: "List",
  components: [ListItem],
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 600px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
}
.inputContainer {
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
  font-size: 24px;
  .check {
    display: flex;
    height: 40px;
    align-items: center;
    margin-right: 15px;
    flex-shrink: 0;
  }
  .input {
    flex-grow: 1;
    margin-right: 15px;
  }
}
</style>
