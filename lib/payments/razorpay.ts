export type PaymentDraft={amount:number;currency:'INR';receipt:string;notes?:Record<string,string>};
export async function createPaymentIntent(draft:PaymentDraft){return{provider:process.env.NEXT_PUBLIC_PAYMENT_PROVIDER??'razorpay',status:'ready',keyId:process.env.RAZORPAY_KEY_ID??'',draft}}
