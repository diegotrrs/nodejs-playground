Check out how the architecture works with primary
![architecture with primary](./Screenshot%202023-09-25%20at%2010.35.12.png)

# Cluster module

The cluster module provides a way of creating child PROCESSES that
run in the same server port.
Each spawned process has its own event loop, memory and V8 instance.  

https://blog.appsignal.com/2021/02/03/improving-node-application-performance-with-clustering.html

If you run the loadtest then we shouldn't get more errors since now there are different processes to handle this.


# Using pm2

[PM2](https://www.npmjs.com/package/pm2) is a Production Process Manager for Node.js applications with a built-in Load Balancer.

```
 pm2 start dist/clusterModule/index.js -i 10 -f
```