<template>
  <div class="modal-container">
    <div class="content">
        <slot></slot>
    </div>
    <button>确定</button>
    <button>关闭</button>
  </div>
</template>

<script>
export default {
  props: {
  }
} 
</script>

<style lang="less" scoped>
.modal-container{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    // border: 2px solid green
}
</style>