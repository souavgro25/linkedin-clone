import React from 'react'
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import NewsArticle from "./NewsArticle";


function Widgets() {

    return (

        <div className="widget">
            <div className="widget__header">
                <h2>Linkdin News</h2>
                <InfoIcon/>

            </div>
            <NewsArticle heading="saas" subtitle="css preprocessor"/>
            <NewsArticle heading="react js" subtitle="javascript framework"/>
            <NewsArticle heading="material ui" subtitle="google react design framework"/>
            <NewsArticle heading="Es6 javascript" subtitle="modern javascript"/>
            <NewsArticle heading=" javascript" subtitle="programming language javascript"/>
            <NewsArticle heading="redux is so good" subtitle="best state management library"/>
            <NewsArticle heading="linkdin clone" subtitle="linkdin clone with react js "/>
       
            
            {/* {newsArticle("react js","javascript react framework")}
            {newsArticle("material ui","google react design framework")}
            {newsArticle("saas","css preprocessor")}
            {newsArticle("Es6 javascript","modern javascript ")}
            {console.log(newsArticle("saas","saas"))} */}
        </div>
    )
}

export default Widgets;
