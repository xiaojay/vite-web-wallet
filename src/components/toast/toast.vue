<template>
    <transition name="mint-toast-pop">
        <div v-if="show" :class="'mint-toast ' + customClass">
            <span class='line'></span>{{ message }}
        </div>
    </transition>
</template>

<script>
export default {
    name: 'toast',
    props: {
        message: String,
        type: {
            type: String,
            default: 'info'
        },
        position: {
            type: String,
            default: 'top'
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        customClass() {
            let classes = [];
            switch (this.position) {
            case 'top':
                classes.push('top');
                break;
            case 'bottom':
                classes.push('bottom');
                break;
            default:
                classes.push('middle');
            }
            classes.push(this.type);

            return classes.join(' ');
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/vars.scss";

.mint-toast {
    box-sizing: border-box;
    position: fixed;
    background: #FFFFFF;
    box-shadow: 0 2px 48px 1px rgba(176,192,237,0.42);
    border-radius: 2px;
    min-width: 300px;
    max-width: 100%;
    text-align: center;
    padding: 30px;
    z-index: 1000;
    word-break: keep-all;
    font-family: $font-bold, arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #1D2024;

    .line {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 4px;
        background-image: linear-gradient(138deg, #052EF5 0%, #0D6DF0 31%, #0B92E7 49%, #0BB6EB 71%, #00E0F2 100%);
    }

    &.top {
        top: 20px;
        left: 50%;
        transform: translate(-50%, 0) scale(1);
        transition: transform .3s ease;
        &.mint-toast-pop-enter,  &.mint-toast-pop-leave-active{
            transform: translate(-50%, 0) scale(0);
        }
    }

    &.middle {
        margin-top: -42px;
        left: 50%;
        top: 50%;
        transition: opacity .4s ease;
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;

        &.mint-toast-pop-enter,  &.mint-toast-pop-leave-active{
            opacity: 0;
        }
    }

    &.bottom {
        bottom: 20px;
        left: 50%;
        transform: translate(-50%, 0) scale(1);
        transition: transform .3s ease;

        &.mint-toast-pop-enter,  &.mint-toast-pop-leave-active{
            transform: translate(-50%, 0) scale(0);
        }
    }
}
@keyframes rotate {
    0%   { transform: rotate(0deg); }
    25%  { transform: rotate(90deg); }
    50%  { transform: rotate(180deg); }
    75%  { transform: rotate(270deg); }
    100% { transform: rotate(360deg); }
}
</style>
