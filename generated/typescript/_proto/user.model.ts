/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';
import { Status } from './commons.model';

export const protobufPackage = 'users';

export interface User {
  /**
   * The user id
   * @example 10
   * @Min 1
   * @Max 1000
   */
  userId: number;
  emailId: string;
  firstName: string;
  lastName: string;
}

export interface UserInfoList {
  users: User[];
  pageSize: number;
  pageToken: string;
}

export const USERS_PACKAGE_NAME = 'users';

export interface UserServiceClient {
  create(request: User, metadata?: Metadata): Observable<Status>;
}

export interface UserServiceController {
  create(
    request: User,
    metadata?: Metadata,
  ): Promise<Status> | Observable<Status> | Status;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['create'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('UserService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('UserService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const USER_SERVICE_NAME = 'UserService';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
