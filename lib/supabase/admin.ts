import { createSupabaseLikeClient } from './mock';
export function createAdminClient(){if(typeof window!=='undefined')throw new Error('Service role client cannot run in browser');return createSupabaseLikeClient()}
