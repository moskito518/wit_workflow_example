define(function(require, exports){
	var r = require('requires');
	var i = require('include');
	var p = require('plugins');
	var $ = require('jquery');
	
	(function(w, d){
		w.onload = function(){
			console.log(123);
			r.getName();
			i.include();
			p.plugins();
		}
	})(window, document);	
});