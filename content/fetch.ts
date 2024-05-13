export const contentGqlFetcher = async (query: string, variables = {}, preview = false) => {
    const res = await 
    fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/explore?access_token=${process.env.CONTENTFUL_SPACE_ID}`, 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': preview? `Bearer ${process.env.CONTENTFUL_PREVIEW_TOKEN}` : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
        },
        body: JSON.stringify({query, variables})
    })

    const {data, errors} = await res.json()
    // with graphql it'll always be 200 so don't need to check status code
    if(errors){
        // do something
        console.log(errors)
        throw new Error('Failed to get content')
    }
    return data
}