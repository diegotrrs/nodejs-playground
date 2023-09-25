type Request = {
  requestId: number;
  ipAddress: string;
  unixTimestampInMS: number;
};

type RRequest = {
  requestId: number;
  ipAddress: string;
  timestamp: number;
};

type ResponseReduce = {
  [key: RRequest["ipAddress"]]: 
    {
      requestId: RRequest["requestId"];
      timestamp: RRequest["timestamp"];
    }[];
};

const newF = (requests: string[], limitPerSecond: number) => {
  return requests
    .map((requestString) => {
      const parts = requestString.split(" ");
      let requestId = parseInt(parts[0]);
      let ipAddress = parts[1];
      let timestamp = parseInt(parts[2]);

      return {
        requestId,
        ipAddress,
        timestamp,
      };
    })
    .reduce<ResponseReduce>((previousValue, currentValue) => {
      if (!previousValue[currentValue.ipAddress]) {
        previousValue[currentValue.ipAddress] = []
      }
      previousValue[currentValue.ipAddress].push({
        timestamp: currentValue.timestamp,
        requestId: currentValue.requestId,
      });
      return previousValue;
    }, {});    
};

function GetRejectedRequests(
  requests: string[],
  limitPerSecond: number
): number[] {
  // A map to keep the last timestamp of accepted requests per IP
  let lastAcceptedTimestamps = new Map<string, number>();
  let rejectedRequests = [];

  for (let request of requests) {
    // Extracting the request_id, ip_address and timestamp from the request string
    let parts = request.split(" ");
    let requestId = parseInt(parts[0]);
    let ipAddress = parts[1];
    let timestamp = parseInt(parts[2]);

    // If this IP is making a request for the first time, accept it
    if (!lastAcceptedTimestamps.has(ipAddress)) {
      lastAcceptedTimestamps.set(ipAddress, timestamp);
      continue;
    }

    // If the IP is making another request within limit, reject it
    let lastTimestamp = lastAcceptedTimestamps.get(ipAddress)!;
    if (timestamp - lastTimestamp < 1000 / limitPerSecond) {
      rejectedRequests.push(requestId);
    } else {
      // If the request is made after the limit, accept it and update the lastTimestamp
      lastAcceptedTimestamps.set(ipAddress, timestamp);
    }
  }

  return rejectedRequests;
}

export default () => {
 

  // Test
  let requests = [
    "1 172.253.115.138 50000",
    "2 172.253.115.139 50100",
    "3 172.253.115.138 50210",
    "4 172.253.115.139 50300",
    "5 172.253.115.138 51000",
    "6 172.253.115.139 60300",
  ];

  let limitPerSecond = 1;
  //console.log(GetRejectedRequests(requests, limitPerSecond)); // [3, 4]
  console.log(newF(requests, limitPerSecond)); // [3, 4]
};
