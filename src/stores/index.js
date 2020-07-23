import Icestore from "@ice/store";
import userProfile from "./userProfile";
import expandAside from "./expandAside";

// https://github.com/ice-lab/icestore#getting-started
const icestore = new Icestore();

export default icestore.registerStores({
  userProfile,
  expandAside
});