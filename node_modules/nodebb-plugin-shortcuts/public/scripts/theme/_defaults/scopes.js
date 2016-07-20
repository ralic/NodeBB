define("plugin/shortcuts/theme-defaults/scopes",function(){"use strict";return function(a,b){b.scopes={getCurrent:function(){
// if a dialog is opened, restrict scopes
if(b.dialogs.getOpened().length)return["dialog","body"];
// if ACP, restrict scopes
if(app.inAdmin)return["acp","body"];var a=[];
// enable (minimized) composer if found
// enable taskbar if found
// enable breadcrumb if found
// enable topic, category, selection
// enable nav-pills if found
// enable header and body
return null!=b.composer.getAny()&&a.push(null!=b.composer.getActive()?"composer":"composer_closed"),$(".taskbar li").length&&a.push("taskbar"),$(".breadcrumb").length&&a.push("breadcrumb"),a.push("topic","category","selection"),$(".nav-pills").length&&a.push("navPills"),a.push("header","body"),a}}}});