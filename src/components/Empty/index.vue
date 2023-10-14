<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '../Icon';

export default {
    components: {
        Icon
    },
    props:{
        text: {
            type: String,
            default: "无数据"
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";
@import "~@/styles/mixin.module.less";

.empty-container {
    .self-center();
    color: @lightWords;

    .iconfont{
        font-size: 36px;
    }
}
</style>