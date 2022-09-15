import React, { useEffect } from 'react';
import { budgetStructure, budgetChapterStructure } from '../../constants/constants';
import BudgetSpreadDataTable from '../common/BudgetSpreadDataTable';
import {useDispatch} from 'react-redux';
import { updatePage } from '../../redux/application/applicationActions';

const BudgetSpread = ({isAdmin}) => {

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(updatePage('budgetSpread'))
    },[])
    const [pageStructure, setPageStructure] = React.useState(isAdmin?budgetStructure:budgetChapterStructure);
    return (
        <div style={{ width: '200%', marginLeft: "5%" }}>
            <div style={{ marginLeft: "20%", marginTop: '100px' }}><h1>Budget Spread</h1></div>
            <div>
                {pageStructure?.categoryList?.map((category) => {
                    return <BudgetSpreadDataTable
                        isAdmin={isAdmin}
                        category={category}
                    ></BudgetSpreadDataTable>
                })}
            </div>
        </div>
    )
}

export default BudgetSpread