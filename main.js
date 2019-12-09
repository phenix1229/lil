const Node = (value) => {
  return {
    value,
    next: null
  }
}

const Lil = () => {
  return {
    head: null,

    values: function() {
      const values = [];
      for (const item of Lil){
        values.push(item.value)
      }
      return values
    },

    addToStart: function(value) {

    },

    addToEnd: function(value) {
    
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