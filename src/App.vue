<template>
    <div>
     <!-- <toplayout>
       <div slot="top_menu" class="top-nav">
           <menu></menu>
           <top></top>
       </div>
   </toplayout> -->
   <router-view class="view" transition="expand" transition-mode="out-in" style="height:100%"></router-view>
   <!-- <div slot="top_footer" class="top-foot"> -->
</div>
</div>
</template>

<script>
    import toplayout from './components/toplayout.vue';
    import store from './vuex/store';
    // import foot from './views/foot.vue';
    module.exports = {
        components:{
           toplayout,
       },
       store,
       ready(){
        // this.$AVInit();
    },
};
</script>
<style type="text/css">
    .top-foot{
        text-align: center;
        clear: both;
        margin-top: 20px;
    }
    .fa{
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .fa-user:before {
        content: "\f007";
    }
</style>
<style lang="less">


    .expand-transition {

    }

    .expand-enter {
        animation: expand-in 0.5s;
    }

    .expand-leave{
        animation: expand-out 0.5s;
    }

    @keyframes expand-in {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 0.25;
        }
        50% {
            opacity: 0.5;
        }
        75% {
            opacity: 0.75;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes expand-out {
       0% {
        opacity: 1;
    }
    25% {
        opacity: 0.75;
    }
    50% {
        opacity: 0.5;
    }
    75% {
        opacity: 0.25;
    }
    100% {
        opacity: 0;
    }
}

</style>