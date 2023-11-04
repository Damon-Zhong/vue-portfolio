<template>
  <div class="form-container">
    <form action="">
      <div class="nickname-container">
        <input type="text" maxlength="10" placeholder="用户昵称" />
        <span class="counter-text">10/10</span>
      </div>
      <div class="error-container">sjdiaodjasdjoias</div>
      <div class="content-input-container">
        <textarea name="content" id="" rows="10" placeholder="输入内容" />
        <div class="error-container">sjdiaodjasdjoias</div>
      </div>
     
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";

.nickname-container {
  width: 50%;
  position: relative;
}

input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px dashed @grey;
  outline: none;
  color: @words;
  font-size: 14px;
  border-radius: 4px;
  padding: 5px;

  &:focus {
    border-color: @primary;
    border-style: solid;
  }
}

.content-input-container {
    margin: 12px 0;
}

.counter-text {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: @grey;
  font-size: 12px;
}

textarea {
  width: 100%;
}

button {
  color: @white;
  background-color: @primary;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: darken(@primary, 10%);
  }

  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}

.error-container {
  color: @danger;
  font-size: 14px;
  margin-top: 0;
  height: 20px;
  line-height: 20px;
}
</style>