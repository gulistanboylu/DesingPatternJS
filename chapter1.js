/**
 * Created by merida on 07/05/16.
 */
/* if you are coming from a procedural background, you might just do the following

 */

function startAnimation() {
    //body
}

function stopAnimation() {
    //body
}

/* Next piece of code defines a class that lets u create such obj */

var Anim = function () {

};

Anim.prototype.start = function () {

};

Anim.prototype.stop = function () {

};

/* Usage */

var myAnim = new Anim();
myAnim.start();

/* Add a method to the Function object that can be used to declare methods. */

Function.prototype.method = function (name, fn) {
    this.prototype[name] = fn;
};

/* Anim class, with methods created using a convenience method */

var Anim = function () {

};

Anim.method('start', function () {
});

Anim.method('stop', function () {
});

/* This version allows the calls to be chained */

Function.prototype.method = function (name, fn) {
    this.prototype[name] = fn;
    return this;
};

/* Anim class, with methods created using a convenience method and chaining */

var Anim = function () {
};


