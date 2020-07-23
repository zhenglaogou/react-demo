import dashboard from "./dashboard";
import exception from "./exception";
import result from "./result";
import table from "./table";
import list from "./list";
import menu from "./menu";

export default {
  "app.btn.edit": "Edit",
  "app.btn.delete": "Delete",
  "app.btn.detail": "Detail",
  "app.btn.add": "Add",
  ...menu,
  ...table,
  ...result,
  ...dashboard,
  ...exception,
  ...list
};
