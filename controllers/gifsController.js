import {randomGif} from '../utils/randomGif.js';
export async function getGif(req,res){
 const {action,type}=req.params;
 try{
 const file=await randomGif(action,type);
 res.json({success:true,action,type,url:`/gifs/${action}/${type}/${file}`});
 }catch{
 res.status(404).json({success:false,message:'Categoria não encontrada'});
 }
}