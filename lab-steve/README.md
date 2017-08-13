# DSA Lab 3 (Lab 15) Stacks, Queues, and Modal

### The modal JS/HTML/CSS portion is on [*my codepen*](https://codepen.io/0smium/pen/ZJXEjG).

### The stack/queue portion with *stretch goals* is included here.

#### Instructions:

- Clone this repository: `git clone https://github.com/0smium/lab-15-stacks-and-queues-and-modal.git`
- Navigate to the directory `lab-15-stacks-and-queues-and-modal/lab-steve`
- Run `git checkout lab-steve`
- Run `npm install`
- Run `npm test`

#### Functionality:

- **Stack:** `stack = new Stack(first value)` uses an SLL to create a stack (**Stretch Goal**).
  - `stack.push(new value)` adds a 'new value' to the stack.
  - `stack.pop()` removes an item from the top of the stack.
- **Queue:** `queue = new Queue(first value)` uses an SLL to create a queue (**Stretch Goal**).
  - `queue.enqueue(new value)` adds a 'new value' to the queue.
  - `queue.dequeue()` removes the first item from the queue.

#### Tests:

##### Stack:
1. `stack = new Stack(value)` creates a new stack with 'value' as the only item in the stack.
2. `stack.push(new value)` adds 'new value' to the top of the stack.
3. `stack.pop()` removes 'new value' from the the top of the stack.

##### Queue:
1. `queue = new Queue(value)` creates a new queue with 'value' as the only item in the queue.
2. `queue.enqueue(new value)` adds 'new value' to the back of the queue.
3. `queue.dequeue()` removes the first value, 'value' from the front of the queue leaving 'new value' in the queue.
