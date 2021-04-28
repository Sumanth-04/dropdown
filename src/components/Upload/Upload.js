import React, { Component } from "react";
import { default as RcUpload } from "rc-upload";
import PropTypes from "prop-types";
import "./Upload.scss";
//import Notification from "../Notification/index";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
      uploadedElements: [],
      uploadedImages: [],
    };
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    //this.remove = this.remove.bind(this);
    this.beforeUpload = this.beforeUpload.bind(this);
  }
  onSuccess = (res, file, xhr) => {

  };
  
  onError = (res, file, xhr) => {
    console.log("er")
    /*
    //this.sColor = { color: "red" };
    var temp = [...this.state.uploadedElements];
    var tempImg = [...this.state.uploadedImages];
    temp.pop();
    tempImg.pop();
    this.setState({uploadedElements:temp});
    this.setState({uploadedImages : tempImg})
    setTimeout(()=>alert("Error while uploading"),1);*/
  };
  beforeUpload = (file) => {
    var temp = [...this.state.uploadedElements];
    var tempImg = [...this.state.uploadedImages];

    const fileType = file["type"];
    const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if (validImageTypes.includes(fileType)) {
      if (this.props.onlyFiles) {
        alert("You can only upload documents");
        return;
      }
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        tempImg.push(reader.result);
      };
    } else {
      if (this.props.onlyImages) {
        alert("You can only upload JPG/PNG file!");
        return;
      }
      tempImg.push(false);
    }
    temp.push(file.name);
    this.setState({ uploadedElements: temp });
    setTimeout(() => {
      this.setState({ uploadedImages: tempImg });
    }, 200);
  };
  render() {
    const {
      className,
      style,
      name,
      disabled,
      component,
      action,
      method,
      directory,
      data,
      headers,
      accept,
      onStart,
      onProgress,
      customRequest,
      withCredentials,
      openFileDialogOnClick,
      transformFile,
    } = this.props;
    return (
      <div>
        <RcUpload
          className={`rd-upload ${className}`}
          style={style}
          name={name}
          disabled={disabled}
          component={component}
          action={action}
          method={method}
          directory={directory}
          data={data}
          headers={headers}
          accept={accept}
          multiple={true}
          onStart={onStart}
          onError={this.onError}
          onSuccess={this.onSuccess}
          onProgress={onProgress}
          beforeUpload={this.beforeUpload}
          customRequest={customRequest}
          withCredentials={withCredentials}
          openFileDialogOnClick={openFileDialogOnClick}
          transformFile={transformFile}
        >
          {this.state.children}
          {<br />}
        </RcUpload> <span style={{fontSize:'14px'}}>{this.props.msg}</span>
        <div style={{ width: this.props.uploadedWidth }}>
          {this.state.uploadedElements
            ? this.state.uploadedElements.map((val, index) => {
                return (
                  <div
                    className={`uploaded-${index}`}
                    style={{
                      marginBottom: "10px",
                      display: "grid",
                      gridTemplateColumns: "auto 10%",
                      fontFamily: "chivoLight",
                      fontSize: "12px",
                    }}
                    key={index}
                  >
                    <span>
                      {this.state.uploadedImages[index] !== false ? (
                        <img
                          src={this.state.uploadedImages[index]}
                          height={20}
                          width={50}
                          alt=""
                        />
                      ) : (
                        <span>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                      )}{" "}
                      {val}{" "}
                    </span>
                    <span>
                      <button
                        className="rd-btn"
                        key={index}
                        onClick={() => {
                          var temp = [...this.state.uploadedElements];
                          var tempImgs = [...this.state.uploadedImages];
                          temp.splice(index, 1);
                          tempImgs.splice(index, 1);
                          this.setState({
                            uploadedElements: temp,
                            uploadedImages: tempImgs,
                          });
                        }}
                      >
                        delete
                      </button>
                    </span>
                  </div>
                );
              })
            : undefined}
        </div>
      </div>
    );
  }
}

Upload.propTypes = {
  className: PropTypes.string,
  onlyImages: PropTypes.bool,
  onlyFiles: PropTypes.bool,
  uploadedWidth : PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  component: PropTypes.node,
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  method: PropTypes.string,
  directory: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  headers: PropTypes.object,
  accept: PropTypes.string,
  //multiple: PropTypes.bool,
  onStart: PropTypes.func,
  //onError: PropTypes.func,
  //onSuccess: PropTypes.func,
  onProgress: PropTypes.func,
  beforeUpload: PropTypes.func,
  customRequest: PropTypes.func,
  withCredentials: PropTypes.bool,
  openFileDialogOnClick: PropTypes.bool,
  transformFile: PropTypes.func,
};

Upload.defaultProps = {
  disabled: false,
  component: "button",
  openFileDialogOnClick: true,
  onlyImages: true,
  onlyFiles: false,
  uploadedWidth : '40%',
};
export default Upload;
