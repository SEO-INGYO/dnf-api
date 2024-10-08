"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPostById = exports.fetchAllPosts = void 0;
const axios_1 = __importDefault(require("axios"));
const fetchAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get('http://localhost/api/posts');
        res.json(response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error) && error.response) {
            res.status(error.response.status).json({ message: error.response.data });
        }
        else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});
exports.fetchAllPosts = fetchAllPosts;
const fetchPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield axios_1.default.get(`http://localhost/api/posts/${id}`);
        res.json(response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error) && error.response) {
            res.status(error.response.status).json({ message: error.response.data });
        }
        else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});
exports.fetchPostById = fetchPostById;
