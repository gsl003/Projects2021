<template>
	<ul class="list">
		<li class="item" 
		v-for="item of letters" 
		:key="item" 
		:ref="item"
		@click="handleLetterClick" 
		@touchstart="handleTouchStart"
		@touchmove="handleTouchMove"
		@touchend="handleTouchEnd">
		{{item}}
	</li>
	</ul>
</template>

<script>
export default{
	name:'CityAlphabet',
	props:{
		cities:Object
	},
	//因为cities是个对象,而根据下标找到对应的字母,需要数组存储字母列表,在计算属性computed里定义这个数组
	computed:{
		//构造出letters计算属性,返回一个数组[‘A’,'B'...]
		letters(){
			const letters = []
			for (let i in this.cities){
				letters.push(i)
			}
			return letters
		}
	},
	data(){
		return{
			//在touchstart之后才可以触发move事件,所以定义一个标识位touchStatus
			touchStatus:false,
			startY:0,
			timer:null
		}
	},
	//当页面的数据被更新同时完成了页面渲染之后,就会执行updated
	updated(){
		//找到A元素加[0]才是指DOM元素,通过offsetTop获取它距搜索边框底部的高度
		this.startY = this.$refs['A'][0].offsetTop
	},
	methods:{
		handleLetterClick(e){
			//想外触发传递内容
			this.$emit('change',e.target.innerText)
		},
		//当手指触摸的时候
		handleTouchStart() {
			this.touchStatus = true
		},
		handleTouchMove(e){
			if(this.touchStatus){
				//通过截流限制函数执行的频率
				//如果在延迟8秒间又执行滚动操作,则清除上一次的操作,重新执行这次的操作
				if(this.timer){
					clearTimeout(this.timer)
				}
				//如果正在执行滚动时,延迟8秒后再执行
				this.timer = setTimeout(() =>{
					//事件对象里touches数组第0项表示手指的一些信息,clientY代表手指距离顶部的高度,再减去顶部和搜索的高度79 = 手指距离距搜索边框底部的高度
					const touchY = e.touches[0].clientY - 79
					//算出当前手指的手指距离字母A的高度/字母的高度22 = 向下取整(字母所排的顺序) = index(当前字母的下标)
					const index = Math.floor((touchY - this.startY)/22)
					//取到字母change一个事件给外部(如果在字母区间滑动，会触发父组件的change事件，参数为当前字母)
					if(index >=0 && index< this.letters.length){
						this.$emit('change',this.letters[index])
					}
				}, 8)
			}
		},
		//当结束滑动
		handleTouchEnd(){
			this.touchStatus = false
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.list
		display flex
		flex-direction column
		justify-content center
		position absolute
		top	1.58rem
		right 0
		bottom 0
		width .4rem
		.item
			line-height .44rem
			text-align center
			color $bgColor
</style>