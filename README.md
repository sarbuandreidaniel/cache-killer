# Cache Killer - jQuery plugin
A jQuery plugin that refreshes the files (**css, images and scripts**) on your website

### Installing instructions

Using npm
```
    npm install cache-killer
```
Using bower
```
    bower install cache-killer
```
Using git
```
    git clone https://github.com/sarbuandreidaniel/cache-killer.git
```
Load the cacke-killer.min.js script after the jQuery library
```
    <script src="path/to/the/jQuery/library"></script>
    <script src="path/to/cacke-killer.min.js"></script>
```
Init the plugin in your .js file right after the document.ready declaration
```
    (function ($) {
        $.cacheKiller();
    }(jQuery))
```
Activate it be adding the *cacheKiller=true* query string to your website URL
```
    www.example.com?cacheKiller=true
```
Once it was activated, you can drop the query string and from now on your files will always be called right from the server

If you want to temporary dissable it, add the *cacheKiller=false* query string to your website URL. Once it was deactivated, you can drop the query string.

### Options
You can exclude any file you want by setting it's value to false:

```
    (function ($) {
        $.cacheKiller({
            css: false,
            images: true,
            scripts: false
        });
    }(jQuery))
```
### How it works ?
When you activate it, it sets a cookie to your browser. Once the cookie is set, everytime you load a page from your website it adds a query string to your files, forcing the browser to get the latest version of them from the server.

### Important !
Please note that if you change your browser or delete your cookies you will need to re-activate it.