
export interface ArticleCategory {
    id: string,
    name: string,
    desctiption: string,
    isActive: boolean
}

export interface CategoryClickEvent{
    id : string,
    index: number
}

export interface Article{
    id : number,
    title : string,
    coverImage : string,
    date : string,
    hour: string,
    description : string,
    content: string,
    hasVideo: boolean,
    videoLink ?: string
}

export enum MediaType{
    
}
