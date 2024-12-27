const getData = async () => {
    const fetchData = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
    const data = await fetchData.json();
    return data;
};

export default getData;