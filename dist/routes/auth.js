"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const zod_1 = require("../zod");
const router = (0, express_1.Router)();
router.post('/signup', (0, middlewares_1.validate)(zod_1.signUpSchema), controllers_1.AuthController.signUp);
router.post('/signin', (0, middlewares_1.validate)(zod_1.signInSchema), controllers_1.AuthController.signIn);
exports.default = router;
