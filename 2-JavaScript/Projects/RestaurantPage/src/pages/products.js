import { addMain, clearMain } from "../index.js";
import createBanner from "../modules/Global/banner/globalBanner.js";

export default function createProductsPage() {
    clearMain();
    addMain(createBanner());
}