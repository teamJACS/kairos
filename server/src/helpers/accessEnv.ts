const cache: { [key: string]: any } = {};

const accessEnv = (key: string, defaultValue?: any) => {
  if(!(key in process.env)){
    if(defaultValue) return defaultValue;
    throw new Error(`${key} not found in process.env`);
  }
  if(cache[key]) return cache[key];
  cache[key] = process.env[key];
  return process.env[key]
}

export default accessEnv;