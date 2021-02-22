$(() => {
    const repos = $.getJSON("storage/repos.json")

    export default { repos }   
})