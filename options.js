document.body.innerHTML = document.body.innerHTML.replace(/{{ ?([a-zA-Z_]+)( )?}}/g, function(whole_string,label){
	return chrome.i18n.getMessage(label);
});
document.body.style.display = 'block';

function save_options() {
    var defaultState = document.querySelector('input[name=defaultState]:checked').value;
    
    if (!/^([23456789]|10)$/.test(document.getElementById('blurAmount').value))
	{
		alert(chrome.i18n.getMessage('blurAmountOutOfBounds'));
		return;
	}
    
    chrome.storage.sync.set({
    	blurbook_defaultState: defaultState,
    	blurbook_hover: document.getElementById('hover').checked,
    	blurbook_altctrl: document.getElementById('altctrl').checked,
    	blurbook_blurAmount: document.getElementById('blurAmount').value
    }, function () {
    	alert(chrome.i18n.getMessage('optionsSaved'));
    });
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({blurbook_defaultState: 'remember', blurbook_hover: true, blurbook_altctrl: true, blurbook_blurAmount: 6}, function (items) {
        document.getElementById('defaultState_'+items.blurbook_defaultState).checked = true;
        document.getElementById('hover').checked = items.blurbook_hover;
        document.getElementById('altctrl').checked = items.blurbook_altctrl;
        document.getElementById('blurAmount').value = items.blurbook_blurAmount;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
