import {UPDATE_PAGE,UPDATE_CHAPTER,UPDATE_YEAR,UPDATE_NATION} from './applicationTypes';

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

export const updateYear = (year)=>{
    // console.log(chapter)
    return {
        type:UPDATE_YEAR,
        year:year
    }
}

export const updateNation = (nation)=>{
    // console.log(chapter)
    return {
        type:UPDATE_NATION,
        nation:nation
    }
}