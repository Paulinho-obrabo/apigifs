import {readdir} from 'fs/promises';
import path from 'path';
export async function randomGif(action,type){
 const dir=path.join('public','gifs',action,type);
 const files=(await readdir(dir)).filter(f=>/\.(gif|webp|png)$/i.test(f));
 if(!files.length) throw new Error();
 return files[Math.floor(Math.random()*files.length)];
}