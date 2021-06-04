<template>
	<div>
		<detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default{
	name:'Detail',
	components:{
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data(){
		return{
			sightName:'',
			bannerImg:'',
			gallaryImgs:[],
			list:[]
		}
	},
	methods:{
		getDetailInfo(){
			//动态获取路由
			// axios.get('/api/detail.json?id='+ this.$route.params.id).then(this.handleGetDataSucc),可以写成下面的形式
			axios.get('/api/detail.json',{
				params:{
					id:this.$route.params.id
				}
			}).then(this.handleGetDataSucc)
		},
		handleGetDataSucc(res){
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				//detail.json数据获取
				this.sightName=data.sightName
				this.bannerImg=data.bannerImg
				this.gallaryImgs=data.gallaryImgs
				this.list=data.categoryList
			}
		}
	},
	mounted(){
		this.getDetailInfo()
	}
}
</script>

<style lang="stylus" scoped>
</style>