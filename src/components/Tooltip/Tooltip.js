import React, { Component } from "react";
import { default as RcTooltip } from "rc-tooltip";
import PropTypes from "prop-types";
import "./Tooltip.scss";

class Tooltip extends Component {
  render() {
    const {
      className,
      id,
      children,
      overlay,
      trigger,
      arrowPoint,
      mouseEnterDelay,
      mouseLeaveDelay,
      overlayStyle,
      prefixCls,
      transitionName,
      onVisibleChange,
      afterVisibleChange,
      defaultVisible,
      align,
      onPopupAlign,
      overlayInnerStyle,
      arrowContent,
      getTooltipContainer,
      destroyTooltipOnHide,
    } = this.props;
    return (
      <div>
        <RcTooltip
          className={`rd-tooltip  ${className}`}
          id={id}
          placement={arrowPoint}
          trigger={[trigger]}
          overlay={<div>{ this.props.header ? <div style={{fontSize : "18px" , paddingBottom:"15px"}} >{this.props.header}</div>  :undefined }{this.props.data ? this.props.data : overlay} </div>}
          mouseEnterDelay={mouseEnterDelay}
          mouseLeaveDelay={mouseLeaveDelay}
          overlayStyle={overlayStyle}
          prefixCls={prefixCls}
          transitionName={transitionName}
          onVisibleChange={onVisibleChange}
          afterVisibleChange={afterVisibleChange}
          defaultVisible={defaultVisible}
          align={align}
          onPopupAlign={onPopupAlign}
          overlayInnerStyle={overlayInnerStyle}
          arrowContent={arrowContent}
          getTooltipContainer={getTooltipContainer}
          destroyTooltipOnHide={destroyTooltipOnHide}
        >
          <div>{children}</div>
        </RcTooltip>
      </div>
    );
  }
}

Tooltip.propTypes = {
  getTooltipContainer: PropTypes.func,
  children: PropTypes.node.isRequired,
  data: PropTypes.string.isRequired,
  header: PropTypes.string,
  id: PropTypes.string,
  trigger: PropTypes.string.isRequired,
  arrowPoint: PropTypes.string.isRequired,
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number,
  overlayStyle: PropTypes.object,
  prefixCls: PropTypes.string,
  transitionName: PropTypes.string,
  onVisibleChange: PropTypes.func,
  afterVisibleChange: PropTypes.func,
  defaultVisible: PropTypes.bool,
  align: PropTypes.object,
  onPopupAlign: PropTypes.func,
  overlayInnerStyle: PropTypes.object,
  arrowContent: PropTypes.node,
  destroyTooltipOnHide: PropTypes.bool,
};
Tooltip.defaultProps = {
  trigger: "hover" /*['hover','click','focus']*/,
  arrowPoint: "top",
  overlayStyle: { background: "white" },
  data : "Give data as a prop",
  overlayInnerStyle: {
    fontFamily: "MetropolisRegular",
    fontSize : '14px',
    width : "200px",
    padding : "20px",
  },
};

export default Tooltip;
