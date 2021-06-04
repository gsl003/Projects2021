import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

//创建store
export default new Vuex.Store({
	//创建公用数据存储state
	state,
	//改变数据
	mutations
})