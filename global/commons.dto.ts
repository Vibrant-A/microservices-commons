import { IsBoolean, IsNotEmpty } from "class-validator";
import { Status } from "@vibrant-america/phlebotomy-shared-types.generated/typescript/_proto/commons.model";

export class StatusDto implements Status {

    @IsBoolean()
    status: boolean;

    @IsNotEmpty()
    message: string;
}