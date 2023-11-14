<template>
  <form id="message-form" ref="messageForm" @submit.prevent="handleSubmit" action="" class="form-container">
    <div class="nickname-container">
      <input
        type="text"
        v-model="formInput.nickname"
        maxlength="10"
        placeholder="用户昵称"
      />
      <span class="counter-text">{{ formInput.nickname.length }}/10</span>
    </div>
    <div v-show="!!errors.nickname" class="error-container">
      {{ errors.nickname }}
    </div>
    <div class="content-input-container">
      <textarea
        name="content"
        v-model="formInput.content"
        rows="10"
        maxlength="300"
        placeholder="输入内容"
      />
      <span class="counter-text">{{ formInput.content.length }}/300</span>
      <div v-show="!!errors.content" class="error-container">
        {{ errors.content }}
      </div>
    </div>

    <button :disabled="isSubmitting" type="submit">
      {{ isSubmitting ? "提交中..." : "提交" }}
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formInput: {
        nickname: "",
        content: "",
      },
      errors: {
        nickname: "",
        content: "",
      },
      isSubmitting: false,
    };
  },
  methods: {
    handleSubmit(e) {
      this.errors.nickname = this.formInput.nickname ? "" : "请填写昵称";
      this.errors.content = this.formInput.content ? "" : "内容不能为空";

      if (this.errors.content || this.errors.nickname) {
        return;
      }

      this.isSubmitting = true;
      this.$emit("submit", this.formInput, (successMsg) => {
        this.$showMessage({
          content: successMsg,
          type: "success",
          duration: 1000,
          container: this.$refs.messageForm,
          onAnimationFinish: () => {
            this.formInput = {
              nickname: "",
              content: "",
            };
            this.isSubmitting = false;
          },
        });
      });
    },
  },
};
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
  position: relative;
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