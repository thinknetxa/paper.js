/*
 * Paper.js - The Swiss Army Knife of Vector Graphics Scripting.
 * http://paperjs.org/
 */
var FillImage = this.FillImage = Base.extend(new function() {

}, {
    initialize: function(src) {
        this.src = src;
    },
    transform: function(matrix) {

    },
    toCanvasStyle: function(ctx) {
        var image = document.getElementById(this.src) || new Image();
        return ctx.createPattern(image, 'repeat');
    }
   }
);