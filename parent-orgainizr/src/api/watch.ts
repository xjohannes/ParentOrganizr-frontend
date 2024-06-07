export async function getWatches() {
    // Fetch data from an external API endpoint
    const res = await fetch('http://localhost:8080/watches')
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json();
}
