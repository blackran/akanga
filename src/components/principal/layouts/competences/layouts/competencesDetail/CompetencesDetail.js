import React from 'react'
import './statics/CompetencesDetail.scss'

function Tech ({ src }) {
  return <div className="Tech">
    <img src={src} alt="" />
  </div>
}

function CompetencesDetail ({ title, detail, techs }) {
  return (
    <div className="CompetencesDetail">
      <h2>{ title }</h2>
      <p>{ detail }</p>
      <h3>Les Techonologie que nous utilisons</h3>
      <div className="list-icons">
        {
          techs?.map(e => {
            return <Tech src={e} />
          })
        }
      </div>
    </div>
  )
}

export default CompetencesDetail
