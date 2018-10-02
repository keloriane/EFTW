import React, { Component } from "react";
import GridContainer from "../../common/grid/GridContainer";
import GridItem from "../../common/grid/GridItem";
import poster from "../../assets/img/event-video@2x.png";
import downArrow from "../../assets/img/down-arrow@2x.png";
import { ProgramText } from "./ProgramText";
import Collapse from '@material-ui/core/Collapse';

export default class Agenda extends Component {
  state = {
    isFirstItemOpen: false,
    isSecondItemOpen: false,
    isThirdItemOpen: false,
  }

  handleClick = (e) => {
    console.log([e.target.id])
    this.setState({[e.target.id]: !this.state[e.target.id]})
  }

  render() {
    const video = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <video
            src={video}
            poster={poster}
            controls="control"
            className="events-video"
          />
        </GridItem>

        <GridItem
          xs={10}
          sm={10}
          md={10}
          style={{
            textAlign: "center"
          }}
        >
          <p className="see-schedule">
            Please see below the ETFWB 2018 schedule. <br /> Check back for
            regular updates.
          </p>
        </GridItem>
        <GridItem xs={12} sm={10} md={10} style={{ textAlign: "center" }}>
          <img className="down-arrow" src={downArrow}  alt="down"/>
        </GridItem>

        <GridItem xs={10} sm={10} md={10} style={{ margin: "8% 0 5% 0" }}>
          <GridContainer justify="space-between" alignItems="center">
            <GridItem xs={12} sm={4} md={4}>
              <GridContainer alignItems="center" style={{height:'500px'}}>
                <GridItem xs={12} sm={12} md={12}>
                  <div
                    style={{
                      height: "80px",
                      width: "100%",
                      backgroundColor: "red"
                    }}
                    onClick={this.handleClick}
                    id="isFirstItemOpen">
                  
                   BLABLA
                  </div>
                  <Collapse in={this.state.isFirstItemOpen} timeout="auto">
                  <div>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero consectetur nihil temporibus error voluptate unde commodi aliquid, totam perferendis quas soluta rem veritatis distinctio ut, magnam ad laborum omnis provident?
                  </div>
                  </Collapse>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <div
                    style={{
                      height: "80px",
                      width: "100%",
                      backgroundColor: "red"
                    }}
                    onClick={this.handleClick}
                    id="isSecondItemOpen">
                    blabla
                  </div>
                  <Collapse in={this.state.isSecondItemOpen} timeout="auto">
                  <div>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero consectetur nihil temporibus error voluptate unde commodi aliquid, totam perferendis quas soluta rem veritatis distinctio ut, magnam ad laborum omnis provident?
                  </div>
                  </Collapse>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <div
                    style={{
                      height: "80px",
                      width: "100%",
                      backgroundColor: "red"
                    }}
                    onClick={this.handleClick}
                    id="isThirdItemOpen">
                  
                    blabla
                  </div>
                  <Collapse in={this.state.isThirdItemOpen} timeout="auto">
                  <div>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero consectetur nihil temporibus error voluptate unde commodi aliquid, totam perferendis quas soluta rem veritatis distinctio ut, magnam ad laborum omnis provident?
                  </div>
                  </Collapse>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={7} md={7}>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "red"
                }}
              >
                <ProgramText />
              </div>
            </GridItem>
          </GridContainer>
        </GridItem>

        
      </GridContainer>
    );
  }
}
