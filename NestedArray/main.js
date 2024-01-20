// Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.
// A multi-dimensional array is a recursive data structure that contains both integers and other multi-dimensional arrays.
// inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.



function* inorderTraversal(arr) {
    
    function* traverse(element) {
      if (Array.isArray(element)) {
        for (const subElement of element) {
          yield* traverse(subElement);
        }
      } else {
        yield element;
      }
    }
  
    yield* traverse(arr);
  }
  
  const arr1 = [[[6]], [1, 3], []];
  const generator1 = inorderTraversal(arr1);
  
  console.log(generator1.next().value); // 6
  

  