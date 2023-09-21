export default () => {
  const stack = []
  stack.push(1)
  stack.push(2)
  stack.push(3)

  console.log(stack)

  // To remove the last one added I do 
  console.log('Removed', stack.pop())

  console.log(stack)

}