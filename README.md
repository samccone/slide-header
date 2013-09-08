Slide Header
==============

A modern modular header for your site

##[demo](http://samccone.github.io/slide-header/demo/index)

####API

```js
var slideHeader = new SlideHeader(document.querySelectory('header'), {options});

//with jquery
var slideHeader = new SlideHeader($('header')[0], {options});
```

#### Options

```js
mouseTrigger: <true / false> //default true
```

#### API
```js
.destroy()    //removes all events and shows the header
.showHeader()
.hideHeader()
```


####Developing

```npm install```

```cake build```