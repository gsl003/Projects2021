<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOptions">
			    <swiper-slide v-for="(item,index) of imgs" :key="index">
			    	<img class="gallary-img" :src="item">
			    </swiper-slide> 
			    <div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',////设置分页样式
        observeParents:true,//当Swiper的祖先元素变化时，Swiper更新。
		observer:true//当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
      }
    }
  },
  methods: {
    handleGallaryClick () {
    	//向外触发关闭事件
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow inherit
	.container
		display flex
		flex-direction column
		justify-content center
		z-index 99
		position fixed
		left 0
		right 0
		top 0
		bottom 0
		background #000
		.wrapper
			width 100%
			height 0
			
			padding-bottom 100%
			.gallary-img
				width 100%
			.swiper-pagination
				color #fff
				bottom -1rem
</style>