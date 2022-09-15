import {UPDATE_PAGE,UPDATE_CHAPTER} from './applicationTypes';

export const updatePage = (page)=>{
    return {
        type:UPDATE_PAGE,
        page:page
    }
}

export const updateChapter = (chapter)=>{
    console.log(chapter)
    return {
        type:UPDATE_CHAPTER,
        chapter:chapter
    }
}