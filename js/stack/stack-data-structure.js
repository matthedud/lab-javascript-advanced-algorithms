class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE
  }

  isEmpty() {
    return this.stackControl.length === 0
  }

  push(item) {
    if(this.canPush) {
      this.stackControl.push(item)
      return this.stackControl
    }
  }

  pop() {
    if(!this.isEmpty) this.stackControl.push(pop)
  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
