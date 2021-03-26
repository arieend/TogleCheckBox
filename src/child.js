import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api
  label = "";
  @api
  labelA = "";
  @api
  labelB = "";
  setChecked = false; 
}
