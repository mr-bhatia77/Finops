import {SET_PAGE_STRUCTURE, UPDATE_PAGE_STRUCTURE , FREEZE_TEMPLATE} from './takeStepsTypes';

export const setPageStructure = (pageStructure) =>{
    return {
        type:SET_PAGE_STRUCTURE,
        pageStructure:pageStructure
    }
}

export const freezeTemplate = () =>{
    return {
        type:FREEZE_TEMPLATE,
    }
}
export const updatePageStructure = (lineItemId,diffValue,fieldName,totalIndex) =>{
    return {
        type:UPDATE_PAGE_STRUCTURE,
        lineItemId:lineItemId,
        diffValue:diffValue,
        fieldName:fieldName,
        totalIndex:totalIndex

    }
}