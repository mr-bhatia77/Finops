import React from 'react';
import DataGridTable from '../common/DataGridTable';

const MajorGiftsBanner = ({isAdmin,category,columns,handleGetRowClassName,getCategoryRow,getClassName,totalIndex}) => {
  return (
    <div className={`categoryBox flex mt-20 ${getClassName(category?.categoryName)}`} >
                <div className='categoryCode noRightBorder'></div>
                <div className='categoryCodeItem noLeftBorder flex' >{((isAdmin && Number(category?.cat_id) <= 17) || (!isAdmin && Number(category?.cat_template_id) <= 17)) ? 'Total' : ''} {category?.categoryName}</div>
                <div style={{ width: '900px' }}>
                    <DataGridTable
                        page='majorGifts1'
                        tableColumns={columns.slice(2, columns.length)}
                        initialRows={getCategoryRow()}
                        handleGetRowClassName={handleGetRowClassName}
                        headerHeight={0}
                        isAdmin={isAdmin}
                        isHeaderTable={true}
                        rowHeight={80}
                        totalIndex={totalIndex}
                    >
                    </DataGridTable>
                </div>
            </div>
  )
}

export default MajorGiftsBanner