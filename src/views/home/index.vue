<template>
    <div class="home__menu">
        <div v-for="item in menus" class="home__item" @click="linkTo(item)">
            <div class="home__item__icon">
                {{ item.name }}
            </div>
        </div>
    </div>
</template>

<script setup>
    import { userStore } from '@/stores/user';
    import { onMounted, computed, ref } from 'vue';
    import { useRouter } from "vue-router";
    const router = useRouter();

    const user = ref({})
    const menus = ref([])

    onMounted(() => {
    });

    const store = userStore();
    const { userInfo } = store;
    user.value = userInfo;

    const computedUser = computed(() => {
        const store = userStore();
        const { userInfo } = store;
        return userInfo;
    })


    menus.value = [
        {
            name: 'Chat',
            path: '/chat'
        },
        {
            name: 'Dify',
            path: '/dify'
        },
        {
            name: '商城',
            path: '/commodity'
        },
        {
            name: '登录',
            path: '/login'
        },
        {
            name: '博客',
            path: '/blog'
        },
    ]

    const linkTo = (item) => {
        router.push({
            path: item.path
        })
    }


</script>

<style scoped lang="scss">
.home{
    &__menu{
        padding-top: 50px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;
    }
    &__item{
        text-align: center;
        margin-bottom: 20px;
        flex-basis: calc(33.33% - 20px);
        &__icon{
            background: #ddd;
            color: rgb(0, 187, 255);
            cursor: pointer;
            display: inline;
            padding: 6px 12px;
            border-radius: 6px;
        }
    }
}
</style>