import React, { Component } from "react";
import { Spin, Modal } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { QuestionCircleOutlined } from "@ant-design/icons";

import { LayOut, Table, Button, ModalUI, Input } from "components/Form";
import { getMethods } from "redux/methods/actions";
import { getPayments, deletePayment } from "redux/payments/actions";
const { confirm } = Modal;
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selectData: [],
      searchVal: "",
    };
  }
  async componentDidMount() {
    try {
      await this.props.getMethods();
      await this.props.getPayments();
    } catch (error) {
      console.log(error);
    }
  }
  componentDidUpdate(prevProps) {
    try {
      const { getMethodsList } = this.props;
      if (getMethodsList !== prevProps.getMethodsList) {
        let data = [{ id: 0, value: "case" }];
        getMethodsList.forEach((e) => {
          data.push({ id: e.id, value: e.name });
        });
        this.setState({ selectData: data });
      }
    } catch (error) {
      console.log(error);
    }
  }
  toggleModal = () => this.setState({ visible: !this.state.visible });
  reCall = async () => {
    try {
      this.setState({ visible: !this.state.visible });
      await this.props.getPayments();
    } catch (reCall) {
      console.log(reCall);
    }
  };
  removeData = (id) => {
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
          this.removeCall(id);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  removeCall = async (id) => {
    try {
      await this.props.deletePayment(id);
      await this.props.getPayments();
    } catch (error) {
      console.log(error);
    }
  };
  handelTotal = (data) => {
    try {
      let total = 0;
      data.forEach((a) => {
        total = total + parseInt(a.amount);
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  };
  searchChange = (val) => this.setState({ searchVal: val.target.value });
  searchData = (data) => {
    try {
      const { searchVal } = this.state;
      if (searchVal && searchVal !== "") {
        let searchData = [];
        let display = [];
        data?.forEach((a) => {
          display.push(a.discription, a.paymentType);
          let array = [];
          display.forEach((e) => {
            if (e && e !== null && e.toString().length > 0) array.push(e);
          });
          let matches = array.filter((s) =>
            s
              .toString()
              .toLowerCase()
              .includes(searchVal.toString().toLowerCase())
          );
          display = [];
          if (matches && matches.length > 0) searchData.push(a);
        });
        return searchData;
      } else {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { visible, searchVal } = this.state;
    const { getPaymentList, loading } = this.props;
    let paymentData =
      searchVal !== "" ? this.searchData(getPaymentList) : getPaymentList;
    let totalAmount = this.handelTotal(paymentData);

    // console.log("total",totalAmount);
    return (
      <Spin size="large" spinning={loading}>
        <LayOut link={"paymenyt"} id="menu-form">
          <div className="main anime">
            <div className="head">
              <h4 className="title">{"Paymenyt List"}</h4>
              <div className="btnDiv">
                <Input
                  placeholder={"Search..."}
                  value={searchVal}
                  onChange={this.searchChange}
                />
                <Button onClick={this.toggleModal}>{"Add"}</Button>
              </div>
            </div>
            <div className="display">
              <Table
                type={"payment"}
                deleteCol={this.removeData}
                data={paymentData}
                totalAmount={totalAmount}
              />
            </div>
          </div>
        </LayOut>
        {visible && (
          <ModalUI
            toggleModal={this.toggleModal}
            reCall={this.reCall}
            title={"Payment"}
            selectData={this.state.selectData}
          />
        )}
      </Spin>
    );
  }
}
const mapStateToProps = (state) => ({
  getMethodsList: state.methods.getMethodsList,
  getPaymentList: state.payment.getPaymentList,
  loading: state.payment.loading,
});
const mapDispatchToProps = (dispatch) => ({
  getMethods: (payload) => dispatch(getMethods(payload)),
  getPayments: (payload) => dispatch(getPayments(payload)),
  deletePayment: (payload) => dispatch(deletePayment(payload)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Demo));
// export default Demo;
