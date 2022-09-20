/**
 * remove the start `./`, `../`, `/`
 * @param str selection text
 */
const trimToken = (str:string) => str.replace(/^((\.\.)|\.)?\//, '');

// batch remove
const trimAll = (str:string):string=>{
  const ret = (trimToken(str));
  if( ret !== str) {
    return trimAll(ret);
  }
  return ret;
};

/**
 * simplify user selected path
 * @param path user selection
 */
export const pathSimplify = (path:string)=>{
  return trimAll(path);
};