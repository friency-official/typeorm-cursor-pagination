"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Paginator_1 = __importDefault(require("./Paginator"));
function buildPaginator(options) {
    const { entity, query = {}, alias = entity.name.toLowerCase(), paginationKeys = ['id'], } = options;
    const paginator = new Paginator_1.default(entity, paginationKeys);
    paginator.setAlias(alias);
    if (query.afterCursor) {
        paginator.setAfterCursor(query.afterCursor);
    }
    if (query.beforeCursor) {
        paginator.setBeforeCursor(query.beforeCursor);
    }
    if (query.limit) {
        paginator.setLimit(query.limit);
    }
    if (query.order) {
        paginator.setOrder(query.order);
    }
    return paginator;
}
exports.buildPaginator = buildPaginator;
//# sourceMappingURL=buildPaginator.js.map