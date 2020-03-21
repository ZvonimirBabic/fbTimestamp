var target = document.body;
//then define a new observer
var bodyObserver = new MutationObserver(function (mutations) {
mutations.forEach(function (mutation) {
    
    if (mutation.target.tagName == "ABBR") {

        expandDates(document.querySelectorAll('abbr[data-utime]'));
function expandDates(nodes) {
   for (var i = 0, abbr; (abbr = nodes[i++]); ) {
        if (abbr.querySelector('.full-timestamp')) {
            // already processed
            continue;
        }
        abbr.setAttribute("data-tooltip-content", new Date(abbr.dataset.utime * 1000).toLocaleString());
		 abbr.insertAdjacentHTML('beforeend', '<span class="full-timestamp"> </span>');
    }

	
}
    }
})
})
var bodyObserverConfig = { attributes: true, childList: true, subtree: true, 
characterData: true };
bodyObserver.observe(target, bodyObserverConfig);





