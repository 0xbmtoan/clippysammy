javascript:
(function(){
	// example starter event handler
	document.body.onclick = function(event) {
		console.log("clicky");
		event = event || window.event;
		var element = event.target || event.srcElement;
		alert(element.textContent);
	}
        document.getElementById('appendedInput').onblur = function(event){
                var dropName = document.getElementById('appendedInput').value;
        }
})()

 