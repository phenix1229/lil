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
      const newArr = [];
      let current = this.head;
      while (current.next){
        newArr.push(current.value);
        current = current.next;
      }
      newArr.push(current.value)
      return newArr;
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
      const oldHead = this.head;
      this.head = oldHead.next;
      return oldHead;
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