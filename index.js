(typeof self !== 'undefined' ? self : this).watchSize = (element, listener) => {
	const expand = document.createElement('_');
	const shrink = expand.appendChild(document.createElement('_'));
	const expandChild = expand.appendChild(document.createElement('_'));
	const shrinkChild = shrink.appendChild(document.createElement('_'));

	let lastWidth, lastHeight;

	shrink.style.cssText = shrinkChild.style.cssText = expand.style.cssText = expandChild.style.cssText = 'clip:rect(0 0 0 0);height:100%;left:0;overflow:hidden;position:absolute;top:0;transition:0s;width:100%;z-index:-1';
	shrinkChild.style.width = shrinkChild.style.height = '200%';

	element.appendChild(expand);

	test();

	return stop;

	function test() {
		stop();

		const width = element.offsetWidth;
		const height = element.offsetHeight;

		if (width !== lastWidth || height !== lastHeight) {
			lastWidth = width;
			lastHeight = height;

			expandChild.style.width = width * 2 + 'px';
			expandChild.style.height = height * 2 + 'px';

			expand.scrollLeft = expand.scrollWidth;
			expand.scrollTop = expand.scrollHeight;
			shrink.scrollLeft = shrink.scrollWidth;
			shrink.scrollTop = shrink.scrollHeight;

			listener({ width, height });
		}

		shrink.addEventListener('scroll', test);
		expand.addEventListener('scroll', test);
	}

	function stop() {
		shrink.removeEventListener('scroll', test);
		expand.removeEventListener('scroll', test);
	}
};
