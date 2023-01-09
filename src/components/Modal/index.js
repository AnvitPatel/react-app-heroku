import React, { Component } from "react";
import { Modal, message } from "antd";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { MContainer } from "./style";
import { Label, Select, Input, Button } from "components/Form";
import { addMethod ,updateMethods } from "redux/methods/actions";
import { addPayment } from "redux/payments/actions";
const ValidationSchema = Yup.object().shape({
  method: Yup.string().trim().nullable().required(" "),
  name: Yup.string().trim().nullable().required(" "),
});
const PaymentSchema = Yup.object().shape({
  payType: Yup.string().trim().nullable().required(" "),
  text: Yup.string().trim().nullable().required(" "),
});
class ModalUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: false,
      amount: 0,
      amountErroe: false,
      methodInit: {
        id: 0,
        method: "",
        methodid: 0,
        name: "",
      },
      payInit: {
        id: 0,
        payType: "",
        payTypeID: 0,
        text: "",
      },
    };
  }
  async componentDidMount() {
    try {
      const { editData, title } = this.props;
      title === "Method" && editData && this.setMethosEdit(editData);
    } catch (error) {
      console.log(error);
    }
  }
  setMethosEdit=(data)=>{
    try {
      let  setdata={
        id:data.id,
        method:data.method,
        methodid:data.methodid,
        name:data.name
      }
      this.setState({methodInit:setdata});
    } catch (error) {
      console.log(error);
    }
  }
  selectUI = (dis,val, name, setFieldValue, error) => {
    try {
      return (
        <Select
          withID
          name={name}
          data={
            name === "payType"
              ? this.props.selectData
              : [
                  { id: 1, value: "Card" },
                  { id: 2, value: "Online" },
                ]
          }
          disabled={dis}
          value={val}
          defaultValue={val}
          className={error && val === "" ? "empty" : ""}
          onChange={async (value, data) => {
            setFieldValue(name, value);
            name === "method" && setFieldValue("methodid", data.id);
            name === "payType" && setFieldValue("payTypeID", data.id);
          }}
        />
      );
    } catch (error) {
      console.log(error);
    }
  };
  handleSubmit = async (values, { setSubmitting }) => {
    try {
      this.setState({ disable: true });
      setTimeout(() => this.setState({ disable: false }), 5000);
      let data = localStorage.localMethods
        ? JSON.parse(localStorage.localMethods)
        : [];
      let check = data.findIndex(
        (x) => x.name.toLowerCase() === values.name.toLowerCase()
      );
      if (check === -1&&values.id===0 ) {
        await this.props.addMethod(values);
        this.props.reCall();
      }else if(check === -1&&values.id>0 ){
        await this.props.updateMethods(values);
        this.props.reCall();
      } else {
        message.error("Name Is Alredy IN");
      }
    } catch (error) {
      console.log(error);
    }
  };
  handlePaySubmit = async (values, { setSubmitting }) => {
    try {
      const { amount } = this.state;
      this.setState({ disable: true });
      setTimeout(() => this.setState({ disable: false }), 5000);
      let flag = false;
      if (amount === 0) {
        flag = true;
        this.setState({ amountErroe: true });
      }
      if (!flag) {
        let send = {
          id: values.id,
          amount: amount,
          paymentType: values.payType,
          paymentTypeId: values.payTypeID,
          discription: values.text.trim(),
        };
        await this.props.addPayment(send);
        this.props.reCall();
      }
    } catch (error) {
      console.log(error);
    }
  };
  handleAmount = (val) => {
    try {
      console.log(val.target.value.length);
      let v = 0;
      if (val.target.value.length > 1) {
        let check = parseInt(val.target.value.toString()[0]) === 0;
        let stri = check
          ? parseInt(val.target.value.toString().slice(1))
          : val.target.value;
        v = stri;
      }
      this.setState({
        amount: v,
        amountErroe: v > 0 ? false : true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { methodInit, disable, payInit, amount, amountErroe } = this.state;
    const { toggleModal, title } = this.props;
    return (
      <MContainer id="mDiv">
        <Modal
          open={true}
          onOk={toggleModal}
          onCancel={toggleModal}
          footer={null}
          title={"Add " + title}
          className="add-modal"
          getContainer={() => document.getElementById("mDiv")}
          centered
        >
          <div className="">
            {title === "Method" ? (
              <Formik
                initialValues={methodInit}
                validationSchema={ValidationSchema}
                onSubmit={this.handleSubmit}
                enableReinitialize
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  handleReset,
                  setFieldValue,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Label
                      title={"Select Method*"}
                      className={
                        errors.method && touched.method && values.method === ""
                          ? "empty"
                          : ""
                      }
                    />
                    {values.method === "" &&
                      this.selectUI(
                        values.id!==0,
                        values.method,
                        "method",
                        setFieldValue,
                        errors.method && touched.method && values.method === ""
                      )}
                    {values.method !== "" &&
                      this.selectUI(values.id!==0,values.method, "method", setFieldValue)}
                    <Label
                      title={"Name*"}
                      className={errors.name && touched.name ? "empty" : ""}
                    />
                    <Input
                      onBlur={handleBlur}
                      value={values.name}
                      name="name"
                      handleChange={handleChange}
                      className={errors.name && touched.name ? "empty" : ""}
                    />
                    <div className="btnBottom">
                      <Button
                        disabled={disable}
                        className="mt-1"
                        htmlType="submit"
                      >
                        {"Submit"}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            ) : (
              <Formik
                initialValues={payInit}
                validationSchema={PaymentSchema}
                onSubmit={this.handlePaySubmit}
                enableReinitialize
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  handleReset,
                  setFieldValue,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Label
                      title={"Amount*"}
                      className={amountErroe ? "empty" : ""}
                    />
                    <Input
                      type="number"
                      value={amount}
                      handleChange={this.handleAmount}
                      className={amountErroe ? "empty" : ""}
                    />
                    <Label
                      title={"Select type*"}
                      className={
                        errors.payType &&
                        touched.payType &&
                        values.payType === ""
                          ? "empty"
                          : ""
                      }
                    />
                    {values.payType === "" &&
                      this.selectUI(
                        false,
                        values.payType,
                        "payType",
                        setFieldValue,
                        errors.payType &&
                          touched.payType &&
                          values.payType === ""
                      )}
                    {values.payType !== "" &&
                      this.selectUI(false,values.payType, "payType", setFieldValue)}
                    <Label
                      title={"Description*"}
                      className={errors.text && touched.text ? "empty" : ""}
                    />
                    <Input
                      onBlur={handleBlur}
                      value={values.text}
                      name="text"
                      handleChange={handleChange}
                      className={errors.text && touched.text ? "empty" : ""}
                    />
                    <div className="btnBottom">
                      <Button
                        disabled={disable}
                        className="mt-1"
                        htmlType="submit"
                      >
                        {"Submit"}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </Modal>
      </MContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  // templateList: state.template.templateList,
});
const mapDispatchToProps = (dispatch) => ({
  addMethod: (payload) => dispatch(addMethod(payload)),
  addPayment: (payload) => dispatch(addPayment(payload)),
  updateMethods: (payload) => dispatch(updateMethods(payload)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ModalUI)
);
