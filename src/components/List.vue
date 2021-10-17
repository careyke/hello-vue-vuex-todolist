<template>
  <div class="container">
    <div class="inputContainer">
      <span class="check">
        <img :src="finishImg" @click="toggleAllTodos" />
      </span>
      <input v-model="text" class="input" @keydown.enter="addTodo" />
    </div>
    <div class="list">
      <ListItem v-for="todo in currentTodos" :key="todo.id" :todo="todo" />
    </div>
    <div class="bottom">
      <span class="left">{{ $store.getters.undoCount }} items left</span>
      <span class="center">
        <span
          v-for="item in types"
          :key="item.value"
          :class="{ active: activeType === item.value }"
          @click="switchType(item.value)"
          >{{ item.label }}</span
        >
      </span>
      <span class="right" @click="deleteCompletedTodos">Clear completed</span>
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

import uncheckImg from "../assets/uncheck.png";
import checkImg from "../assets/check.png";

const types = [
  { label: "All", value: 0 },
  { label: "Active", value: 1 },
  { label: "Completed", value: 2 },
];

export default {
  name: "List",
  components: { ListItem },
  data: function () {
    return {
      activeType: 0,
      text: "",
      types: types,
    };
  },
  computed: {
    currentTodos: function () {
      switch (this.activeType) {
        case 0:
          return this.$store.state.todos;
        case 1:
          return this.$store.getters.undoTodos;
        default:
          return this.$store.getters.doneTodos;
      }
    },
    finishImg: function () {
      return this.$store.getters.finished ? checkImg : uncheckImg;
    },
  },
  methods: {
    switchType(type) {
      this.activeType = type;
    },
    addTodo() {
      this.$store.commit("addTodo", this.text);
      this.text = "";
    },
    toggleAllTodos() {
      console.log(this.$store.getters.finished);
      this.$store.commit("toggleAllTodos", !this.$store.getters.finished);
    },
    deleteCompletedTodos() {
      this.$store.commit("deleteCompletedTodos");
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 600px;
  max-height: 800px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
}
.inputContainer {
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
  font-size: 24px;
  display: flex;
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
.list {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.bottom {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  .left {
    margin-right: 15px;
  }
  .center {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    span {
      margin: 0 10px;
      cursor: pointer;
    }
    .active {
      color: red;
    }
  }
  .right {
    margin-left: 15px;
    cursor: pointer;
  }
}
</style>
