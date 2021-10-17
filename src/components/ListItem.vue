<template>
  <div class="item">
    <span class="check" @click="handleCheckClick">
      <img :src="imgSrc" />
    </span>
    <div class="text">{{ todo.text }}</div>
    <span class="delete" @click="deleteTodo">
      <img class="icon" src="../assets/cha.png" />
    </span>
  </div>
</template>

<script>
import uncheckImg from "../assets/uncheck.png";
import checkImg from "../assets/check.png";

export default {
  name: "ListItem",
  props: {
    todo: {
      required: true,
      type: Object,
    },
  },
  computed: {
    imgSrc: function () {
      return this.todo.completed ? checkImg : uncheckImg;
    },
  },
  methods: {
    handleCheckClick() {
      this.$store.commit("toggleTodo", {
        ...this.todo,
        completed: !this.todo.completed,
      });
    },
    deleteTodo() {
      this.$store.commit("deleteTodo", this.todo.id);
    },
  },
};
</script>

<style lang="less" scoped>
.item {
  display: flex;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  position: relative;
  align-items: center;
  &:hover {
    .delete {
      display: flex;
    }
  }
}
.check {
  display: flex;
  height: 40px;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
}
.text {
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.delete {
  display: none;
  height: 40px;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
}
</style>
