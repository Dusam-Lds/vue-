<template>
    <div>
        <!-- 共公头部 -->
        <app-header></app-header>
        <!-- 共公主体 -->
        <router-view></router-view>
        <!-- 共公底部 -->
        <app-footer></app-footer>
    </div>
</template>

<script>
    import appHeader from './subcom/Header.vue';
    import appFooter from './subcom/Footer.vue'

    export default {
        components: {
            appHeader,
            appFooter
        }
        
    }
</script>

<style scoped>

</style>