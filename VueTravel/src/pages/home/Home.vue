<template>
	<div>
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>	
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default{
	name:'Home',
	components:{
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	},
	data () {
		return{
			swiperList:[],
			iconList:[],
			recommendList:[],
			weekendList:[],
			lastCity:''
		}
	},
	computed:{
		...mapState(['city'])
	},
	methods:{
		getHomeInfo (){
			//发送ajax的时候,把city放到请求的参数里
			axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc (res) {  
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.swiperList = data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			}
		}
	},
	//vue的生命周期函数
	mounted () {
		//保存上一次选择的城市
		this.lastCity = this.city
    	this.getHomeInfo()
	},
	//使用keep-alive(缓存机制)的时候,多一个activated生命周期函数:当页面重新显示的时候执行(重新激活)
	activated(){
		//判断这次城市跟上次城市不同时
		if(this.lastCity !== this.city){
			this.lastCity = this.city
			this.getHomeInfo()
		}
	}
}
</script>

<style>
	
</style>