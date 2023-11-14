<template>
  <ul class="message-list-container">
    <li v-for="(message, index) in listData" :key="message.id + index">
      <div class="message-container">
        <Avatar :size="44" :url="message.avatar" />
        <div class="message-content">
          <div class="basic-info-container">
            <p class="nickname">{{ message.nickname }}</p>
            <p class="timestamp">{{ message.createDate }}</p>
          </div>
          
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

.message-container {
  display: flex;
  border-bottom: 1px solid lighten(@grey, 20%);
  margin: 12px 0;
  padding: 0 12px 12px 0;

  .message-content{
    flex-grow: 1;
  }

  .basic-info-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    margin: 0 0 10px 12px;
  }

  .nickname {
    font-size: 16px;
    color: @success;
    font-weight: bold;
  }

  .timestamp {
    color: @grey;
    font-size: 14px;
  }
}
</style>