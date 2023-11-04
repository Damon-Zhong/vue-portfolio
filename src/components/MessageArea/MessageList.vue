<template>
  <ul class="message-list-container">
    <li v-for="(message, index) in listData" :key="message.nickname + index">
      <div class="message-container">
        <Avatar :size="50" :url="message.avatar" />
        <div class="message-content">
          <p class="nickname">{{ message.nickname }}</p>
          <p class="content">
            {{ message.content }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";

export default {
  components: {
    Avatar,
  },
  props: {
    listData: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}
.message-list-container {
}

.message-container {
  display: flex;
  border-bottom: 1px solid lighten(@grey, 20%);

  p {
    margin: 0 0 10px 12px;
  }

  .nickname {
    font-size: 16px;
    color: @success;
    font-weight: bold;
  }
}
</style>