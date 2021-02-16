// Extended JSON Parse
export const JSONParse = (str, defaultVal = []) => {
    try {
      if (str != null) {
        return JSON.parse(str)
      } else {
        return defaultVal
      }
    } catch (e) {
      return defaultVal
    }
  }
  
  // Deassociate Object/Arry
  export const deassociateObject = (obj) => {
    return obj ? JSON.parse(JSON.stringify(obj)) : {}
  }
  
  const utils = {
    deassociateObject,
    JSONParse
  }
  export default utils
  