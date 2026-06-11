// creates a stack

var Stack = function(){
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function(){
        if (this.count === 0)
            return undefined;
    }


    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}
