import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";
import { User } from "@vibrant-america/phlebotomy-shared-types.generated/typescript/_proto/user.model";

export class UserDto implements User {

    @IsNumber()
    userId: number;

    @IsEmail()
    emailId: string;

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;


}