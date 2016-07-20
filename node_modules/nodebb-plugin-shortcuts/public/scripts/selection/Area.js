define("plugin/shortcuts/selection/Area",function(){"use strict";/**
   * A class to identify a Selection-Area within DOM.
   * @param $parent The parent jQuery object of the area.
   * @constructor
   */
function a(a){this.parent=null==a?b:a,this.hooks=null,this.items=null,this.index=0}var b=$();return a.prototype.setHooks=function(a){this.hooks=null==a?this.hooks:a},a.prototype.refreshItems=function(){this.items=this.parent.find(this.hooks.selector),this.items.length||(this.items=this.parent.children(this.hooks.selector))},a.prototype.item=function(a){return this.items.eq(null==a?this.index:a)},a});