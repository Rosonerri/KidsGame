import { Router } from "express";
import {
  createKids,
  viewKids,
  viewSortedKids,
} from "../controller/kidsController";

const router: Router = Router();

router.route("/create-kid").post(createKids);
router.route("/find-kid").get(viewKids);
router.route("/sort-kid").get(viewSortedKids);

export default router;
