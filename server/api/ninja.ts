export default defineEventHandler(async (event) => {
    const { name } = getQuery(event)
    const {role} = await readBody(event)
    return {
        message: `Hello, ${name}! You are a ${role}`,
    }
})

// function useQuery(event: H3Event<EventHandlerRequest>): { name: any } {
//     const url = new URL(event.req.url, `http://${event.req.headers.host}`)
//     const name = url.searchParams.get('name')
//     return { name }
// }