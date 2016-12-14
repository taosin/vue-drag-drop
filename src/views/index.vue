<template>
    <div>
        <toplayout>
            <div slot="top_menu" class="top-nav">
         </div>
     </toplayout>

       <leftlayout>
        <div slot="left_menu" class="menu_left">
            <div class="items " >
                <div class="item {{current ===menu.url?'current':''}}" v-for="menu in menus" @click.stop="goto(menu.url)">{{menu.name}}
                </div>
            </div>
        </div>
        <router-view slot="left_container" class="view" transition="expand" transition-mode="out-in" style="height:100%"></router-view>
    </leftlayout>
</div>
</template>

<script>
    import leftlayout from './../components/leftlayout.vue';
    import './../../static/css/index.scss';
    import toplayout from './../components/toplayout.vue';
    module.exports = {
        components:{
         leftlayout,
         toplayout,
     },
     route:{
        data(transition){
            this.current = transition.to.path;
        }
    },
    data(){
        return{
            menus:[
            ],
            current:''
        };
    },
    attached(){
    },
    methods:{
    }
};
</script>