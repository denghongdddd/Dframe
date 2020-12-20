/**类型判断 */
export const type=function(target,str){
	return Object.prototype.toString.call(target).slice(8,-1).toLocaleLowerCase()===str
}