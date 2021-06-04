<template>
	<div class="wrapper">
		<swiper :options="swiperOptions" v-if="showSweiper">
	    <swiper-slide v-for="item of list" :key="item.id">
	    	<router-link :to="'/detail/'+item.id">
	    		<img class="swiper-img" :src="item.imgUrl">
	    	</router-link>
	    </swiper-slide>
	    <div class="swiper-pagination" slot="pagination"></div>
	  </swiper>
  </div>
</template>

<script>
export default{
	name:'HomeSwiper',
	props:{
		list:Array
	},
	data (){
		return{
			swiperOptions: {
				pagination:'.swiper-pagination',
				loop:true,
				autoplay:1000
			}
		}
	},
	computed: {
		showSweiper () {
			return this.list.length
			
		}
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
		background #fff;
	.wrapper
		overflow hidden
		width 100%
		height 0
		padding-bottom 31.2%//图片宽高比例
		background #eee
		.swiper-img
			width 100%
</style>
