var Timer = (function(){
	var exports = function constructor(){
		this.reset();
	};

	exports.prototype.reset = function reset() {
		this.startedAt = this.stoppedAt = new Date();
		this.running = false;
		this.runningSeconds = 0;
	};

	exports.prototype.start = function start() {
		if (this.running) return; 
		else this.startedAt = new Date();

		this.running = true;
	};

	exports.prototype.stop = function stop() {
		if (!this.running) return;

		this.running = false;
		this.runningSeconds += (new Date() - this.startedAt) / 1000;
	};

	exports.prototype.getSeconds = function getSeconds() {
		return this.runningSeconds + (this.running ? new Date() - this.startedAt : 0) / 1000;
	};

	return exports;
})();