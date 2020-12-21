/**类型判断 */
export const type=function(target,str){
	return Object.prototype.toString.call(target).slice(8,-1).toLocaleLowerCase()===str
}

/**订阅者 */
export function provise(){
	let subscriber={}
	this.on=(name,callback)=>{
		if(name&&typeof callback === "function"){
			let callbackList = subscriber[name]||[]
			if((subscriber[name]||[]).indexOf(callback)<0){
				callbackList.push(callback)
				subscriber[name]=callbackList
			}
		}
	}
	
	this.emit=(name,...arr)=>{
		if(name&&subscriber[name]){
			var callbackList=[].concat(subscriber[name])
			callbackList.forEach(v=>{
				if(subscriber[name].indexOf(v)>=0){
					v(...arr)
				}
			})
		}
	}
	
	this.off=(name,callback)=>{
		if(name&&subscriber[name]){
			if(typeof callback === "function"){
				var index=subscriber[name].indexOf(callback)
				if(index>=0)subscriber[name].splice(index,1)
				if(subscriber[name].length==0)
				delete subscriber[name]
			}else{
				delete subscriber[name]
			}
		}
	}
}