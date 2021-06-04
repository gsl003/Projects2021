<template>
	<div>
		<router-link tag="div" to="/" class="header-abs" v-show="showAbs">
			<div class="iconfont header-abs-back">&#xe624;</div>
		</router-link >
		<div class="header-flxed" v-show="!showAbs" :style="opacityStyle">
			<router-link to="/">
				<div class="iconfont header-flxed-back">&#xe624;</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script>
export default{
	name:'DetailHeader',
	data (){
		return{
			showAbs:true,
			opacityStyle:{
				opacity:0
			}
		}
	},
	methods:{
		handleScroll(){
			//滚动的距离
			const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset.scrollTop
			//判断距离大于40显示,否则隐藏
			if(top >40 ){
				//通过计算，在滚动过程中一点点改变opacity属性值，实现一个类似过渡的效果
				let opacity = top / 180
				opacity = opacity > 1 ? 1 : opacity
				this.opacityStyle = { opacity }

				this.showAbs = false
			} else {
				this.showAbs = true
			}
			
			
		}
	},
	//页面渲染完成后
	mounted(){
		window.addEventListener('scroll',this.handleScroll)
	},
	//组件被完全销毁后调用
	destroyed(){
		//解绑全局事件
		window.removeEventListener('scroll',this.handleScroll)
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.header-abs
		position absolute
		left .2rem
		top .2rem
		width .8rem
		height .8rem
		line-height .8rem
		border-radius .4rem
		background rgba(0,0,0,.8)
		text-align center
		.header-abs-back
			color #fff
			font-size .4rem
	.header-flxed
		z-index 2
		position fixed
		top 0
		left 0
		right 0
		bottom 0
		height $headerHeight
		line-height $headerHeight
		text-align center
		color #fff
		background $bgColor
		font-size .32rem
		.header-flxed-back
			position absolute
			top 0
			left 0
			width .64rem
			text-align center
			font-size .4rem
			color #fff
</style>