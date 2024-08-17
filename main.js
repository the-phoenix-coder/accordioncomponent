const containers = document.querySelectorAll('.qa_container')

containers.forEach(container =>
{
    container.addEventListener('click', () =>
{
    const open = container.querySelector('.open')
    const close = container.querySelector('.close')
    const p = container.querySelector('p')
    open.addEventListener('click', () =>
        {
            hideAll()
            showP(p)
            open.style.display = 'none'
            close.style.display = 'inline-block'
        })
        close.addEventListener('click', () =>
        {
            hideP(p)
            close.style.display = 'none'
            open.style.display = 'inline-block'
        })
    })
})

function showP(p)
{
    p.style.display = 'block'
}
function hideP(p)
{
    p.style.display = 'none'
}
function hideAll()
{
    containers.forEach(container =>
    {
        container.querySelector('p').style.display = 'none'
        container.querySelector('.close').style.display = 'none'
        container.querySelector('.open').style.display = 'inline-block'
    })
}