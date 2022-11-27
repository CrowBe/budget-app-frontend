type transaction = {
  id: number;
  transactionDate: string;
  transactionAmount: number;
  description: string;
  balance?: number;
}

type transactionTypes = 'credit' | 'debit';

type categorisedTransaction = {
  primaryCategory: string;
  secondaryCategory: string;
  tertiaryCategory: string;
  merchantName: string;
  type: transactionTypes;
} & transaction;