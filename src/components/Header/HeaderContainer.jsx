import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import * as axios from "axios"; 
import { setAuthUserData } from "../../Redux/auth-reducer";

class HeaderContainer extends Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.1/auth/me", {
        withCredentials: true
    }).then((response) => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            this.props.setAuthUserData(id, email, login);
        }
    });
  }
  render() {
    return <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth}/>;
  }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
