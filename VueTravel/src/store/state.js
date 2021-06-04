//使用localStorage设置默认城市为用户已选择的城市
	let defaultCity='桂林'
	try{
		if(localStorage.city){
			defaultCity=localStorage.city
		}
	}catch(e){}


export default {
	city: defaultCity
}