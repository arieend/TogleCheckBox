import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Browsing Services";
  setChecked = false 
  showFeatures = true;

  /**
   * Getter for the features property
   */
  get features() {
    return [
      {
        label: "Short item",
        labelA: "So far so good with just a short label, right?",
        labelB:"But here, the naive solution causes the checkbox to be centered between the two lines.",
        icon: "utility:edit",
      },
      {
        label: "Longer checkbox item that unfortunately wraps on to two separate lines.",
        labelA:"But here, the naive solution causes the checkbox to be centered between the two lines.",
        icon: "utility:refresh",
      },
      {
        label: "Longer checkbox item that unfortunately wraps on to two separate lines",
        labelA: "This solution always centers the checkbox with the first line of text, no matter the text size or checkbox size.",
        icon: "utility:brush",
      },
      {
        label: "Longer checkbox item that unfortunately wraps on to two separate lines",
        labelA: "Here I've made the text bigger and the checkbox is still perfectly aligned, how incredible!",
        icon: "utility:brush",
      }
    ];
  }
}
