import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import  "./NewsArticle.css";
function NewsArticle({heading,subtitle}) {
    return (
        <div className="newsArticle">
            <div className="newsArticle__Left">
               <FiberManualRecordIcon/> 
            </div>
            <div className="newsAticle__Right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>    
    )
}

export default NewsArticle
