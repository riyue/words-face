window.ry = (function () {



var support = {};
support.canvas = function () {  
	var elem = document.createElement('canvas');
	return !!(elem.getContext && elem.getContext('2d'));
}

return {
	support:support


};

})();




