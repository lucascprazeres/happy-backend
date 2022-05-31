import { Router } from "express";
import multer from "multer";
import { multerConfig } from "./config/multer";

import { ApproveOrphanageController } from "./controllers/ApproveOrphanageController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateOrphanageController } from "./controllers/CreateOrphanageController";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteOrphanageController } from "./controllers/DeleteOrphanageController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetAllApprovedOrphanagesController } from "./controllers/GetAllApprovedOrphanagesController";
import { GetAllPendingOrphanagesController } from "./controllers/GetAllPendingOrphanagesController";
import { UploadImageController } from "./controllers/UploadImageController";
import { ensureAuthentication } from "./middlewares/ensureAuthentication";

export const router = Router();


router.post("/orphanages", new CreateOrphanageController().handle);

router.put(
	"/images/:orphanageID",
	ensureAuthentication,
	multer(multerConfig).single("file"),
	new UploadImageController().handle
);
router.post("/login", new AuthenticateUserController().handle);

router.get(
	"/orphanages",
	ensureAuthentication,
	new GetAllApprovedOrphanagesController().handle
);
router.get(
	"/orphanages/pending",
	ensureAuthentication,
	new GetAllPendingOrphanagesController().handle
);

router.put(
	"/orphanages/:id",
	ensureAuthentication,
	new ApproveOrphanageController().handle
);

router.delete(
	"/orphanages/:id",
	ensureAuthentication,
	new DeleteOrphanageController().handle
);
