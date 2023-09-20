<template>
  <Header>
    <div class="head">
      <div @click="gohome" class="cross">
        <van-icon name="cross" color="#fff" size="18px" />
      </div>
      <div class="link-register" @click="goRegister">注册</div>
    </div>

    <div class="login" v-loading="loading">用户登录</div>
  </Header>

  <div class="login-wrap">
    <div class="title">账号密码登录</div>

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="state.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
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
          登录
        </van-button>
      </div>
    </van-form>
  </div>

  <div class="footer">
    <div class="wx">
      <i class="iconfont icon-weixin" style="color: rgb(67, 165, 68)"></i>
      <span>微信登录</span>
    </div>
    <div class="sj">
      <i class="iconfont icon-shouji1" style="color: rgb(85, 151, 226)"></i>
      <span>本机号码一键登录</span>
    </div>
    <div class="pg">
      <i class="iconfont icon-gitee" style="color: rgb(169, 21, 21)"></i>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
//   import axios from '@/api/axios.js';
import { showToast } from "vant";
import { login } from "@/api/user";

const router = useRouter();

const state = reactive({
  username: "",
  password: "",
});

const loading = ref(false);

//登录
const onSubmit = async () => {
  loading.value = true;
  //发接口请求，把用户输入的账号和密码传给后端
  await login({
    username: state.username,
    password: state.password,
  })
    .then((res) => {
      if (res?.token) {
        localStorage.setItem("token", res.token);
        setTimeout(() => {
          router.push({ path: "/index" });
        }, 1000);
      }
    }).catch(err => {
      console.log(1111444, err)
    })
    .finally(() => {
      loading.value = false;
    });
};

//去注册
const goRegister = () => {
  router.push("/register");
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
