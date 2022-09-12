import {
    UPDATE_BANNER1_VALUES,
    SET_BANNER1_VALUES,
    UPDATE_BANNER2_VALUES,
    SET_BANNER2_VALUES,
    UPDATE_BANNER3_VALUES,
    SET_BANNER3_VALUES,
    UPDATE_BANNER4_VALUES,
    SET_BANNER4_VALUES,
    UPDATE_BANNER5_VALUES,
    SET_BANNER5_VALUES,
    UPDATE_BANNER6_VALUES,
    SET_BANNER6_VALUES,
} from './majorGiftsTypes';

export const updateBanner1Values = (diffValue,fieldName,totalIndex) => {
    return {
        type:UPDATE_BANNER1_VALUES,
        payload:diffValue,
        fieldName:fieldName,
        totalIndex:totalIndex
    }
}

export const setBanner1Values = (bannerValues) => {
    return {
        type:SET_BANNER1_VALUES,
        bannerValues:bannerValues
    }
}
export const updateBanner2Values = (diffValue,fieldName,totalIndex) => {
    return {
        type:UPDATE_BANNER2_VALUES,
        payload:diffValue,
        fieldName:fieldName,
        totalIndex:totalIndex
    }
}

export const setBanner2Values = (bannerValues) => {
    return {
        type:SET_BANNER2_VALUES,
        bannerValues:bannerValues
    }
}
export const updateBanner3Values = (diffValue,fieldName,totalIndex) => {
    return {
        type:UPDATE_BANNER3_VALUES,
        payload:diffValue,
        fieldName:fieldName,
        totalIndex:totalIndex
    }
}

export const setBanner3Values = (bannerValues) => {
    return {
        type:SET_BANNER3_VALUES,
        bannerValues:bannerValues
    }
}
export const updateBanner4Values = (diffValue,fieldName,totalIndex) => {
    return {
        type:UPDATE_BANNER4_VALUES,
        payload:diffValue,
        fieldName:fieldName,
        totalIndex:totalIndex
    }
}

export const setBanner4Values = (bannerValues) => {
    return {
        type:SET_BANNER4_VALUES,
        bannerValues:bannerValues
    }
}
export const updateBanner5Values = (diffValue,fieldName,totalIndex) => {
    return {
        type:UPDATE_BANNER5_VALUES,
        payload:diffValue,
        fieldName:fieldName,
        totalIndex:totalIndex
    }
}

export const setBanner5Values = (bannerValues) => {
    return {
        type:SET_BANNER5_VALUES,
        bannerValues:bannerValues
    }
}
export const updateBanner6Values = (diffValue,fieldName,totalIndex) => {
    return {
        type:UPDATE_BANNER6_VALUES,
        payload:diffValue,
        fieldName:fieldName,
        totalIndex:totalIndex
    }
}

export const setBanner6Values = (bannerValues) => {
    return {
        type:SET_BANNER6_VALUES,
        bannerValues:bannerValues
    }
}