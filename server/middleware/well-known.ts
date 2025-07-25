export default defineEventHandler((event) => {
    if (event.req.url?.startsWith('/.well-known/')) {
        return '' // 或直接 return send(event, 'text/plain', '')
    }
})
