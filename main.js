const Node = (value) => {
  return {
    value,
    next: null
  }
}

const Lil = () => {
  return {
    head: null,
    length: 0,

    values: function() {
      // let newArr = [];
      // for (const item of this){
      //   newArr.push(item.value)
      // }
      // return values;
    },

    addToStart: function(value) {
      const newNode = Node(value);
      if (this.head === null){
        this.head = newNode;
      } else if (this.head !== null){
        const oldHead = this.head;
        newNode.next = oldHead;
        this.head = newNode;
      }
      this.length++;
      return this;
    },

    addToEnd: function(value) {
      const newNode = Node(value)
      if (this.head === null){
        this.head = newNode;
      } else if (this.head !== null){
        this.head.next = newNode;
      }
        this.length++;
      return this;
    },

    removeFromStart: function() {
    
    },

    removeFromEnd: function() {
    
    },

    getAt: function(i) {
    
    },

    removeAt: function(i) {
    
    },
  }
}


module.exports = {
  Lil,
  Node,
}