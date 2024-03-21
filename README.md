# ProductivityEnabler

## Installation
1. Host index.html as a website. Mine is currently hosted on netlify at [things.christen.se](things.christen.se).
2. Install a userscript engine, popular choices include [Tampermonkey](https://www.tampermonkey.net/), [Greasemonkey](https://www.greasespot.net/), [Violentmonkey](https://violentmonkey.github.io/), and [Userscript](https://apps.apple.com/us/app/userscripts/id1463298887)(iOS/Safari).
3. Install the `userscript.js` file as a userscript.

## Usage
After installing the userscript on all your browsers, any attempt to naviagate to one of the blocked websites will be redirected to the productivity enabler website. It currently redirects the user to a daily planning app, but could be modified to use any website or any app that support a URL scheme.

## Customization
The list of blocked websites is currently hard-coded into the userscript. To add or remove websites, edit the `redirect` set in the `userscript.js` file. 

The destination of the redirect is also hard-coded into the userscript. To change the destination, edit the `location` variable in the `userscript.js` file.

The ultimate destination of the user is currently hard-coded into the website. To change the destination, edit the `index.html` file, specifically the `window.location.href` line.

### Explaination

The userscript is a simple script that checks if the current website is in the `redirect` set. If it is, it redirects the user to the `location` set. Inital testing revealed that users could decline to open the productivity app and continue to browse the blocked site. The double redirect is our solution: a way to bypass restrictions on closing tabs. Most browsers will not allow a userscript to close a tab that was not opened by the userscript. By redirecting to a website that is useless, the user gets the desired productivity boost without requiring the abilty to close tabs. 

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
