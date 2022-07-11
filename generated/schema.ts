// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class newAuctionScma extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("index", Value.fromBigInt(BigInt.zero()));
    this.set("addressPaymentToken", Value.fromBytes(Bytes.empty()));
    this.set("NFTID", Value.fromBigInt(BigInt.zero()));
    this.set("creator", Value.fromBytes(Bytes.empty()));
    this.set("currentBidOwner", Value.fromBytes(Bytes.empty()));
    this.set("currentBidPrice", Value.fromBigInt(BigInt.zero()));
    this.set("BuyNowprice", Value.fromBigInt(BigInt.zero()));
    this.set("endAuction", Value.fromBigInt(BigInt.zero()));
    this.set("bidCount", Value.fromBigInt(BigInt.zero()));
    this.set("sold", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save newAuctionScma entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type newAuctionScma must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("newAuctionScma", id.toString(), this);
    }
  }

  static load(id: string): newAuctionScma | null {
    return changetype<newAuctionScma | null>(store.get("newAuctionScma", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get addressPaymentToken(): Bytes {
    let value = this.get("addressPaymentToken");
    return value!.toBytes();
  }

  set addressPaymentToken(value: Bytes) {
    this.set("addressPaymentToken", Value.fromBytes(value));
  }

  get NFTID(): BigInt {
    let value = this.get("NFTID");
    return value!.toBigInt();
  }

  set NFTID(value: BigInt) {
    this.set("NFTID", Value.fromBigInt(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get currentBidOwner(): Bytes {
    let value = this.get("currentBidOwner");
    return value!.toBytes();
  }

  set currentBidOwner(value: Bytes) {
    this.set("currentBidOwner", Value.fromBytes(value));
  }

  get currentBidPrice(): BigInt {
    let value = this.get("currentBidPrice");
    return value!.toBigInt();
  }

  set currentBidPrice(value: BigInt) {
    this.set("currentBidPrice", Value.fromBigInt(value));
  }

  get BuyNowprice(): BigInt {
    let value = this.get("BuyNowprice");
    return value!.toBigInt();
  }

  set BuyNowprice(value: BigInt) {
    this.set("BuyNowprice", Value.fromBigInt(value));
  }

  get endAuction(): BigInt {
    let value = this.get("endAuction");
    return value!.toBigInt();
  }

  set endAuction(value: BigInt) {
    this.set("endAuction", Value.fromBigInt(value));
  }

  get bidCount(): BigInt {
    let value = this.get("bidCount");
    return value!.toBigInt();
  }

  set bidCount(value: BigInt) {
    this.set("bidCount", Value.fromBigInt(value));
  }

  get sold(): boolean {
    let value = this.get("sold");
    return value!.toBoolean();
  }

  set sold(value: boolean) {
    this.set("sold", Value.fromBoolean(value));
  }

  get bider(): Array<string> {
    let value = this.get("bider");
    return value!.toStringArray();
  }

  set bider(value: Array<string>) {
    this.set("bider", Value.fromStringArray(value));
  }
}

export class bidd extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("askPrice", Value.fromBigInt(BigInt.zero()));
    this.set("nftid", Value.fromBigInt(BigInt.zero()));
    this.set("newAuction", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save bidd entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type bidd must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("bidd", id.toString(), this);
    }
  }

  static load(id: string): bidd | null {
    return changetype<bidd | null>(store.get("bidd", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get askPrice(): BigInt {
    let value = this.get("askPrice");
    return value!.toBigInt();
  }

  set askPrice(value: BigInt) {
    this.set("askPrice", Value.fromBigInt(value));
  }

  get nftid(): BigInt {
    let value = this.get("nftid");
    return value!.toBigInt();
  }

  set nftid(value: BigInt) {
    this.set("nftid", Value.fromBigInt(value));
  }

  get newAuction(): string {
    let value = this.get("newAuction");
    return value!.toString();
  }

  set newAuction(value: string) {
    this.set("newAuction", Value.fromString(value));
  }
}