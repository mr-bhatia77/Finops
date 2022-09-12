import React from 'react';
import DataGridTable from '../common/DataGridTable';
import { useSelector } from 'react-redux';
import {
  randomId,
} from '@mui/x-data-grid-generator';

const MajorGiftsBanner = ({ isAdmin, category, columns, handleGetRowClassName, getClassName, totalIndex }) => {
  const bannerState = useSelector(state => state);

  const getCategoryRow = () => {
    const newTableRows = [];
    switch (category.cat_template_id) {
      case 18:
        newTableRows.push({
          id: randomId(),
          ...bannerState.banner1Values
        })
        break;
      case 19:
        newTableRows.push({
          id: randomId(),
          ...bannerState.banner2Values
        })
        break;
      case 20:
        newTableRows.push({
          id: randomId(),
          ...bannerState.banner3Values
        })
        break;
      case 21:
        newTableRows.push({
          id: randomId(),
          ...bannerState.banner4Values
        })
        break;
      case 22:
        newTableRows.push({
          id: randomId(),
          ...bannerState.banner5Values
        })
        break;
      case 23:
        newTableRows.push({
          id: randomId(),
          ...bannerState.banner6Values
        })
    }
    return newTableRows;
  }
  // console.log(bannerState);
  // console.log(category);
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