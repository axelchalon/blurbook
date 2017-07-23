function blur()
{
    blurred = true;
    document.getElementsByTagName('html')[0].className = document.getElementsByTagName('html')[0].className + ' bluranium';
    updateFavIcon();
}

function unblur()
{
    blurred = false;
    document.getElementsByTagName('html')[0].className = document.getElementsByTagName('html')[0].className.replace(/\bbluranium\b/g,'');
    updateFavIcon();
}

function updateFavIcon()
{
    if (originalFavIcon === false) return;

    if (blurred)
	{
		if (platform == 'messenger')
			document.querySelector('link[rel="shortcut icon"]').href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDcxQUM3M0I2QTlEMTFFNUE3OUFDNjA3RjdCQ0JEMTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDcxQUM3M0M2QTlEMTFFNUE3OUFDNjA3RjdCQ0JEMTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENzFBQzczOTZBOUQxMUU1QTc5QUM2MDdGN0JDQkQxMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENzFBQzczQTZBOUQxMUU1QTc5QUM2MDdGN0JDQkQxMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvEx9noAAAkvSURBVHjabJdZkhxF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';
		else
			document.querySelector('link[rel="shortcut icon"]').href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzhBOTBENDg4QTFFMTFFNEJFOUNDNzUyRUZGQzU1RjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzhBOTBENDk4QTFFMTFFNEJFOUNDNzUyRUZGQzU1RjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOEE5MEQ0NjhBMUUxMUU0QkU5Q0M3NTJFRkZDNTVGMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOEE5MEQ0NzhBMUUxMUU0QkU5Q0M3NTJFRkZDNTVGMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt9c8hYAAAJ4SURBVHjabFNZbtRAEK3qxR57PJkti0JAQgIJ+OGHI3AZPrkE1+IGkZD4IRKLEAlbJpNMxuOlbVdR3eOIEGG57bZd79WrV2V8/eqNOv45jpuUkwit7Ugr6lr452B/MihlQCvmto1dvLMpZzR35vj7fkQZ3TOIjwh5DxRFGrHH4RYdbipsCaExtjzvrunzOuNT08zj1FTlY/n0UgBPJSiFngAZQWsFSWwgsjaoqF1byDppUb+tioulsW0ZCeu+YJ4h8wshyTzWR2uNMM4GcHSwA7NxgpXr+Nciz39frNGV9XtSHJm2JtQWLQImBODBI6at6tjqAH7+5EAIUvh9sYGqcrC8UqnEW2o0qr5Y5pB2K57DE8AwsYHgweFUyAysyxry0mHbEihWjAZZwV2/Bavk7WCgYXcyhMPdDLI0gkIyL5YbWOU1u47EH8kWSSz8h0ErDXOR/PD+VLJPYLYzgPFoABNZSWwlAYLUD1zdJuC/S75DKlnn0xQmAs6GkYCT4MMwtWA8gcd0AOauAm8EiQebooHFZQFX11Wo//K6gMVVAXnuoCUZKgkke5ugb724KwEEy1UJX88u4WhvJIoQvv1YwZfTpZCU2AQTRWzkCTCAg/t0QyYbGRbICwcbMa+sm7DPNw4q14QuKWA/K2jEEGbCRigr4VmHLvbDS/1Db5E33qNyISgZVQPUstF111Biz6XuDyLVB6SEt4aiL0zhTZlYiP8nQnZuSDkTT2ZFVS4+am19B9/JJfI0SP7P4W1nbmSJJlbKqY4X2NInFZvCjAidy9RZs0qWxtSWOqU6bCWp9LvzmVvoxDTQBMYTS2UOuYmzSTmlyP0RYAACukxx0hkbNgAAAABJRU5ErkJggg==';

	}
    else
        document.querySelector('link[rel="shortcut icon"]').href = originalFavIcon;
}

if (/messenger.com$/.test(location.hostname))
	var platform = 'messenger'
else
	var platform = 'facebook'

var initiated = false, originalFavIcon = false, blurred = false;
chrome.storage.sync.get({blurbook_defaultState: 'remember', blurbook_hover: true, blurbook_altctrl: true, blurbook_wasEnabledLastTime: false, blurbook_blurAmount: 6}, function (items) {

    window.onload = function(){
        originalFavIcon = document.getElementsByTagName('head')[0].querySelector('link[rel="shortcut icon"]').href;
        updateFavIcon();
    };

    var sheet = (function() {
        var style = document.createElement("style"); // Create the <style> tag
        style.setAttribute("media", "screen") // Add a media (and/or media query) here if you'd like!
        style.appendChild(document.createTextNode("")); // WebKit hack :(
        document.head.appendChild(style); // Add the <style> element to the page
        return style.sheet;
    })();

    var FACEBOOK_CLASSES = {
        textual: [
            "._5w1r", // fenêtre du bas : messages
            "._4yng", // fenêtre du bas : code snippets 
            "._1mf", // fenêtre du bas / full screen : message being sent by user
            "._wu0", // full screen : code snippets
            "._aok", // full screen : messages
            "._4pcn", // full screen : PJ filename
            "._2a45", // full screen : sidebar right : PJ filename
            "._1htf", // full screen : sidebar left : preview
            "._1iji", // barre de notif : preview
        ],
        graphical: [
            "._3lk2", // fenêtre du bas : images
            "._3cpq", // fenêtre du bas : meta (link preview)
            "._3m31", // full screen : sidebar right : pictures
            "._15gf", // full screen : images/stickers/gifs/meta
        ]
    };
    
    // 
    var MESSENGER_CLASSES = [
        "._wu0", // full screen : code snippets
        "._2a45", // full screen : sidebar right : PJ filename
        "._3m31", // full screen : sidebar right : pictures
        "._1htf", // full screen : sidebar left : preview
        "._ui9", // full screen : messages w/o images
        "._2poz", // full screen : images (in messages)
        "._5rp7" // full screen : message being sent by user
    ];

	if (platform == 'facebook')
	{
		sheet.addRule(FACEBOOK_CLASSES.textual.map(function(c) { return "html.bluranium " + c; }).join(", "), "-webkit-filter: blur("+items.blurbook_blurAmount+"px)", 0);

        // if !screen_graphical
		//sheet.addRule(FACEBOOK_CLASSES.textual.map(function(c) { return "html.bluranium " + c; }).join(", "), "-webkit-filter: blur("+items.blurbook_blurAmount+"px)", 0);
		// else
        sheet.addRule(FACEBOOK_CLASSES.graphical.map(function(c) { return "html.bluranium " + c; }).join(", "), "width: 20px; height: 20px; overflow: hidden; -webkit-filter: brightness(0) blur("+items.blurbook_blurAmount+"px);", 0);

		// hover
		if (items.blurbook_hover) {
			sheet.addRule(FACEBOOK_CLASSES.textual.map(function(c) { return "html.bluranium " + c + ":hover"; }).join(", "), "-webkit-filter: none", 0);

            // if !screen_graphical
			//sheet.addRule(FACEBOOK_CLASSES.graphical.map(function(c) { return "html.bluranium " + c + ":hover"; }).join(", "), "-webkit-filter: none", 0);
			// else
            sheet.addRule(FACEBOOK_CLASSES.graphical.map(function(c) { return "html.bluranium " + c + ":hover"; }).join(", "), "width: auto; height: auto; overflow: visible; -webkit-filter: none", 0);
        }

		// blur logo
		sheet.addRule("html.bluranium ._2md", "-webkit-filter: blur(2px)", 0);
    }
	else // messenger
	{
		sheet.addRule(MESSENGER_CLASSES.map(function(c) { return "html.bluranium " + c; }).join(", "), "-webkit-filter: blur("+items.blurbook_blurAmount+"px)", 0);

		// hover
		if (items.blurbook_hover)
			sheet.addRule(MESSENGER_CLASSES.map(function(c) { return "html.bluranium " + c + ":hover"; }).join(", "), "-webkit-filter: none", 0);
	}

    if (items.blurbook_defaultState == 'enabled' || (items.blurbook_defaultState == 'remember' && items.blurbook_wasEnabledLastTime))
    {
        blur();
        initiated = true;
    }
    else
    {
        initiated = false;
    }

    document.onkeydown = function (evt) {
        if (!evt) evt = event;

        if (!initiated)
        {
            if (evt.keyCode == 66 && evt.ctrlKey) // b et ctrl (66 b) Ctrl+Alt AltGr
            {
                blur();
                initiated = true;
                chrome.storage.sync.set({ blurbook_wasEnabledLastTime: true });
            }
        }
        else // if initiated
        {
            if (evt.keyCode == 66 && evt.ctrlKey) // b et ctrl
            {
                unblur();
                initiated = false;
                chrome.storage.sync.set({ blurbook_wasEnabledLastTime: false });
            }
            if (items.blurbook_altctrl && evt.keyCode == 17 && evt.altKey) // ctrl et alt
            {
                unblur();
            }
        }
    }

    document.onkeyup = function (evt) {
        if (!evt) evt = event;

        if (!initiated) return true;

        if (!blurred && evt.keyCode == 17) // ctrl
            blur();
    }

});

// Blurbook par la Charrette. La Charrette fuit les regards.
// Axel Chalon pour la Charrette, 2015, Tous droits réservés
