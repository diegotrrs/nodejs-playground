

class ListNode {
  constructor(val, next = null){
      this.val = val
      this.next = next
  }
}

class LinkedList {
  constructor() {}

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
      let currentNode = this.head
      let i = 0
      while(currentNode){            
          if(index === i){
              return currentNode.val
          }
          
          currentNode = currentNode.next
          i++
      }
      return -1
  }

   insertHead(val) {
      const oldHead = this.head
      const newHead = new ListNode(val, oldHead)

      this.head = newHead
      
      // List was empty before insertion
      if(!oldHead){
          this.tail = newHead
      } else {
          // There was only one element
          if(!oldHead.next){
              this.tail = oldHead 
          }
      }
             
  }
 

   insertTail(val) {
      const newTail = new ListNode(val)
      const oldTail = this.tail
      this.tail = newTail

      // It was empty
      if(!oldTail){
          console.log('It was empty')
          this.head = newTail
      } else {           
          oldTail.next = newTail
      }         
  }

     remove(index) {
      let currentNode = this.head
      let previousNode = null
      let i = 0
      while(currentNode){
          //console.log('*********************', currentNode, previousNode)

          if(index === i){
              // If it's the head
              if(!previousNode){
                  this.head = currentNode.next
              } else {
                  // If it's the tail
                  if(!currentNode.next){
                      previousNode.next = null
                      this.tail = previousNode
                  } else {

                      // console.log('>>> 22')
                      // console.log('previousNode')
                      // console.log(previousNode)
                      // console.log('currentNode')
                      // console.log(currentNode)
                      previousNode.next = currentNode.next
                  }
              }
              
              return true
          }
          previousNode = currentNode

          currentNode = currentNode.next
          i++
      }
      return false
  }

    print(values, node){
      values.push(node.val)
      if(!node.next){
          return values
      }
      return this.print(values, node.next)
  }
  /**
   * @return {number[]}
   */
  getValues() {
      if(!this.head) return []
      return this.print([], this.head)
  }


  // test() {
  //     let currentNode = this.head
  //     let i = 0
  //     console.log(`head ${this.head.val} tail ${this.tail?.val}`)
  //     while(currentNode){
  //         console.log(`${i} => currentNode: ${currentNode.val} next: (${currentNode.next?.val})`)
  //         currentNode = currentNode.next
  //         i++
  //     }
  // }
}



var list = new LinkedList()
//list.insertHead(1)
//list.insertHead(2)
// list.insertHead(3)
// list.insertHead(4)
// list.insertHead(5)

console.log(list.getValues())

// list.insertTail(5)
// list.insertTail(4)
// list.insertTail(3)
// list.insertTail(2)
// list.insertTail(1)

// list.insertHead(6)

// list.test()

// console.log(list.remove(21))

// list.test()

