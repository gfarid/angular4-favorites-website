export class ActionLog {
    name:string;
    url:string;
    id:string;
    date:string;
    actiontype:ActionLogType
}


export enum ActionLogType {
    webSiteAdded = 'webite was added' , webSiteEdited ='webite was edited' ,webSiteRemoved ='webite was removed'
}