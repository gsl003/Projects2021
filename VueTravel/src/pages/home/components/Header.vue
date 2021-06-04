<template>
	<div class="header">
		<div class="header-left"><span class="iconfont back-icon">&#xe624;</span></div>
		<div class="header-input">
		<span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
		<router-link to='/city'>
			<div class="header-right">
				<!-- 在main.js里创建根实例的时候,传了store,所以会被派发到每个子组件里 
				{{this.$store.state.city}}-->
				<!-- 后通过mapState把公用city数据映射过来，所以可以直接用this.city -->
				{{this.city}}
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default{
	name:'HomeHeader',
	//把vuex的数据通过mapState映射到这个组件的computed计算属性里(把city的公用数据映射到名叫city的计算属性中)
	computed:{
		...mapState(['city'])
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		display flex
		line-height $headerHeight
		background $bgColor
		color #fff
		.header-left
			width .64rem
			float left
			.back-icon
				display block
				text-align center
				font-size .4rem
		.header-input
			flex 1
			line-height .64rem
			height .64rem
			background #fff
			margin-top .12rem
			margin-left .2rem
			border-radius .1rem
			color #ccc
			padding-left .2rem
		.header-right
			min-width 1.04rem
			padding 0 .1rem
			float right
			text-align center
			color #fff
			.arrow-icon
				font-size .24rem
</style>