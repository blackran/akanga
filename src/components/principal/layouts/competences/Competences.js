import React, { useState, useEffect } from 'react'
import Block from './layouts/block/Block'
import CompetencesDetail from './layouts/competencesDetail/CompetencesDetail'
import techIcon from './statics/images/icon.jpeg'
import './statics/css/Competences.scss'
import { useSpring, animated } from 'react-spring'


function Competences () {
  const [datas, setDatas] = useState([])
  const [active, setActive] = useState(0)

  const [style, animate] = useSpring(() => ({ transform: 'translateY(100 px)', opacity: 0 }))

  useEffect(() => {
    const data = [
      {
        id: 0,
        title: 'Site et application',
        value: 50,
        detail: {
          title: 'Site vitrine et application web',
          detail: 'Nous sommes dans la divers domaine adapter aux besoins de nos clients',
          techs: [
            techIcon,
            techIcon,
            techIcon
          ]
        }
      },
      {
        id: 1,
        title: 'Application bureau',
        value: 10,
        detail: {
          title: 'Site vitrine et application web',
          detail: 'Nous sommes dans la divers domaine adapter aux besoins de nos clients',
          techs: [
            techIcon
          ]
        }
      },
      {
        id: 2,
        title: 'Application mobile',
        value: 10,
        detail: {
          title: 'Site vitrine et application web',
          detail: 'Nous sommes dans la divers domaine adapter aux besoins de nos clients',
          techs: [
            techIcon,
            techIcon
          ]
        }
      },
      {
        id: 3,
        title: 'Design interface',
        value: 30,
        detail: {
          title: 'Site vitrine et application web',
          detail: 'Nous sommes dans la divers domaine adapter aux besoins de nos clients',
          techs: [
            techIcon,
            techIcon
          ]
        }

      }
    ]
    setDatas(data)
    setActive(data[0].id)
  }, [])

  useEffect(() => {
    animate({ transform: 'translateY(100 px)', opacity: 0 })
    setTimeout(() => {
      animate({ transform: 'translateY(0px)', opacity: 1 })
    }, 1000)
  }, [active, animate])

  const onHover = (id) => {
    console.log(id)
    setActive(id)
  }

  return (
    <div className="Competences">
      <div>
        <h1>Nos compontances</h1>
        <p>Nous sommes dans la divers domaine adapter aux besoins de nos clients</p>
      </div>

      {
            datas?.map(({ title, value, id, detail }) => {
              return <div
                key={id}
                className="CompetencesBlock"
              >
                <Block
                  { ...{ title, value, onHover, id, active }}
                />
                <animated.div style={style} className="CompetencesDetails">
                  {
                    (active === id || window.screen.width < 724) &&
                      <CompetencesDetail
                        { ...{ ...detail }}
                      />
                  }
                </animated.div>
              </div>
            })
      }
    </div>
  )
}

export default Competences
