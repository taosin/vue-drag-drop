<template>
	<div class="drag">
		<div class="left" @dragover="allowDrop">
			<ul>
				<li v-for="item in items" draggable="true" @dragstart="drag($index)">{{item.text}}</li>
			</ul>
		</div>
		<div class="right" @drop="drop" @dragover="allowDrop">
			<ul>
				<li v-for="item in lists" draggable="true" @dragstart="drag($index)">{{item.text}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
// import * from './../../components/*';
export default{
	components:{
        // *
    },
    data(){
    	return{
    		items:[
    		{ text:'囚牛', value:'1' },
    		{ text:'睚眦', value:'2' },
    		{ text:'嘲风', value:'3' },
    		{ text:'蒲牢', value:'4' },
    		{ text:'狻猊', value:'5' },
    		{ text:'霸下', value:'6' },
    		{ text:'狴犴', value:'7' },
    		{ text:'负屃', value:'8' },
    		{ text:'螭吻', value:'9' },
    		],
    		lists:[],
    		dragIndex:999999
    	};
    },
    ready(){
    },
    watch:{
    },
    computed:{
    },
    methods:{
    	drop(ev){
    		this.lists.push(this.items[this.dragIndex]);
    		this.items.splice(this.dragIndex, 1);
    	},
    	allowDrop(ev)
    	{
    		ev.preventDefault();
    	},
    	drag(index)
    	{
    		console.info(index);
    		this.dragIndex = index;
    	}
    }
};
</script>
<style type="scss">
	.drag{
	}
	.left{
		width: 30%;
		border-right: 1px solid;
		border-bottom: 1px solid;
		height: 500px;
		float: left;
	}
	.right{
		float: right;
		width: 70%;
		height: 500px;
		border: 1px solid;
		border-left: none;
	}
	li{
		cursor: move;
	}
</style>