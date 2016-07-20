define("plugin/shortcuts/selection/Selection",["plugin/shortcuts/debug","plugin/shortcuts/selection/Area"],function(a,b){"use strict";function c(){this.areas=[],this.index=-1,this.active={area:null,item:g},this.elementWithClass=g}/**
   * Creates a new Selection-Area with the given selector.
   * @param selector The selector object as defined by the theme.
   * @param parent The jQuery element to use as parent element.
   * @returns {null|Area}
   */
function d(a,c){var d="function"==typeof a.getArea?a.getArea.call(c):null;return d===!1?null:(null==d&&(d=new b(c)),null==d.hooks&&d.setHooks(a),null==d.items&&d.refreshItems(),d)}var e={selection:"shortcuts-selection",highlightIn:"highlight-in",highlightOut:"highlight-out"},f={highlightIn:500,highlightKeep:0,highlightOut:200},g=$();/**
   Triggers the action of given grade and selected item.
   @param index The grade of the action to trigger.
   */
/**
   Selects the item of given index within given Area (defaults to active Area).
   @param index The index of the item to select.
   @param areaIndex The index of the Area to select (defaults to active Area).
   @returns Boolean Whether anything changed.
   */
/**
   Selects the item that gets found the given amount of items behind the active one.
   @param step The amount of items to go ahead (may be negative too).
   @returns Boolean Whether anything changed.
   */
/**
   Generates a new array of all available Selection-Areas.
   @returns Array The Array of all available Areas.
   */
/**
   Selects the Area at given index within this.areas.
   @param index The index of the Area to select.
   @returns Boolean Whether anything changed.
   */
/**
   Selects the Area that gets found the given amount of Areas behind the active one.
   @param step The amount of Areas to go ahead (may be negative too).
   @returns Boolean Whether anything changed.
   */
return c.prototype.attachTheme=function(a){this.theme=a,this.reset(this.refreshAreas())},c.prototype.select=function(b,c,d){var f=this;
// default to saved container values
null==b&&(b=this.index),null==d&&(d=this.elementWithClass);var g=this.active.area=this.areas[this.index=b];null==g?this.active.item=null:(
// fallback item-index to saved value within area
// this ensures the index can be restored after another area was selected
null==c&&(c=g.index),g.index=c,
// get active item
this.active.item=g.item()),this.elementWithClass[0]!==d[0]&&(this.elementWithClass.removeClass(e.selection).removeClass(e.highlightIn).removeClass(e.highlightOut),this.elementWithClass=d.addClass(e.selection),null!=this.theme&&this.theme.utils.scroll.elementIntoView(f.elementWithClass[0])),a.log("Selection item changed",b,c)},c.prototype.deselect=function(){this.select(-1,0,g)},c.prototype.reset=function(a){this.areas=null==a?[]:a,this.deselect()},c.prototype.highlight=function(){var a=this,b=a.elementWithClass;
// viewport correction
// class manipulation
return b.length?(null!=this.theme&&this.theme.utils.scroll.elementIntoView(b[0]),b.addClass(e.highlightIn),setTimeout(function(){b.removeClass(e.highlightIn),setTimeout(function(){b===a.elementWithClass&&(b.addClass(e.highlightOut),setTimeout(function(){b.removeClass(e.highlightOut)},f.highlightOut))},f.highlightKeep)},f.highlightIn),!0):!1},c.prototype.triggerAction=function(a){var b=this.active.area,c=null!=b&&null!=b.hooks.follow&&b.hooks.follow[a];return null==c?!1:c.call(this.active.item)},c.prototype.selectItem=function(a,b){null==b&&(b=this.index);var c=this.areas[b],d=c&&c.item(a);if(null==d||b===this.index&&a===b.index)return!1;
// find element to highlight
var e=d;if(!e.height())for(var f,g=e.children().toArray(),h=0;h<g.length;h++)if(f=$(g[h]),f.height()){e=f;break}
// select item
// trigger focus hook
return"function"==typeof c.hooks.getClassElement&&(e=c.hooks.getClassElement.call(e,d)),this.select(b,a,e),c.hooks.focus&&"function"==typeof c.hooks.focus.item&&c.hooks.focus.item.call(d),!0},c.prototype.selectNextItem=function(a){null==a&&(a=1);var b=this.active.area;if(null==b)return!1;b.refreshItems();
// normalize step
var c=1;0>a&&(c=-1,a=-a);for(
// step times select next visible item in stepDirection
var d,e=b.index,f=!1,g=b.items.length;a--;){d=0;
// select first next item that has a height != 0 and is visible, break if no item is visible (tries counter)
do{for(e+=c;0>e;)e+=g;for(;e>=g;)e-=g;f=this.selectItem(e)}while(++d<g&&this.active.item&&(!this.active.item.height()||!this.active.item.is(":visible")))}return f},c.prototype.refreshAreas=function(){function b(a,b){var c=d(e,$(b));null!=c&&(c.items.length||e.force)&&i.push(c)}if(null==this.theme)return[];var c,e,f,g,h=this.theme,i=[],j=h.selection.length;for(c=0;j>c;c++)e=h.selection[c],f=$(e.selector),f.length&&(e.isParent?f.each(b):(g=d(e,f.eq(0).parent()),null!=g&&(g.items.length||e.force)&&i.push(g)));return a.log("Selection Areas refreshed",i),i},c.prototype.selectArea=function(a){if(a===this.index)return!1;
// FIXME dropdown scroll does only ensure first item visible
var b=this.areas[a],c=this.active.area;return c&&c.hooks&&c.hooks.blur&&"function"==typeof c.hooks.blur.area&&c.hooks.blur.area.call(c,b),b.hooks.focus&&"function"==typeof b.hooks.focus.area&&b.hooks.focus.area.call(b,c),b.refreshItems(),this.selectItem(b.index,a)!==!1},c.prototype.selectNextArea=function(a){if(null==a&&(a=1),!this.areas.length)return!1;for(var b=this.index<0?a:this.index+a,c=this.areas.length;0>b;)b+=c;for(;b>=c;)b-=c;return this.selectArea(b)},c});