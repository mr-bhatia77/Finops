import {UPDATE_PAGE} from './applicationTypes';

export const updatePage = (page)=>{
    return {
        type:UPDATE_PAGE,
        page:page
    }
}