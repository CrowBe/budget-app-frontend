export const groupDataByPrimaryCategory = <
// Take in objects that have at least the following two key/values
    T extends {primaryCategory: string; transactionAmount: number}
  >(transactions: T[]): T[] => {
    // Create an object to store the accumulating values
  let groupValues: {[key: string]: T} = {}
  // Loop through each item in the array of passed in objects
    transactions.forEach((trans) => {
      // If the grouping object does not have a reference to this category, create a new key value using that category
      if (groupValues[trans.primaryCategory] === undefined) {
        groupValues[trans.primaryCategory] = {
          ...trans,
          transactionAmount: trans.transactionAmount,
          primaryCategory: trans.primaryCategory,
        }
        // Otherwise, increment the total
      } else {
        groupValues[trans.primaryCategory].transactionAmount += trans.transactionAmount
      }
    })
    // Return the grouped values
  return Object.values(groupValues)
}
  
export const groupDataBySecondaryCategory = <T extends {secondaryCategory: string; transactionAmount: number}>
  (transactions: T[]): T[] => {
  let groupValues: {[key: string]: T} = {}
    transactions.forEach((trans) => {
      if (groupValues[trans.secondaryCategory] === undefined) {
        groupValues[trans.secondaryCategory] = {
          ...trans,
          transactionAmount: trans.transactionAmount,
          secondaryCategory: trans.secondaryCategory,
        }
      } else {
        groupValues[trans.secondaryCategory].transactionAmount += trans.transactionAmount
      }
    })
  return Object.values(groupValues)
}

  
export const groupDataByTertiaryCategory = <T extends {tertiaryCategory: string; transactionAmount: number}>
  (transactions: T[]): T[] => {
  let groupValues: {[key: string]: T} = {}
    transactions.forEach((trans) => {
      if (groupValues[trans.tertiaryCategory] === undefined) {
        groupValues[trans.tertiaryCategory] = {
          ...trans,
          transactionAmount: trans.transactionAmount,
          secondaryCategory: trans.tertiaryCategory,
        }
      } else {
        groupValues[trans.tertiaryCategory].transactionAmount += trans.transactionAmount
      }
    })
  return Object.values(groupValues)
}