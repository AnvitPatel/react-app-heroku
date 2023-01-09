import React, { Component } from "react";
import { Table, Tooltip } from "antd";
import { withRouter } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { PageConst } from "./constant";

const { Column } = Table;

class TableUI extends Component {
  constructor(props) {
    super(props);
    this.state = { pageSize: 10 };
  }
  actionUi = (a) => {
    try {
      const { type } = this.props;
      return (
        <div className="flex actDiv" key="master">
          {type === "method" && (
            <div onClick={() => this.props.editCol(a)}>
              <Tooltip placement="top" title={"Edit"} className="pointer">
                <EditOutlined />
              </Tooltip>
            </div>
          )}
          <div onClick={() => this.props.deleteCol(type === "method"?a:a.id)}>
            <Tooltip placement="top" title={"Delete"} className="pointer">
              <DeleteOutlined />
            </Tooltip>
          </div>
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };
  columnUI = () => {
    try {
      const { type } = this.props;
      return (
        <>
          <Column
            title={PageConst.sr}
            dataIndex="key"
            key="key"
            width={15}
            sorter={(a, b) => a.key - b.key}
          />
          {type === "payment" && (
            <>
              <Column
                title={"Amount"}
                dataIndex="amount"
                sorter={(a, b) => a.amount - b.amount}
              />
              <Column
                title={"Payment Type"}
                dataIndex="paymentType"
                sorter={(a, b) => a.paymentType - b.paymentType}
              />
              <Column
                title={"Description"}
                dataIndex="discription"
                sorter={(a, b) => a.discription - b.discription}
              />
            </>
          )}
          {type === "method" && (
            <>
              <Column
                title={"Method Name"}
                dataIndex="name"
                sorter={(a, b) => a.name - b.name}
              />
              <Column
                title={"Method Type"}
                dataIndex="method"
                sorter={(a, b) => a.method - b.method}
              />
            </>
          )}
          <Column
            width={100}
            title={"Action"}
            render={(record, i) => this.actionUi(record)}
          />
        </>
      );
    } catch (error) {
      console.log(error);
    }
  };
  footerUI = () => `Total Amount :- ${this.props.totalAmount}`;
  render() {
    const { data, type, totalAmount } = this.props;
    let display = data;
    display?.forEach((a, i) => {
      a.key = i + 1;
    });
    return (
      <Table
        dataSource={display}
        size="middle"
        className="nTable"
        // pagination={!print?{ pageSize: pageSize }:false}
        rowClassName={"anime"}
        // rowSelection={type === "benpoList" && rowSelection}
        // onRow={(record) => ({ onClick: () => this.selectRow(record) })}
        footer={totalAmount && totalAmount > 0 ? this.footerUI : undefined}
      >
        {this.columnUI()}
      </Table>
    );
  }
}
export default withRouter(TableUI);
