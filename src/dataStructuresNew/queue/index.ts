export default () => {
  const queue  = []
  queue.push(1)
  queue.push(2)
  queue.push(3)
  console.log('queue >>>', queue)
  console.log(queue.shift())
  console.log(queue.shift())
  console.log('queue >>>', queue)
}