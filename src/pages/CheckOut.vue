<template>
  <div>
    <div class="wrapper">
      <SideBar2 />

      <div class="main-panel">
        <TopBar />
        <div class="row" style="margin: 0;">
          <div class="col-lg-9 col-12">
            <div class="content">
              <div class="container-fluid">
                <div class="info-shipping">
                  <div class="container-fluid" style="padding: 0">
                    <div class="row block-page-checkout">
                      <div class="col-xs-12 col-sm-12" style="padding: 0;">
                        <form role="form">
                          <h3>Shipping Address</h3>
                          <hr class="colorgraph">
                          <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-6">
                              <div class="form-group">
                                <label for="">First Name <span style="color: red">*</span></label>
                                <input type="text" name="first_name" id="first_name" class="form-control input-lg" placeholder="First Name" tabindex="1">
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">
                              <div class="form-group">
                                <label for="">Last Name <span style="color: red">*</span></label>
                                <input type="text" name="last_name" id="last_name" class="form-control input-lg" placeholder="Last Name" tabindex="2">
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                              <div class="form-group">
                                <label>Phone <span style="color: red">*</span></label>
                                <input type="number" name="first_name" id="" class="form-control input-lg" placeholder="Your phone" tabindex="1">
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-6">
                              <div class="form-group">
                                <label for="">Province <span style="color: red">*</span></label>
                                <select name="" id="" class="form-control input-lg">
                                  <option value="">1</option>
                                  <option value="">1</option>
                                  <option value="">1</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">
                              <div class="form-group">
                                <label for="">District <span style="color: red">*</span></label>
                                <select name="" id="" class="form-control input-lg">
                                  <option value="">District</option>
                                  <option value="">1</option>
                                  <option value="">1</option>
                                  <option value="">1</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">
                              <div class="form-group">
                                <label for="">Ward <span style="color: red">*</span></label>
                                <select name="" id="" class="form-control input-lg">
                                  <option value="">Ward</option>
                                  <option value="">1</option>
                                  <option value="">1</option>
                                  <option value="">1</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">
                              <div class="form-group">
                                <label for="">Address<span style="color: red">*</span></label>
                                <input type="text" name="display_name" id="display_name" class="form-control input-lg" placeholder="Address" tabindex="3">
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                              <div class="form-group">
                                <label>Payment Medthod</label>
                                <select name="" id="" class="form-control input-lg">
                                  <option value="">ALEPAY</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                              <div class="form-group">
                                <label>Address Type <span style="color: red">*</span></label>
                                <div class="address-type" style="">
                                  <p>
                                    <input type="radio" id="test1" name="radio-group" checked>
                                    <label for="test1">Office | Delivery Between 8AM - 5PM</label>
                                  </p>
                                  <p>
                                    <input type="radio" id="test2" name="radio-group">
                                    <label for="test2">Home | All Day Delivery</label>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row" style="margin: 20px 20px 20px 0px">
                            <div class="form-group checkbox-ip">
                              <input type="checkbox" id="css">
                              <label for="css">You agree to the
                                <a href="#" data-toggle="modal" data-target="#t_and_c_m">Terms and Conditions</a>
                                set out by this site, including our Cookie Use.</label>
                            </div>
                          </div>

                          <hr class="colorgraph">
                          <div class="row">
                            <div class="checkout-btn confirm-checkout">
                              <button class="btn btn-block btn-lg">Submit</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <!-- Modal -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Cart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar";
import SideBar2 from "./SideBar2";
import Slide from "../components/Slide";
import Cart from "../components/Cart";
export default {
  name: "Checkout",
  components: {Cart, Slide, SideBar2, TopBar}
}
</script>

<style scoped>
[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: '';
  width: 12px;
  height: 12px;
  background: #fb9401;
  position: absolute;
  top: 3px;
  left: 3px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.form-group.checkbox-ip {
  display: block;
  margin-bottom: 15px;
}

.checkbox-ip input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.checkbox-ip label {
  position: relative;
  cursor: pointer;
}

.checkbox-ip label:before {
  content:'';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid #0079bf;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
}

.checkbox-ip input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 2px;
  left: 9px;
  width: 6px;
  height: 14px;
  border: solid #0079bf;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.confirm-checkout button{
  width: 100%;
}
</style>
