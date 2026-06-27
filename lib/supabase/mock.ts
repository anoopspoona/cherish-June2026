type Query={select:(s?:string)=>Query;order:(s:string)=>Promise<{data:any[]}> & Query;eq:(a:string,b:any)=>Query;maybeSingle:()=>Promise<{data:any}>};
function query():Query{const q:any={select:()=>q,order:()=>Promise.resolve({data:[]}),eq:()=>q,maybeSingle:()=>Promise.resolve({data:null})};return q}
export function createSupabaseLikeClient(){return{from:(_table:string)=>query(),auth:{getUser:async()=>({data:{user:null}})}}}
