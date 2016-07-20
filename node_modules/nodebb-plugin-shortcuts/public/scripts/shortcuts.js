/*
 * This file defines a basic module that provides some information.
 *
 * Files within the public/scripts/ directory get meta-replaced by default (thus @{...} gets resolved within the
 * grunt-tasks).
 */
define("plugin/shortcuts",function(){"use strict";var a="1.1.2+936".split("+");return{id:"nodebb-plugin-shortcuts",name:"Shortcuts",version:a[0],versionMeta:null!=a[1]?a[1]:null}});