"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    app: {
        port: process.env.PORT || 8080
    },
    db: {},
    key: {}
};
exports.default = config;
