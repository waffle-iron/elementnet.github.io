function doThis($) {
    'use strict';
    /*
    ElementNet Block Engine
    Copyright (c) 2017 ElementNetwork
    License: Apache 2.0
    */
            
    /*
    HOW TO CREATE BLOCKS
    ********************
    Example code: (new Block('', 'embedJavaScript', ['JavaScript from url: %s', '<script src=%s><\/script>'], 'Code', {
        code: "<<script src=$1>><<\/script>>", // Escaped; see below
        hidden: false,
        movable: true,
    })).render();
    METHOD CHAINING *IS* ALLOWED
    Block types:
    (none/other) - stack
    r - returns value
    b - returns true/false/null/undefined (or equivalents in other languages - such as None in Python)
    c - C-shaped block, containing others inside (input accessable by $c in code)
    s - start block, such as <!DOCTYPE HTML5>
    Input types:
    %c - color
    %s - string
    %b - true/false/null/undefined
    %n - number
    %m.<menu name in menus var> - dropdown
    %t.<menu name in menus var> - dropdown/string
    %d.<menu name in menus var> - dropdown/number
    There is a subset of JavaScript available:
    The bool?ifTrue/bool?iftrue:ifFalse operators
    The +, -, *, and / operators
    Parens: ()
    The > and < operators
    The !, &&, and || (|| and && are replaced with | and &)
    The ===, ==, !==, and != operators (To escape, use ~#~#~ for ===, ~#~ for ==, !!~#~ for !==, and !!~ for !=)
    Math.PI, Math.E, and Math.pow (Escapable by doing something like `Math..PI`)
    Use doubling as an escape code, and a pound character (#) to escape doubling (see === operators for example); DO NOT forget to pound-escape characters that shouldn't be escaped (such as `<<ab#br>>`), and characters that have already been escaped (such as `<<!!DOCTYPE html PUBLIC "-//#//W3C//#//DTD HTML 4.01 Frameset//#//EN" "ht#tp://#//www.w3.org//TR//html4//DTD//frameset.dtd"`). Example, escaping the dollar sign ($) (in PHP):
    (new Block('r', 'readVariable', ['variable %s', '$%s'], 'Data', {
        code: "$$#$1",
        hidden: false,
        movable: true,
    })).render();
    Usage of this block:
    {variable [myVariable]} --> `$myVariable`
    */
    (function () {
        return;
    }());
    var categories = {}, menus = {};
    function Block(type, spec, text, category, descriptor) {
        this.html = descriptor.html;
        this.type = type;
        this.spec = spec;
        this.text = text;
        this.category = category;
        if (descriptor.parameterNameDefaults) {
            this.paramaterNameDefaults = descriptor.parameterNameDefaults;
        }
        if (descriptor.buttonLeft) {
            this.buttonLeft = descriptor.buttonLeft;
        }
        if (descriptor.buttonRight) {
            this.buttonRight = descriptor.buttonRight;
        }
        this.desc = descriptor;
        this.element = document.createElement("canvas");
        $(this.element).data("spec", spec).addClass("block");
    
    }
    Block.prototype.render = function () {
        return this;
    };
    Block.prototype.execute = function () {
        return this;
    }
    window.htmlScript = function () {
        categories = {'': []};
        menus = {

        };
        (new Block('h', 'doctype', ['document type: HTML 5.0', '<!DOCTYPE html>'], '', {
            code: '<<!!DOCTYPE html>>',
            hidden: 'true',
            moveable: 'false'
        })).render();
    };
}