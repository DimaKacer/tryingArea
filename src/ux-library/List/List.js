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

    const newCompareArr1 = firstListDataState.filter(item => !secondListDataState.includes(item))
    const newCompareArr2 = secondListDataState.filter(item => !firstListDataState.includes(item))

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
    return (<li key={index} className="left-text">{itemData}</li>)
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
    return this.renderList(firstListDataState.sort())
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
            <ul className="coll-3">{this.renderUnicElem('a')}</ul>
            <ul className="coll-3">{this.renderUnicElem('b')}</ul>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}
