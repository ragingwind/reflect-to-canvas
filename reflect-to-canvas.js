(function() {
	'use strict';

	function reflectToCanvas (dest, opts) {
		opts = opts || {
			reflection: 0.5
		};

		if (!opts.width) {
			opts.width = this.offsetWidth;
		}

		if (!opts.height) {
			opts.height = this.offsetHeight;
		}

		var ctx = dest.getContext("2d");
		var gradient = ctx.createLinearGradient(0, 0, 0, opts.height * opts.reflection);

		gradient.addColorStop(1, "rgba(255, 255, 255, 1.0)");
		gradient.addColorStop(0, "rgba(255, 255, 255, " + (1 - opts.reflection) + ")");

		ctx.save();
		ctx.translate(0, opts.height - 1);
		ctx.scale(1, -1);
		ctx.drawImage(this, 0, 0, opts.width, opts.height);
		ctx.restore();
		ctx.globalCompositeOperation = "destination-out";
		ctx.fillStyle = opts.color;
		ctx.fillRect(0, opts.height * 0.5, opts.width, opts.height);
		ctx.fillStyle = gradient;
		ctx.rect(0, 0, opts.width, opts.height);
		ctx.fill();

		ctx = null;
		gradient = null;
	}

	HTMLImageElement.prototype.reflectToCanvas = reflectToCanvas;
	HTMLVideoElement.prototype.reflectToCanvas = reflectToCanvas;
	HTMLCanvasElement.prototype.reflectToCanvas = reflectToCanvas;
})();
