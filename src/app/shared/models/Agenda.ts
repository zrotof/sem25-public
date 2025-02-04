import { Network } from "./network";

export interface Event {
    id:number
    coverImage : string,
    title : string,
    date : string,
    hour ?: string,
    eventTypeName?: string,
    videoLink ?: string,
    content ?: string,
    isArticleAssociated ?: boolean,
    hasVideo ?: boolean
}

export interface EventType {
    id : number,
    name : string,
    isActive : boolean
}
