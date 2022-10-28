"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRegisterDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createRegister_dto_1 = require("./createRegister.dto");
class UpdateRegisterDTO extends (0, mapped_types_1.PartialType)(createRegister_dto_1.CreateRegisterDTO) {
}
exports.UpdateRegisterDTO = UpdateRegisterDTO;
//# sourceMappingURL=updateRegister.dto.js.map