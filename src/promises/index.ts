const sleep = (ms: number) => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve(`Sleep for ${ms}`), ms)
  })
}

const chainPromises = async () => {
  console.log('>>> Beginning')
  const results = await Promise.all([sleep(2000), sleep(4000)])
  results.forEach((result) => {
    console.log(result)
  })
  console.log('>>> End')
}

const racingPromises = async () => {
  console.log('>>> Beginning')
  const result = await Promise.race([sleep(2000), sleep(14000)])
  console.log(result)  
  console.log('>>> End')
}

const sequential = async () => {
  const promises = [sleep(2000), sleep(10000)]
  for(let promise of promises){
    console.log("🚀 ~ sequential ~ promise:")
    const result = await promise
    console.log("🚀 ~ sequential ~ promise: result", result)
  } 

}

function job(state: boolean) {
  return new Promise(function(resolve, reject) {
      if (state) {
          resolve('success');
      } else {
          reject('error');
      }
  });
}

//racingPromises()
sequential()
