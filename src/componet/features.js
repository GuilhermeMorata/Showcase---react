import {AiOutlineProfile,AiOutlineRead
    ,AiOutlineReconciliation,AiOutlineContacts,
    AiOutlineBarChart,AiFillControl} from 'react-icons/ai'; 
    

import'../css/features.css'

function Features(){
    return(
      <div className='feactureicon'>
        <h1 className='featuretitle'>KEY FEATURES</h1>
        <div className='featureshow'>
          <div className='featurecard'>
            <AiOutlineBarChart className='iconfea'/>
            <h2>
            <strong>PLANNING</strong>
              plan the future of your company by predicting with artificial intelligence to build the future.
            </h2>
          </div>
          <div className='featurecard'>
            <AiOutlineRead className='iconfea'/>
            <h2>
            <strong>CASH BOOK</strong>
              cash register will allow you to control your cash inflows and outflows
            </h2>
          </div>
          <div className='featurecard'>
            <AiOutlineProfile className='iconfea'/>
            <h2>
            <strong>PRODUCTS</strong>
              with a product registration understand and predict changes in your company
            </h2>
          </div>
          <div className='featurecard'>
            <AiOutlineReconciliation className='iconfea'/>
            <h2>
            <strong>EMPLOYEE</strong>
              with organization of employee files you can organize and plan the growth of your company.  
            </h2>
          </div>
          <div className='featurecard'>
            <AiFillControl className='iconfea'/>
            <h2>
            <strong>CUSTOMIZE</strong>
              customize the tools for your company, having a better fit for your company
            </h2>
          </div>
          <div className='featurecard'>
            <AiOutlineContacts className='iconfea'/>
            <h2>
            <strong>SCHEDULE</strong>
            organize your dates and events, never missing dates and information.
            </h2>
          </div>
        </div>
            
      </div>
    )
}

export default Features