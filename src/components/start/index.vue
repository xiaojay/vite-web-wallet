<template>
    <div>
        <login v-if="isShowLogin"></login>
        <div class="start-wrapper" v-if="!isShowLogin">
            <div class="__title">{{$t('nav.head.create')}}</div>
            
            <router-link class="__btn __btn_all_in" :to="{
                name: 'createAccount'
            }">{{ $t('start') }}</router-link>
            <router-link class="__btn __btn_border _top" :to="{
                name: 'importAccount'
            }">{{ $t('btn.imported') }}</router-link>
            <router-link class="__btn_link _top" :to="{
                name: 'restore'
            }">{{$t('mnemonic.restore')}}</router-link>
        </div>
    </div>
</template>

<script>
import login from './login';

export default {
    components: {
        login
    },
    data() {
        let list = this.$wallet.getList();
        return {
            isShowLogin: list && list.length
        };
    }
};
</script>

<style lang="scss" scoped>
._top {
    margin-top: 20px;
}
</style>

