import {UPDATE_BANNER, UPDATE_PAGE_STRUCTURE} from './takeStepsTypes';

export const updateBanner = () =>{
    return {
        type:UPDATE_BANNER
    }
}

export const updatePageStructure = () =>{
    console.log('updated')
    return {
        type:UPDATE_PAGE_STRUCTURE
    }
}