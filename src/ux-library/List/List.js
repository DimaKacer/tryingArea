import React from 'react'
import isEqual from 'lodash/isEqual'
import difference from 'lodash/difference'
import './List.css'

export class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstListDataState: [],
      secondListDataState: [],
      compareArr: []
    }
  }
  renderUnicElem = (i) => {
    const {
      firstListDataState,
      secondListDataState,
      compareArr1,
      compareArr2
    } = this.state
    // const {
    //   firstListData,
    //   secondListData,
    // } = this.props


    const excludeList = [
    // Changed next PMC_names
    'itrip upper florida keys', // currecntl located in json our application
    '61 itrip upper florida keys', // This pmc_Name get from DB (dev environment) 

    'a b sea sales and rentals', // currecntl located in json our application
    'ab sea sales and rentals', // This pmc_Name get from DB (dev environment) 

    'iTrip Destin - Traveler', // currecntl located in json our application
    'destin - traveler (fl)', // This pmc_Name get from DB (dev environment) 

    'iTrip Destin - Explorer', // currecntl located in json our application
    'destin - explorer (fl)', // This pmc_Name get from DB (dev environment) 

    'coastal getaways', // currecntl located in json our application
    'coastal getaways of south carolina', // This pmc_Name get from DB (dev environment) 

    // Data form json on app
    // these list of properties does not have pages with result searching on xplorie.com due the reason - these name of pmc's does not exist in DB
    'alabama vacation rentals & sales', // TODO: Not search results
    'amazing views cabin rentals', // TODO: Not search results
    'beach tyme properties', // TODO: Not search results
    'bliss beach rentals 30a', // TODO: I faced with case that, we already have in to JSON similar Property with name 'bliss beach rentals', but from the Desin, Florida - which works well, need to investigate which options for this name of this property for searching should be (because it Property from 30A, Florida). 
    'boomerang vacation rentals', // TODO: Not search results
    'breakers of fort walton beach', // TODO: Not search results
    'closing time properties', // TODO: Not search results
    'crye-leike destin getaways', // TODO: Not search results
    'emerald coast vacation rentals', // TODO: Not search results
    'emerald coast vacation rentals30a', // TODO: Not search results
    'five star beach properties', // TODO: In JSON exist similar Properties but from different places (I mean 30A and Desin) and result page on the xplorie.com the same. Is it will be correct or each search result page should be diffrent
    'five star copper-breckenridge', // TODO: Not search results
    'five star downtown breckenridge', // TODO: Not search results
    'flip flop vacations', // TODO: Not search results

    'forever vacation rentals 30a', // TODO: Not search results
    'forever vacation rentals explorer', // TODO: Not search results
    'forever vacation rentals traveler', // TODO: Not search results

    'hearthside cabin rentals explorer', // TODO: Not search results
    'holiday surf & racquet club', // TODO: Not search results

    'itrip austin', // TODO: this property with search results located only on prod... on stage does not yet

    'hearthside cabin rentals traveler', // TODO: Not search results
    'itrip bonita springs', // TODO: Not search results
    'itrip delaware shores', // TODO: Not search results
    'itrip destin - explorer', // TODO: Not search results
    'itrip destin - traveler', // TODO: Not search results
    'itrip galveston', // TODO: Not search results
    'itrip newport beach', // TODO: Not search results
    'itrip ocean city', // TODO: Not search results
    'itrip pcb - explorer', // TODO: Not search results
    'itrip pcb - traveler', // TODO: Not search results
    'kendall & potter', // TODO: Not search results

    'long & foster vacation rentals annapolis md',
    'long & foster vacation rentals bethany beach de',
    'long & foster vacation rentals ocean city md',
    'long & foster vacation rentals rehoboth de', // TODO: Not search results (but a part of this pmcName for property is matching)
    ]

    // const newCompareArr1 = firstListDataState.filter(item => !secondListDataState.includes(item))
    // const newCompareArr2 = secondListDataState.filter(item => !firstListDataState.includes(item))

    const newCompareArr1 = firstListDataState.filter(item => !secondListDataState.includes(item)).filter(item => !excludeList.includes(item))
    const newCompareArr2 = secondListDataState.filter(item => !firstListDataState.includes(item)).filter(item => !excludeList.includes(item))

    if (!isEqual(compareArr1, newCompareArr1)) {
      this.setState({
        compareArr1: newCompareArr1
      })
    }

    if (!isEqual(compareArr2, newCompareArr2)) {
      this.setState({
        compareArr2: newCompareArr2
      })
    }
    if (i === 'a') {
      return this.renderList(newCompareArr1.sort())
    }

    if (i === 'b') {
      return this.renderList(newCompareArr2.sort())
    }
  }
  getItemContent = (itemData, index) => {
    console.log(itemData)
    const devLink = `https://localhost:8085/search/pmcName=${itemData}/Any/Any/Any`
    const prodLink = `https://www.xplorie.com/search/pmcName=${itemData}/Any/Any/Any`
    const stageLink = `http://dev.xplorie.com/search/pmcName=${itemData}/Any/Any/Any`

    const compareDevLink = <a href={devLink} className="xpl-link-view" target="_blank">{itemData}</a>
    const compareProdLink = <a href={prodLink} className="xpl-link-view" target="_blank">{itemData}</a>
    const compareStageLink = <a href={stageLink} className="xpl-link-view" target="_blank">{itemData}</a>

    return (
      <li key={index} style={{ "marginBottom": "20px" }}>
        <ul>
          <li className="left-text">Dev - {compareDevLink}</li>
          <li className="left-text">Prod - {compareProdLink}</li>
          <li className="left-text">Stage - {compareStageLink}</li>
        </ul>
      </li>
    )

    // return (<li key={index} className="left-text">{itemData}</li>)
  }
  getFirsList = () => {
    const {firstListData} = this.props
    const {firstListDataState} = this.state
    const firstListDataToLowerCase = firstListData.map(itemData => itemData.toLowerCase())

    if (!isEqual(firstListDataState, firstListDataToLowerCase)) {
      this.setState({
        firstListDataState: firstListDataToLowerCase
      })
    }

    return this.renderList(this.state.firstListDataState.sort())
  }
  getRightArr = (arr) => {
    const newArr = []
    arr.map(itemData => {
      if (itemData.partnerName !== undefined ) {
        newArr.push(itemData.partnerName.toLowerCase())
      }
    })
    return newArr
  }
  getSecondList = () => {
    const {secondListData} = this.props
    const {secondListDataState} = this.state
    const newSecondListData = this.getRightArr(secondListData)
    const newSecondListDataToLowerCase = newSecondListData.map(itemData => itemData.toLowerCase())

    if (!isEqual(secondListDataState, newSecondListDataToLowerCase)) {
      this.setState({
        secondListDataState: newSecondListDataToLowerCase
      })
    }
    return this.renderList(secondListDataState.sort())
  }
  renderList = (list) => {
    return list.map((itemData, index) => this.getItemContent(itemData.toLowerCase(), index))
  }
  render() {
    const {
      firstListData,
      secondListData,
    } = this.props
    const {
      compareArr
    } = this.state
    return (
      <React.Fragment>
        {firstListData && (
          <React.Fragment>
            <p>List of data</p>
            <ul className="coll-3">{this.getFirsList()}</ul>
          </React.Fragment>
        )}
        {secondListData && (
          <React.Fragment>
            <ul className="coll-3">{this.getSecondList()}</ul>
          </React.Fragment>
        )}
        {compareArr && (
          <React.Fragment>
            <ul className="coll-3  numiric">{this.renderUnicElem('a')}</ul>
            <ul className="coll-3 numiric">{this.renderUnicElem('b')}</ul>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}
