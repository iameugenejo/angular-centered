angular-centered
================

An angular directive for rendering a vertically and horizontally positioned overlay.

fiddle : http://jsfiddle.net/vCL9P/2/

``` html
<div ng-app="myApp">
  <centered>
    <h2>This text should be centered</h2>
  </centered>
</div>
```

``` css
.angular-center-container {
  position: fixed;
  top:0;
	left:0;
	height:100%;
	width:100%;
	display:table;
	pointer-events: none;
    z-index:9999;
}
.angular-centered {
	display: table-cell;
	vertical-align: middle;
	text-align: center;
}
```

``` javascript
angular.module("myApp", ["angular-centered"]);
```

