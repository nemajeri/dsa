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
    return node.value;
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
    if (index < 0 || index > this.length) {
      throw new Error('Index out of bounds');
    }

    const newNode = new SinglyLinkedListNode(value);

    if (index === 0) {
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    } else if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      let i = 0;

      while (i < index - 1) {
        currentNode = currentNode.next;
        i++;
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }

    this.length++;
  }

  // Function to remove a node from the list at a specific position
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw Error('Index out of bounds');
    }

    if (index === 0) {
      if (!this.head) {
        return 'List empty';
      }
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      let currentNode = this.head;
      let i = 0;
      while (i < index - 1) {
        currentNode = currentNode.next;
        i++;
      }
      if (index === this.length - 1) {
        currentNode.next = null;
        this.tail = currentNode;
      } else {
        currentNode.next = currentNode.next.next;
      }
    }
    this.length--;
  }

  // Function to get the value of a node at a specific position in the list
  get(index) {
    if (index < 0 || index > this.length) {
      throw Error('Index out of bounds');
    }

    let i = 0;
    let node = this.head;
    while (i < index) {
      node = node.next;
      i++;
    }
    return node.value;
  }

  // Function to update the value of a node at a specific position in the list
  set(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    let currentNode = this.head;
    let nodeToAdd = new SinglyLinkedListNode(value, null);

    if (index === 0) {
      nodeToAdd.next = this.head.next;
      this.head = nodeToAdd;
    } else {
      let i = 0;
      while (i < index - 1) {
        currentNode = currentNode.next;
        i++;
      }

      nodeToAdd.next = currentNode.next.next;
      currentNode.next = nodeToAdd;
    }
  }

  // Function to check if the list is empty
  isEmpty() {
    return this.length == 0;
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
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

class BinarySearchNode {
  constructor(left, value, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new BinarySearchNode(null, value, null);
    //check if the root doesnt exist
    if (this.root == null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else if (value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          // value already exists in the tree
          break;
        }
      }
    }
  }

  search(value) {
    // TODO: Implement search function
  }

  remove(value) {
    // TODO: Implement remove function
  }

  isEmpty() {
    // TODO: Implement isEmpty function
  }

  size() {
    // TODO: Implement size function
  }

  clear() {
    // TODO: Implement clear function
  }

  print() {
    // TODO: Implement print function
  }
}

//Merge sort
const mergeSort = (arr) => {
  sort(arr, 0, arr.length - 1);
};

const sort = (arr, startIndex, endIndex, temp = []) => {
  if (startIndex >= endIndex) {
    return;
  }

  const middleIndex = Math.floor((startIndex + endIndex) / 2);

  sort(arr, startIndex, middleIndex, temp);
  sort(arr, middleIndex + 1, endIndex, temp);
  mergeHalves(arr, startIndex, middleIndex, endIndex, temp);
};

const mergeHalves = (arr, startIndex, middleIndex, endIndex, temp) => {
  let leftIndex = startIndex;
  let rightIndex = middleIndex + 1;
  let tempIndex = startIndex;

  while (leftIndex <= middleIndex && rightIndex <= endIndex) {
    if (arr[leftIndex] <= arr[rightIndex]) {
      temp[tempIndex] = arr[leftIndex];
      leftIndex++;
    } else {
      temp[tempIndex] = arr[rightIndex];
      rightIndex++;
    }
    tempIndex++;
  }

  while (leftIndex <= middleIndex) {
    temp[tempIndex] = arr[leftIndex];
    leftIndex++;
    tempIndex++;
  }

  while (rightIndex <= endIndex) {
    temp[tempIndex] = arr[rightIndex];
    rightIndex++;
    tempIndex++;
  }

  for (let i = startIndex; i <= endIndex; i++) {
    arr[i] = temp[i];
  }
};

//Selection sort
function selectionSortFun(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

//Insertion sort
function insertionSortFun(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
