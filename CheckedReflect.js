/*
function CheckedReflect(nodeList,checkedClass='checked'){
	nodeList.forEach(input=>input.addEventListener('change',e=>e.target.labels.forEach(label=>label.classList[(input.checked) ? 'remove' : 'add'](checkedClass))))
}
*/

function CheckedReflect(nodeList,checkedClass){
	if(checkedClass == undefined){
		checkedClass = 'checked'
	}
	for(var i = 0; i < nodeList.length; i++){
		var node = nodeList[i]
		node.addEventListener('change',function(e){
			for(var j = 0; j < e.target.form.length; j++){
				var input = e.target.form[j]
				if(input.name == e.target.name){
					for(var k = 0; k < input.labels.length; k++){
						var label = input.labels[k]
						if(input.checked == true){
							label.classList.add(checkedClass)
						}else{
							label.classList.remove(checkedClass)
						}
					}
				}
			}
		})
	}
}
