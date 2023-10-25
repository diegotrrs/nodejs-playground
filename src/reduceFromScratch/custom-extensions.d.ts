declare global {
  interface Array<T> {
    myReduce<U>(
      reducer: (accum: U, currentElement: T) => U,
      initialValue: U
    ): U;
  }
}

export {};