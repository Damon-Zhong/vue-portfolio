<template>
  <div class="message-area-container">
    <MessageForm v-on="$listeners" />
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
            default:() => []
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