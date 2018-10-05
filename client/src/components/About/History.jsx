import React, {Component} from 'react'
import downArrow from '../../assets/svg/down-arrow.svg';
import cerina from '../../assets/img/mobile-cerina.jpg';
import poster from '../../assets/img/video_thumbnail@2x.png'

export default class History extends Component {
  render() {
    // const video = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
    return (
      <div className="main">

        <div className="video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/I1rR_p2EzyY?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>

        <div className="full-width centered">
          <img className="down-arrow" src={downArrow} alt="down arrow"/>
        </div>

        <h2 className="about-titles full-width centered">about etfwb</h2>

        <div className="text full-width centered">
          <p>Since seven years, the Ethno Tendance Fashion Week Brussels (ETFWB) is the
            event that reveals the trends of the world. An artistic weekend exchanges in the
            beating heart of Europe revolving around the culture of one and the other. Bold,
            inclusive and empowering, we open our doors to diversity and authenticity.</p>
        </div>

        <div className="picture"></div>

        <div className="text full-width centered">
          <p>We created a platform where stylists and artists affirm their creations. This
            Fashion Week is a great opportunity to highlight their abilities, imagination
            and gifts, regardless of the country of origin or the social origins.</p>
        </div>

        <div className="picture"></div>

        <h2 className="about-titles full-width centered">THE CATWALKS</h2>

        <div className="text full-width centered">
          <p>Very appreciated by the visitors and the professionals, they show the full
            extent of the offer of the creators. They combine haute couture with designer or
            conventional prêt-à-porter, while drawing on the dynamism of urban and
            cosmopolitan culture: a successful blend, a recognizable signature and
            appreciated by fashion week.</p>
        </div>

        <section className="double-pictures">
          <div></div>
          <div></div>
        </section>

        <h2 className="about-titles full-width centered">ETFWB AWARDS</h2>

        <div className="text-bold left full-width centered">
          <p>The “Impulsion Young Creators” prize</p>
        </div>

        <div className="text full-width centered">
          <p>It is awarded each year, by a jury of professionals, to a creator who
            develops an innovative creative approach.</p>
        </div>

        <div className="text-bold right full-width centered">
          <p>The “Impulsion Models” prize</p>
        </div>

        <div className="text right full-width centered">
          <p>This is a unique platform for unconfirmed mannequins. The selected mannequin
            is offered by ETFWB, a professional coaching, the cover of an international
            magazine and the opportunity to parade during a fashion week.</p>
        </div>

        <div className="picture"></div>

        <div className="text full-width centered call-to-action">
          <p>Discover our virtual gallery.
            <br/>
            You will find the highlights of our previous editions.</p>
        </div>

        <div className="text full-width clickhere">
          <p>Click on the link below:</p>
        </div>

        <div className="full-width">
          <button id="button-highlights" type="button">highlights</button>
        </div>

        <div className="thefounder">

          <div className="cerina-text">
            <h2 className="about-titles full-width left">Kind words from our founder</h2>

            <p className="message">"Brussels, orphan of a Fashion Week, like other major
              capitals of the world, had to have its event dedicated to international fashion.
              <br/>
              <br/>
              In 2012, we launched this unique and innovative project, we took up the
              challenge!"</p>
            <div>
              <h3 className="Cerina-De-Rosen full-width left">Cerina De Rosen</h3>
              <p className="FOUNDER-ARTISTIC-DIRECTOR-OF-ETFWB full-width">FOUNDER & ARTISTIC DIRECTOR OF ETFWB</p>
            </div>
          </div>

          <div className="container-cerina">
            <div className="cerina">
              <img
                src={cerina}
                alt="Cerina De Rosen. Founder and artistic director of ETFWB."/>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
