export const weekdays=['MON','TUE','WED','THU','FRI','SAT','SUN'] as const;
export type CalendarCell={index:number;week:number;weekday:string;serviceDay:number|null;isSunday:boolean;isActive:boolean;label:string};
export function buildMenuCycle():CalendarCell[]{let service=0;return Array.from({length:35},(_,i)=>{const weekday=weekdays[i%7];const isSunday=weekday==='SUN';const active=!isSunday&&service<24;if(active)service++;return{index:i,week:Math.floor(i/7)+1,weekday,serviceDay:active?service:null,isSunday,isActive:active,label:isSunday?'Kitchen Closed':active?`Day ${String(service).padStart(2,'0')}`:'Rest Window'}})}
export function isServiceDay(date:Date){const d=date.getDay();return d!==0}
export function nextServiceDates(start:Date,count:number){const out:Date[]=[];const d=new Date(start);while(out.length<count){if(isServiceDay(d))out.push(new Date(d));d.setDate(d.getDate()+1)}return out}
