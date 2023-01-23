type AfterArgs = {
  args: { searchResult: ProductSearchResult; params: SearchParams }
}

export default async function after(
  _: unknown,
  { args }: AfterArgs,
  __: Context
): Promise<ProductSearchResult> {
  // This is just an example. Change the implementation of this function however you like :)

  console.log(`after`)
  console.log({ args })

  // revert products order
  // args.searchResult.products.reverse()

  return args.searchResult
}
