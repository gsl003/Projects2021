<template>
  <div id="app">
  	<!-- 添加Vuez自带的 keep-alive标签包裹:路由内容被加载过后,放到内存中,再次见路由的时候,不需要重新渲染组件以及执行里的钩子函数,只需要直接调用内存中的内容;exclude设置某个组件不使用内存机制-->
  	<keep-alive exclude="Detail">
    	<router-view/>
    </keep-alive>
  </div>
</template>

