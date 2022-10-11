import axiosInstance from './axiosInstance';

export const modifyStructure = (structure) => {
    const structureCategoryList = JSON.parse(JSON.stringify(structure.categoryList))
    const newStructure = {};
    newStructure.categoryList = [structureCategoryList[0], structureCategoryList[1], structureCategoryList[3], structureCategoryList[4], structureCategoryList[2], structureCategoryList[5]];
    return newStructure
  }
const updateBannerCalls = (pageStructure, bannerList, diffValue, fieldName, totalIndex) => {
    // console.log('in banner call')
    const payloadEvent = [];
    const payloadTotal = [];
    bannerList?.forEach((bannerId) => {
        let bannerIndex = null;
        const bannerData = pageStructure?.categoryList?.find((category, index) => {
            bannerIndex = index;
            if (category.cat_template_id == bannerId)
                return category;
        })
        if (bannerData) {
            // console.log('bannerData')
            let updatedEventTypeDataList = bannerData?.eventTypeDataList?.map((event) => {
                if (event.event_id == fieldName) {
                    event.value = event?.value + diffValue;
                    payloadEvent.push(
                        {
                            cat_id: event.id,
                            catValue: event.value,
                            sub_cat_id: null, subCatValue: null, line_item_id: null, lineItemValue: null
                        })
                }
                else if (event.event_id == totalIndex) {
                    event.value = event?.value + diffValue;
                    payloadTotal.push(
                        {
                            cat_id: event.id,
                            catValue: event.value,
                            sub_cat_id: null, subCatValue: null, line_item_id: null, lineItemValue: null
                        })
                }
                return event;
            })
            bannerData.eventTypeDataList = updatedEventTypeDataList;
            pageStructure?.categoryList?.splice(bannerIndex, 1, bannerData)
            console.log(pageStructure);
        }
    })
    payloadEvent.forEach((event) => {
        axiosInstance.put(`/finops/chapter/UpdateDataValues`, event).then((res) => {
            console.log(res)
        })
    })
    payloadTotal.forEach((total) => {
        axiosInstance.put(`/finops/chapter/UpdateDataValues`, total).then((res) => {
            console.log(res)
        })
    })
    return pageStructure;
}

export const updateTotalValues = (state, lineItemId, diffValue, fieldName, totalIndex) => {
    let pageStructure = JSON.parse(JSON.stringify(state.pageStructure));
    let updatedCategory = {};
    let updatedSubCategory = {};
    let updatedLineItem = {};
    let foundFlag = false;
    let updatedLineItemIndex = null;
    let updatedSubCategoryIndex = null;
    let updatedCategoryIndex = null;
    const eventPayload ={};
    const totalPayload ={};
    pageStructure?.categoryList?.forEach((category, categoryIndex) => {
        category?.subCategoryDataList?.forEach((subCategory, subCategoryIndex) => {
            subCategory?.lineItemDataList?.forEach((lineItem, lineItemIndex) => {
                if (lineItem?.template_line_item_id === lineItemId) {
                    updatedLineItem = lineItem;
                    updatedSubCategory = subCategory;
                    updatedCategory = category;
                    updatedLineItemIndex = lineItemIndex;
                    updatedSubCategoryIndex = subCategoryIndex;
                    updatedCategoryIndex = categoryIndex;
                    foundFlag = true;
                    return;
                }
            })
            if (foundFlag) return;
        })
        if (foundFlag) return;
    })

    // calculate total for lineItem 
    let updatedEventTypeDataList = updatedLineItem?.eventTypeDataList?.map((event) => {
        if (event.event_id == fieldName) {
            event.value = event?.value + diffValue;
            eventPayload.line_item_id = event?.id;
            eventPayload.lineItemValue = event?.value;
        }
        else if (event.event_id == totalIndex) {
            event.value = event?.value + diffValue;
            totalPayload.line_item_id = event?.id;
            totalPayload.lineItemValue = event?.value;
        }
        return event;
    })
    updatedLineItem.eventTypeDataList = updatedEventTypeDataList;
    updatedSubCategory?.lineItemDataList?.splice(updatedLineItemIndex, 1, updatedLineItem)
    // console.log(updatedSubCategory)

    // calculate total for subCategory
    updatedEventTypeDataList = updatedSubCategory?.eventTypeDataList?.map((event) => {
        if (event.event_id == fieldName) {
            event.value = event?.value + diffValue;
            eventPayload.sub_cat_id = event?.id;
            eventPayload.subCatValue = event?.value;
        }
        else if (event.event_id == totalIndex) {
            event.value = event?.value + diffValue;
            totalPayload.sub_cat_id = event?.id;
            totalPayload.subCatValue = event?.value;
        }
        return event;
    })
    updatedSubCategory.eventTypeDataList = updatedEventTypeDataList;
    updatedCategory?.subCategoryDataList?.splice(updatedSubCategoryIndex, 1, updatedSubCategory)
    // console.log(updatedCategory)

    // calculate total for category
    updatedEventTypeDataList = updatedCategory?.eventTypeDataList?.map((event) => {
        if (event.event_id == fieldName) {
            event.value = event?.value + diffValue;
            eventPayload.cat_id = event?.id;
            eventPayload.catValue = event?.value;
        }
        else if (event.event_id == totalIndex) {
            event.value = event?.value + diffValue;
            totalPayload.cat_id = event?.id;
            totalPayload.catValue = event?.value;
        }
        return event;
    })
    updatedCategory.eventTypeDataList = updatedEventTypeDataList;
    pageStructure?.categoryList?.splice(updatedCategoryIndex, 1, updatedCategory)
    // console.log('in Update values')


    //calls for cat/subCat total rollup 
    Promise.all([axiosInstance.put(`/finops/chapter/UpdateDataValues`, eventPayload),axiosInstance.put(`/finops/chapter/UpdateDataValues`, totalPayload)]).then((res)=>{
        console.log(res);
    })

    //update banner and make calls
    const updatedBannerPageStructure = updateBannerCalls(pageStructure, [30,31], diffValue, fieldName, totalIndex)
    return updatedBannerPageStructure;
}