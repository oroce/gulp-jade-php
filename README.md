[![Build Status](https://travis-ci.org/oroce/gulp-jade-php.png?branch=master)](https://travis-ci.org/oroce/gulp-jade-php)
gulp-jade-php
=============

Compiles [jade-php](https://github.com/viniwrubleski/jade-php) templates using gulp.

This module is based on the well written [gulp-jade](https://github.com/phated/gulp-jade).

### Usage

    var jade = require('gulp-jade-php');

    gulp.task('templates', function() {
      gulp.src('./views/**/*.jade')
        .pipe(jade({
            locals: {
              title: 'OMG THIS IS THE TITLE'
            }
         }))
         .pipe(gulp.dest('./dist'));
    });

### Options

Since this module based on gulp-jade, it supports everything mentioned in its [README](https://github.com/phated/gulp-jade#options).

Also you can customize the extension of the outputted files. By default the extension will be `.php`, but you can pass `extension: '.phtml'` to generate phtml files.

### Licence

The MIT License (MIT)

Copyright (c) 2014 Róbert Oroszi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.