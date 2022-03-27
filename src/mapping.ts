import {
  Approval as ApprovalEvent,
  Contribution as ContributionEvent,
  Refund as RefundEvent,
  Transfer as TransferEvent,
} from "../generated/EthQF/EthQF";
import { Approval, Contribution, Refund, Transfer } from "../generated/schema";

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.owner = event.params.owner;
  entity.spender = event.params.spender;
  entity.value = event.params.value;
  entity.save();
}

export function handleContribution(event: ContributionEvent): void {
  let entity = new Contribution(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.contributor = event.params.contributor;
  entity.amount = event.params.amount;
  entity.project_id = event.params.project_id;
  entity.date = event.params.date;
  entity.save();
}

export function handleRefund(event: RefundEvent): void {
  let entity = new Refund(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.contributor = event.params.contributor;
  entity.amount = event.params.amount;
  entity.project_id = event.params.project_id;
  entity.date = event.params.date;
  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = event.params.value;
  entity.save();
}
