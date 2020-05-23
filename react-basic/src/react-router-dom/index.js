import React, { Component } from 'react';

import './index.css';
// import styles from './style.js';

import {
    // BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
    NavLink,
    withRouter
} from 'react-router-dom';

// import MyLink from './index-styled-components';

class FoodList extends Component {
  render() {
    let { match } = this.props;
    return (
      <div>
         <div>foodlist - { match.params.id }</div>
         <button onClick={this.gotoFoodMenu.bind(this)}>foodmenu</button>
      </div>
    )
  }

  gotoFoodMenu() {
    this.props.history.push('/food/foodmenu', { name: 'xinya' });
  }
}


const FoodMenu = (props) => {
  console.log(props.location.state.name);
  return (
  <div>foodmenu - { props.location.state.name }</div>
  )
}

const Food = ({match}) => {
  return (
    <div>
      <Link to={`${match.path}/foodlist/3`}>foodlist</Link> &nbsp;
      <Link to={`${match.path}/foodmenu?id=6`}>foodmenu</Link>
      <Switch>
        <Redirect exact from={`${match.path}`} to={`${match.path}/foodlist/0`}></Redirect>
        <Route path={`${match.path}/foodlist/:id`} component={FoodList} />
        <Route path={`${match.path}/foodmenu`} component={FoodMenu} />
      </Switch>
    </div>
  )
}

const Wiki = () => {
  return (
    <div>
      <h1>header</h1>
      <Route 
        path="/wiki/wikilist" 

        children={() => {
            return <div>wikilist-children</div>
          }
        }

        // render={() => {
        //   return <div>wikilist-render</div>
        // }}

      />
    </div>
  )
}

const Profile = () => (
  <div>profile</div>
)

const Page404 = () => (
  <div>page not found.</div>
)

class Home extends Component {
  render() {
    return (
        <div>
          <ul>
             {/* <MyLink to="/food" activeClassName="active"></MyLink> */}
             <CustomNavLink to="/food">food</CustomNavLink>
             <CustomNavLink to="/wiki">wiki</CustomNavLink>
             <CustomNavLink to="/profile">profile</CustomNavLink>
          </ul>
          <Switch>
             <Redirect from="/" exact to="/food" />
             <Route path="/food" component={Food} />
             <Route path="/wiki" component={Wiki} />
             <Route path="/profile" component={Profile} />
             <Route component={Page404} />
          </Switch>
        </div>
    )
  }
}

// const CustomNavLink = ({to, children}) => {
//   return (
//     <Route
//       children={({match, location, history}) => {
//         return (
//            <li>
//              {/* <NavLink to={to} activeClassName="active">
//                {
//                  location.pathname !== to ? children : '>' + children
//                }
//              </NavLink> */}
//              {
//                location.pathname !== to ? children : '>' + children
//              }
//            </li>
//         )
//       }}
//     />
//   )
// }


// class CustomNavLink extends Component {
//   render() {
//     return (
//       <Route
//         children={({match, location, history}) => {
//           return (
//              <li onClick={this.goto.bind(this, history, this.props.to)}>
//                {/* <NavLink to={to} activeClassName="active">
//                  {
//                    location.pathname !== to ? children : '>' + children
//                  }
//                </NavLink> */}
//                {
//                  location.pathname !== this.props.to ? this.props.children : '>' + this.props.children
//                }
//              </li>
//           )
//         }}
//       />
//     )
//   }

//   goto(history, to) {
//     history.push(to);
//   }
// }


const CustomNavLink = withRouter(class EnhenceCustomNavLink extends Component {
   render() {
     return (
       <li onClick={this.goto.bind(this)}>
         { 
           this.props.location.pathname === this.props.to ? '>' + this.props.children : this.props.children
         }
       </li>
     )
   }

   goto() {
     this.props.history.push(this.props.to);
   }

})

// const EnhenceCustomNavLink = withRouter(CustomNavLink);


export default Home;



