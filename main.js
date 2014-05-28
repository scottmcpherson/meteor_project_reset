#!/usr/bin/env node

var Fiber = require('fibers');
var path = require('path');
var fs = require('fs-extra');
var _ = require('underscore');

Fiber(function () {
   console.log( "cwd", process.cwd() );
   console.log( "project files/folders", fs.readdirSync(process.cwd()) );
   var filesAndFolders = fs.readdirSync(process.cwd());

   _.each( filesAndFolders, function(f) {

      if (f !== '.meteor') {
         var fullPath = path.join( process.cwd(), f)
         console.log("folder: ", fullPath );
         fs.removeSync(fullPath)
      }

   });
}).run();
