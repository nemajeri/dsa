class DoublyLinkedListNode {
  constructor(prev = null, value, next = null) {
    this.prev = prev;
    this.value = value;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Function to add a new node to the beginning of the list
  prepend(value) {
    if (this.head != null) {
      let firstNode = this.head;
      this.head = new DoublyLinkedListNode(null, value, firstNode);
      firstNode.prev = this.head;
    } else {
      this.head = new DoublyLinkedListNode(null, value, null);
      this.tail = this.head;
    }
    this.length++;
  }

  // Function to add a new node to the end of the list
  append(value) {
    if (this.tail != null) {
      let lastNode = this.tail;
      this.tail = new DoublyLinkedListNode(lastNode, value, null);
      lastNode.next = this.tail;
    } else {
      this.tail = new DoublyLinkedListNode(null, value, null);
      this.head = this.tail;
    }
    this.length++;
  }

  // Function to insert a new node at a specific position in the list
  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('Invalid index');
    }

    const newNode = new DoublyLinkedListNode(value);

    if (index === 0) {
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (index === this.length) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      let i = 0;

      while (i < index) {
        currentNode = currentNode.next;
        i++;
      }

      newNode.prev = currentNode.prev;
      newNode.next = currentNode;
      currentNode.prev.next = newNode;
      currentNode.prev = newNode;
    }

    this.length++;
  }

  // Function to remove a node from the list at a specific position
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index');
    }

    if (index === 0) {
      if (this.head !== null) {
        let currentHeadNode = this.head;
        this.head = currentHeadNode.next;
        if (this.head !== null) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
        currentHeadNode.value = null;
      }
    } else if (index === this.length - 1) {
      let currentTailNode = this.tail;
      this.tail = currentTailNode.prev;
      if (this.tail !== null) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      currentTailNode.value = null;
    } else {
      let i = 0;
      let node = this.head;
      while (i < index) {
        node = node.next;
        i++;
      }

      if (i === index) {
        let currentNode = node;
        currentNode.value = null;
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
      }
    }

    this.length--;
  }

  // Function to get the value of a node at a specific position in the list
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index');
    }

    let i = 0;
    let node = this.head;
    while (i < index) {
      node = node.next;
      i++;
    }

    if (i === index) {
      return node.value;
    }
  }

  // Function to update the value of a node at a specific position in the list
  set(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index');
    }

    let i = 0;
    let node = this.head;
    while (i < index) {
      node = node.next;
      i++;
    }

    if (i === index) {
      node.value = value;
    }
  }

  // Function to check if the list is empty
  isEmpty() {
    return this.length === 0;
  }

  // Function to get the length of the list
  size() {
    return this.length;
  }

  // Function to clear the list
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Function to print the list
  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

class SinglyLinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Function to add a new node to the beginning of the list
  prepend(value) {
    // TODO: Implement prepend function
    const newNode = new SinglyLinkedListNode(value, this.head);
    this.head = newNode;
    if (this.length === 0) {
      this.tail = newNode;
    }
    this.length++;
  }

  // Function to add a new node to the end of the list
  append(value) {
    // TODO: Implement append function
    const newNode = new SinglyLinkedListNode(value, null);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Function to insert a new node at a specific position in the list
  insert(index, value) {
    // TODO: Implement insert function
    if (index < 0 || index > this.length) {
      throw Error('Index out of bounds');
    }
  }

  // Function to remove a node from the list at a specific position
  remove(index) {
    // TODO: Implement remove function
    if (index < 0 || index > this.length) {
      throw Error('Index out of bounds');
    }
  }

  // Function to get the value of a node at a specific position in the list
  get(index) {
    // TODO: Implement get function
    if (index < 0 || index > this.length) {
      throw Error('Index out of bounds');
    }
  }

  // Function to update the value of a node at a specific position in the list
  set(index, value) {
    // TODO: Implement set function
    if (index < 0 || index > this.length) {
      throw Error('Index out of bounds');
    }
  }

  // Function to check if the list is empty
  isEmpty() {
    // TODO: Implement isEmpty function
  }

  // Function to get the length of the list
  size() {
    // TODO: Implement size function
  }

  // Function to clear the list
  clear() {
    // TODO: Implement clear function
  }

  // Function to print the list
  print() {
    // TODO: Implement print function
  }
}
