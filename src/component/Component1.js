export default function component1() {
    let name = "Mike"

    function changeName() {
        name = name === "Mike" ? "Jane" : "Mike";
        document.getElementById("name").innerText = name;
    }
    return (<>
        <h1>state</h1>
        <h2>컴포넌트의 속성값</h2> 
        <h3 id="name">{name}</h3>
        <button onClick={changeName}> 클릭</button>
    </>);
}