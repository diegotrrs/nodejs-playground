type TimestampedValue = {
  timestamp: number;
  value: any;
};



class LWWSetX {
  private set: Map<any, TimestampedValue> = new Map();

  add(element: any, timestamp: number): void {
      const currentTimestamp = this.set.get(element)?.timestamp || -Infinity;
      if (timestamp > currentTimestamp) {
          this.set.set(element, { timestamp, value: element });
      }
  }

  remove(element: any, timestamp: number): void {
      const currentTimestamp = this.set.get(element)?.timestamp || -Infinity;
      if (timestamp > currentTimestamp) {
          this.set.delete(element);
      }
  }

  exists(element: any): boolean {
      return this.set.has(element);
  }
}
