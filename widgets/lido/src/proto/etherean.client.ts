// @generated by protobuf-ts 2.9.1 with parameter optimize_code_size
// @generated from protobuf file "etherean.proto" (package "etherean", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { EthereanGrpc } from "./etherean";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { LidoRewardsReply } from "./etherean";
import type { LidoRewardsRequest } from "./etherean";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service etherean.EthereanGrpc
 */
export interface IEthereanGrpcClient {
    /**
     * @generated from protobuf rpc: GetLidoRewards(etherean.LidoRewardsRequest) returns (etherean.LidoRewardsReply);
     */
    getLidoRewards(input: LidoRewardsRequest, options?: RpcOptions): UnaryCall<LidoRewardsRequest, LidoRewardsReply>;
}
/**
 * @generated from protobuf service etherean.EthereanGrpc
 */
export class EthereanGrpcClient implements IEthereanGrpcClient, ServiceInfo {
    typeName = EthereanGrpc.typeName;
    methods = EthereanGrpc.methods;
    options = EthereanGrpc.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: GetLidoRewards(etherean.LidoRewardsRequest) returns (etherean.LidoRewardsReply);
     */
    getLidoRewards(input: LidoRewardsRequest, options?: RpcOptions): UnaryCall<LidoRewardsRequest, LidoRewardsReply> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<LidoRewardsRequest, LidoRewardsReply>("unary", this._transport, method, opt, input);
    }
}