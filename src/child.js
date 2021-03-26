import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api
  title = "";
  @api
  labels = [];
  setChecked = false; 
}
