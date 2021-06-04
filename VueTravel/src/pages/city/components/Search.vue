<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
					{{item.name}}
				</li>
				<li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default{
	name:'CitySearch',
	props:{
		cities:Object
	},
	//input里搜索内容和数据做绑定
	data() {
		return{
			keyword: '',
			list:[],
			timer:null
		}
	},
	computed:{
		hasNoData(){
			return !this.list.length
		}
	},
	methods:{
		handleCityClick(city){
			// this.$store.commit('changeCity',city),后使用mapMutations改为下面
			//调用changCity
			this.changeCity(city)
			//页面跳转到首页
			this.$router.push('/')
			//把input值清空
			this.keyword=''
		},
		//有一个mutation叫changeCity,把它映射到组件里名叫changCity的方法里
		...mapMutations(['changeCity'])
	},
	//监听Keyword改变
	watch :{
		//截流
		keyword(){
			if(this.timer){
				clearTimeout(this.timer)
			}
			//如果keyword不存在,list为空
			if(!this.keyword){
				this.list = []
				return
			}
			this.timer = setTimeout(()=>{
				const result = []
				//循环cities
				for(let i in this.cities){
					//键值对里的值再做一个遍历
					this.cities[i].forEach((value)=>{
						//如果能从Json文件的cities里数据中的spell或name中搜索到这个关键词,
						if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1)
							{
								//就把这项添加到result中
							result.push(value)
							}
					})
				}
				//保存到data建立的list数据中
				this.list = result
			},100)
		}
	},
	//生命周期函数勾子
	mounted(){
		//通过ref传递DOM元素进来
		this.scroll = new Bscroll(this.$refs.search,{
			click: true
		})
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.search
		height .72rem
		background $bgColor
		padding .0 .1rem
		.search-input
			box-sizing border-box
			height .62rem
			line-height .62rem
			width 100%
			text-align center
			border-radius .06rem
			color #666
			padding 0.1rem
	.search-content
		position absolute
		top 1.58rem
		left 0
		right 0
		bottom 0
		overflow hidden
		background #eee
		z-index 1
		.search-item
			line-height .62rem
			padding-left .2rem
			color #666
			background #fff
		
</style>