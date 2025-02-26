


export async function load({ fetch }){

    const res = await fetch('https://syntax.fm/api/shows/latest')
    const all_ep_res = await fetch('https://syntax.fm/api/shows')
    const data = await res.json()
    console.log('data : ', data)
    const all_ep_data = await all_ep_res.json()
    console.log('episodes data: ', all_ep_data )

    return {
        latest_episode: data,
        all_episodes : all_ep_data
    }

}