
/**
 * The very simple in-memory cache of the supplier mappings. 
 * This doesn't include any of the common feature a robust in-memory cache includes.
 * For a productive app something like Node Cache or Redis could be used.
 */
let cache: number[] = [];

export const loadMappingsIntoCache = async () => {
  cache.push(3)
  cache.push(4)
  console.log("🚀 ~ loadMappingsIntoCache ~ cache:", cache)  
}

export const insertNewMappingToCache = (data: number) => {
  console.log("🚀 ~ insertNewMappingToCache ~ ", data)  
  cache = [ ...cache, data ]
}

export const getMappingsFromCache = () => {
  return [...cache]
}