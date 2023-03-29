import React, { Component } from 'react'
import "../Components/Menu.css"
import SubMenu from './SubMenu';
import pic1 from "../images/coffee.png"

export default class Menu extends Component {
    state={Posts:[
      {title:"Hot Coffee",description:"Cool"},
      {title:"Raw Coffee",description:"cool"},
      {title:"Black Coffee",description:"cool"},
      {title:"Super Coffee",description:"cool"},
    ]}
  render() {
    return (
      <section id='menu'>
        <div className='innerMenu'>
        <h1>Our Special Menu</h1>
        <div className=''>
        <SubMenu img={pic1} title={this.state.Posts[0].title} description={this.state.Posts[0].description} price="Rs.150" />
        <SubMenu img={pic1} title={this.state.Posts[1].title} description={this.state.Posts[1].description} price="Rs.100" />
        <SubMenu img={pic1} title={this.state.Posts[2].title} description={this.state.Posts[2].description} price="Rs.150" />
        <SubMenu img={pic1} title={this.state.Posts[3].title} description={this.state.Posts[3].description} price="Rs.170" />
        </div>
        </div>
      </section>
    )
  }
}
