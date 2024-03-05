import React from "react";
import './Widgets.scss'
import { FiberManualRecord, Info } from "@mui/icons-material";


const Widgets = () => {

  const newsArticle = (heading: string, subtitle: string) => {
    return (
      < div className="widgets__article" >

        <div className="widgets__articleLeft">
          <FiberManualRecord />
        </div>

        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div >
    )
  }

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>

      {newsArticle('Rihanna\'s performance to the star studded guest list', 'Top news - 9999 readers')}
      {newsArticle('Coronavirus: UK updates', 'Top news - 886 readers')}
      {newsArticle('Bitcoin hits $60K again', 'Top news - 1886 readers')}
      {newsArticle('Elon Musk again promises next-generation Roadster, six years after first hyping it', 'Top news - 286 readers')}
    </div>

  )
};

export default Widgets;
