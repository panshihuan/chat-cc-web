<template>
  <Header>
    <div class="head">
      <div @click="gohome" class="cross">
        <van-icon name="cross" color="#fff" size="18px" />
      </div>
      <div class="link-register" @click="goLogin">登录</div>
    </div>

    <div class="login">用户注册</div>
  </Header>

  <div class="login-wrap">
    <div class="title">用户注册</div>

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="state.username"
          name="用户名"
          label="用户名"
          placeholder="用户名/手机号码"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="state.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
//   import axios from '@/api/axios.js';
import { showToast } from "vant";
import { register } from "@/api/user";

const router = useRouter();

const state = reactive({
  username: "",
  password: "",
});

//登录
const onSubmit = async () => {
  //发接口请求，把用户输入的账号和密码传给后端
  register({
    username: state.username,
    password: state.password,
  }).then(() => {
    setTimeout(() => {
      showToast({
        type: "success",
        message: "注册成功!",
      });
      router.push({ path: "/login" });
    }, 1500);
  });
};

//去注册
const goLogin = () => {
  router.push("/login");
};

//没登录可让其看商品
const gohome = () => {
  router.push("/home");
};
</script>

<style lang="scss" scoped>
Header {
  height: 200px;
  width: 100%;
  background-image: url("../../assets/images/1.jpg");

  .head {
    height: 50px;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .link-register {
      color: #efefef;
      font-size: 17px;
    }
  }

  .login {
    width: 100%;
    color: #efefef;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
  }
}

.login-wrap {
  width: 90%;
  height: 300px;
  background: #fff;
  border-radius: 3%;
  box-shadow: 0 0 0 3px #efefef;
  margin: 0 auto;
  margin-top: -90px;

  .title {
    color: #373737;
    text-align: center;
    font-size: 16px;
    line-height: 16px;
    padding-bottom: 40px;
    padding-top: 40px;
  }
}

.footer {
  width: 100%;
  padding: 60px 40px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    i {
      font-size: 40px;
    }
  }
}
</style>
