<template>
  <div class="dify">
    <iframe
      src="https://udify.app/chatbot/l3xQjjOv9fiaj1Zu"
      style="width: 100vw; height: 100vh;overflow: hidden;"
      frameborder="0"
      allow="microphone"
    >
    </iframe>
  </div>
</template>

<script setup>
import { userStore } from "@/stores/user";
import { onMounted, computed, ref } from "vue";
import { getUserInfo } from "@/api/common";
import { sendChatGPT } from "@/api/chat";

const user = ref({});
const message = ref("");

onMounted(() => {});

const store = userStore();
const { userInfo } = store;
user.value = userInfo;

const computedUser = computed(() => {
  const store = userStore();
  const { userInfo } = store;
  return userInfo;
});

// getUserInfo();

const handleSend = () => {
  console.log(1111, message.value);
  sendChatGPT({ message: message.value }).then((res) => {
    console.log(666666, res);
  });
  message.value = "";
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
