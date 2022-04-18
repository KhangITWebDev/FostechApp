import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert2"
import { postContactAction } from "../../store/actions/contact.action";

class FormContact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    address: "",
    info_contact: "",
  };
  onChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = async (event) => {
    await event.preventDefault();
    this.props.dispatch(postContactAction(this.state))
    swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Yêu cầu của bạn đã được gửi thành công!',
      showConfirmButton: false,
      timer: 2000
    })
    event.target.reset();
  };
  render() {
    return (
      <form
        action="forms/contact.php"
        method="post"
        role="form"
        className="php-email-form"
        onSubmit={this.onSubmit}
      >
        <div className="row">
          <div className="col form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Tên"
              required
              onChange={this.onChange}
            />
          </div>
          <div className="col form-group">
            <input
              type="phone"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="Số điện thoại"
              required
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Email"
            required
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="address"
            id="address"
            placeholder="Địa chỉ"
            required
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="info_contact"
            rows={5}
            placeholder="Bạn cần gì ở chúng tôi"
            required
            defaultValue={""}
            onChange={this.onChange}
          />
        </div>
        <div className="text-center">
          <button type="submit">Gửi</button>
        </div>
      </form>
    );
  }
}

export default connect()(FormContact);
