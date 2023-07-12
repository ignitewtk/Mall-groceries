
import React from "react"
import Banner from "./Banner";
import { testPostApi, testGetApi, testGetWebApp} from "../api";


class MainPage extends React.Component {

  constructor(props) {
    super(props)
    this.testApi = this.testApi.bind(this)
  }

  testApi() {
    testGetWebApp().then(response => {
      console.log("WebApp:", response.data)
    })
    testGetApi().then(response =>  {
      console.log("Get API:", response.data)
  }).catch(error => {
      console.log("return product list error:", error)
  })
  }

  render() {
    
    return (
      <div>
        
        <Banner />
        <div> <button onClick={this.testApi}> Test API </button> </div>
        <div> Section 3 </div>
        
        <div> Float Ads </div>
        <div> Navigator </div>
      </div>
    )
  }
}

export default MainPage;
