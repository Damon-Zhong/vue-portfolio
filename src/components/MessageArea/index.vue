<template>
  <div class="message-area-container">
    <MessageForm />
    <h3>{{ title }} <span>{{ subTitle }}</span></h3>
    <MessageList :listData="list" />
    <Loader v-if="isListLoading"></Loader>
  </div>
</template>

<script>
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import Loader from '@/components/Loader'

export default {
    components: {
        MessageForm,
        MessageList,
        Loader
    },
    props: {
        title: {
            type: String,
            default: "评论区"
        },
        subTitle:   {
            type: String,
            default: "(86)"
        },
        list: {
            type: Array,
            default: [
                {
                    nickname: "abc1",
                    content: "jdiasjdoiajsiodjaoijdsioajsoijdsao",
                    avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
                },
                {
                    nickname: "abc2",
                    content: "jdiasjdoiajsiodjaoijdsioajsoijdsao",
                    avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
                },
                {
                    nickname: "abc3",
                    content: "jdiasjdoiajsiodjaoijdsioajsoijdsao",
                    avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
                },
                {
                    nickname: "abc4",
                    content: "jdiasjdoiajsiodjaoijdsioajsoijdsao",
                    avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png"
                },
                {
                    nickname: "abc5",
                    content: "jdiasjdoiajsiodjaoijdsioajsoijdsao",
                    avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png"
                }
            ]
        },
        isListLoading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>