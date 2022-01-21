import { modal } from "./modules/modal.js";
import { contentListData } from "./modules/contentListData.js";
import { renderContentList } from "./modules/renderContentList.js"

modal();

renderContentList(contentListData, ".renderingList");