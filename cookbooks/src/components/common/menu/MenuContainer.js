import React, { Component } from 'react';
import { connect } from 'react-redux';
import randomString from 'random-string';
import { Map } from 'immutable';

import {
  MenuList,
  MenuListNav,
  MenuListNavItem,
  MenuListContent
} from './styledComponent.js';

import wrapperAnimate from 'components/highorder/wrapperAnimate.js';

import BScroll from 'better-scroll';

import { withRouter } from 'react-router-dom';

const getNavList = (state) => {
  if (state.getIn(['menu', 'from']) === 'category') {
    return state.getIn(['cookbook', 'categories']) || Map({})
  } else {
    return state.getIn(['cookbook', 'material']) || Map({})
  }
}

const mapState = (state) => {
  return {
    navList: getNavList(state)
  }
}

class MenuCategory extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      navContent: []
    }
    this.handleNavClick = this.handleNavClick.bind(this);
  }
  render() {
    return (
      <MenuList>
        <div ref={el => this.navListScroll = el}>
          <MenuListNav>
            {
              this.props.navList.keySeq().map((value, index) => {
                return (
                  <MenuListNavItem
                    onTouchStart={(e) => this.handleNavClick(value, index, e)}
                    active={this.state.currentIndex === index}
                    key={index}><span>{value}</span>
                  </MenuListNavItem>
                )
              })
            }
          </MenuListNav>
        </div>
        <MenuListContent ref={el => this.navContentScroll = el}>
          <div>
            {
              this.state.navContent && this.state.navContent.map((v, i) => {
                return <div key={randomString()} onClick={() => this.props.history.push('/list')}>{typeof (v) !== 'string' ? v.get('title') : v}</div>
              })
            }
          </div>
        </MenuListContent>
      </MenuList>
    )
  }

  componentDidMount() {
    this.navlistscroll = new BScroll(this.navListScroll, { click: true });
    this.navcontentscroll = new BScroll(this.navContentScroll, { click: true });
  }

  //当props发生变化的时候触发
  componentWillReceiveProps(nextProps) {
    this.setState({
      navContent: nextProps.navList && nextProps.navList.first()
    }, () => {
      this.navcontentscroll.refresh();
    })
  }

  handleNavClick(v, i, e) {
    this.setState({
      currentIndex: i,  //当前高亮
      navContent: this.filterNavList(v)  //显示菜单内容
    }, () => {
      this.navcontentscroll.refresh();
    })

    //边界滑动
    this.getCriticalPoint(e);
  }

  getCriticalPoint(e) {
    let clientY = e.touches[0].clientY;
    let isReachTopPoint = clientY - 108 < 90;
    let isReachBottomPoint = clientY - 108 - (window.innerHeight - 158) > -90;
    if (isReachTopPoint) {
      this.navlistscroll.scrollBy(0, window.innerHeight / 2, 100);
      this.navlistscroll.refresh();
    }
    if (isReachBottomPoint) {
      this.navlistscroll.scrollBy(0, -window.innerHeight / 2, 100);
      this.navlistscroll.refresh();
    }
  }

  filterNavList(key) {
    return this.props.navList.find((v, k) => {
      return k === key
    })
  }

}

export default withRouter(connect(mapState)(wrapperAnimate(MenuCategory)));
