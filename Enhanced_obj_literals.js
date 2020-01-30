const x=4, y=8, w=12, h=20;

const aReact = {
    x, y, w, h,

    calArea(){
        return this.x * this.y;
    },

    calRes(){
        const r = this.x + this.y;
        return r * this.w * this.h;
    }
}

console.log(aReact);
console.log(aReact.calArea());
console.log(aReact.calRes());


// template strings
