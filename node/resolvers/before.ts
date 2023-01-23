export default async function before(
  _: unknown,
  args: SearchParams,
  __: Context
): Promise<SearchParams> {
  // This is just an example. Change the implementation of this function however you like :)

  console.log(`before`)
  console.log({ args })

  if (args.query === 'shoes') {
    const myDynamicRules: DynamicRule[] = [
      {
        action: 'promote',
        type: 'id',
        value: '1',
      },
    ]

    return { ...args, dynamicRules: myDynamicRules }
  }

  return args
}
