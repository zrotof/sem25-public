export interface ReplayMenu{
    id : string,
    title: string,
    playlistId: string,
    isActive : boolean
}

export interface ReplayItem{
    id: string,
    title: string,
    media : string,
    date: string,
    description : string,
    mediaType : string
}

export interface YoutuveVideoItem{
    image : string,
    title : string,
    date : string,
    viewCount : number,
    likeCount : number,
    link : string,
    localized : any,
    duration: string,
    isActive: boolean
}

