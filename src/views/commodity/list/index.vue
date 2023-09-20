<template>
  <div class="product-list">
    <div v-for="(item, index) in goods" class="product" :key="index" @click="goDetail(item)">
      <img :src="item.imgUrl" onerror="this.src = '/src/assets/vue.svg'" :alt="item.name" />
      <div class="product__name">{{ item.name }}</div>
      <div class="product__price">￥: {{ item.price }}</div>
    </div>

    <!-- 更多商品 -->
  </div>
</template>

<script setup>
import { userStore } from "@/stores/user";
import { onMounted, computed, ref } from "vue";
import { getGoodsList } from "@/api/commodity";
import { useRouter } from "vue-router";
const router = useRouter();

const goods = ref([]);

const getList = () => {
  getGoodsList().then((res) => {
    goods.value = res.list;
  });
};

const goDetail = (item) => {
    router.push({
      name: "CommodityDetail",
      params: {
        id: item.id,
      },
    });
}

getList();
</script>

<style lang="scss" scoped>
.product-list {
  column-count: 2; /* 列数 */
  column-gap: 20px; /* 列之间的间距 */
}

.product {
  break-inside: avoid; /* 避免在元素内部分隔内容 */
  margin-bottom: 20px; /* 商品之间的间距 */
  &__name {
    padding: 2px 2px;
    font-size: 14px;
    color: #333;
    font-weight: 700;
    display: -webkit-box; /* 设置为弹性盒子模型 */
    -webkit-box-orient: vertical; /* 设置为垂直排列 */
    -webkit-line-clamp: 2; /* 设置最大显示行数为2行 */
    overflow: hidden; /* 超出部分隐藏 */
    text-overflow: ellipsis; /* 用省略号代替溢出的文本 */
  }
  &__price {
      color: red;
      padding-left: 2px;
  }
}

.product img {
  width: 100%;
  height: auto;
}
</style>
