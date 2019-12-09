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
      return this;
    },

    addToEnd: function(value) {
      const newNode = Node(value)
      if (this.head === null){
        this.head = newNode;
      } else if (this.head !== null){
        let current = this.head;
        while (current.next){
          current = current.next;
        }
        current.next = newNode; 
      }
      return this;
    },

    removeFromStart: function() {
      const oldHead = this.head;
      this.head = oldHead.next;
      return oldHead.value;
    },

    removeFromEnd: function() {
      let current = this.head;
      while (current.next.next){
        current = current.next;
      }
      const oldEnd = current.next;
      current.next = null;
      return oldEnd.value;
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