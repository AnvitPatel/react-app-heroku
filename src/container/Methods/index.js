import React, { Component } from "react";
import { Spin, Modal,message } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { QuestionCircleOutlined } from "@ant-design/icons";

import { LayOut, Table, Button, ModalUI } from "components/Form";
import { getMethods, deletMethods } from "redux/methods/actions";
import { getPayments } from "redux/payments/actions";
const { confirm } = Modal;
class Methods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      editData:null,
    };
  }
  async componentDidMount() {
    try {
      await this.props.getMethods();
      await this.props.getMethods();
    } catch (error) {
      console.log(error);
    }
  }
  toggleModal = () => this.setState({ visible: !this.state.visible,editData: null });
  reCall = async () => {
    try {
      this.setState({ visible: !this.state.visible,editData: null });
      await this.props.getMethods();
    } catch (error) {
      console.log(error);
    }
  };
  removeData = (data) => {
    try {
      confirm({
        title: "Delete Record",
        icon: <QuestionCircleOutlined />,
        content: "Are you sure you want to remove this record ?",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        getContainer: () => document.getElementById("menu-form"),
        onOk: () => {
          this.removeCall(data);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  removeCall = async (data) => {
    try {
      const {getPaymentList}=this.props;
      let check = getPaymentList.findIndex((e)=>e.paymentTypeId === data.id);
      if (check === -1) {
        await this.props.deletMethods(data.id);
        await this.props.getMethods();
      }else {
        message.error("simiar data exist in payment,(you can't remove)")
      }
    } catch (error) {
      console.log(error);
    }
  };
  editCall=(a)=>this.setState({editData:a,visible: !this.state.visible});
  render() {
    const { visible ,editData } = this.state;
    const { loading, getMethodsList } = this.props;
    return (
      <Spin size="large" spinning={loading}>
        <LayOut link={"paymenyt"} id="menu-form">
          <div className="main anime">
            <div className="head">
              <h4 className="title">{"Method list"}</h4>
              <div className="btnDiv">
                <Button onClick={this.toggleModal}>{"Add"}</Button>
              </div>
            </div>
            <div className="display">
              <Table data={getMethodsList} deleteCol={this.removeData} editCol={this.editCall} type ={"method"}/>
            </div>
          </div>
        </LayOut>
        {visible && (
          <ModalUI
            toggleModal={this.toggleModal}
            reCall={this.reCall}
            title={"Method"}
            editData={editData}
          />
        )}
      </Spin>
    );
  }
}

const mapStateToProps = (state) => ({
  getMethodsList: state.methods.getMethodsList,
  loading: state.methods.loading,
  getPaymentList: state.payment.getPaymentList,
});
const mapDispatchToProps = (dispatch) => ({
  getMethods: (payload) => dispatch(getMethods(payload)),
  deletMethods: (payload) => dispatch(deletMethods(payload)),
  getPayments: (payload) => dispatch(getPayments(payload)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Methods)
);
