<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area"  v-for="(item,key) of cities" :key="key" :ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<ul class="item-list">
					<li class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState,mapMutations } from 'vuex'
export default{
	name:'CityList',
	props:{
		hot:Array,
		cities:Object,
		letter:String
	},
	computed:{
		//把vuex里公用数据city,通过mapState映射到computed属性里,名叫currentCity
		...mapState({
			currentCity:'city'
		})
	},
	methods:{
		handleCityClick(city){
			// this.$store.commit('changeCity',city),后使用mapMutations改为下面
			//调用changCity
			this.changeCity(city)
			//页面跳转到首页
			this.$router.push('/')

		},
		//有一个mutation叫changeCity,把它映射到组件里名叫changCity的方法里
		...mapMutations(['changeCity'])
	},
	mounted (){
		this.scroll = new Bscroll(this.$refs.wrapper,{
			//希望被点击
			click: true
		})
	},
	//监听letter变化
	watch:{
		letter (){
			if(this.letter){
				//通过refs获取到内容所在的区域,但是获取的是数组,后面加[0]就能获取到元素
				const element = this.$refs[this.letter][0]
				//调用Bscroll的scrollToElement方法,自动滚动到某个元素上
				this.scroll.scrollToElement(element)
			}
		}
	},
	//重新激活页面时scroll默认滚动距离0
	activated(){
		this.scroll.scrollTo(0,0)
		this.scroll = new Bscroll(this.$refs.wrapper,{})
	}
}
</script>

<style lang="stylus" scoped>
	.border-topbottom
		&:before
			border-color #ccc
		&:after
			border-color #ccc
	.border-bottom
		&:before
			border-color #ccc
	.list
		overflow hidden
		position absolute
		top 1.58rem
		left 0
		bottom 0
		right 0
		.title
			line-height .54rem
			background #eee
			padding-left .2rem
			color #666
			font-size .26rem
		.button-list			
			padding .1rem .6rem .1rem .1rem
			overflow hidden
			.button-wrapper
				width 33.33%
				float left
				.button
					text-align center
					margin .1rem
					border .02rem solid #ccc
					padding .1rem 0
					border-radius .06rem
		.item-list
			.item
				line-height .76rem
				padding-left .2rem
</style>