import React, {Component} from "react";
import GridContainer from "../../common/grid/GridContainer";
import GridItem from "../../common/grid/GridItem";
import poster from "../../assets/img/event-video@2x.png";
import downArrow from "../../assets/img/down-arrow@2x.png";
import {ProgramText} from "./ProgramText";
import Collapse from '@material-ui/core/Collapse';
import { ProgramCardItem } from "../../common/card/ProgramCardItem";

export default class Agenda extends Component {
  state = {
    isFirstItemOpen: false,
    isSecondItemOpen: false,
    isThirdItemOpen: false
  }

  handleClick = (e) => {
    this.setState({
      [e.target.id]: !this.state[e.target.id]
    })
  }

  render() {
    const video = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <video src={video} poster={poster} controls="control" className="events-video"/>
        </GridItem>

        <GridItem
          xs={10}
          sm={10}
          md={10}
          style={{
          textAlign: "center"
        }}>
          <p className="see-schedule">
            Please see below the ETFWB 2018 schedule.
            <br/>
            Check back for regular updates.
          </p>
        </GridItem>
        <GridItem
          xs={12}
          sm={10}
          md={10}
          style={{
          textAlign: "center"
        }}>
          <img className="down-arrow" src={downArrow} alt="down"/>
        </GridItem>

        <GridItem
          xs={10}
          sm={10}
          md={10}
          style={{
          margin: "8% 0 0 0"
        }}>
          <GridContainer justify="space-between">
            <GridItem xs={12} sm={4} md={4}>
              <GridContainer
                alignItems="center"
                style={{
                height: '500px'
              }}>
                <GridItem xs={12} sm={12} md={12}>
                  <div
                    className="collapsible-btn"
                    onClick={this.handleClick}
                    id="isFirstItemOpen">
                    <h4 className="program-date">FIRDAY 26 OCT</h4>
                    <p className="program-subdate">Opening night</p>
                  </div>
                  <Collapse in={this.state.isFirstItemOpen} timeout="auto">
                    <div className="program-card">
                      <GridContainer justify="center">
                      <ProgramCardItem time="18:30" text="Doors Opening - Red carpet" margin="10px 0"/>
                      <ProgramCardItem time="20:30" text="Opening Fashion Show with international fashion designers" margin="5px 0"/>
                      <ProgramCardItem time="" margin="5px 0" text="Musical discovery"/>
                      <ProgramCardItem time="" margin="5px 0" text="Fashion Network"/>
                      <ProgramCardItem time="" margin="5px 0" text="Art Fashion Party"/>
                      <ProgramCardItem time="" margin="5px 0" text="Art Exhibition"/>
                      <ProgramCardItem time="02:00" text="Closing Doors" margin="10px 0"/>
                      </GridContainer>
                    </div>
                  </Collapse>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <div
                    className="collapsible-btn"
                    onClick={this.handleClick}
                    id="isSecondItemOpen">
                    <h4 className="program-date">SATURDAY 27 OCT</h4>
                    <p className="program-subdate">Nocturnal opening</p>
                  </div>
                  <Collapse in={this.state.isSecondItemOpen} timeout="auto">
                  <div className="program-card">
                      <GridContainer justify="center">
                      <ProgramCardItem time="16:00" text="Contest: “Impulsion Young Creators” 2018 - collaboration w/ MAD Brussels" margin="10px 0"/>
                      <ProgramCardItem time="17:00" text="Conference" margin="10px 0"/>
                      <ProgramCardItem time="18:00" text="Catwalk prêt-à-porter" margin="10px 0"/>
                      <ProgramCardItem time="19:00" text="Musical discovery/Dance" margin="5px 0"/>
                      <ProgramCardItem time="" margin="5px 0" text="Fashion Network"/>
                      <ProgramCardItem time="" margin="5px 0" text="Art Exhibition"/>
                      <ProgramCardItem time="20:00" text="Catwalk Gamour & Chic" margin="10px 0"/>
                      <ProgramCardItem time="20:00" text="Fashion Network" margin="5px 0"/>
                      <ProgramCardItem time="" margin="5px 0" text="Art Fashion Party"/>
                      <ProgramCardItem time="02:00" text="Closing Doors" margin="10px 0"/>
                      </GridContainer>
                    </div>
                  </Collapse>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <div
                    className="collapsible-btn"
                    onClick={this.handleClick}
                    id="isThirdItemOpen">
                    <h4 className="program-date">SUNDAY 28 OCT</h4>
                  </div>
                  <Collapse in={this.state.isThirdItemOpen} timeout="auto">
                  <div className="program-card">
                      <GridContainer justify="center">
                      <ProgramCardItem time="15:00" text="Contest: “Impulsion Young Models” 2018" margin="10px 0"/>
                      <ProgramCardItem time="16:00" text="Conference" margin="5px 0"/>
                      <ProgramCardItem time="" margin="5px 0" text="Fashion Network"/>
                      <ProgramCardItem time="" margin="5px 0" text="Art Exhibition"/>
                      <ProgramCardItem time="17:00" text="Catwalk prêt-à-porter" margin="10px 0"/>
                      <ProgramCardItem time="18:00" text="Musical discovery/Dance" margin="10px 0"/>
                      <ProgramCardItem time="" margin="5px 0" text="Fashion Network"/>
                      <ProgramCardItem time="" margin="5px 0" text="Art Exhibition"/>
                      <ProgramCardItem time="19:00" text="Closing Catwalk" margin="5px 0"/>
                      <ProgramCardItem time="" margin="5px 0" text="Fashion Network"/>
                      <ProgramCardItem time="" margin="5px 0" text="Art Exhibition"/>
                      <ProgramCardItem time="02:00" text="Closing Doors" margin="10px 0"/>
                      </GridContainer>
                    </div>
                  </Collapse>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <div className="openings">
                    <h4 className="program-subheaders">Opening times</h4>
                    <p className="program-openings">Friday 26th October — 18:30 to 02:00</p>
                    <p className="program-openings">Saturday 27th October — 16:00 to 02:00</p>
                    <p className="program-openings">Sunday 28th October — 15:00 to 21:00</p>
                  </div>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={7} md={7}>
              <div
                style={{
                height: "100%",
                width: "100%"
              }}>
                <ProgramText/>
              </div>
            </GridItem>
          </GridContainer>
        </GridItem>

      </GridContainer>
    );
  }
}
