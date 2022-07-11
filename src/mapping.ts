import { BigInt } from "@graphprotocol/graph-ts"
import {
  Marketplace,
  BuyPriceSell,
  NFTClaimed,
  NFTRefunded,
  NewAuction,
  NewBidOnAuction,
  Nftselltotopbidder,
  TokensClaimed
} from "../generated/Marketplace/Marketplace"
import { newAuctionScma,bidd } from "../generated/schema"

export function NewAuctionListed(event: NewAuction): void {
  let token = newAuctionScma.load(event.params.nftId.toString())
  if (!token) {
      token = new newAuctionScma(event.params.nftId.toString())
  }
  // token.id = event.transaction.hash.toHexString();
  token.index = event.params.index
  token.addressPaymentToken = event.params.addressPaymentToken
  token.NFTID = event.params.nftId
  token.creator = event.transaction.from
  token.currentBidOwner = event.params.currentBidOwner
  token.BuyNowprice = event.params.BuyNowprice
  token.endAuction = event.params.endAuction
  token.bidCount = event.params.bidCount
  token.sold = false

  token.save()
}

export function Selloutwithbuyprice(event: BuyPriceSell): void {
  let token = newAuctionScma.load(event.params.nftId.toString())
    if (!token) {
        token = new newAuctionScma(event.params.nftId.toString())
    }

    token.sold = true
    token.save()
}

export function HandleNewBidOnAuction(event: NewBidOnAuction): void {
  let id = event.params.nftId.toString();
  let NewAuction = newAuctionScma.load(event.params.nftId.toString())
  if (!NewAuction) {
    NewAuction = new newAuctionScma(id)
}
let order = bidd.load(id)
if (!order) {
   order = new bidd( event.params.nftId.toString());
}
order.askPrice = event.params.newBid;
order.nftid = event.params.nftId;
NewAuction.save();
order.save();
}

