<template>
  <div class="item">
    <span class="check" @click="handleCheckClick">
      <img :src="imgSrc" />
    </span>
    <div></div>
    <span class="delete">
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
    id: {
      required: true,
      type: Number,
    },
    text: {
      required: true,
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    imgSrc: function () {
      return this.completed ? checkImg : uncheckImg;
    },
  },
  methods: {
    handleCheckClick: function () {
      this.completed = !this.completed;
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
}
.check {
  display: flex;
  height: 40px;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
}
.delete {
  display: flex;
  height: 40px;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
  .icon {
    display: none;
  }
  &:hover {
    .icon {
      display: block;
    }
  }
}
</style>
