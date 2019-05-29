/*
byId( id:string )
通过id并且参数id的类型为string类。
返回值：返回一个唯一的元素对象
 */
function byId(id) {
	return document.getElementById( id )
}

/*
getStyle( ele:ElementObject, prop:[styleString] )
返回值：获取元素的样式
 */
function getStyle( ele, prop ) {
	return ele.currentStyle ? ele.currentStyle[prop] : window.getComputedStyle(ele)[prop]
}

/*
linearMove( ele:ElementObject,prop:[styleString] ,target:[number] )
 */
/*
参数就是配置，
配置：通过配置可以产生不同的效果
config|options
 */

/*
var o = {
	ele:'xxx',
	prop:'xxx',
	target:'xxx'
}
 */

function linearMove( options ) {

	var ele = options.ele
	var prop = options.prop
	var target = options.target

	//console.log( ele,prop,target )
	//return;
	clearInterval( ele.timer )
	ele.timer = setInterval(function(){

		var pos = parseInt(getStyle( ele,prop ))//前：获取当前位置 0  后：400
	
		var speed = target > pos ? 10 : -10
		var cur = pos + speed//新位置 前：cur = 10  后：390

		if( (cur > target && speed > 0) || (cur < target && speed < 0) ){// 往前走，速度一定是正的，当大于目标位置的时候，赋值目标位置为新位置，并且清除定时器
			cur = target
			clearInterval(ele.timer)
		}

		//console.log( cur )
		ele.style[prop] = cur + 'px'

	},30)
}