<template>
  <ul class="contact-container">
    <li>
      <a href="https://github.com/Damon-Zhong" target="_blank">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>Damon Zhong</span>
      </a>
    </li>

    <li>
      <a href="mailto:damon.yq.zhong@gmail.com">
        <div class="icon">
          <Icon type="email" />
        </div>
        <span>damon.yq.zhong@gmail.com</span>
      </a>
    </li>

    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>DamonZhong</span>
      </a>
      <div class="popout">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
        />
      </div>
    </li>

    <li>
      <a
        href="tencent://message/?Menu=yes&uni=254671616546&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>dsajiodajsoida</span>
      </a>
      <div class="popout">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.module.less";
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @grey;

  li {
    height: 30px;
    margin: 14px 0;
    position: relative;

    &:hover {
      .popout {
        transform: scale(1);
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.9em;
  }

  .icon {
    font-size: 26px;
    width: 36px;

    &.weixin {
        font-size: 32px;
        text-indent: -3px;
    }
  }
}

.popout {
  border: 1px solid green;
  opacity: 1;
  position: absolute;
  bottom: 100% + 5px;
  background-color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  transform: scaleY(0);
  transform-origin: center bottom;
  transition: 0.5s;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -4px;
    transform: translateX(-50%) rotate(45deg);
    width: 8px;
    height: 8px;
    background-color: #fff;
  }

  img {
    width: 150px;
    aspect-ratio: 1;
    object-fit: cover;
  }
}
</style>