import React from 'react';
import DataGridProTable from './DataGridProTable';
import { tableColumns21, initialRows4 } from '../../constants/constants';

const TeamChallengeDataTable = ({ pageElement }) => {

    let topScroll = React.createRef();
    let contentScroll = React.createRef();
    let _preventEvent = false;
    let contentLastScrollTop = 0;
    let contentLastScrollLeft = 0;


    const onTopScroll = e => {
        if (_preventEvent) {
          _preventEvent = false;
          return;
        }
    
        console.log("onTopScroll", e.target.scrollTop, e.target.scrollLeft);
    
        _preventEvent = true;
        contentScroll.current.scrollLeft = e.target.scrollLeft;
      };

      const onContentScroll = e => {
        if (_preventEvent) {
          _preventEvent = false;
          return;
        }
        console.log("onContentScroll", e.target.scrollTop, e.target.scrollLeft);
    
        if (e.target.scrollTop !== contentLastScrollTop) {
          _preventEvent = true;
          contentLastScrollTop = e.target.scrollTop;
        }
        if (e.target.scrollLeft !== contentLastScrollLeft) {
          _preventEvent = true;
          topScroll.current.scrollLeft = e.target.scrollLeft;
          contentLastScrollLeft = e.target.scrollLeft;
        }
      };
    

    const handleGetRowClassName = (params) => {
        if (['Celebration', "Participant Premiums/Incentives"].includes(params.row.category))
            return 'backgroundYellowGreen'
    }

    const getRows = (category) => {
        const newTableRows = [];
        category.subCategoryList.map((subCategoryItem) => {
            if (subCategoryItem?.sub_cat_id && subCategoryItem?.subCategoryName && subCategoryItem?.subCategoryName !== 'dummy') {
                newTableRows.push({
                    id: subCategoryItem?.sub_cat_id,
                    subCategory: subCategoryItem?.subCategoryName
                })
            }
            let newLineItems = [...subCategoryItem?.lineItems]
            newLineItems = newLineItems?.map((lineItem) => {

                return { ...lineItem, id: lineItem.line_item_id, name: lineItem.lineItemName }
            })
            newTableRows.push(...newLineItems)
        })
        // console.log(newTableRows)
        return newTableRows;
    }

    // const getColumns = (category) => {
    //     let count = 0;
    //     let newColumns = tableColumns21;
    //     category.subCategoryList.map((subCategoryItem) => {
    //         if (subCategoryItem?.sub_cat_id && subCategoryItem?.subCategoryName && subCategoryItem?.subCategoryName !== 'dummy') {
    //             count++;
    //         }
    //     })
    //     if (count > 0) {
    //         newColumns = [{ field: 'subCategory', headerName: '', width: '300', editable: true, align: 'center', headerAlign: 'center', sortable: false }, ...newColumns];
    //     }
    //     console.log(newColumns);
    //     return newColumns;
    // }
    console.log(pageElement)
    return (
        <div>
            <div className='fixedHeader'>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '5%' }}></div>
                    <div style={{ width: '100%' }}>
                        <DataGridProTable
                            tableColumns={tableColumns21}
                            initialRows={initialRows4}
                            handleGetRowClassName={handleGetRowClassName}
                            headerHeight={50}
                            ref={topScroll}
                            onScroll={onTopScroll}
                        >
                        </DataGridProTable>
                    </div>
                </div>
            </div>
            <div className='content'>
                {pageElement.categoryList.map((category, index) => {
                    if (index > 0) {
                        return (<div className='bg_green' style={{ display: 'flex' }}>
                            <div style={{ border: '2px solid black ', width: '5%' }}><p className='rotate'>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                            <div style={{ width: '100%' }}>
                                <DataGridProTable
                                    tableColumns={tableColumns21}
                                    initialRows={getRows(category)}
                                    handleGetRowClassName={handleGetRowClassName}
                                    headerHeight={0}
                                    ref={contentScroll}
                                    onScroll={onContentScroll}
                                >
                                </DataGridProTable>
                            </div>
                        </div>)
                    }
                })}
                {pageElement.categoryList.map((category, index) => {
                    if (index > 0) {
                        return (<div className='bg_green' style={{ display: 'flex' }}>
                            <div style={{ border: '2px solid black ', width: '5%' }}><p className='rotate'>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                            <div style={{ width: '100%' }}>
                                <DataGridProTable
                                    tableColumns={tableColumns21}
                                    initialRows={getRows(category)}
                                    handleGetRowClassName={handleGetRowClassName}
                                    headerHeight={0}
                                >
                                </DataGridProTable>
                            </div>
                        </div>)
                    }
                })}
                {pageElement.categoryList.map((category, index) => {
                    if (index > 0) {
                        return (<div className='bg_green' style={{ display: 'flex' }}>
                            <div style={{ border: '2px solid black ', width: '5%' }}><p className='rotate'>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                            <div style={{ width: '100%' , overflow: 'hidden'}}>
                                <DataGridProTable
                                    tableColumns={tableColumns21}
                                    initialRows={getRows(category)}
                                    handleGetRowClassName={handleGetRowClassName}
                                    headerHeight={0}

                                >
                                </DataGridProTable>
                            </div>
                        </div>)
                    }
                })}
            </div>
            <div style={{height:'50px'}}></div>

        </div>
    )



}

export default TeamChallengeDataTable