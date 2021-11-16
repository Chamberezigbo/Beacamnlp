"strict mode"

export const inputtedData = () => {
    document.querySelector('#sentence').addEventListener('change', (e) => {
        inputtedData = e.target.value;
    })
}

