import React from 'react';
import Header from './../../modules/Header'
import List from   './../../../ux-library/List'
import {sortingByAlphabet} from   './../../../helpers/utils'
import './App.css';

import firstListData from './../../../json-data/first-list-data.json'
import secondListData from './../../../json-data/second-list-data.json'

const jsonData = [
  {title: "A Stay Above The Rest", link: "https://www.astayabovetherest.com/", color: "green"},
  {title: "AB Sea Sales & Rentals Inc.", link: "https://absearesorts.com/", color: "green"},
  {title: "Closing Time Properties", link: "https://www.closingtimerealestate.com", color: "green"},
  {title: "Ryson Real Estate And Vacation Rentals", link: "https://www.galvestontxbeachrental.com/", color: "green"},
  {title: "A Stay Above The Rest", link: "https://www.astayabovetherest.com/", color: "green"},
  {title: "iTrip Austin", link: "https://www.itrip.net/property-management/austin", color: "green"},
  {title: "A Stay Above The Rest", link: "https://www.astayabovetherest.com/", color: "green"},
  {title: "iTrip Galveston", link: "https://www.itrip.net/property-management/galveston", color: "green"},
  {title: "A Stay Above The Rest", link: "https://www.astayabovetherest.com/", color: "green"}
]
export class App extends React.Component {
  sortList = (arr) => {
    console.log(arr)

    // console.log(sortingByAlphabet(arr, 'title'))
  }
  renderContent = (arr) => {
    console.log(11, arr)
    console.log(7, sortingByAlphabet(arr, 'title'))
    // byTitle.sort(function(a,b) {
    //     const x = a.title.toLowerCase();
    //     const y = b.title.toLowerCase();
    //     return x < y ? -1 : x > y ? 1 : 0;
    // });
    
    // console.log('by  Title:');
    // console.log(9, byTitle);

    // arr.map((item) => {
    //   console.log(item)
    //   return (
    //     <div>
    //       <div>{item.title}</div>
    //       <div>{item.link}</div>
    //       <div>{item.color}</div>
    //     </div>
    //   )
    // })

    // const arr2 = sortingByAlphabet(arr, 'title')
    // console.log(1, arr)
    // console.log(2, arr2)
    // return 
  }
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <strong>src/App.js</strong> and save to reload.
        </p>
        <div>
          {/* <List
            firstListData={firstListData}
            secondListData={secondListData}
            // title="List of data first"
          /> */}
        </div>
        {this.renderContent(jsonData)}
      </div>
    );
  }
}
