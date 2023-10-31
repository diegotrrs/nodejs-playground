import { getMappingsFromCache } from "./cache";

interface Characteristic {
  name: string;
  value: string;
}

type CharacteristicsMapper = (
  characteristics: Characteristic[],
  supplier: string
) => Promise<Characteristic[]>;


const talktalk = () => {
  const array: number[] = [1,2,3,4]
  const x = array.filter(a => a === 2)
}

export const mapGatewayCharacteristics: CharacteristicsMapper = async (
  characteristics,
  supplier
) => {
  // TODO
  return characteristics;
};

export const mapSupplierCharacteristics: CharacteristicsMapper = async (
  characteristics,
  supplier
) => {
  // TODO
  return characteristics;
};

const s = new Set()
s.add(1)
s.add(1)
const x = [...s]

export type MappingCharacteristic = {
  name: Characteristic["name"];
  value?: Characteristic["value"];
}

const mappedCharacteristics = new Set<MappingCharacteristic>()

mappedCharacteristics.add({
  name: "1",
  value: "2"
})


mappedCharacteristics.add({
  name: "1",
  value: "2"
})

//console.log("🚀 ~ mappedCharacteristics:", mappedCharacteristics)

console.log('******')
const mappingsFromCacheLocal = getMappingsFromCache()
console.log("🚀 ~ mappingsFromCache global:", mappingsFromCacheLocal)
mappingsFromCacheLocal.push(999)
console.log("🚀 ~ mappingsFromCache local:", mappingsFromCacheLocal)

console.log("🚀 ~ mappingsFromCache global:", getMappingsFromCache())
