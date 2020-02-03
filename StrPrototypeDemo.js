
 String.prototype.distance = function (char) {
    var index = this.indexOf(char);

    if (index === -1) {
        console.log(char + " does not appear in " + this);
    } else {
        console.log(char + " is " + (this.length - index) + " characters from the end of the string!");
    }
};

"Hello".distance("H");