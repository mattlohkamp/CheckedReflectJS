function CheckedReflect(nodeList,checkedClass='checked'){
	nodeList.forEach(input=>input.addEventListener('change',e=>e.target.form.labels.forEach(input=>input.classList[(input.checked) ? 'remove' : 'add'](checkedClass))))
}

CheckedReflect(document.querySelectorAll('input[type=radio],input[type=checkbox]'),'selected')