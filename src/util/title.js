function safeSetTitle(title) {
	if (window && window.document && window.document.title) {
		window.document.title = title;
	}
}

const titleService = {
	set(name) {
		safeSetTitle(name + ' | Tyrsius');
	}
};

export default titleService

export function title(title) {
	return function(target) {
		let original = target.prototype.componentDidMount;
		if (original && typeof original === 'function') {
			target.prototype.componentDidMount = function() {
				original();
				titleService.set(title);
			}
		} else {
			target.prototype.componentDidMount = function() {
				titleService.set(title);
			}
		}
	}	
}