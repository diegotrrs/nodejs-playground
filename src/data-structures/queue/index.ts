export default () => {
  const queue = []
  queue.push(1)
  queue.push(2)
  queue.push(3)

  console.log(queue)

  // To remove the last one  I do 
  console.log('Removed', queue.shift())

  console.log(queue)

}