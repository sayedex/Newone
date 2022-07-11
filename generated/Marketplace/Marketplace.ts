// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BuyPriceSell extends ethereum.Event {
  get params(): BuyPriceSell__Params {
    return new BuyPriceSell__Params(this);
  }
}

export class BuyPriceSell__Params {
  _event: BuyPriceSell;

  constructor(event: BuyPriceSell) {
    this._event = event;
  }

  get auctionIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get Pirce(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get sold(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get nftId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class NFTClaimed extends ethereum.Event {
  get params(): NFTClaimed__Params {
    return new NFTClaimed__Params(this);
  }
}

export class NFTClaimed__Params {
  _event: NFTClaimed;

  constructor(event: NFTClaimed) {
    this._event = event;
  }

  get auctionIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get claimedBy(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NFTRefunded extends ethereum.Event {
  get params(): NFTRefunded__Params {
    return new NFTRefunded__Params(this);
  }
}

export class NFTRefunded__Params {
  _event: NFTRefunded;

  constructor(event: NFTRefunded) {
    this._event = event;
  }

  get auctionIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get claimedBy(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NewAuction extends ethereum.Event {
  get params(): NewAuction__Params {
    return new NewAuction__Params(this);
  }
}

export class NewAuction__Params {
  _event: NewAuction;

  constructor(event: NewAuction) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get addressNFTCollection(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get addressPaymentToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get nftId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get mintedBy(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get currentBidOwner(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get currentBidPrice(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get BuyNowprice(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get endAuction(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get bidCount(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }

  get sold(): boolean {
    return this._event.parameters[10].value.toBoolean();
  }
}

export class NewBidOnAuction extends ethereum.Event {
  get params(): NewBidOnAuction__Params {
    return new NewBidOnAuction__Params(this);
  }
}

export class NewBidOnAuction__Params {
  _event: NewBidOnAuction;

  constructor(event: NewBidOnAuction) {
    this._event = event;
  }

  get auctionIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newBid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get nftId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Nftselltotopbidder extends ethereum.Event {
  get params(): Nftselltotopbidder__Params {
    return new Nftselltotopbidder__Params(this);
  }
}

export class Nftselltotopbidder__Params {
  _event: Nftselltotopbidder;

  constructor(event: Nftselltotopbidder) {
    this._event = event;
  }

  get auctionIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get claimedBy(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get sold(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }
}

export class TokensClaimed extends ethereum.Event {
  get params(): TokensClaimed__Params {
    return new TokensClaimed__Params(this);
  }
}

export class TokensClaimed__Params {
  _event: TokensClaimed;

  constructor(event: TokensClaimed) {
    this._event = event;
  }

  get auctionIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get claimedBy(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Marketplace extends ethereum.SmartContract {
  static bind(address: Address): Marketplace {
    return new Marketplace("Marketplace", address);
  }

  bid(_auctionIndex: BigInt, _newBid: BigInt): boolean {
    let result = super.call("bid", "bid(uint256,uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_auctionIndex),
      ethereum.Value.fromUnsignedBigInt(_newBid)
    ]);

    return result[0].toBoolean();
  }

  try_bid(
    _auctionIndex: BigInt,
    _newBid: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("bid", "bid(uint256,uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_auctionIndex),
      ethereum.Value.fromUnsignedBigInt(_newBid)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  createAuction(
    _addressNFTCollection: Address,
    _addressPaymentToken: Address,
    _nftId: BigInt,
    _endAuction: BigInt,
    _Buynowprice: BigInt
  ): BigInt {
    let result = super.call(
      "createAuction",
      "createAuction(address,address,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_addressNFTCollection),
        ethereum.Value.fromAddress(_addressPaymentToken),
        ethereum.Value.fromUnsignedBigInt(_nftId),
        ethereum.Value.fromUnsignedBigInt(_endAuction),
        ethereum.Value.fromUnsignedBigInt(_Buynowprice)
      ]
    );

    return result[0].toBigInt();
  }

  try_createAuction(
    _addressNFTCollection: Address,
    _addressPaymentToken: Address,
    _nftId: BigInt,
    _endAuction: BigInt,
    _Buynowprice: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createAuction",
      "createAuction(address,address,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_addressNFTCollection),
        ethereum.Value.fromAddress(_addressPaymentToken),
        ethereum.Value.fromUnsignedBigInt(_nftId),
        ethereum.Value.fromUnsignedBigInt(_endAuction),
        ethereum.Value.fromUnsignedBigInt(_Buynowprice)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentBid(_auctionIndex: BigInt): BigInt {
    let result = super.call(
      "getCurrentBid",
      "getCurrentBid(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_auctionIndex)]
    );

    return result[0].toBigInt();
  }

  try_getCurrentBid(_auctionIndex: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentBid",
      "getCurrentBid(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_auctionIndex)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentBidOwner(_auctionIndex: BigInt): Address {
    let result = super.call(
      "getCurrentBidOwner",
      "getCurrentBidOwner(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_auctionIndex)]
    );

    return result[0].toAddress();
  }

  try_getCurrentBidOwner(_auctionIndex: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getCurrentBidOwner",
      "getCurrentBidOwner(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_auctionIndex)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  index(): BigInt {
    let result = super.call("index", "index():(uint256)", []);

    return result[0].toBigInt();
  }

  try_index(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("index", "index():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isOpen(_auctionIndex: BigInt): boolean {
    let result = super.call("isOpen", "isOpen(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_auctionIndex)
    ]);

    return result[0].toBoolean();
  }

  try_isOpen(_auctionIndex: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOpen", "isOpen(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_auctionIndex)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isSelldone(_auctionIndex: BigInt): boolean {
    let result = super.call("isSelldone", "isSelldone(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_auctionIndex)
    ]);

    return result[0].toBoolean();
  }

  try_isSelldone(_auctionIndex: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isSelldone", "isSelldone(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_auctionIndex)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DirectBuyCall extends ethereum.Call {
  get inputs(): DirectBuyCall__Inputs {
    return new DirectBuyCall__Inputs(this);
  }

  get outputs(): DirectBuyCall__Outputs {
    return new DirectBuyCall__Outputs(this);
  }
}

export class DirectBuyCall__Inputs {
  _call: DirectBuyCall;

  constructor(call: DirectBuyCall) {
    this._call = call;
  }

  get _auctionIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DirectBuyCall__Outputs {
  _call: DirectBuyCall;

  constructor(call: DirectBuyCall) {
    this._call = call;
  }
}

export class SellTokenToBiderCall extends ethereum.Call {
  get inputs(): SellTokenToBiderCall__Inputs {
    return new SellTokenToBiderCall__Inputs(this);
  }

  get outputs(): SellTokenToBiderCall__Outputs {
    return new SellTokenToBiderCall__Outputs(this);
  }
}

export class SellTokenToBiderCall__Inputs {
  _call: SellTokenToBiderCall;

  constructor(call: SellTokenToBiderCall) {
    this._call = call;
  }

  get _auctionIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SellTokenToBiderCall__Outputs {
  _call: SellTokenToBiderCall;

  constructor(call: SellTokenToBiderCall) {
    this._call = call;
  }
}

export class BidCall extends ethereum.Call {
  get inputs(): BidCall__Inputs {
    return new BidCall__Inputs(this);
  }

  get outputs(): BidCall__Outputs {
    return new BidCall__Outputs(this);
  }
}

export class BidCall__Inputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }

  get _auctionIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newBid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BidCall__Outputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ClaimNFTCall extends ethereum.Call {
  get inputs(): ClaimNFTCall__Inputs {
    return new ClaimNFTCall__Inputs(this);
  }

  get outputs(): ClaimNFTCall__Outputs {
    return new ClaimNFTCall__Outputs(this);
  }
}

export class ClaimNFTCall__Inputs {
  _call: ClaimNFTCall;

  constructor(call: ClaimNFTCall) {
    this._call = call;
  }

  get _auctionIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimNFTCall__Outputs {
  _call: ClaimNFTCall;

  constructor(call: ClaimNFTCall) {
    this._call = call;
  }
}

export class ClaimTokenCall extends ethereum.Call {
  get inputs(): ClaimTokenCall__Inputs {
    return new ClaimTokenCall__Inputs(this);
  }

  get outputs(): ClaimTokenCall__Outputs {
    return new ClaimTokenCall__Outputs(this);
  }
}

export class ClaimTokenCall__Inputs {
  _call: ClaimTokenCall;

  constructor(call: ClaimTokenCall) {
    this._call = call;
  }

  get _auctionIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimTokenCall__Outputs {
  _call: ClaimTokenCall;

  constructor(call: ClaimTokenCall) {
    this._call = call;
  }
}

export class CreateAuctionCall extends ethereum.Call {
  get inputs(): CreateAuctionCall__Inputs {
    return new CreateAuctionCall__Inputs(this);
  }

  get outputs(): CreateAuctionCall__Outputs {
    return new CreateAuctionCall__Outputs(this);
  }
}

export class CreateAuctionCall__Inputs {
  _call: CreateAuctionCall;

  constructor(call: CreateAuctionCall) {
    this._call = call;
  }

  get _addressNFTCollection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _addressPaymentToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _nftId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _endAuction(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _Buynowprice(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class CreateAuctionCall__Outputs {
  _call: CreateAuctionCall;

  constructor(call: CreateAuctionCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RefundCall extends ethereum.Call {
  get inputs(): RefundCall__Inputs {
    return new RefundCall__Inputs(this);
  }

  get outputs(): RefundCall__Outputs {
    return new RefundCall__Outputs(this);
  }
}

export class RefundCall__Inputs {
  _call: RefundCall;

  constructor(call: RefundCall) {
    this._call = call;
  }

  get _auctionIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RefundCall__Outputs {
  _call: RefundCall;

  constructor(call: RefundCall) {
    this._call = call;
  }
}
