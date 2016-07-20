define("plugin/shortcuts/theme-defaults",["plugin/shortcuts/theme-defaults/utils","plugin/shortcuts/theme-defaults/scopes","plugin/shortcuts/theme-defaults/actions"],function(a,b,c){"use strict";return function(d,e){a(d,e),b(d,e),c(d,e),e.dialogs={getOpened:function(){return $(".modal-dialog").not(".chat-modal>div").filter(":visible").filter(function(a,b){return $(b).height()})},close:function(a){return $(".bootbox-close-button",a).click().length>0},cancel:function(a){return $('[data-bb-handler="cancel"]',a).click().length>0},confirm:function(a){var b=$('[data-bb-handler="confirm"]',a);return b.length?(b.click(),!0):(b=$('[data-bb-handler="ok"]',a),b.click().length>0)}},e.composer={getActive:function(){for(var a=$(".composer").filter(":visible").toArray(),b=0;b<a.length;b++)if("hidden"!==$(a[b]).css("visibility"))return a[b];return null},getAny:function(){var a=$(".composer").filter(":visible");return a.length?a[0]:null},toggleFirst:function(){var a=$('.taskbar li[data-module="composer"]'),b="cmp-uuid-"+a.data("uuid"),c=$("> a",a)[0];return null!=c&&c.click(),document.getElementById(b)}},/**
     * List of Selection-Area types.
     * An element has to provide a selector to identify all items of the area.
     * Every element may provide the following attributes:
     * ; isParent - Set to true if the selector matches parents instead of items.
     * ; force - Set to true to force area registration even if no items are found.
     * ; follow - item-scopes. An array of action-callbacks, sorted by grade.
     * ; getArea() - item-scope. Returns false if area is invalid or an Area-Object that knows the parent of all items.
     * ; focus.area(oldArea) - area-scope. Gets called when the area got selected.
     * ; focus.item() - item-scope. Gets called when any item gets selected.
     * ; blur.area(newArea) - area-scope. Gets called when another area got selected.
     * ; getClassElement(item) - proposal elements scope. Returns the element to display box-shadow around.
     */
e.selection=[]}});