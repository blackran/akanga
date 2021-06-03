import React from 'react'
import undrawprojectteamlc5a from './statics/images/undraw_project_team_lc5a.svg'
import './statics/css/Styles.scss'

function Methode () {
  return (
    <div className="Methode" data-spy="scroll" data-target="#mynav" data-offset="85">
      <section className="section-wrapper" id="news">
        <div className="news">
          <div className="element-title">
            <div className="row">
              <div className="container">
                <div className="wow fadeInDown" style={{ color: 'initial', fontFamily: 'system-ui', textAlign: 'center' }} >
                  <h1 style={{ fontWeight: 500, color: '#051721', fontFamily: 'cursive' }}><div>Notre methodes</div></h1>
                  <div className="progresse"></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="wrapper-news">
              <div className="textAndImage">
                <div>
                  <div className="text-center"
                    style={{ color: '#677a80', fontFamily: 'roboto', padding: 'inherit', fontWeight: 'inherit' }}>
                      Pour nous, le developpment d'une systeme
                    <div>
                        d'information   n'implique pas non seulement les
                        developpeur mais aussi le   proprietaire finale
                        du produit. Il nous accompagne
                        tout au long du developpment, apporte ses
                        remarques et ses preferences sur le produit creer .
                    </div>
                    <div>
                      <div> Nous garentissons un retour rapide de</div>
                        l'avancement du projet en utilisant des outils colaboratif telle
                      <b>figma,storyBook, slack,...</b>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="news-content">
                    <div className="entry-content">
                      <img src={undrawprojectteamlc5a} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Methode
